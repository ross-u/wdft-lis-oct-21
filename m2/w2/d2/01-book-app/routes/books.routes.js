const router = require("express").Router();
const Book = require("./../models/book.model");

// ROUTES
// GET - Recieves the request from the GET form on the home page
router.get("/search", (req, res) => {
  const bookTitle = req.query.bookTitle; // coming from the query /search?bookTitle=str

  Book.find({ title: { $regex: bookTitle, $options: "i" } })
    .then((booksList) => {  // array with found books
      res.render('books-list-view', { booksList: booksList })
    })
    .catch( (err) => console.log(err));

});

// GET      /books/add  - Renders the POST form for adding a new book
router.get("/books/add", (req, res) => {
  res.render('books-add-view');
});

// POST      /books/add  - Receives the data from the POST form
router.post("/books/add", (req, res) => {
  const { rating, author, title, category } = req.body;

  // Check if user selected one value or multiple and normalize it
  let categoryArray;
  if (category && !Array.isArray(category)) {
    // if it is not an array, make it an array 
    categoryArray = [category];
  }
  else if (Array.isArray(category)) {
    // if it is an array, leave it as it is
    categoryArray = category;
  }

  // Book.create( { rating: rating, author: author, title: title } )
  Book.create({ title, author, rating, category })
    .then((createdBook) => {
      // Redirect to the page with the book details
      res.redirect(`/books/details/${createdBook._id}`);
    })
    .catch( (err) => console.log(err));

});

// GET      /books/details/:bookId
//          /books/details/6193a6e8bbc72e761ac80f2f
//          /books/details/6193a7c4da4573670c8da5b8

// router.get("/books/details/:bookId", async (req, res) => {
//   try {
//     const bookId = req.params.bookId;
//     const book = await Book.findById(bookId);
  
//     const copyrightsText = "C Uros C. 2021";
//     res.render('book-details-view', { book: book, copyrightsText: copyrightsText });
    
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/books/details/:bookId", (req, res) => {
  // req.params ->  used to get the values of the dynamic 
  // portion of the endpoint like :bookId
  // :bookId portion will be available req.params.bookId

  const bookId = req.params.bookId;
  Book
    .findById(bookId)
    .populate('reviews')
    .then((book) => {
      console.log('book', book);
      const copyrightsText = "C Uros C. 2021";
      // const data = {
      //   book: book,
      //   copyrightsText: copyrightsText
      // }
      // res.render('book-details-view', data );

      book.updatedReviews = book.reviews.reverse();

      res.render('book-details-view', { book: book, copyrightsText: copyrightsText } );
    })
    .catch( (err) => console.log(err));
});


// GET /books/:bookId/edit - Renders the edit book POST form
router.get('/books/:bookId/edit', (req, res) => {
  const bookId = req.params.bookId;

  Book.findById(bookId)
    .then((book) => {
      res.render('books-edit-view', { book: book } );
    })
    .catch( (err) => console.log(err));
})


// POST /books/:bookId/edit - Receives the request from the edit book form
router.post('/books/:bookId/edit', (req, res) => {
  const bookId = req.params.bookId;
  const { title, author, rating } = req.body;

  Book.findByIdAndUpdate(bookId, { title, author, rating }, { new: true })
    .then((updatedBook) => {
      res.redirect(`/books/details/${bookId}`);
    })
    .catch( (err) => console.log(err));
})


// POST   /books/:bookId/delete
router.post('/books/:bookId/delete', (req, res) => {
  const bookId = req.params.bookId;

  Book.findByIdAndRemove(bookId)
    .then((status) => {
      res.redirect('/')
    })
    .catch((err) => console.log(err));
})







module.exports = router;
