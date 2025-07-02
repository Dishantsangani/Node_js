require("dotenv").config();
const Connection = require("./Database/Connection");
const express = require("express");
const filerouter = require("./Routes/userRoutes");
const app = express();
const port = process.env.PORT;

// Database
Connection();

// Routing
app.use(express.json());

app.use("/auth", filerouter);

app.listen(port, () => {
  console.log(`Server Strted At ${port}`);
});
