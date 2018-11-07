const router = require("express").Router();
const gameRoutes = require("./games");
const newsRoutes = require("./news");
// const weatherRoutes = require("./weather");


// Game routes
router.use("/games", gameRoutes);
// Weather routes
// router.use("/weather", weatherRoutes);

router.use("/news", newsRoutes);

module.exports = router;
