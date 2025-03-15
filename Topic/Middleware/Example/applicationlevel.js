const express = require("express");
const app = express();

const resfilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("provide age ");
  } else if (req.query.age < 18) {
    res.send("not access age ");
  } else {
    next();
  }
};

app.use(resfilter);

app.get("/", (req, res) => {
  res.send("This is a Middleware");
});

app.get("/user", (req, res) => {
  res.send("This is a user page");
});
app.listen(2700);
