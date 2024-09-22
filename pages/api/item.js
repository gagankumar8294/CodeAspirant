import connectToMongoDB from "@/lib/mongodb";

export default async function handler(req, res) {
    try {
        const db = await connectToMongoDB();

        switch (req.method) {
            case 'GET':
                // Fetch items from the collection
                const items = await db.collection('items').find({}).toArray();
                res.status(200).json({ success: true, data: items });
                break;

            case 'POST':
                // Add new item to the collection
                const newItem = req.body;
                await db.collection('items').insertOne(newItem);
                res.status(201).json({ success: true, message: 'Item added successfully' });
                break;

            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}