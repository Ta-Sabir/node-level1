const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const MyData = require("./models/mydataSchema");
app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});
app.get("/index.html", (req, res) => {
  res.send("<h1>yeeeeeeeeeeees</h1>")
});
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://talhaouisabir:SvkcvBVUOhhnOGeY@cluster0.89ftj68.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.post("/", (req, res) => {
  console.log(req.body);
  const mydata = new MyData(req.body);
  mydata
    .save()
    .then(() => {
      res.redirect("/index.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
