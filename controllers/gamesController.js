const db = require("../models");

// Defining methods for the gamesController
module.exports = {
  findAll: function (req, res) {
    db.Game
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Game
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Game
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Game
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Game
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  live: function (req, res) {

    var fantasydata = require("../external/fantasydata.js");
    var url = "https://api.fantasydata.net/v3/nfl/pbp/JSON/PlayByPlay/2018REG/9/SF";

    fantasydata(url, function (data) {
      var returnValues = {
          homeScore: data.Score.HomeScore,
          awayScore: data.Score.AwayScore,
          forecastDescription: data.Score.ForecastDescription,
          timeRemaining: data.Score.TimeRemaining,
          isOver: data.Score.IsOver,
          quarter: data.Score.Quarter,
          down: data.Score.Down,
          yardLine: data.Score.YardLine,
          lastUpdated: data.Score.LastUpdated
      };
      res.json(returnValues);
    });

  },

  player: function (req, res) {

    
    var fantasydata = require("../external/fantasydata.js");
    var url = "https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2018REG/" + req.params.week_id + "/" + req.params.id;

    fantasydata(url, function (data) {
      var returnValues = {
          name: data.Name,
          passingYards: data.PassingYards,
          passingTouchdowns: data.PassingTouchdowns
          
          
      };
      res.json(returnValues);
    });

    const team = [
      {
        playerId: 19330,
        name: "",
        position: 'QB'
      },
        {
        playerId: 6767,
        name: "",
        position: 'WR'
      },
      {
        playerId: 0,
        name: "",
        position: 'RB'
      }
    ] 
    const teamPlayers = []
    for (i=0;i<team.length;i++){
    
      let player = {}
    
      player.id = team[i].playerId
      
      teamPlayers.push(player)
    }
        
    console.log(teamPlayers)

  }
  

  


};
