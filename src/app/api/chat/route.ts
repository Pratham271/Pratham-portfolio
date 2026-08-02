import { google } from "@ai-sdk/google";
import { convertToModelMessages, smoothStream, streamText, type UIMessage } from "ai";

import { getPrathamSystemPrompt } from "@/lib/pratham-system-prompt";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_MESSAGES = 30;
const MAX_MESSAGE_LENGTH = 2_000;
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

type ChatRequestBody = { messages?: UIMessage[] };
type RateLimitEntry = { count: number; resetAt: number };

// ponytail: per-instance backstop; use Vercel Firewall or a shared store for global enforcement.
const rateLimits = new Map<string, RateLimitEntry>();

export async function POST(request: Request) {
  try {
    const retryAfter = checkRateLimit(request);
    if (retryAfter !== null) {
      return Response.json(
        { error: "Too many chat requests. Please try again shortly." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } },
      );
    }

    const body = (await request.json()) as ChatRequestBody;
    if (!Array.isArray(body.messages)) {
      return Response.json(
        { error: "The request must contain a messages array." },
        { status: 400 },
      );
    }

    const recentMessages = body.messages.slice(-MAX_MESSAGES);
    if (
      recentMessages.some(
        (message) =>
          !["user", "assistant"].includes(message.role) ||
          getMessageTextLength(message) > MAX_MESSAGE_LENGTH,
      )
    ) {
      return Response.json(
        { error: "A message was invalid or exceeded 2,000 characters." },
        { status: 413 },
      );
    }

    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: await getPrathamSystemPrompt(),
      messages: await convertToModelMessages(recentMessages),
      temperature: 0.5,
      experimental_transform: smoothStream({ chunking: "word", delayInMs: 20 }),
      onError: ({ error }) => console.error("Gemini streaming error:", error),
    });

    return result.toUIMessageStreamResponse({
      onError(error) {
        console.error("UI message stream error:", error);
        return "I ran into a temporary issue while generating that response.";
      },
    });
  } catch (error) {
    console.error("Chat route error:", error);
    return Response.json(
      { error: "The chat request could not be processed. Please try again shortly." },
      { status: 500 },
    );
  }
}

function getMessageTextLength(message: UIMessage) {
  return message.parts.reduce(
    (total, part) => total + (part.type === "text" ? part.text.length : 0),
    0,
  );
}

function checkRateLimit(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimits.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return null;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT
    ? Math.ceil((entry.resetAt - now) / 1_000)
    : null;
}
