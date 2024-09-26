import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://gagankumargk:20170213278@cluster0.u1rqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";  // URL to your local MongoDB instance

let client;
let clientPromise;

if (!client) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

const connectToMongoDB = async () => {
    const db = (await clientPromise).db('blogs');  // Connect to 'blogs' database
    return db;
};

export default connectToMongoDB;
