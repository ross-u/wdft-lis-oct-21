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
    return mongoose.connection.db.dropDatabase();
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

    // CREATE MANY DOCUMENTS

    const pr = Client.insertMany(data);
    return pr;
  })
  .then((createdClients) => {
    // Client.find(); // returns all of the documents from the collection

    //  const pr = Client.find({ balance: { $gte: 3000 } });
    const pr = Client.find({ name: "Hoover Goodman" });
    return pr;
  })
  .then((foundClients) => {
    // .find() always returns an array
    console.log("foundClients", foundClients);

    // UPDATE
    // .findOneAndUpdate({query object}, {update values})
    const pr = Client.findByIdAndUpdate(
      foundClients[0]._id,
      { payments: [{ amount: 500 }, { amount: 1000 }] },
      { new: true }
    );

    return pr;
  })
  .then((updatedClient) => {
    console.log(`updatedClient`, updatedClient);

    // DELETE
    // .deleteMany({ query })
    // .findByIdAndDelete( id )
    const pr = Client.deleteOne({ name: "Maddox Leon" });
    return pr;
  })
  .then((result) => {
    console.log(`result`, result);
    return mongoose.connection.close();
  })
  .then(() => {
    console.log('connection closed!');
  })
  .catch((err) => {
    console.log(err);
  })
