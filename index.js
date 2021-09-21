const express = require("express");
const app = express();
//config file
require("dotenv").config();
const { PORT } = require("./variables/globalVars");
const cors = require("cors");

const random = require("lodash.random");

//function with db
const { db_read, db_insert, db_update } = require("./db/db_func");
const { sendMail } = require("./service/mail_send");

app.use(cors());
app.use(express.json());

//variable to set code verification of login
let rand = null;

//search
// db_read(process.env.DB_NAME, "users", { nickname: "Eric" }).then((data) =>
//   console.log(data)
// );
//   .catch((err) => console.log(err));

//update example
// db_update(
//   process.env.DB_NAME,
//   "users",
//   { email: "w1nd1313@ukr.net" },
//   { nickname: "Abracham" }
// );

app.get("/show_data", (req, res) => {
  res.json({ message: rand });
});

app.post("/register_user", (req, res) => {
  const state = req.body;
  const { email } = state;
  const updateState = { ...state, isActive: false };
  rand = random(1111, 9999);

  db_read(process.env.DB_NAME, "users", { email }).then((data) => {
    if (data !== null) {
      res.json({ isExist: "exist" });
    } else {
      db_insert(process.env.DB_NAME, "users", updateState);
      res.json({ isExist: "success added" });
    }
  });

  // sendMail(email, rand);
});

app.listen(PORT, () => console.log(`server lister on port ${PORT}`));
