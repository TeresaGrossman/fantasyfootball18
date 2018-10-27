const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  user: { type: String, required: true },
  team: { type: String, required: true },
  players: String,
  date: { type: Date, default: Date.now }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
