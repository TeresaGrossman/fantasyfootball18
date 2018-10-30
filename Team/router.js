const express = require('express');

const Team = require('../models/team');
const teams = require('./controller')(Team);

const router = express.Router();

router.post('/', function(req, res) {
  const name = req.body.name;
  const formation = req.body.formation;
  const value = req.body.value;
  const points = req.body.points;
  const qb = req.body.QB;
  const rb = req.body.RB;
  const wr = req.body.WR;
  const te = req.body.TE;

  const newTeam = teams.create(
    name,
    formation,
    value,
    points,
    qb,
    rb,
    wr,
    te
  );

  newTeam.save(function(err) {
    if (err) {
      res.status(500).json({
        err: err
      });
    } else {
      res.status(200).json({
        team: newTeam
      });
    }
  });
});

router.get('/', function(req, res) {
  teams.gatherPoints();

  teams.findAll().then(function(ts) {
    res.json(ts);
  });
});

router.get('/:id', function(req, res) {
  teams.gatherPoints();

  teams.findById(req.params.id).then(function(team) {
    res.json(team);
  });
});

module.exports = router;