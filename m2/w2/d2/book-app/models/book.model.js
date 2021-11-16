// models/book.model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: Number, default: 1 },
    reviews: [
      { type: Schema.Types.ObjectId, ref: "Review" }
    ]
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

//                           Book   --> books
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
