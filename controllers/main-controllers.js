const HttpError = require("../models/http-error");

exports.gtmDiagnostic = async (req, res, next) => {
  console.log("DATA RECEIVED");
  console.log("req.body", req.body);
};
