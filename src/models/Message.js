const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text_content: String,
}, );

module.exports = mongoose.model("Message", messageSchema);