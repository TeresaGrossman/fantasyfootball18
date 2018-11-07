const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/news"
router.route("/")
  .get(gamesController.news);

  module.exports = router;