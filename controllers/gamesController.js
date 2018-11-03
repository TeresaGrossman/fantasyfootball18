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
  // weather: function (req, res) {

  //   var fantasydata = require("../external/fantasydata.js");
  //   var url = "https://api.fantasydata.net/v3/nfl/pbp/JSON/PlayByPlay/2018REG/9/SF";

  //   fantasydata(url, function (data) {
  //     var returnValues = {
  //         forecastDescription: data.Score.ForecastDescription,
  //     };
  //     res.json(returnValues);
  //   })

  // },
  player: function (req, res) {

    
    var fantasydata = require("../external/fantasydata.js");
    var url = "https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2018REG/" + req.params.week_id + "/" + req.params.id;

    fantasydata(url, function (data) {
      var returnValues = {
          name: data.Name,
          passingTouchdowns: data.PassingTouchdowns,
          passingYards: data.PassingYards
      };
      res.json(returnValues);
    });

  }

};
