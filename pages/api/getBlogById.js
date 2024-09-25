import connectToMongoDB from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      const db = await connectToMongoDB();
      const blogPost = await db.collection('blogposts').findOne({ _id: new ObjectId(id) });

      if (!blogPost) {
        return res.status(404).json({ success: false, message: 'Blog not found' });
      }

      res.status(200).json(blogPost);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
