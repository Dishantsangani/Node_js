const fs = require("fs");
fs.writeFileSync("hello.js", "Hello Dishant");
console.log("-->>", __dirname);

// other way

const fs = require("fs").writeFileSync;
fs("hello.txt");
