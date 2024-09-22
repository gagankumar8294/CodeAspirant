// pages/api/getBlogs.js
import connectToMongoDB from "../../lib/mongodb";
import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToMongoDB();
      const database = client.db("blogs");
      const collection = database.collection("blogPosts");

      // Fetch all blogs
      const blogs = await collection.find({}).toArray();
      
      res.status(200).json({ blogs });
    } catch (error) {
      res.status(500).json({ message: "Error fetching blogs", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Only GET requests are allowed" });
  }
}
