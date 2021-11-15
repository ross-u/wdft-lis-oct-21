require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./../models/book.model");

const books = [
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    rating: 10,
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling ",
    rating: 9,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 8,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 9,
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer ",
    rating: 10,
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    rating: 7,
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    rating: 8,
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    rating: 9,
  },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    rating: 10,
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    rating: 8,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    rating: 9,
  },
];

// SEED SEQUENCE
// 1. Connect to the DB
mongoose
  .connect(process.env.MONGODB_URI)
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
