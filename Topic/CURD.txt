const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 2700;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));

// User Schema
const userSchema = new mongoose.Schema(
  {
    Todo: {
      type: String,
    },
    Tododetails: {
      type: String,
    },
  },
  { timestamps: true }
);

//  Model
const User = mongoose.model("User", userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API

// Create
app.post("/create", async (req, res) => {
  const body = req.body;
  const result = await User.create({
    Todo: body.Todo,
    Tododetails: body.Tododetails,
  });
  console.log("result: ", result);
  return res.status(201).json({ msg: "Success" });
});

// Read
app.get("/", async (req, res) => {
  const data = await User.find({});
  return res.send(data);
});

// Update
app.put("/:id", async (req, res) => {
  const data = await User.findByIdAndUpdate(req.params.id, {
    Todo: req.body.Todo,
    Tododetails: req.body.Tododetails,
  });
  console.log("data: ", data);
  return res.json({ status: "Sucess" });
});

// Delete
app.delete("/:id", async (req, res) => {
  let data = await User.findByIdAndDelete(req.params.id);
  console.log("deleted: ", data);
  return res.status(200).json({ msg: "Success" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
