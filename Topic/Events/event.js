const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();
let count = 0;

event.on("countAPI", () => {
  count++;
  console.log("Event called", count);
});

app.get("/", (req, res) => {
  count++;
  res.send("api called");
  event.emit("countAPI");
  console.log("Event called", count);
});
app.get("/search", (req, res) => {
  res.send("search called");
});
app.listen(2700);
