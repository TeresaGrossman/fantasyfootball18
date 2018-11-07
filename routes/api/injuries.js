const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/injuries"
router.route("/")
  .get(gamesController.injuries);

  module.exports = router;