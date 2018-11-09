const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/ticker
router.route("/")
  .get(gamesController.ticker);

  module.exports = router;