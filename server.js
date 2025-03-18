const express = require("express");

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello Noah!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
