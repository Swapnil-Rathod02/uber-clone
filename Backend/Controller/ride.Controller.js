const { validationResult } = require("express-validator");
const { create } = require("../Model/Captain.Model");
const { createRide, vehicleFare } = require("../Services/Ride.Services");
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
    return res.status(200).json({ ride });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
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
module.exports = { createRideController, getFaresController };
