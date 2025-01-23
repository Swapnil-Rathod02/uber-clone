const { Server } = require("socket.io");
const Captain = require("./Model/Captain.Model");
const User = require("./Model/User.model");
const Ride = require("./Model/Ride.Model");
let io;

const captainSocket = {};
const usersocketId = {};
function socketInilization(server) {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    socket.on("join", async (data) => {
      const { userId, userType } = data;
      if (userId && userType == "user") {
        await User.findByIdAndUpdate(userId, { socketId: socket.id });
        usersocketId[userId] = socket.id;
      } else if (userId && userType == "captain") {
        captainSocket[userId] = socket.id;
        await Captain.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });

    socket.on("update-captain-location", async (data) => {
      const { userId, location } = data;

      if (!location || !location.lat || !location.lng) {
        return socket.emit("error", { message: "Invalid location" });
      }
      await Captain.findByIdAndUpdate(userId, {
        location: { lat: location.lat, lng: location.lng },
      });
    });

    //ride accepted by captain
    socket.on("accepted", async (data) => {
      const { captainId, passangerId, tripId } = data;
      if (passangerId) {
        const captain = await Captain.findById(captainId).select(
          "name phoneNumber vehicleDetail "
        );
        await Ride.findByIdAndUpdate(tripId, {
          status: "accepted",
          captain: captainId,
        });
        socket.to(usersocketId[passangerId]).emit("ride-confirmed", captain);
      }
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}

//sending notifications;
function sendNotications(captainId, ride) {
  if (io) {
    const socketId = captainSocket[captainId];
    io.to(socketId).emit("new-ride", ride);
  } else {
    console.log("io is not initialized");
  }
}

function rideStarted(socketId, ride) {
  if (io) {
    io.to(socketId).emit("ride-started", { ride: "started" });
  }
}
module.exports = { socketInilization, sendNotications, rideStarted };
