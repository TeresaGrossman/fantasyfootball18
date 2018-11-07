import axios from "axios";

export default {
  // Gets all games
  getGames: function() {
    return axios.get("/api/games");
  },
  // Gets live games for FF 
  getLiveGames: function(week_id, id) {
    return axios.get("/api/games/live/" + week_id + "/" + id);
  },
  // Gets specific player by ID for that exact game
  getPlayer: function(week_id, id) {
    return axios.get("/api/games/player/" + week_id + "/" + id);
  },
  // Gets players on that team
  getTeam: function() {
    return axios.get("/api/games/team/");
  },
  // Gets the game with the given id
  getGame: function(id) {
    return axios.get("/api/games/" + id);
  },
  // Deletes the game with the given id
  deleteGame: function(id) {
    return axios.delete("/api/games/" + id);
  },
  // Saves a game to the database
  saveGame: function(gameData) {
    return axios.post("/api/games", gameData);
  },

  getNews: function(){
    return axios.get("/api/news");
  }
};
