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
		if(this.sprite) {
			this.sprite.update(dt);
		}
	}
}