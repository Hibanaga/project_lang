// //connection mongodb
const { MongoClient } = require("mongodb");
const { URI } = require("../variables/globalVars");
//connection mongodb
const client = new MongoClient(URI);

async function read_query(dbname, collection, query) {
  try {
    //connect
    await client.connect();
    const db = client.db(dbname);
    const coll = db.collection(collection);

    return await coll.findOne(query);
  } catch (err) {
    throw new Error("error to search");
  } finally {
    await client.close();
  }
}

async function insert_query(dbname, collection, data) {
  try {
    await client.connect();
    const db = client.db(dbname);
    const coll = db.collection(collection);
    await coll.insertOne(data);
  } catch (err) {
    throw new Error("error insert data");
  } finally {
    await client.close();
  }
}

module.exports = {
  db_read: read_query,
  db_insert: insert_query,
};
