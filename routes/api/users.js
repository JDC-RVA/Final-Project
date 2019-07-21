const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove)
  .post(usersController.addToCart);

router.route("/cart/:id").get(usersController.findProducts);

module.exports = router;
