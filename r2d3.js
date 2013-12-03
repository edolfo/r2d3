function r2d3(){
	this.x = [];
	this.y = [];
}

r2d3.prototype = {
	setX: function(x){
		if (typeof x !== typeof []) { throw new TypeError('Error: setX(): x must be an array.'); }
		if (x.length === 0) { throw new RangeError('Error: setX(): x array must have length greater than 0.'); }
		try{ this.x = x; }
		catch (err){ console.error(err); }
	},
	setY: function(y){
		if (typeof y !== typeof []) { throw new TypeError('Error: setY(): y must be an array.'); }
		if (y.length === 0) {throw new RangeError('Error: setY(): y array must have length greater than 0.'); }
		try{ this.y = y; }
		catch (err) { console.error(err); }
	}
};