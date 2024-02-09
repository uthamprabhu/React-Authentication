import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb://127.0.0.1:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database connected successfully!")
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}