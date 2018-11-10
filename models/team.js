const mongoose = require('mongoose');

// Define the schema for our user model
const teamSchema = mongoose.Schema({
  name: String,
  value: Number,
 
  QB: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  RB: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  WR: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  TE: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  points: Number
});

module.exports = mongoose.model('Team', teamSchema);