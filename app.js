const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.sendFile("./src/home.html", { root: __dirname });
});

mongoose
  .connect(
    "mongodb+srv://talhaouisabir:SvkcvBVUOhhnOGeY@cluster0.89ftj68.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
