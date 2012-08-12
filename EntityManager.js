/**
 * @author CrashTheuniversE
 */
GW.EntityManager = function() {
	
	this.entities = [];
	this.properties = {};	
}

GW.EntityManager.prototype = { 
	
	constructor: GW.EntityManager, 
	
	update: function(dt) {
		
		for(var i = 0; i < this.entities.length; ++i) {
			this.entities[i].update(dt);	
		}
	},
	
	createEntity: function() {
		return new GW.Entity();
	} 
}