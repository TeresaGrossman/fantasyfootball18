const router = require("express").Router();
const gameRoutes = require("./games");
const newsRoutes = require("./news");
const injuriesRoutes = require("./injuries");
// const weatherRoutes = require("./weather");

// Game routes
router.use("/games", gameRoutes);
// Weather routes
// router.use("/weather", weatherRoutes);

//News Routes
router.use("/news", newsRoutes);

//Injuries Routes
router.use("/injuries", injuriesRoutes);

module.exports = router;
