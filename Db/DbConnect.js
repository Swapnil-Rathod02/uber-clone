const mongoose = require("mongoose");

function dbConnect() {
  mongoose
    .connect(process.env.DBLINK)
    .then((res) => console.log("connected to db"))
    .catch((err) => console.log("some error accured"));
}

module.exports = dbConnect;
