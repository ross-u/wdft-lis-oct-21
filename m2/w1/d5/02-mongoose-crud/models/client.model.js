const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payment = require("./../schemas/payment.schema");

// Create a schema
const clientSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  accountActive: { type: Boolean, default: true },
  balance: { type: Number, required: true },
  payments: [payment],
  // payments: { type: [payment]  }
});

// Create a model and pass it the schema
//                             Client    -->  clients
const Client = mongoose.model("Client", clientSchema);

// Export the model
module.exports = Client;
