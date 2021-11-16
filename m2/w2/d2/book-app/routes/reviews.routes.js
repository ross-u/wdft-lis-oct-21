const router = require('express').Router();
const Book = require('./../models/book.model');
const Review = require('./../models/review.model');


// POST      /reviews/:bookId/create
router.post('/reviews/:bookId/create', (req, res) => {
  const bookId = req.params.bookId;
  const { comment, score } = req.body; // -> { comment: '', score: ''}


  // 1. Create a new Review document
  Review.create({ comment, score })
    .then((createdReview) => {
      // 2. Update the Book document and add the review to the reviews array
      // Update the book document - push the review _id to the reviews array
      return Book.findByIdAndUpdate(bookId, { $push: { reviews: createdReview._id } })
    })
    .then(() => {
      // Redirect back to the same page to refresh the view
      res.redirect(`/books/details/${bookId}`);
    })
    .catch( (err) => console.log(err));

}) 

module.exports = router;