const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();
const port = 2700;

// Middleware
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ message: "File  uploaded" });
});

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
