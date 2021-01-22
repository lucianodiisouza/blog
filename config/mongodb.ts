import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI || "";
let dbname = process.env.MONGODB_DB;

let cachedClient: any = null;
let cachedDb: any = null;

if (!uri) {
  throw new Error(
    "Please define de MONGODB URI environment variable inside .env.local file"
  );
}

if (!dbname) {
  throw new Error(
    "Please dfine the MongoDB DB environment variable inside .env.local file"
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbname);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
