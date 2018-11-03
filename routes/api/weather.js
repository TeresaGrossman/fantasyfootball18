const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

 // Matches with "/api/games/live 
 router.route("/")
 .get(gamesController.weather);

 
module.exports = router;
