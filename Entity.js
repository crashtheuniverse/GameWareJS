/**
 * @author CrashTheuniversE
 */
GW.Entity = function(spr) {
	this.sprite = spr;
	this.properties = {};	
}

GW.Entity.prototype = { 
	
	constructor: GW.Entity, 
	
	update: function(dt) {
		this.sprite.update(dt);
	}
}