import { getEmbeddingsCollection, getVectorStore } from "@/lib/astradb";
import { Redis } from "@upstash/redis";
import { JSONLoader } from "langchain/document_loaders/fs/json";
const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN,
});
async function generateEmbeddings(){
    await redis.flushdb()

    const vectorStore = await getVectorStore();

    (await getEmbeddingsCollection()).deleteMany({})

    const loader = new JSONLoader("../constants/data.json");
    const docs = await loader.load();
    console.log(docs)
}

generateEmbeddings().catch(console.error);
