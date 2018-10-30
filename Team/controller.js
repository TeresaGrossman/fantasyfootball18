module.exports = function(Team) {
    function create(name, formation, value, qb, rb, wr, te) {
      const newTeam = new Team();
      newTeam.name = name;
      newTeam.value = parseInt(value);
      newTeam.formation = formation;
      newTeam.QB= qb;
      newTeam.RB = rb;
      newTeam.WR = wr;
      newTeam.TE = te;
      newTeam.points = points;
  
      return newTeam;
    }
  
    function findByOwnerId(id) {
      return Team.findOne({
        owner: id
      })
        .populate('QB')
        .populate('RB')
        .populate('WR')
        .populate('TE').exec();
    }
  
    function findAll() {
      return Team.find({}).populate('owner').exec();
    }
  
    function gatherPoints() {
      Team.aggregate([{
        '$project': {
          'players': {
            '$setUnion': [
              '$QB',
              '$RB',
              '$WR',
              '$TE'
            ]
          }
        }
      }, {
        '$unwind': '$players'
      }, {
        '$lookup': {
          'from': 'players',
          'localField': 'players',
          'foreignField': '_id',
          'as': 'resultingArray'
        }
      }, {
        '$unwind': '$resultingArray'
      }, {
        '$group': {
          '_id': '$_id',
          'totalPoints': {
            '$sum': '$resultingArray.points'
          },
          'totalValue': {
            '$sum': '$resultingArray.value'
          }
        }
      }], function(err, result) {
        if (err) {
          console.log(err);
          return;
        }
  
        updateTeams(result);
      });
    }
  
    function findById(id) {
      return Team.findById(id)
        .populate('QB')
        .populate('RB')
        .populate('WR')
        .populate('TE').exec();
    }
  
    return {
      create: create,
      gatherPoints: gatherPoints,
      findByOwnerId: findByOwnerId,
      findAll: findAll,
      findById: findById
    };
  
    function updateTeams(results) {
      results.forEach((result) => {
        const teamPromise = Team.findById(result._id).exec();
        updateTeam(result, teamPromise);
      });
    }
    
    function updateTeam(result, teamPromise) {
      teamPromise.then((team) => {
        team.points = result.totalPoints;
        team.value = result.totalValue;
  
        team.save((err) => {
          if (err) {
            throw err;
          }
        });
      });
    }
  };