const mongoose = require("mongoose");
const captainSchema = new mongoose.Schema({
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
    select: false,
  },

  phoneNumber: {
    type: Number,
    length: 10,
  },
  vehicleDetail: {
    vehicleType: {
      type: String,
      require: true,
    },
    vehicleNumber: {
      type: String,
      require: true,
    },
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  socketId: { type: String },
});

const Captain = mongoose.model("CaptainUser", captainSchema);
module.exports = Captain;
