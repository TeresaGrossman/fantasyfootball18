const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for our player model
const playerSchema = new Schema({
  playerId : { type:number , required:true},
  name: { type: String, required: true },
  team :{type: Schema.Types.ObjectId , ref: 'User'},
  position: { type: String, enum: ['QB', 'RB', 'WR', 'TE'] },
  value :{ type: number, required: true },
  status : {type:string , required:true}
});
const Player = mongoose.model("Player", gameSchema);

module.exports = Player;