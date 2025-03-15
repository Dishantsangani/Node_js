const http = require("http");

const myserver = http.createServer((req, res) => {
  console.log("New Req Rec.");
  res.end("hello From dishant");
});
myserver.listen(2700);
