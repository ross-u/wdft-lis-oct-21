const mongoose = require("mongoose");
const Client = require("./models/client.model");
const data = require("./data");

mongoose
  .connect("mongodb://localhost:27017/mongoose-crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .then(() => {
    const client1 = {
      name: "Bob",
      age: 25,
      accountActive: true,
      balance: 31000,
      payments: [],
    };

    // CREATE
    const pr = Client.create(client1);
    return pr;
  })
  .then((createdClient) => {
    console.log("createdClient", createdClient);

    // READ
    const pr = Client.findById(createdClient._id);
    return pr;
  })
  .then((retrievedClient) => {
    console.log(`retrievedClient`, retrievedClient);

    // CREATE MANY

    const pr = Client.insertMany(data);
    return pr;
  })
  .then((createdClients) => {});
