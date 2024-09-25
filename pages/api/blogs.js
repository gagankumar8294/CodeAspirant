// pages/api/blogs.js (API route)
import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    
    // fetch blogs from the database
    const blogs = await db.collection('blogs').find().toArray();
    
    res.status(200).json(blogs);
    
    client.close();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default handler;