import OpenAI from 'openai';
import { createAI, createStreamableValue } from "ai/rsc";
import { getVectorStore } from '@/lib/pineconedb';
import { Redis } from "@upstash/redis";
import { UpstashRedisCache } from "@langchain/community/caches/upstash_redis";

let openai = new OpenAI({
    baseURL: 'https://api.groq.com/openai/v1', // Default value
    apiKey: process.env.GROQ_API_KEY,
});

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

interface ChatMessageProps {
    id: number;
    type: string;
    content?: string;
    userMessage: string;
    isStreaming: boolean;
  }

async function myAction(userMessage: string, prevMessages: ChatMessageProps[]): Promise<any>{
    "use server"
    const streamable = createStreamableValue({});

    (async ()=> {
      const cache = new UpstashRedisCache({
        client: redis,
      });

      const cachedResponse = await cache.lookup(userMessage,process.env.GROQ_API_KEY!)
      if (cachedResponse) {
        // If cached response exists, return it immediately
        console.log(cachedResponse)
        // streamable.update({ 'llmResponse': cachedResponse });
        // streamable.done({ status: 'done' });
        // return;
    }
        const vectorStore = await getVectorStore()

        const result = await vectorStore.similaritySearch(userMessage,4)
        console.log(result)
        const results = await vectorStore.similaritySearch(userMessage, 4);

        const formattedPrevMessages = prevMessages ? prevMessages.map((msg) => ({
            role: msg.type,
            content: msg.content,
            userMessage: msg.userMessage
          })) : [];

        const chatCompletion = await openai.chat.completions.create({
            messages: 
        [{
            role: "system",
            content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.`
        },
        {
            role: "user",
            content: `You are a chatbot, named Jarvis , for a personal portfolio website of Pratham Chauhan. You impersonate the website's owner. Use the following pieces of context (or previous conversaton if needed) to answer the question at the end. Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. Keep your tone friendly and make the conversation interesting and also just don't spit out the facts present it in a friendly manner.
            If you don't know the answer, just say you don't know. DO NOT try to make up an answer. DO NOT give the answer if it is not related to the context
            If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

            \n----------------\n
          
            PREVIOUS CONVERSATION:
          ${formattedPrevMessages.map((message) => {
              if (message.role === "user") return `User: ${message.userMessage}\n`;
              return `Assistant: ${message.content}\n`;
            })}
                
            \n----------------\n
            CONTEXT:
          ${results.map((r:any) => r.pageContent).join("\n\n")}
          
          USER INPUT: ${userMessage}`,
          
        },
        
    ],
    
    stream: true,
    model: "llama-3.3-70b-versatile",
    })
    let fullResponse = ''
    for await (const chunk of chatCompletion) {
        if (chunk.choices[0].delta && chunk.choices[0].finish_reason !== "stop") {
            console.log(chunk.choices[0].delta)
          streamable.update({ 'llmResponse': chunk.choices[0].delta.content });
          fullResponse += chunk.choices[0].delta.content;
        } else if (chunk.choices[0].finish_reason === "stop") {
          streamable.update({ 'llmResponseEnd': true });
          // const emptyGeneration:any = [];
          // const answer = emptyGeneration.concat({ content: fullResponse })
          // console.log(answer)
          // const response = await cache.update(userMessage, process.env.GROQ_API_KEY!, answer[0].content);
          // console.log(response)

        }
      }

      
      streamable.done({ status: 'done' });
    })();
    return streamable.value

}
const initialAIState: {
    role: 'user' | 'assistant' | 'system' | 'function';
    content: string;
    id?: string;
    name?: string;
  }[] = [];
  const initialUIState: {
    id: number;
    display: React.ReactNode;
  }[] = [];
  //  Export the AI instance
  export const AI = createAI({
    actions: {
      myAction
    },
    initialUIState,
    initialAIState,
  });