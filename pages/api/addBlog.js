// pages/api/addBlog.js
import connectToMongoDB from "../../lib/mongodb";
import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToMongoDB();
      const { title, content, createdAt } = req.body;

      // Connect to the database
      const database = client.db("blogs");
      const collection = database.collection("blogPosts");

      // Insert the blog into the collection
      const result = await collection.insertOne({
        title: title,
        content: content,
        createdAt: new Date(createdAt)
      });

      res.status(200).json({ message: "Blog added successfully", blogId: result.insertedId });
    } catch (error) {
      res.status(500).json({ message: "Error adding blog", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}
