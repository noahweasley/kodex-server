const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send(process.env.NODE_ENV);
  console.log(process.env.NODE_ENV)
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
