const db = require("../models");
var fantasydata = require("../external/fantasydata.js");

// Defining methods for the gamesController Mongoose DB //
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

  news: function (req, res) {
    const url = "https://api.fantasydata.net/v3/nfl/stats/JSON/News?";
    fantasydata(url, function (data) {
      // const news = data.data;
      // const frontEndResponse = [];

      // for (let i = 0; i < news.length; i++) {
      //   let tempNewsObj = {};
      //   tempNewsObj.title = news[i].Title;

      //   // console.log(`Title: ${news[i].Title}`);
      //   // console.log(`Team: ${news[i].Team}`);
      //   // console.log(`Time Ago: ${news[i].TimeAgo}`);
      //   // console.log(`PlayerID: ${news[i].PlayerID}`);

      //   frontEndResponse.push(tempNewsObj);
      // }

      var returnValues = {
        data: data
      }

      res.json(returnValues);
    })
  },

  ticker: function (req, res) {
    const url = "https://api.fantasydata.net/v3/nfl/stats/JSON/News?";
    fantasydata(url, function (data) {
      // const news = data.data;
      // const frontEndResponse = [];

      // for (let i = 0; i < news.length; i++) {
      //   let tempNewsObj = {};
      //   tempNewsObj.title = news[i].Title;

      //   // console.log(`Title: ${news[i].Title}`);
      //   // console.log(`Team: ${news[i].Team}`);
      //   // console.log(`Time Ago: ${news[i].TimeAgo}`);
      //   // console.log(`PlayerID: ${news[i].PlayerID}`);

      //   frontEndResponse.push(tempNewsObj);
      // }

      var returnValues = {
        data: data
      }

      res.json(returnValues);
    })
  },
  
  injuries: function (req, res) {
    const url = "https://api.fantasydata.net/v3/nfl/stats/JSON/Injuries/2018reg/9?";
    fantasydata(url, function (data) {
      // const news = data.data;
      // const frontEndResponse = [];

      // for (let i = 0; i < news.length; i++) {
      //   let tempNewsObj = {};
      //   tempNewsObj.title = news[i].Title;

      //   // console.log(`Title: ${news[i].Title}`);
      //   // console.log(`Team: ${news[i].Team}`);
      //   // console.log(`Time Ago: ${news[i].TimeAgo}`);
      //   // console.log(`PlayerID: ${news[i].PlayerID}`);

      //   frontEndResponse.push(tempNewsObj);
      // }

      var returnValues = {
        data: data
      }

      res.json(returnValues);
    })
  },

  // Live API URL grabs general game stats
  live: function (req, res) {

    var fantasydata = require("../external/fantasydata.js");
    var url = "https://api.fantasydata.net/v3/nfl/pbp/JSON/PlayByPlay/2018REG/" + req.params.week_id + "/" + req.params.id;
    fantasydata(url, function (data) {
      var returnValues = {
        homeScore: data.Score.HomeScore,
        awayScore: data.Score.AwayScore,
        forecastDescription: data.Score.ForecastDescription,
        forecastTempLow: data.Score.ForecastTempLow,
        forecastTempHigh: data.Score.ForecastTempHigh,
        forecastWindChill: data.Score.ForecastWindChill,
        forecastWindSpeed: data.Score.ForecastWindSpeed,
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



  // Player API URL with loop to grab 6 players
  player: function (req, res) {

    var fantasydata = require("../external/fantasydata.js");
    var url = "https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2018REG/" + req.params.week_id + "/" + req.params.id;

    fantasydata(url, function (data) {
      console.log(data);

      var returnValues = {
        name: data.Name,
        position: data.Position,
        passingYards: data.PassingYards,
        passingTouchdowns: data.PassingTouchdowns,
        rushingYards: data.RushingYards,
        rushingTouchdowns: data.RushingTouchdowns,
        receivingYards: data.ReceivingYards,
        receivingTouchdowns: data.ReceivingTouchdowns

      };

      res.json(returnValues);

    });

  },


  // Team API URL 
  team: function (req, res) {

    var fantasydata = require("../external/fantasydata.js");
    var url = "https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByTeam/2018REG/9/TEN";
    // + req.params.week_id + "/" + req.params.id;
    fantasydata(url, function (data) {
      var returnValues = {
        gameKey: data.GameKey,
        name: data.Name,
        position: data.Position,
        passingYards: data.PassingYards,
        passingTouchdowns: data.PassingTouchdowns,
        rushingYards: data.RushingYards,
        rushingTouchdowns: data.RushingTouchdowns,
        receivingYards: data.ReceivingYards,
        receivingTouchdowns: data.ReceivingTouchdowns

      };
      res.json(returnValues);
    });
  }


}; //end module export










