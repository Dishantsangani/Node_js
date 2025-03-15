const express = require("express");
const path = require("path");
const app = express();

const publicpath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.sendFile(`${publicpath}/index.html`);
});
app.get("/profile", (_, res) => {
  const user = {
    name: "Dishant sangani",
    age: 22,
    city: "Nikol",
    skills: ["React", "JS", "Java", "DevOps"],
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  res.render("login");
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicpath}/about.html`);
});
app.listen(2700);
