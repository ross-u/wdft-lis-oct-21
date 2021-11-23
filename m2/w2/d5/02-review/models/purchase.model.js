const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  shippingAddress: String,
  album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
  //                                                   Album  --> albums
});

const Purchase = mongoose.model("Purchase", albumSchema);

module.exports = Purchase;
