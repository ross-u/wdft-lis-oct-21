require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./../models/book.model");

const books = [
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    rating: 10,
    reviews: []
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling ",
    rating: 9,
    reviews: []
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 8,
    reviews: []
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 9,
    reviews: []    
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer ",
    rating: 10,
    reviews: []    
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    rating: 7,
    reviews: []    
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    rating: 8,
    reviews: []    
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    rating: 9,
    reviews: []    
  },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    rating: 10,
    reviews: []    
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    rating: 8,
    reviews: []  
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    rating: 9,
    reviews: [] 
  },
];

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/book-app";

// SEED SEQUENCE
// 1. Connect to the DB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to the database!");
    // 2. Drop the DB
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    console.log("Database dropped!");

    return Book.create(books);
    // forwards the promise to the next `then`
  })
  .then((createdBooks) => {
    console.log(`Inserted ${createdBooks.length} books`); // Inserted 10 books

    return mongoose.connection.close();
  })
  .then(() => {
    console.log("Database connection closed!");
  })
  .catch((err) => {
    console.log(err);
  });
