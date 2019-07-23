const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addToCart: function(req, res) {
    db.Cart.create(req.body)
      .then(function(dbCart) {
        console.log(dbCart._id);
        return db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { carts: dbCart._id } },
          { new: true }
        );
      })
      .then(function(dbUser) {
        console.log(dbUser);
        // If we were able to successfully update an User, send it back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  findProducts: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => {
        db.Cart.find()
          .then(carts => {
            let userCarts = dbModel.carts;
            let productDetails = carts
              //  filtering to get carts that belongs to this user
              .filter(cart => userCarts.includes(cart._id))
              //  getting only the name and the price of the cart
              .map(cart => {
                return { name: cart.name, price: cart.price, id: cart._id };
              });
            res.json(productDetails);
          })
          .catch(err => {
            console.log(err);
            res.status(422).json(err);
          });
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  }
};
