var p1 = {
	x: 20,
	y: 20
};

var p2 = {
	x: 40,
	y: 40
};

// angle in radians
var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);

// angle in degrees
var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
