const mongoose = require("mongoose");
async function Connection() {
  await mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Database Not Connected", err));
}
module.exports = Connection;
