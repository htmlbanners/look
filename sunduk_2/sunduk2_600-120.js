(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 120,
	fps: 24,
	color: "#660099",
	opacity: 1.00,
	manifest: [
		{src:"images/backgr.jpg?1474925706823", id:"backgr"},
		{src:"images/chest_close.png?1474925706823", id:"chest_close"},
		{src:"images/chest_open.png?1474925706823", id:"chest_open"},
		{src:"images/coin1.png?1474925706823", id:"coin1"},
		{src:"images/coin2.png?1474925706823", id:"coin2"},
		{src:"images/coin3.png?1474925706823", id:"coin3"},
		{src:"images/dia1.png?1474925706823", id:"dia1"},
		{src:"images/dia2.png?1474925706823", id:"dia2"},
		{src:"images/nit.png?1474925706823", id:"nit"},
		{src:"images/text1.png?1474925706823", id:"text1"},
		{src:"images/text2.png?1474925706823", id:"text2"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.backgr = function() {
	this.initialize(img.backgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,269);


(lib.chest_close = function() {
	this.initialize(img.chest_close);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,109);


(lib.chest_open = function() {
	this.initialize(img.chest_open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,139);


(lib.coin1 = function() {
	this.initialize(img.coin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,20);


(lib.coin2 = function() {
	this.initialize(img.coin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,28);


(lib.coin3 = function() {
	this.initialize(img.coin3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,29);


(lib.dia1 = function() {
	this.initialize(img.dia1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,13);


(lib.dia2 = function() {
	this.initialize(img.dia2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.nit = function() {
	this.initialize(img.nit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,83);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,47);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,44);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,44);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.backgr();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,669,269);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,29);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,20);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,28);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,47);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nit();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,83);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chest_open();
	this.instance.setTransform(-76,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-69.5,152,139);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chest_open();
	this.instance.setTransform(-76,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-69.5,152,139);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chest_open();
	this.instance.setTransform(-76,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-69.5,152,139);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chest_open();
	this.instance.setTransform(-76,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-69.5,152,139);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chest_open();
	this.instance.setTransform(-76,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-69.5,152,139);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chest_open();
	this.instance.setTransform(-76,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-69.5,152,139);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dia1();
	this.instance.setTransform(-4.1,-9.8,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-9.8,21.2,19.8);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dia1();
	this.instance.setTransform(-8.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-6.5,17,13);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dia2();
	this.instance.setTransform(-0.3,-10.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.2,20.5,20.5);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dia2();
	this.instance.setTransform(-7.5,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7,15,14);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(168,14.5,1,1,0,0,0,14,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({regY:14.6,scaleX:0.92,scaleY:0.92,rotation:690.1,x:86.4,y:-2.4},7,cjs.Ease.get(0.54)).to({scaleX:0.84,scaleY:0.84,rotation:300,x:79.6,y:61.4},7,cjs.Ease.get(-0.43)).wait(106));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(193.5,14,1,1,0,0,0,8.5,10);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({regY:10.1,scaleX:1,scaleY:1,rotation:697.7,x:95.8,y:-11.2},7,cjs.Ease.get(0.54)).to({regY:10,scaleX:1,scaleY:1,rotation:315,x:72.9,y:44.5},7,cjs.Ease.get(-0.43)).wait(112));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(177,4,1,1,0,0,0,13.5,14);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({rotation:360,x:96.3,y:-10.2},7,cjs.Ease.get(0.54)).to({rotation:0,x:90.5,y:56.5},7,cjs.Ease.get(-0.43)).wait(118));

	// Символ 7
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(154.5,8.5,1,1,0,0,0,14,14.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:14.1,scaleX:0.98,scaleY:0.98,rotation:360,x:47.2,y:-10.4},7,cjs.Ease.get(0.54)).to({regX:14,regY:14.6,scaleX:0.96,scaleY:0.96,rotation:0,x:14.6,y:51.7},7,cjs.Ease.get(-0.43)).wait(121));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(177,23,1,1,0,0,0,13.5,14);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:675.1,x:74.2,y:-11.8},7,cjs.Ease.get(0.54)).to({regY:14.1,scaleX:1,scaleY:1,rotation:270,x:46.1,y:34.5},7,cjs.Ease.get(-0.43)).wait(127));

	// Символ 7
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(176.5,18.5,1,1,0,0,0,14,14.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({rotation:360,x:83.8,y:-2.5},7,cjs.Ease.get(0.54)).to({rotation:0,x:66,y:57.5},7,cjs.Ease.get(-0.43)).wait(138));

	// Символ 6
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(168.5,10,1,1,0,0,0,8.5,10);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({rotation:360,x:61.1,y:-5.2},7,cjs.Ease.get(0.54)).to({rotation:0,x:28.6,y:60.5},7,cjs.Ease.get(-0.43)).wait(131));

	// Символ 6
	this.instance_7 = new lib.Символ6();
	this.instance_7.setTransform(182,19,1,1,0,0,0,8.5,10);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({rotation:360,x:77.3,y:-5.3},7,cjs.Ease.get(0.54)).to({rotation:0,x:47.6,y:51.4},7,cjs.Ease.get(-0.43)).wait(126));

	// Символ 6
	this.instance_8 = new lib.Символ6();
	this.instance_8.setTransform(160,0,1,1,0,0,0,8.5,10);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({rotation:360,x:64.1,y:-9.7},7,cjs.Ease.get(0.54)).to({rotation:0,x:43.1,y:61.5},7,cjs.Ease.get(-0.43)).wait(128));

	// Символ 6
	this.instance_9 = new lib.Символ6();
	this.instance_9.setTransform(182,19,1,1,0,0,0,8.5,10);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({rotation:360,x:83.6,y:-10.7},7,cjs.Ease.get(0.54)).to({rotation:0,x:60.1,y:40.5},7,cjs.Ease.get(-0.43)).wait(134));

	// Символ 6
	this.instance_10 = new lib.Символ6();
	this.instance_10.setTransform(190.5,19,1,1,0,0,0,8.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:360,x:74.8,y:-7.5},7,cjs.Ease.get(0.54)).to({rotation:0,x:34.1,y:47},7,cjs.Ease.get(-0.43)).wait(146));

	// Символ 6
	this.instance_11 = new lib.Символ6();
	this.instance_11.setTransform(168.5,14,1,1,0,0,0,8.5,10);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({rotation:360,x:60.3,y:-14},7).to({rotation:0,x:27.1,y:39},7,cjs.Ease.get(-0.43)).wait(136));

	// Символ 5
	this.instance_12 = new lib.Символ5();
	this.instance_12.setTransform(190.5,19,1,1,0,0,0,13.5,14);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({regY:14.1,scaleX:1,scaleY:1,rotation:690.1,x:60.6,y:0.1},7,cjs.Ease.get(0.54)).to({regY:14,scaleX:1,scaleY:1,rotation:300,x:5.6,y:62},7,cjs.Ease.get(-0.43)).wait(142));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(182,9,17,20);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(195,23.5,1,1,0,0,0,195,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,47);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(195,23.5,1,1,0,0,0,195,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.559},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,47);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(40.5,41.5,1,1,0,0,0,40.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,83);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 15
	this.instance = new lib.Символ15();
	this.instance.setTransform(48,90.5,1,1,0,0,0,48,36.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(140).to({alpha:0},15).wait(6));

	// dia2.png
	this.instance_1 = new lib.dia2();
	this.instance_1.setTransform(220,113);

	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(227.5,120);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.setTransform(240.1,127,1,1,105);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},69).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},167).to({state:[{t:this.instance_2}]},6).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({_off:true,rotation:105,x:240.1,y:127},5,cjs.Ease.get(1)).wait(167).to({_off:false,rotation:0,x:227.5,y:120},6,cjs.Ease.get(1)).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},5,cjs.Ease.get(1)).wait(167).to({startPosition:0},0).to({_off:true,rotation:0,x:227.5,y:120},6,cjs.Ease.get(1)).wait(3));

	// dia1.png
	this.instance_4 = new lib.dia1();
	this.instance_4.setTransform(198,127);

	this.instance_5 = new lib.Анимация3("synched",0);
	this.instance_5.setTransform(206.5,133.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация4("synched",0);
	this.instance_6.setTransform(221.3,133.5,1,1,120);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},69).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},167).to({state:[{t:this.instance_5}]},6).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({_off:true,rotation:120,x:221.3},5,cjs.Ease.get(1)).wait(167).to({_off:false,rotation:0,x:206.5},6,cjs.Ease.get(1)).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},5,cjs.Ease.get(1)).wait(167).to({startPosition:0},0).to({_off:true,rotation:0,x:206.5},6,cjs.Ease.get(1)).wait(3));

	// chest_open.png
	this.instance_7 = new lib.chest_open();
	this.instance_7.setTransform(111,-2);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация5("synched",0);
	this.instance_8.setTransform(185,67.5);

	this.instance_9 = new lib.Анимация6("synched",0);
	this.instance_9.setTransform(189,66.5);

	this.instance_10 = new lib.Анимация7("synched",0);
	this.instance_10.setTransform(192,66.5);

	this.instance_11 = new lib.Анимация8("synched",0);
	this.instance_11.setTransform(186,67.5);

	this.instance_12 = new lib.Анимация9("synched",0);
	this.instance_12.setTransform(190,66.5);

	this.instance_13 = new lib.Анимация10("synched",0);
	this.instance_13.setTransform(186,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},69).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13,p:{x:186,y:65.5}}]},2).to({state:[{t:this.instance_13,p:{x:185,y:66.5}}]},2).to({state:[{t:this.instance_7}]},2).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).wait(1).to({x:114},0).wait(2).to({x:109},0).to({_off:true},2).wait(15).to({_off:false,x:106,y:-3},0).wait(161));

	// chest_close.png
	this.instance_14 = new lib.chest_close();
	this.instance_14.setTransform(114,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(68).to({_off:true},1).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(114,25,121,115);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(334.5,134.5,1,1,0,0,0,334.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,x:334.6},19,cjs.Ease.get(-1)).to({regX:334.4,scaleX:1.07,scaleY:1.07,x:334.5,y:134.6},20,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,x:334.6},20,cjs.Ease.get(-1)).to({regX:334.5,scaleX:1,scaleY:1,x:334.5,y:134.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,669,269);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(116,22,1,1,0,0,0,116,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,44);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(146,22,1,1,0,0,0,116,22);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).to({alpha:1},36).wait(120).to({alpha:0},10).wait(11));

	// Символ 2
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(-83.4,16.6,1,1,0,0,0,40.5,41.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({rotation:360,x:427.5},34,cjs.Ease.get(-1)).to({regX:40.6,scaleX:0.78,x:436.7},2).to({scaleX:1.05,rotation:0,x:355.6,y:-79.4},3,cjs.Ease.get(1)).to({_off:true},1).wait(176));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A+dDqIAAnUMA86AAAIAAHUg");
	var mask_graphics_48 = new cjs.Graphics().p("A+dDqIAAnUMA86AAAIAAHUg");
	var mask_graphics_49 = new cjs.Graphics().p("Ac7DqIAAnUIAAHUMg53AAAIAAnUMA53AAAIACAAIAAHUg");
	var mask_graphics_50 = new cjs.Graphics().p("A7cDqIAAnUMA20AAAIAAHUgAbcjqIABAAIgBAXg");
	var mask_graphics_51 = new cjs.Graphics().p("A57DqIAAnUMAzxAAAIAAHUgAZ8jqIAAAAIAAAXg");
	var mask_graphics_52 = new cjs.Graphics().p("A4aDqIAAnUMAwtAAAIAAHUgAYajqIABAAIAAAsg");
	var mask_graphics_53 = new cjs.Graphics().p("A26DqIAAnUMAtrAAAIAAHUgAW6jqIABAAIgBAsg");
	var mask_graphics_54 = new cjs.Graphics().p("A1aDqIAAnUMAqoAAAIAAHUgAVajqIABAAIgBAsg");
	var mask_graphics_55 = new cjs.Graphics().p("Az5DqIAAnUMAnlAAAIAAHUgAT4jqIACAAIgBBDg");
	var mask_graphics_56 = new cjs.Graphics().p("AyZDqIAAnUMAkiAAAIAAHUgASYjqIABAAIAABDg");
	var mask_graphics_57 = new cjs.Graphics().p("Aw4DqIAAnUMAhfAAAIAAHUgAQ3jqIACAAIgBBZg");
	var mask_graphics_58 = new cjs.Graphics().p("AvXDqIAAnUIebAAIAAHUgAPWjqIADAAIgBBZg");
	var mask_graphics_59 = new cjs.Graphics().p("At3DqIAAnUIbZAAIAAHUgAN2jqIACAAIgBBZg");
	var mask_graphics_60 = new cjs.Graphics().p("AsXDqIAAnUIYWAAIAAHUgAMVjqIACAAIAACFg");
	var mask_graphics_61 = new cjs.Graphics().p("Aq2DqIAAnUIVTAAIAAHUgAK1jqIACAAIgBCFg");
	var mask_graphics_62 = new cjs.Graphics().p("ApWDqIAAnUISQAAIAAHUgAJTjqIAEAAIgCCFg");
	var mask_graphics_63 = new cjs.Graphics().p("An1DqIAAnUIPNAAIAAHUgAHzjqIADAAIgBCFg");
	var mask_graphics_64 = new cjs.Graphics().p("AmUDqIAAnUIMJAAIAAHUgAGTjqIACAAIAACFg");
	var mask_graphics_65 = new cjs.Graphics().p("Ak0DqIAAnUIJHAAIAAHUgAExjqIAEAAIgBCxg");
	var mask_graphics_66 = new cjs.Graphics().p("AjUDqIAAnUIGEAAIAAHUgADRjqIADAAIgBCxg");
	var mask_graphics_67 = new cjs.Graphics().p("AhzDqIAAnUIDBAAIAAHUgABwjqIAEAAIgBCxg");
	var mask_graphics_68 = new cjs.Graphics().p("AgTDqIAAnUIAnAAIAAHUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:196,y:25.5}).wait(48).to({graphics:mask_graphics_48,x:196,y:25.5}).wait(1).to({graphics:mask_graphics_49,x:205.9,y:25.5}).wait(1).to({graphics:mask_graphics_50,x:215.7,y:25.5}).wait(1).to({graphics:mask_graphics_51,x:225.6,y:25.5}).wait(1).to({graphics:mask_graphics_52,x:235.4,y:25.5}).wait(1).to({graphics:mask_graphics_53,x:245.3,y:25.5}).wait(1).to({graphics:mask_graphics_54,x:255.1,y:25.5}).wait(1).to({graphics:mask_graphics_55,x:265,y:25.5}).wait(1).to({graphics:mask_graphics_56,x:274.8,y:25.5}).wait(1).to({graphics:mask_graphics_57,x:284.7,y:25.5}).wait(1).to({graphics:mask_graphics_58,x:294.5,y:25.5}).wait(1).to({graphics:mask_graphics_59,x:304.4,y:25.5}).wait(1).to({graphics:mask_graphics_60,x:314.2,y:25.5}).wait(1).to({graphics:mask_graphics_61,x:324.1,y:25.5}).wait(1).to({graphics:mask_graphics_62,x:333.9,y:25.5}).wait(1).to({graphics:mask_graphics_63,x:343.8,y:25.5}).wait(1).to({graphics:mask_graphics_64,x:353.6,y:25.5}).wait(1).to({graphics:mask_graphics_65,x:363.5,y:25.5}).wait(1).to({graphics:mask_graphics_66,x:373.3,y:25.5}).wait(1).to({graphics:mask_graphics_67,x:383.2,y:25.5}).wait(1).to({graphics:mask_graphics_68,x:393,y:25.5}).wait(182));

	// Символ 3
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(196,25.5,1,1,0,0,0,195,23.5);
	this.instance_2.alpha = 0;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},4).wait(69).to({_off:true},1).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,2,390,47);


// stage content:



(lib.sunduk2_600120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open("http://checkindigo.ru", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(209.5,95,1,1,0,0,0,195.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(472.5,53,1,1,0,0,0,132.5,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 8
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(334.5,94.6,1,1,0,0,0,334.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,20,669,269);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;