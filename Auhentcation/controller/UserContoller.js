const authentication = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function Createuser(req, res) {
  try {
    const { name, email, password } = req.body;
    if ((!name, !email, !password)) {
      return res.status(400).json({ message: "All Filed Required" });
    }

    const existinguser = await authentication.findOne({ email });
    if (existinguser) {
      return res.status(409).json({ message: "User Already Existed" });
    }

    const valid = await bcrypt.hash(password, 10);
    const NewUser = new authentication({ name, email, password: valid });
    await NewUser.save();
    return res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

async function Loginuser(req, res) {
  try {
    const { email, password } = req.body;
    const validateuser = await authentication.findOne({ email });
    if (!validateuser) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const ValidPassword = await bcrypt.compare(password, validateuser.password);
    if (!ValidPassword) {
      return res.status(400).json({ message: "Password Not Valid" });
    }
    const Token = jwt.sign({ id: validateuser._id }, process.env.JWTKEY, {
      expiresIn: "1h",
    });
    res.cookie("Token", Token, { httpOnly: true });
    return res.status(200).json({ message: "Login In", Token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
module.exports = { Createuser, Loginuser };
