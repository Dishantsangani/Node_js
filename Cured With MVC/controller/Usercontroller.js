const User = require("../model/Usermodel");
async function getdata(req, res) {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

async function postdata(req, res) {
  try {
    const users = await User.create(req.body);
    return res.status(201).json({ message: "User Created", data: users });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

async function deletedata(req, res) {
  try {
    const users = await User.findByIdAndDelete(req.params.id);
    if (!users) {
      return res.status(404).json({ message: "User not found" }); // 👈 extra check
    }
    return res.json({ message: "User Deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
async function editdata(req, res) {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!users) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.json({ message: error });
  }
}

async function editwithpatchdata(req, res) {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!users) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({ message: "User Partially Updated", data: users });
  } catch (error) {
    return res.staus(500).json({ message: "Internal Server Error " });
  }
}

module.exports = { getdata, postdata, deletedata, editdata, editwithpatchdata };
