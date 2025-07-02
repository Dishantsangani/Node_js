const mongoose = require("mongoose");

const Authentication = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const authentication = mongoose.model("authentication", Authentication);

module.exports = authentication;
