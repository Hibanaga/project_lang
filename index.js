const express = require("express");
const app = express();
//config file
require("dotenv").config();
const { PORT } = require("./variables/globalVars");
const cors = require("cors");

const random = require("lodash.random");

//function with db
const { db_read, db_insert } = require("./db/db_func");
const { sendMail } = require("./service/mail_send");

app.use(cors());
app.use(express.json());

//variable to set code verification of login
let rand = null;
// console.log(rand);

// db_read(process.env.DB_NAME, "users", { nickname: "Eric" }).then((data) =>
//   console.log(data)
// );
//   .catch((err) => console.log(err));

app.get("/show_data", (req, res) => {
  res.json({ message: rand });
});

app.post("/register_user", (req, res) => {
  const newUserData = req.body;
  const { email } = newUserData;

  rand = random(1111, 9999);

  // db_read(process.env.DB_NAME, "users", { email }).then((data) =>
  //   data != "null" ? db_insert(process.env.DB_NAME, "users", newUserData) : null
  // );
  sendMail(email, rand);

  res.json({ message: "lol it's worked" });
});

app.listen(PORT, () => console.log(`server lister on port ${PORT}`));
