const express = require("express");
const app = express();
require("dotenv").config();
const { PORT, URI } = require("./variables/globalVars");
const cors = require("cors");

//connection mongodb
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(express.json());

// const username = `hibana_main`;
// const password = `Zaxscd1212`;
// const cluster = `clusterprojectlang.jt1vg`;
// const dbname = `myFirstDatabase`;
// const PORT = process.env.PORT || 3001;
// const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_GLOBALNAME}?retryWrites=true&w=majority`;

// console.log(URI);

const client = new MongoClient(URI);

// async function run() {
//   try {
//     await client.connect();
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }

async function run() {
  let dbName = "projectLang";

  try {
    // let doc = {
    //   name: "etuman",
    // };
    // await col.insertOne(doc);

    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);
    const col = db.collection("users");

    const myDoc = await col.findOne({ nickname: "Eric" });

    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.get("/show_data", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => console.log(`server lister on port ${PORT}`));
