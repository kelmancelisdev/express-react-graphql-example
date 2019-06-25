const { Schema, Model } = requiere("mongoose");

const BookSchema = new Schema({
  id: String,
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: { type: Number, min: 1945, max: 2019 },
  update_date: { type: Date, default: Date.now }
});

module.exports = Model("Book", BookSchema);
