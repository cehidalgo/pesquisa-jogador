const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const connectAndReturnClient = async () => {
  return await MongoClient.connect(url);
}

const getDB = async () => {
  return await (await connectAndReturnClient()).db();
}

const disconnectDB = async () => await (await connectAndReturnClient()).close();

module.exports = { connectAndReturnClient, getDB, disconnectDB }