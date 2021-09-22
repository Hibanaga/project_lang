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

//control parser json()
app.use(cors());
app.use(express.json());

//variable to set code verification of login
let randArr = [];

app.get("/show_data", (req, res) => {
  res.json({ message: "lol" });
});

app.post("/register_user", (req, res) => {
  const state = req.body;
  const { email } = state;
  const updateState = { ...state, isActive: false };
  // rand = random(1111, 9999);

  randArr.push({
    email: email,
    code: random(1111, 9999),
  });

  const filtredRandArr = randArr.filter((item) => item.email === email);

  db_read(process.env.DB_NAME, "users", { email }).then((data) => {
    if (data !== null) {
      res.json({ isExist: "exist" });
    } else {
      db_insert(process.env.DB_NAME, "users", updateState);
      sendMail(email, filtredRandArr[0].code);
      res.json({ isExist: "success added" });
    }
  });
});

app.post("/verify_user", (req, res) => {
  const state = req.body;
  const { email, code } = state;

  const filtredRandArr = randArr.filter((item) => item.email === email);

  if (Number(filtredRandArr[0].code) === Number(code)) {
    //activate the account
    db_update(
      process.env.DB_NAME,
      "users",
      { email: email },
      { isActive: true }
    );

    //return to user clientID to redirect from homepage
    db_read(process.env.DB_NAME, "users", { email: email })
      .then((data) => {
        db_insert(process.env.DB_NAME, "activeUsers", {
          clientID: data.clientID,
        });

        res.json({
          message: "success",
          clientID: data.clientID,
        });
      })
      .then(() => {
        //search idx and later removed him from temp arr
        const idxSearch = randArr.indexOf(filtredRandArr[0]);
        //delete item from temp arr
        randArr.splice(idxSearch, 1);
      });
  } else {
    res.json({ message: "error" });
  }
});

app.post("/check_login", (req, res) => {
  const state = req.body;
  const { clientID } = state;

  // console.log(clientID);

  db_read(process.env.DB_NAME, "users", { clientID: clientID }).then((data) => {
    // console.log(data);
    if (data !== null) {
      res.json({ message: "success" });
    } else {
      res.json({ message: "error" });
    }
  });
});

app.listen(PORT, () => console.log(`server lister on port ${PORT}`));
