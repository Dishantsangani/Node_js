const fileSchema = require("../Model/UserModel");

const uploadfiles = async (req, res) => {
  try {
    const file = req.file;
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const newFile = new fileSchema({
      filename: file.originalname,
      contentType: file.mimetype,
      fileData: file.buffer, // ✅ from memory
    });
    await newFile.save(); // Save to MongoDB
    res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error("❌ Upload Error:", error); // <--- this will help debug
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const getfiles = async (req, res) => {
  try {
    const file = await fileSchema.findById(req.params.id);
    if (!file) {
      return res.status(404).json({ message: "File Not Found" });
    }
    res.set({
      "Content-Type": file.contentType,
      "Content-Disposition": `inline; filename="${file.filename}"`,
    });
    res.send(file.fileData);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
module.exports = { uploadfiles, getfiles };
