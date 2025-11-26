const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  text_content: String,
});

module.exports = mongoose.model("Session", sessionSchema);