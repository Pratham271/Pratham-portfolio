import { PremEmbeddings } from "@langchain/community/embeddings/premai";
import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from "@langchain/pinecone";
import { CohereEmbeddings } from "@langchain/cohere";

export async function getVectorStore(){
  const embeddings = new CohereEmbeddings({
    apiKey: process.env.COHERE_API_KEY, // In Node.js defaults to process.env.COHERE_API_KEY
    batchSize: 96, // Default value if omitted is 48. Max value is 96
  });
      
    const pineconeClient = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!
    });

    const index = pineconeClient.Index(process.env.PINECONE_INDEX_NAME!);

    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
        pineconeIndex: index,
        textKey: 'text',
      });
    
    return vectorStore
}


