import OpenAI from 'openai';
import { createAI, createStreamableValue } from "ai/rsc";
import { getVectorStore } from '@/lib/pineconedb';

let openai = new OpenAI({
    baseURL: 'https://api.groq.com/openai/v1', // Default value
    apiKey: process.env.GROQ_API_KEY,
});

interface ChatMessageProps {
    role: string;
    content?: string;
    isLoading?: boolean;
  }

async function myAction(userMessage: string, prevMessages: ChatMessageProps[]): Promise<any>{
    "use server"
    const streamable = createStreamableValue({});

    (async ()=> {
        const vectorStore = await getVectorStore()

        const result = await vectorStore.similaritySearch(userMessage,4)
        console.log(result)
        const results = await vectorStore.similaritySearch(userMessage, 4);

        const formattedPrevMessages = prevMessages ? prevMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })) : [];

        const chatCompletion = await openai.chat.completions.create({
            messages: 
        [{
            role: "system",
            content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.`
        },
        {
            role: "user",
            content: `You are a chatbot, named Jarvis , for a personal portfolio website of Pratham Chauhan. You impersonate the website's owner. Use the following pieces of context (or previous conversaton if needed) to answer the question at the end. Whenever it makes sense, provide links to pages that contain more information about the topic from the given context.
            If you don't know the answer, just say you don't know. DO NOT try to make up an answer. DO NOT give the answer if it is not related to the context
            If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

            \n----------------\n
          
            PREVIOUS CONVERSATION:
          ${formattedPrevMessages.map((message) => {
              if (message.role === "user") return `User: ${message.content}\n`;
              return `Assistant: ${message.content}\n`;
            })}
                
            \n----------------\n
            CONTEXT:
          ${results.map((r:any) => r.pageContent).join("\n\n")}
          
          USER INPUT: ${userMessage}`,
          
        },
        
    ],
    
    stream: true,
    model: "llama3-70b-8192",
    })

    for await (const chunk of chatCompletion) {
        if (chunk.choices[0].delta && chunk.choices[0].finish_reason !== "stop") {
            // console.log(chunk.choices[0].delta)
          streamable.update({ 'llmResponse': chunk.choices[0].delta.content });
        } else if (chunk.choices[0].finish_reason === "stop") {
          streamable.update({ 'llmResponseEnd': true });
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