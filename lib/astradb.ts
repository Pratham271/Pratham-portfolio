import { CohereEmbeddings } from "@langchain/cohere";
import { DataAPIClient } from '@datastax/astra-db-ts';
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection = process.env.ASTRA_DB_COLLECTION || "";
const embeddings = new CohereEmbeddings({
    apiKey: process.env.COHERE_API_KEY, // In Node.js defaults to process.env.COHERE_API_KEY
    batchSize: 48, // Default value if omitted is 48. Max value is 96
});

if (!token || !endpoint || !collection) {
    throw new Error(
      "Please set ASTRA_DB_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, and ASTRA_DB_COLLECTION environment variables.",
    );
}
const db = new DataAPIClient(token).db(endpoint);


export async function getVectorStore(){
    return AstraDBVectorStore.fromExistingIndex(
        embeddings,
        {
            token,
            endpoint,
            collection,
            collectionOptions: {
                vector: {
                    dimension: 1536,
                    metric: "cosine",
                },
            },
        },
    );
}

export async function getEmbeddingsCollection(){
    return db.collection(collection);
}
