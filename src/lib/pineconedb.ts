import { PremEmbeddings } from "@langchain/community/embeddings/premai";
import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from "@langchain/pinecone";


export async function getVectorStore(){
    const embeddings = new PremEmbeddings({
        // In Node.js defaults to process.env.PREM_API_KEY
        apiKey: process.env.PREM_API_KEY,
        // In Node.js defaults to process.env.PREM_PROJECT_ID
        project_id: 1744,
        model: "text-embedding-3-large", // The model to generate the embeddings
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


