const router = require("express").Router();
const booksController = require("../../controllers/gameController");

// Matches with "/api/books"
router.route("/")
  .get(gamesController.findAll)
  .post(gamesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(gamessController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;
