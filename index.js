const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./Db/DbConnect");
const router = require("./Routes/user.Routes");
const captainRouter = require("./Routes/captain.Routes");
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", router);
app.use("/captain", captainRouter);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
