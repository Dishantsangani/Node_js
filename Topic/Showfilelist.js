const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "files");
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(dirpath + "/hello" + i + ".txt", "a simple textfile");
}
fs.readdir(dirpath, (err, files) => {
  files.forEach((files, errr) => {
    console.log(files);
  });
});
