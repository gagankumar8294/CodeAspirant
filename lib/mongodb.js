import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";  // URL to your local MongoDB instance

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
