const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minLength: [3, "must have at least three character"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    length: 10,
  },
  socketId: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
