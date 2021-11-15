require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();
const Book = require("./models/book.model");

const PORT = 3000;

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => console.log(err));

// SET THE TEMPLATE ENGINE
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
// REGISTER THE PARTIAL
hbs.registerPartials(__dirname + "/views/partials");

// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static("public"));

// Middleware for parsing the json and form-data requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
// GET   /books/add - Renders the page with the form
app.get("/books/add", (req, res) => {
  res.render("books-add-view");
});

// POST   /books/add  - Receive the data from the form
app.post("/books/add", (req, res) => {
  console.log("req.body", req.body); // Data from the POST form

  Book.create(req.body)
    .then((createdBook) => {
      // res.redirect("/"); // Redirect to the home page
      res.redirect(`/books/details/${createdBook._id}`); // Redirect to book details page
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET  /   -  Renders a home page with the search GET form
app.get("/", (req, res) => {
  res.render("index");
});

// GET /search?bookTitle=str&bookRating=str
app.get("/search", (req, res) => {
  console.log(`req.query`, req.query); // URL query values
  // Get the title to search by for the book
  const bookTitle = req.query.bookTitle; // Grab the value from the query

  // Call the DB and find all books that match the title
  // Book.find({ title: bookTitle })  // find books with the exact title

  Book.find({ title: { $regex: bookTitle, $options: "i" } }).then(
    (foundBooks) => {
      console.log(`foundBooks`, foundBooks);
      // Render the page and display the found books list
      res.render("books-list-view", { booksList: foundBooks });
    }
  );
});

// GET   /books/details/:bookId
app.get("/books/details/:bookId", (req, res) => {
  console.log(`req.params`, req.params);

  const bookId = req.params.bookId;

  Book.findById(bookId).then((oneBook) => {
    res.render("book-details-view", { book: oneBook });
  });
});

// 404 page fallback route

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
