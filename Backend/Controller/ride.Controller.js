const { validationResult } = require("express-validator");
const {
  createRide,
  vehicleFare,
  getCaptainsInRadius,
} = require("../Services/Ride.Services");
const { addressCoordinates } = require("../Services/Map.Service");
const { sendNotications, rideStarted } = require("../socket");
const User = require("../Model/User.model");
const Ride = require("../Model/Ride.Model");
const { response } = require("express");

const createRideController = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { pickup, destination, vehichleType } = req.body;
  try {
    const ride = await createRide({
      user: req.user._id,
      pickup,
      destination,
      vehichleType,
    });
    res.status(200).json({ ride });
    const { lat, lng } = await addressCoordinates(ride.pickup);
    const captains = await getCaptainsInRadius(lat, lng, 20);
    const user = await User.findById(req.user._id).select("name");

    captains.map((captain) => {
      sendNotications(captain.id, {
        passanger: user.name,
        ...ride,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error " });
  }
};

//getfares of all vehichles
const getFaresController = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { pickup, destination } = req.query;
  try {
    const fares = await vehicleFare(pickup, destination);
    return res.status(200).json({ fares });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

//getting start ride
const startRideController = async (req, res) => {
  const erros = validationResult(req);
  const { rideId, otp } = req.query;

  if (!erros.isEmpty()) {
    return res.status(400).json({ error: erros.array() });
  }
  try {
    const ride = await Ride.findById(rideId);
    if (!ride) {
      return res.status(400).json({ message: "ride is not created" });
    }
    if (ride.status != "accepted") {
      return res.status(400).json({ message: "ride is not accepted" });
    }
    if (ride.otp != otp) {
      return res.status(400).json({ message: "otp is not matched" });
    }
    const updateRide = await Ride.findByIdAndUpdate(rideId, {
      status: "ongoing",
    }).populate("user");

    res.status(200).json({ message: "ride started" });
    rideStarted(updateRide.user.socketId, updateRide);
  } catch (error) {
    console.log(error);
  }
};

//finish ride
const finishRideController = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    return res.status(400).json({ errors: error.array() });
  }

  const { rideId, status } = req.body;
  const { _id } = req.user;

  try {
    const response = await Ride.findOne({ _id: rideId, captain: _id });
    if (response.status == "ongoing" && status == "completed") {
      await Ride.findByIdAndUpdate(rideId, { status: "completed" });
      return res.status(200).send("Ok");
    } else if (response.status != "completed" && status == "cancelled") {
      await Ride.findByIdAndUpdate(rideId, { status: "cancelled" });
      return res.status(200).send("Ok");
    } else {
      return res.status(201).json({ message: "something went wrong" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createRideController,
  getFaresController,
  startRideController,
  finishRideController,
};
