const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany(); // removes all documents from one collection
    // mongoose.connection.db.dropDatabase(); //
  })
  .then(() => {
    // ITERATION 3
    // Run your code here, after you have insured that the connection was made
    return Recipe.insertMany(data);
  })
  .then((createdRecipes) => {
    console.log(`createdRecipes`, createdRecipes);

    // ITERATION 4
    return Recipe.findOneAndUpdate(
      // findByIdAndUpdate
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { new: true } // return the updated version of the document
    );
  })
  .then((updatedRecipe) => {
    console.log(`updatedRecipe`, updatedRecipe);
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
