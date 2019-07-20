const router = require("express").Router();
const cartController = require("../../controllers/cartController");

// Matches with "/api/cart"
router
  .route("/")
  .get(cartController.findAll)
  .post(cartController.create);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove)
//   .post(usersController.addToCart);

module.exports = router;
