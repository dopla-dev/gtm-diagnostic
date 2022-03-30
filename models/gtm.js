const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gtmSchema = new Schema({
  dataLayerData: {},
});

module.exports = mongoose.model("Gtm", gtmSchema);
