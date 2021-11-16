const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: {type: String, required: true},
  score: { type: Number, min: 1, max: 10, required: true },
});


//                             Review --> reviews
const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;