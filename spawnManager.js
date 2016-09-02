var spawnManager = {

    numberOfHarvesters: 2,
	spawn: 'Spawn1',
	
	cleanUpCreepMemory: function() {
		for(var name in Memory.creeps) {
			if(!Game.creeps[name]) {
				delete Memory.creeps[name];
				console.log('Clearing non-existing creep memory:', name);
			}	
		}
	},
	
    run: function(creep) {
		this.cleanUpCreepMemory();
		
		var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
		if(harvesters.length < this.numberOfHarvesters) {
			var newName = Game.spawns[this.spawn].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
			console.log('Spawning new harvester: ' + newName);
		}
    }
};

module.exports = spawnManager;