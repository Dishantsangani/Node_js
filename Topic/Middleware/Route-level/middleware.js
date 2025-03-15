module.exports = resfilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("provide age ");
  } else if (req.query.age < 18) {
    res.send("not access age ");
  } else {
    next();
  }
};
