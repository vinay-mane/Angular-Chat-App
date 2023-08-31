const { query } = require('express');

require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO // Update with your MongoDB connection string
const DB = 'ChatApp'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDB() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}

connectToDB();


async function insertDocument(database_name,collection_name,document) {
    try {
        const db = client.db(database_name);
        const collection = db.collection(collection_name);

    //     const document = {
    //     email: 'val1',
    //     password: 'value2',
    //       // Add more fields as needed
    //   };

      const result = await collection.insertOne(document);
      console.log('Document inserted->', result.insertedId);
      return {collection_id:result.insertedId}
  } catch (error) {
      console.error('Error inserting document', error);
  } finally {
    //   client.close();
  }
}
// insertDocument()

async function fetchDocuments(database_name,collection_name,query) {
    try {
        const db = client.db(database_name);
        const collection = db.collection(collection_name);

        // const query = {
        //     email:"value1",password:"value2"
        // };

        const documents = await collection.find(query).toArray();
        console.log('Fetched documents->', documents);
        return documents
    } catch (error) {
        console.error('Error fetching documents', error);
    } finally {
        // client.close();
    }
}

async function pushDocuments(database_name,collection_name,where,data) {
    try {
        const db = client.db(database_name);
        const collection = db.collection(collection_name);

        // const query = {
        //     email:"value1",password:"value2"
        // };

        const documents = await collection.updateOne(where,{ $push: data },{ upsert: true });
        console.log('Fetched documents->', documents);
        return documents
    } catch (error) {
        console.error('Error fetching documents', error);
    } finally {
        // client.close();
    }
}


module.exports={
  insertDocument:insertDocument,
  fetchDocuments:fetchDocuments,
  pushDocuments:pushDocuments
}