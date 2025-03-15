const express = require("express");
const resfilter = require("./middleware");

const app = express();
const route = express.Router();
// app.use();
// route.use(resfilter);
app.get("/", (req, res) => {
  res.send("This is a Middleware");
});

app.get("/user", (req, res) => {
  res.send("This is a user page");
});

route.get("/about", (req, res) => {
  res.send("This is a about page");
});

route.get("/contact", (req, res) => {
  res.send("This is a contact page");
});

app.use("/", route);
app.listen(2700);
