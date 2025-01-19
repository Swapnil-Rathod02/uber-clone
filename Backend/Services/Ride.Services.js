const Ride = require("../Model/Ride.Model");
const { getTimeAndDistance } = require("./Map.Service");
const crypto = require("crypto");
//get time and distance
const timeAndDistance = async (pickup, destination) => {
  if (!pickup || !destination) {
    throw new Error("Please provide both pickup and destination");
  }
  const timeDistance = await getTimeAndDistance(pickup, destination);
  const fareRates = {
    car: 10, // rate per km
    auto: 5, // rate per km
    bike: 3, // rate per km
  };

  const calculateFare = (distance, rate) => distance * rate;

  const distance = Number(timeDistance.distance.split(" ")[0]);
  const fares = {
    car: calculateFare(distance, fareRates.car),
    auto: calculateFare(distance, fareRates.auto),
    bike: calculateFare(distance, fareRates.bike),
  };

  return fares;
};
//genrate otp
const generateOtp = (nums) => {
  const otp = crypto
    .randomInt(0, Math.pow(10, nums))
    .toString()
    .padStart(nums, "0");

  return otp;
};

//create ride
const createRide = async ({ user, pickup, destination, vehichleType }) => {
  if (!user || !pickup || !destination || !vehichleType) {
    throw new Error("Please provide all the required fields");
  }
  try {
    const fare = await timeAndDistance(pickup, destination);

    const rideId = Math.floor(Math.random() * 1000000);
    const ride = await Ride.create({
      user,
      pickup,
      destination,
      otp: generateOtp(4),
      fare: fare[vehichleType],
    });

    return ride;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
module.exports = { createRide };
