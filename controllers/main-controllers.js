const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Gtm = require("../models/gtm");

exports.gtmDiagnostic = async (req, res, next) => {
  console.log("Receiving GTM diagnostic data");
  const data = req.body;
  console.log("Data", data);
  try {
    const doc = new Gtm({ dataLayerData: data });
    await doc.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Save failed, please try again later.", 500);
    return next(error);
  }

  res.status(200).json({ message: "Received" });
};
