/**
 * @author CrashTheuniversE
 */
GW.Sprite = function(texture) {
	
	this.x = 0.0; 
	this.y = 0.0;
	this.texture = texture;
	this.visible = true;
}


GW.Sprite.prototype = { 
	
	constructor: GW.Sprite, 
	
	update: function(dt) {
		this.texture.update(dt); 
	},
	
	draw: function(context) {
		if(this.visible) { 
			this.texture.draw(context, this.x, this.y);
		}		
	},
	
	pointIn: function(_x, _y) {
		
		var dx = Math.abs(_x - this.x); 
		var dy = Math.abs(_y - this.y); 
		
		if( (dx <= this.texture.image.width * 0.5) && (dy <= this.texture.image.height * 0.5) ) {
			return true;
		}
		
		return false;
	},
	
	setPosition: function(_x, _y) {
		this.x = _x; this.y = _y;	
	}
}