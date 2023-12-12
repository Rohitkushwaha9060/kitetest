var dotenv = require("dotenv");
dotenv.config();
var express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Server is running",
  });
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
