const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 8080;
const dbConnect = require("./Db/DbConnect");
const userRouter = require("./Routes/user.Routes");
const captainRouter = require("./Routes/captain.Routes");
const mapRouter = require("./Routes/map.Routes");
const rideRouter = require("./Routes/ride.Routes");

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/captain", captainRouter);
app.use("/maps", mapRouter);
app.use("/rides", rideRouter);
app.listen(port, () => {
  console.log(`server started on number ${port}`);
});
