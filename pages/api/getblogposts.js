import connectToMongoDB from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToMongoDB();
      const blogPosts = await db.collection('blogPosts').find({}).toArray();
      res.status(200).json(blogPosts);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

