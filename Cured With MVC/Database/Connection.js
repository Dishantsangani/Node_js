const mongoose = require("mongoose");

function Connection() {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("Database Connected"))
    .catch(() => console.log("Database Not Connected"));
}

module.exports = Connection;
