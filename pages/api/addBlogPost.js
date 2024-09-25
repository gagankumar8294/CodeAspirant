import connectToMongoDB from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const newBlogPost = {
      title,
      slug,
      content,
      createdAt: new Date(),
    };

    try {
      const db = await connectToMongoDB();
      const result = await db.collection('blogPosts').insertOne(newBlogPost);
      res.status(200).json({ success: true, blogId: result.insertedId });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
