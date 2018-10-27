const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nflTeamSchema = new Schema({
  teamName: { type: String, required: true },
  teamCity: { type: String, required: true },
  //synopsis: String,
  //date: { type: Date, default: Date.now }
});

const NFLTeam = mongoose.model("NFLTeam", nflTeamSchema);

module.exports = NFLTeam;
