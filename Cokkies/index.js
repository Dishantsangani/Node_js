const express = require("express");
const cookieParser = require("cookie-parser");
const fs = require("fs"); 
const app = express();
const port = 3000;

app.use(cookieParser());

app.get("/setcookie", (req, res) => {
  res.cookie("username", "dev", { maxAge: 900000, httpOnly: true });
  res.send("cookie Are seted");
});

app.get("/getcookie", (req, res) => {
  const cookies = req.cookies;
  res.send(`cookie are find ${JSON.stringify(cookies)}`);
});

app.get("/clearcookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookies Are Cleared");
});
// const fs = require("fs");

fs.unlink("demo.txt", (err, data) => {
  if (err) throw err;
  console.log("File created and data written!");
  console.log(data);
});

app.listen(port, () => {
  console.log("server started at ", port);
});
