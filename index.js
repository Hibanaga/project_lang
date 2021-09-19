const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = require("./variables/globalVars");
const cors = require("cors");
const nodemailer = require("nodemailer");

// async function main() {
//   let testAccount = await nodemailer.createTestAccount();

//   // let transporter = nodemailer.createTransport({
//   //   host: "smtp.ethereal.email",
//   //   port: 587,
//   //   secure: false, // true for 465, false for other ports
//   //   auth: {
//   //     user: "vladtyhoniuk1999@gmail.com", // generated ethereal user
//   //     pass: "Zaxscd1212", // generated ethereal password
//   //   },
//   // });

//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "vladtyhoniuk1999@gmail.com",
//       pass: "Zaxscd1212",
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <vladtyhoniuk1999@gmail.com>', // sender address
//     to: "pagliaccizeus@gmail.com", // list of receivers
//     subject: "Hello ✔ it's my", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

function send() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "iwiixyjxsruyokqyxv@sdvrecft.com",
      pass: "",
    },
  });

  let mailOptions = {
    from: "iwiixyjxsruyokqyxv@sdvrecft.com",
    to: "pagliaccizeus@gmail.com",
    subject: "send email without node.js",
    text: "lol it's work",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent" + info.response);
    }
  });
}

//function with db
const { db_read, db_insert } = require("./db/db_func");

app.use(cors());
app.use(express.json());

// db_read(process.env.DB_NAME, "users", { nickname: "Eric" }).then((data) =>
//   console.log(data)
// );
//   .catch((err) => console.log(err));

app.get("/show_data", (req, res) => {
  res.json({ message: "hello" });
});

app.post("/register_user", (req, res) => {
  const newUserData = req.body;
  const { email } = newUserData;

  send();

  // db_read(process.env.DB_NAME, "users", { email }).then((data) =>
  //   data != "null" ? db_insert(process.env.DB_NAME, "users", newUserData) : null
  // );
  res.json({ message: "lol it's worked" });
});

app.listen(PORT, () => console.log(`server lister on port ${PORT}`));
