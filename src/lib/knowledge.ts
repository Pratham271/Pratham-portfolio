import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

const KNOWLEDGE_FILES = [
  "index.md",
  "voice.md",
  "profile.md",
  "skills.md",
  "experience.md",
  "projects.md",
  "education.md",
  "books.md",
  "movies-and-series.md",
  "interests.md",
  "writing.md",
  "links.md",
  "boundaries.md",
] as const;

let cachedKnowledge: string | null = null;

export async function getPrathamKnowledge() {
  if (cachedKnowledge !== null) return cachedKnowledge;

  const directory = path.join(process.cwd(), "src/app/pratham-chat-knowledge");
  const documents = await Promise.all(
    KNOWLEDGE_FILES.map(async (filename) => {
      try {
        const contents = await readFile(path.join(directory, filename), "utf8");
        return `<knowledge-document name="${filename}">\n${contents.trim()}\n</knowledge-document>`;
      } catch (error) {
        console.error(`Could not load knowledge file: ${filename}`, error);
        throw new Error(`Missing required knowledge file: ${filename}`);
      }
    }),
  );

  cachedKnowledge = documents.join("\n\n");
  return cachedKnowledge;
}
