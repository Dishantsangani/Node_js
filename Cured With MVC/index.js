require("dotenv").config();
const express = require("express");
const Connection = require("./Database/Connection");
const userrouter = require("./Routes/Userroute");
const app = express();
const port = 2700;

// Database Connection
Connection();

app.use(express.json());

app.use("/auth", userrouter);

app.listen(port, () => {
  console.log(`Server Started At ${port}`);
});
