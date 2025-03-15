const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Dishant </h1>");
});

app.get("/about", (req, res) => {
  return res.send(
    `<h1> about page for ${req.query.name} and age is ${req.query.age} </h1>`
  );
});

const result = http.createServer(app);
result.listen(2700, () => console.log("Server is Start"));
  