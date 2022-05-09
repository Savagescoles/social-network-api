const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");
// for user routes
router.use("/users", userRoutes);

// for thoughts routes
router.use("/thoughts", thoughtRoutes);

module.exports = router;