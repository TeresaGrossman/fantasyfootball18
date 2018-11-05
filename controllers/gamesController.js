const db = require("../models");

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
    
    const team = [
      {
        playerId: 4314,
        name: "",
        position: 'QB'
      },
      {
        playerId: 8355,
        name: "",
        position: 'WR'
      },
      {
        playerId: 15150,
        name: "",
        position: 'RB'
      },
      {
        playerId: 2593,
        name: "",
        position: 'QB'
      },
      {
        playerId: 13227,
        name: "",
        position: 'WR'
      },
      {
        playerId: 18995,
        name: "",
        position: 'RB'
      }
    ]
    // const teamPlayers = []
    // for (i = 0; i < team.length; i++) {

    //   let player = {}
    //   player.id = team[i].playerId
    //   teamPlayers.push(player)
    // }

    const teamPlayers = team.map((player) => {
      return {
        id: player.playerId,
        // name: player.name
      }

    })
    
    console.log(teamPlayers);
   
  },
// from fantasy datat API documentation //
    //   getPlayerGameStatsByPlayerPromise(season, week, playerid){
    //     var parameters = {};
    //     parameters['season']=season;
    //     parameters['week']=week;
    //     parameters['playerid']=playerid;
    //     return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsByPlayerID/2018REG/' + req.params.week_id + "/" + req.params.id
    // }


    

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


