const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/games"
router.route("/")
  .get(gamesController.findAll)
  .post(gamesController.create);

 // Matches with "/api/games/live 
 router.route("/live/")
 .get(gamesController.live);

 router.route("/team/:week_id/:id")
 .get(gamesController.team);
 
 // Matches with "/api/games/:id"
router
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);


module.exports = router;
