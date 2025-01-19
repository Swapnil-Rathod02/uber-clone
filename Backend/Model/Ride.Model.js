const mongoose = require("mongoose");
const Captain = require("./Captain.Model");

const RideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    isrequired: true,
  },
  Captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Captain",
  },
  pickup: {
    isrequired: true,
    type: String,
  },
  destination: {
    isrequired: true,
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "ongoing", "completed", "cancelled"],
    default: "pending",
    isrequired: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  rideId: {
    type: Number,
  },
  otp: {
    type: Number,
    selected: false,
  },
  payment: {
    paymentId: {
      type: String,
    },
    paymentType: {
      type: String,
      enum: ["cash", "upi"],
    },
    paymentAmout: {
      type: Number,
    },
  },
});

const Ride = mongoose.model("Ride", RideSchema);
module.exports = Ride;
