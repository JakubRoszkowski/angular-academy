const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/login", (req, res) => {
  const { login, password } = req.body;
  if (login === "login" && password === "password") {
    return res.status(200).send({ token: "123123" });
  } else {
    return res.status(400).send({
      message: "Wrong credentials!",
    });
  }
});

app.post("/api/permission", (req, res) => {
  if ((req.body.token = "123123")) {
    return res.status(200).send({ role: "user" });
  } else {
    return res.status(400).send({
      message: "Error!",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
