(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1080,
	height: 600,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/blink.png?1478674270327", id:"blink"},
		{src:"images/build.png?1478674270327", id:"build"},
		{src:"images/city.jpg?1478674270327", id:"city"},
		{src:"images/cloud.png?1478674270327", id:"cloud"}
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
p.nominalBounds = new cjs.Rectangle(0,0,1024,1000);


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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(127.3,6.8).lineTo(127.3,4.9).lineTo(123.2,4.9).lineTo(123.2,6.8).lineTo(122.3,6.8).lineTo(122.3,4).lineTo(122.7,4).lineTo(123,3.7).lineTo(123.2,3.1).lineTo(123.4,2.3).lineTo(123.5,1.1).lineTo(123.7,-4.8).lineTo(127.8,-4.8).lineTo(127.8,4).lineTo(128.3,4).lineTo(128.3,6.8).closePath().moveTo(124.5,1.1).curveTo(124.5,2.2,124.3,2.9).curveTo(124.2,3.5,123.9,4).lineTo(126.7,4).lineTo(126.7,-3.9).lineTo(124.6,-3.9).closePath().moveTo(-19.1,6.8).lineTo(-19.1,4.9).lineTo(-23,4.9).lineTo(-23,-4.8).lineTo(-21.9,-4.8).lineTo(-21.9,3.9).lineTo(-19.7,3.9).lineTo(-19.7,-4.8).lineTo(-18.6,-4.8).lineTo(-18.6,3.9).lineTo(-18.1,3.9).lineTo(-18.1,6.8).closePath().moveTo(-137.7,6.7).lineTo(-137.7,4.8).lineTo(-141.6,4.8).lineTo(-141.6,-4.9).lineTo(-140.5,-4.9).lineTo(-140.5,3.8).lineTo(-138.3,3.8).lineTo(-138.3,-4.9).lineTo(-137.2,-4.9).lineTo(-137.2,3.8).lineTo(-136.7,3.8).lineTo(-136.7,6.7).closePath().moveTo(-159.1,6.7).lineTo(-159.1,4.8).lineTo(-163.1,4.8).lineTo(-163.1,6.7).lineTo(-164.1,6.7).lineTo(-164.1,3.9).lineTo(-163.7,3.9).lineTo(-163.3,3.6).lineTo(-163.1,3).lineTo(-162.9,2.2).lineTo(-162.9,1).lineTo(-162.7,-4.9).lineTo(-158.6,-4.9).lineTo(-158.6,3.9).lineTo(-158.1,3.9).lineTo(-158.1,6.7).closePath().moveTo(-161.9,1.1).curveTo(-161.9,2.1,-162,2.8).curveTo(-162.1,3.4,-162.4,3.9).lineTo(-159.7,3.9).lineTo(-159.7,-4).lineTo(-161.7,-4).closePath().moveTo(128.4,4.5).lineTo(129,4).lineTo(129.4,3.4).curveTo(129.6,3,129.7,2.4).lineTo(129.8,0.9).lineTo(129.8,-4.8).lineTo(133.8,-4.8).lineTo(133.8,4.9).lineTo(132.7,4.9).lineTo(132.7,-3.7).lineTo(130.8,-3.7).lineTo(130.8,0.1).lineTo(130.7,2.3).curveTo(130.6,3.1,130.3,3.8).curveTo(130.1,4.3,129.8,4.7).lineTo(128.9,5.3).closePath().moveTo(-67.8,4.5).lineTo(-67.2,4).lineTo(-66.8,3.4).curveTo(-66.6,3,-66.5,2.4).lineTo(-66.4,0.9).lineTo(-66.4,-4.8).lineTo(-62.3,-4.8).lineTo(-62.3,4.9).lineTo(-63.4,4.9).lineTo(-63.4,-3.7).lineTo(-65.4,-3.7).lineTo(-65.4,0.1).lineTo(-65.5,2.3).curveTo(-65.6,3.1,-65.8,3.8).curveTo(-66,4.3,-66.4,4.7).lineTo(-67.2,5.3).closePath().moveTo(225.9,4.4).curveTo(225.4,3.7,225.4,2.7).lineTo(225.4,-2.2).lineTo(225.5,-3.2).curveTo(225.6,-3.6,225.8,-4.1).curveTo(226.1,-4.4,226.5,-4.6).curveTo(226.9,-4.9,227.6,-4.9).curveTo(228.4,-4.9,228.8,-4.6).curveTo(229.2,-4.5,229.5,-4.1).curveTo(229.7,-3.7,229.8,-3.3).lineTo(229.9,-2.2).lineTo(229.9,2.3).curveTo(229.9,3.6,229.4,4.4).curveTo(228.8,5,227.6,5).curveTo(226.4,5.1,225.9,4.4).closePath().moveTo(227,-3.6).lineTo(226.6,-3.2).lineTo(226.5,-2.6).lineTo(226.5,-2.1).lineTo(226.5,2.7).lineTo(226.5,3.1).lineTo(226.7,3.6).lineTo(227,3.9).curveTo(227.3,4.1,227.6,4).curveTo(228,4.1,228.2,3.9).lineTo(228.5,3.6).lineTo(228.7,3).lineTo(228.8,2.4).lineTo(228.8,-2.4).lineTo(228.7,-2.9).lineTo(228.6,-3.3).curveTo(228.5,-3.4,228.5,-3.5).curveTo(228.5,-3.5,228.4,-3.6).curveTo(228.4,-3.6,228.3,-3.6).curveTo(228.3,-3.7,228.2,-3.7).curveTo(228,-3.9,227.6,-3.9).curveTo(227.2,-3.9,227,-3.6).closePath().moveTo(175.8,4.4).curveTo(175.3,3.7,175.3,2.7).lineTo(175.3,-2.2).lineTo(175.4,-3.2).curveTo(175.5,-3.6,175.8,-4.1).curveTo(176,-4.4,176.4,-4.6).curveTo(176.9,-4.9,177.6,-4.9).curveTo(178.3,-4.9,178.7,-4.6).curveTo(179.2,-4.5,179.4,-4.1).curveTo(179.7,-3.7,179.7,-3.3).lineTo(179.8,-2.2).lineTo(179.8,2.3).curveTo(179.8,3.6,179.3,4.4).curveTo(178.8,5,177.6,5).curveTo(176.4,5.1,175.8,4.4).closePath().moveTo(176.9,-3.6).lineTo(176.6,-3.2).lineTo(176.5,-2.6).lineTo(176.4,-2.1).lineTo(176.4,2.7).lineTo(176.5,3.1).lineTo(176.7,3.6).lineTo(177,3.9).curveTo(177.2,4.1,177.6,4).curveTo(177.9,4.1,178.1,3.9).lineTo(178.5,3.6).lineTo(178.7,3).lineTo(178.7,2.4).lineTo(178.7,-2.4).lineTo(178.7,-2.9).lineTo(178.5,-3.3).curveTo(178.5,-3.4,178.4,-3.5).curveTo(178.4,-3.5,178.4,-3.6).curveTo(178.3,-3.6,178.3,-3.6).curveTo(178.2,-3.7,178.2,-3.7).curveTo(177.9,-3.9,177.6,-3.9).curveTo(177.2,-3.9,176.9,-3.6).closePath().moveTo(135.7,4.4).curveTo(135.2,3.7,135.2,2.7).lineTo(135.2,-2.2).lineTo(135.3,-3.2).curveTo(135.4,-3.6,135.7,-4.1).curveTo(135.9,-4.4,136.3,-4.6).curveTo(136.8,-4.9,137.5,-4.9).curveTo(138.2,-4.9,138.6,-4.6).curveTo(139.1,-4.5,139.3,-4.1).curveTo(139.6,-3.7,139.6,-3.3).lineTo(139.7,-2.2).lineTo(139.7,2.3).curveTo(139.7,3.6,139.2,4.4).curveTo(138.7,5,137.5,5).curveTo(136.3,5.1,135.7,4.4).closePath().moveTo(136.8,-3.6).lineTo(136.5,-3.2).lineTo(136.4,-2.6).lineTo(136.3,-2.1).lineTo(136.3,2.7).lineTo(136.4,3.1).lineTo(136.6,3.6).lineTo(136.9,3.9).curveTo(137.1,4.1,137.5,4).curveTo(137.8,4.1,138,3.9).lineTo(138.4,3.6).lineTo(138.6,3).lineTo(138.6,2.4).lineTo(138.6,-2.4).lineTo(138.6,-2.9).lineTo(138.4,-3.3).curveTo(138.4,-3.4,138.3,-3.5).curveTo(138.3,-3.5,138.3,-3.6).curveTo(138.2,-3.6,138.2,-3.6).curveTo(138.1,-3.7,138.1,-3.7).curveTo(137.8,-3.9,137.5,-3.9).curveTo(137.1,-3.9,136.8,-3.6).closePath().moveTo(95.7,4.4).curveTo(95.2,3.7,95.2,2.7).lineTo(95.2,-4.8).lineTo(96.3,-4.8).lineTo(96.3,2.7).lineTo(96.4,3.1).lineTo(96.5,3.6).lineTo(96.9,3.9).curveTo(97.1,4.1,97.5,4).curveTo(97.8,4.1,98,3.9).lineTo(98.4,3.6).lineTo(98.6,3).lineTo(98.6,2.5).lineTo(98.6,-4.8).lineTo(99.7,-4.8).lineTo(99.7,2.3).curveTo(99.7,3.6,99.2,4.4).curveTo(98.7,5,97.5,5).curveTo(96.3,5.1,95.7,4.4).closePath().moveTo(62.3,4.4).curveTo(61.8,3.7,61.8,2.7).lineTo(61.8,-2.2).lineTo(61.9,-3.2).curveTo(62,-3.6,62.3,-4.1).curveTo(62.5,-4.4,62.9,-4.6).curveTo(63.4,-4.9,64.1,-4.9).curveTo(64.8,-4.9,65.2,-4.6).curveTo(65.7,-4.5,65.9,-4.1).curveTo(66.2,-3.7,66.2,-3.3).lineTo(66.3,-2.2).lineTo(66.3,2.3).curveTo(66.3,3.6,65.8,4.4).curveTo(65.3,5,64.1,5).curveTo(62.9,5.1,62.3,4.4).closePath().moveTo(63.4,-3.6).lineTo(63.1,-3.2).lineTo(63,-2.6).lineTo(62.9,-2.1).lineTo(62.9,2.7).lineTo(63,3.1).lineTo(63.2,3.6).lineTo(63.5,3.9).curveTo(63.7,4.1,64.1,4).curveTo(64.4,4.1,64.6,3.9).lineTo(65,3.6).lineTo(65.2,3).lineTo(65.2,2.4).lineTo(65.2,-2.4).lineTo(65.2,-2.9).lineTo(65,-3.3).curveTo(65,-3.4,64.9,-3.5).curveTo(64.9,-3.5,64.9,-3.6).curveTo(64.8,-3.6,64.8,-3.6).curveTo(64.7,-3.7,64.7,-3.7).curveTo(64.4,-3.9,64.1,-3.9).curveTo(63.7,-3.9,63.4,-3.6).closePath().moveTo(12.4,4.5).curveTo(11.9,3.8,11.9,2.7).lineTo(11.9,-2.2).lineTo(12,-3.2).lineTo(12.3,-4).curveTo(12.5,-4.4,13,-4.6).curveTo(13.4,-4.9,14.1,-4.9).curveTo(15.2,-4.9,15.7,-4.3).curveTo(16.2,-3.7,16.2,-2.6).lineTo(15.1,-2.5).curveTo(15.1,-3.1,14.9,-3.5).curveTo(14.6,-3.9,14.1,-3.9).curveTo(13.7,-3.9,13.5,-3.7).lineTo(13.2,-3.3).lineTo(13,-2.8).lineTo(13,-2.3).lineTo(13,2.7).lineTo(13,3.1).lineTo(13.2,3.6).lineTo(13.5,3.9).lineTo(14,4).curveTo(14.6,4,14.9,3.7).curveTo(15.1,3.4,15.1,2.6).lineTo(16.3,2.8).curveTo(16.2,3.8,15.7,4.5).curveTo(15.2,5,14.1,5).curveTo(13,5,12.4,4.5).closePath().moveTo(-60.4,4.4).curveTo(-60.9,3.7,-60.9,2.7).lineTo(-60.9,-2.2).lineTo(-60.8,-3.2).curveTo(-60.7,-3.6,-60.5,-4.1).curveTo(-60.2,-4.4,-59.8,-4.6).curveTo(-59.4,-4.9,-58.7,-4.9).curveTo(-57.9,-4.9,-57.5,-4.6).curveTo(-57.1,-4.5,-56.8,-4.1).curveTo(-56.6,-3.7,-56.5,-3.3).lineTo(-56.4,-2.2).lineTo(-56.4,2.3).curveTo(-56.4,3.6,-56.9,4.4).curveTo(-57.5,5,-58.7,5).curveTo(-59.9,5.1,-60.4,4.4).closePath().moveTo(-59.3,-3.6).lineTo(-59.7,-3.2).lineTo(-59.8,-2.6).lineTo(-59.8,-2.1).lineTo(-59.8,2.7).lineTo(-59.8,3.1).lineTo(-59.6,3.6).lineTo(-59.3,3.9).curveTo(-59,4.1,-58.7,4).curveTo(-58.3,4.1,-58.1,3.9).lineTo(-57.8,3.6).lineTo(-57.6,3).lineTo(-57.5,2.4).lineTo(-57.5,-2.4).lineTo(-57.6,-2.9).lineTo(-57.7,-3.3).curveTo(-57.8,-3.4,-57.8,-3.5).curveTo(-57.8,-3.5,-57.9,-3.6).curveTo(-57.9,-3.6,-58,-3.6).curveTo(-58,-3.7,-58.1,-3.7).curveTo(-58.3,-3.9,-58.7,-3.9).curveTo(-59.1,-3.9,-59.3,-3.6).closePath().moveTo(-71.9,4.5).curveTo(-72.4,3.8,-72.4,2.7).lineTo(-72.4,-2.2).lineTo(-72.3,-3.2).lineTo(-72,-4).curveTo(-71.8,-4.4,-71.3,-4.6).curveTo(-70.9,-4.9,-70.2,-4.9).curveTo(-69.1,-4.9,-68.6,-4.3).curveTo(-68.1,-3.7,-68.1,-2.6).lineTo(-69.2,-2.5).curveTo(-69.2,-3.1,-69.4,-3.5).curveTo(-69.7,-3.9,-70.2,-3.9).curveTo(-70.6,-3.9,-70.8,-3.7).lineTo(-71.1,-3.3).lineTo(-71.3,-2.8).lineTo(-71.3,-2.3).lineTo(-71.3,2.7).lineTo(-71.3,3.1).lineTo(-71.1,3.6).lineTo(-70.8,3.9).lineTo(-70.3,4).curveTo(-69.7,4,-69.4,3.7).curveTo(-69.2,3.4,-69.2,2.6).lineTo(-68,2.8).curveTo(-68.1,3.8,-68.6,4.5).curveTo(-69.1,5,-70.2,5).curveTo(-71.3,5,-71.9,4.5).closePath().moveTo(-77.7,5).lineTo(-77.7,4.2).lineTo(-77.1,4.2).curveTo(-76.9,4.2,-76.6,3.9).curveTo(-76.3,3.6,-76.2,3).lineTo(-76,2.3).lineTo(-78.1,-4.8).lineTo(-77,-4.8).lineTo(-75.6,0.6).lineTo(-75.5,0.6).lineTo(-74.2,-4.8).lineTo(-73.2,-4.8).lineTo(-75.1,2.7).lineTo(-75.6,4).lineTo(-76.1,4.7).lineTo(-76.6,5).lineTo(-77.1,5).closePath().moveTo(-106.2,4.4).curveTo(-106.7,3.7,-106.7,2.7).lineTo(-106.7,-2.2).lineTo(-106.6,-3.2).curveTo(-106.5,-3.6,-106.3,-4.1).curveTo(-106,-4.4,-105.6,-4.6).curveTo(-105.2,-4.9,-104.5,-4.9).curveTo(-103.7,-4.9,-103.3,-4.6).curveTo(-102.9,-4.5,-102.6,-4.1).curveTo(-102.4,-3.7,-102.3,-3.3).lineTo(-102.2,-2.2).lineTo(-102.2,2.3).curveTo(-102.2,3.6,-102.7,4.4).curveTo(-103.3,5,-104.5,5).curveTo(-105.7,5.1,-106.2,4.4).closePath().moveTo(-105.1,-3.6).lineTo(-105.5,-3.2).lineTo(-105.6,-2.6).lineTo(-105.6,-2.1).lineTo(-105.6,2.7).lineTo(-105.6,3.1).lineTo(-105.4,3.6).lineTo(-105.1,3.9).curveTo(-104.8,4.1,-104.5,4).curveTo(-104.1,4.1,-103.9,3.9).lineTo(-103.6,3.6).lineTo(-103.4,3).lineTo(-103.3,2.4).lineTo(-103.3,-2.4).lineTo(-103.4,-2.9).lineTo(-103.5,-3.3).curveTo(-103.6,-3.4,-103.6,-3.5).curveTo(-103.6,-3.5,-103.7,-3.6).curveTo(-103.7,-3.6,-103.8,-3.6).curveTo(-103.8,-3.7,-103.9,-3.7).curveTo(-104.1,-3.9,-104.5,-3.9).curveTo(-104.9,-3.9,-105.1,-3.6).closePath().moveTo(-117.1,4.5).curveTo(-117.7,3.8,-117.7,2.7).lineTo(-117.7,-2.2).lineTo(-117.6,-3.2).lineTo(-117.3,-4).curveTo(-117,-4.4,-116.6,-4.6).curveTo(-116.1,-4.9,-115.5,-4.9).curveTo(-114.3,-4.9,-113.8,-4.3).curveTo(-113.3,-3.7,-113.3,-2.6).lineTo(-114.4,-2.5).curveTo(-114.4,-3.1,-114.7,-3.5).curveTo(-114.9,-3.9,-115.5,-3.9).curveTo(-115.8,-3.9,-116,-3.7).lineTo(-116.4,-3.3).lineTo(-116.5,-2.8).lineTo(-116.6,-2.3).lineTo(-116.6,2.7).lineTo(-116.5,3.1).lineTo(-116.4,3.6).lineTo(-116,3.9).lineTo(-115.5,4).curveTo(-115,4,-114.7,3.7).curveTo(-114.4,3.4,-114.4,2.6).lineTo(-113.3,2.8).curveTo(-113.3,3.8,-113.9,4.5).curveTo(-114.4,5,-115.5,5).curveTo(-116.6,5,-117.1,4.5).closePath().moveTo(222.8,4.9).lineTo(222.8,0.4).lineTo(220.6,0.4).lineTo(220.6,4.9).lineTo(219.5,4.9).lineTo(219.5,-4.8).lineTo(220.6,-4.8).lineTo(220.6,-0.5).lineTo(222.8,-0.5).lineTo(222.8,-4.8).lineTo(223.9,-4.8).lineTo(223.9,4.9).closePath().moveTo(214.4,4.9).lineTo(214.4,-4.8).lineTo(218.5,-4.8).lineTo(218.5,-3.7).lineTo(215.5,-3.7).lineTo(215.5,-0.5).lineTo(218.1,-0.5).lineTo(218.1,0.5).lineTo(215.5,0.5).lineTo(215.5,3.9).lineTo(218.5,3.9).lineTo(218.5,4.9).closePath().moveTo(211.8,4.9).lineTo(211.8,0.8).lineTo(211.2,0.9).lineTo(210.5,1).lineTo(209.7,0.9).curveTo(209.3,0.8,209,0.5).lineTo(208.6,-0.1).curveTo(208.4,-0.6,208.4,-1.2).lineTo(208.4,-4.8).lineTo(209.5,-4.8).lineTo(209.5,-1.2).curveTo(209.5,-0.5,209.8,-0.2).curveTo(210.1,0.1,210.8,0.1).lineTo(211.2,0.1).lineTo(211.8,-0.1).lineTo(211.8,-4.8).lineTo(212.9,-4.8).lineTo(212.9,4.9).closePath().moveTo(206.1,4.9).lineTo(206.1,-1.9).lineTo(206.1,-1.9).lineTo(203.6,4.9).lineTo(202.6,4.9).lineTo(202.6,-4.8).lineTo(203.6,-4.8).lineTo(203.6,2.1).lineTo(203.7,2.1).lineTo(206.1,-4.8).lineTo(207.2,-4.8).lineTo(207.2,4.9).closePath().moveTo(200,4.9).lineTo(200,0.4).lineTo(197.7,0.4).lineTo(197.7,4.9).lineTo(196.6,4.9).lineTo(196.6,-4.8).lineTo(197.7,-4.8).lineTo(197.7,-0.5).lineTo(200,-0.5).lineTo(200,-4.8).lineTo(201.1,-4.8).lineTo(201.1,4.9).closePath().moveTo(194.6,4.9).lineTo(194.2,2.8).lineTo(192,2.8).lineTo(191.6,4.9).lineTo(190.5,4.9).lineTo(192.6,-4.8).lineTo(193.6,-4.8).lineTo(195.7,4.9).closePath().moveTo(192.2,1.8).lineTo(194,1.8).lineTo(193.1,-2.8).lineTo(193.1,-2.8).closePath().moveTo(186.2,4.9).lineTo(186.2,-4.8).lineTo(188.2,-4.8).curveTo(188.9,-4.8,189.4,-4.6).curveTo(189.9,-4.4,190.2,-4.1).curveTo(190.5,-3.6,190.6,-3.1).lineTo(190.7,-1.9).lineTo(190.6,-0.7).curveTo(190.5,-0.2,190.2,0.2).curveTo(189.9,0.6,189.4,0.8).curveTo(188.9,1,188.1,1.1).lineTo(187.3,1.1).lineTo(187.3,4.9).closePath().moveTo(187.3,-0).lineTo(188.1,-0).curveTo(188.6,0,188.9,-0.1).curveTo(189.2,-0.3,189.3,-0.6).curveTo(189.5,-0.8,189.5,-1.2).lineTo(189.6,-1.8).lineTo(189.5,-2.6).lineTo(189.3,-3.2).curveTo(189.2,-3.5,188.9,-3.6).curveTo(188.6,-3.7,188.1,-3.7).lineTo(187.3,-3.7).closePath().moveTo(181.2,4.9).lineTo(181.2,-4.8).lineTo(185.2,-4.8).lineTo(185.2,-3.7).lineTo(182.3,-3.7).lineTo(182.3,4.9).closePath().moveTo(167.6,4.9).lineTo(167.6,-4.8).lineTo(171.7,-4.8).lineTo(171.7,-3.7).lineTo(168.7,-3.7).lineTo(168.7,-0.5).lineTo(171.3,-0.5).lineTo(171.3,0.5).lineTo(168.7,0.5).lineTo(168.7,3.9).lineTo(171.7,3.9).lineTo(171.7,4.9).closePath().moveTo(165.1,4.9).lineTo(165.1,-1.9).lineTo(165,-1.9).lineTo(162.6,4.9).lineTo(161.5,4.9).lineTo(161.5,-4.8).lineTo(162.6,-4.8).lineTo(162.6,2.1).lineTo(162.6,2.1).lineTo(165.1,-4.8).lineTo(166.1,-4.8).lineTo(166.1,4.9).closePath().moveTo(158.9,4.9).lineTo(158.9,0.4).lineTo(156.7,0.4).lineTo(156.7,4.9).lineTo(155.6,4.9).lineTo(155.6,-4.8).lineTo(156.7,-4.8).lineTo(156.7,-0.5).lineTo(158.9,-0.5).lineTo(158.9,-4.8).lineTo(160,-4.8).lineTo(160,4.9).closePath().moveTo(150.5,4.9).lineTo(150.5,-4.8).lineTo(154.6,-4.8).lineTo(154.6,-3.7).lineTo(151.6,-3.7).lineTo(151.6,-0.5).lineTo(154.2,-0.5).lineTo(154.2,0.5).lineTo(151.6,0.5).lineTo(151.6,3.9).lineTo(154.6,3.9).lineTo(154.6,4.9).closePath().moveTo(148.4,4.9).lineTo(147.7,2).curveTo(147.6,1.5,147.4,1.2).lineTo(147.1,0.8).lineTo(146.6,0.5).lineTo(146.1,0.5).lineTo(145.6,0.5).lineTo(145.6,4.9).lineTo(144.5,4.9).lineTo(144.5,0.5).lineTo(144,0.5).lineTo(143.5,0.5).lineTo(143.1,0.8).curveTo(142.8,0.9,142.7,1.2).curveTo(142.5,1.5,142.4,2).lineTo(141.8,4.9).lineTo(140.7,4.9).lineTo(141.4,1.8).curveTo(141.5,1.1,141.8,0.6).curveTo(142.1,0.1,142.6,-0.1).curveTo(142.2,-0.3,141.9,-0.7).curveTo(141.6,-1.2,141.5,-1.9).lineTo(140.8,-4.8).lineTo(141.8,-4.8).lineTo(142.5,-2).curveTo(142.6,-1.5,142.8,-1.2).lineTo(143.2,-0.8).lineTo(143.6,-0.6).lineTo(144.1,-0.6).lineTo(144.5,-0.6).lineTo(144.5,-4.8).lineTo(145.6,-4.8).lineTo(145.6,-0.6).lineTo(146,-0.6).lineTo(146.5,-0.6).lineTo(146.9,-0.8).lineTo(147.3,-1.2).curveTo(147.5,-1.5,147.6,-2).lineTo(148.3,-4.8).lineTo(149.3,-4.8).lineTo(148.7,-1.9).curveTo(148.5,-1.2,148.2,-0.7).curveTo(147.9,-0.3,147.5,-0.1).curveTo(148,0.1,148.3,0.6).curveTo(148.6,1.1,148.8,1.8).lineTo(149.5,4.9).closePath().moveTo(117.8,4.9).lineTo(117.8,-4.8).lineTo(122,-4.8).lineTo(122,-3.7).lineTo(118.9,-3.7).lineTo(118.9,-0.5).lineTo(121.6,-0.5).lineTo(121.6,0.5).lineTo(118.9,0.5).lineTo(118.9,3.9).lineTo(122,3.9).lineTo(122,4.9).closePath().moveTo(112.3,4.9).lineTo(112.3,-4.8).lineTo(114.3,-4.8).curveTo(115,-4.8,115.5,-4.6).curveTo(115.9,-4.4,116.2,-4.1).curveTo(116.5,-3.6,116.6,-3.1).lineTo(116.7,-1.9).lineTo(116.6,-0.7).curveTo(116.5,-0.2,116.2,0.2).curveTo(116,0.6,115.5,0.8).curveTo(115,1,114.2,1.1).lineTo(113.4,1.1).lineTo(113.4,4.9).closePath().moveTo(113.4,-0).lineTo(114.1,-0).curveTo(114.6,0,114.9,-0.1).curveTo(115.2,-0.3,115.4,-0.6).curveTo(115.6,-0.8,115.6,-1.2).lineTo(115.6,-1.8).lineTo(115.6,-2.6).lineTo(115.4,-3.2).curveTo(115.2,-3.5,114.9,-3.6).curveTo(114.6,-3.7,114.2,-3.7).lineTo(113.4,-3.7).closePath().moveTo(109.7,4.9).lineTo(109.7,-3.7).lineTo(107.6,-3.7).lineTo(107.6,4.9).lineTo(106.5,4.9).lineTo(106.5,-4.8).lineTo(110.8,-4.8).lineTo(110.8,4.9).closePath().moveTo(101.2,4.9).lineTo(101.2,3.7).lineTo(102.4,3.7).lineTo(102.4,4.9).closePath().moveTo(93,4.9).lineTo(91.6,0.7).lineTo(90.6,0.7).lineTo(90.6,4.9).lineTo(89.5,4.9).lineTo(89.5,-4.8).lineTo(91.6,-4.8).curveTo(92.8,-4.8,93.4,-4.1).curveTo(93.9,-3.4,93.9,-2).curveTo(93.9,-1.2,93.7,-0.6).curveTo(93.4,0.1,92.7,0.4).lineTo(94.1,4.9).closePath().moveTo(90.6,-0.4).lineTo(91.5,-0.4).lineTo(92.1,-0.5).lineTo(92.5,-0.8).lineTo(92.7,-1.4).lineTo(92.8,-2).lineTo(92.7,-2.7).lineTo(92.5,-3.3).lineTo(92.1,-3.6).lineTo(91.4,-3.7).lineTo(90.6,-3.7).closePath().moveTo(86.8,4.9).lineTo(86.8,3.7).lineTo(88,3.7).lineTo(88,4.9).closePath().moveTo(84.5,4.9).lineTo(83.1,0.7).lineTo(82.1,0.7).lineTo(82.1,4.9).lineTo(81,4.9).lineTo(81,-4.8).lineTo(83.1,-4.8).curveTo(84.3,-4.8,84.9,-4.1).curveTo(85.4,-3.4,85.4,-2).curveTo(85.4,-1.2,85.2,-0.6).curveTo(84.9,0.1,84.2,0.4).lineTo(85.6,4.9).closePath().moveTo(82.1,-0.4).lineTo(83,-0.4).lineTo(83.6,-0.5).lineTo(84,-0.8).lineTo(84.2,-1.4).lineTo(84.3,-2).lineTo(84.2,-2.7).lineTo(84,-3.3).lineTo(83.6,-3.6).lineTo(82.9,-3.7).lineTo(82.1,-3.7).closePath().moveTo(75.9,4.9).lineTo(75.9,-4.8).lineTo(80,-4.8).lineTo(80,-3.7).lineTo(77,-3.7).lineTo(77,-0.5).lineTo(79.6,-0.5).lineTo(79.6,0.5).lineTo(77,0.5).lineTo(77,3.9).lineTo(80,3.9).lineTo(80,4.9).closePath().moveTo(72.3,4.9).lineTo(71,-2.2).lineTo(69.7,4.9).lineTo(68.7,4.9).lineTo(67.3,-4.8).lineTo(68.4,-4.8).lineTo(69.3,2.1).lineTo(69.3,2.1).lineTo(70.5,-4.8).lineTo(71.6,-4.8).lineTo(72.8,2.1).lineTo(72.8,2.1).lineTo(73.6,-4.8).lineTo(74.8,-4.8).lineTo(73.4,4.9).closePath().moveTo(58.4,4.9).lineTo(58.4,-3.8).lineTo(56.7,-3.8).lineTo(56.7,-4.8).lineTo(61.1,-4.8).lineTo(61.1,-3.8).lineTo(59.5,-3.8).lineTo(59.5,4.9).closePath().moveTo(51.5,4.9).lineTo(51.5,-4.8).lineTo(53.8,-4.8).curveTo(54.7,-4.8,55.2,-4.5).curveTo(55.7,-4.2,55.9,-3.5).curveTo(56,-2.9,56,-2).lineTo(56,0.1).lineTo(56,2.1).curveTo(56,3,55.8,3.5).curveTo(55.6,4.4,55,4.7).curveTo(54.4,4.9,53.7,4.9).closePath().moveTo(52.6,3.9).lineTo(53.6,3.9).curveTo(54.3,3.9,54.6,3.6).curveTo(54.9,3.2,54.9,2.5).lineTo(54.9,-2.4).curveTo(54.9,-3,54.6,-3.4).curveTo(54.3,-3.7,53.6,-3.7).lineTo(52.6,-3.7).closePath().moveTo(46.4,4.9).lineTo(46.4,-4.8).lineTo(50.6,-4.8).lineTo(50.6,-3.7).lineTo(47.5,-3.7).lineTo(47.5,-0.5).lineTo(50.2,-0.5).lineTo(50.2,0.5).lineTo(47.5,0.5).lineTo(47.5,3.9).lineTo(50.6,3.9).lineTo(50.6,4.9).closePath().moveTo(41.3,4.9).lineTo(41.3,-4.8).lineTo(45.5,-4.8).lineTo(45.5,-3.7).lineTo(42.4,-3.7).lineTo(42.4,-0.5).lineTo(45.1,-0.5).lineTo(45.1,0.5).lineTo(42.4,0.5).lineTo(42.4,4.9).closePath().moveTo(33.5,4.9).lineTo(33.5,-4.8).lineTo(37.6,-4.8).lineTo(37.6,-3.7).lineTo(34.6,-3.7).lineTo(34.6,-0.5).lineTo(37.2,-0.5).lineTo(37.2,0.5).lineTo(34.6,0.5).lineTo(34.6,3.9).lineTo(37.6,3.9).lineTo(37.6,4.9).closePath().moveTo(29.9,4.9).lineTo(29.9,-3.8).lineTo(28.2,-3.8).lineTo(28.2,-4.8).lineTo(32.7,-4.8).lineTo(32.7,-3.8).lineTo(31,-3.8).lineTo(31,4.9).closePath().moveTo(26.4,4.9).lineTo(26.4,-1.9).lineTo(26.4,-1.9).lineTo(23.9,4.9).lineTo(22.9,4.9).lineTo(22.9,-4.8).lineTo(23.9,-4.8).lineTo(23.9,2.1).lineTo(24,2.1).lineTo(26.4,-4.8).lineTo(27.5,-4.8).lineTo(27.5,4.9).closePath().moveTo(20.9,4.9).lineTo(20.5,2.8).lineTo(18.3,2.8).lineTo(17.9,4.9).lineTo(16.8,4.9).lineTo(18.9,-4.8).lineTo(19.9,-4.8).lineTo(22,4.9).closePath().moveTo(18.5,1.8).lineTo(20.3,1.8).lineTo(19.4,-2.8).lineTo(19.4,-2.8).closePath().moveTo(7.2,4.9).lineTo(6.8,2.8).lineTo(4.6,2.8).lineTo(4.2,4.9).lineTo(3.1,4.9).lineTo(5.2,-4.8).lineTo(6.2,-4.8).lineTo(8.3,4.9).closePath().moveTo(4.8,1.8).lineTo(6.6,1.8).lineTo(5.7,-2.8).lineTo(5.7,-2.8).closePath().moveTo(1,4.9).lineTo(1,0.4).lineTo(-1.2,0.4).lineTo(-1.2,4.9).lineTo(-2.3,4.9).lineTo(-2.3,-4.8).lineTo(-1.2,-4.8).lineTo(-1.2,-0.5).lineTo(1,-0.5).lineTo(1,-4.8).lineTo(2.1,-4.8).lineTo(2.1,4.9).closePath().moveTo(-7.6,4.9).lineTo(-7.6,-1.9).lineTo(-7.6,-1.9).lineTo(-10.1,4.9).lineTo(-11.1,4.9).lineTo(-11.1,-4.8).lineTo(-10.1,-4.8).lineTo(-10.1,2.1).lineTo(-10,2.1).lineTo(-7.6,-4.8).lineTo(-6.5,-4.8).lineTo(-6.5,4.9).closePath().moveTo(-13.6,4.9).lineTo(-13.6,-1.9).lineTo(-13.6,-1.9).lineTo(-16.1,4.9).lineTo(-17.1,4.9).lineTo(-17.1,-4.8).lineTo(-16.1,-4.8).lineTo(-16.1,2.1).lineTo(-16,2.1).lineTo(-13.6,-4.8).lineTo(-12.5,-4.8).lineTo(-12.5,4.9).closePath().moveTo(-25,4.9).lineTo(-25.6,2).curveTo(-25.7,1.5,-25.9,1.2).curveTo(-26.1,0.9,-26.3,0.8).lineTo(-26.8,0.5).lineTo(-27.3,0.5).lineTo(-27.8,0.5).lineTo(-27.8,4.9).lineTo(-28.9,4.9).lineTo(-28.9,-4.8).lineTo(-27.8,-4.8).lineTo(-27.8,-0.6).lineTo(-27.3,-0.6).lineTo(-26.9,-0.6).lineTo(-26.4,-0.8).lineTo(-26,-1.2).curveTo(-25.8,-1.5,-25.7,-2).lineTo(-25.1,-4.8).lineTo(-24,-4.8).lineTo(-24.7,-1.9).curveTo(-24.8,-1.2,-25.2,-0.7).curveTo(-25.5,-0.3,-25.9,-0.1).curveTo(-25.3,0.1,-25,0.6).curveTo(-24.7,1.1,-24.6,1.8).lineTo(-23.9,4.9).closePath().moveTo(-30.9,4.9).lineTo(-31.4,2.8).lineTo(-33.5,2.8).lineTo(-34,4.9).lineTo(-35,4.9).lineTo(-33,-4.8).lineTo(-31.9,-4.8).lineTo(-29.8,4.9).closePath().moveTo(-33.4,1.8).lineTo(-31.6,1.8).lineTo(-32.4,-2.8).lineTo(-32.5,-2.8).closePath().moveTo(-39.8,4.9).lineTo(-39.8,0.6).lineTo(-40.4,0.6).lineTo(-40.8,0.6).lineTo(-41.2,0.9).lineTo(-41.6,1.3).lineTo(-41.8,2.1).lineTo(-42.3,4.9).lineTo(-43.5,4.9).lineTo(-42.9,1.9).lineTo(-42.6,1).curveTo(-42.4,0.5,-42,0.2).lineTo(-42.6,-0).lineTo(-42.9,-0.6).lineTo(-43.1,-1.2).lineTo(-43.2,-1.9).curveTo(-43.2,-3.3,-42.6,-4.1).curveTo(-42,-4.8,-40.8,-4.8).lineTo(-38.7,-4.8).lineTo(-38.7,4.9).closePath().moveTo(-41.3,-3.6).lineTo(-41.8,-3.3).lineTo(-42,-2.6).lineTo(-42.1,-1.9).curveTo(-42.1,-0.4,-40.7,-0.4).lineTo(-39.8,-0.4).lineTo(-39.8,-3.7).lineTo(-40.6,-3.7).curveTo(-41,-3.7,-41.3,-3.6).closePath().moveTo(-45.7,4.9).lineTo(-45.7,-1.9).lineTo(-45.8,-1.9).lineTo(-48.2,4.9).lineTo(-49.3,4.9).lineTo(-49.3,-4.8).lineTo(-48.2,-4.8).lineTo(-48.2,2.1).lineTo(-48.2,2.1).lineTo(-45.7,-4.8).lineTo(-44.7,-4.8).lineTo(-44.7,4.9).closePath().moveTo(-55,4.9).lineTo(-55,-4.8).lineTo(-53,-4.8).curveTo(-51.7,-4.8,-51.2,-4.1).curveTo(-50.7,-3.5,-50.7,-2.2).curveTo(-50.7,-1.5,-50.9,-1).curveTo(-51.1,-0.6,-51.7,-0.2).lineTo(-51.7,-0.1).curveTo(-51.1,0.1,-50.8,0.6).curveTo(-50.6,1.2,-50.6,2.1).curveTo(-50.6,3.6,-51.2,4.2).curveTo(-51.8,5,-53.2,4.9).closePath().moveTo(-53.9,3.9).lineTo(-53.1,3.9).curveTo(-52.6,4,-52.3,3.8).curveTo(-52,3.7,-51.9,3.3).lineTo(-51.7,2.8).lineTo(-51.7,2).curveTo(-51.7,1.1,-52,0.8).curveTo(-52.3,0.3,-53.1,0.3).lineTo(-53.9,0.3).closePath().moveTo(-53.9,-0.6).lineTo(-53.2,-0.6).curveTo(-52.4,-0.6,-52.1,-1).curveTo(-51.7,-1.5,-51.7,-2.3).curveTo(-51.7,-3,-52.1,-3.4).curveTo(-52.4,-3.8,-53.2,-3.8).lineTo(-53.9,-3.8).closePath().moveTo(-82.7,4.9).lineTo(-82.7,-1.9).lineTo(-82.7,-1.9).lineTo(-85.2,4.9).lineTo(-86.2,4.9).lineTo(-86.2,-4.8).lineTo(-85.2,-4.8).lineTo(-85.2,2.1).lineTo(-85.1,2.1).lineTo(-82.7,-4.8).lineTo(-81.6,-4.8).lineTo(-81.6,4.9).closePath().moveTo(-91.4,4.9).lineTo(-91.4,-1.9).lineTo(-91.5,-1.9).lineTo(-93.9,4.9).lineTo(-95,4.9).lineTo(-95,-4.8).lineTo(-93.9,-4.8).lineTo(-93.9,2.1).lineTo(-93.9,2.1).lineTo(-91.4,-4.8).lineTo(-90.4,-4.8).lineTo(-90.4,4.9).closePath().moveTo(-96.9,4.9).lineTo(-97.5,2).curveTo(-97.6,1.5,-97.8,1.2).curveTo(-98,0.9,-98.2,0.8).lineTo(-98.7,0.5).lineTo(-99.2,0.5).lineTo(-99.7,0.5).lineTo(-99.7,4.9).lineTo(-100.8,4.9).lineTo(-100.8,-4.8).lineTo(-99.7,-4.8).lineTo(-99.7,-0.6).lineTo(-99.2,-0.6).lineTo(-98.8,-0.6).lineTo(-98.3,-0.8).lineTo(-97.9,-1.2).curveTo(-97.7,-1.5,-97.6,-2).lineTo(-97,-4.8).lineTo(-95.9,-4.8).lineTo(-96.6,-1.9).curveTo(-96.7,-1.2,-97.1,-0.7).curveTo(-97.4,-0.3,-97.8,-0.1).curveTo(-97.2,0.1,-96.9,0.6).curveTo(-96.6,1.1,-96.5,1.8).lineTo(-95.8,4.9).closePath().moveTo(-112.2,4.9).lineTo(-112.2,-4.8).lineTo(-110.2,-4.8).curveTo(-109.5,-4.8,-109,-4.6).curveTo(-108.5,-4.4,-108.2,-4.1).curveTo(-107.9,-3.6,-107.8,-3.1).lineTo(-107.7,-1.9).lineTo(-107.8,-0.7).curveTo(-107.9,-0.2,-108.2,0.2).curveTo(-108.5,0.6,-109,0.8).curveTo(-109.5,1,-110.3,1.1).lineTo(-111.1,1.1).lineTo(-111.1,4.9).closePath().moveTo(-111.1,-0).lineTo(-110.3,-0).curveTo(-109.8,0,-109.5,-0.1).curveTo(-109.2,-0.3,-109.1,-0.6).curveTo(-108.9,-0.8,-108.9,-1.2).lineTo(-108.8,-1.8).lineTo(-108.9,-2.6).lineTo(-109.1,-3.2).curveTo(-109.2,-3.5,-109.5,-3.6).curveTo(-109.8,-3.7,-110.3,-3.7).lineTo(-111.1,-3.7).closePath().moveTo(-122.9,4.9).lineTo(-122.9,3.7).lineTo(-121.7,3.7).lineTo(-121.7,4.9).closePath().moveTo(-218,4.3).curveTo(-218.5,3.6,-218.5,2.6).lineTo(-218.5,-2.3).lineTo(-218.4,-3.3).curveTo(-218.3,-3.8,-218.1,-4.2).curveTo(-217.8,-4.5,-217.4,-4.8).curveTo(-217,-5,-216.3,-5).curveTo(-215.5,-5,-215.1,-4.8).curveTo(-214.7,-4.6,-214.4,-4.2).curveTo(-214.2,-3.8,-214.1,-3.3).lineTo(-214,-2.3).lineTo(-214,2.2).curveTo(-214,3.6,-214.5,4.2).curveTo(-215.1,5,-216.3,4.9).curveTo(-217.5,4.9,-218,4.3).closePath().moveTo(-216.9,-3.7).lineTo(-217.3,-3.3).lineTo(-217.4,-2.7).lineTo(-217.4,-2.2).lineTo(-217.4,2.6).lineTo(-217.4,3).lineTo(-217.2,3.5).lineTo(-216.9,3.8).curveTo(-216.6,4,-216.3,3.9).curveTo(-215.9,4,-215.7,3.8).lineTo(-215.4,3.5).lineTo(-215.2,3).lineTo(-215.1,2.3).lineTo(-215.1,-2.5).lineTo(-215.2,-3).lineTo(-215.3,-3.4).curveTo(-215.4,-3.5,-215.4,-3.6).curveTo(-215.4,-3.6,-215.5,-3.7).curveTo(-215.5,-3.7,-215.6,-3.7).curveTo(-215.6,-3.8,-215.7,-3.8).curveTo(-215.9,-4,-216.3,-4).curveTo(-216.7,-4,-216.9,-3.7).closePath().moveTo(-228.6,4.8).curveTo(-229,4.7,-229.3,4.4).curveTo(-229.6,4.2,-229.7,3.7).curveTo(-229.9,3.3,-229.8,2.8).lineTo(-228.8,2.5).curveTo(-228.8,3.3,-228.5,3.6).curveTo(-228.2,3.9,-227.7,3.9).lineTo(-227.2,3.9).lineTo(-226.9,3.6).lineTo(-226.6,3).lineTo(-226.6,2).lineTo(-226.6,1.3).curveTo(-226.6,1,-226.8,0.8).lineTo(-227.1,0.4).curveTo(-227.3,0.3,-227.6,0.3).lineTo(-228.2,0.3).lineTo(-228.2,-0.6).lineTo(-227.6,-0.6).curveTo(-227.3,-0.7,-227.1,-0.8).lineTo(-226.8,-1.2).lineTo(-226.6,-1.7).lineTo(-226.5,-2.4).lineTo(-226.6,-3.2).lineTo(-226.9,-3.6).curveTo(-226.9,-3.7,-227,-3.7).curveTo(-227,-3.8,-227.1,-3.8).curveTo(-227.1,-3.8,-227.1,-3.9).curveTo(-227.2,-3.9,-227.2,-3.9).lineTo(-227.7,-4).curveTo(-228.3,-4,-228.5,-3.5).curveTo(-228.8,-3.2,-228.8,-2.5).lineTo(-229.8,-2.8).curveTo(-229.8,-3.8,-229.2,-4.4).curveTo(-228.6,-5,-227.7,-5).curveTo(-227.2,-5,-226.7,-4.9).curveTo(-226.3,-4.7,-226,-4.4).curveTo(-225.7,-4.1,-225.6,-3.7).curveTo(-225.4,-3.2,-225.4,-2.5).lineTo(-225.5,-1.9).lineTo(-225.6,-1.3).lineTo(-225.8,-0.6).curveTo(-226,-0.4,-226.3,-0.3).lineTo(-226.3,-0.2).lineTo(-225.8,0.2).lineTo(-225.5,0.8).lineTo(-225.4,1.4).lineTo(-225.4,2).curveTo(-225.4,3.4,-226,4.2).curveTo(-226.5,4.9,-227.7,4.9).curveTo(-228.2,5,-228.6,4.8).closePath().moveTo(-126.2,4.8).lineTo(-126.2,0.5).lineTo(-126.8,0.5).lineTo(-127.2,0.5).lineTo(-127.6,0.8).lineTo(-128,1.2).lineTo(-128.3,2).lineTo(-128.8,4.8).lineTo(-129.9,4.8).lineTo(-129.3,1.8).lineTo(-129,0.9).curveTo(-128.8,0.4,-128.4,0.2).lineTo(-129,-0.1).lineTo(-129.4,-0.6).lineTo(-129.6,-1.3).lineTo(-129.6,-2).curveTo(-129.6,-3.4,-129.1,-4.2).curveTo(-128.5,-4.9,-127.3,-4.9).lineTo(-125.1,-4.9).lineTo(-125.1,4.8).closePath().moveTo(-127.8,-3.7).lineTo(-128.2,-3.3).lineTo(-128.4,-2.7).lineTo(-128.5,-2).curveTo(-128.5,-0.5,-127.2,-0.5).lineTo(-126.2,-0.5).lineTo(-126.2,-3.9).lineTo(-127.1,-3.9).curveTo(-127.5,-3.9,-127.8,-3.7).closePath().moveTo(-132.2,4.8).lineTo(-132.2,-2).lineTo(-132.2,-2).lineTo(-134.7,4.8).lineTo(-135.7,4.8).lineTo(-135.7,-4.9).lineTo(-134.7,-4.9).lineTo(-134.7,2).lineTo(-134.6,2).lineTo(-132.2,-4.9).lineTo(-131.1,-4.9).lineTo(-131.1,4.8).closePath().moveTo(-143.6,4.8).lineTo(-144.1,2.7).lineTo(-146.2,2.7).lineTo(-146.7,4.8).lineTo(-147.7,4.8).lineTo(-145.7,-4.9).lineTo(-144.6,-4.9).lineTo(-142.5,4.8).closePath().moveTo(-146.1,1.7).lineTo(-144.3,1.7).lineTo(-145.1,-2.9).lineTo(-145.2,-2.9).closePath().moveTo(-152,4.8).lineTo(-152,-4.9).lineTo(-150,-4.9).curveTo(-149.3,-4.9,-148.8,-4.7).curveTo(-148.4,-4.5,-148.1,-4.2).curveTo(-147.8,-3.8,-147.7,-3.2).lineTo(-147.6,-2).lineTo(-147.7,-0.8).curveTo(-147.8,-0.3,-148.1,0.1).curveTo(-148.3,0.5,-148.8,0.7).curveTo(-149.3,0.9,-150.1,1).lineTo(-150.9,1).lineTo(-150.9,4.8).closePath().moveTo(-150.9,-0.1).lineTo(-150.2,-0.1).curveTo(-149.7,-0.1,-149.4,-0.3).curveTo(-149.1,-0.4,-148.9,-0.6).curveTo(-148.7,-0.9,-148.7,-1.3).lineTo(-148.7,-1.9).lineTo(-148.7,-2.7).lineTo(-148.9,-3.3).curveTo(-149.1,-3.6,-149.4,-3.7).curveTo(-149.7,-3.9,-150.1,-3.9).lineTo(-150.9,-3.9).closePath().moveTo(-157.1,4.8).lineTo(-157.1,-4.9).lineTo(-153,-4.9).lineTo(-153,-3.9).lineTo(-156,-3.9).lineTo(-156,-0.6).lineTo(-153.4,-0.6).lineTo(-153.4,0.4).lineTo(-156,0.4).lineTo(-156,3.9).lineTo(-153,3.9).lineTo(-153,4.8).closePath().moveTo(-168.5,4.8).lineTo(-168.5,-4.9).lineTo(-164.4,-4.9).lineTo(-164.4,-3.9).lineTo(-167.4,-3.9).lineTo(-167.4,-0.6).lineTo(-164.8,-0.6).lineTo(-164.8,0.4).lineTo(-167.4,0.4).lineTo(-167.4,3.9).lineTo(-164.4,3.9).lineTo(-164.4,4.8).closePath().moveTo(-173.2,4.8).lineTo(-173.2,4.1).curveTo(-173.7,4.1,-174.1,3.9).curveTo(-174.5,3.8,-174.8,3.5).curveTo(-175.2,3.3,-175.4,2.8).curveTo(-175.6,2.4,-175.6,1.8).lineTo(-175.6,-2.1).curveTo(-175.6,-2.6,-175.4,-3.1).curveTo(-175.2,-3.5,-174.8,-3.7).curveTo(-174.5,-4.1,-174.1,-4.2).curveTo(-173.7,-4.4,-173.2,-4.3).lineTo(-173.2,-4.9).lineTo(-172.1,-4.9).lineTo(-172.1,-4.3).lineTo(-171.3,-4.2).curveTo(-170.9,-4.1,-170.6,-3.7).curveTo(-170.2,-3.5,-170,-3.1).curveTo(-169.8,-2.6,-169.8,-2.1).lineTo(-169.8,1.8).curveTo(-169.8,2.4,-170,2.8).curveTo(-170.2,3.3,-170.6,3.5).curveTo(-170.9,3.8,-171.3,3.9).lineTo(-172.1,4.1).lineTo(-172.1,4.8).closePath().moveTo(-172.1,3.1).curveTo(-171.6,3.1,-171.2,2.8).curveTo(-170.9,2.4,-170.9,1.9).lineTo(-170.9,-2.1).curveTo(-170.9,-2.7,-171.2,-3).curveTo(-171.6,-3.3,-172.1,-3.4).closePath().moveTo(-174.1,-3).curveTo(-174.5,-2.7,-174.5,-2.1).lineTo(-174.5,1.9).curveTo(-174.5,2.4,-174.2,2.8).curveTo(-173.9,3.1,-173.2,3.1).lineTo(-173.2,-3.4).curveTo(-173.8,-3.3,-174.1,-3).closePath().moveTo(-180.7,4.8).lineTo(-180.7,0.5).lineTo(-181.3,0.5).lineTo(-181.7,0.5).lineTo(-182.1,0.8).lineTo(-182.5,1.2).lineTo(-182.8,2).lineTo(-183.3,4.8).lineTo(-184.4,4.8).lineTo(-183.8,1.8).lineTo(-183.5,0.9).curveTo(-183.3,0.4,-182.9,0.2).lineTo(-183.5,-0.1).lineTo(-183.9,-0.6).lineTo(-184.1,-1.3).lineTo(-184.1,-2).curveTo(-184.1,-3.4,-183.6,-4.2).curveTo(-183,-4.9,-181.8,-4.9).lineTo(-179.6,-4.9).lineTo(-179.6,4.8).closePath().moveTo(-182.3,-3.7).lineTo(-182.7,-3.3).lineTo(-182.9,-2.7).lineTo(-183,-2).curveTo(-183,-0.5,-181.7,-0.5).lineTo(-180.7,-0.5).lineTo(-180.7,-3.9).lineTo(-181.6,-3.9).curveTo(-182,-3.9,-182.3,-3.7).closePath().moveTo(-186.8,4.8).lineTo(-186.8,0.3).lineTo(-189.1,0.3).lineTo(-189.1,4.8).lineTo(-190.2,4.8).lineTo(-190.2,-4.9).lineTo(-189.1,-4.9).lineTo(-189.1,-0.6).lineTo(-186.8,-0.6).lineTo(-186.8,-4.9).lineTo(-185.7,-4.9).lineTo(-185.7,4.8).closePath().moveTo(-198.8,4.8).lineTo(-198.8,-4.9).lineTo(-197.7,-4.9).lineTo(-197.7,3.8).lineTo(-195.8,3.8).lineTo(-195.8,-4.9).lineTo(-194.7,-4.9).lineTo(-194.7,3.8).lineTo(-192.8,3.8).lineTo(-192.8,-4.9).lineTo(-191.6,-4.9).lineTo(-191.6,4.8).closePath().moveTo(-200.8,4.8).lineTo(-201.2,2.7).lineTo(-203.4,2.7).lineTo(-203.8,4.8).lineTo(-204.9,4.8).lineTo(-202.8,-4.9).lineTo(-201.8,-4.9).lineTo(-199.7,4.8).closePath().moveTo(-203.2,1.7).lineTo(-201.4,1.7).lineTo(-202.3,-2.9).lineTo(-202.3,-2.9).closePath().moveTo(-209.9,4.8).lineTo(-209.9,-4.9).lineTo(-206,-4.9).lineTo(-206,-3.9).lineTo(-208.8,-3.9).lineTo(-208.8,-0.9).lineTo(-208,-0.9).curveTo(-207.2,-0.9,-206.7,-0.7).curveTo(-206.2,-0.6,-205.9,-0.1).curveTo(-205.7,0.2,-205.6,0.7).lineTo(-205.5,1.9).lineTo(-205.6,3.1).curveTo(-205.7,3.6,-205.9,4).curveTo(-206.2,4.5,-206.7,4.7).curveTo(-207.2,4.8,-207.9,4.8).closePath().moveTo(-208.8,3.8).lineTo(-208,3.8).curveTo(-207.5,3.8,-207.2,3.7).curveTo(-206.9,3.5,-206.8,3.2).lineTo(-206.6,2.7).lineTo(-206.5,1.9).lineTo(-206.6,1.2).lineTo(-206.8,0.6).curveTo(-206.9,0.4,-207.2,0.2).curveTo(-207.5,0,-208,0.1).lineTo(-208.8,0.1).closePath().moveTo(-220.4,4.8).lineTo(-220.9,2.7).lineTo(-223,2.7).lineTo(-223.5,4.8).lineTo(-224.5,4.8).lineTo(-222.5,-4.9).lineTo(-221.4,-4.9).lineTo(-219.3,4.8).closePath().moveTo(-222.9,1.7).lineTo(-221.1,1.7).lineTo(-221.9,-2.9).lineTo(-222,-2.9).closePath().moveTo(24.3,-5.3).curveTo(23.9,-5.5,23.7,-5.7).curveTo(23.5,-5.9,23.4,-6.2).lineTo(23.3,-6.8).lineTo(24.2,-6.8).lineTo(24.3,-6.6).lineTo(24.5,-6.2).lineTo(24.8,-6).lineTo(25.1,-6).lineTo(25.5,-6).lineTo(25.8,-6.2).lineTo(26,-6.6).lineTo(26.1,-6.8).lineTo(27,-6.8).lineTo(26.8,-6.2).lineTo(26.5,-5.7).lineTo(25.9,-5.3).curveTo(25.6,-5.1,25.1,-5.1).curveTo(24.6,-5.1,24.3,-5.3).closePath();
	this.shape.setTransform(103.6,64.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.2,57.8,459.7,13.6);


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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-401,311.6).lineTo(-401,-311.6).lineTo(401.1,-311.6).lineTo(401.1,311.6).closePath();
	this.shape.setTransform(177.7,320.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.4,9.1,802.1,623.3);


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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-44.1,9.3).curveTo(-45.3,7.9,-45.3,5.5).lineTo(-45.3,-5.4).curveTo(-45.3,-7.9,-44.1,-9.3).curveTo(-42.9,-10.7,-40.5,-10.7).curveTo(-38.1,-10.7,-36.9,-9.3).curveTo(-35.7,-7.9,-35.7,-5.4).lineTo(-35.7,5.5).curveTo(-35.7,7.9,-36.9,9.3).curveTo(-38.1,10.7,-40.5,10.7).curveTo(-42.9,10.7,-44.1,9.3).closePath().moveTo(-42.4,-7.8).curveTo(-43,-7,-43,-5.5).lineTo(-43,5.6).curveTo(-43,7,-42.4,7.8).curveTo(-41.8,8.6,-40.5,8.6).curveTo(-39.2,8.6,-38.7,7.8).curveTo(-38.1,7,-38,5.6).lineTo(-38,-5.5).curveTo(-38.1,-7,-38.7,-7.8).curveTo(-39.2,-8.6,-40.5,-8.6).curveTo(-41.8,-8.6,-42.4,-7.8).closePath().moveTo(-71.3,9.3).curveTo(-72.5,7.9,-72.5,5.5).lineTo(-72.5,-5.4).curveTo(-72.5,-7.8,-71.3,-9.3).curveTo(-70.1,-10.7,-67.7,-10.7).curveTo(-65.3,-10.7,-64.1,-9.3).curveTo(-63,-7.8,-63,-5.4).lineTo(-63,-3.5).lineTo(-65.2,-3.5).lineTo(-65.2,-5.5).curveTo(-65.2,-7,-65.8,-7.8).curveTo(-66.4,-8.6,-67.6,-8.6).curveTo(-68.9,-8.6,-69.5,-7.8).curveTo(-70.1,-7,-70.1,-5.5).lineTo(-70.1,5.6).curveTo(-70.1,7,-69.5,7.8).curveTo(-68.9,8.6,-67.6,8.6).curveTo(-66.4,8.6,-65.8,7.8).curveTo(-65.2,7,-65.2,5.6).lineTo(-65.2,2.8).lineTo(-63,2.8).lineTo(-63,5.5).curveTo(-63,7.9,-64.1,9.3).curveTo(-65.3,10.7,-67.7,10.7).curveTo(-70.1,10.7,-71.3,9.3).closePath().moveTo(63.1,10.5).lineTo(63.1,-10.5).lineTo(67.7,-10.5).curveTo(70.2,-10.5,71.3,-9.1).curveTo(72.4,-7.8,72.4,-5.4).lineTo(72.4,-2.8).curveTo(72.4,-0.3,71.2,1).curveTo(70,2.2,67.5,2.2).lineTo(65.5,2.2).lineTo(65.5,10.5).closePath().moveTo(65.5,0.2).lineTo(67.5,0.2).curveTo(68.8,0.2,69.5,-0.5).curveTo(70.1,-1.2,70.2,-2.7).lineTo(70.2,-5.5).curveTo(70.1,-6.9,69.6,-7.6).curveTo(69,-8.4,67.7,-8.4).lineTo(65.5,-8.4).closePath().moveTo(58.7,10.5).lineTo(58.7,-6.2).lineTo(53.3,10.5).lineTo(50.9,10.5).lineTo(50.9,-10.5).lineTo(53,-10.5).lineTo(53,5.2).lineTo(58.2,-10.5).lineTo(60.8,-10.5).lineTo(60.8,10.5).closePath().moveTo(46.2,10.5).lineTo(46.2,-6.4).lineTo(43,10.5).lineTo(40.7,10.5).lineTo(37.2,-6.2).lineTo(37.2,10.5).lineTo(35.1,10.5).lineTo(35.1,-10.5).lineTo(38.5,-10.5).lineTo(41.9,6.3).lineTo(45.2,-10.5).lineTo(48.5,-10.5).lineTo(48.5,10.5).closePath().moveTo(26.4,10.5).lineTo(25.6,6.3).lineTo(20.3,6.3).lineTo(19.5,10.5).lineTo(17.3,10.5).lineTo(21.4,-10.5).lineTo(24.7,-10.5).lineTo(28.8,10.5).closePath().moveTo(25.3,4.3).lineTo(22.9,-7.8).lineTo(20.6,4.3).lineTo(25.3,4.3).closePath().moveTo(13.2,10.5).lineTo(13.2,1.1).lineTo(8.1,1.1).lineTo(8.1,10.5).lineTo(5.7,10.5).lineTo(5.7,-10.5).lineTo(8.1,-10.5).lineTo(8.1,-1).lineTo(13.2,-1).lineTo(13.2,-10.5).lineTo(15.5,-10.5).lineTo(15.5,10.5).closePath().moveTo(-3.4,10.5).lineTo(-3.4,-6.2).lineTo(-8.8,10.5).lineTo(-11.2,10.5).lineTo(-11.2,-10.5).lineTo(-9.1,-10.5).lineTo(-9.1,5.2).lineTo(-3.9,-10.5).lineTo(-1.3,-10.5).lineTo(-1.3,10.5).closePath().moveTo(-22.4,10.5).lineTo(-22.4,-10.5).lineTo(-17.8,-10.5).curveTo(-15.3,-10.5,-14.2,-9.1).curveTo(-13.1,-7.8,-13.1,-5.4).lineTo(-13.1,-2.8).curveTo(-13.1,-0.3,-14.3,1).curveTo(-15.5,2.2,-18,2.2).lineTo(-20,2.2).lineTo(-20,10.5).closePath().moveTo(-20,0.2).lineTo(-18,0.2).curveTo(-16.7,0.2,-16,-0.5).curveTo(-15.4,-1.2,-15.3,-2.7).lineTo(-15.3,-5.5).curveTo(-15.4,-6.9,-15.9,-7.6).curveTo(-16.5,-8.4,-17.8,-8.4).lineTo(-20,-8.4).closePath().moveTo(-30.3,10.5).lineTo(-30.3,-8.4).lineTo(-34.2,-8.4).lineTo(-34.2,-10.5).lineTo(-24.1,-10.5).lineTo(-24.1,-8.4).lineTo(-27.9,-8.4).lineTo(-27.9,10.5).closePath().moveTo(-49.8,10.5).lineTo(-49.8,-6.4).lineTo(-53.1,10.5).lineTo(-55.4,10.5).lineTo(-58.8,-6.2).lineTo(-58.8,10.5).lineTo(-60.9,10.5).lineTo(-60.9,-10.5).lineTo(-57.6,-10.5).lineTo(-54.1,6.3).lineTo(-50.9,-10.5).lineTo(-47.6,-10.5).lineTo(-47.6,10.5).closePath();
	this.shape.setTransform(-18.9,54.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.4,43.7,144.9,21.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFDD57").beginStroke().moveTo(7.8,9.3).curveTo(6.5,7.9,6.5,5.5).lineTo(6.5,-5.4).curveTo(6.5,-7.9,7.8,-9.3).curveTo(9,-10.7,11.4,-10.7).curveTo(13.8,-10.7,15,-9.3).curveTo(16.2,-7.9,16.2,-5.4).lineTo(16.2,5.5).curveTo(16.2,7.9,15,9.3).curveTo(13.8,10.7,11.4,10.7).curveTo(9,10.7,7.8,9.3).closePath().moveTo(9.5,-7.8).curveTo(8.9,-7,8.9,-5.5).lineTo(8.9,5.6).curveTo(8.9,7,9.5,7.8).curveTo(10.1,8.6,11.4,8.6).curveTo(12.6,8.6,13.3,7.8).curveTo(13.8,7,13.8,5.6).lineTo(13.8,-5.5).curveTo(13.8,-7,13.3,-7.8).curveTo(12.6,-8.6,11.4,-8.6).curveTo(10.1,-8.6,9.5,-7.8).closePath().moveTo(-3.7,9.3).curveTo(-4.8,7.9,-4.8,5.5).lineTo(-4.8,-5.4).curveTo(-4.8,-7.8,-3.7,-9.3).curveTo(-2.5,-10.7,-0.1,-10.7).curveTo(2.3,-10.7,3.5,-9.3).curveTo(4.6,-7.8,4.6,-5.4).lineTo(4.6,-3.5).lineTo(2.4,-3.5).lineTo(2.4,-5.5).curveTo(2.4,-7,1.8,-7.8).curveTo(1.2,-8.6,-0.1,-8.6).curveTo(-1.3,-8.6,-1.9,-7.8).curveTo(-2.5,-7,-2.5,-5.5).lineTo(-2.5,5.6).curveTo(-2.5,7,-1.9,7.8).curveTo(-1.3,8.6,-0.1,8.6).curveTo(1.2,8.6,1.8,7.8).curveTo(2.4,7,2.4,5.6).lineTo(2.4,2.8).lineTo(4.6,2.8).lineTo(4.6,5.5).curveTo(4.6,7.9,3.5,9.3).curveTo(2.3,10.7,-0.1,10.7).curveTo(-2.5,10.7,-3.7,9.3).closePath().moveTo(-47.5,9.3).curveTo(-48.6,7.9,-48.6,5.5).lineTo(-48.6,-5.4).curveTo(-48.6,-7.8,-47.5,-9.3).curveTo(-46.2,-10.7,-43.9,-10.7).curveTo(-41.5,-10.7,-40.3,-9.3).curveTo(-39.1,-7.8,-39.1,-5.4).lineTo(-39.1,-3.5).lineTo(-41.4,-3.5).lineTo(-41.4,-5.5).curveTo(-41.3,-7,-42,-7.8).curveTo(-42.5,-8.6,-43.8,-8.6).curveTo(-45,-8.6,-45.7,-7.8).curveTo(-46.2,-7,-46.2,-5.5).lineTo(-46.2,5.6).curveTo(-46.2,7,-45.7,7.8).curveTo(-45,8.6,-43.8,8.6).curveTo(-42.5,8.6,-42,7.8).curveTo(-41.3,7,-41.4,5.6).lineTo(-41.4,2.8).lineTo(-39.1,2.8).lineTo(-39.1,5.5).curveTo(-39.1,7.9,-40.3,9.3).curveTo(-41.5,10.7,-43.9,10.7).curveTo(-46.2,10.7,-47.5,9.3).closePath().moveTo(-9.3,10.5).lineTo(-9.3,-10.5).lineTo(-7.1,-10.5).lineTo(-7.1,10.5).closePath().moveTo(-20.6,10.5).lineTo(-20.6,-10.5).lineTo(-18.2,-10.5).lineTo(-18.2,-2.2).lineTo(-16.2,-2.2).curveTo(-13.7,-2.2,-12.5,-0.9).curveTo(-11.3,0.4,-11.3,2.9).lineTo(-11.3,5.4).curveTo(-11.3,7.8,-12.4,9.1).curveTo(-13.5,10.5,-16,10.5).closePath().moveTo(-18.2,8.4).lineTo(-16,8.4).curveTo(-14.7,8.4,-14.2,7.7).curveTo(-13.6,7,-13.6,5.5).lineTo(-13.6,2.7).curveTo(-13.6,1.2,-14.3,0.5).curveTo(-14.9,-0.1,-16.2,-0.1).lineTo(-18.2,-0.1).closePath().moveTo(-32.4,10.5).lineTo(-32.4,-10.5).lineTo(-27.7,-10.5).curveTo(-25.2,-10.5,-24.2,-9.3).curveTo(-23,-8.2,-23.1,-5.8).lineTo(-23.1,-4.8).curveTo(-23,-3.2,-23.6,-2.1).curveTo(-24.2,-1.1,-25.5,-0.7).curveTo(-24,-0.2,-23.4,0.9).curveTo(-22.7,2.1,-22.7,3.8).lineTo(-22.7,5.6).curveTo(-22.7,8,-23.9,9.3).curveTo(-25.1,10.5,-27.5,10.5).closePath().moveTo(-30,8.4).lineTo(-27.5,8.4).curveTo(-26.3,8.4,-25.6,7.7).curveTo(-25.1,7,-25.1,5.5).lineTo(-25.1,3.7).curveTo(-25,2,-25.8,1.3).curveTo(-26.4,0.5,-28,0.6).lineTo(-30,0.6).closePath().moveTo(-30,-1.6).lineTo(-28.2,-1.6).curveTo(-26.8,-1.5,-26.1,-2.1).curveTo(-25.4,-2.7,-25.4,-4.4).lineTo(-25.4,-5.6).curveTo(-25.4,-7,-25.9,-7.7).curveTo(-26.5,-8.4,-27.7,-8.4).lineTo(-30,-8.4).closePath().moveTo(46.3,10.3).lineTo(46.3,7.4).lineTo(48.5,7.4).lineTo(48.5,10.3).closePath().moveTo(40.4,10.3).lineTo(40.4,-10.7).lineTo(42.8,-10.7).lineTo(42.8,10.3).closePath().moveTo(29.2,10.3).lineTo(29.2,-10.7).lineTo(31.5,-10.7).lineTo(31.5,-2.4).lineTo(33.6,-2.4).curveTo(36.1,-2.4,37.3,-1.2).curveTo(38.5,0.1,38.5,2.6).lineTo(38.5,5.1).curveTo(38.5,7.6,37.4,8.9).curveTo(36.2,10.2,33.8,10.3).closePath().moveTo(31.5,8.2).lineTo(33.8,8.2).curveTo(35,8.2,35.7,7.4).curveTo(36.2,6.7,36.2,5.3).lineTo(36.2,2.5).curveTo(36.2,1,35.6,0.3).curveTo(34.9,-0.4,33.6,-0.3).lineTo(31.5,-0.3).closePath().moveTo(20.8,10.3).lineTo(20.8,-8.6).lineTo(17,-8.6).lineTo(17,-10.7).lineTo(27,-10.7).lineTo(27,-8.6).lineTo(23.2,-8.6).lineTo(23.2,10.3).closePath().moveTo(46.6,5.6).lineTo(46.2,-10.7).lineTo(48.6,-10.7).lineTo(48.3,5.6).closePath();
	this.shape.setTransform(83.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.7,13.6,97.2,21.4);


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
p.nominalBounds = new cjs.Rectangle(155.6,-72.9,802.1,623.3);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(174,43.5,1.752,1,0,0,0,192.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(167.3,70.3,1.955,0.541,0,0,0,162.5,48.6);
	this.instance_1.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.5,43,673.2,53.5);


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
p.nominalBounds = new cjs.Rectangle(-129.8,-2.7,459.7,13.6);


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
	this.instance.setTransform(88.3,-41.9,0.792,0.792,0,0,0,96,31.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-66.7,182.9,49.4);


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
p.nominalBounds = new cjs.Rectangle(-135.8,253.3,459.7,153.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(97.5,9.5,1,1,0,0,0,51.8,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.7,-2.2,103.7,23.3);


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
	this.instance.setTransform(-252,0,0.838,0.601);

	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(-163.4,88.9,0.737,1.73,-90,0,0,251.2,153.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,0,858.5,600.6);


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
	this.instance.setTransform(147.4,30,1,1,0,0,0,72.5,10.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(469).to({_off:false},0).to({y:34,alpha:1},13).wait(77).to({alpha:0},11).wait(150));

	// Символ 28
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(148,59.5,1,1,0,0,0,47.1,10.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(477).to({_off:false},0).to({y:64,alpha:1},13).wait(69).to({alpha:0},11).wait(150));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(200,92.2,1,1,0,0,0,85.4,10.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(207).to({_off:false},0).to({y:82.2,alpha:1},14,cjs.Ease.get(1)).wait(104).to({y:72.2,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(379));

	// Символ 25
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(-57.8,70);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(201).to({_off:false},0).to({alpha:1},14).wait(104).to({regX:84.9,regY:12,x:27.1,y:82},0).to({y:72,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(385));

	// Символ 23
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(170.3,90.8,1,1,0,0,0,107.2,10.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(352).to({_off:false},0).to({y:80.8,alpha:1},14,cjs.Ease.get(1)).wait(88).to({y:70.8,alpha:0},15,cjs.Ease.get(-1)).wait(251));

	// Символ 22
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(5.6,91.5,1,1,0,0,0,99.4,12.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(343).to({_off:false},0).to({y:81.5,alpha:1},14,cjs.Ease.get(1)).wait(88).to({y:71.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(259));

	// Символ 21
	this.instance_6 = new lib.Символ21();
	this.instance_6.setTransform(34.4,88.5,1,1,0,0,0,78.8,17.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({_off:false},0).to({y:78.5,alpha:1},14,cjs.Ease.get(1)).wait(113).to({y:68.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(526));

	// Символ 20
	this.instance_7 = new lib.Символ20();
	this.instance_7.setTransform(198.7,93.6,1,1,0,0,0,83.5,17.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({y:83.6,alpha:1},14,cjs.Ease.get(1)).wait(113).to({y:73.6,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(519));

	// Слой 1
	this.instance_8 = new lib.Символ38();
	this.instance_8.setTransform(159.5,201.5,1,1,0,0,0,203.5,50.5);
	this.instance_8.alpha = 0.41;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({y:61.5,alpha:1},23,cjs.Ease.get(1)).wait(669));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.5,194,673.2,53.5);


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
	this.instance.setTransform(160,293.8,1,1,0,0,0,160,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16.8,550.4,898.1);


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
	this.instance.setTransform(1101.1,101.1,1.628,1.628,0,0,0,303.5,93.5);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(112.9,101.1,1.628,1.628,0,0,0,303.5,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-381.2,-51.2,1976.5,304.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(706.2,93.5,1,1,0,0,0,607,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:546.7},719).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282,-51.2,1976.5,304.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ18();
	this.instance.setTransform(536,251.4,1.37,1.37,0,0,0,160.1,276.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25,x:537.3,y:392.7},59,cjs.Ease.get(-1)).to({regY:277,scaleX:1.14,scaleY:1.14,x:538.7,y:538.2},59,cjs.Ease.get(1)).wait(1).to({regY:277.1,y:538.3},0).to({regY:277,scaleX:0.88,scaleY:0.88,x:551.2,y:473.8},60,cjs.Ease.get(-1)).to({regX:160.2,regY:277.2,scaleX:0.72,scaleY:0.72,x:563.5,y:433.6},69,cjs.Ease.get(1)).wait(171).to({scaleX:1.2,scaleY:1.2,x:620.6,y:735.4},70,cjs.Ease.get(-1)).to({regX:160.3,regY:277.3,scaleX:1.63,scaleY:1.63,x:673.1,y:1029.3},60,cjs.Ease.get(1)).wait(170).to({y:1012.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.7,-104.8,753.8,1230.1);


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
p.nominalBounds = new cjs.Rectangle(-38.2,-20.2,2122.7,921.1);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({x:491,y:151.1,alpha:0},0).to({alpha:1},30).wait(330).to({scaleX:1.07,scaleY:1.07,x:598.3,y:156.7},20,cjs.Ease.get(-1)).to({regX:-18.9,scaleX:1.14,scaleY:1.14,x:711.1,y:162.6},21,cjs.Ease.get(1)).wait(189).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-24,98.7,101.9);


// stage content:



(lib.Federacia_light_1080600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ40();
	this.instance.setTransform(-430.2,-159.9,1.773,1.773,0,0,0,38,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(550.2,506.5,1.773,1.773,0,0,0,96,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-862.8,-29,1.773,1.773,0,0,0,-19,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(684.1,500.6,1.773,1.773,0,0,0,203.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(169.5,61.9,1.773,1.773,0,0,0,356.5,276.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(213.5,220.1,1.271,1.271,0,0,0,303.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.6,-315,3341.7,2181.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;