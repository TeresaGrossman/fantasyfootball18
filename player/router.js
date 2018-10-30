var express = require('express');

var Player = require('../models/player');
var players = require('./controller')(Player);

var Team = require('../models/team');
var teams = require('../teams/controller')(Team);

var router = express.Router();

router.post('/', function(req, res) {
  var name = req.body.name;
  var position = req.body.position;
  var value = req.body.value;
  var player = players.create(name, position, value);

  player.save(function(err) {
    if (err) {
      res.status(500).json({
        err: err
      });
    }

    res.status(200).json({
      player: player
    });
  });
});

router.put('/:id', function(req, res) {
  players.findById(req.params.id).then(function(player) {
    Object.keys(req.body).forEach(function(key) {
      player[key] = req.body[key];
    });

    player.save(function(err) {
      teams.gatherPoints();
      if (err) {
        res.status(500).json({
          err: err
        });
      }

      res.status(200).json({
        player: player
      });
    });
  });
});

router.delete('/:id', function (req, res) {
  players.removeById(req.params.id).then(function() {
    res.status(200).json({
      status: 'Player with id ' + req.params.id + ' removed'
    });
  });
});

router.get('/', function(req, res) {
  players.findAll().then(function(players) {
    res.status(200).json(players);
  });
});

router.get('/QB', function(req, res) {
  players.findAllByPosition('QB').then(function(QB) {
    res.status(200).json(QB);
  });
});

router.get('/RB', function(req, res) {
  players.findAllByPosition('RB').then(function(RB) {
    res.status(200).json(RB);
  });
});

router.get('/WR', function(req, res) {
  players.findAllByPosition('WR').then(function(WR) {
    res.status(200).json(WR);
  });
});

router.get('/TE', function(req, res) {
  players.findAllByPosition('Attacker').then(function(TE) {
    res.status(200).json(TE);
  });
});

router.get('/:id', function(req, res) {
  players.findById(req.params.id).then(function(player) {
    res.status(200).json(player);
  });
});

module.exports = router;