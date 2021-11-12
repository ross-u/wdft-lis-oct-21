const mongoose = require("mongoose");
const Client = require("./models/client.model");
const data = require("./data");


async function runCode() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoose-crud", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    

    await mongoose.connection.db.dropDatabase();
    console.log('Database dropped!');

    const client1 = {
      name: "Bob",
      age: 25,
      accountActive: true,
      balance: 31000,
      payments: [],
    };

    // CREATE
    const createdClient = await Client.create(client1);
    console.log("createdClient", createdClient);
    
    
    const retrievedClient = await Client.findById(createdClient._id);
    console.log(`retrievedClient`, retrievedClient);

    const createdClients = await Client.insertMany(data);
    console.log(`createdClients`, createdClients);
    
    // .find() always returns and array, even if there is one result
    const foundClientsArr = await Client.find({ name: "Hoover Goodman" });
    const oneClient = foundClientsArr[0];

    const paymentsToAdd = [{ amount: 500 }, { amount: 1000 }];



    const updatedClient = await Client.findByIdAndUpdate(
      oneClient._id,
      { payments: paymentsToAdd },
      { new: true }
    );

    console.log(`updatedClient`, updatedClient);
    const result = await Client.deleteOne({ name: "Maddox Leon" });

    console.log(`result`, result);

    await mongoose.connection.close();
    console.log('connection closed!');
  } catch (err) {
    console.log(err);
  }
}


runCode();
