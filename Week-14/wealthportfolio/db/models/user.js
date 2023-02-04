const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 255
  }
});
const User = mongoose.model('User', userSchema);

module.exports = User;
