const ObjectID = require('mongodb').ObjectID;
const connection = require('../bin/db/connection');

const createUser = async (user) => {
  try {
    const results = await (await (connection.getDB()).collection('users').insertOne(user));
    console.log(results);
    return results.ops[0]
  } catch (e) {
    throw e
  }
}

const getUsers = async () => {
  try {
    const results = await (await (await connection.getDB()).collection('users').find()).toArray();
    console.log(results);
    return results;
  } catch (e) {
    throw e
  }
}

const findUserById = async (id) => {
  try {
    if (!ObjectID.isValid(id)) throw 'Invalid MongoDB ID.'
    const results = await (await connection.getDB()).collection('users').findOne(ObjectID(id));
    console.log(results);
    return results
  } catch (e) {
    throw e
  }
}

module.exports = { createUser, getUsers, findUserById }