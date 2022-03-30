// Mongoose
const mongoose = require("mongoose");

// Dotenv
require("dotenv").config();

const connect = async () => {
  console.log("connecting to db");
  let conn;
  try {
    conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db.connect.successful");
    return conn;
  } catch (err) {
    console.log("db.connect.error", err);
  }
};

const close = async () => {
  try {
    await mongoose.disconnect();
    console.log("db.disconnect.successful");
  } catch (err) {
    console.log("db.disconnect.error", { err });
  }
};

module.exports = { connect, close };
