require("dotenv").config();
const express = require("express");
const userrouter = require("./routes/UserRoute");
const Connection = require("./Database/Connection");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use("/auth", userrouter);

// Database
Connection();

// Port
app.listen(port, () => console.log(`Server Started At ${port}`));
