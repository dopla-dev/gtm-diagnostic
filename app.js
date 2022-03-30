///////////////////// IMPORTS ////////////////////////

const express = require("express");
const app = express.Router();

// Routes
const mainRoutes = require("./routes/main-routes");

// Custom error handling
const HttpError = require("./models/http-error");

///////////////////// ROUTES ////////////////////////

app.use("/api/main", mainRoutes);

// This middleware only runs on unsupported routes
app.use((req, res, next) => {
  const error = new HttpError("Unsupported route", 404);
  next(error);
});

// Error handling
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred." });
});

module.exports = app;
