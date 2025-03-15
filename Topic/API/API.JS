const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "applicationjson" });
    res.write(
      JSON.stringify({
        name: "Dishant Sangani",
        age: 22,
        Address: "Nikol",
        email: "Dishant@gmail.com",
      })
    );
    res.end();
  })
  .listen(2700);

// Other Way
const http = require("http");
const Data = require("./Data");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "applicationjson" });
    res.write(JSON.stringify(Data));
    res.end();
  })
  .listen(2700);
