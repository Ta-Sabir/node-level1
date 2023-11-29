const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const articleSchema = new Schema({
  usernameee: String,
});

// Create a model based on that schema
const MyData = mongoose.model("Mydataa", articleSchema);

// export the model
module.exports = MyData;
