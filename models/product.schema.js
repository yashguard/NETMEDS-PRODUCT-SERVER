const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  rating: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  image: [],
});

const covid = mongoose.model("covid", productSchema);

const diabities = mongoose.model("diabities", productSchema);

const surgicals = mongoose.model("surgicals", productSchema);

const treatments = mongoose.model("treatments", productSchema);

module.exports = { covid, diabities, surgicals, treatments };
