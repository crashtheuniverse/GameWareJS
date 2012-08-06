/**
 * @author CrashTheuniversE
 */

GW.Texture = function(img) { 
	
	var tex = this;
	this.image = img;
	this.ready = false;
	
	img.onload = function() { 
		tex.ready = true;
		tex.time = 0.0; 
		tex.currentFrame = 0; 
		tex.maxFrame = tex.image.width / tex.image.height;
		tex.overflow = false; 
		tex.size = tex.image.height;
	} 
}

GW.Texture.prototype = { 
	
	constructor: GW.Texture, 
	
	loaded: function() {
		this.ready = true;
	},
	
	update: function(dt) {
		
		if(!this.ready)
			return;
		 
		this.currentFrame += 1;
		this.overflow = false;
		if(this.currentFrame >= this.maxFrame)
		{
			this.currentFrame = 0;
			this.overflow = true;	
		}
	},
	
	draw: function(context, x, y) {
		
		if(!this.ready)
			return;
		
		context.drawImage(this.image, this.image.height * this.currentFrame, 0.0, this.image.height, this.image.height, 
							x - this.image.height * 0.5, y - this.image.height * 0.5, this.image.height, this.image.height); 
	}
}