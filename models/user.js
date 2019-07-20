const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
