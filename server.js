///////////////////// IMPORTS ////////////////////////

// The express server
const express = require("express");

// The database
const db = require("./db");

// Once helper
const { once } = require("events");

// Routes
const indexRouter = require("./app");

// CORS
const cors = require("cors");

require("dotenv").config();

///////////////////// SERVER ////////////////////////

let connection;

const initialiseWebServer = async (customMiddleware) => {
  console.log("initialising web server");
  return new Promise((resolve, reject) => {
    const app = express();
    const PORT = process.env.PORT || 5000;
    const server_host = process.env.YOUR_HOST || "0.0.0.0";

    app.use(
      express.json({
        verify: (req, res, buf) => {
          req.rawBody = buf;
        },
      })
    );

    ///////////////////// ROUTING ////////////////////////

    // Add headers
    app.use(cors());

    // Custom middleware
    if (customMiddleware) {
      app.use(customMiddleware);
    }

    // App routes
    app.use("/", indexRouter);

    ///////////////////// DATABASE ////////////////////////

    connection = app.listen(PORT, server_host, () => {
      return new Promise((resolve, reject) => {
        db.connect().then(() => {
          return resolve();
        });
      });
    });
  });
};

const stopWebServer = async () => {
  await connection.close;
};

module.exports = { initialiseWebServer, stopWebServer };
