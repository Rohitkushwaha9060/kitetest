var dotenv = require("dotenv");
dotenv.config();
var express = require("express");

const app = express();

app.get("/", () => {
  return "Server Running";
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
