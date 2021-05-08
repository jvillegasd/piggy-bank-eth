const express = require("express");
const cors = require('cors')({origin: true});
const bodyParser = require("body-parser");
const mailer = require("./mailer.js");

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.status(200).json({ "message": "server is up!" });
});

app.post("/send", async (req, res) => {
  try {
    let email = req.body.email;
    let subject = "TRU test";
    let body = req.body.message;

    await mailer.sendMail(email, subject, body);
    res.status(200).json({ "message": "sended" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ "message": "internal server error" });
  }

});

app.listen(process.env.NODEJS_PORT, () => {
  console.log(`Server is up and listening on port: ${process.env.NODEJS_PORT}`);
});