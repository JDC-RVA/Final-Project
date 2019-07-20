const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  //   id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: Array, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
