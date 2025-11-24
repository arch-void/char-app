const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phone_number: String
});

module.exports = mongoose.model('User', userSchema);

