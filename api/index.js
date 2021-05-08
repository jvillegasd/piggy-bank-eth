const express = require("express");
const cors = require('cors')({origin: true});
const mailer = require("mailer");

const app = express();

app.use(cors);

app.get("/", async(req, res) => {
  res.status(200).json({ "message": "server is up!" });
});

app.post("/send", async (req, res) => {
  let email = req.body.email;
  let subject = "TRU test";
  let body = req.body.message;

  try {
    await mailer.sendMail(email, subject, body);
    res.status(200).json({ "message": "sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ "message": "internal server error" });
  }

});

app.listen(process.env.NODEJS_PORT, () => {
  console.log(`Server is up and listening on port: ${process.env.NODEJS_PORT}`);
});