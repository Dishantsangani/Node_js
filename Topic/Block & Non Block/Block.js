const fs = require("fs");
const os = require("os");

console.log("os: ", os.cpus().length);
// console.log("1");

// Blocking..
// const reult = fs.readFileSync("test.txt", "utf-8");
// console.log("reult : ", reult);

// Non -blocking
// fs.readFile("context.txt", "utf-8", (err, result) => {
//   console.log(result);
// });

// Default thread pool size = 4
// max
