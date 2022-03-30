const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gtmSchema = new Schema({
  dataLayerData: Schema.Types.Mixed,
});

module.exports = mongoose.model("Gtm", gtmSchema);
