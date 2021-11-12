const mongoose = require("mongoose");
const DB_NAME = "intro";

mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

// MODEL - model represents one collection in a database
// Create Model

//                          Cat  -> cats
const Cat = mongoose.model("Cat", {
  name: String,
  color: String,
});

// CREATE

Cat
  .create({ name: "Iron Kitty 2", color: "Ironhack deep blue " })
  .then((createdDocument) => {
    console.log(`createdDocument`, createdDocument);
  })
  .catch((err) => {
    console.log(err);
  });


// READ

/* 
Cat.find()
  .then((allDocuments) => {
    console.log(`allDocuments`, allDocuments);
  })
  .catch((err) => console.log(err));  
*/


// Model Dog                Dog   --> dogs
const Dog = mongoose.model("Dog", {
  name: String,
});

const catsArr = [
  { name: "marbles", color: "black" },
  { name: "fluffy", color: "white" },
  { name: "tiger", color: "orange and black" },
];

const dogsArr = [
  { name: "daish" },
  { name: "yoda" },
  { name: "sudo" }
];


const pr1 = Cat.insertMany(catsArr);
const pr2 = Dog.insertMany(dogsArr);

// OR resolve each query
// Cat.insertMany(catsArr)
//   .then( (data) => console.log(data))
//   .catch( (err) => console.log(err));



Promise.all([pr1, pr2])
  .then((values) => {
    console.log(`values`, values);
  })