const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gtmSchema = new Schema({
  dataLayerData: Schema.Types.Mixed,
  timestamp: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Gtm", gtmSchema);
