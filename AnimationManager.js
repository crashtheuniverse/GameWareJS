/**
 * @author CrashTheuniversE
 */
GW.AnimationManager = function() {

	this.controllersHead = null;	
}

GW.AnimationManager.prototype = { 
	
	constructor: GW.AnimationManager, 
	
	addController: function(c) {
		
		if(this.controllersHead)
		{
			c.prev = null;
			c.next = this.controllersHead; 
			this.controllersHead.prev = c;
			this.controllersHead = c;
		}
		else
		{
			c.prev = null; 
			c.next = null;
			this.controllersHead = c;
		}
	},
	
	update: function(dt) {
		
		var node = this.controllersHead;
		while(node) {
			
			node.update(dt);
			
			if(node.removeOnCompletion && node.complete) {
				
				if(node === this.controllersHead) {
					this.controllersHead = node.next;
				}
				else
				{
					node.prev.next = node.next;				
				}
			}
			
			node = node.next;
		}
	}
}