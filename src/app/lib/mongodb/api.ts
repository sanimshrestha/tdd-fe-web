import { InsertOneResult } from "mongodb";
import clientPromise from "./mongodb";

const connectToDatabase = async () => {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB);
}
const insertOne = async (collectionName: string, data: any) => {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  try {
    const result:InsertOneResult<Document> = await collection.insertOne(data);
    console.dir(result);
    return result;
  } catch (error: any) {
    return error;
  }
}
export const subscribeToNewsletter = async (email: string) => {
  const result = await insertOne('newsletter-signups', { email });
  return result;
}