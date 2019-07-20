const router = require("express").Router();
const usersRoutes = require("./users");
const cartRoutes = require("./cart");

// User routes
router.use("/users", usersRoutes);
router.use("/cart", cartRoutes);
module.exports = router;
