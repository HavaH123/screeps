// screepsUtils.js

module.exports = {
	// spawn : which spawn (name) to create creep at. Eg : 'Spawn1'
	// creepArray : creep description array. Eg : [WORK, CARRY, MOVE]
	// creepName : 'Harvester1'
	
	createCreep: function(spawn, creepArray, creepName) { 
		Game.spawns[spawn].createCreep( creepArray, creepName );
	},
	spawnBasicHarvester: function(spawn) {
		this.createCreep(spawn, [WORK, CARRY, MOVE], 'Spawn'+new Date().getTime());
	},
	
};