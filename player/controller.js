module.exports = function(Player) {
    function create(name, position, value) {
      var player = new Player();
      player.id = parseInt(id);
      player.name = name;
      player.team = team;
      player.position = position;
      player.value = parseInt(value);
      player.status = status ;
    
      return player;
    }
  
    function findById(id) {
      return Player.findById(id).populate('owner').exec();
    }
  
    function removeById(id) {
      return Player.findByIdAndRemove(id).exec();
    }
  
    function findAllByPosition(position) {
      return Player.find({
        position: position
      }).populate('owner').exec();
    }
  
    function findAll() {
      return Player.find({}).populate('owner').exec();
    }
  
    return {
      create: create,
      findById: findById,
      removeById: removeById,
      findAllByPosition: findAllByPosition,
      findAll: findAll
    };
  };