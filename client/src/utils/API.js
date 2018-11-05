import axios from "axios";

export default {
  // Gets all games
  getGames: function() {
    return axios.get("/api/games");
  },
  getLiveGames: function(week_id, id) {
    return axios.get("/api/games/live/" + week_id + "/" + id);
  },
  getPlayer: function(week_id, id) {
    return axios.get("/api/games/player/" + week_id + "/" + id);
  },
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
  }
};
