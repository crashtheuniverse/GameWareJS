/**
 * @author CrashTheuniversE
 */
GW.AnimationController = function(target, property, value, time) {
	
	this.targetObj = target;
	this.targetProp = property;
	this.nv = value; 
	this.cv = target[property];
	this.t = time; 
	this.ct = 0.0; 
	
	var delta = this.nv - this.cv;
	this.slope = delta / time;
	this.complete = false; 
}

GW.AnimationController.prototype = { 
	
	constructor: GW.AnimationController, 
	
	update: function(dt) {

		if(this.complete) {
			return;
		}
		
		this.cv += this.slope * dt;
		this.ct += dt;
		
		if(this.ct >= this.t) {
			this.cv = this.nv;
			this.ct = this.time;
			this.complete = true;
		}
		
		this.targetObj[this.targetProp] = this.cv;
	}
}