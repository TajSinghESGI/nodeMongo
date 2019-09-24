const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/data';
  // Database Name
  const dbName = 'data';
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the Server
    await client.connect();
    const db = client.db(dbName);

    const col = db.collection('dates');
    //console.log(col);

    let r = await db.collection('dates').insertOne({date: new Date()});
    //console.log(r)

    const docs = await col.find({}).toArray();
    console.log(docs);

  } catch (err) {
    console.log(err.stack);
  }

  client.close();
})();
