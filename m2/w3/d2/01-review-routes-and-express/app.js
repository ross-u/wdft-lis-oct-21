require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const Book = require("./models/book.model");

const app = express();
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

// MIDDLEWARE
// Handles access to the public folder
app.use(express.static("public"));

// To have access to `body` property in the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
app.use(cookieParser());

// ROUTES
app.get("/", (req, res) => {
  // res.json( { "name": "Yuri"} )
  // res.send("Hello world");

  // res.sendFile('./index.html');

  res.render("pages/index"); // --> hbs file rendered to html
});

// Renders the add book form
app.get("/books/add", (req, res) => {
  res.render("pages/books-add-view"); //
});

// POST /books/add
app.post("/books/add", (req, res) => {
  // req.body --> is an object with data from form inputs
  // req.body.title
  // req.body.author
  // req.body.rating

  Book.create({
    title: req.body.title,
    author: req.body.author,
    rating: req.body.rating,
  })
    .then((createdBook) => {
      res.redirect("/books");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/books", (req, res) => {
  Book.find()
    .then((allBooks) => {
      res.render("pages/books-list-view", { allBooks: allBooks });
    });
});

app.get("/books/search", (req, res) => {
  res.render("pages/books-search-view");
});

app.get("/search", (req, res) => {
  // req.query;  --> data coming from the GET form after ?
  // req.query.searchString

  Book.find({ title: req.query.searchString })
    .then((allBooks) => {
      res.render("pages/books-list-view", { allBooks: allBooks });
    });
});







app.get('/profile', isLoggedIn, (req, res) => {
  // req.session.user
  // Get user's id
  const userId = req.session.user._id;

  User.findById(userId)
    .then((foundUser) => {
      res.render('pages/profile')
    })
})





// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
