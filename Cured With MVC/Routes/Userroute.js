const {
  getdata,
  postdata,
  deletedata,
  editdata,
  editwithpatchdata,
} = require("../controller/Usercontroller");
const express = require("express");
const router = express.Router();

router.get("/getalldata", getdata);
router.post("/postalldata", postdata);
router.delete("/deletealldata/:id", deletedata);
router.put("/editalldata/:id", editdata);
router.patch("/editwithpatchalldata/:id", editwithpatchdata);

module.exports = router;
