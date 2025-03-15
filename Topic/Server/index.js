const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url}  New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Hello From Home Page");
        break;
      case "/about":
        res.end("I am Dishat Sangani");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});
myserver.listen(2700, () => console.log("Port Is Running on 2700"));
