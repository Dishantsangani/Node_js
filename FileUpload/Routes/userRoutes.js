const express = require("express");
const multer = require("multer");
const { uploadfiles, getfiles } = require("../Controller/UserController");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/uploadfile", upload.single("file"), uploadfiles);
router.get("/getfiles/:id", getfiles);
module.exports = router;
