import connectToMongoDB from "@/lib/mongodb";

export default async function handler(req, res) {
    try {
        const db = await connectToMongoDB();
        const blogs = await db.collection('posts').find({}).toArray();

        res.status(200).json({success: true, data: blogs});
    } catch (err) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}