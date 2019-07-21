const db = require("../models");

// Defining methods for the CartsController
module.exports = {
  findAll: function(req, res) {
    db.Cart.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Cart.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Cart.create(req.body)
      .then(function(dbCart) {
        console.log("cart");
        return db.User.findOneAndUpdate(
          { _id: req.params.id },
          { cart: dbCart._id },
          { new: true }
        );
      })
      .then(function(dbCart) {
        // console.log("Cart");
        // If we were able to successfully update an Cart, send it back to the client
        res.json(dbCart);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  update: function(req, res) {
    db.Cart.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Cart.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addToCart: function(req, res) {}
};
