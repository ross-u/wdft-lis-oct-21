const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payment = new Schema({
  date: { type: Date, default: Date.now },
  amount: { type: Number, default: 0 },
});

module.exports = payment;
