(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/blink.png?1478672896855", id:"blink"},
		{src:"images/build.png?1478672896855", id:"build"},
		{src:"images/city.jpg?1478672896855", id:"city"},
		{src:"images/cloud.png?1478672896855", id:"cloud"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.blink = function() {
	this.initialize(img.blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,395);


(lib.build = function() {
	this.initialize(img.build);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,554);


(lib.city = function() {
	this.initialize(img.city);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,500);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,607,187);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0.824)","rgba(0,0,0,0.498)","rgba(0,0,0,0.824)"],[0.145,0.478,0.816],-162.5,0,162.6,0).beginStroke().moveTo(-162.6,48.5).lineTo(-162.6,-48.5).lineTo(162.5,-48.5).lineTo(162.5,48.5).closePath();
	this.shape.setTransform(162.6,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.1,97);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFDD57").beginStroke().moveTo(-192.2,0.5).lineTo(-192.2,-0.5).lineTo(192.1,-0.5).lineTo(192.1,0.5).closePath();
	this.shape.setTransform(192.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,384.3,1.1);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3366CC").beginStroke().moveTo(-20.6,13.3).lineTo(-20.6,9.1).lineTo(-29.9,9.1).lineTo(-29.9,13.3).lineTo(-32.2,13.3).lineTo(-32.2,7).lineTo(-31.2,6.9).curveTo(-30.8,6.6,-30.5,6.2).lineTo(-29.9,5).curveTo(-29.7,4.2,-29.5,3).lineTo(-29.4,0.2).lineTo(-28.9,-13.1).lineTo(-19.5,-13.1).lineTo(-19.5,6.9).lineTo(-18.4,6.9).lineTo(-18.4,13.3).closePath().moveTo(-27.1,0.4).curveTo(-27.1,2.8,-27.5,4.3).curveTo(-27.7,5.9,-28.4,6.9).lineTo(-22.1,6.9).lineTo(-22.1,-11).lineTo(-26.7,-11).closePath().moveTo(-2.7,7.8).curveTo(-3.9,6.3,-3.8,3.9).lineTo(-3.8,-7.2).curveTo(-3.8,-8.3,-3.6,-9.4).curveTo(-3.5,-10.6,-2.8,-11.4).curveTo(-2.3,-12.3,-1.3,-12.9).curveTo(-0.3,-13.3,1.3,-13.3).curveTo(2.9,-13.4,3.9,-12.9).curveTo(5,-12.5,5.5,-11.6).curveTo(6.1,-10.7,6.3,-9.6).curveTo(6.4,-8.6,6.4,-7.2).lineTo(6.4,3.1).curveTo(6.4,6.1,5.3,7.7).curveTo(4,9.3,1.2,9.3).curveTo(-1.5,9.3,-2.7,7.8).closePath().moveTo(-0.2,-10.6).curveTo(-0.7,-10.2,-0.9,-9.5).curveTo(-1.2,-8.8,-1.3,-8.2).lineTo(-1.3,-6.9).lineTo(-1.3,3.9).lineTo(-1.2,4.9).curveTo(-1.1,5.5,-0.8,5.9).curveTo(-0.6,6.4,-0,6.8).curveTo(0.5,7,1.2,7).curveTo(2,7,2.6,6.7).curveTo(3,6.4,3.4,5.9).curveTo(3.7,5.4,3.7,4.8).lineTo(3.8,3.4).lineTo(3.8,-7.6).lineTo(3.8,-8.8).curveTo(3.7,-9.4,3.5,-9.9).curveTo(3.2,-10.4,2.7,-10.8).curveTo(2.1,-11.1,1.3,-11.1).curveTo(0.3,-11,-0.2,-10.6).closePath().moveTo(-43,7.8).curveTo(-44.1,6.3,-44.1,3.9).lineTo(-44.1,-7.2).curveTo(-44.1,-8.3,-43.9,-9.4).curveTo(-43.7,-10.6,-43.1,-11.4).curveTo(-42.5,-12.3,-41.5,-12.9).curveTo(-40.6,-13.3,-38.9,-13.3).curveTo(-37.3,-13.4,-36.3,-12.9).curveTo(-35.3,-12.5,-34.8,-11.6).curveTo(-34.2,-10.7,-34,-9.6).curveTo(-33.8,-8.6,-33.9,-7.2).lineTo(-33.9,3.1).curveTo(-33.9,6.1,-35,7.7).curveTo(-36.2,9.3,-39,9.3).curveTo(-41.7,9.3,-43,7.8).closePath().moveTo(-40.4,-10.6).curveTo(-40.9,-10.2,-41.2,-9.5).curveTo(-41.5,-8.8,-41.5,-8.2).lineTo(-41.5,-6.9).lineTo(-41.5,3.9).lineTo(-41.4,4.9).curveTo(-41.4,5.5,-41.1,5.9).curveTo(-40.8,6.4,-40.3,6.8).curveTo(-39.8,7,-39,7).curveTo(-38.2,7,-37.7,6.7).curveTo(-37.2,6.4,-36.9,5.9).curveTo(-36.6,5.4,-36.5,4.8).lineTo(-36.4,3.4).lineTo(-36.4,-7.6).lineTo(-36.5,-8.8).curveTo(-36.5,-9.4,-36.8,-9.9).curveTo(-37.1,-10.4,-37.6,-10.8).curveTo(-38.1,-11.1,-38.9,-11.1).curveTo(-40,-11,-40.4,-10.6).closePath().moveTo(47.6,9.1).lineTo(47.6,-13.1).lineTo(57.1,-13.1).lineTo(57.1,-10.8).lineTo(50.1,-10.8).lineTo(50.1,-3.4).lineTo(56.2,-3.4).lineTo(56.2,-1.1).lineTo(50.1,-1.1).lineTo(50.1,6.8).lineTo(57.1,6.8).lineTo(57.1,9.1).closePath().moveTo(35.9,9.1).lineTo(35.9,-13.1).lineTo(45.4,-13.1).lineTo(45.4,-10.8).lineTo(38.4,-10.8).lineTo(38.4,-3.4).lineTo(44.5,-3.4).lineTo(44.5,-1.1).lineTo(38.4,-1.1).lineTo(38.4,6.8).lineTo(45.4,6.8).lineTo(45.4,9.1).closePath().moveTo(29.9,9.1).lineTo(29.9,-1.2).lineTo(24.8,-1.2).lineTo(24.8,9.1).lineTo(22.3,9.1).lineTo(22.3,-13.1).lineTo(24.8,-13.1).lineTo(24.8,-3.4).lineTo(29.9,-3.4).lineTo(29.9,-13.1).lineTo(32.5,-13.1).lineTo(32.5,9.1).closePath().moveTo(9.5,9.1).lineTo(9.5,-13.1).lineTo(18.5,-13.1).lineTo(18.5,-10.8).lineTo(12,-10.8).lineTo(12,-4.2).lineTo(13.9,-4.2).curveTo(15.7,-4.2,16.9,-3.8).curveTo(18,-3.2,18.6,-2.4).curveTo(19.2,-1.5,19.5,-0.4).curveTo(19.7,0.9,19.7,2.3).curveTo(19.7,3.8,19.5,5.1).curveTo(19.2,6.3,18.6,7.2).curveTo(17.9,8.2,16.9,8.6).curveTo(15.8,9.1,14,9.1).closePath().moveTo(12,6.7).lineTo(13.8,6.7).curveTo(15,6.7,15.6,6.3).curveTo(16.3,6,16.6,5.4).curveTo(17.1,4.8,17.2,4.1).lineTo(17.3,2.4).lineTo(17.2,0.7).curveTo(17,0,16.7,-0.6).curveTo(16.3,-1.2,15.6,-1.5).curveTo(15,-1.9,13.8,-1.9).lineTo(12,-1.9).closePath().moveTo(-16.3,9.1).lineTo(-16.3,-13.1).lineTo(-11.7,-13.1).curveTo(-10.1,-13.2,-8.9,-12.7).curveTo(-7.9,-12.2,-7.2,-11.4).curveTo(-6.6,-10.5,-6.3,-9.4).curveTo(-6.1,-8.1,-6.1,-6.6).curveTo(-6.1,-5.1,-6.3,-3.9).curveTo(-6.6,-2.7,-7.2,-1.8).curveTo(-7.8,-0.9,-9,-0.4).curveTo(-10.1,0.1,-11.9,0.2).lineTo(-13.7,0.2).lineTo(-13.7,9.1).closePath().moveTo(-13.7,-2.2).lineTo(-12.1,-2.2).curveTo(-10.9,-2.2,-10.2,-2.5).curveTo(-9.5,-3,-9.1,-3.5).curveTo(-8.8,-4.1,-8.7,-4.9).lineTo(-8.6,-6.5).lineTo(-8.7,-8.2).curveTo(-8.8,-8.9,-9.1,-9.5).curveTo(-9.5,-10.2,-10.2,-10.5).curveTo(-10.8,-10.8,-12,-10.8).lineTo(-13.7,-10.8).closePath().moveTo(-49.8,9.1).lineTo(-49.8,-10.8).lineTo(-54.6,-10.8).lineTo(-54.6,9.1).lineTo(-57.2,9.1).lineTo(-57.2,-13.1).lineTo(-47.3,-13.1).lineTo(-47.3,9.1).closePath();
	this.shape.setTransform(57.9,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,-0.4,114.3,26.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#663300").beginStroke().moveTo(-4.8,11.1).lineTo(-4.8,-11.1).lineTo(4.8,-11.1).lineTo(4.8,-8.8).lineTo(-2.3,-8.8).lineTo(-2.3,-1.4).lineTo(3.8,-1.4).lineTo(3.8,1).lineTo(-2.3,1).lineTo(-2.3,8.8).lineTo(4.8,8.8).lineTo(4.8,11.1).closePath();
	this.shape.setTransform(117.3,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#663300").beginStroke().moveTo(-4.8,11.1).lineTo(-4.8,-11.1).lineTo(4.8,-11.1).lineTo(4.8,-8.8).lineTo(-2.3,-8.8).lineTo(-2.3,-1.4).lineTo(3.8,-1.4).lineTo(3.8,1).lineTo(-2.3,1).lineTo(-2.3,8.8).lineTo(4.8,8.8).lineTo(4.8,11.1).closePath();
	this.shape_1.setTransform(105.6,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#663300").beginStroke().moveTo(2.6,11.1).lineTo(2.6,0.8).lineTo(-2.6,0.8).lineTo(-2.6,11.1).lineTo(-5.1,11.1).lineTo(-5.1,-11.1).lineTo(-2.6,-11.1).lineTo(-2.6,-1.4).lineTo(2.6,-1.4).lineTo(2.6,-11.1).lineTo(5.1,-11.1).lineTo(5.1,11.1).closePath();
	this.shape_2.setTransform(92.3,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#663300").beginStroke().moveTo(-5.1,11.1).lineTo(-5.1,-11.1).lineTo(3.9,-11.1).lineTo(3.9,-8.8).lineTo(-2.6,-8.8).lineTo(-2.6,-2.2).lineTo(-0.7,-2.2).curveTo(1.1,-2.2,2.2,-1.7).curveTo(3.4,-1.2,4,-0.4).curveTo(4.6,0.5,4.9,1.7).curveTo(5.1,2.9,5.1,4.3).curveTo(5.1,5.8,4.9,7.1).curveTo(4.6,8.4,4,9.3).curveTo(3.3,10.2,2.2,10.6).curveTo(1.2,11.1,-0.6,11.1).closePath().moveTo(-2.6,8.7).lineTo(-0.8,8.7).curveTo(0.4,8.7,1,8.4).curveTo(1.7,8,2,7.5).curveTo(2.4,6.9,2.5,6.1).lineTo(2.6,4.4).lineTo(2.5,2.8).curveTo(2.4,2,2.1,1.4).curveTo(1.7,0.9,1,0.5).curveTo(0.3,0.2,-0.8,0.2).lineTo(-2.6,0.2).closePath();
	this.shape_3.setTransform(79.5,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#663300").beginStroke().moveTo(-4,9.8).curveTo(-5.1,8.3,-5.1,5.9).lineTo(-5.1,-5.1).curveTo(-5.1,-6.3,-4.9,-7.4).curveTo(-4.7,-8.5,-4.1,-9.4).curveTo(-3.6,-10.3,-2.6,-10.8).curveTo(-1.6,-11.3,0,-11.3).curveTo(1.7,-11.3,2.7,-10.9).curveTo(3.7,-10.4,4.2,-9.6).curveTo(4.8,-8.7,5,-7.6).curveTo(5.1,-6.5,5.1,-5.2).lineTo(5.1,5.1).curveTo(5.1,8.1,4,9.7).curveTo(2.8,11.3,-0,11.3).curveTo(-2.8,11.3,-4,9.8).closePath().moveTo(-1.5,-8.6).curveTo(-2,-8.1,-2.2,-7.5).curveTo(-2.5,-6.8,-2.5,-6.1).lineTo(-2.6,-4.9).lineTo(-2.6,5.9).lineTo(-2.5,6.9).curveTo(-2.4,7.5,-2.1,8).curveTo(-1.8,8.4,-1.3,8.8).curveTo(-0.8,9,-0,9).curveTo(0.8,9,1.3,8.7).curveTo(1.8,8.4,2.1,7.9).curveTo(2.4,7.4,2.5,6.8).lineTo(2.6,5.5).lineTo(2.6,-5.6).lineTo(2.5,-6.8).curveTo(2.4,-7.4,2.2,-7.9).curveTo(1.9,-8.4,1.4,-8.7).curveTo(0.9,-9,0,-9).curveTo(-1,-9,-1.5,-8.6).closePath();
	this.shape_4.setTransform(66.2,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#663300").beginStroke().moveTo(-5.1,11.1).lineTo(-5.1,-11.1).lineTo(-0.5,-11.1).curveTo(1.2,-11.1,2.3,-10.7).curveTo(3.3,-10.2,4,-9.4).curveTo(4.6,-8.5,4.9,-7.3).curveTo(5.1,-6.1,5.1,-4.5).curveTo(5.1,-3.1,4.9,-1.9).curveTo(4.6,-0.7,4,0.2).curveTo(3.4,1.1,2.2,1.7).curveTo(1.1,2.2,-0.8,2.2).lineTo(-2.6,2.2).lineTo(-2.6,11.1).closePath().moveTo(-2.6,-0.2).lineTo(-0.9,-0.2).curveTo(0.3,-0.2,1,-0.5).curveTo(1.7,-0.9,2,-1.5).curveTo(2.4,-2.1,2.5,-2.8).lineTo(2.6,-4.5).lineTo(2.5,-6.1).curveTo(2.4,-6.9,2,-7.5).curveTo(1.7,-8.1,1,-8.5).curveTo(0.3,-8.8,-0.8,-8.8).lineTo(-2.6,-8.8).closePath();
	this.shape_5.setTransform(53.7,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#663300").beginStroke().moveTo(4.6,13.2).lineTo(4.6,9).lineTo(-4.7,9).lineTo(-4.7,13.2).lineTo(-6.9,13.2).lineTo(-6.9,6.9).lineTo(-5.9,6.8).curveTo(-5.5,6.5,-5.2,6.1).lineTo(-4.6,4.8).curveTo(-4.4,4.1,-4.3,2.9).lineTo(-4.1,0.1).lineTo(-3.7,-13.3).lineTo(5.8,-13.3).lineTo(5.8,6.8).lineTo(6.9,6.8).lineTo(6.9,13.2).closePath().moveTo(-1.8,0.3).curveTo(-1.9,2.7,-2.2,4.2).curveTo(-2.4,5.8,-3.1,6.8).lineTo(3.2,6.8).lineTo(3.2,-11.1).lineTo(-1.4,-11.1).closePath();
	this.shape_6.setTransform(39.6,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#663300").beginStroke().moveTo(-4,9.8).curveTo(-5.1,8.3,-5.1,5.9).lineTo(-5.1,-5.1).curveTo(-5.1,-6.3,-4.9,-7.4).curveTo(-4.7,-8.5,-4.1,-9.4).curveTo(-3.6,-10.3,-2.6,-10.8).curveTo(-1.6,-11.3,0,-11.3).curveTo(1.7,-11.3,2.7,-10.9).curveTo(3.7,-10.4,4.2,-9.6).curveTo(4.8,-8.7,5,-7.6).curveTo(5.1,-6.5,5.1,-5.2).lineTo(5.1,5.1).curveTo(5.1,8.1,4,9.7).curveTo(2.8,11.3,-0,11.3).curveTo(-2.8,11.3,-4,9.8).closePath().moveTo(-1.5,-8.6).curveTo(-2,-8.1,-2.2,-7.5).curveTo(-2.5,-6.8,-2.5,-6.1).lineTo(-2.6,-4.9).lineTo(-2.6,5.9).lineTo(-2.5,6.9).curveTo(-2.4,7.5,-2.1,8).curveTo(-1.8,8.4,-1.3,8.8).curveTo(-0.8,9,-0,9).curveTo(0.8,9,1.3,8.7).curveTo(1.8,8.4,2.1,7.9).curveTo(2.4,7.4,2.5,6.8).lineTo(2.6,5.5).lineTo(2.6,-5.6).lineTo(2.5,-6.8).curveTo(2.4,-7.4,2.2,-7.9).curveTo(1.9,-8.4,1.4,-8.7).curveTo(0.9,-9,0,-9).curveTo(-1,-9,-1.5,-8.6).closePath();
	this.shape_7.setTransform(25.9,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#663300").beginStroke().moveTo(2.4,11.1).lineTo(2.4,-8.8).lineTo(-2.4,-8.8).lineTo(-2.4,11.1).lineTo(-4.9,11.1).lineTo(-4.9,-11.1).lineTo(4.9,-11.1).lineTo(4.9,11.1).closePath();
	this.shape_8.setTransform(12.7,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-6.4,120.6,39.1);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-40.8,20.2).lineTo(-40.8,18.3).lineTo(-44.9,18.3).lineTo(-44.9,20.2).lineTo(-45.8,20.2).lineTo(-45.8,17.4).lineTo(-45.4,17.4).lineTo(-45.1,17).lineTo(-44.9,16.5).lineTo(-44.6,15.7).lineTo(-44.6,14.4).lineTo(-44.4,8.6).lineTo(-40.3,8.6).lineTo(-40.3,17.4).lineTo(-39.8,17.4).lineTo(-39.8,20.2).closePath().moveTo(-43.6,14.5).curveTo(-43.6,15.5,-43.7,16.2).curveTo(-43.9,16.9,-44.2,17.4).lineTo(-41.4,17.4).lineTo(-41.4,9.5).lineTo(-43.5,9.5).closePath().moveTo(-39.7,17.8).lineTo(-39.1,17.4).lineTo(-38.7,16.7).curveTo(-38.5,16.3,-38.4,15.8).lineTo(-38.3,14.2).lineTo(-38.3,8.6).lineTo(-34.3,8.6).lineTo(-34.3,18.3).lineTo(-35.4,18.3).lineTo(-35.4,9.6).lineTo(-37.3,9.6).lineTo(-37.3,13.4).lineTo(-37.4,15.7).curveTo(-37.5,16.5,-37.8,17.1).curveTo(-38,17.6,-38.3,18).lineTo(-39.1,18.6).closePath().moveTo(57.8,17.7).curveTo(57.3,17.1,57.3,16).lineTo(57.3,11.2).lineTo(57.4,10.2).curveTo(57.5,9.7,57.7,9.3).curveTo(58,9,58.4,8.7).curveTo(58.9,8.4,59.5,8.5).curveTo(60.3,8.4,60.7,8.7).curveTo(61.2,8.8,61.4,9.3).curveTo(61.6,9.6,61.7,10.1).lineTo(61.8,11.2).lineTo(61.8,15.7).curveTo(61.8,17,61.3,17.7).curveTo(60.7,18.4,59.5,18.4).curveTo(58.4,18.4,57.8,17.7).closePath().moveTo(58.9,9.7).lineTo(58.5,10.2).lineTo(58.4,10.7).lineTo(58.4,11.3).lineTo(58.4,16).lineTo(58.4,16.5).lineTo(58.6,16.9).lineTo(59,17.3).curveTo(59.2,17.4,59.5,17.4).curveTo(59.9,17.4,60.1,17.3).lineTo(60.4,16.9).lineTo(60.7,16.4).lineTo(60.7,15.8).lineTo(60.7,11).lineTo(60.7,10.5).lineTo(60.5,10).curveTo(60.5,9.9,60.4,9.9).curveTo(60.4,9.8,60.4,9.8).curveTo(60.3,9.7,60.3,9.7).curveTo(60.2,9.7,60.1,9.6).curveTo(59.9,9.5,59.5,9.5).curveTo(59.1,9.4,58.9,9.7).closePath().moveTo(7.8,17.7).curveTo(7.3,17.1,7.2,16).lineTo(7.2,11.2).lineTo(7.3,10.2).curveTo(7.5,9.7,7.7,9.3).curveTo(8,9,8.4,8.7).curveTo(8.8,8.4,9.5,8.5).curveTo(10.3,8.4,10.6,8.7).curveTo(11.1,8.8,11.4,9.3).curveTo(11.6,9.6,11.6,10.1).lineTo(11.7,11.2).lineTo(11.7,15.7).curveTo(11.7,17,11.3,17.7).curveTo(10.7,18.4,9.5,18.4).curveTo(8.3,18.4,7.8,17.7).closePath().moveTo(8.8,9.7).lineTo(8.5,10.2).lineTo(8.4,10.7).lineTo(8.4,11.3).lineTo(8.4,16).lineTo(8.4,16.5).lineTo(8.6,16.9).lineTo(8.9,17.3).curveTo(9.2,17.4,9.5,17.4).curveTo(9.9,17.4,10,17.3).lineTo(10.4,16.9).lineTo(10.6,16.4).lineTo(10.6,15.8).lineTo(10.6,11).lineTo(10.6,10.5).lineTo(10.5,10).curveTo(10.4,9.9,10.4,9.9).curveTo(10.4,9.8,10.3,9.8).curveTo(10.3,9.7,10.2,9.7).curveTo(10.2,9.7,10.1,9.6).curveTo(9.9,9.5,9.5,9.5).curveTo(9.1,9.4,8.8,9.7).closePath().moveTo(-32.4,17.7).curveTo(-32.8,17.1,-32.8,16).lineTo(-32.8,11.2).lineTo(-32.7,10.2).curveTo(-32.6,9.7,-32.4,9.3).curveTo(-32.1,9,-31.8,8.7).curveTo(-31.3,8.4,-30.6,8.5).curveTo(-29.9,8.4,-29.4,8.7).curveTo(-29,8.8,-28.8,9.3).curveTo(-28.5,9.6,-28.4,10.1).lineTo(-28.3,11.2).lineTo(-28.3,15.7).curveTo(-28.3,17,-28.9,17.7).curveTo(-29.4,18.4,-30.6,18.4).curveTo(-31.8,18.4,-32.4,17.7).closePath().moveTo(-31.2,9.7).lineTo(-31.6,10.2).lineTo(-31.7,10.7).lineTo(-31.8,11.3).lineTo(-31.8,16).lineTo(-31.7,16.5).lineTo(-31.5,16.9).lineTo(-31.2,17.3).curveTo(-30.9,17.4,-30.6,17.4).curveTo(-30.2,17.4,-30,17.3).lineTo(-29.7,16.9).lineTo(-29.5,16.4).lineTo(-29.4,15.8).lineTo(-29.4,11).lineTo(-29.5,10.5).lineTo(-29.7,10).curveTo(-29.7,9.9,-29.7,9.9).curveTo(-29.7,9.8,-29.8,9.8).curveTo(-29.8,9.7,-29.9,9.7).curveTo(-29.9,9.7,-30,9.6).curveTo(-30.3,9.5,-30.6,9.5).curveTo(-31,9.4,-31.2,9.7).closePath().moveTo(54.7,18.3).lineTo(54.7,13.8).lineTo(52.5,13.8).lineTo(52.5,18.3).lineTo(51.4,18.3).lineTo(51.4,8.6).lineTo(52.5,8.6).lineTo(52.5,12.9).lineTo(54.7,12.9).lineTo(54.7,8.6).lineTo(55.8,8.6).lineTo(55.8,18.3).closePath().moveTo(46.3,18.3).lineTo(46.3,8.6).lineTo(50.4,8.6).lineTo(50.4,9.6).lineTo(47.4,9.6).lineTo(47.4,12.9).lineTo(50.1,12.9).lineTo(50.1,13.9).lineTo(47.4,13.9).lineTo(47.4,17.3).lineTo(50.4,17.3).lineTo(50.4,18.3).closePath().moveTo(43.7,18.3).lineTo(43.7,14.1).lineTo(43.1,14.2).lineTo(42.4,14.3).lineTo(41.7,14.2).curveTo(41.2,14.1,41,13.9).lineTo(40.5,13.2).curveTo(40.4,12.7,40.3,12.2).lineTo(40.3,8.6).lineTo(41.4,8.6).lineTo(41.4,12.2).curveTo(41.4,12.9,41.8,13.1).curveTo(42.1,13.4,42.7,13.4).lineTo(43.1,13.4).lineTo(43.7,13.2).lineTo(43.7,8.6).lineTo(44.8,8.6).lineTo(44.8,18.3).closePath().moveTo(38.1,18.3).lineTo(38.1,11.4).lineTo(38,11.4).lineTo(35.6,18.3).lineTo(34.5,18.3).lineTo(34.5,8.6).lineTo(35.6,8.6).lineTo(35.6,15.5).lineTo(35.6,15.5).lineTo(38.1,8.6).lineTo(39.1,8.6).lineTo(39.1,18.3).closePath().moveTo(31.9,18.3).lineTo(31.9,13.8).lineTo(29.6,13.8).lineTo(29.6,18.3).lineTo(28.5,18.3).lineTo(28.5,8.6).lineTo(29.6,8.6).lineTo(29.6,12.9).lineTo(31.9,12.9).lineTo(31.9,8.6).lineTo(33,8.6).lineTo(33,18.3).closePath().moveTo(26.6,18.3).lineTo(26.1,16.1).lineTo(24,16.1).lineTo(23.5,18.3).lineTo(22.4,18.3).lineTo(24.5,8.6).lineTo(25.6,8.6).lineTo(27.6,18.3).closePath().moveTo(24.1,15.1).lineTo(25.9,15.1).lineTo(25,10.5).lineTo(25,10.5).closePath().moveTo(18.1,18.3).lineTo(18.1,8.6).lineTo(20.2,8.6).curveTo(20.9,8.6,21.4,8.7).curveTo(21.8,8.9,22.1,9.3).curveTo(22.4,9.7,22.5,10.3).lineTo(22.6,11.4).lineTo(22.5,12.6).curveTo(22.4,13.1,22.1,13.5).curveTo(21.8,14,21.4,14.1).curveTo(20.9,14.4,20.1,14.4).lineTo(19.3,14.4).lineTo(19.3,18.3).closePath().moveTo(19.3,13.3).lineTo(20,13.3).curveTo(20.5,13.4,20.8,13.2).curveTo(21.1,13,21.3,12.8).curveTo(21.4,12.6,21.4,12.2).lineTo(21.5,11.5).lineTo(21.4,10.7).lineTo(21.3,10.2).curveTo(21.1,9.9,20.8,9.7).curveTo(20.5,9.6,20.1,9.6).lineTo(19.3,9.6).closePath().moveTo(13.2,18.3).lineTo(13.2,8.6).lineTo(17.1,8.6).lineTo(17.1,9.6).lineTo(14.2,9.6).lineTo(14.2,18.3).closePath().moveTo(-0.5,18.3).lineTo(-0.5,8.6).lineTo(3.6,8.6).lineTo(3.6,9.6).lineTo(0.6,9.6).lineTo(0.6,12.9).lineTo(3.3,12.9).lineTo(3.3,13.9).lineTo(0.6,13.9).lineTo(0.6,17.3).lineTo(3.6,17.3).lineTo(3.6,18.3).closePath().moveTo(-3,18.3).lineTo(-3,11.4).lineTo(-3,11.4).lineTo(-5.5,18.3).lineTo(-6.5,18.3).lineTo(-6.5,8.6).lineTo(-5.5,8.6).lineTo(-5.5,15.5).lineTo(-5.5,15.5).lineTo(-3,8.6).lineTo(-2,8.6).lineTo(-2,18.3).closePath().moveTo(-9.2,18.3).lineTo(-9.2,13.8).lineTo(-11.4,13.8).lineTo(-11.4,18.3).lineTo(-12.5,18.3).lineTo(-12.5,8.6).lineTo(-11.4,8.6).lineTo(-11.4,12.9).lineTo(-9.2,12.9).lineTo(-9.2,8.6).lineTo(-8.1,8.6).lineTo(-8.1,18.3).closePath().moveTo(-17.6,18.3).lineTo(-17.6,8.6).lineTo(-13.5,8.6).lineTo(-13.5,9.6).lineTo(-16.5,9.6).lineTo(-16.5,12.9).lineTo(-13.8,12.9).lineTo(-13.8,13.9).lineTo(-16.5,13.9).lineTo(-16.5,17.3).lineTo(-13.5,17.3).lineTo(-13.5,18.3).closePath().moveTo(-19.7,18.3).lineTo(-20.3,15.3).curveTo(-20.5,14.9,-20.7,14.6).lineTo(-21,14.1).lineTo(-21.5,13.9).lineTo(-22,13.9).lineTo(-22.5,13.9).lineTo(-22.5,18.3).lineTo(-23.6,18.3).lineTo(-23.6,13.9).lineTo(-24,13.9).lineTo(-24.5,13.9).lineTo(-25,14.1).curveTo(-25.2,14.2,-25.4,14.6).curveTo(-25.6,14.9,-25.7,15.3).lineTo(-26.3,18.3).lineTo(-27.4,18.3).lineTo(-26.7,15.1).curveTo(-26.6,14.5,-26.3,14).curveTo(-26,13.5,-25.5,13.2).curveTo(-25.9,13.1,-26.2,12.6).curveTo(-26.5,12.2,-26.6,11.4).lineTo(-27.3,8.6).lineTo(-26.3,8.6).lineTo(-25.6,11.4).curveTo(-25.5,11.8,-25.3,12.2).lineTo(-24.9,12.5).lineTo(-24.5,12.8).lineTo(-24,12.8).lineTo(-23.6,12.8).lineTo(-23.6,8.6).lineTo(-22.5,8.6).lineTo(-22.5,12.8).lineTo(-22,12.8).lineTo(-21.6,12.8).lineTo(-21.1,12.5).lineTo(-20.8,12.2).curveTo(-20.6,11.8,-20.4,11.4).lineTo(-19.8,8.6).lineTo(-18.8,8.6).lineTo(-19.4,11.4).curveTo(-19.6,12.2,-19.9,12.6).curveTo(-20.2,13.1,-20.6,13.2).curveTo(-20.1,13.5,-19.8,14).curveTo(-19.4,14.5,-19.3,15.1).lineTo(-18.6,18.3).closePath().moveTo(-50.3,18.3).lineTo(-50.3,8.6).lineTo(-46.1,8.6).lineTo(-46.1,9.6).lineTo(-49.1,9.6).lineTo(-49.1,12.9).lineTo(-46.5,12.9).lineTo(-46.5,13.9).lineTo(-49.1,13.9).lineTo(-49.1,17.3).lineTo(-46.1,17.3).lineTo(-46.1,18.3).closePath().moveTo(-55.8,18.3).lineTo(-55.8,8.6).lineTo(-53.8,8.6).curveTo(-53.1,8.6,-52.6,8.7).curveTo(-52.2,8.9,-51.8,9.3).curveTo(-51.6,9.7,-51.5,10.3).lineTo(-51.4,11.4).lineTo(-51.5,12.6).curveTo(-51.6,13.1,-51.8,13.5).curveTo(-52.1,14,-52.6,14.1).curveTo(-53.1,14.4,-53.9,14.4).lineTo(-54.7,14.4).lineTo(-54.7,18.3).closePath().moveTo(-54.7,13.3).lineTo(-54,13.3).curveTo(-53.4,13.4,-53.2,13.2).curveTo(-52.9,13,-52.7,12.8).curveTo(-52.5,12.6,-52.5,12.2).lineTo(-52.5,11.5).lineTo(-52.5,10.7).lineTo(-52.7,10.2).curveTo(-52.9,9.9,-53.2,9.7).curveTo(-53.5,9.6,-53.9,9.6).lineTo(-54.7,9.6).closePath().moveTo(-58.4,18.3).lineTo(-58.4,9.6).lineTo(-60.5,9.6).lineTo(-60.5,18.3).lineTo(-61.6,18.3).lineTo(-61.6,8.6).lineTo(-57.3,8.6).lineTo(-57.3,18.3).closePath().moveTo(-10.1,5.9).lineTo(-10.1,4).lineTo(-14,4).lineTo(-14,-5.8).lineTo(-12.9,-5.8).lineTo(-12.9,3).lineTo(-10.8,3).lineTo(-10.8,-5.8).lineTo(-9.6,-5.8).lineTo(-9.6,3).lineTo(-9.2,3).lineTo(-9.2,5.9).closePath().moveTo(-58.8,3.5).lineTo(-58.2,3.1).lineTo(-57.8,2.4).curveTo(-57.6,2,-57.5,1.5).lineTo(-57.4,-0.1).lineTo(-57.4,-5.8).lineTo(-53.4,-5.8).lineTo(-53.4,4).lineTo(-54.4,4).lineTo(-54.4,-4.7).lineTo(-56.4,-4.7).lineTo(-56.4,-0.9).lineTo(-56.5,1.4).curveTo(-56.6,2.2,-56.9,2.8).curveTo(-57.1,3.3,-57.4,3.7).lineTo(-58.2,4.3).closePath().moveTo(104.7,3.4).curveTo(104.2,2.8,104.2,1.7).lineTo(104.2,-5.8).lineTo(105.3,-5.8).lineTo(105.3,1.7).lineTo(105.3,2.2).lineTo(105.5,2.6).lineTo(105.9,3).curveTo(106.1,3.1,106.5,3.1).curveTo(106.7,3.1,107,3).lineTo(107.4,2.6).lineTo(107.6,2.1).lineTo(107.6,1.5).lineTo(107.6,-5.8).lineTo(108.7,-5.8).lineTo(108.7,1.4).curveTo(108.7,2.7,108.2,3.4).curveTo(107.6,4.1,106.5,4.1).curveTo(105.3,4.1,104.7,3.4).closePath().moveTo(71.3,3.4).curveTo(70.8,2.8,70.8,1.7).lineTo(70.8,-3.1).lineTo(70.9,-4.1).curveTo(71,-4.6,71.2,-5).curveTo(71.5,-5.3,71.9,-5.6).curveTo(72.4,-5.9,73,-5.8).curveTo(73.8,-5.9,74.2,-5.6).curveTo(74.7,-5.5,74.9,-5).curveTo(75.1,-4.7,75.2,-4.2).lineTo(75.3,-3.1).lineTo(75.3,1.4).curveTo(75.3,2.7,74.8,3.4).curveTo(74.2,4.1,73,4.1).curveTo(71.9,4.1,71.3,3.4).closePath().moveTo(72.4,-4.6).lineTo(72,-4.1).lineTo(71.9,-3.6).lineTo(71.9,-3).lineTo(71.9,1.7).lineTo(71.9,2.2).lineTo(72.1,2.6).lineTo(72.5,3).curveTo(72.7,3.1,73,3.1).curveTo(73.4,3.1,73.6,3).lineTo(73.9,2.6).lineTo(74.2,2.1).lineTo(74.2,1.5).lineTo(74.2,-3.3).lineTo(74.2,-3.9).lineTo(74,-4.3).curveTo(74,-4.4,73.9,-4.4).curveTo(73.9,-4.5,73.9,-4.5).curveTo(73.8,-4.6,73.8,-4.6).curveTo(73.7,-4.6,73.6,-4.7).curveTo(73.4,-4.8,73,-4.8).curveTo(72.6,-4.8,72.4,-4.6).closePath().moveTo(21.4,3.5).curveTo(20.8,2.8,20.8,1.7).lineTo(20.8,-3.1).lineTo(21,-4.1).lineTo(21.3,-4.9).curveTo(21.5,-5.3,22,-5.6).curveTo(22.4,-5.9,23.1,-5.8).curveTo(24.2,-5.8,24.7,-5.2).curveTo(25.2,-4.6,25.2,-3.6).lineTo(24.1,-3.4).curveTo(24.1,-4,23.9,-4.5).curveTo(23.6,-4.8,23.1,-4.8).curveTo(22.7,-4.8,22.5,-4.7).lineTo(22.2,-4.2).lineTo(22,-3.8).lineTo(22,-3.2).lineTo(22,1.7).lineTo(22,2.2).lineTo(22.2,2.6).lineTo(22.5,3).lineTo(23,3.1).curveTo(23.6,3.1,23.9,2.7).curveTo(24.1,2.4,24.1,1.6).lineTo(25.2,1.8).curveTo(25.2,2.9,24.7,3.5).curveTo(24.1,4.1,23.1,4.1).curveTo(21.9,4.1,21.4,3.5).closePath().moveTo(-51.5,3.4).curveTo(-51.9,2.8,-51.9,1.7).lineTo(-51.9,-3.1).lineTo(-51.8,-4.1).curveTo(-51.8,-4.6,-51.5,-5).curveTo(-51.3,-5.3,-50.8,-5.6).curveTo(-50.4,-5.9,-49.7,-5.8).curveTo(-49,-5.9,-48.6,-5.6).curveTo(-48.1,-5.5,-47.9,-5).curveTo(-47.6,-4.7,-47.6,-4.2).lineTo(-47.4,-3.1).lineTo(-47.4,1.4).curveTo(-47.5,2.7,-48,3.4).curveTo(-48.5,4.1,-49.7,4.1).curveTo(-50.9,4.1,-51.5,3.4).closePath().moveTo(-50.4,-4.6).lineTo(-50.7,-4.1).lineTo(-50.8,-3.6).lineTo(-50.8,-3).lineTo(-50.8,1.7).lineTo(-50.8,2.2).lineTo(-50.6,2.6).lineTo(-50.3,3).curveTo(-50.1,3.1,-49.7,3.1).curveTo(-49.3,3.1,-49.1,3).lineTo(-48.8,2.6).lineTo(-48.6,2.1).lineTo(-48.6,1.5).lineTo(-48.6,-3.3).lineTo(-48.6,-3.9).lineTo(-48.8,-4.3).curveTo(-48.8,-4.4,-48.8,-4.4).curveTo(-48.8,-4.5,-48.9,-4.5).curveTo(-48.9,-4.6,-49,-4.6).curveTo(-49,-4.6,-49.1,-4.7).curveTo(-49.3,-4.8,-49.7,-4.8).curveTo(-50.1,-4.8,-50.4,-4.6).closePath().moveTo(-62.9,3.5).curveTo(-63.5,2.8,-63.4,1.7).lineTo(-63.4,-3.1).lineTo(-63.3,-4.1).lineTo(-63.1,-4.9).curveTo(-62.8,-5.3,-62.4,-5.6).curveTo(-61.9,-5.9,-61.3,-5.8).curveTo(-60.1,-5.8,-59.6,-5.2).curveTo(-59.1,-4.6,-59.1,-3.6).lineTo(-60.2,-3.4).curveTo(-60.2,-4,-60.5,-4.5).curveTo(-60.7,-4.8,-61.3,-4.8).curveTo(-61.6,-4.8,-61.8,-4.7).lineTo(-62.2,-4.2).lineTo(-62.3,-3.8).lineTo(-62.4,-3.2).lineTo(-62.4,1.7).lineTo(-62.3,2.2).lineTo(-62.2,2.6).lineTo(-61.8,3).lineTo(-61.3,3.1).curveTo(-60.8,3.1,-60.5,2.7).curveTo(-60.2,2.4,-60.2,1.6).lineTo(-59,1.8).curveTo(-59.1,2.9,-59.7,3.5).curveTo(-60.1,4.1,-61.3,4.1).curveTo(-62.4,4.1,-62.9,3.5).closePath().moveTo(-68.7,4.1).lineTo(-68.7,3.2).lineTo(-68.1,3.2).curveTo(-67.9,3.3,-67.7,3).curveTo(-67.4,2.6,-67.2,2).lineTo(-67,1.4).lineTo(-69.2,-5.8).lineTo(-68,-5.8).lineTo(-66.6,-0.3).lineTo(-66.6,-0.3).lineTo(-65.2,-5.8).lineTo(-64.2,-5.8).lineTo(-66.1,1.7).lineTo(-66.6,3.1).lineTo(-67.1,3.8).lineTo(-67.6,4.1).lineTo(-68.1,4.1).closePath().moveTo(-97.3,3.4).curveTo(-97.7,2.8,-97.7,1.7).lineTo(-97.7,-3.1).lineTo(-97.6,-4.1).curveTo(-97.6,-4.6,-97.3,-5).curveTo(-97,-5.3,-96.6,-5.6).curveTo(-96.2,-5.9,-95.5,-5.8).curveTo(-94.8,-5.9,-94.4,-5.6).curveTo(-93.9,-5.5,-93.7,-5).curveTo(-93.4,-4.7,-93.3,-4.2).lineTo(-93.2,-3.1).lineTo(-93.2,1.4).curveTo(-93.3,2.7,-93.8,3.4).curveTo(-94.3,4.1,-95.5,4.1).curveTo(-96.7,4.1,-97.3,3.4).closePath().moveTo(-96.2,-4.6).lineTo(-96.5,-4.1).lineTo(-96.6,-3.6).lineTo(-96.6,-3).lineTo(-96.6,1.7).lineTo(-96.6,2.2).lineTo(-96.4,2.6).lineTo(-96.1,3).curveTo(-95.9,3.1,-95.5,3.1).curveTo(-95.1,3.1,-94.9,3).lineTo(-94.6,2.6).lineTo(-94.4,2.1).lineTo(-94.4,1.5).lineTo(-94.4,-3.3).lineTo(-94.4,-3.9).lineTo(-94.6,-4.3).curveTo(-94.6,-4.4,-94.6,-4.4).curveTo(-94.6,-4.5,-94.7,-4.5).curveTo(-94.7,-4.6,-94.8,-4.6).curveTo(-94.8,-4.6,-94.9,-4.7).curveTo(-95.2,-4.8,-95.5,-4.8).curveTo(-95.9,-4.8,-96.2,-4.6).closePath().moveTo(-108.2,3.5).curveTo(-108.7,2.8,-108.7,1.7).lineTo(-108.7,-3.1).lineTo(-108.6,-4.1).lineTo(-108.3,-4.9).curveTo(-108,-5.3,-107.6,-5.6).curveTo(-107.1,-5.9,-106.5,-5.8).curveTo(-105.4,-5.8,-104.8,-5.2).curveTo(-104.4,-4.6,-104.4,-3.6).lineTo(-105.5,-3.4).curveTo(-105.4,-4,-105.7,-4.5).curveTo(-105.9,-4.8,-106.5,-4.8).curveTo(-106.9,-4.8,-107.1,-4.7).lineTo(-107.4,-4.2).lineTo(-107.5,-3.8).lineTo(-107.6,-3.2).lineTo(-107.6,1.7).lineTo(-107.5,2.2).lineTo(-107.4,2.6).lineTo(-107.1,3).lineTo(-106.5,3.1).curveTo(-106,3.1,-105.7,2.7).curveTo(-105.4,2.4,-105.5,1.6).lineTo(-104.3,1.8).curveTo(-104.3,2.9,-104.9,3.5).curveTo(-105.4,4.1,-106.5,4.1).curveTo(-107.6,4.1,-108.2,3.5).closePath().moveTo(102,4).lineTo(100.6,-0.3).lineTo(99.6,-0.3).lineTo(99.6,4).lineTo(98.5,4).lineTo(98.5,-5.8).lineTo(100.6,-5.8).curveTo(101.7,-5.8,102.4,-5).curveTo(102.9,-4.4,102.9,-3).curveTo(102.9,-2.1,102.6,-1.5).curveTo(102.4,-0.8,101.6,-0.5).lineTo(103.1,4).closePath().moveTo(99.6,-1.3).lineTo(100.5,-1.3).lineTo(101.1,-1.4).lineTo(101.5,-1.8).lineTo(101.7,-2.3).lineTo(101.7,-3).lineTo(101.7,-3.7).lineTo(101.5,-4.2).lineTo(101.1,-4.6).lineTo(100.4,-4.7).lineTo(99.6,-4.7).closePath().moveTo(95.8,4).lineTo(95.8,2.7).lineTo(96.9,2.7).lineTo(96.9,4).closePath().moveTo(93.5,4).lineTo(92.1,-0.3).lineTo(91,-0.3).lineTo(91,4).lineTo(89.9,4).lineTo(89.9,-5.8).lineTo(92.1,-5.8).curveTo(93.2,-5.8,93.9,-5).curveTo(94.4,-4.4,94.4,-3).curveTo(94.4,-2.1,94.2,-1.5).curveTo(93.9,-0.8,93.2,-0.5).lineTo(94.6,4).closePath().moveTo(91,-1.3).lineTo(92,-1.3).lineTo(92.6,-1.4).lineTo(93,-1.8).lineTo(93.2,-2.3).lineTo(93.3,-3).lineTo(93.2,-3.7).lineTo(93,-4.2).lineTo(92.6,-4.6).lineTo(91.9,-4.7).lineTo(91,-4.7).closePath().moveTo(84.9,4).lineTo(84.9,-5.8).lineTo(89,-5.8).lineTo(89,-4.7).lineTo(86,-4.7).lineTo(86,-1.4).lineTo(88.6,-1.4).lineTo(88.6,-0.4).lineTo(86,-0.4).lineTo(86,3).lineTo(89,3).lineTo(89,4).closePath().moveTo(81.3,4).lineTo(80,-3.1).lineTo(78.7,4).lineTo(77.7,4).lineTo(76.2,-5.8).lineTo(77.4,-5.8).lineTo(78.2,1.2).lineTo(78.3,1.2).lineTo(79.5,-5.8).lineTo(80.6,-5.8).lineTo(81.7,1.2).lineTo(81.8,1.2).lineTo(82.6,-5.8).lineTo(83.7,-5.8).lineTo(82.4,4).closePath().moveTo(67.3,4).lineTo(67.3,-4.8).lineTo(65.7,-4.8).lineTo(65.7,-5.8).lineTo(70.1,-5.8).lineTo(70.1,-4.8).lineTo(68.4,-4.8).lineTo(68.4,4).closePath().moveTo(60.5,4).lineTo(60.5,-5.8).lineTo(62.7,-5.8).curveTo(63.6,-5.8,64.2,-5.5).curveTo(64.6,-5.1,64.8,-4.5).curveTo(65,-3.9,65,-3).lineTo(65,-0.9).lineTo(65,1.2).curveTo(65,2,64.8,2.5).curveTo(64.6,3.4,63.9,3.7).curveTo(63.4,4,62.7,4).closePath().moveTo(61.6,3).lineTo(62.6,3).curveTo(63.3,3,63.6,2.6).curveTo(63.8,2.3,63.8,1.5).lineTo(63.8,-3.3).curveTo(63.9,-3.9,63.6,-4.3).curveTo(63.3,-4.7,62.6,-4.7).lineTo(61.6,-4.7).closePath().moveTo(55.4,4).lineTo(55.4,-5.8).lineTo(59.5,-5.8).lineTo(59.5,-4.7).lineTo(56.5,-4.7).lineTo(56.5,-1.4).lineTo(59.1,-1.4).lineTo(59.1,-0.4).lineTo(56.5,-0.4).lineTo(56.5,3).lineTo(59.5,3).lineTo(59.5,4).closePath().moveTo(50.3,4).lineTo(50.3,-5.8).lineTo(54.5,-5.8).lineTo(54.5,-4.7).lineTo(51.4,-4.7).lineTo(51.4,-1.4).lineTo(54,-1.4).lineTo(54,-0.4).lineTo(51.4,-0.4).lineTo(51.4,4).closePath().moveTo(42.4,4).lineTo(42.4,-5.8).lineTo(46.6,-5.8).lineTo(46.6,-4.7).lineTo(43.6,-4.7).lineTo(43.6,-1.4).lineTo(46.2,-1.4).lineTo(46.2,-0.4).lineTo(43.6,-0.4).lineTo(43.6,3).lineTo(46.6,3).lineTo(46.6,4).closePath().moveTo(38.8,4).lineTo(38.8,-4.8).lineTo(37.2,-4.8).lineTo(37.2,-5.8).lineTo(41.7,-5.8).lineTo(41.7,-4.8).lineTo(40,-4.8).lineTo(40,4).closePath().moveTo(35.4,4).lineTo(35.4,-2.9).lineTo(35.4,-2.9).lineTo(32.9,4).lineTo(31.9,4).lineTo(31.9,-5.8).lineTo(32.9,-5.8).lineTo(32.9,1.2).lineTo(33,1.2).lineTo(35.4,-5.8).lineTo(36.5,-5.8).lineTo(36.5,4).closePath().moveTo(29.9,4).lineTo(29.4,1.8).lineTo(27.3,1.8).lineTo(26.8,4).lineTo(25.8,4).lineTo(27.8,-5.8).lineTo(28.9,-5.8).lineTo(31,4).closePath().moveTo(27.5,0.8).lineTo(29.3,0.8).lineTo(28.4,-3.8).lineTo(28.4,-3.8).closePath().moveTo(16.2,4).lineTo(15.8,1.8).lineTo(13.6,1.8).lineTo(13.2,4).lineTo(12.1,4).lineTo(14.1,-5.8).lineTo(15.2,-5.8).lineTo(17.3,4).closePath().moveTo(13.8,0.8).lineTo(15.6,0.8).lineTo(14.7,-3.8).lineTo(14.7,-3.8).closePath().moveTo(10,4).lineTo(10,-0.5).lineTo(7.8,-0.5).lineTo(7.8,4).lineTo(6.7,4).lineTo(6.7,-5.8).lineTo(7.8,-5.8).lineTo(7.8,-1.4).lineTo(10,-1.4).lineTo(10,-5.8).lineTo(11.1,-5.8).lineTo(11.1,4).closePath().moveTo(1.4,4).lineTo(1.4,-2.9).lineTo(1.4,-2.9).lineTo(-1.1,4).lineTo(-2.1,4).lineTo(-2.1,-5.8).lineTo(-1.1,-5.8).lineTo(-1.1,1.2).lineTo(-1.1,1.2).lineTo(1.4,-5.8).lineTo(2.5,-5.8).lineTo(2.5,4).closePath().moveTo(-4.6,4).lineTo(-4.6,-2.9).lineTo(-4.7,-2.9).lineTo(-7.1,4).lineTo(-8.2,4).lineTo(-8.2,-5.8).lineTo(-7.1,-5.8).lineTo(-7.1,1.2).lineTo(-7.1,1.2).lineTo(-4.6,-5.8).lineTo(-3.6,-5.8).lineTo(-3.6,4).closePath().moveTo(-16,4).lineTo(-16.6,1.1).curveTo(-16.7,0.5,-17,0.3).curveTo(-17.1,-0.1,-17.4,-0.2).lineTo(-17.8,-0.4).lineTo(-18.3,-0.4).lineTo(-18.9,-0.4).lineTo(-18.9,4).lineTo(-20,4).lineTo(-20,-5.8).lineTo(-18.9,-5.8).lineTo(-18.9,-1.5).lineTo(-18.3,-1.5).lineTo(-17.9,-1.5).lineTo(-17.4,-1.8).lineTo(-17.1,-2.1).curveTo(-16.9,-2.5,-16.7,-3).lineTo(-16.1,-5.8).lineTo(-15,-5.8).lineTo(-15.7,-2.9).curveTo(-15.9,-2.2,-16.2,-1.7).curveTo(-16.5,-1.2,-16.9,-1.1).curveTo(-16.4,-0.8,-16.1,-0.4).curveTo(-15.7,0.1,-15.6,0.8).lineTo(-14.9,4).closePath().moveTo(-21.9,4).lineTo(-22.4,1.8).lineTo(-24.5,1.8).lineTo(-25,4).lineTo(-26.1,4).lineTo(-24,-5.8).lineTo(-22.9,-5.8).lineTo(-20.9,4).closePath().moveTo(-24.4,0.8).lineTo(-22.6,0.8).lineTo(-23.5,-3.8).lineTo(-23.5,-3.8).closePath().moveTo(-30.8,4).lineTo(-30.8,-0.4).lineTo(-31.4,-0.4).lineTo(-31.8,-0.3).lineTo(-32.2,-0.1).lineTo(-32.6,0.4).lineTo(-32.8,1.2).lineTo(-33.4,4).lineTo(-34.5,4).lineTo(-33.9,0.9).lineTo(-33.6,0).curveTo(-33.4,-0.4,-33,-0.7).lineTo(-33.6,-1).lineTo(-33.9,-1.5).lineTo(-34.2,-2.1).lineTo(-34.2,-2.9).curveTo(-34.2,-4.2,-33.6,-5).curveTo(-33.1,-5.7,-31.8,-5.8).lineTo(-29.7,-5.8).lineTo(-29.7,4).closePath().moveTo(-32.4,-4.6).lineTo(-32.8,-4.2).lineTo(-33,-3.6).lineTo(-33.1,-2.9).curveTo(-33.1,-1.4,-31.8,-1.3).lineTo(-30.8,-1.3).lineTo(-30.8,-4.7).lineTo(-31.7,-4.7).curveTo(-32,-4.7,-32.4,-4.6).closePath().moveTo(-36.8,4).lineTo(-36.8,-2.9).lineTo(-36.8,-2.9).lineTo(-39.2,4).lineTo(-40.3,4).lineTo(-40.3,-5.8).lineTo(-39.2,-5.8).lineTo(-39.2,1.2).lineTo(-39.2,1.2).lineTo(-36.8,-5.8).lineTo(-35.7,-5.8).lineTo(-35.7,4).closePath().moveTo(-46.1,4).lineTo(-46.1,-5.8).lineTo(-44,-5.8).curveTo(-42.7,-5.8,-42.3,-5).curveTo(-41.7,-4.4,-41.7,-3.1).curveTo(-41.7,-2.4,-41.9,-2).curveTo(-42.1,-1.5,-42.7,-1.2).lineTo(-42.7,-1.1).curveTo(-42.1,-0.9,-41.8,-0.3).curveTo(-41.7,0.2,-41.7,1.2).curveTo(-41.6,2.6,-42.3,3.3).curveTo(-42.8,4,-44.2,4).closePath().moveTo(-45,3).lineTo(-44.1,3).curveTo(-43.6,3,-43.4,2.9).curveTo(-43.1,2.7,-42.9,2.4).lineTo(-42.7,1.8).lineTo(-42.7,1).curveTo(-42.7,0.2,-43,-0.2).curveTo(-43.3,-0.7,-44.2,-0.6).lineTo(-45,-0.6).closePath().moveTo(-45,-1.6).lineTo(-44.2,-1.6).curveTo(-43.5,-1.6,-43.1,-2).curveTo(-42.8,-2.5,-42.7,-3.2).curveTo(-42.8,-3.9,-43.1,-4.3).curveTo(-43.4,-4.8,-44.2,-4.8).lineTo(-45,-4.8).closePath().moveTo(-73.7,4).lineTo(-73.7,-2.9).lineTo(-73.8,-2.9).lineTo(-76.2,4).lineTo(-77.3,4).lineTo(-77.3,-5.8).lineTo(-76.2,-5.8).lineTo(-76.2,1.2).lineTo(-76.1,1.2).lineTo(-73.7,-5.8).lineTo(-72.6,-5.8).lineTo(-72.6,4).closePath().moveTo(-82.4,4).lineTo(-82.4,-2.9).lineTo(-82.5,-2.9).lineTo(-84.9,4).lineTo(-86,4).lineTo(-86,-5.8).lineTo(-84.9,-5.8).lineTo(-84.9,1.2).lineTo(-84.9,1.2).lineTo(-82.4,-5.8).lineTo(-81.4,-5.8).lineTo(-81.4,4).closePath().moveTo(-87.9,4).lineTo(-88.5,1.1).curveTo(-88.6,0.5,-88.8,0.3).curveTo(-89,-0.1,-89.3,-0.2).lineTo(-89.7,-0.4).lineTo(-90.2,-0.4).lineTo(-90.8,-0.4).lineTo(-90.8,4).lineTo(-91.9,4).lineTo(-91.9,-5.8).lineTo(-90.8,-5.8).lineTo(-90.8,-1.5).lineTo(-90.3,-1.5).lineTo(-89.8,-1.5).lineTo(-89.3,-1.8).lineTo(-89,-2.1).curveTo(-88.7,-2.5,-88.6,-3).lineTo(-88,-5.8).lineTo(-86.9,-5.8).lineTo(-87.6,-2.9).curveTo(-87.8,-2.2,-88.1,-1.7).curveTo(-88.4,-1.2,-88.8,-1.1).curveTo(-88.2,-0.8,-87.9,-0.4).curveTo(-87.7,0.1,-87.5,0.8).lineTo(-86.8,4).closePath().moveTo(-103.2,4).lineTo(-103.2,-5.8).lineTo(-101.2,-5.8).curveTo(-100.5,-5.8,-100,-5.6).curveTo(-99.5,-5.4,-99.3,-5).curveTo(-99,-4.6,-98.9,-4).lineTo(-98.7,-2.9).lineTo(-98.9,-1.7).curveTo(-99,-1.2,-99.3,-0.7).curveTo(-99.5,-0.4,-100,-0.2).curveTo(-100.5,0.1,-101.3,0.1).lineTo(-102.1,0.1).lineTo(-102.1,4).closePath().moveTo(-102.1,-1).lineTo(-101.3,-1).curveTo(-100.9,-1,-100.5,-1.1).curveTo(-100.3,-1.3,-100.1,-1.5).curveTo(-99.9,-1.7,-99.9,-2.1).lineTo(-99.9,-2.8).lineTo(-99.9,-3.6).lineTo(-100.1,-4.1).curveTo(-100.3,-4.4,-100.5,-4.6).curveTo(-100.8,-4.7,-101.3,-4.7).lineTo(-102.1,-4.7).closePath().moveTo(33.2,-6.3).curveTo(32.9,-6.4,32.7,-6.6).curveTo(32.4,-6.9,32.3,-7.2).lineTo(32.2,-7.7).lineTo(33.2,-7.7).lineTo(33.2,-7.5).lineTo(33.4,-7.2).lineTo(33.8,-6.9).lineTo(34.1,-6.9).lineTo(34.5,-6.9).lineTo(34.8,-7.2).lineTo(35,-7.5).lineTo(35,-7.7).lineTo(35.9,-7.7).lineTo(35.8,-7.2).lineTo(35.5,-6.6).lineTo(34.9,-6.3).curveTo(34.6,-6,34.1,-6).curveTo(33.6,-6,33.2,-6.3).closePath().moveTo(39.6,-8.5).lineTo(39.6,-10.3).lineTo(35.7,-10.3).lineTo(35.7,-20.1).lineTo(36.7,-20.1).lineTo(36.7,-11.3).lineTo(39,-11.3).lineTo(39,-20.1).lineTo(40.1,-20.1).lineTo(40.1,-11.3).lineTo(40.5,-11.3).lineTo(40.5,-8.5).closePath().moveTo(18.2,-8.5).lineTo(18.2,-10.3).lineTo(14.1,-10.3).lineTo(14.1,-8.5).lineTo(13.2,-8.5).lineTo(13.2,-11.2).lineTo(13.6,-11.2).lineTo(14,-11.6).lineTo(14.1,-12.1).lineTo(14.3,-13).lineTo(14.4,-14.2).lineTo(14.6,-20.1).lineTo(18.7,-20.1).lineTo(18.7,-11.2).lineTo(19.2,-11.2).lineTo(19.2,-8.5).closePath().moveTo(15.4,-14.1).curveTo(15.4,-13,15.2,-12.4).curveTo(15.1,-11.7,14.9,-11.2).lineTo(17.6,-11.2).lineTo(17.6,-19.1).lineTo(15.6,-19.1).closePath().moveTo(-40.8,-10.9).curveTo(-41.2,-11.5,-41.3,-12.6).lineTo(-41.3,-17.4).lineTo(-41.1,-18.4).curveTo(-41,-18.9,-40.8,-19.3).curveTo(-40.5,-19.7,-40.1,-19.9).curveTo(-39.7,-20.1,-39,-20.1).curveTo(-38.2,-20.1,-37.9,-19.9).curveTo(-37.4,-19.7,-37.2,-19.3).curveTo(-36.9,-19,-36.9,-18.5).lineTo(-36.8,-17.4).lineTo(-36.8,-12.9).curveTo(-36.8,-11.6,-37.2,-10.9).curveTo(-37.8,-10.2,-39,-10.2).curveTo(-40.2,-10.2,-40.8,-10.9).closePath().moveTo(-39.7,-18.9).lineTo(-40,-18.4).lineTo(-40.1,-17.8).lineTo(-40.1,-17.3).lineTo(-40.1,-12.6).lineTo(-40.1,-12.1).lineTo(-39.9,-11.7).lineTo(-39.6,-11.3).curveTo(-39.4,-11.2,-39,-11.2).curveTo(-38.7,-11.2,-38.4,-11.3).lineTo(-38.1,-11.7).lineTo(-37.9,-12.2).lineTo(-37.9,-12.8).lineTo(-37.9,-17.6).lineTo(-37.9,-18.2).lineTo(-38,-18.6).curveTo(-38.1,-18.7,-38.1,-18.7).curveTo(-38.1,-18.8,-38.2,-18.8).curveTo(-38.2,-18.9,-38.3,-18.9).curveTo(-38.3,-18.9,-38.4,-19).curveTo(-38.6,-19.2,-39,-19.2).curveTo(-39.4,-19.1,-39.7,-18.9).closePath().moveTo(-51.3,-10.3).curveTo(-51.7,-10.4,-52,-10.8).curveTo(-52.3,-11,-52.5,-11.4).curveTo(-52.6,-11.8,-52.5,-12.4).lineTo(-51.5,-12.7).curveTo(-51.5,-11.9,-51.2,-11.5).curveTo(-51,-11.2,-50.4,-11.2).lineTo(-49.9,-11.3).lineTo(-49.6,-11.6).lineTo(-49.4,-12.2).lineTo(-49.3,-13.1).lineTo(-49.4,-13.8).curveTo(-49.4,-14.1,-49.5,-14.4).lineTo(-49.8,-14.7).curveTo(-50,-14.9,-50.4,-14.8).lineTo(-50.9,-14.8).lineTo(-50.9,-15.8).lineTo(-50.3,-15.8).curveTo(-50,-15.8,-49.8,-15.9).lineTo(-49.5,-16.3).lineTo(-49.3,-16.9).lineTo(-49.2,-17.5).lineTo(-49.4,-18.4).lineTo(-49.6,-18.8).curveTo(-49.6,-18.8,-49.7,-18.9).curveTo(-49.7,-18.9,-49.8,-19).curveTo(-49.8,-19,-49.9,-19).curveTo(-49.9,-19,-49.9,-19.1).lineTo(-50.4,-19.2).curveTo(-51,-19.1,-51.3,-18.7).curveTo(-51.5,-18.3,-51.5,-17.7).lineTo(-52.5,-18).curveTo(-52.6,-19,-51.9,-19.5).curveTo(-51.3,-20.2,-50.4,-20.1).curveTo(-49.9,-20.1,-49.5,-20).curveTo(-49,-19.9,-48.8,-19.6).curveTo(-48.5,-19.3,-48.3,-18.9).curveTo(-48.2,-18.3,-48.1,-17.6).lineTo(-48.2,-17.1).lineTo(-48.3,-16.4).lineTo(-48.6,-15.8).curveTo(-48.7,-15.5,-49,-15.4).lineTo(-49,-15.4).lineTo(-48.6,-14.9).lineTo(-48.2,-14.4).lineTo(-48.1,-13.7).lineTo(-48.1,-13.1).curveTo(-48.2,-11.7,-48.7,-11).curveTo(-49.2,-10.2,-50.4,-10.2).curveTo(-50.9,-10.2,-51.3,-10.3).closePath().moveTo(51,-10.3).lineTo(51,-14.7).lineTo(50.4,-14.7).lineTo(50.1,-14.6).lineTo(49.6,-14.4).lineTo(49.2,-13.9).lineTo(49,-13.1).lineTo(48.5,-10.3).lineTo(47.4,-10.3).lineTo(48,-13.3).lineTo(48.3,-14.3).curveTo(48.4,-14.7,48.9,-15).lineTo(48.3,-15.3).lineTo(47.9,-15.8).lineTo(47.7,-16.5).lineTo(47.6,-17.2).curveTo(47.7,-18.6,48.2,-19.3).curveTo(48.8,-20,50,-20.1).lineTo(52.1,-20.1).lineTo(52.1,-10.3).closePath().moveTo(49.5,-18.9).lineTo(49.1,-18.5).lineTo(48.9,-17.9).lineTo(48.7,-17.2).curveTo(48.7,-15.7,50.1,-15.6).lineTo(51,-15.6).lineTo(51,-19).lineTo(50.2,-19).curveTo(49.8,-19,49.5,-18.9).closePath().moveTo(45.1,-10.3).lineTo(45.1,-17.2).lineTo(45,-17.2).lineTo(42.6,-10.3).lineTo(41.5,-10.3).lineTo(41.5,-20.1).lineTo(42.6,-20.1).lineTo(42.6,-13.1).lineTo(42.7,-13.1).lineTo(45.1,-20.1).lineTo(46.2,-20.1).lineTo(46.2,-10.3).closePath().moveTo(33.7,-10.3).lineTo(33.2,-12.4).lineTo(31.1,-12.4).lineTo(30.6,-10.3).lineTo(29.5,-10.3).lineTo(31.6,-20.1).lineTo(32.7,-20.1).lineTo(34.8,-10.3).closePath().moveTo(31.2,-13.5).lineTo(33,-13.5).lineTo(32.1,-18.1).lineTo(32.1,-18.1).closePath().moveTo(25.2,-10.3).lineTo(25.2,-20.1).lineTo(27.3,-20.1).curveTo(28,-20.1,28.5,-19.9).curveTo(28.9,-19.7,29.2,-19.3).curveTo(29.5,-18.9,29.6,-18.4).lineTo(29.7,-17.2).lineTo(29.6,-16).curveTo(29.5,-15.4,29.2,-15).curveTo(28.9,-14.7,28.5,-14.5).curveTo(28,-14.2,27.1,-14.2).lineTo(26.4,-14.2).lineTo(26.4,-10.3).closePath().moveTo(26.4,-15.3).lineTo(27.1,-15.3).curveTo(27.6,-15.3,27.9,-15.4).curveTo(28.2,-15.5,28.4,-15.8).curveTo(28.5,-16.1,28.5,-16.4).lineTo(28.6,-17.1).lineTo(28.5,-17.8).lineTo(28.4,-18.4).curveTo(28.2,-18.7,27.9,-18.9).curveTo(27.6,-19,27.1,-19).lineTo(26.4,-19).closePath().moveTo(20.2,-10.3).lineTo(20.2,-20.1).lineTo(24.3,-20.1).lineTo(24.3,-19).lineTo(21.3,-19).lineTo(21.3,-15.7).lineTo(23.9,-15.7).lineTo(23.9,-14.7).lineTo(21.3,-14.7).lineTo(21.3,-11.3).lineTo(24.3,-11.3).lineTo(24.3,-10.3).closePath().moveTo(8.7,-10.3).lineTo(8.7,-20.1).lineTo(12.9,-20.1).lineTo(12.9,-19).lineTo(9.8,-19).lineTo(9.8,-15.7).lineTo(12.5,-15.7).lineTo(12.5,-14.7).lineTo(9.8,-14.7).lineTo(9.8,-11.3).lineTo(12.9,-11.3).lineTo(12.9,-10.3).closePath().moveTo(4.1,-10.3).lineTo(4.1,-11.1).curveTo(3.6,-11,3.2,-11.2).curveTo(2.8,-11.3,2.5,-11.7).curveTo(2.1,-11.9,1.9,-12.3).curveTo(1.7,-12.8,1.7,-13.3).lineTo(1.7,-17.2).curveTo(1.7,-17.8,1.9,-18.2).curveTo(2.1,-18.7,2.5,-18.9).curveTo(2.7,-19.2,3.2,-19.3).curveTo(3.6,-19.5,4.1,-19.5).lineTo(4.1,-20.1).lineTo(5.1,-20.1).lineTo(5.1,-19.5).lineTo(6,-19.3).curveTo(6.4,-19.2,6.7,-18.9).curveTo(7,-18.7,7.2,-18.2).curveTo(7.4,-17.8,7.5,-17.2).lineTo(7.5,-13.3).curveTo(7.4,-12.8,7.2,-12.3).curveTo(7,-11.9,6.7,-11.7).curveTo(6.4,-11.3,6,-11.2).lineTo(5.1,-11.1).lineTo(5.1,-10.3).closePath().moveTo(5.1,-12).curveTo(5.6,-12,6,-12.4).curveTo(6.4,-12.7,6.4,-13.3).lineTo(6.4,-17.2).curveTo(6.4,-17.8,6,-18.2).curveTo(5.6,-18.5,5.1,-18.5).closePath().moveTo(3.2,-18.2).curveTo(2.8,-17.8,2.8,-17.2).lineTo(2.8,-13.3).curveTo(2.8,-12.7,3.1,-12.4).curveTo(3.3,-12.1,4.1,-12).lineTo(4.1,-18.5).curveTo(3.5,-18.5,3.2,-18.2).closePath().moveTo(-3.5,-10.3).lineTo(-3.5,-14.7).lineTo(-4,-14.7).lineTo(-4.5,-14.6).lineTo(-4.8,-14.4).lineTo(-5.3,-13.9).lineTo(-5.5,-13.1).lineTo(-6,-10.3).lineTo(-7.2,-10.3).lineTo(-6.5,-13.3).lineTo(-6.3,-14.3).curveTo(-6.1,-14.7,-5.7,-15).lineTo(-6.3,-15.3).lineTo(-6.6,-15.8).lineTo(-6.8,-16.5).lineTo(-6.8,-17.2).curveTo(-6.9,-18.6,-6.3,-19.3).curveTo(-5.7,-20,-4.5,-20.1).lineTo(-2.3,-20.1).lineTo(-2.3,-10.3).closePath().moveTo(-5,-18.9).lineTo(-5.5,-18.5).lineTo(-5.7,-17.9).lineTo(-5.7,-17.2).curveTo(-5.7,-15.7,-4.4,-15.6).lineTo(-3.5,-15.6).lineTo(-3.5,-19).lineTo(-4.3,-19).curveTo(-4.7,-19,-5,-18.9).closePath().moveTo(-9.5,-10.3).lineTo(-9.5,-14.8).lineTo(-11.8,-14.8).lineTo(-11.8,-10.3).lineTo(-12.9,-10.3).lineTo(-12.9,-20.1).lineTo(-11.8,-20.1).lineTo(-11.8,-15.7).lineTo(-9.5,-15.7).lineTo(-9.5,-20.1).lineTo(-8.4,-20.1).lineTo(-8.4,-10.3).closePath().moveTo(-21.5,-10.3).lineTo(-21.5,-20.1).lineTo(-20.4,-20.1).lineTo(-20.4,-11.3).lineTo(-18.5,-11.3).lineTo(-18.5,-20.1).lineTo(-17.4,-20.1).lineTo(-17.4,-11.3).lineTo(-15.5,-11.3).lineTo(-15.5,-20.1).lineTo(-14.4,-20.1).lineTo(-14.4,-10.3).closePath().moveTo(-23.5,-10.3).lineTo(-23.9,-12.4).lineTo(-26.1,-12.4).lineTo(-26.5,-10.3).lineTo(-27.6,-10.3).lineTo(-25.5,-20.1).lineTo(-24.5,-20.1).lineTo(-22.4,-10.3).closePath().moveTo(-26,-13.5).lineTo(-24.2,-13.5).lineTo(-25,-18.1).lineTo(-25.1,-18.1).closePath().moveTo(-32.7,-10.3).lineTo(-32.7,-20.1).lineTo(-28.7,-20.1).lineTo(-28.7,-19).lineTo(-31.6,-19).lineTo(-31.6,-16.1).lineTo(-30.8,-16.1).curveTo(-30,-16.1,-29.4,-15.9).curveTo(-29,-15.7,-28.7,-15.3).curveTo(-28.4,-15,-28.3,-14.5).lineTo(-28.2,-13.3).lineTo(-28.3,-12.1).curveTo(-28.4,-11.5,-28.7,-11.1).curveTo(-29,-10.7,-29.4,-10.5).curveTo(-29.9,-10.3,-30.7,-10.3).closePath().moveTo(-31.6,-11.3).lineTo(-30.8,-11.3).curveTo(-30.3,-11.4,-30,-11.5).curveTo(-29.7,-11.6,-29.5,-11.9).lineTo(-29.3,-12.5).lineTo(-29.2,-13.2).lineTo(-29.3,-13.9).lineTo(-29.5,-14.6).curveTo(-29.7,-14.8,-30,-14.9).curveTo(-30.3,-15.1,-30.8,-15.1).lineTo(-31.6,-15.1).closePath().moveTo(-43.2,-10.3).lineTo(-43.6,-12.4).lineTo(-45.8,-12.4).lineTo(-46.2,-10.3).lineTo(-47.2,-10.3).lineTo(-45.2,-20.1).lineTo(-44.2,-20.1).lineTo(-42,-10.3).closePath().moveTo(-45.6,-13.5).lineTo(-43.8,-13.5).lineTo(-44.6,-18.1).lineTo(-44.7,-18.1).closePath();
	this.shape.setTransform(108.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.4,40.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389,395);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-216,275.5).lineTo(-216,-275.5).lineTo(216,-275.5).lineTo(216,275.5).closePath();
	this.shape.setTransform(216,275.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,432,551);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,0.3).curveTo(-1,0.3,-1,0.3).curveTo(-1.1,0.2,-1.1,0.2).curveTo(-1.1,0.2,-1.1,0.1).curveTo(-1.1,0.1,-1.1,-0).curveTo(-1.1,-0.1,-1.1,-0.1).curveTo(-1.1,-0.2,-1.1,-0.2).curveTo(-1.1,-0.2,-1,-0.3).curveTo(-1,-0.3,-0.9,-0.3).lineTo(0.9,-0.3).curveTo(1,-0.3,1,-0.3).curveTo(1.1,-0.2,1.1,-0.2).curveTo(1.1,-0.2,1.1,-0.1).curveTo(1.1,-0.1,1.1,-0).curveTo(1.1,0.1,1.1,0.1).curveTo(1.1,0.2,1.1,0.2).curveTo(1.1,0.2,1,0.3).curveTo(1,0.3,0.9,0.3).closePath();
	this.shape.setTransform(18.3,0.3,1.267,1.267);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5,0.3).curveTo(-2.6,0.3,-2.6,0.2).curveTo(-2.7,0.2,-2.7,0.2).curveTo(-2.7,0.2,-2.8,0.1).curveTo(-2.8,0.1,-2.8,0).curveTo(-2.8,-0.1,-2.8,-0.1).curveTo(-2.7,-0.2,-2.7,-0.2).curveTo(-2.7,-0.2,-2.6,-0.2).curveTo(-2.6,-0.3,-2.5,-0.3).lineTo(2.5,-0.3).curveTo(2.6,-0.3,2.6,-0.2).curveTo(2.7,-0.2,2.7,-0.2).curveTo(2.7,-0.2,2.8,-0.1).curveTo(2.8,-0.1,2.8,0).curveTo(2.8,0.1,2.8,0.1).curveTo(2.7,0.2,2.7,0.2).curveTo(2.7,0.2,2.6,0.2).curveTo(2.6,0.3,2.5,0.3).closePath();
	this.shape_1.setTransform(20.4,2.2,1.267,1.267);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,0.3).curveTo(-3.5,0.3,-3.6,0.3).curveTo(-3.6,0.2,-3.6,0.2).curveTo(-3.7,0.2,-3.7,0.1).curveTo(-3.7,0,-3.7,-0).curveTo(-3.7,-0.1,-3.7,-0.1).curveTo(-3.7,-0.2,-3.6,-0.2).curveTo(-3.6,-0.2,-3.6,-0.3).curveTo(-3.5,-0.3,-3.4,-0.3).lineTo(3.4,-0.3).curveTo(3.5,-0.3,3.6,-0.3).curveTo(3.6,-0.2,3.6,-0.2).curveTo(3.7,-0.2,3.7,-0.1).curveTo(3.7,-0.1,3.7,-0).curveTo(3.7,0,3.7,0.1).curveTo(3.7,0.2,3.6,0.2).curveTo(3.6,0.2,3.6,0.3).curveTo(3.5,0.3,3.4,0.3).closePath();
	this.shape_2.setTransform(21.5,4,1.267,1.267);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,0.2).curveTo(-4.1,0.2,-4.1,0.2).curveTo(-4.2,0.2,-4.2,0.2).curveTo(-4.2,0.2,-4.3,0.1).curveTo(-4.3,0.1,-4.3,0).curveTo(-4.3,-0.1,-4.3,-0.1).curveTo(-4.2,-0.2,-4.2,-0.2).curveTo(-4.2,-0.2,-4.1,-0.2).curveTo(-4.1,-0.2,-4,-0.2).lineTo(4,-0.2).curveTo(4.1,-0.2,4.1,-0.2).curveTo(4.2,-0.2,4.2,-0.2).curveTo(4.2,-0.2,4.3,-0.1).curveTo(4.3,-0.1,4.3,0).curveTo(4.3,0.1,4.3,0.1).curveTo(4.2,0.2,4.2,0.2).curveTo(4.2,0.2,4.1,0.2).curveTo(4.1,0.2,4,0.2).closePath();
	this.shape_3.setTransform(22.3,5.8,1.267,1.267);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,0.3).curveTo(-4.2,0.3,-4.2,0.3).curveTo(-4.3,0.2,-4.3,0.2).curveTo(-4.3,0.2,-4.3,0.1).curveTo(-4.3,0.1,-4.3,0).curveTo(-4.3,-0.1,-4.3,-0.1).curveTo(-4.3,-0.2,-4.3,-0.2).curveTo(-4.3,-0.2,-4.2,-0.3).curveTo(-4.2,-0.3,-4.1,-0.3).lineTo(4.1,-0.3).curveTo(4.2,-0.3,4.2,-0.3).curveTo(4.3,-0.2,4.3,-0.2).curveTo(4.3,-0.2,4.3,-0.1).curveTo(4.3,-0.1,4.3,0).curveTo(4.3,0.1,4.3,0.1).curveTo(4.3,0.2,4.3,0.2).curveTo(4.3,0.2,4.2,0.3).curveTo(4.2,0.3,4.1,0.3).closePath();
	this.shape_4.setTransform(22.4,7.6,1.267,1.267);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,0.2).curveTo(-4.2,0.2,-4.3,0.2).curveTo(-4.3,0.2,-4.3,0.2).curveTo(-4.4,0.2,-4.4,0.1).curveTo(-4.4,0.1,-4.4,-0).curveTo(-4.4,-0.1,-4.4,-0.1).curveTo(-4.4,-0.2,-4.3,-0.2).curveTo(-4.3,-0.2,-4.3,-0.2).curveTo(-4.2,-0.2,-4.1,-0.2).lineTo(4.2,-0.2).curveTo(4.2,-0.2,4.3,-0.2).curveTo(4.3,-0.2,4.3,-0.2).curveTo(4.4,-0.2,4.4,-0.1).curveTo(4.4,-0.1,4.4,-0).curveTo(4.4,0.1,4.4,0.1).curveTo(4.4,0.2,4.3,0.2).curveTo(4.3,0.2,4.3,0.2).curveTo(4.2,0.2,4.2,0.2).closePath();
	this.shape_5.setTransform(22.4,9.5,1.267,1.267);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,0.3).curveTo(-4.3,0.3,-4.3,0.2).curveTo(-4.4,0.2,-4.4,0.2).curveTo(-4.4,0.2,-4.4,0.1).curveTo(-4.4,0.1,-4.4,0).curveTo(-4.4,-0.1,-4.4,-0.1).curveTo(-4.4,-0.2,-4.4,-0.2).curveTo(-4.4,-0.2,-4.3,-0.2).curveTo(-4.3,-0.3,-4.2,-0.3).lineTo(4.1,-0.3).curveTo(4.2,-0.3,4.3,-0.2).curveTo(4.3,-0.2,4.4,-0.2).curveTo(4.4,-0.2,4.4,-0.1).curveTo(4.5,-0.1,4.5,0).curveTo(4.5,0.1,4.4,0.1).curveTo(4.4,0.2,4.4,0.2).curveTo(4.3,0.2,4.3,0.2).curveTo(4.2,0.3,4.1,0.3).closePath();
	this.shape_6.setTransform(22.5,11.3,1.267,1.267);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,0.3).curveTo(-4.3,0.3,-4.4,0.2).curveTo(-4.4,0.2,-4.4,0.2).curveTo(-4.5,0.2,-4.5,0.1).curveTo(-4.5,0.1,-4.5,-0).curveTo(-4.5,-0.1,-4.5,-0.1).curveTo(-4.5,-0.2,-4.4,-0.2).curveTo(-4.4,-0.2,-4.4,-0.2).curveTo(-4.3,-0.3,-4.2,-0.3).lineTo(4.2,-0.3).curveTo(4.3,-0.3,4.4,-0.2).curveTo(4.4,-0.2,4.4,-0.2).curveTo(4.5,-0.2,4.5,-0.1).curveTo(4.5,-0.1,4.5,-0).curveTo(4.5,0.1,4.5,0.1).curveTo(4.5,0.2,4.4,0.2).curveTo(4.4,0.2,4.4,0.2).curveTo(4.3,0.3,4.2,0.3).closePath();
	this.shape_7.setTransform(22.6,13.1,1.267,1.267);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,0.3).curveTo(-4.3,0.3,-4.4,0.2).curveTo(-4.4,0.2,-4.5,0.2).curveTo(-4.5,0.2,-4.5,0.1).curveTo(-4.5,0.1,-4.5,-0).curveTo(-4.5,-0.1,-4.5,-0.1).curveTo(-4.5,-0.2,-4.5,-0.2).curveTo(-4.4,-0.2,-4.4,-0.2).curveTo(-4.3,-0.3,-4.3,-0.3).lineTo(4.3,-0.3).curveTo(4.3,-0.3,4.4,-0.2).curveTo(4.4,-0.2,4.5,-0.2).curveTo(4.5,-0.2,4.5,-0.1).curveTo(4.5,-0.1,4.5,-0).curveTo(4.5,0.1,4.5,0.1).curveTo(4.5,0.2,4.5,0.2).curveTo(4.4,0.2,4.4,0.2).curveTo(4.3,0.3,4.3,0.3).closePath();
	this.shape_8.setTransform(22.6,15,1.267,1.267);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,0.2).curveTo(-4.4,0.2,-4.4,0.2).curveTo(-4.5,0.2,-4.5,0.2).curveTo(-4.5,0.2,-4.6,0.1).curveTo(-4.6,0.1,-4.6,0).curveTo(-4.6,-0.1,-4.6,-0.1).curveTo(-4.5,-0.2,-4.5,-0.2).curveTo(-4.5,-0.2,-4.4,-0.2).curveTo(-4.4,-0.2,-4.3,-0.2).lineTo(4.3,-0.2).curveTo(4.4,-0.2,4.4,-0.2).curveTo(4.5,-0.2,4.5,-0.2).curveTo(4.5,-0.2,4.6,-0.1).curveTo(4.6,-0.1,4.6,0).curveTo(4.6,0.1,4.6,0.1).curveTo(4.5,0.2,4.5,0.2).curveTo(4.5,0.2,4.4,0.2).curveTo(4.4,0.2,4.3,0.2).closePath();
	this.shape_9.setTransform(22.7,16.7,1.267,1.267);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,0.3).curveTo(-4.4,0.3,-4.5,0.2).curveTo(-4.5,0.2,-4.5,0.2).curveTo(-4.6,0.2,-4.6,0.1).curveTo(-4.6,0.1,-4.6,0).curveTo(-4.6,-0.1,-4.6,-0.1).curveTo(-4.6,-0.2,-4.5,-0.2).curveTo(-4.5,-0.2,-4.5,-0.2).curveTo(-4.4,-0.2,-4.3,-0.3).lineTo(4.3,-0.3).curveTo(4.4,-0.2,4.5,-0.2).curveTo(4.5,-0.2,4.5,-0.2).curveTo(4.6,-0.2,4.6,-0.1).curveTo(4.6,-0.1,4.6,0).curveTo(4.6,0.1,4.6,0.1).curveTo(4.6,0.2,4.5,0.2).curveTo(4.5,0.2,4.5,0.2).curveTo(4.4,0.3,4.3,0.3).closePath();
	this.shape_10.setTransform(22.7,18.6,1.267,1.267);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,0.3).curveTo(-4.5,0.3,-4.5,0.3).curveTo(-4.6,0.2,-4.6,0.2).curveTo(-4.6,0.2,-4.6,0.1).curveTo(-4.6,0,-4.6,-0).curveTo(-4.6,-0.1,-4.6,-0.1).curveTo(-4.6,-0.2,-4.6,-0.2).curveTo(-4.6,-0.2,-4.5,-0.3).curveTo(-4.5,-0.3,-4.4,-0.3).lineTo(4.4,-0.3).curveTo(4.5,-0.3,4.5,-0.3).curveTo(4.6,-0.2,4.6,-0.2).curveTo(4.6,-0.2,4.6,-0.1).curveTo(4.6,-0.1,4.6,-0).curveTo(4.6,0,4.6,0.1).curveTo(4.6,0.2,4.6,0.2).curveTo(4.6,0.2,4.5,0.3).curveTo(4.5,0.3,4.4,0.3).closePath();
	this.shape_11.setTransform(22.8,20.4,1.267,1.267);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,0.2).curveTo(-4.5,0.2,-4.6,0.2).curveTo(-4.6,0.2,-4.6,0.2).curveTo(-4.7,0.2,-4.7,0.1).curveTo(-4.7,0.1,-4.7,-0).curveTo(-4.7,-0.1,-4.7,-0.1).curveTo(-4.7,-0.2,-4.6,-0.2).curveTo(-4.6,-0.2,-4.6,-0.2).curveTo(-4.5,-0.2,-4.4,-0.2).lineTo(4.4,-0.2).curveTo(4.5,-0.2,4.6,-0.2).curveTo(4.6,-0.2,4.6,-0.2).curveTo(4.7,-0.2,4.7,-0.1).curveTo(4.7,-0.1,4.7,-0).curveTo(4.7,0.1,4.7,0.1).curveTo(4.7,0.2,4.6,0.2).curveTo(4.6,0.2,4.6,0.2).curveTo(4.5,0.2,4.4,0.2).closePath();
	this.shape_12.setTransform(22.8,22.2,1.267,1.267);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,0.2).curveTo(-4.5,0.2,-4.6,0.2).curveTo(-4.6,0.2,-4.7,0.2).curveTo(-4.7,0.2,-4.7,0.1).curveTo(-4.7,0.1,-4.7,0).curveTo(-4.7,-0.1,-4.7,-0.1).curveTo(-4.7,-0.2,-4.7,-0.2).curveTo(-4.6,-0.2,-4.6,-0.2).curveTo(-4.5,-0.2,-4.5,-0.2).lineTo(4.5,-0.2).curveTo(4.5,-0.2,4.6,-0.2).curveTo(4.6,-0.2,4.7,-0.2).curveTo(4.7,-0.2,4.7,-0.1).curveTo(4.7,-0.1,4.7,0).curveTo(4.7,0.1,4.7,0.1).curveTo(4.7,0.2,4.7,0.2).curveTo(4.6,0.2,4.6,0.2).curveTo(4.5,0.2,4.5,0.2).closePath();
	this.shape_13.setTransform(22.8,24,1.267,1.267);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,0.3).curveTo(-4.6,0.3,-4.6,0.2).curveTo(-4.7,0.2,-4.7,0.2).curveTo(-4.7,0.2,-4.7,0.1).curveTo(-4.7,0.1,-4.7,-0).curveTo(-4.7,-0.1,-4.7,-0.1).curveTo(-4.7,-0.2,-4.7,-0.2).curveTo(-4.7,-0.2,-4.6,-0.2).curveTo(-4.6,-0.3,-4.5,-0.3).lineTo(4.5,-0.3).curveTo(4.6,-0.3,4.6,-0.2).curveTo(4.7,-0.2,4.7,-0.2).curveTo(4.7,-0.2,4.7,-0.1).curveTo(4.7,-0.1,4.7,-0).curveTo(4.7,0.1,4.7,0.1).curveTo(4.7,0.2,4.7,0.2).curveTo(4.7,0.2,4.6,0.2).curveTo(4.6,0.3,4.5,0.3).closePath();
	this.shape_14.setTransform(22.9,25.8,1.267,1.267);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,0.3).curveTo(-2.1,0.3,-2.2,0.2).curveTo(-2.2,0.2,-2.3,0.2).curveTo(-2.3,0.2,-2.3,0.1).curveTo(-2.3,0.1,-2.3,-0).curveTo(-2.3,-0.1,-2.3,-0.1).curveTo(-2.3,-0.2,-2.3,-0.2).curveTo(-2.2,-0.2,-2.2,-0.2).curveTo(-2.1,-0.3,-2.1,-0.3).lineTo(2.1,-0.3).curveTo(2.1,-0.3,2.2,-0.2).curveTo(2.2,-0.2,2.3,-0.2).curveTo(2.3,-0.2,2.3,-0.1).curveTo(2.3,-0.1,2.3,-0).curveTo(2.3,0.1,2.3,0.1).curveTo(2.3,0.2,2.3,0.2).curveTo(2.2,0.2,2.2,0.2).curveTo(2.1,0.3,2.1,0.3).closePath();
	this.shape_15.setTransform(10.9,25.8,1.267,1.267);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,0.2).curveTo(-4.6,0.2,-4.7,0.2).curveTo(-4.7,0.2,-4.8,0.2).curveTo(-4.8,0.2,-4.8,0.1).curveTo(-4.8,0.1,-4.8,-0).curveTo(-4.8,-0.1,-4.8,-0.1).curveTo(-4.8,-0.2,-4.8,-0.2).curveTo(-4.7,-0.2,-4.7,-0.2).curveTo(-4.6,-0.3,-4.6,-0.3).lineTo(4.6,-0.3).curveTo(4.6,-0.3,4.7,-0.2).curveTo(4.7,-0.2,4.8,-0.2).curveTo(4.8,-0.2,4.8,-0.1).curveTo(4.8,-0.1,4.8,-0).curveTo(4.8,0.1,4.8,0.1).curveTo(4.8,0.2,4.8,0.2).curveTo(4.7,0.2,4.7,0.2).curveTo(4.6,0.2,4.6,0.2).closePath();
	this.shape_16.setTransform(23,27.6,1.267,1.267);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.2,0.2).curveTo(-3.3,0.2,-3.3,0.2).curveTo(-3.4,0.2,-3.4,0.2).curveTo(-3.4,0.2,-3.5,0.1).curveTo(-3.5,0.1,-3.5,-0).curveTo(-3.5,-0.1,-3.5,-0.1).curveTo(-3.4,-0.2,-3.4,-0.2).curveTo(-3.4,-0.2,-3.3,-0.2).curveTo(-3.3,-0.3,-3.2,-0.3).lineTo(3.2,-0.3).curveTo(3.3,-0.3,3.3,-0.2).curveTo(3.4,-0.2,3.4,-0.2).curveTo(3.4,-0.2,3.5,-0.1).curveTo(3.5,-0.1,3.5,-0).curveTo(3.5,0.1,3.5,0.1).curveTo(3.4,0.2,3.4,0.2).curveTo(3.4,0.2,3.3,0.2).curveTo(3.3,0.2,3.2,0.2).closePath();
	this.shape_17.setTransform(9.4,27.6,1.267,1.267);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,0.3).curveTo(-4.7,0.3,-4.7,0.3).curveTo(-4.8,0.2,-4.8,0.2).curveTo(-4.8,0.2,-4.8,0.1).curveTo(-4.8,0.1,-4.8,0).curveTo(-4.8,-0,-4.8,-0.1).curveTo(-4.8,-0.2,-4.8,-0.2).curveTo(-4.8,-0.2,-4.7,-0.3).curveTo(-4.7,-0.3,-4.6,-0.3).lineTo(4.6,-0.3).curveTo(4.7,-0.3,4.7,-0.3).curveTo(4.8,-0.2,4.8,-0.2).curveTo(4.8,-0.2,4.8,-0.1).curveTo(4.9,-0,4.9,0).curveTo(4.9,0.1,4.8,0.1).curveTo(4.8,0.2,4.8,0.2).curveTo(4.8,0.2,4.7,0.3).curveTo(4.7,0.3,4.6,0.3).closePath();
	this.shape_18.setTransform(23,29.5,1.267,1.267);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,0.3).curveTo(-4.1,0.3,-4.2,0.3).curveTo(-4.2,0.2,-4.2,0.2).curveTo(-4.3,0.2,-4.3,0.1).curveTo(-4.3,0.1,-4.3,0).curveTo(-4.3,-0,-4.3,-0.1).curveTo(-4.3,-0.2,-4.2,-0.2).curveTo(-4.2,-0.2,-4.2,-0.3).curveTo(-4.1,-0.3,-4.1,-0.3).lineTo(4,-0.3).curveTo(4.1,-0.3,4.2,-0.3).curveTo(4.2,-0.2,4.2,-0.2).curveTo(4.3,-0.2,4.3,-0.1).curveTo(4.3,-0,4.3,0).curveTo(4.3,0.1,4.3,0.1).curveTo(4.3,0.2,4.2,0.2).curveTo(4.2,0.2,4.2,0.3).curveTo(4.1,0.3,4,0.3).closePath();
	this.shape_19.setTransform(8.4,29.5,1.267,1.267);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,0.3).curveTo(-4.7,0.3,-4.7,0.2).curveTo(-4.8,0.2,-4.8,0.2).curveTo(-4.8,0.2,-4.9,0.1).curveTo(-4.9,0.1,-4.9,0).curveTo(-4.9,-0.1,-4.9,-0.1).curveTo(-4.8,-0.2,-4.8,-0.2).curveTo(-4.8,-0.2,-4.7,-0.2).curveTo(-4.7,-0.3,-4.6,-0.3).lineTo(4.6,-0.3).curveTo(4.7,-0.3,4.7,-0.2).curveTo(4.8,-0.2,4.8,-0.2).curveTo(4.8,-0.2,4.9,-0.1).curveTo(4.9,-0.1,4.9,0).curveTo(4.9,0.1,4.9,0.1).curveTo(4.8,0.2,4.8,0.2).curveTo(4.8,0.2,4.7,0.2).curveTo(4.7,0.3,4.6,0.3).closePath();
	this.shape_20.setTransform(23,31.2,1.267,1.267);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,0.3).curveTo(-4.2,0.3,-4.3,0.2).curveTo(-4.3,0.2,-4.4,0.2).curveTo(-4.4,0.2,-4.4,0.1).curveTo(-4.4,0.1,-4.4,0).curveTo(-4.4,-0.1,-4.4,-0.1).curveTo(-4.4,-0.2,-4.4,-0.2).curveTo(-4.3,-0.2,-4.3,-0.2).curveTo(-4.2,-0.3,-4.2,-0.3).lineTo(4.2,-0.3).curveTo(4.2,-0.3,4.3,-0.2).curveTo(4.3,-0.2,4.4,-0.2).curveTo(4.4,-0.2,4.4,-0.1).curveTo(4.4,-0.1,4.4,0).curveTo(4.4,0.1,4.4,0.1).curveTo(4.4,0.2,4.4,0.2).curveTo(4.3,0.2,4.3,0.2).curveTo(4.2,0.3,4.2,0.3).closePath();
	this.shape_21.setTransform(8.2,31.2,1.267,1.267);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,0.3).curveTo(-4.7,0.3,-4.8,0.3).curveTo(-4.8,0.2,-4.9,0.2).curveTo(-4.9,0.2,-4.9,0.1).curveTo(-4.9,0.1,-4.9,0).curveTo(-4.9,-0,-4.9,-0.1).curveTo(-4.9,-0.2,-4.9,-0.2).curveTo(-4.8,-0.2,-4.8,-0.3).curveTo(-4.7,-0.3,-4.7,-0.3).lineTo(4.7,-0.3).curveTo(4.7,-0.3,4.8,-0.3).curveTo(4.8,-0.2,4.9,-0.2).curveTo(4.9,-0.2,4.9,-0.1).curveTo(4.9,-0,4.9,0).curveTo(4.9,0.1,4.9,0.1).curveTo(4.9,0.2,4.9,0.2).curveTo(4.8,0.2,4.8,0.3).curveTo(4.7,0.3,4.7,0.3).closePath();
	this.shape_22.setTransform(23.1,33.1,1.267,1.267);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,0.3).curveTo(-4.3,0.3,-4.4,0.3).curveTo(-4.4,0.2,-4.4,0.2).curveTo(-4.5,0.2,-4.5,0.1).curveTo(-4.5,0.1,-4.5,0).curveTo(-4.5,-0,-4.5,-0.1).curveTo(-4.5,-0.2,-4.4,-0.2).curveTo(-4.4,-0.2,-4.4,-0.3).curveTo(-4.3,-0.3,-4.2,-0.3).lineTo(4.2,-0.3).curveTo(4.3,-0.3,4.4,-0.3).curveTo(4.4,-0.2,4.4,-0.2).curveTo(4.5,-0.2,4.5,-0.1).curveTo(4.5,-0,4.5,0).curveTo(4.5,0.1,4.5,0.1).curveTo(4.5,0.2,4.4,0.2).curveTo(4.4,0.2,4.4,0.3).curveTo(4.3,0.3,4.2,0.3).closePath();
	this.shape_23.setTransform(8.1,33.1,1.267,1.267);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,0.2).curveTo(-4.8,0.2,-4.8,0.2).curveTo(-4.9,0.2,-4.9,0.2).curveTo(-4.9,0.2,-5,0.1).curveTo(-5,0.1,-5,0).curveTo(-5,-0.1,-5,-0.1).curveTo(-4.9,-0.2,-4.9,-0.2).curveTo(-4.9,-0.2,-4.8,-0.2).curveTo(-4.8,-0.2,-4.7,-0.2).lineTo(4.7,-0.2).curveTo(4.7,-0.2,4.8,-0.2).curveTo(4.9,-0.2,4.9,-0.2).curveTo(4.9,-0.2,5,-0.1).curveTo(5,-0.1,5,0).curveTo(5,0.1,5,0.1).curveTo(4.9,0.2,4.9,0.2).curveTo(4.9,0.2,4.8,0.2).curveTo(4.7,0.2,4.7,0.2).closePath();
	this.shape_24.setTransform(23.2,35,1.267,1.267);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,0.2).curveTo(-4.4,0.2,-4.4,0.2).curveTo(-4.5,0.2,-4.5,0.2).curveTo(-4.6,0.2,-4.6,0.1).curveTo(-4.6,0.1,-4.6,0).curveTo(-4.6,-0.1,-4.6,-0.1).curveTo(-4.6,-0.2,-4.5,-0.2).curveTo(-4.5,-0.2,-4.4,-0.2).curveTo(-4.4,-0.2,-4.3,-0.2).lineTo(4.3,-0.2).curveTo(4.4,-0.2,4.5,-0.2).curveTo(4.5,-0.2,4.5,-0.2).curveTo(4.6,-0.2,4.6,-0.1).curveTo(4.6,-0.1,4.6,0).curveTo(4.6,0.1,4.6,0.1).curveTo(4.6,0.2,4.5,0.2).curveTo(4.5,0.2,4.5,0.2).curveTo(4.4,0.2,4.3,0.2).closePath();
	this.shape_25.setTransform(8,35,1.267,1.267);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,0.3).curveTo(-4.8,0.2,-4.8,0.2).curveTo(-4.9,0.2,-4.9,0.2).curveTo(-4.9,0.2,-5,0.1).curveTo(-5,0.1,-5,-0).curveTo(-5,-0.1,-5,-0.1).curveTo(-4.9,-0.2,-4.9,-0.2).curveTo(-4.9,-0.2,-4.8,-0.2).curveTo(-4.8,-0.3,-4.7,-0.3).lineTo(4.7,-0.3).curveTo(4.8,-0.3,4.8,-0.2).curveTo(4.9,-0.2,4.9,-0.2).curveTo(4.9,-0.2,5,-0.1).curveTo(5,-0.1,5,-0).curveTo(5,0.1,5,0.1).curveTo(4.9,0.2,4.9,0.2).curveTo(4.9,0.2,4.8,0.2).curveTo(4.8,0.2,4.7,0.3).closePath();
	this.shape_26.setTransform(23.2,36.8,1.267,1.267);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,0.3).curveTo(-4.5,0.2,-4.5,0.2).curveTo(-4.6,0.2,-4.6,0.2).curveTo(-4.6,0.2,-4.6,0.1).curveTo(-4.6,0.1,-4.6,-0).curveTo(-4.6,-0.1,-4.6,-0.1).curveTo(-4.6,-0.2,-4.6,-0.2).curveTo(-4.6,-0.2,-4.5,-0.2).curveTo(-4.5,-0.3,-4.4,-0.3).lineTo(4.4,-0.3).curveTo(4.5,-0.3,4.5,-0.2).curveTo(4.6,-0.2,4.6,-0.2).curveTo(4.6,-0.2,4.6,-0.1).curveTo(4.6,-0.1,4.6,-0).curveTo(4.6,0.1,4.6,0.1).curveTo(4.6,0.2,4.6,0.2).curveTo(4.6,0.2,4.5,0.2).curveTo(4.5,0.2,4.4,0.3).closePath();
	this.shape_27.setTransform(7.9,36.8,1.267,1.267);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,0.2).curveTo(-4.8,0.2,-4.9,0.2).curveTo(-4.9,0.2,-4.9,0.2).curveTo(-5,0.2,-5,0.1).curveTo(-5,0.1,-5,-0).curveTo(-5,-0.1,-5,-0.1).curveTo(-5,-0.2,-4.9,-0.2).curveTo(-4.9,-0.2,-4.9,-0.2).curveTo(-4.8,-0.2,-4.7,-0.2).lineTo(4.7,-0.2).curveTo(4.8,-0.2,4.9,-0.2).curveTo(4.9,-0.2,4.9,-0.2).curveTo(5,-0.2,5,-0.1).curveTo(5,-0.1,5,-0).curveTo(5,0.1,5,0.1).curveTo(5,0.2,4.9,0.2).curveTo(4.9,0.2,4.9,0.2).curveTo(4.8,0.2,4.7,0.2).closePath();
	this.shape_28.setTransform(23.2,38.6,1.267,1.267);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,0.2).curveTo(-4.6,0.2,-4.6,0.2).curveTo(-4.7,0.2,-4.7,0.2).curveTo(-4.7,0.2,-4.7,0.1).curveTo(-4.7,0.1,-4.7,-0).curveTo(-4.7,-0.1,-4.7,-0.1).curveTo(-4.7,-0.2,-4.7,-0.2).curveTo(-4.7,-0.2,-4.6,-0.2).curveTo(-4.6,-0.2,-4.5,-0.2).lineTo(4.5,-0.2).curveTo(4.6,-0.2,4.6,-0.2).curveTo(4.7,-0.2,4.7,-0.2).curveTo(4.7,-0.2,4.7,-0.1).curveTo(4.7,-0.1,4.7,-0).curveTo(4.7,0.1,4.7,0.1).curveTo(4.7,0.2,4.7,0.2).curveTo(4.7,0.2,4.6,0.2).curveTo(4.6,0.2,4.5,0.2).closePath();
	this.shape_29.setTransform(7.8,38.6,1.267,1.267);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,0.3).curveTo(-4.9,0.3,-4.9,0.3).curveTo(-5,0.2,-5,0.2).curveTo(-5,0.2,-5,0.1).curveTo(-5,0.1,-5,0).curveTo(-5,-0.1,-5,-0.1).curveTo(-5,-0.2,-5,-0.2).curveTo(-5,-0.2,-4.9,-0.3).curveTo(-4.9,-0.3,-4.8,-0.3).lineTo(4.8,-0.3).curveTo(4.9,-0.3,4.9,-0.3).curveTo(5,-0.2,5,-0.2).curveTo(5,-0.2,5,-0.1).curveTo(5,-0.1,5,0).curveTo(5,0.1,5,0.1).curveTo(5,0.2,5,0.2).curveTo(5,0.2,4.9,0.3).curveTo(4.9,0.3,4.8,0.3).closePath();
	this.shape_30.setTransform(23.3,40.4,1.267,1.267);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,0.3).curveTo(-4.6,0.3,-4.7,0.3).curveTo(-4.7,0.2,-4.7,0.2).curveTo(-4.8,0.2,-4.8,0.1).curveTo(-4.8,0.1,-4.8,0).curveTo(-4.8,-0.1,-4.8,-0.1).curveTo(-4.8,-0.2,-4.7,-0.2).curveTo(-4.7,-0.2,-4.7,-0.3).curveTo(-4.6,-0.3,-4.6,-0.3).lineTo(4.5,-0.3).curveTo(4.6,-0.3,4.7,-0.3).curveTo(4.7,-0.2,4.7,-0.2).curveTo(4.8,-0.2,4.8,-0.1).curveTo(4.8,-0.1,4.8,0).curveTo(4.8,0.1,4.8,0.1).curveTo(4.8,0.2,4.7,0.2).curveTo(4.7,0.2,4.7,0.3).curveTo(4.6,0.3,4.5,0.3).closePath();
	this.shape_31.setTransform(7.7,40.4,1.267,1.267);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,0.3).curveTo(-4.9,0.3,-4.9,0.2).curveTo(-5,0.2,-5,0.2).curveTo(-5,0.2,-5.1,0.1).curveTo(-5.1,0.1,-5.1,-0).curveTo(-5.1,-0.1,-5.1,-0.1).curveTo(-5,-0.2,-5,-0.2).curveTo(-5,-0.2,-4.9,-0.2).curveTo(-4.9,-0.3,-4.8,-0.3).lineTo(4.8,-0.3).curveTo(4.9,-0.3,4.9,-0.2).curveTo(5,-0.2,5,-0.2).curveTo(5,-0.2,5.1,-0.1).curveTo(5.1,-0.1,5.1,-0).curveTo(5.1,0.1,5.1,0.1).curveTo(5,0.2,5,0.2).curveTo(5,0.2,4.9,0.2).curveTo(4.9,0.3,4.8,0.3).closePath();
	this.shape_32.setTransform(23.3,42.2,1.267,1.267);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,0.3).curveTo(-4.7,0.3,-4.7,0.2).curveTo(-4.8,0.2,-4.8,0.2).curveTo(-4.8,0.2,-4.9,0.1).curveTo(-4.9,0.1,-4.9,-0).curveTo(-4.9,-0.1,-4.9,-0.1).curveTo(-4.8,-0.2,-4.8,-0.2).curveTo(-4.8,-0.2,-4.7,-0.2).curveTo(-4.7,-0.3,-4.6,-0.3).lineTo(4.6,-0.3).curveTo(4.7,-0.3,4.7,-0.2).curveTo(4.8,-0.2,4.8,-0.2).curveTo(4.8,-0.2,4.9,-0.1).curveTo(4.9,-0.1,4.9,-0).curveTo(4.9,0.1,4.9,0.1).curveTo(4.8,0.2,4.8,0.2).curveTo(4.8,0.2,4.7,0.2).curveTo(4.7,0.3,4.6,0.3).closePath();
	this.shape_33.setTransform(7.6,42.2,1.267,1.267);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,0.3).curveTo(-5,0.3,-5,0.2).curveTo(-5.1,0.2,-5.1,0.2).curveTo(-5.1,0.2,-5.1,0.1).curveTo(-5.1,0.1,-5.1,-0).curveTo(-5.1,-0.1,-5.1,-0.1).curveTo(-5.1,-0.2,-5.1,-0.2).curveTo(-5.1,-0.2,-5,-0.2).curveTo(-5,-0.3,-4.9,-0.3).lineTo(4.9,-0.3).curveTo(4.9,-0.3,5,-0.2).curveTo(5,-0.2,5.1,-0.2).curveTo(5.1,-0.2,5.1,-0.1).curveTo(5.1,-0.1,5.1,-0).curveTo(5.1,0.1,5.1,0.1).curveTo(5.1,0.2,5.1,0.2).curveTo(5,0.2,5,0.2).curveTo(4.9,0.3,4.9,0.3).closePath();
	this.shape_34.setTransform(23.4,44,1.267,1.267);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,0.3).curveTo(-4.8,0.3,-4.8,0.2).curveTo(-4.9,0.2,-4.9,0.2).curveTo(-4.9,0.2,-5,0.1).curveTo(-5,0.1,-5,-0).curveTo(-5,-0.1,-5,-0.1).curveTo(-4.9,-0.2,-4.9,-0.2).curveTo(-4.9,-0.2,-4.8,-0.2).curveTo(-4.8,-0.3,-4.7,-0.3).lineTo(4.7,-0.3).curveTo(4.8,-0.3,4.8,-0.2).curveTo(4.9,-0.2,4.9,-0.2).curveTo(4.9,-0.2,5,-0.1).curveTo(5,-0.1,5,-0).curveTo(5,0.1,5,0.1).curveTo(4.9,0.2,4.9,0.2).curveTo(4.9,0.2,4.8,0.2).curveTo(4.8,0.3,4.7,0.3).closePath();
	this.shape_35.setTransform(7.5,44,1.267,1.267);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,0.2).curveTo(-5,0.2,-5,0.2).curveTo(-5.1,0.2,-5.1,0.2).curveTo(-5.1,0.2,-5.1,0.1).curveTo(-5.1,0.1,-5.1,0).curveTo(-5.1,-0.1,-5.1,-0.1).curveTo(-5.1,-0.2,-5.1,-0.2).curveTo(-5.1,-0.2,-5,-0.2).curveTo(-5,-0.2,-4.9,-0.2).lineTo(4.9,-0.2).curveTo(4.9,-0.2,5,-0.2).curveTo(5,-0.2,5.1,-0.2).curveTo(5.1,-0.2,5.1,-0.1).curveTo(5.1,-0.1,5.1,0).curveTo(5.1,0.1,5.1,0.1).curveTo(5.1,0.2,5.1,0.2).curveTo(5,0.2,5,0.2).curveTo(4.9,0.2,4.9,0.2).closePath();
	this.shape_36.setTransform(23.4,45.8,1.267,1.267);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,0.2).curveTo(-4.8,0.2,-4.9,0.2).curveTo(-4.9,0.2,-5,0.2).curveTo(-5,0.2,-5,0.1).curveTo(-5,0.1,-5,0).curveTo(-5,-0.1,-5,-0.1).curveTo(-5,-0.2,-5,-0.2).curveTo(-4.9,-0.2,-4.9,-0.2).curveTo(-4.8,-0.2,-4.8,-0.2).lineTo(4.8,-0.2).curveTo(4.8,-0.2,4.9,-0.2).curveTo(4.9,-0.2,5,-0.2).curveTo(5,-0.2,5,-0.1).curveTo(5,-0.1,5,0).curveTo(5,0.1,5,0.1).curveTo(5,0.2,5,0.2).curveTo(4.9,0.2,4.9,0.2).curveTo(4.8,0.2,4.8,0.2).closePath();
	this.shape_37.setTransform(7.4,45.8,1.267,1.267);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,0.3).curveTo(-5,0.3,-5,0.2).curveTo(-5.1,0.2,-5.1,0.2).curveTo(-5.1,0.2,-5.2,0.1).curveTo(-5.2,0.1,-5.2,0).curveTo(-5.2,-0.1,-5.2,-0.1).curveTo(-5.1,-0.2,-5.1,-0.2).curveTo(-5.1,-0.2,-5,-0.2).curveTo(-5,-0.2,-4.9,-0.3).lineTo(4.9,-0.3).curveTo(5,-0.2,5,-0.2).curveTo(5.1,-0.2,5.1,-0.2).curveTo(5.1,-0.2,5.2,-0.1).curveTo(5.2,-0.1,5.2,0).curveTo(5.2,0.1,5.2,0.1).curveTo(5.1,0.2,5.1,0.2).curveTo(5.1,0.2,5,0.2).curveTo(5,0.3,4.9,0.3).closePath();
	this.shape_38.setTransform(23.4,47.7,1.267,1.267);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,0.3).curveTo(-4.9,0.3,-5,0.2).curveTo(-5,0.2,-5,0.2).curveTo(-5.1,0.2,-5.1,0.1).curveTo(-5.1,0.1,-5.1,0).curveTo(-5.1,-0.1,-5.1,-0.1).curveTo(-5.1,-0.2,-5,-0.2).curveTo(-5,-0.2,-5,-0.2).curveTo(-4.9,-0.2,-4.8,-0.3).lineTo(4.8,-0.3).curveTo(4.9,-0.2,5,-0.2).curveTo(5,-0.2,5,-0.2).curveTo(5.1,-0.2,5.1,-0.1).curveTo(5.1,-0.1,5.1,0).curveTo(5.1,0.1,5.1,0.1).curveTo(5.1,0.2,5,0.2).curveTo(5,0.2,5,0.2).curveTo(4.9,0.3,4.8,0.3).closePath();
	this.shape_39.setTransform(7.4,47.7,1.267,1.267);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,0.3).curveTo(-5,0.3,-5.1,0.2).curveTo(-5.1,0.2,-5.1,0.2).curveTo(-5.2,0.2,-5.2,0.1).curveTo(-5.2,0.1,-5.2,0).curveTo(-5.2,-0.1,-5.2,-0.1).curveTo(-5.2,-0.2,-5.1,-0.2).curveTo(-5.1,-0.2,-5.1,-0.2).curveTo(-5,-0.3,-4.9,-0.3).lineTo(5,-0.3).curveTo(5,-0.3,5.1,-0.2).curveTo(5.1,-0.2,5.1,-0.2).curveTo(5.2,-0.2,5.2,-0.1).curveTo(5.2,-0.1,5.2,0).curveTo(5.2,0.1,5.2,0.1).curveTo(5.2,0.2,5.1,0.2).curveTo(5.1,0.2,5.1,0.2).curveTo(5,0.3,5,0.3).closePath();
	this.shape_40.setTransform(23.4,49.5,1.267,1.267);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,0.3).curveTo(-5,0.3,-5,0.2).curveTo(-5.1,0.2,-5.1,0.2).curveTo(-5.1,0.2,-5.2,0.1).curveTo(-5.2,0.1,-5.2,0).curveTo(-5.2,-0.1,-5.2,-0.1).curveTo(-5.1,-0.2,-5.1,-0.2).curveTo(-5.1,-0.2,-5,-0.2).curveTo(-5,-0.3,-4.9,-0.3).lineTo(4.9,-0.3).curveTo(5,-0.3,5,-0.2).curveTo(5.1,-0.2,5.1,-0.2).curveTo(5.1,-0.2,5.2,-0.1).curveTo(5.2,-0.1,5.2,0).curveTo(5.2,0.1,5.2,0.1).curveTo(5.1,0.2,5.1,0.2).curveTo(5.1,0.2,5,0.2).curveTo(5,0.3,4.9,0.3).closePath();
	this.shape_41.setTransform(7.3,49.5,1.267,1.267);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,0.2).curveTo(-5,0.2,-5.1,0.2).curveTo(-5.1,0.2,-5.2,0.2).curveTo(-5.2,0.2,-5.2,0.1).curveTo(-5.2,0.1,-5.2,-0).curveTo(-5.2,-0.1,-5.2,-0.1).curveTo(-5.2,-0.2,-5.2,-0.2).curveTo(-5.1,-0.2,-5.1,-0.2).curveTo(-5,-0.2,-5,-0.2).lineTo(5,-0.2).curveTo(5,-0.2,5.1,-0.2).curveTo(5.1,-0.2,5.2,-0.2).curveTo(5.2,-0.2,5.2,-0.1).curveTo(5.2,-0.1,5.2,-0).curveTo(5.2,0.1,5.2,0.1).curveTo(5.2,0.2,5.2,0.2).curveTo(5.1,0.2,5.1,0.2).curveTo(5,0.2,5,0.2).closePath();
	this.shape_42.setTransform(23.5,51.3,1.267,1.267);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,0.2).curveTo(-5,0.2,-5.1,0.2).curveTo(-5.1,0.2,-5.2,0.2).curveTo(-5.2,0.2,-5.2,0.1).curveTo(-5.2,0.1,-5.2,-0).curveTo(-5.2,-0.1,-5.2,-0.1).curveTo(-5.2,-0.2,-5.2,-0.2).curveTo(-5.1,-0.2,-5.1,-0.2).curveTo(-5,-0.2,-5,-0.2).lineTo(5,-0.2).curveTo(5,-0.2,5.1,-0.2).curveTo(5.1,-0.2,5.2,-0.2).curveTo(5.2,-0.2,5.2,-0.1).curveTo(5.2,-0.1,5.2,-0).curveTo(5.2,0.1,5.2,0.1).curveTo(5.2,0.2,5.2,0.2).curveTo(5.1,0.2,5.1,0.2).curveTo(5,0.2,5,0.2).closePath();
	this.shape_43.setTransform(7.2,51.3,1.267,1.267);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,0.2).curveTo(-5.1,0.2,-5.1,0.2).curveTo(-5.2,0.2,-5.2,0.2).curveTo(-5.2,0.2,-5.3,0.1).curveTo(-5.3,0.1,-5.3,0).curveTo(-5.3,-0.1,-5.3,-0.1).curveTo(-5.2,-0.2,-5.2,-0.2).curveTo(-5.2,-0.2,-5.1,-0.2).curveTo(-5.1,-0.2,-5,-0.2).lineTo(5,-0.2).curveTo(5.1,-0.2,5.1,-0.2).curveTo(5.2,-0.2,5.2,-0.2).curveTo(5.2,-0.2,5.3,-0.1).curveTo(5.3,-0.1,5.3,0).curveTo(5.3,0.1,5.3,0.1).curveTo(5.2,0.2,5.2,0.2).curveTo(5.2,0.2,5.1,0.2).curveTo(5.1,0.2,5,0.2).closePath();
	this.shape_44.setTransform(23.5,53.1,1.267,1.267);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,0.2).curveTo(-5.1,0.2,-5.2,0.2).curveTo(-5.2,0.2,-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.1).curveTo(-5.3,0.1,-5.3,0).curveTo(-5.3,-0.1,-5.3,-0.1).curveTo(-5.3,-0.2,-5.2,-0.2).curveTo(-5.2,-0.2,-5.2,-0.2).curveTo(-5.1,-0.2,-5.1,-0.2).lineTo(5,-0.2).curveTo(5.1,-0.2,5.2,-0.2).curveTo(5.2,-0.2,5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.1).curveTo(5.3,-0.1,5.3,0).curveTo(5.3,0.1,5.3,0.1).curveTo(5.3,0.2,5.2,0.2).curveTo(5.2,0.2,5.2,0.2).curveTo(5.1,0.2,5,0.2).closePath();
	this.shape_45.setTransform(7.1,53.1,1.267,1.267);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,0.3).curveTo(-5.1,0.3,-5.2,0.3).curveTo(-5.2,0.2,-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.1).curveTo(-5.3,0.1,-5.3,0).curveTo(-5.3,-0.1,-5.3,-0.1).curveTo(-5.3,-0.2,-5.2,-0.2).curveTo(-5.2,-0.2,-5.2,-0.3).curveTo(-5.1,-0.3,-5,-0.3).lineTo(5.1,-0.3).curveTo(5.1,-0.3,5.2,-0.3).curveTo(5.2,-0.2,5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.1).curveTo(5.3,-0.1,5.3,0).curveTo(5.3,0.1,5.3,0.1).curveTo(5.3,0.2,5.2,0.2).curveTo(5.2,0.2,5.2,0.3).curveTo(5.1,0.3,5.1,0.3).closePath();
	this.shape_46.setTransform(23.6,55,1.267,1.267);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,0.3).curveTo(-5.2,0.3,-5.2,0.3).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.3,0.2,-5.3,0.1).curveTo(-5.4,0.1,-5.4,0).curveTo(-5.4,-0.1,-5.3,-0.1).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.3).curveTo(-5.2,-0.3,-5.1,-0.3).lineTo(5.1,-0.3).curveTo(5.2,-0.3,5.2,-0.3).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.3,-0.2,5.3,-0.1).curveTo(5.3,-0.1,5.3,0).curveTo(5.3,0.1,5.3,0.1).curveTo(5.3,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.3).curveTo(5.2,0.3,5.1,0.3).closePath();
	this.shape_47.setTransform(7,55,1.267,1.267);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,0.3).curveTo(-5.1,0.3,-5.2,0.3).curveTo(-5.2,0.2,-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.1).curveTo(-5.3,0,-5.3,-0).curveTo(-5.3,-0.1,-5.3,-0.1).curveTo(-5.3,-0.2,-5.2,-0.2).curveTo(-5.2,-0.2,-5.2,-0.3).curveTo(-5.1,-0.3,-5,-0.3).lineTo(5.1,-0.3).curveTo(5.1,-0.3,5.2,-0.3).curveTo(5.2,-0.2,5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.1).curveTo(5.3,-0.1,5.3,-0).curveTo(5.3,0,5.3,0.1).curveTo(5.3,0.2,5.2,0.2).curveTo(5.2,0.2,5.2,0.3).curveTo(5.1,0.3,5.1,0.3).closePath();
	this.shape_48.setTransform(23.6,56.8,1.267,1.267);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,0.3).curveTo(-5.2,0.3,-5.2,0.3).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.3,0.2,-5.3,0.1).curveTo(-5.4,0,-5.4,-0).curveTo(-5.4,-0.1,-5.3,-0.1).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.3).curveTo(-5.2,-0.3,-5.1,-0.3).lineTo(5.1,-0.3).curveTo(5.2,-0.3,5.2,-0.3).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.3,-0.2,5.3,-0.1).curveTo(5.3,-0.1,5.3,-0).curveTo(5.3,0,5.3,0.1).curveTo(5.3,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.3).curveTo(5.2,0.3,5.1,0.3).closePath();
	this.shape_49.setTransform(7,56.8,1.267,1.267);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,0.3).curveTo(-5.1,0.3,-5.2,0.2).curveTo(-5.2,0.2,-5.3,0.2).curveTo(-5.3,0.2,-5.3,0.1).curveTo(-5.3,0.1,-5.3,0).curveTo(-5.3,-0.1,-5.3,-0.1).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.2,-0.2,-5.2,-0.2).curveTo(-5.1,-0.3,-5.1,-0.3).lineTo(5.1,-0.3).curveTo(5.1,-0.3,5.2,-0.2).curveTo(5.2,-0.2,5.3,-0.2).curveTo(5.3,-0.2,5.3,-0.1).curveTo(5.3,-0.1,5.3,0).curveTo(5.3,0.1,5.3,0.1).curveTo(5.3,0.2,5.3,0.2).curveTo(5.2,0.2,5.2,0.2).curveTo(5.1,0.3,5.1,0.3).closePath();
	this.shape_50.setTransform(23.6,58.6,1.267,1.267);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.2,0.3,-5.3,0.2).curveTo(-5.3,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.2,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.2,-0.3,5.3,-0.2).curveTo(5.3,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.3,0.2,5.3,0.2).curveTo(5.2,0.3,5.2,0.3).closePath();
	this.shape_51.setTransform(6.9,58.6,1.267,1.267);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,0.3).curveTo(-5.2,0.3,-5.2,0.3).curveTo(-5.3,0.3,-5.3,0.2).curveTo(-5.3,0.2,-5.4,0.2).curveTo(-5.4,0.1,-5.4,0.1).curveTo(-5.4,-0,-5.4,-0.1).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.3,-0.3,-5.2,-0.3).curveTo(-5.2,-0.3,-5.1,-0.3).lineTo(5.1,-0.3).curveTo(5.2,-0.3,5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.2).curveTo(5.3,-0.2,5.4,-0.1).curveTo(5.4,-0,5.4,0.1).curveTo(5.4,0.1,5.4,0.2).curveTo(5.3,0.2,5.3,0.2).curveTo(5.3,0.3,5.2,0.3).curveTo(5.2,0.3,5.1,0.3).closePath();
	this.shape_52.setTransform(23.7,60.4,1.267,1.267);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.2,0.3,-5.3,0.3).curveTo(-5.3,0.3,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.1,-5.4,0.1).curveTo(-5.4,-0,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.3,-0.3,-5.3,-0.3).curveTo(-5.2,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.2,-0.3,5.3,-0.3).curveTo(5.3,-0.3,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0,5.4,0.1).curveTo(5.4,0.1,5.4,0.2).curveTo(5.4,0.2,5.4,0.2).curveTo(5.3,0.3,5.3,0.3).curveTo(5.2,0.3,5.2,0.3).closePath();
	this.shape_53.setTransform(6.9,60.4,1.267,1.267);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,0.2).curveTo(-5.2,0.2,-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.3,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.2).curveTo(-5.2,-0.2,-5.1,-0.2).lineTo(5.1,-0.2).curveTo(5.2,-0.2,5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.3,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.3,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).curveTo(5.2,0.2,5.1,0.2).closePath();
	this.shape_54.setTransform(23.7,62.2,1.267,1.267);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.2).lineTo(5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).closePath();
	this.shape_55.setTransform(6.9,62.2,1.267,1.267);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,0.2).curveTo(-5.2,0.2,-5.3,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.2,-0.2,-5.1,-0.2).lineTo(5.2,-0.2).curveTo(5.2,-0.2,5.3,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.3,0.2).curveTo(5.2,0.2,5.2,0.2).closePath();
	this.shape_56.setTransform(23.7,64.1,1.267,1.267);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.2).lineTo(5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).closePath();
	this.shape_57.setTransform(6.9,64.1,1.267,1.267);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,0.3).curveTo(-5.2,0.2,-5.3,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.2,-0.3,-5.1,-0.3).lineTo(5.2,-0.3).curveTo(5.2,-0.3,5.3,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.3,0.2).curveTo(5.2,0.2,5.2,0.3).closePath();
	this.shape_58.setTransform(23.7,65.8,1.267,1.267);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.3).closePath();
	this.shape_59.setTransform(6.9,65.8,1.267,1.267);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.2,0.2,-5.3,0.2).curveTo(-5.3,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.2,-0.2,-5.2,-0.2).lineTo(5.2,-0.2).curveTo(5.2,-0.2,5.3,-0.2).curveTo(5.3,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.3,0.2,5.3,0.2).curveTo(5.2,0.2,5.2,0.2).closePath();
	this.shape_60.setTransform(23.7,67.7,1.267,1.267);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.2).lineTo(5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).closePath();
	this.shape_61.setTransform(6.9,67.7,1.267,1.267);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.2,0.2,-5.3,0.2).curveTo(-5.3,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.2,-0.2,-5.2,-0.2).lineTo(5.2,-0.2).curveTo(5.2,-0.2,5.3,-0.2).curveTo(5.3,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.3,0.2,5.3,0.2).curveTo(5.2,0.2,5.2,0.2).closePath();
	this.shape_62.setTransform(23.7,69.5,1.267,1.267);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.2).lineTo(5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).closePath();
	this.shape_63.setTransform(6.9,69.5,1.267,1.267);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.2,0.3,-5.3,0.2).curveTo(-5.3,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.3,-0.2,-5.3,-0.2).curveTo(-5.2,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.2,-0.3,5.3,-0.2).curveTo(5.3,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.3,0.2,5.3,0.2).curveTo(5.2,0.3,5.2,0.3).closePath();
	this.shape_64.setTransform(23.7,71.3,1.267,1.267);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.3,0.3,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.3,5.2,0.3).closePath();
	this.shape_65.setTransform(6.9,71.3,1.267,1.267);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.3,0.3,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.5,-0.1,5.5,-0).curveTo(5.5,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.3,5.2,0.3).closePath();
	this.shape_66.setTransform(23.8,73.1,1.267,1.267);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.3,0.3,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.3,5.2,0.3).closePath();
	this.shape_67.setTransform(6.9,73.1,1.267,1.267);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.5,-0.1,5.5,-0).curveTo(5.5,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).closePath();
	this.shape_68.setTransform(23.8,75,1.267,1.267);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).closePath();
	this.shape_69.setTransform(6.9,75,1.267,1.267);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.3,0.3,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.5,-0.1,5.5,0).curveTo(5.5,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.3,5.2,0.3).closePath();
	this.shape_70.setTransform(23.8,76.7,1.267,1.267);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.3,0.3,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.3,5.2,0.3).closePath();
	this.shape_71.setTransform(6.9,76.7,1.267,1.267);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.3,0.3,-5.3,0.3).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.3).curveTo(-5.3,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.3).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.5,-0.1,5.5,-0).curveTo(5.5,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.3).curveTo(5.3,0.3,5.2,0.3).closePath();
	this.shape_72.setTransform(23.8,78.6,1.267,1.267);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.3).curveTo(-5.3,0.3,-5.3,0.3).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,-0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.3).curveTo(-5.3,-0.3,-5.2,-0.3).lineTo(5.2,-0.3).curveTo(5.3,-0.3,5.3,-0.3).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,-0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.3).curveTo(5.3,0.3,5.2,0.3).closePath();
	this.shape_73.setTransform(6.9,78.6,1.267,1.267);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.4,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.2).lineTo(5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.5,-0.1,5.5,0).curveTo(5.5,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).closePath();
	this.shape_74.setTransform(23.8,80.5,1.267,1.267);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,0.2).curveTo(-5.3,0.2,-5.3,0.2).curveTo(-5.4,0.2,-5.4,0.2).curveTo(-5.4,0.2,-5.4,0.1).curveTo(-5.4,0.1,-5.5,0).curveTo(-5.4,-0.1,-5.4,-0.1).curveTo(-5.4,-0.2,-5.4,-0.2).curveTo(-5.4,-0.2,-5.3,-0.2).curveTo(-5.3,-0.2,-5.2,-0.2).lineTo(5.2,-0.2).curveTo(5.3,-0.2,5.3,-0.2).curveTo(5.4,-0.2,5.4,-0.2).curveTo(5.4,-0.2,5.4,-0.1).curveTo(5.4,-0.1,5.4,0).curveTo(5.4,0.1,5.4,0.1).curveTo(5.4,0.2,5.4,0.2).curveTo(5.4,0.2,5.3,0.2).curveTo(5.3,0.2,5.2,0.2).closePath();
	this.shape_75.setTransform(6.9,80.5,1.267,1.267);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,80.8);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,255,0.824)").beginStroke().moveTo(-29.7,9.1).lineTo(-28.5,8.1).curveTo(-27.9,7.6,-27.5,6.9).curveTo(-27.2,6.1,-27,4.8).curveTo(-26.8,3.6,-26.8,1.6).lineTo(-26.8,-10.6).lineTo(-18.1,-10.6).lineTo(-18.1,10.2).lineTo(-20.4,10.2).lineTo(-20.4,-8.4).lineTo(-24.6,-8.4).lineTo(-24.6,-0.2).curveTo(-24.6,2.6,-24.9,4.5).curveTo(-25.1,6.4,-25.5,7.6).curveTo(-26,8.8,-26.7,9.5).curveTo(-27.5,10.3,-28.6,10.8).closePath().moveTo(3.7,10.1).curveTo(2.8,9.9,2.2,9.3).curveTo(1.6,8.7,1.2,7.8).curveTo(0.9,6.9,1,5.7).lineTo(3.3,5.2).curveTo(3.3,6.9,3.9,7.6).curveTo(4.5,8.2,5.6,8.2).curveTo(6.1,8.2,6.6,8.1).curveTo(7,7.9,7.3,7.4).curveTo(7.6,6.9,7.8,6.2).curveTo(8,5.4,8,4.2).lineTo(7.9,2.8).curveTo(7.8,2.1,7.5,1.6).curveTo(7.3,1.1,6.8,0.8).curveTo(6.4,0.5,5.7,0.5).lineTo(4.4,0.5).lineTo(4.4,-1.6).lineTo(5.8,-1.6).curveTo(6.4,-1.6,6.9,-1.9).curveTo(7.3,-2.2,7.6,-2.7).curveTo(7.8,-3.2,8,-3.9).lineTo(8.1,-5.3).curveTo(8.1,-6.3,7.9,-7).curveTo(7.7,-7.6,7.3,-8).curveTo(7,-8.4,6.5,-8.5).curveTo(6.1,-8.7,5.6,-8.7).curveTo(4.3,-8.7,3.8,-7.8).curveTo(3.3,-6.9,3.3,-5.7).lineTo(1,-6.2).curveTo(1,-8.4,2.3,-9.6).curveTo(3.6,-10.8,5.6,-10.8).curveTo(6.7,-10.8,7.6,-10.6).curveTo(8.5,-10.3,9.1,-9.7).curveTo(9.8,-9.1,10.1,-8.1).curveTo(10.4,-7,10.4,-5.4).lineTo(10.4,-4.2).curveTo(10.3,-3.5,10.1,-2.8).curveTo(9.9,-2.1,9.5,-1.5).curveTo(9.2,-1,8.6,-0.7).lineTo(8.6,-0.6).curveTo(9.2,-0.2,9.6,0.3).curveTo(10,0.9,10.2,1.5).curveTo(10.4,2.2,10.4,2.9).lineTo(10.4,4.2).curveTo(10.4,7.3,9.3,8.8).curveTo(8.2,10.4,5.6,10.4).curveTo(4.6,10.4,3.7,10.1).closePath().moveTo(-7.6,10).curveTo(-8.5,9.7,-9,9).curveTo(-9.6,8.3,-9.9,7.4).curveTo(-10.1,6.4,-10.1,5.3).lineTo(-10.1,0.6).lineTo(-12.5,0.6).lineTo(-12.5,10.2).lineTo(-14.9,10.2).lineTo(-14.9,-10.6).lineTo(-12.5,-10.6).lineTo(-12.5,-1.5).lineTo(-10.1,-1.5).lineTo(-10.1,-5).curveTo(-10.1,-6.1,-9.9,-7.1).curveTo(-9.8,-8.2,-9.3,-9).curveTo(-8.7,-9.8,-7.8,-10.3).curveTo(-6.9,-10.8,-5.5,-10.8).curveTo(-4.1,-10.8,-3.1,-10.4).curveTo(-2.2,-10,-1.7,-9.2).curveTo(-1.2,-8.4,-1,-7.4).curveTo(-0.8,-6.3,-0.8,-5.1).lineTo(-0.8,4.6).curveTo(-0.8,7.4,-1.9,8.9).curveTo(-3,10.4,-5.5,10.4).curveTo(-6.8,10.4,-7.6,10).closePath().moveTo(-6.9,-8.2).curveTo(-7.3,-7.8,-7.5,-7.2).curveTo(-7.7,-6.6,-7.7,-5.9).lineTo(-7.8,-4.8).lineTo(-7.8,5.3).lineTo(-7.7,6.3).curveTo(-7.6,6.8,-7.4,7.3).curveTo(-7.1,7.7,-6.7,8).curveTo(-6.3,8.3,-5.6,8.3).curveTo(-4.8,8.3,-4.4,8).curveTo(-3.9,7.7,-3.7,7.2).curveTo(-3.4,6.7,-3.3,6.1).lineTo(-3.2,4.9).lineTo(-3.2,-5.4).lineTo(-3.3,-6.5).curveTo(-3.3,-7.1,-3.6,-7.6).curveTo(-3.8,-8.1,-4.3,-8.4).curveTo(-4.7,-8.7,-5.5,-8.7).curveTo(-6.4,-8.7,-6.9,-8.2).closePath().moveTo(-51.1,9.1).curveTo(-52.3,7.8,-52.3,5.4).lineTo(-52.3,-4.9).curveTo(-52.3,-6,-52.1,-7.1).curveTo(-51.9,-8.2,-51.4,-9).curveTo(-50.9,-9.8,-50,-10.3).curveTo(-49.1,-10.8,-47.6,-10.8).curveTo(-45.2,-10.8,-44.1,-9.5).curveTo(-43,-8.2,-43,-6.1).lineTo(-45.4,-5.6).curveTo(-45.3,-7,-45.9,-7.8).curveTo(-46.4,-8.6,-47.6,-8.6).curveTo(-48.4,-8.6,-48.8,-8.3).curveTo(-49.3,-8,-49.5,-7.5).curveTo(-49.8,-7,-49.9,-6.4).lineTo(-49.9,-5.3).lineTo(-49.9,5.3).lineTo(-49.9,6.2).curveTo(-49.8,6.8,-49.5,7.2).curveTo(-49.3,7.6,-48.8,7.9).curveTo(-48.4,8.2,-47.7,8.2).curveTo(-46.5,8.2,-45.9,7.5).curveTo(-45.4,6.8,-45.4,5.2).lineTo(-42.9,5.7).curveTo(-43,7.9,-44.1,9.2).curveTo(-45.3,10.4,-47.6,10.4).curveTo(-50,10.4,-51.1,9.1).closePath().moveTo(-76,9.3).curveTo(-77.1,8.3,-77.3,6.3).lineTo(-74.9,5.8).curveTo(-74.8,8.3,-72.6,8.3).curveTo(-71.9,8.3,-71.5,8).curveTo(-71,7.7,-70.8,7.2).curveTo(-70.5,6.8,-70.4,6.3).lineTo(-70.3,5.3).lineTo(-70.3,0.7).lineTo(-75.2,0.7).lineTo(-75.2,-1.6).lineTo(-70.3,-1.6).lineTo(-70.3,-5.5).curveTo(-70.3,-6.9,-70.9,-7.8).curveTo(-71.4,-8.6,-72.8,-8.6).curveTo(-73.9,-8.6,-74.4,-7.9).curveTo(-74.9,-7.1,-75,-6).lineTo(-77.4,-6.5).curveTo(-77.2,-8.5,-76,-9.7).curveTo(-74.9,-10.8,-72.6,-10.8).curveTo(-71.1,-10.8,-70.2,-10.3).curveTo(-69.3,-9.8,-68.8,-9).curveTo(-68.3,-8.2,-68.1,-7.2).curveTo(-68,-6.3,-68,-5.3).lineTo(-68,5.4).curveTo(-68,7.8,-69.1,9.1).curveTo(-70.3,10.4,-72.7,10.4).curveTo(-74.8,10.4,-76,9.3).closePath().moveTo(68.4,10.2).lineTo(68.4,-10.6).lineTo(77.4,-10.6).lineTo(77.4,-8.5).lineTo(70.8,-8.5).lineTo(70.8,-1.5).lineTo(76.5,-1.5).lineTo(76.5,0.7).lineTo(70.8,0.7).lineTo(70.8,8.1).lineTo(77.4,8.1).lineTo(77.4,10.2).closePath().moveTo(62.7,10.2).lineTo(62.7,-10.6).lineTo(65.1,-10.6).lineTo(65.1,10.2).closePath().moveTo(51.5,10.2).lineTo(51.5,-10.6).lineTo(53.9,-10.6).lineTo(53.9,-2.3).lineTo(55.6,-2.3).curveTo(57.3,-2.3,58.4,-1.8).curveTo(59.5,-1.4,60.1,-0.5).curveTo(60.7,0.3,60.9,1.4).curveTo(61.1,2.5,61.1,3.8).curveTo(61.1,5.3,60.9,6.5).curveTo(60.6,7.6,60,8.5).curveTo(59.4,9.3,58.4,9.8).curveTo(57.4,10.2,55.8,10.2).closePath().moveTo(53.9,8).lineTo(55.6,8).curveTo(56.7,8,57.3,7.7).curveTo(57.9,7.3,58.2,6.8).curveTo(58.6,6.2,58.7,5.5).lineTo(58.8,3.9).lineTo(58.7,2.4).curveTo(58.6,1.7,58.3,1.1).curveTo(57.9,0.6,57.3,0.3).curveTo(56.6,-0,55.5,-0).lineTo(53.9,-0).closePath().moveTo(46,10.2).lineTo(46,0.6).lineTo(41.2,0.6).lineTo(41.2,10.2).lineTo(38.8,10.2).lineTo(38.8,-10.6).lineTo(41.2,-10.6).lineTo(41.2,-1.5).lineTo(46,-1.5).lineTo(46,-10.6).lineTo(48.4,-10.6).lineTo(48.4,10.2).closePath().moveTo(26.4,10.2).lineTo(26.4,-10.6).lineTo(30.8,-10.6).curveTo(33.5,-10.6,34.6,-9.2).curveTo(35.7,-7.8,35.7,-5.1).curveTo(35.7,-3.5,35.3,-2.5).curveTo(34.8,-1.5,33.6,-0.8).lineTo(33.6,-0.7).curveTo(34.9,-0.3,35.4,1).curveTo(35.9,2.2,35.9,4.1).curveTo(35.9,7.3,34.6,8.8).curveTo(33.2,10.2,30.4,10.2).closePath().moveTo(28.8,8.1).lineTo(30.7,8.1).curveTo(31.6,8.1,32.2,7.7).curveTo(32.8,7.4,33.1,6.8).curveTo(33.4,6.2,33.5,5.5).lineTo(33.6,3.8).curveTo(33.6,2.1,33,1.2).curveTo(32.4,0.3,30.5,0.3).lineTo(28.8,0.3).closePath().moveTo(28.8,-1.8).lineTo(30.4,-1.8).curveTo(32,-1.8,32.7,-2.7).curveTo(33.5,-3.5,33.5,-5.2).curveTo(33.5,-6.8,32.8,-7.6).curveTo(32.1,-8.5,30.4,-8.5).lineTo(28.8,-8.5).closePath().moveTo(21.1,10.2).lineTo(21.1,-4.4).lineTo(21,-4.4).lineTo(15.7,10.2).lineTo(13.5,10.2).lineTo(13.5,-10.6).lineTo(15.8,-10.6).lineTo(15.8,4.1).lineTo(15.9,4.1).lineTo(21.1,-10.6).lineTo(23.4,-10.6).lineTo(23.4,10.2).closePath().moveTo(-32.2,10.2).lineTo(-33.6,3.9).curveTo(-33.8,2.9,-34.2,2.2).curveTo(-34.5,1.6,-35,1.2).curveTo(-35.5,0.9,-36,0.8).lineTo(-37.1,0.7).lineTo(-38.3,0.7).lineTo(-38.3,10.2).lineTo(-40.6,10.2).lineTo(-40.6,-10.6).lineTo(-38.3,-10.6).lineTo(-38.3,-1.6).lineTo(-37.2,-1.6).lineTo(-36.2,-1.7).curveTo(-35.8,-1.7,-35.3,-2.1).curveTo(-34.8,-2.4,-34.4,-3).curveTo(-34,-3.6,-33.8,-4.6).lineTo(-32.3,-10.6).lineTo(-30.2,-10.6).lineTo(-31.5,-4.5).curveTo(-31.9,-3,-32.5,-2).curveTo(-33.2,-0.9,-34.1,-0.6).curveTo(-32.9,-0.2,-32.3,0.9).curveTo(-31.7,1.9,-31.3,3.5).lineTo(-29.8,10.2).closePath().moveTo(-56.4,10.2).lineTo(-57.8,3.9).curveTo(-58,2.9,-58.4,2.2).curveTo(-58.7,1.6,-59.2,1.2).curveTo(-59.7,0.9,-60.2,0.8).lineTo(-61.3,0.7).lineTo(-62.5,0.7).lineTo(-62.5,10.2).lineTo(-64.8,10.2).lineTo(-64.8,-10.6).lineTo(-62.5,-10.6).lineTo(-62.5,-1.6).lineTo(-61.4,-1.6).lineTo(-60.4,-1.7).curveTo(-60,-1.7,-59.5,-2.1).curveTo(-59,-2.4,-58.6,-3).curveTo(-58.2,-3.6,-58,-4.6).lineTo(-56.5,-10.6).lineTo(-54.4,-10.6).lineTo(-55.7,-4.5).curveTo(-56.1,-3,-56.7,-2).curveTo(-57.4,-0.9,-58.3,-0.6).curveTo(-57.1,-0.2,-56.5,0.9).curveTo(-55.9,1.9,-55.5,3.5).lineTo(-54,10.2).closePath();
	this.shape.setTransform(86.2,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,-1.8,154.8,21.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFDD57").beginStroke().moveTo(-63.9,8.8).lineTo(-62.8,7.9).curveTo(-62.2,7.4,-61.9,6.6).curveTo(-61.5,5.8,-61.3,4.6).curveTo(-61.1,3.4,-61.1,1.5).lineTo(-61.1,-10.3).lineTo(-52.7,-10.3).lineTo(-52.7,9.9).lineTo(-55,9.9).lineTo(-55,-8.2).lineTo(-59.1,-8.2).lineTo(-59.1,-0.2).curveTo(-59.1,2.5,-59.3,4.4).curveTo(-59.5,6.2,-59.9,7.3).curveTo(-60.4,8.5,-61.1,9.2).curveTo(-61.8,9.9,-62.9,10.5).closePath().moveTo(40.7,10.1).lineTo(40.7,8.3).lineTo(41.7,8.3).curveTo(42.3,8.3,42.8,7.7).curveTo(43.4,7.1,43.7,5.7).lineTo(44,4.5).lineTo(39.7,-10.3).lineTo(41.9,-10.3).lineTo(45,1).lineTo(45.1,1).lineTo(47.8,-10.3).lineTo(50,-10.3).lineTo(45.9,5.2).curveTo(45.5,6.9,45,7.9).curveTo(44.5,8.9,44,9.3).curveTo(43.4,9.8,42.9,9.9).lineTo(41.8,10.1).closePath().moveTo(-84.4,10.1).lineTo(-84.4,8.3).lineTo(-83.4,8.3).curveTo(-82.7,8.3,-82.2,7.7).curveTo(-81.7,7.1,-81.3,5.7).lineTo(-81,4.5).lineTo(-85.4,-10.3).lineTo(-83.1,-10.3).lineTo(-80.1,1).lineTo(-80,1).lineTo(-77.3,-10.3).lineTo(-75.1,-10.3).lineTo(-79.2,5.2).curveTo(-79.6,6.9,-80.1,7.9).curveTo(-80.6,8.9,-81.1,9.3).curveTo(-81.6,9.8,-82.2,9.9).lineTo(-83.3,10.1).closePath().moveTo(17.7,8.7).curveTo(16.7,7.4,16.7,5.1).lineTo(16.7,-4.8).curveTo(16.7,-5.9,16.9,-6.9).curveTo(17.1,-7.9,17.6,-8.7).curveTo(18.1,-9.5,19,-10).curveTo(19.9,-10.5,21.3,-10.5).curveTo(22.8,-10.5,23.8,-10.1).curveTo(24.7,-9.7,25.2,-8.9).curveTo(25.6,-8.1,25.8,-7.1).curveTo(26,-6.1,26,-4.9).lineTo(26,4.5).curveTo(26,7.1,24.9,8.6).curveTo(23.8,10.1,21.3,10.1).curveTo(18.8,10.1,17.7,8.7).closePath().moveTo(20,-8).curveTo(19.5,-7.6,19.3,-7).curveTo(19.1,-6.4,19,-5.7).lineTo(19,-4.7).lineTo(19,5.1).lineTo(19.1,6.1).curveTo(19.1,6.6,19.4,7).curveTo(19.7,7.4,20.1,7.7).curveTo(20.6,8,21.3,8).curveTo(22,8,22.5,7.7).curveTo(23,7.4,23.2,7).curveTo(23.5,6.5,23.6,5.9).lineTo(23.7,4.7).lineTo(23.7,-5.3).lineTo(23.6,-6.3).curveTo(23.5,-6.9,23.3,-7.3).curveTo(23.1,-7.8,22.6,-8.1).curveTo(22.1,-8.4,21.3,-8.4).curveTo(20.5,-8.4,20,-8).closePath().moveTo(-48.8,8.7).curveTo(-49.8,7.4,-49.8,5.1).lineTo(-49.8,-4.8).curveTo(-49.8,-5.9,-49.6,-6.9).curveTo(-49.4,-7.9,-48.9,-8.7).curveTo(-48.4,-9.5,-47.5,-10).curveTo(-46.6,-10.5,-45.2,-10.5).curveTo(-43.7,-10.5,-42.7,-10.1).curveTo(-41.8,-9.7,-41.3,-8.9).curveTo(-40.9,-8.1,-40.7,-7.1).curveTo(-40.5,-6.1,-40.5,-4.9).lineTo(-40.5,4.5).curveTo(-40.5,7.1,-41.6,8.6).curveTo(-42.7,10.1,-45.2,10.1).curveTo(-47.7,10.1,-48.8,8.7).closePath().moveTo(-46.5,-8).curveTo(-47,-7.6,-47.2,-7).curveTo(-47.4,-6.4,-47.5,-5.7).lineTo(-47.5,-4.7).lineTo(-47.5,5.1).lineTo(-47.4,6.1).curveTo(-47.4,6.6,-47.1,7).curveTo(-46.8,7.4,-46.4,7.7).curveTo(-45.9,8,-45.2,8).curveTo(-44.5,8,-44,7.7).curveTo(-43.5,7.4,-43.3,7).curveTo(-43,6.5,-42.9,5.9).lineTo(-42.8,4.7).lineTo(-42.8,-5.3).lineTo(-42.9,-6.3).curveTo(-43,-6.9,-43.2,-7.3).curveTo(-43.4,-7.8,-43.9,-8.1).curveTo(-44.4,-8.4,-45.2,-8.4).curveTo(-46,-8.4,-46.5,-8).closePath().moveTo(-72.4,8.8).curveTo(-73.6,7.5,-73.6,5.2).lineTo(-73.6,-4.8).curveTo(-73.6,-5.8,-73.4,-6.9).curveTo(-73.2,-7.9,-72.7,-8.7).curveTo(-72.2,-9.5,-71.3,-10).curveTo(-70.4,-10.5,-69,-10.5).curveTo(-66.7,-10.5,-65.6,-9.2).curveTo(-64.5,-7.9,-64.5,-5.9).lineTo(-66.8,-5.5).curveTo(-66.8,-6.8,-67.3,-7.6).curveTo(-67.8,-8.4,-69,-8.4).curveTo(-69.7,-8.4,-70.2,-8).curveTo(-70.6,-7.7,-70.8,-7.2).curveTo(-71.1,-6.8,-71.2,-6.2).lineTo(-71.3,-5.1).lineTo(-71.3,5.1).lineTo(-71.2,6).curveTo(-71.1,6.5,-70.8,6.9).curveTo(-70.6,7.4,-70.2,7.7).curveTo(-69.8,7.9,-69.1,7.9).curveTo(-67.9,7.9,-67.4,7.3).curveTo(-66.9,6.6,-66.8,5).lineTo(-64.5,5.5).curveTo(-64.5,7.6,-65.7,8.9).curveTo(-66.8,10.1,-69,10.1).curveTo(-71.3,10.1,-72.4,8.8).closePath().moveTo(83.2,9.9).lineTo(83.2,-4.3).lineTo(83.1,-4.3).lineTo(78,9.9).lineTo(75.8,9.9).lineTo(75.8,-10.3).lineTo(78,-10.3).lineTo(78,4).lineTo(78.1,4).lineTo(83.2,-10.3).lineTo(85.4,-10.3).lineTo(85.4,9.9).closePath().moveTo(71.8,9.9).lineTo(70.5,3.8).curveTo(70.3,2.8,69.9,2.1).curveTo(69.6,1.5,69.1,1.2).curveTo(68.6,0.9,68.1,0.8).lineTo(67.1,0.7).lineTo(65.9,0.7).lineTo(65.9,9.9).lineTo(63.7,9.9).lineTo(63.7,-10.3).lineTo(65.9,-10.3).lineTo(65.9,-1.5).lineTo(67,-1.5).lineTo(67.9,-1.6).curveTo(68.4,-1.7,68.8,-2).curveTo(69.3,-2.3,69.7,-2.9).curveTo(70.1,-3.5,70.3,-4.5).lineTo(71.7,-10.3).lineTo(73.8,-10.3).lineTo(72.4,-4.4).curveTo(72.1,-2.9,71.5,-1.9).curveTo(70.8,-0.9,70,-0.6).curveTo(71.1,-0.2,71.7,0.8).curveTo(72.3,1.9,72.6,3.4).lineTo(74.1,9.9).closePath().moveTo(58.3,9.9).lineTo(58.3,-8.2).lineTo(54,-8.2).lineTo(54,9.9).lineTo(51.7,9.9).lineTo(51.7,-10.3).lineTo(60.6,-10.3).lineTo(60.6,9.9).closePath().moveTo(37,9.9).lineTo(35.7,3.8).curveTo(35.5,2.8,35.1,2.1).curveTo(34.8,1.5,34.3,1.2).curveTo(33.8,0.9,33.3,0.8).lineTo(32.3,0.7).lineTo(31.1,0.7).lineTo(31.1,9.9).lineTo(28.9,9.9).lineTo(28.9,-10.3).lineTo(31.1,-10.3).lineTo(31.1,-1.5).lineTo(32.2,-1.5).lineTo(33.1,-1.6).curveTo(33.6,-1.7,34,-2).curveTo(34.5,-2.3,34.9,-2.9).curveTo(35.3,-3.5,35.5,-4.5).lineTo(36.9,-10.3).lineTo(39,-10.3).lineTo(37.6,-4.4).curveTo(37.3,-2.9,36.7,-1.9).curveTo(36,-0.9,35.2,-0.6).curveTo(36.3,-0.2,36.9,0.8).curveTo(37.5,1.9,37.8,3.4).lineTo(39.3,9.9).closePath().moveTo(11.5,9.9).lineTo(11.5,-8.2).lineTo(7.2,-8.2).lineTo(7.2,9.9).lineTo(4.9,9.9).lineTo(4.9,-10.3).lineTo(13.8,-10.3).lineTo(13.8,9.9).closePath().moveTo(-6.1,9.9).lineTo(-6.1,0.9).lineTo(-7.3,0.9).lineTo(-8.1,1).curveTo(-8.6,1.1,-9,1.4).curveTo(-9.4,1.7,-9.8,2.3).curveTo(-10.1,2.9,-10.3,4).lineTo(-11.4,9.9).lineTo(-13.7,9.9).lineTo(-12.5,3.6).curveTo(-12.3,2.5,-11.9,1.6).curveTo(-11.4,0.7,-10.5,0.1).curveTo(-11.3,-0.1,-11.8,-0.5).curveTo(-12.3,-1,-12.6,-1.6).curveTo(-12.9,-2.1,-13,-2.8).lineTo(-13.1,-4.4).curveTo(-13.1,-7.3,-11.9,-8.8).curveTo(-10.7,-10.3,-8.2,-10.3).lineTo(-3.8,-10.3).lineTo(-3.8,9.9).closePath().moveTo(-9.2,-7.9).curveTo(-9.8,-7.6,-10.2,-7.1).curveTo(-10.5,-6.6,-10.6,-5.9).curveTo(-10.8,-5.2,-10.8,-4.4).curveTo(-10.8,-1.2,-8,-1.2).lineTo(-6.1,-1.2).lineTo(-6.1,-8.2).lineTo(-7.8,-8.2).curveTo(-8.7,-8.2,-9.2,-7.9).closePath().moveTo(-18.4,9.9).lineTo(-18.4,-4.3).lineTo(-18.5,-4.3).lineTo(-23.6,9.9).lineTo(-25.7,9.9).lineTo(-25.7,-10.3).lineTo(-23.5,-10.3).lineTo(-23.5,4).lineTo(-23.4,4).lineTo(-18.4,-10.3).lineTo(-16.2,-10.3).lineTo(-16.2,9.9).closePath().moveTo(-37.6,9.9).lineTo(-37.6,-10.3).lineTo(-33.4,-10.3).curveTo(-30.8,-10.3,-29.7,-8.9).curveTo(-28.6,-7.5,-28.6,-5).curveTo(-28.6,-3.4,-29.1,-2.4).curveTo(-29.5,-1.5,-30.7,-0.8).lineTo(-30.7,-0.7).curveTo(-29.4,-0.3,-28.9,0.9).curveTo(-28.5,2.2,-28.5,3.9).curveTo(-28.5,7.1,-29.7,8.5).curveTo(-31,9.9,-33.8,9.9).closePath().moveTo(-35.3,7.8).lineTo(-33.5,7.8).curveTo(-32.6,7.8,-32,7.5).curveTo(-31.5,7.2,-31.2,6.6).curveTo(-30.8,6,-30.7,5.3).lineTo(-30.7,3.7).curveTo(-30.7,2,-31.3,1.2).curveTo(-31.9,0.2,-33.7,0.2).lineTo(-35.3,0.2).closePath().moveTo(-35.3,-1.8).lineTo(-33.8,-1.8).curveTo(-32.2,-1.8,-31.5,-2.6).curveTo(-30.8,-3.4,-30.8,-5).curveTo(-30.8,-6.6,-31.5,-7.4).curveTo(-32.2,-8.2,-33.8,-8.2).lineTo(-35.3,-8.2).closePath();
	this.shape.setTransform(85.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,170.8,21);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFDD57").beginStroke().moveTo(44.2,10).curveTo(43.4,9.8,42.8,9.3).curveTo(42.3,8.8,41.9,8.1).curveTo(41.6,7.3,41.6,6.4).lineTo(41.6,-6.3).curveTo(41.6,-7.3,41.9,-8).curveTo(42.3,-8.8,42.8,-9.3).curveTo(43.4,-9.8,44.2,-10).curveTo(44.9,-10.3,45.7,-10.3).curveTo(47.5,-10.3,48.7,-9.3).curveTo(49.8,-8.3,49.8,-6.3).lineTo(49.8,6.4).curveTo(49.8,7.3,49.5,8.1).curveTo(49.1,8.8,48.6,9.3).curveTo(48,9.8,47.2,10).curveTo(46.5,10.3,45.7,10.3).curveTo(44.9,10.3,44.2,10).closePath().moveTo(44.4,-7.6).curveTo(43.9,-7.2,43.9,-6.4).lineTo(43.9,6.5).curveTo(43.9,7.2,44.4,7.7).curveTo(44.9,8.1,45.7,8.1).curveTo(46.5,8.1,47,7.7).curveTo(47.5,7.2,47.5,6.5).lineTo(47.5,-6.4).curveTo(47.5,-7.2,47,-7.6).curveTo(46.5,-8.1,45.7,-8.1).curveTo(44.9,-8.1,44.4,-7.6).closePath().moveTo(33.1,10).curveTo(32.4,9.8,31.9,9.3).curveTo(31.3,8.8,30.9,8.1).curveTo(30.6,7.3,30.6,6.4).lineTo(30.6,2.7).curveTo(30.6,1.6,31,0.8).curveTo(31.4,-0,32.2,-0.5).curveTo(31.4,-1,31,-1.8).curveTo(30.6,-2.6,30.6,-3.7).lineTo(30.6,-6.3).curveTo(30.6,-7.3,30.9,-8).curveTo(31.3,-8.8,31.9,-9.3).curveTo(32.4,-9.8,33.1,-10).curveTo(33.9,-10.3,34.7,-10.3).curveTo(35.5,-10.3,36.3,-10).curveTo(37,-9.8,37.5,-9.3).curveTo(38.2,-8.8,38.4,-8).curveTo(38.8,-7.3,38.8,-6.3).lineTo(38.8,-3.7).curveTo(38.8,-2.6,38.3,-1.8).curveTo(37.9,-1,37.2,-0.5).curveTo(37.9,-0,38.3,0.8).curveTo(38.8,1.6,38.8,2.7).lineTo(38.8,6.4).curveTo(38.8,7.3,38.4,8.1).curveTo(38.2,8.8,37.5,9.3).curveTo(37,9.8,36.3,10).curveTo(35.5,10.3,34.7,10.3).curveTo(33.9,10.3,33.1,10).closePath().moveTo(33.4,0.9).curveTo(32.9,1.4,32.9,2.2).lineTo(32.9,6.6).curveTo(32.9,7.3,33.4,7.7).curveTo(34,8.1,34.7,8.1).curveTo(35.5,8.1,36,7.7).curveTo(36.5,7.3,36.5,6.6).lineTo(36.5,2.2).curveTo(36.5,1.4,36,0.9).curveTo(35.5,0.4,34.7,0.4).curveTo(34,0.4,33.4,0.9).closePath().moveTo(33.4,-7.7).curveTo(32.9,-7.3,32.9,-6.5).lineTo(32.9,-3.2).curveTo(32.9,-2.5,33.4,-2).curveTo(34,-1.5,34.7,-1.5).curveTo(35.5,-1.5,36,-2).curveTo(36.5,-2.5,36.5,-3.2).lineTo(36.5,-6.5).curveTo(36.5,-7.3,36,-7.7).curveTo(35.5,-8.2,34.7,-8.2).curveTo(34,-8.2,33.4,-7.7).closePath().moveTo(104.9,10.1).lineTo(104.9,-3.9).lineTo(104.7,-3.9).lineTo(101.1,5.2).lineTo(100,5.2).lineTo(96.3,-3.9).lineTo(96.2,-3.9).lineTo(96.2,10.1).lineTo(93.9,10.1).lineTo(93.9,-10.1).lineTo(96.2,-10.1).lineTo(100.5,1.1).lineTo(100.5,1.1).lineTo(104.8,-10.1).lineTo(107.2,-10.1).lineTo(107.2,10.1).closePath().moveTo(82.6,10.1).lineTo(82.6,7.4).lineTo(85.1,7.4).lineTo(85.1,10.1).closePath().moveTo(70.6,10.1).lineTo(70.6,-10.1).lineTo(74.9,-10.1).curveTo(77.5,-10.1,78.6,-8.7).curveTo(79.7,-7.3,79.6,-4.8).curveTo(79.6,-3.2,79.2,-2.2).curveTo(78.8,-1.3,77.6,-0.6).lineTo(77.6,-0.5).curveTo(78.8,-0.1,79.4,1.1).curveTo(79.8,2.4,79.8,4.1).curveTo(79.8,7.3,78.6,8.7).curveTo(77.3,10.1,74.5,10.1).closePath().moveTo(73,8).lineTo(74.8,8).curveTo(75.7,8,76.2,7.7).curveTo(76.8,7.4,77.1,6.8).curveTo(77.5,6.2,77.6,5.5).lineTo(77.6,3.9).curveTo(77.6,2.2,77,1.4).curveTo(76.4,0.4,74.6,0.4).lineTo(73,0.4).closePath().moveTo(73,-1.6).lineTo(74.4,-1.6).curveTo(76.1,-1.6,76.8,-2.4).curveTo(77.4,-3.2,77.5,-4.8).curveTo(77.4,-6.4,76.8,-7.2).curveTo(76.1,-8,74.5,-8).lineTo(73,-8).closePath().moveTo(66.6,10.1).lineTo(65.2,4).curveTo(65,3,64.6,2.3).curveTo(64.3,1.7,63.9,1.4).curveTo(63.3,1.1,62.8,1).lineTo(61.8,0.9).lineTo(60.6,0.9).lineTo(60.6,10.1).lineTo(58.4,10.1).lineTo(58.4,-10.1).lineTo(60.6,-10.1).lineTo(60.6,-1.3).lineTo(61.7,-1.3).lineTo(62.6,-1.4).curveTo(63.1,-1.5,63.5,-1.8).curveTo(64,-2.1,64.4,-2.7).curveTo(64.8,-3.3,65,-4.3).lineTo(66.4,-10.1).lineTo(68.5,-10.1).lineTo(67.1,-4.2).curveTo(66.8,-2.7,66.2,-1.7).curveTo(65.6,-0.7,64.7,-0.4).curveTo(65.9,0,66.4,1).curveTo(67.1,2.1,67.3,3.6).lineTo(68.8,10.1).closePath().moveTo(19.6,10.1).lineTo(19.6,-10.1).lineTo(21.9,-10.1).lineTo(21.9,10.1).closePath().moveTo(8.7,10.1).lineTo(8.7,-10.1).lineTo(11.1,-10.1).lineTo(11.1,-2).lineTo(12.7,-2).curveTo(14.4,-2,15.4,-1.6).curveTo(16.5,-1.1,17,-0.3).curveTo(17.6,0.4,17.8,1.5).curveTo(18,2.6,18,3.9).curveTo(18,5.3,17.8,6.4).curveTo(17.5,7.6,17,8.4).curveTo(16.4,9.2,15.5,9.6).curveTo(14.5,10.1,12.9,10.1).closePath().moveTo(11.1,7.9).lineTo(12.7,7.9).curveTo(13.7,7.9,14.3,7.6).curveTo(14.9,7.3,15.3,6.7).curveTo(15.6,6.2,15.6,5.5).lineTo(15.7,4).lineTo(15.7,2.5).curveTo(15.6,1.8,15.3,1.3).curveTo(14.9,0.8,14.3,0.5).curveTo(13.6,0.2,12.7,0.2).lineTo(11.1,0.2).closePath().moveTo(1.4,10.1).lineTo(1.4,-8).lineTo(-2,-8).lineTo(-2,-10.1).lineTo(7.2,-10.1).lineTo(7.2,-8).lineTo(3.8,-8).lineTo(3.8,10.1).closePath().moveTo(-6,10.1).lineTo(-6,0.8).lineTo(-10.7,0.8).lineTo(-10.7,10.1).lineTo(-13,10.1).lineTo(-13,-10.1).lineTo(-10.7,-10.1).lineTo(-10.7,-1.2).lineTo(-6,-1.2).lineTo(-6,-10.1).lineTo(-3.8,-10.1).lineTo(-3.8,10.1).closePath().moveTo(-23.6,10.1).lineTo(-23.6,-10.1).lineTo(-15,-10.1).lineTo(-15,-8).lineTo(-21.3,-8).lineTo(-21.3,-1.2).lineTo(-15.8,-1.2).lineTo(-15.8,0.9).lineTo(-21.3,0.9).lineTo(-21.3,8).lineTo(-15,8).lineTo(-15,10.1).closePath().moveTo(-29,10.1).lineTo(-29,-3.9).lineTo(-29.1,-3.9).lineTo(-32.8,5.2).lineTo(-33.9,5.2).lineTo(-37.5,-3.9).lineTo(-37.6,-3.9).lineTo(-37.6,10.1).lineTo(-40,10.1).lineTo(-40,-10.1).lineTo(-37.6,-10.1).lineTo(-33.3,1.1).lineTo(-33.3,1.1).lineTo(-29,-10.1).lineTo(-26.7,-10.1).lineTo(-26.7,10.1).closePath().moveTo(-44,10.1).lineTo(-45,5.6).lineTo(-49.4,5.6).lineTo(-50.3,10.1).lineTo(-52.6,10.1).lineTo(-48.3,-10.1).lineTo(-46.2,-10.1).lineTo(-41.8,10.1).closePath().moveTo(-49.1,3.4).lineTo(-45.4,3.4).lineTo(-47.2,-6).lineTo(-47.3,-6).closePath().moveTo(-57.7,10.1).lineTo(-57.7,-8).lineTo(-61.1,-8).lineTo(-61.1,-10.1).lineTo(-51.9,-10.1).lineTo(-51.9,-8).lineTo(-55.4,-8).lineTo(-55.4,10.1).closePath().moveTo(-71.1,10.1).lineTo(-71.1,-10.1).lineTo(-67.1,-10.1).curveTo(-65.5,-10.1,-64.5,-9.7).curveTo(-63.6,-9.3,-62.9,-8.5).curveTo(-62.4,-7.8,-62.1,-6.6).curveTo(-61.9,-5.5,-61.9,-4.1).curveTo(-61.9,-2.8,-62.1,-1.7).curveTo(-62.4,-0.6,-62.9,0.2).curveTo(-63.5,1,-64.5,1.5).curveTo(-65.5,2,-67.2,2).lineTo(-68.9,2).lineTo(-68.9,10.1).closePath().moveTo(-68.9,-0.2).lineTo(-67.3,-0.2).curveTo(-66.3,-0.2,-65.6,-0.5).curveTo(-65,-0.8,-64.7,-1.4).curveTo(-64.4,-1.9,-64.3,-2.6).lineTo(-64.2,-4).lineTo(-64.3,-5.6).curveTo(-64.4,-6.3,-64.7,-6.8).curveTo(-65,-7.4,-65.6,-7.7).curveTo(-66.2,-8,-67.2,-8).lineTo(-68.9,-8).closePath().moveTo(-75.2,10.1).lineTo(-76.2,5.6).lineTo(-80.7,5.6).lineTo(-81.6,10.1).lineTo(-83.7,10.1).lineTo(-79.5,-10.1).lineTo(-77.3,-10.1).lineTo(-73,10.1).closePath().moveTo(-80.3,3.4).lineTo(-76.5,3.4).lineTo(-78.3,-6).lineTo(-78.5,-6).closePath().moveTo(-87.9,10.1).lineTo(-87.9,-8).lineTo(-92.3,-8).lineTo(-92.3,10.1).lineTo(-94.6,10.1).lineTo(-94.6,-10.1).lineTo(-85.7,-10.1).lineTo(-85.7,10.1).closePath().moveTo(-98.7,10.1).lineTo(-99.6,5.6).lineTo(-104.1,5.6).lineTo(-105,10.1).lineTo(-107.2,10.1).lineTo(-103,-10.1).lineTo(-100.8,-10.1).lineTo(-96.5,10.1).closePath().moveTo(-103.8,3.4).lineTo(-100,3.4).lineTo(-101.8,-6).lineTo(-102,-6).closePath();
	this.shape.setTransform(107.2,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,214.4,20.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F6F6F6").beginStroke().moveTo(56.1,8.9).curveTo(55,7.6,55,5.3).lineTo(55,-4.6).curveTo(55,-5.7,55.2,-6.7).curveTo(55.4,-7.7,55.9,-8.5).curveTo(56.4,-9.3,57.3,-9.8).curveTo(58.2,-10.3,59.7,-10.3).curveTo(61.1,-10.3,62.1,-9.9).curveTo(63,-9.5,63.5,-8.7).curveTo(64,-7.9,64.2,-6.9).curveTo(64.3,-5.9,64.3,-4.7).lineTo(64.3,4.7).curveTo(64.3,7.3,63.3,8.8).curveTo(62.2,10.3,59.7,10.3).curveTo(57.2,10.3,56.1,8.9).closePath().moveTo(58.3,-7.8).curveTo(57.8,-7.4,57.7,-6.8).curveTo(57.4,-6.2,57.3,-5.5).lineTo(57.3,-4.5).lineTo(57.3,5.3).lineTo(57.4,6.3).curveTo(57.4,6.8,57.8,7.2).curveTo(58,7.6,58.4,7.9).curveTo(58.9,8.2,59.7,8.2).curveTo(60.3,8.2,60.8,7.9).curveTo(61.3,7.6,61.6,7.2).curveTo(61.8,6.7,61.9,6.1).lineTo(62,4.9).lineTo(62,-5.1).lineTo(61.9,-6.1).curveTo(61.9,-6.7,61.6,-7.1).curveTo(61.4,-7.6,60.9,-7.9).curveTo(60.4,-8.2,59.7,-8.2).curveTo(58.8,-8.2,58.3,-7.8).closePath().moveTo(31.8,8.9).curveTo(30.8,7.6,30.8,5.3).lineTo(30.8,-4.6).curveTo(30.8,-5.7,31,-6.7).curveTo(31.1,-7.7,31.7,-8.5).curveTo(32.2,-9.3,33,-9.8).curveTo(34,-10.3,35.4,-10.3).curveTo(36.9,-10.3,37.9,-9.9).curveTo(38.7,-9.5,39.2,-8.7).curveTo(39.7,-7.9,39.9,-6.9).curveTo(40,-5.9,40,-4.7).lineTo(40,4.7).curveTo(40.1,7.3,39,8.8).curveTo(37.9,10.3,35.4,10.3).curveTo(32.9,10.3,31.8,8.9).closePath().moveTo(34,-7.8).curveTo(33.6,-7.4,33.4,-6.8).curveTo(33.2,-6.2,33.1,-5.5).lineTo(33,-4.5).lineTo(33,5.3).lineTo(33.1,6.3).curveTo(33.2,6.8,33.5,7.2).curveTo(33.7,7.6,34.2,7.9).curveTo(34.6,8.2,35.4,8.2).curveTo(36.1,8.2,36.5,7.9).curveTo(37,7.6,37.3,7.2).curveTo(37.6,6.7,37.6,6.1).lineTo(37.7,4.9).lineTo(37.7,-5.1).lineTo(37.7,-6.1).curveTo(37.6,-6.7,37.3,-7.1).curveTo(37.2,-7.6,36.6,-7.9).curveTo(36.2,-8.2,35.4,-8.2).curveTo(34.6,-8.2,34,-7.8).closePath().moveTo(20.8,9).curveTo(19.6,7.7,19.6,5.4).lineTo(19.6,-4.6).curveTo(19.6,-5.6,19.8,-6.7).curveTo(20,-7.7,20.4,-8.5).curveTo(21,-9.3,21.9,-9.8).curveTo(22.7,-10.3,24.1,-10.3).curveTo(26.5,-10.3,27.5,-9).curveTo(28.6,-7.7,28.6,-5.7).lineTo(26.4,-5.3).curveTo(26.4,-6.6,25.8,-7.4).curveTo(25.4,-8.2,24.1,-8.2).curveTo(23.5,-8.2,23,-7.8).curveTo(22.5,-7.5,22.3,-7).curveTo(22,-6.6,22,-6).lineTo(21.9,-4.9).lineTo(21.9,5.3).lineTo(22,6.2).curveTo(22,6.7,22.3,7.1).curveTo(22.5,7.6,23,7.9).curveTo(23.4,8.1,24.1,8.1).curveTo(25.3,8.1,25.7,7.5).curveTo(26.3,6.8,26.4,5.2).lineTo(28.7,5.7).curveTo(28.6,7.8,27.5,9.1).curveTo(26.4,10.3,24.1,10.3).curveTo(21.9,10.3,20.8,9).closePath().moveTo(-35.8,8.9).curveTo(-36.9,7.6,-36.9,5.3).lineTo(-36.9,-4.6).curveTo(-36.9,-5.7,-36.7,-6.7).curveTo(-36.5,-7.7,-36,-8.5).curveTo(-35.5,-9.3,-34.6,-9.8).curveTo(-33.7,-10.3,-32.2,-10.3).curveTo(-30.8,-10.3,-29.8,-9.9).curveTo(-28.9,-9.5,-28.4,-8.7).curveTo(-27.9,-7.9,-27.7,-6.9).curveTo(-27.6,-5.9,-27.6,-4.7).lineTo(-27.6,4.7).curveTo(-27.6,7.3,-28.6,8.8).curveTo(-29.7,10.3,-32.2,10.3).curveTo(-34.8,10.3,-35.8,8.9).closePath().moveTo(-33.6,-7.8).curveTo(-34,-7.4,-34.3,-6.8).curveTo(-34.5,-6.2,-34.6,-5.5).lineTo(-34.6,-4.5).lineTo(-34.6,5.3).lineTo(-34.5,6.3).curveTo(-34.5,6.8,-34.1,7.2).curveTo(-33.9,7.6,-33.5,7.9).curveTo(-33,8.2,-32.2,8.2).curveTo(-31.6,8.2,-31.1,7.9).curveTo(-30.6,7.6,-30.3,7.2).curveTo(-30.1,6.7,-30,6.1).lineTo(-29.9,4.9).lineTo(-29.9,-5.1).lineTo(-30,-6.1).curveTo(-30,-6.7,-30.3,-7.1).curveTo(-30.5,-7.6,-31,-7.9).curveTo(-31.5,-8.2,-32.2,-8.2).curveTo(-33.1,-8.2,-33.6,-7.8).closePath().moveTo(-74.7,9).curveTo(-75.9,7.7,-75.9,5.4).lineTo(-75.9,-4.6).curveTo(-75.9,-5.6,-75.7,-6.7).curveTo(-75.4,-7.7,-75,-8.5).curveTo(-74.5,-9.3,-73.5,-9.8).curveTo(-72.7,-10.3,-71.3,-10.3).curveTo(-68.9,-10.3,-67.9,-9).curveTo(-66.8,-7.7,-66.8,-5.7).lineTo(-69.1,-5.3).curveTo(-69.1,-6.6,-69.6,-7.4).curveTo(-70.1,-8.2,-71.3,-8.2).curveTo(-72,-8.2,-72.5,-7.8).curveTo(-72.9,-7.5,-73.1,-7).curveTo(-73.4,-6.6,-73.4,-6).lineTo(-73.5,-4.9).lineTo(-73.5,5.3).lineTo(-73.4,6.2).curveTo(-73.4,6.7,-73.1,7.1).curveTo(-72.9,7.6,-72.5,7.9).curveTo(-72,8.1,-71.4,8.1).curveTo(-70.2,8.1,-69.7,7.5).curveTo(-69.2,6.8,-69.1,5.2).lineTo(-66.8,5.7).curveTo(-66.8,7.8,-68,9.1).curveTo(-69.1,10.3,-71.3,10.3).curveTo(-73.6,10.3,-74.7,9).closePath().moveTo(67.2,10.1).lineTo(67.2,-10.1).lineTo(75.9,-10.1).lineTo(75.9,-8).lineTo(69.5,-8).lineTo(69.5,-1.2).lineTo(75,-1.2).lineTo(75,0.9).lineTo(69.5,0.9).lineTo(69.5,8).lineTo(75.9,8).lineTo(75.9,10.1).closePath().moveTo(51.1,10.1).lineTo(49.8,4).curveTo(49.5,3,49.2,2.3).curveTo(48.8,1.7,48.4,1.4).curveTo(47.9,1.1,47.4,1).lineTo(46.4,0.9).lineTo(45.2,0.9).lineTo(45.2,10.1).lineTo(42.9,10.1).lineTo(42.9,-10.1).lineTo(45.2,-10.1).lineTo(45.2,-1.3).lineTo(46.3,-1.3).lineTo(47.2,-1.4).curveTo(47.7,-1.5,48.1,-1.8).curveTo(48.6,-2.1,49,-2.7).curveTo(49.3,-3.3,49.6,-4.3).lineTo(50.9,-10.1).lineTo(53,-10.1).lineTo(51.7,-4.2).curveTo(51.4,-2.7,50.8,-1.7).curveTo(50.1,-0.7,49.2,-0.4).curveTo(50.4,0,51,1).curveTo(51.6,2.1,51.9,3.6).lineTo(53.4,10.1).closePath().moveTo(14.3,10.1).lineTo(14.3,-10.1).lineTo(16.6,-10.1).lineTo(16.6,10.1).closePath().moveTo(3.4,10.1).lineTo(3.4,-10.1).lineTo(5.8,-10.1).lineTo(5.8,-2).lineTo(7.4,-2).curveTo(9.1,-2,10.1,-1.6).curveTo(11.2,-1.1,11.7,-0.3).curveTo(12.3,0.4,12.5,1.5).curveTo(12.7,2.6,12.7,3.9).curveTo(12.7,5.3,12.5,6.4).curveTo(12.2,7.6,11.7,8.4).curveTo(11.1,9.2,10.2,9.6).curveTo(9.2,10.1,7.6,10.1).closePath().moveTo(5.8,7.9).lineTo(7.4,7.9).curveTo(8.4,7.9,9,7.6).curveTo(9.6,7.3,10,6.7).curveTo(10.3,6.2,10.3,5.5).lineTo(10.4,4).lineTo(10.4,2.5).curveTo(10.3,1.8,10,1.3).curveTo(9.6,0.8,9,0.5).curveTo(8.3,0.2,7.4,0.2).lineTo(5.8,0.2).closePath().moveTo(-8.5,10.1).lineTo(-8.5,-10.1).lineTo(-4.2,-10.1).curveTo(-1.6,-10.1,-0.5,-8.7).curveTo(0.6,-7.3,0.5,-4.8).curveTo(0.5,-3.2,0.1,-2.2).curveTo(-0.3,-1.3,-1.5,-0.6).lineTo(-1.5,-0.5).curveTo(-0.3,-0.1,0.3,1.1).curveTo(0.7,2.4,0.7,4.1).curveTo(0.7,7.3,-0.5,8.7).curveTo(-1.8,10.1,-4.6,10.1).closePath().moveTo(-6.1,8).lineTo(-4.3,8).curveTo(-3.4,8,-2.9,7.7).curveTo(-2.3,7.4,-2,6.8).curveTo(-1.6,6.2,-1.5,5.5).lineTo(-1.5,3.9).curveTo(-1.5,2.2,-2.1,1.4).curveTo(-2.7,0.4,-4.5,0.4).lineTo(-6.1,0.4).closePath().moveTo(-6.1,-1.6).lineTo(-4.7,-1.6).curveTo(-3,-1.6,-2.3,-2.4).curveTo(-1.7,-3.2,-1.6,-4.8).curveTo(-1.7,-6.4,-2.3,-7.2).curveTo(-3,-8,-4.6,-8).lineTo(-6.1,-8).closePath().moveTo(-24.7,10.1).lineTo(-24.7,-10.1).lineTo(-16,-10.1).lineTo(-16,-8).lineTo(-22.4,-8).lineTo(-22.4,-1.2).lineTo(-16.9,-1.2).lineTo(-16.9,0.9).lineTo(-22.4,0.9).lineTo(-22.4,8).lineTo(-16,8).lineTo(-16,10.1).closePath().moveTo(-42,10.1).lineTo(-42,-3.9).lineTo(-42.2,-3.9).lineTo(-45.9,5.2).lineTo(-47,5.2).lineTo(-50.7,-3.9).lineTo(-50.8,-3.9).lineTo(-50.8,10.1).lineTo(-53,10.1).lineTo(-53,-10.1).lineTo(-50.8,-10.1).lineTo(-46.4,1.1).lineTo(-46.4,1.1).lineTo(-42.1,-10.1).lineTo(-39.8,-10.1).lineTo(-39.8,10.1).closePath().moveTo(-57.2,10.1).lineTo(-58.1,5.6).lineTo(-62.6,5.6).lineTo(-63.5,10.1).lineTo(-65.6,10.1).lineTo(-61.4,-10.1).lineTo(-59.2,-10.1).lineTo(-54.9,10.1).closePath().moveTo(-62.2,3.4).lineTo(-58.4,3.4).lineTo(-60.2,-6).lineTo(-60.4,-6).closePath();
	this.shape.setTransform(79.2,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,7.5,151.7,20.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFDD57").beginStroke().moveTo(-59.8,12.1).lineTo(-59.8,8.2).lineTo(-68.2,8.2).lineTo(-68.2,12.1).lineTo(-70.2,12.1).lineTo(-70.2,6.4).lineTo(-69.3,6.2).curveTo(-69,6,-68.7,5.6).curveTo(-68.4,5.2,-68.2,4.5).curveTo(-67.9,3.8,-67.8,2.7).lineTo(-67.7,0.2).lineTo(-67.3,-11.9).lineTo(-58.7,-11.9).lineTo(-58.7,6.3).lineTo(-57.7,6.3).lineTo(-57.7,12.1).closePath().moveTo(-65.6,0.4).curveTo(-65.7,2.5,-65.9,4).curveTo(-66.2,5.4,-66.8,6.3).lineTo(-61,6.3).lineTo(-61,-10).lineTo(-65.3,-10).closePath().moveTo(49.3,7.1).curveTo(48.2,5.7,48.2,3.5).lineTo(48.2,-6.5).curveTo(48.2,-7.5,48.4,-8.5).curveTo(48.6,-9.6,49.1,-10.3).curveTo(49.6,-11.1,50.5,-11.7).curveTo(51.4,-12.1,52.9,-12.1).curveTo(54.4,-12.1,55.3,-11.7).curveTo(56.2,-11.3,56.7,-10.5).curveTo(57.2,-9.7,57.4,-8.8).curveTo(57.5,-7.7,57.5,-6.5).lineTo(57.5,2.8).curveTo(57.5,5.5,56.5,7).curveTo(55.4,8.5,52.9,8.5).curveTo(50.4,8.5,49.3,7.1).closePath().moveTo(51.5,-9.6).curveTo(51.1,-9.2,50.9,-8.6).curveTo(50.6,-8,50.6,-7.4).lineTo(50.5,-6.3).lineTo(50.5,3.5).lineTo(50.6,4.4).curveTo(50.7,4.9,51,5.4).curveTo(51.2,5.8,51.7,6.1).curveTo(52.1,6.4,52.9,6.3).curveTo(53.6,6.4,54,6.1).curveTo(54.5,5.8,54.8,5.3).curveTo(55,4.9,55.1,4.3).lineTo(55.2,3.1).lineTo(55.2,-6.9).lineTo(55.2,-8).curveTo(55.1,-8.5,54.8,-9).curveTo(54.6,-9.4,54.1,-9.7).curveTo(53.7,-10,52.9,-10).curveTo(52,-10,51.5,-9.6).closePath().moveTo(-78.4,8.1).curveTo(-79.2,7.9,-79.8,7.3).curveTo(-80.4,6.8,-80.8,5.9).curveTo(-81.1,5.1,-81,3.8).lineTo(-78.8,3.4).curveTo(-78.8,5.1,-78.2,5.7).curveTo(-77.6,6.3,-76.5,6.3).lineTo(-75.6,6.1).curveTo(-75.2,6,-74.9,5.5).curveTo(-74.6,5.1,-74.4,4.3).curveTo(-74.2,3.6,-74.2,2.4).lineTo(-74.3,1).curveTo(-74.4,0.4,-74.6,-0.1).curveTo(-74.9,-0.6,-75.3,-0.9).curveTo(-75.8,-1.2,-76.4,-1.2).lineTo(-77.7,-1.2).lineTo(-77.7,-3.2).lineTo(-76.3,-3.2).curveTo(-75.7,-3.2,-75.3,-3.5).curveTo(-74.9,-3.7,-74.6,-4.3).curveTo(-74.4,-4.7,-74.2,-5.4).lineTo(-74.1,-6.8).curveTo(-74.1,-7.8,-74.3,-8.4).curveTo(-74.5,-9,-74.8,-9.4).curveTo(-75.2,-9.7,-75.6,-9.9).curveTo(-76,-10,-76.5,-10).curveTo(-77.7,-10,-78.3,-9.2).curveTo(-78.8,-8.3,-78.8,-7.1).lineTo(-81,-7.6).curveTo(-80.9,-9.8,-79.7,-11).curveTo(-78.4,-12.1,-76.5,-12.1).curveTo(-75.4,-12.1,-74.6,-11.8).curveTo(-73.7,-11.6,-73.1,-11).curveTo(-72.5,-10.4,-72.2,-9.4).curveTo(-71.8,-8.5,-71.8,-6.9).lineTo(-71.9,-5.7).curveTo(-72,-5,-72.2,-4.4).curveTo(-72.4,-3.6,-72.7,-3.1).curveTo(-73,-2.5,-73.6,-2.3).lineTo(-73.6,-2.2).curveTo(-73,-1.9,-72.6,-1.3).curveTo(-72.3,-0.7,-72.1,-0.2).lineTo(-71.9,1.1).lineTo(-71.8,2.5).curveTo(-71.8,5.4,-72.9,6.9).curveTo(-74,8.4,-76.5,8.5).curveTo(-77.5,8.4,-78.4,8.1).closePath().moveTo(72.4,8.2).lineTo(72.4,-11.9).lineTo(81.1,-11.9).lineTo(81.1,-9.8).lineTo(74.7,-9.8).lineTo(74.7,-3).lineTo(80.2,-3).lineTo(80.2,-1).lineTo(74.7,-1).lineTo(74.7,6.1).lineTo(81.1,6.1).lineTo(81.1,8.2).closePath().moveTo(67.1,8.2).lineTo(67.1,-9.8).lineTo(62.7,-9.8).lineTo(62.7,8.2).lineTo(60.4,8.2).lineTo(60.4,-11.9).lineTo(69.4,-11.9).lineTo(69.4,8.2).closePath().moveTo(37,8.2).lineTo(37,-11.9).lineTo(41.1,-11.9).curveTo(42.6,-11.9,43.6,-11.5).curveTo(44.6,-11.1,45.2,-10.3).curveTo(45.7,-9.6,46,-8.4).curveTo(46.2,-7.3,46.2,-5.9).curveTo(46.2,-4.7,46,-3.6).curveTo(45.8,-2.5,45.2,-1.6).curveTo(44.6,-0.8,43.6,-0.3).curveTo(42.6,0.1,40.9,0.1).lineTo(39.3,0.1).lineTo(39.3,8.2).closePath().moveTo(39.3,-2).lineTo(40.8,-2).curveTo(41.9,-2,42.5,-2.3).curveTo(43.1,-2.6,43.4,-3.2).curveTo(43.8,-3.7,43.9,-4.4).lineTo(43.9,-5.8).lineTo(43.9,-7.4).curveTo(43.8,-8.1,43.4,-8.6).curveTo(43.1,-9.2,42.5,-9.5).curveTo(41.9,-9.8,40.9,-9.8).lineTo(39.3,-9.8).closePath().moveTo(25,8.2).lineTo(25,-11.9).lineTo(29.2,-11.9).curveTo(31.8,-12,32.9,-10.6).curveTo(34,-9.2,34,-6.6).curveTo(34,-5,33.5,-4).curveTo(33.1,-3.1,31.9,-2.5).lineTo(31.9,-2.3).curveTo(33.2,-2,33.7,-0.7).curveTo(34.1,0.6,34.1,2.3).curveTo(34.1,5.5,32.9,6.9).curveTo(31.6,8.2,28.8,8.2).closePath().moveTo(27.3,6.2).lineTo(29.1,6.2).curveTo(30,6.2,30.6,5.9).curveTo(31.1,5.5,31.4,5).curveTo(31.8,4.4,31.9,3.6).lineTo(31.9,2.1).curveTo(31.9,0.4,31.3,-0.4).curveTo(30.7,-1.4,28.9,-1.4).lineTo(27.3,-1.4).closePath().moveTo(27.3,-3.4).lineTo(28.8,-3.4).curveTo(30.4,-3.4,31.1,-4.2).curveTo(31.8,-5.1,31.8,-6.6).curveTo(31.8,-8.2,31.1,-9.1).curveTo(30.4,-9.8,28.8,-9.9).lineTo(27.3,-9.9).closePath().moveTo(14.4,8.2).lineTo(14.4,-11.9).lineTo(23,-11.9).lineTo(23,-9.8).lineTo(16.6,-9.8).lineTo(16.6,-3).lineTo(22.2,-3).lineTo(22.2,-1).lineTo(16.6,-1).lineTo(16.6,6.1).lineTo(23,6.1).lineTo(23,8.2).closePath().moveTo(-3.3,8.2).lineTo(-3.3,-11.9).lineTo(1,-11.9).curveTo(3.6,-12,4.6,-10.6).curveTo(5.7,-9.2,5.7,-6.6).curveTo(5.7,-5,5.3,-4).curveTo(4.8,-3.1,3.6,-2.5).lineTo(3.6,-2.3).curveTo(4.9,-2,5.4,-0.7).curveTo(5.9,0.6,5.9,2.3).curveTo(5.9,5.5,4.6,6.9).curveTo(3.3,8.2,0.6,8.2).closePath().moveTo(-1,6.2).lineTo(0.8,6.2).curveTo(1.8,6.2,2.3,5.9).curveTo(2.9,5.5,3.2,5).curveTo(3.5,4.4,3.6,3.6).lineTo(3.7,2.1).curveTo(3.7,0.4,3.1,-0.4).curveTo(2.5,-1.4,0.7,-1.4).lineTo(-1,-1.4).closePath().moveTo(-1,-3.4).lineTo(0.5,-3.4).curveTo(2.1,-3.4,2.8,-4.2).curveTo(3.5,-5.1,3.5,-6.6).curveTo(3.5,-8.2,2.8,-9.1).curveTo(2.2,-9.8,0.6,-9.9).lineTo(-1,-9.9).closePath().moveTo(-19.5,8.2).lineTo(-19.5,-11.9).lineTo(-10.9,-11.9).lineTo(-10.9,-9.8).lineTo(-17.3,-9.8).lineTo(-17.3,-3).lineTo(-11.7,-3).lineTo(-11.7,-1).lineTo(-17.3,-1).lineTo(-17.3,6.1).lineTo(-10.9,6.1).lineTo(-10.9,8.2).closePath().moveTo(-24.7,8.2).lineTo(-24.7,-5.9).lineTo(-24.8,-5.9).lineTo(-29.9,8.2).lineTo(-32.1,8.2).lineTo(-32.1,-11.9).lineTo(-29.9,-11.9).lineTo(-29.9,2.4).lineTo(-29.8,2.4).lineTo(-24.7,-11.9).lineTo(-22.5,-11.9).lineTo(-22.5,8.2).closePath().moveTo(-37.4,8.2).lineTo(-37.4,-1).lineTo(-42.1,-1).lineTo(-42.1,8.2).lineTo(-44.4,8.2).lineTo(-44.4,-11.9).lineTo(-42.1,-11.9).lineTo(-42.1,-3).lineTo(-37.4,-3).lineTo(-37.4,-11.9).lineTo(-35.1,-11.9).lineTo(-35.1,8.2).closePath().moveTo(-48.5,8.2).lineTo(-49.4,3.7).lineTo(-53.9,3.7).lineTo(-54.8,8.2).lineTo(-57,8.2).lineTo(-52.7,-11.9).lineTo(-50.6,-11.9).lineTo(-46.2,8.2).closePath().moveTo(-53.5,1.6).lineTo(-49.8,1.6).lineTo(-51.6,-7.8).lineTo(-51.7,-7.8).closePath();
	this.shape.setTransform(83.4,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.5,162.1,24.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-44.2,9.3).curveTo(-45.3,7.9,-45.4,5.5).lineTo(-45.4,-5.4).curveTo(-45.3,-7.9,-44.2,-9.3).curveTo(-42.9,-10.7,-40.6,-10.7).curveTo(-38.1,-10.7,-36.9,-9.3).curveTo(-35.7,-7.9,-35.7,-5.4).lineTo(-35.7,5.5).curveTo(-35.7,7.9,-36.9,9.3).curveTo(-38.1,10.7,-40.6,10.7).curveTo(-42.9,10.7,-44.2,9.3).closePath().moveTo(-42.4,-7.8).curveTo(-43,-7,-43,-5.5).lineTo(-43,5.6).curveTo(-43,7,-42.4,7.8).curveTo(-41.8,8.6,-40.6,8.6).curveTo(-39.3,8.6,-38.6,7.8).curveTo(-38.1,7,-38.1,5.6).lineTo(-38.1,-5.5).curveTo(-38.1,-7,-38.6,-7.8).curveTo(-39.3,-8.6,-40.6,-8.6).curveTo(-41.8,-8.6,-42.4,-7.8).closePath().moveTo(-71.3,9.3).curveTo(-72.5,7.9,-72.5,5.5).lineTo(-72.5,-5.4).curveTo(-72.5,-7.8,-71.3,-9.3).curveTo(-70.1,-10.7,-67.7,-10.7).curveTo(-65.3,-10.7,-64.2,-9.3).curveTo(-63,-7.8,-63,-5.4).lineTo(-63,-3.5).lineTo(-65.2,-3.5).lineTo(-65.2,-5.5).curveTo(-65.2,-7,-65.8,-7.8).curveTo(-66.4,-8.6,-67.7,-8.6).curveTo(-68.9,-8.6,-69.5,-7.8).curveTo(-70.1,-7,-70.1,-5.5).lineTo(-70.1,5.6).curveTo(-70.1,7,-69.5,7.8).curveTo(-68.9,8.6,-67.7,8.6).curveTo(-66.4,8.6,-65.8,7.8).curveTo(-65.2,7,-65.2,5.6).lineTo(-65.2,2.8).lineTo(-63,2.8).lineTo(-63,5.5).curveTo(-63,7.9,-64.2,9.3).curveTo(-65.3,10.7,-67.7,10.7).curveTo(-70.1,10.7,-71.3,9.3).closePath().moveTo(63.2,10.5).lineTo(63.2,-10.5).lineTo(67.8,-10.5).curveTo(70.2,-10.5,71.4,-9.1).curveTo(72.5,-7.8,72.4,-5.4).lineTo(72.4,-2.8).curveTo(72.5,-0.3,71.3,1).curveTo(70,2.2,67.6,2.2).lineTo(65.5,2.2).lineTo(65.5,10.5).closePath().moveTo(65.5,0.2).lineTo(67.6,0.2).curveTo(68.9,0.2,69.5,-0.5).curveTo(70.2,-1.2,70.1,-2.7).lineTo(70.1,-5.5).curveTo(70.2,-6.9,69.6,-7.6).curveTo(69,-8.4,67.8,-8.4).lineTo(65.5,-8.4).closePath().moveTo(58.7,10.5).lineTo(58.7,-6.2).lineTo(53.4,10.5).lineTo(50.9,10.5).lineTo(50.9,-10.5).lineTo(52.9,-10.5).lineTo(52.9,5.2).lineTo(58.2,-10.5).lineTo(60.8,-10.5).lineTo(60.8,10.5).closePath().moveTo(46.3,10.5).lineTo(46.3,-6.4).lineTo(42.9,10.5).lineTo(40.7,10.5).lineTo(37.2,-6.2).lineTo(37.2,10.5).lineTo(35.2,10.5).lineTo(35.2,-10.5).lineTo(38.4,-10.5).lineTo(41.9,6.3).lineTo(45.2,-10.5).lineTo(48.5,-10.5).lineTo(48.5,10.5).closePath().moveTo(26.5,10.5).lineTo(25.6,6.3).lineTo(20.3,6.3).lineTo(19.5,10.5).lineTo(17.4,10.5).lineTo(21.3,-10.5).lineTo(24.7,-10.5).lineTo(28.8,10.5).closePath().moveTo(25.3,4.3).lineTo(23,-7.8).lineTo(20.6,4.3).lineTo(25.3,4.3).closePath().moveTo(13.2,10.5).lineTo(13.2,1.1).lineTo(8,1.1).lineTo(8,10.5).lineTo(5.7,10.5).lineTo(5.7,-10.5).lineTo(8,-10.5).lineTo(8,-1).lineTo(13.2,-1).lineTo(13.2,-10.5).lineTo(15.6,-10.5).lineTo(15.6,10.5).closePath().moveTo(-3.4,10.5).lineTo(-3.4,-6.2).lineTo(-8.7,10.5).lineTo(-11.2,10.5).lineTo(-11.2,-10.5).lineTo(-9.2,-10.5).lineTo(-9.2,5.2).lineTo(-3.9,-10.5).lineTo(-1.3,-10.5).lineTo(-1.3,10.5).closePath().moveTo(-22.3,10.5).lineTo(-22.3,-10.5).lineTo(-17.7,-10.5).curveTo(-15.3,-10.5,-14.1,-9.1).curveTo(-13,-7.8,-13.1,-5.4).lineTo(-13.1,-2.8).curveTo(-13,-0.3,-14.2,1).curveTo(-15.5,2.2,-17.9,2.2).lineTo(-20,2.2).lineTo(-20,10.5).closePath().moveTo(-20,0.2).lineTo(-17.9,0.2).curveTo(-16.6,0.2,-16,-0.5).curveTo(-15.3,-1.2,-15.4,-2.7).lineTo(-15.4,-5.5).curveTo(-15.3,-6.9,-15.9,-7.6).curveTo(-16.5,-8.4,-17.7,-8.4).lineTo(-20,-8.4).closePath().moveTo(-30.3,10.5).lineTo(-30.3,-8.4).lineTo(-34.1,-8.4).lineTo(-34.1,-10.5).lineTo(-24.1,-10.5).lineTo(-24.1,-8.4).lineTo(-28,-8.4).lineTo(-28,10.5).closePath().moveTo(-49.8,10.5).lineTo(-49.8,-6.4).lineTo(-53.1,10.5).lineTo(-55.3,10.5).lineTo(-58.9,-6.2).lineTo(-58.9,10.5).lineTo(-60.9,10.5).lineTo(-60.9,-10.5).lineTo(-57.6,-10.5).lineTo(-54.2,6.3).lineTo(-50.8,-10.5).lineTo(-47.5,-10.5).lineTo(-47.5,10.5).closePath();
	this.shape.setTransform(72.5,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.9,21.5);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFDD57").beginStroke().moveTo(7.7,9.3).curveTo(6.5,7.9,6.6,5.5).lineTo(6.6,-5.4).curveTo(6.5,-7.9,7.7,-9.3).curveTo(8.9,-10.7,11.3,-10.7).curveTo(13.8,-10.7,15,-9.3).curveTo(16.2,-7.9,16.2,-5.4).lineTo(16.2,5.5).curveTo(16.2,7.9,15,9.3).curveTo(13.8,10.7,11.3,10.7).curveTo(8.9,10.7,7.7,9.3).closePath().moveTo(9.5,-7.8).curveTo(8.9,-7,8.9,-5.5).lineTo(8.9,5.6).curveTo(8.9,7,9.5,7.8).curveTo(10.1,8.6,11.3,8.6).curveTo(12.7,8.6,13.2,7.8).curveTo(13.9,7,13.9,5.6).lineTo(13.9,-5.5).curveTo(13.9,-7,13.2,-7.8).curveTo(12.7,-8.6,11.3,-8.6).curveTo(10.1,-8.6,9.5,-7.8).closePath().moveTo(-3.7,9.3).curveTo(-4.9,7.9,-4.9,5.5).lineTo(-4.9,-5.4).curveTo(-4.9,-7.8,-3.7,-9.3).curveTo(-2.5,-10.7,-0.1,-10.7).curveTo(2.3,-10.7,3.4,-9.3).curveTo(4.6,-7.8,4.6,-5.4).lineTo(4.6,-3.5).lineTo(2.4,-3.5).lineTo(2.4,-5.5).curveTo(2.4,-7,1.8,-7.8).curveTo(1.2,-8.6,-0.1,-8.6).curveTo(-1.3,-8.6,-1.9,-7.8).curveTo(-2.5,-7,-2.5,-5.5).lineTo(-2.5,5.6).curveTo(-2.5,7,-1.9,7.8).curveTo(-1.3,8.6,-0.1,8.6).curveTo(1.2,8.6,1.8,7.8).curveTo(2.4,7,2.4,5.6).lineTo(2.4,2.8).lineTo(4.6,2.8).lineTo(4.6,5.5).curveTo(4.6,7.9,3.4,9.3).curveTo(2.3,10.7,-0.1,10.7).curveTo(-2.5,10.7,-3.7,9.3).closePath().moveTo(-47.4,9.3).curveTo(-48.6,7.9,-48.6,5.5).lineTo(-48.6,-5.4).curveTo(-48.6,-7.8,-47.4,-9.3).curveTo(-46.2,-10.7,-43.8,-10.7).curveTo(-41.4,-10.7,-40.3,-9.3).curveTo(-39.2,-7.8,-39.2,-5.4).lineTo(-39.2,-3.5).lineTo(-41.3,-3.5).lineTo(-41.3,-5.5).curveTo(-41.4,-7,-41.9,-7.8).curveTo(-42.6,-8.6,-43.8,-8.6).curveTo(-45.1,-8.6,-45.6,-7.8).curveTo(-46.3,-7,-46.3,-5.5).lineTo(-46.3,5.6).curveTo(-46.3,7,-45.6,7.8).curveTo(-45.1,8.6,-43.8,8.6).curveTo(-42.6,8.6,-41.9,7.8).curveTo(-41.4,7,-41.3,5.6).lineTo(-41.3,2.8).lineTo(-39.2,2.8).lineTo(-39.2,5.5).curveTo(-39.2,7.9,-40.3,9.3).curveTo(-41.4,10.7,-43.8,10.7).curveTo(-46.2,10.7,-47.4,9.3).closePath().moveTo(-9.4,10.5).lineTo(-9.4,-10.5).lineTo(-7,-10.5).lineTo(-7,10.5).closePath().moveTo(-20.6,10.5).lineTo(-20.6,-10.5).lineTo(-18.3,-10.5).lineTo(-18.3,-2.2).lineTo(-16.2,-2.2).curveTo(-13.7,-2.2,-12.5,-0.9).curveTo(-11.3,0.4,-11.3,2.9).lineTo(-11.3,5.4).curveTo(-11.3,7.8,-12.4,9.1).curveTo(-13.6,10.5,-16,10.5).closePath().moveTo(-18.3,8.4).lineTo(-16,8.4).curveTo(-14.8,8.4,-14.1,7.7).curveTo(-13.6,7,-13.6,5.5).lineTo(-13.6,2.7).curveTo(-13.6,1.2,-14.2,0.5).curveTo(-14.9,-0.1,-16.2,-0.1).lineTo(-18.3,-0.1).closePath().moveTo(-32.3,10.5).lineTo(-32.3,-10.5).lineTo(-27.6,-10.5).curveTo(-25.2,-10.5,-24.1,-9.3).curveTo(-23.1,-8.2,-23.1,-5.8).lineTo(-23.1,-4.8).curveTo(-23.1,-3.2,-23.6,-2.1).curveTo(-24.2,-1.1,-25.6,-0.7).curveTo(-24.1,-0.2,-23.3,0.9).curveTo(-22.7,2.1,-22.7,3.8).lineTo(-22.7,5.6).curveTo(-22.7,8,-23.9,9.3).curveTo(-25.1,10.5,-27.5,10.5).closePath().moveTo(-30,8.4).lineTo(-27.5,8.4).curveTo(-26.2,8.4,-25.7,7.7).curveTo(-25.1,7,-25,5.5).lineTo(-25,3.7).curveTo(-25.1,2,-25.7,1.3).curveTo(-26.4,0.5,-28,0.6).lineTo(-30,0.6).closePath().moveTo(-30,-1.6).lineTo(-28.2,-1.6).curveTo(-26.8,-1.5,-26.1,-2.1).curveTo(-25.4,-2.7,-25.4,-4.4).lineTo(-25.4,-5.6).curveTo(-25.4,-7,-25.9,-7.7).curveTo(-26.4,-8.4,-27.7,-8.4).lineTo(-30,-8.4).closePath().moveTo(46.3,10.3).lineTo(46.3,7.4).lineTo(48.5,7.4).lineTo(48.5,10.3).closePath().moveTo(40.4,10.3).lineTo(40.4,-10.7).lineTo(42.7,-10.7).lineTo(42.7,10.3).closePath().moveTo(29.2,10.3).lineTo(29.2,-10.7).lineTo(31.6,-10.7).lineTo(31.6,-2.4).lineTo(33.6,-2.4).curveTo(36.1,-2.4,37.3,-1.2).curveTo(38.5,0.1,38.5,2.6).lineTo(38.5,5.1).curveTo(38.5,7.6,37.4,8.9).curveTo(36.2,10.2,33.8,10.3).closePath().moveTo(31.6,8.2).lineTo(33.8,8.2).curveTo(35,8.2,35.6,7.4).curveTo(36.2,6.7,36.2,5.3).lineTo(36.2,2.5).curveTo(36.2,1,35.6,0.3).curveTo(34.9,-0.4,33.6,-0.3).lineTo(31.6,-0.3).closePath().moveTo(20.8,10.3).lineTo(20.8,-8.6).lineTo(16.9,-8.6).lineTo(16.9,-10.7).lineTo(27,-10.7).lineTo(27,-8.6).lineTo(23.1,-8.6).lineTo(23.1,10.3).closePath().moveTo(46.5,5.6).lineTo(46.3,-10.7).lineTo(48.6,-10.7).lineTo(48.3,5.6).closePath();
	this.shape.setTransform(48.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.2,21.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.8,2.9).curveTo(-8.3,2.3,-8.3,1.5).lineTo(-8.3,-1.6).curveTo(-8.3,-2.4,-7.8,-2.9).curveTo(-7.4,-3.3,-6.7,-3.3).curveTo(-5.9,-3.3,-5.6,-2.9).curveTo(-5.1,-2.5,-5.1,-1.6).lineTo(-5.1,1.5).curveTo(-5.1,2.4,-5.6,2.9).curveTo(-6,3.3,-6.7,3.3).curveTo(-7.3,3.3,-7.8,2.9).closePath().moveTo(-7.2,-2.4).curveTo(-7.5,-2.1,-7.5,-1.7).lineTo(-7.5,1.7).curveTo(-7.5,2.1,-7.2,2.4).curveTo(-7,2.6,-6.7,2.6).curveTo(-6.4,2.6,-6.1,2.4).curveTo(-5.9,2.1,-5.9,1.7).lineTo(-5.9,-1.7).curveTo(-5.9,-2.1,-6.1,-2.4).curveTo(-6.3,-2.6,-6.7,-2.6).curveTo(-7.1,-2.6,-7.2,-2.4).closePath().moveTo(-3,2.8).curveTo(-3.3,2.4,-3.3,1.7).lineTo(-3.3,-1.7).curveTo(-3.3,-2.5,-2.8,-3).curveTo(-2.4,-3.3,-1.8,-3.3).curveTo(-1.1,-3.3,-0.7,-2.9).curveTo(-0.4,-2.5,-0.4,-1.9).lineTo(-0.4,-1.5).lineTo(-1.1,-1.5).lineTo(-1.1,-1.8).lineTo(-1.2,-2.3).curveTo(-1.5,-2.5,-1.8,-2.5).curveTo(-2.2,-2.5,-2.3,-2.3).curveTo(-2.5,-2,-2.5,-1.6).lineTo(-2.5,1.6).curveTo(-2.5,2,-2.4,2.2).curveTo(-2.3,2.6,-1.8,2.6).curveTo(-1.4,2.6,-1.2,2.3).curveTo(-1.1,2.1,-1.1,1.7).lineTo(-1.1,1.5).lineTo(-0.3,1.5).lineTo(-0.3,1.7).curveTo(-0.3,2.5,-0.7,2.9).curveTo(-1,3.2,-1.8,3.2).curveTo(-2.6,3.2,-3,2.8).closePath().moveTo(3.6,3.2).lineTo(2.8,0.3).lineTo(1.9,0.3).lineTo(1.9,3.2).lineTo(1.2,3.2).lineTo(1.2,-3.1).lineTo(1.9,-3.1).lineTo(1.9,-0.4).lineTo(2.5,-0.4).curveTo(2.6,-0.4,2.6,-0.4).curveTo(2.7,-0.4,2.8,-0.4).curveTo(2.8,-0.4,2.9,-0.5).curveTo(2.9,-0.5,3,-0.6).lineTo(3.1,-1.4).lineTo(3.2,-2.1).curveTo(3.3,-2.8,3.6,-3).curveTo(3.8,-3.2,4.4,-3.2).lineTo(4.4,-3.2).lineTo(4.4,-2.5).lineTo(4.4,-2.5).curveTo(4.3,-2.5,4.3,-2.5).curveTo(4.3,-2.5,4.2,-2.5).curveTo(4.2,-2.5,4.2,-2.4).curveTo(4.1,-2.4,4.1,-2.4).curveTo(3.9,-2.2,3.9,-1.7).lineTo(3.8,-1).lineTo(3.7,-0.4).lineTo(3.5,-0.1).lineTo(4.5,3.2).closePath().moveTo(13.2,3.1).lineTo(12.9,1.7).lineTo(11.6,1.7).lineTo(11.3,3.1).lineTo(10.5,3.1).lineTo(11.9,-3.2).lineTo(12.6,-3.2).lineTo(14,3.1).closePath().moveTo(12.8,1.1).lineTo(12.3,-1.4).lineTo(12.1,-1.4).lineTo(11.6,1.1).lineTo(12.8,1.1).closePath().moveTo(6.3,3.1).lineTo(6.3,-3.2).lineTo(7.6,-3.2).curveTo(8.4,-3.2,8.8,-2.8).curveTo(9.3,-2.5,9.3,-1.7).lineTo(9.3,-1.5).curveTo(9.3,-0.9,8.9,-0.5).lineTo(8.6,-0.3).lineTo(8.9,-0.1).curveTo(9.3,0.3,9.3,1.2).lineTo(9.3,1.3).curveTo(9.3,2.3,8.8,2.7).curveTo(8.4,3.1,7.6,3.1).closePath().moveTo(7.1,2.5).lineTo(7.5,2.5).curveTo(8,2.5,8.2,2.3).curveTo(8.5,2,8.5,1.5).lineTo(8.5,1).curveTo(8.5,0.5,8.3,0.3).curveTo(8.1,0.1,7.6,0.1).lineTo(7.1,0.1).closePath().moveTo(7.1,-0.6).lineTo(7.6,-0.6).curveTo(8.1,-0.6,8.3,-0.9).curveTo(8.5,-1.1,8.5,-1.4).lineTo(8.5,-1.8).curveTo(8.5,-2.3,8.2,-2.5).curveTo(8,-2.6,7.5,-2.6).lineTo(7.1,-2.6).closePath().moveTo(-10.5,3.1).lineTo(-10.5,-0.9).lineTo(-10.7,-0.9).lineTo(-11.8,2).lineTo(-12.1,2).lineTo(-13.1,-0.9).lineTo(-13.3,-0.9).lineTo(-13.3,3.1).lineTo(-14,3.1).lineTo(-14,-3.2).lineTo(-13.2,-3.2).lineTo(-11.9,0.5).lineTo(-11.8,0.3).lineTo(-10.6,-3.2).lineTo(-9.8,-3.2).lineTo(-9.8,3.1).closePath();
	this.shape.setTransform(14,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,6.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(13.3,4.7).lineTo(13.3,3.7).lineTo(9.5,3.7).lineTo(9.5,-4.6).curveTo(9.5,-5.1,9.9,-5.1).curveTo(10.4,-5.1,10.4,-4.6).lineTo(10.4,2.8).lineTo(12.4,2.8).lineTo(12.4,-4.6).curveTo(12.4,-5.1,12.9,-5.1).curveTo(13.4,-5.1,13.4,-4.6).lineTo(13.4,2.8).lineTo(14.2,2.8).lineTo(14.2,4.7).curveTo(14.2,5.1,13.7,5.1).curveTo(13.3,5.1,13.3,4.7).closePath().moveTo(-8.4,4.7).lineTo(-8.4,3.7).lineTo(-12.1,3.7).lineTo(-12.1,4.7).curveTo(-12.1,5.1,-12.5,5.1).curveTo(-13,5.1,-13,4.7).lineTo(-13,2.8).lineTo(-12.5,2.8).lineTo(-12.4,2.8).curveTo(-11.9,1.6,-11.7,0.5).curveTo(-11.4,-1.6,-11.4,-4.6).lineTo(-11.4,-5.1).lineTo(-8.2,-5.1).lineTo(-8.2,2.8).lineTo(-7.4,2.8).lineTo(-7.4,4.7).curveTo(-7.4,5.1,-7.9,5.1).curveTo(-8.4,5.1,-8.4,4.7).closePath().moveTo(-10.5,-3.4).curveTo(-10.5,-1,-10.8,0.9).curveTo(-11,1.9,-11.3,2.7).lineTo(-11.4,2.9).lineTo(-9.2,2.9).lineTo(-9.2,-4.2).lineTo(-10.5,-4.2).closePath().moveTo(22.1,3.7).curveTo(21.6,3.6,21.7,3.1).lineTo(22.8,-0.5).lineTo(22.7,-0.5).curveTo(22.4,-0.6,22.1,-1).curveTo(21.8,-1.5,21.8,-2.2).lineTo(21.8,-2.9).curveTo(21.8,-4,22.2,-4.5).curveTo(22.8,-5.1,24.2,-5.1).lineTo(25.8,-5.1).lineTo(25.8,3.2).curveTo(25.8,3.7,25.3,3.7).curveTo(24.8,3.7,24.8,3.2).lineTo(24.8,-0.2).lineTo(23.7,-0.2).lineTo(22.7,3.4).curveTo(22.6,3.7,22.2,3.7).lineTo(22.1,3.7).closePath().moveTo(23.1,-4).curveTo(22.8,-3.6,22.8,-3).lineTo(22.8,-2.4).curveTo(22.8,-1.7,23.1,-1.4).curveTo(23.4,-1.1,24,-1.1).lineTo(24.8,-1.1).lineTo(24.8,-4.2).lineTo(24,-4.2).curveTo(23.4,-4.2,23.1,-4).closePath().moveTo(7.4,3.3).lineTo(7,1.7).lineTo(5.1,1.7).lineTo(4.7,3.3).curveTo(4.6,3.8,4.1,3.7).curveTo(3.7,3.6,3.8,3.1).lineTo(5.5,-4.8).curveTo(5.6,-5.1,6,-5.1).curveTo(6.4,-5.1,6.6,-4.8).lineTo(8.3,3.1).curveTo(8.4,3.6,7.9,3.7).lineTo(7.8,3.7).curveTo(7.4,3.7,7.4,3.3).closePath().moveTo(6.9,0.9).lineTo(6,-3.7).lineTo(5.1,0.9).lineTo(6.9,0.9).closePath().moveTo(19,3.2).lineTo(19,-2.4).lineTo(16.5,2.8).lineTo(16.5,3.2).curveTo(16.5,3.7,16,3.7).curveTo(15.5,3.7,15.5,3.2).lineTo(15.5,-4.6).curveTo(15.5,-5.1,16,-5.1).curveTo(16.5,-5.1,16.5,-4.6).lineTo(16.5,1.1).lineTo(19,-4.1).lineTo(19,-4.6).curveTo(19,-5.1,19.5,-5.1).curveTo(20,-5.1,20,-4.6).lineTo(20,3.2).curveTo(20,3.7,19.5,3.7).curveTo(19,3.7,19,3.2).closePath().moveTo(-0.8,3.2).lineTo(-0.8,-5.1).lineTo(0.8,-5.1).curveTo(2.3,-5.1,2.8,-4.5).curveTo(3.3,-4,3.3,-2.9).lineTo(3.3,-2.4).curveTo(3.3,-1.3,2.8,-0.9).curveTo(2.3,-0.2,0.8,-0.2).lineTo(0.2,-0.2).lineTo(0.2,3.2).curveTo(0.2,3.7,-0.3,3.7).curveTo(-0.8,3.7,-0.8,3.2).closePath().moveTo(0.2,-1.1).lineTo(1.1,-1.1).curveTo(1.7,-1.1,1.9,-1.4).curveTo(2.3,-1.8,2.3,-2.3).lineTo(2.3,-3).curveTo(2.3,-3.7,1.9,-4).curveTo(1.7,-4.2,1.1,-4.2).lineTo(0.2,-4.2).closePath().moveTo(-5.8,3.7).lineTo(-5.8,-5.1).lineTo(-2.6,-5.1).curveTo(-2.2,-5.1,-2.2,-4.7).curveTo(-2.2,-4.1,-2.6,-4.1).lineTo(-4.8,-4.1).lineTo(-4.8,-1.2).lineTo(-3,-1.2).curveTo(-2.5,-1.2,-2.5,-0.7).curveTo(-2.5,-0.3,-3,-0.3).lineTo(-4.8,-0.3).lineTo(-4.8,2.8).lineTo(-2.6,2.8).curveTo(-2.1,2.8,-2.1,3.3).curveTo(-2.1,3.7,-2.6,3.7).closePath().moveTo(-17.6,3.7).lineTo(-17.6,-5.1).lineTo(-14.6,-5.1).curveTo(-14.1,-5.1,-14.1,-4.7).curveTo(-14.1,-4.1,-14.6,-4.1).lineTo(-16.7,-4.1).lineTo(-16.7,-1.2).lineTo(-14.8,-1.2).curveTo(-14.4,-1.2,-14.4,-0.7).curveTo(-14.4,-0.3,-14.8,-0.3).lineTo(-16.7,-0.3).lineTo(-16.7,2.8).lineTo(-14.5,2.8).curveTo(-14.1,2.8,-14.1,3.3).curveTo(-14.1,3.7,-14.5,3.7).closePath().moveTo(-23,3.2).lineTo(-23,2.4).lineTo(-23.6,2.4).curveTo(-24.8,2.4,-25.3,1.8).curveTo(-25.8,1.2,-25.8,0).lineTo(-25.8,-1.5).curveTo(-25.8,-2.9,-25.2,-3.5).curveTo(-24.6,-4.1,-23.5,-4.1).lineTo(-23,-4.1).lineTo(-23,-4.6).curveTo(-23,-5.1,-22.5,-5.1).curveTo(-22,-5.1,-22,-4.6).lineTo(-22,-4.1).lineTo(-21.6,-4.1).curveTo(-20.4,-4.1,-19.8,-3.5).curveTo(-19.2,-2.9,-19.2,-1.5).lineTo(-19.2,0).curveTo(-19.2,1.2,-19.7,1.8).curveTo(-20.3,2.4,-21.4,2.4).lineTo(-22,2.4).lineTo(-22,3.2).curveTo(-22,3.7,-22.5,3.7).curveTo(-23,3.7,-23,3.2).closePath().moveTo(-22,1.6).lineTo(-21.5,1.6).curveTo(-20.9,1.6,-20.5,1.2).curveTo(-20.2,0.9,-20.2,0.2).lineTo(-20.2,-1.7).curveTo(-20.2,-2.6,-20.6,-2.9).curveTo(-20.9,-3.2,-21.7,-3.2).lineTo(-22,-3.2).closePath().moveTo(-24.4,-2.9).curveTo(-24.9,-2.6,-24.9,-1.7).lineTo(-24.9,0.2).curveTo(-24.9,0.9,-24.6,1.2).curveTo(-24.2,1.6,-23.5,1.6).lineTo(-23,1.6).lineTo(-23,-3.2).lineTo(-23.4,-3.2).curveTo(-24.1,-3.2,-24.4,-2.9).closePath();
	this.shape.setTransform(25.8,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.7,10.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.5,4.4).curveTo(11,4.3,11.2,3.8).lineTo(12.3,0.4).lineTo(12.3,0.2).lineTo(12.1,0.2).curveTo(11.9,0.1,11.6,-0.3).curveTo(11.2,-0.9,11.2,-1.5).lineTo(11.2,-2.2).curveTo(11.2,-3.1,11.6,-3.8).curveTo(12.2,-4.4,13.7,-4.4).lineTo(15.3,-4.4).lineTo(15.3,3.9).curveTo(15.3,4.4,14.8,4.4).curveTo(14.3,4.4,14.3,3.9).lineTo(14.3,0.5).lineTo(13.2,0.5).lineTo(12.1,4.1).curveTo(12,4.4,11.7,4.4).lineTo(11.5,4.4).closePath().moveTo(12.5,-3.3).curveTo(12.2,-2.9,12.2,-2.3).lineTo(12.2,-1.7).curveTo(12.2,-1,12.5,-0.7).curveTo(12.8,-0.4,13.5,-0.4).lineTo(14.3,-0.4).lineTo(14.3,-3.5).lineTo(13.5,-3.5).curveTo(12.8,-3.5,12.5,-3.3).closePath().moveTo(-6.2,4).lineTo(-6.5,2.4).lineTo(-8.4,2.4).lineTo(-8.8,4).curveTo(-8.8,4.5,-9.3,4.4).curveTo(-9.8,4.3,-9.7,3.8).lineTo(-8,-4.1).curveTo(-7.8,-4.4,-7.4,-4.4).curveTo(-7.1,-4.4,-6.9,-4.1).lineTo(-5.2,3.8).curveTo(-5.1,4.3,-5.6,4.4).lineTo(-5.7,4.4).curveTo(-6.1,4.4,-6.2,4).closePath().moveTo(-6.5,1.6).lineTo(-7.4,-3).lineTo(-8.4,1.6).lineTo(-6.5,1.6).closePath().moveTo(8.1,3.9).lineTo(8.1,0.4).lineTo(5.8,0.4).lineTo(5.8,3.9).curveTo(5.8,4.4,5.3,4.4).curveTo(4.7,4.4,4.7,3.9).lineTo(4.7,-3.9).curveTo(4.7,-4.4,5.3,-4.4).curveTo(5.8,-4.4,5.8,-3.9).lineTo(5.8,-0.5).lineTo(8.1,-0.5).lineTo(8.1,-3.9).curveTo(8.1,-4.4,8.6,-4.4).curveTo(9.1,-4.4,9.1,-3.9).lineTo(9.1,3.9).curveTo(9.1,4.4,8.6,4.4).curveTo(8.1,4.4,8.1,3.9).closePath().moveTo(-3.7,4.4).lineTo(-3.7,-3.9).curveTo(-3.7,-4.4,-3.2,-4.4).curveTo(-2.7,-4.4,-2.7,-3.9).lineTo(-2.7,3.5).lineTo(-0.9,3.5).lineTo(-0.9,-3.9).curveTo(-0.9,-4.4,-0.4,-4.4).curveTo(0.1,-4.4,0.1,-3.9).lineTo(0.1,3.5).lineTo(1.8,3.5).lineTo(1.8,-3.9).curveTo(1.8,-4.4,2.3,-4.4).curveTo(2.8,-4.4,2.8,-3.9).lineTo(2.8,4.4).closePath().moveTo(-15.3,4.4).lineTo(-15.3,-4.4).lineTo(-12.1,-4.4).curveTo(-11.6,-4.4,-11.6,-4).curveTo(-11.6,-3.4,-12.1,-3.4).lineTo(-14.3,-3.4).lineTo(-14.3,-0.7).lineTo(-13.5,-0.7).curveTo(-12.3,-0.7,-11.8,-0.2).curveTo(-11.2,0.2,-11.2,1.2).lineTo(-11.2,2.3).curveTo(-11.2,3,-11.6,3.6).curveTo(-12.1,4.4,-13.5,4.4).closePath().moveTo(-14.3,3.5).lineTo(-13.5,3.5).curveTo(-12.8,3.5,-12.5,3.1).curveTo(-12.3,2.8,-12.3,2.1).lineTo(-12.3,1.6).curveTo(-12.3,0.8,-12.7,0.4).curveTo(-13,0.2,-13.5,0.2).lineTo(-14.3,0.2).closePath();
	this.shape.setTransform(15.3,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,8.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(15.7,11.7).lineTo(15.7,8.9).lineTo(7.4,8.9).lineTo(7.4,11.7).lineTo(5.2,11.7).lineTo(5.2,6.9).lineTo(6.5,6.9).curveTo(7,6.3,7.2,5.6).curveTo(7.4,4.9,7.4,3.9).lineTo(8.2,-11.4).lineTo(16.3,-11.4).lineTo(16.3,6.9).lineTo(17.8,6.9).lineTo(17.8,11.7).closePath().moveTo(9.6,3.9).curveTo(9.5,5,9.3,5.7).curveTo(9.1,6.4,8.7,6.9).lineTo(14,6.9).lineTo(14,-9.4).lineTo(10.3,-9.4).closePath().moveTo(-27.8,7.7).curveTo(-28.9,6.3,-28.9,4).lineTo(-28.9,-6.6).curveTo(-28.9,-8.9,-27.8,-10.3).curveTo(-26.7,-11.6,-24.3,-11.7).curveTo(-22,-11.6,-20.9,-10.3).curveTo(-19.7,-8.9,-19.7,-6.6).lineTo(-19.7,-4.7).lineTo(-21.9,-4.7).lineTo(-21.9,-6.7).curveTo(-21.9,-8.1,-22.5,-8.8).curveTo(-23,-9.6,-24.3,-9.6).curveTo(-25.5,-9.6,-26.1,-8.8).curveTo(-26.7,-8.1,-26.7,-6.7).lineTo(-26.7,4.1).curveTo(-26.7,5.5,-26.1,6.3).curveTo(-25.5,7,-24.3,7).curveTo(-23,7,-22.5,6.3).curveTo(-21.9,5.5,-21.9,4.1).lineTo(-21.9,1.5).lineTo(-19.7,1.5).lineTo(-19.7,4).curveTo(-19.7,6.3,-20.9,7.7).curveTo(-22,9.1,-24.3,9.1).curveTo(-26.7,9.1,-27.8,7.7).closePath().moveTo(-39,7.7).curveTo(-40.1,6.3,-40.1,4).lineTo(-40.1,-6.6).curveTo(-40.1,-8.9,-39,-10.3).curveTo(-37.8,-11.6,-35.5,-11.7).curveTo(-33.1,-11.6,-32,-10.3).curveTo(-30.8,-8.9,-30.8,-6.6).lineTo(-30.8,4).curveTo(-30.8,6.3,-32,7.7).curveTo(-33.1,9.1,-35.5,9.1).curveTo(-37.8,9.1,-39,7.7).closePath().moveTo(-37.3,-8.8).curveTo(-37.9,-8.1,-37.9,-6.7).lineTo(-37.9,4.1).curveTo(-37.9,5.5,-37.3,6.3).curveTo(-36.7,7,-35.5,7).curveTo(-34.3,7,-33.7,6.3).curveTo(-33.1,5.5,-33.1,4.1).lineTo(-33.1,-6.7).curveTo(-33.1,-8.1,-33.7,-8.8).curveTo(-34.3,-9.6,-35.5,-9.6).curveTo(-36.7,-9.6,-37.3,-8.8).closePath().moveTo(-18.3,8.9).lineTo(-18.3,6.8).curveTo(-17.3,6.8,-16.9,6.5).curveTo(-16.4,6.2,-16.2,5.6).curveTo(-16,4.9,-16,3.9).lineTo(-15.5,-11.4).lineTo(-7.2,-11.4).lineTo(-7.2,8.9).lineTo(-9.5,8.9).lineTo(-9.5,-9.4).lineTo(-13.3,-9.4).lineTo(-13.8,3.8).curveTo(-13.9,5.4,-14.2,6.6).curveTo(-14.6,7.7,-15.5,8.3).curveTo(-16.4,8.9,-17.9,8.9).closePath().moveTo(43.5,8.9).lineTo(43.5,-11.4).lineTo(51.8,-11.4).lineTo(51.8,-9.4).lineTo(45.8,-9.4).lineTo(45.8,-2.4).lineTo(50.7,-2.4).lineTo(50.7,-0.4).lineTo(45.8,-0.4).lineTo(45.8,6.8).lineTo(51.8,6.8).lineTo(51.8,8.9).closePath().moveTo(39.2,8.9).lineTo(39.2,-7.3).lineTo(34,8.9).lineTo(31.6,8.9).lineTo(31.6,-11.4).lineTo(33.6,-11.4).lineTo(33.6,3.7).lineTo(38.7,-11.4).lineTo(41.2,-11.4).lineTo(41.2,8.9).closePath().moveTo(27,8.9).lineTo(27,-0.3).lineTo(22.1,-0.3).lineTo(22.1,8.9).lineTo(19.8,8.9).lineTo(19.8,-11.4).lineTo(22.1,-11.4).lineTo(22.1,-2.3).lineTo(27,-2.3).lineTo(27,-11.4).lineTo(29.3,-11.4).lineTo(29.3,8.9).closePath().moveTo(-4.8,8.9).lineTo(-4.8,-11.4).lineTo(3.5,-11.4).lineTo(3.5,-9.4).lineTo(-2.5,-9.4).lineTo(-2.5,-2.4).lineTo(2.4,-2.4).lineTo(2.4,-0.4).lineTo(-2.5,-0.4).lineTo(-2.5,6.8).lineTo(3.5,6.8).lineTo(3.5,8.9).closePath().moveTo(-44.6,8.9).lineTo(-44.6,-9.4).lineTo(-49.5,-9.4).lineTo(-49.5,8.9).lineTo(-51.8,8.9).lineTo(-51.8,-11.4).lineTo(-42.3,-11.4).lineTo(-42.3,8.9).closePath();
	this.shape.setTransform(51.8,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.7,23.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cloud();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,607,187);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(16,3.8,1.144,1.144,0,0,0,14,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,7.6);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(69.3,5.9,1.144,1.144,0,0,0,25.9,5.1);

	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(17.5,5.1,1.144,1.144,0,0,0,15.3,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.8,11.7);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(595,193.5,1,1,0,0,0,216,275.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).to({_off:true},1).wait(698).to({_off:false},0).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(379,-81.9,432,551);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(189.5,0.1,1,1,0,0,0,192.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(186.6,48.6,1,1,0,0,0,162.6,48.5);
	this.instance_1.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-0.4,384.3,97.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(99.8,31.2,1,1,0,0,0,64.3,13.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFDD57").beginStroke().drawRoundRect(-144.4,-39,288.8,78,15.9);
	this.shape.setTransform(99.8,31.2,0.8,0.8);

	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(97.3,32.3,1,1,0,0,0,55.4,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().drawRoundRect(-144.4,-39,288.8,78,15.9);
	this.shape_1.setTransform(99.8,31.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,0,231,62.4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(105.1,-40.2,1,1,0,0,0,108.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-60.4,217.4,40.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().moveTo(-31.3,278).curveTo(-32.4,240.3,-32.9,202.6).curveTo(-33.3,153.2,-36,104.4).curveTo(-38.8,51.4,-34.5,-1.4).curveTo(-30.8,-47.5,-31.6,-94.5).lineTo(-42.7,-94.5).lineTo(-45.4,-96.7).lineTo(-44.6,-97).lineTo(-40.8,-220.3).curveTo(-26.4,-250.5,5.5,-278.5).curveTo(13.4,-270.4,17.8,-259).curveTo(24,-227.4,27.6,-180.1).curveTo(44.4,130.4,45.4,221.9).lineTo(-12.8,258.4).lineTo(-12.8,278.5).closePath();
	var mask_graphics_35 = new cjs.Graphics().moveTo(-31.3,278).curveTo(-32.4,240.3,-32.9,202.6).curveTo(-33.3,153.2,-36,104.4).curveTo(-38.8,51.4,-34.5,-1.4).curveTo(-30.8,-47.5,-31.6,-94.5).lineTo(-42.7,-94.5).lineTo(-45.4,-96.7).lineTo(-44.6,-97).lineTo(-40.8,-220.3).curveTo(-26.4,-250.5,5.5,-278.5).curveTo(13.4,-270.4,17.8,-259).curveTo(24,-227.4,27.6,-180.1).curveTo(44.4,130.4,45.4,221.9).lineTo(-12.8,258.4).lineTo(-12.8,278.5).closePath();
	var mask_graphics_135 = new cjs.Graphics().moveTo(-31.3,278).curveTo(-32.4,240.3,-32.9,202.6).curveTo(-33.3,153.2,-36,104.4).curveTo(-38.8,51.4,-34.5,-1.4).curveTo(-30.8,-47.5,-31.6,-94.5).lineTo(-42.7,-94.5).lineTo(-45.4,-96.7).lineTo(-44.6,-97).lineTo(-40.8,-220.3).curveTo(-26.4,-250.5,5.5,-278.5).curveTo(13.4,-270.4,17.8,-259).curveTo(24,-227.4,27.6,-180.1).curveTo(44.4,130.4,45.4,221.9).lineTo(-12.8,258.4).lineTo(-12.8,278.5).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:45.4,y:278.5}).wait(35).to({graphics:mask_graphics_35,x:45.4,y:278.5}).wait(100).to({graphics:mask_graphics_135,x:45.4,y:278.5}).wait(1));

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(185.5,494.8,0.382,1.224,35,0,0,194.7,197.6);
	this.instance.alpha = 0.328;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({x:-62.5,y:55.3},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,254.1,90.8,302.9);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().moveTo(-56.8,184.2).curveTo(-49.3,26.5,-27,-142.8).curveTo(-8.1,-172.7,42.6,-187.3).lineTo(45.4,-185.2).lineTo(56.4,-185.2).curveTo(57.3,-138.2,53.5,-92).curveTo(49.3,-39.2,52.1,13.7).curveTo(54.7,62.5,55.2,112).curveTo(55.6,149.7,56.8,187.3).closePath();
	var mask_graphics_99 = new cjs.Graphics().moveTo(-56.8,184.2).curveTo(-49.3,26.5,-27,-142.8).curveTo(-8.1,-172.7,42.6,-187.3).lineTo(45.4,-185.2).lineTo(56.4,-185.2).curveTo(57.3,-138.2,53.5,-92).curveTo(49.3,-39.2,52.1,13.7).curveTo(54.7,62.5,55.2,112).curveTo(55.6,149.7,56.8,187.3).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:56.8,y:187.4}).wait(99).to({graphics:mask_graphics_99,x:56.8,y:187.4}).wait(1));

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(147.1,470.8,0.382,1.224,35,0,0,194.7,197.6);
	this.instance.alpha = 0.328;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-12.5,y:-42.4},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,230.1,113.6,144.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(96,-41.9,0.792,0.792,0,0,0,96,31.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.6,-66.7,182.9,49.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ34();
	this.instance.setTransform(96.2,420.2,1,1,0,0,0,102.2,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(559).to({y:90.2,alpha:0},0).to({alpha:1},20,cjs.Ease.get(1)).wait(128).to({y:100.2,alpha:0},10,cjs.Ease.get(-1)).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(96,351.2,1,1,0,0,0,96,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(559).to({y:31.2,alpha:0},0).to({y:21.2,alpha:1},20,cjs.Ease.get(1)).wait(130).to({y:31.2,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,253.3,217.4,122.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(97.2,9.2,1,1,0,0,0,51.8,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.4,-2.5,103.7,23.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(210.9,283.7,1,1,0,0,0,45.4,278.5);

	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(122.9,374.3,1,1,0,0,0,56.8,187.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.build();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550.4,898.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.city();
	this.instance.setTransform(10,-60,1.178,0.844);

	this.instance_1 = new lib.city();
	this.instance_1.setTransform(10,768.1,1.177,0.814,0,180,0);

	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(-163.4,88.9,0.737,1.73,-90,0,0,251.2,153.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-60,353.3,828.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(303.5,93.5,1,1,0,0,0,303.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,607,187);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 29
	this.instance = new lib.Символ16();
	this.instance.setTransform(128.6,30,1,1,0,0,0,72.5,10.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(469).to({_off:false},0).to({y:34,alpha:1},13).wait(77).to({alpha:0},11).wait(150));

	// Символ 28
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(129.2,59.5,1,1,0,0,0,47.1,10.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(477).to({_off:false},0).to({y:64,alpha:1},13).wait(69).to({alpha:0},11).wait(150));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(131.1,75.9,1,1,0,0,0,85.4,10.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(207).to({_off:false},0).to({y:65.9,alpha:1},14,cjs.Ease.get(1)).wait(104).to({y:55.9,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(379));

	// Символ 25
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(46.2,23.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(201).to({_off:false},0).to({alpha:1},14).wait(104).to({regX:84.9,regY:12,x:131.1,y:35.9},0).to({y:25.9,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(385));

	// Символ 23
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(128,75.9,1,1,0,0,0,107.2,10.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(352).to({_off:false},0).to({y:65.9,alpha:1},14,cjs.Ease.get(1)).wait(88).to({y:55.9,alpha:0},15,cjs.Ease.get(-1)).wait(251));

	// Символ 22
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(131,46,1,1,0,0,0,99.4,12.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(343).to({_off:false},0).to({y:36,alpha:1},14,cjs.Ease.get(1)).wait(88).to({y:26,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(259));

	// Символ 21
	this.instance_6 = new lib.Символ21();
	this.instance_6.setTransform(130.6,42.3,1,1,0,0,0,78.8,17.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({_off:false},0).to({y:32.3,alpha:1},14,cjs.Ease.get(1)).wait(113).to({y:22.3,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(526));

	// Символ 20
	this.instance_7 = new lib.Символ20();
	this.instance_7.setTransform(131.1,76,1,1,0,0,0,83.5,17.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({y:66,alpha:1},14,cjs.Ease.get(1)).wait(113).to({y:56,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(519));

	// Слой 1
	this.instance_8 = new lib.Символ38();
	this.instance_8.setTransform(159.5,201.5,1,1,0,0,0,203.5,50.5);
	this.instance_8.alpha = 0.41;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({y:61.5,alpha:1},23,cjs.Ease.get(1)).wait(669));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.7,150.6,384.3,97.5);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.instance = new lib.Символ28();
	this.instance.setTransform(55.7,36,1.139,1.139,0,0,0,15.4,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.setTransform(55.9,97.4,1.263,1.263,0,0,0,49.4,5.9);

	this.instance_2 = new lib.Символ51();
	this.instance_2.setTransform(56.1,114,1.263,1.263,0,0,0,16.1,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-10,124.7,128.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(160,277,1,1,0,0,0,160,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550.4,898.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 16
	this.instance = new lib.Символ52();
	this.instance.setTransform(249.5,20,0.924,0.924,0,0,0,49.8,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197.4,-35.9,115.2,118.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(910.5,93.5,1,1,0,0,0,303.5,93.5);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(303.5,93.5,1,1,0,0,0,303.5,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1214,187);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(607,93.5,1,1,0,0,0,607,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.1},719).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1214,187);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ18();
	this.instance.setTransform(536,251.4,1.37,1.37,0,0,0,160.1,276.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25,x:537.3,y:392.7},59,cjs.Ease.get(-1)).to({regY:277,scaleX:1.14,scaleY:1.14,x:538.7,y:538.2},59,cjs.Ease.get(1)).wait(1).to({regY:277.1,y:538.3},0).to({regY:277,scaleX:0.88,scaleY:0.88,x:551.2,y:473.8},60,cjs.Ease.get(-1)).to({regX:160.2,regY:277.2,scaleX:0.72,scaleY:0.72,x:563.5,y:433.6},69,cjs.Ease.get(1)).wait(171).to({scaleX:1.2,scaleY:1.2,x:620.6,y:735.4},70,cjs.Ease.get(-1)).to({regX:160.3,regY:277.3,scaleX:1.63,scaleY:1.63,x:673.1,y:1012.8},60,cjs.Ease.get(1)).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.7,-127.9,753.8,1230.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(693.5,124.5,1,1,0,0,0,303.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({regX:303.6,scaleX:1.04,scaleY:1.04,x:699.6,y:130},39,cjs.Ease.get(-1)).to({regX:303.5,scaleX:1.09,scaleY:1.09,x:705.8,y:137.6},41,cjs.Ease.get(1)).wait(160).to({regX:303.6,scaleX:1.14,scaleY:1.14,x:710.8,y:51.1},49,cjs.Ease.get(-1)).to({regX:303.5,scaleX:1.19,scaleY:1.19,x:715.6,y:-17.7},50,cjs.Ease.get(1)).wait(222));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(590,300.2,1,1.5,0,0,0,200,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({regX:200.1,scaleX:1.04,scaleY:1.55,x:591.8,y:283.2},39,cjs.Ease.get(-1)).to({regX:200,regY:200,scaleX:1.09,scaleY:1.6,x:593.5,y:265.3},41,cjs.Ease.get(1)).wait(160).to({regX:200.1,scaleX:1.14,scaleY:1.67,x:592.9,y:181.1},49,cjs.Ease.get(-1)).to({scaleX:1.19,scaleY:1.76,x:592.2,y:114.9},50,cjs.Ease.get(1)).wait(1).to({regX:200.2,scaleX:1.3,scaleY:1.91,x:594.3,y:121},220).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-90,1642.3,1242.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(-19.9,74.4,0.857,0.857,0,0,0,198.3,78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-24,98.7,101.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(-19,47.1,1,1,0,0,0,-19,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({x:491,y:151.1,alpha:0},0).to({alpha:1},30).wait(330).to({scaleX:1.07,scaleY:1.07,x:519.4,y:155.8},20,cjs.Ease.get(-1)).to({regX:-18.9,scaleX:1.14,scaleY:1.14,x:549.3,y:160.7},21,cjs.Ease.get(1)).wait(189).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-24,98.7,101.9);


// stage content:



(lib.Federacia_light_240400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ40();
	this.instance.setTransform(-435,-10.9,1,1,0,0,0,38,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(118,364.9,1,1,0,0,0,96,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-498.4,-24,1,1,0,0,0,-19,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(193.5,361.5,1,1,0,0,0,203.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(-85.5,53,1,1,0,0,0,356.5,277);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(-71.9,203.3,0.717,0.717,0,0,0,303.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380,-151.9,1360,1237.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;