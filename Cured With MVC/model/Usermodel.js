const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  useremail: { type: String, required: true },
});

const User = mongoose.model("nodejs", userSchema);
module.exports = User;
