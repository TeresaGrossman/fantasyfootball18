const router = require("express").Router();
const gameRoutes = require("./games");
// const weatherRoutes = require("./weather");


// Game routes
router.use("/games", gameRoutes);
// Weather routes
// router.use("/weather", weatherRoutes);

module.exports = router;
