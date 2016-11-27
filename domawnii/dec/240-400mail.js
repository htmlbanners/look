(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/backgr.jpg?1480275269544", id:"backgr"},
		{src:"images/cell.png?1480275269544", id:"cell"},
		{src:"images/dom_01.png?1480275269544", id:"dom_01"},
		{src:"images/dom_06.png?1480275269544", id:"dom_06"},
		{src:"images/dom_10.png?1480275269544", id:"dom_10"},
		{src:"images/dom_12.png?1480275269544", id:"dom_12"},
		{src:"images/dom_19.png?1480275269544", id:"dom_19"},
		{src:"images/dom_21.png?1480275269544", id:"dom_21"},
		{src:"images/dom_23.png?1480275269544", id:"dom_23"},
		{src:"images/dom_25.png?1480275269544", id:"dom_25"},
		{src:"images/flake.png?1480275269544", id:"flake"},
		{src:"images/flake_1.png?1480275269544", id:"flake_1"},
		{src:"images/psn.png?1480275269544", id:"psn"},
		{src:"images/tek.png?1480275269544", id:"tek"},
		{src:"images/xma.png?1480275269544", id:"xma"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.backgr = function() {
	this.initialize(img.backgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,261);


(lib.cell = function() {
	this.initialize(img.cell);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,513);


(lib.dom_01 = function() {
	this.initialize(img.dom_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,86);


(lib.dom_06 = function() {
	this.initialize(img.dom_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,49);


(lib.dom_10 = function() {
	this.initialize(img.dom_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,101);


(lib.dom_12 = function() {
	this.initialize(img.dom_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,79);


(lib.dom_19 = function() {
	this.initialize(img.dom_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,26);


(lib.dom_21 = function() {
	this.initialize(img.dom_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,52);


(lib.dom_23 = function() {
	this.initialize(img.dom_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,42);


(lib.dom_25 = function() {
	this.initialize(img.dom_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,122);


(lib.flake = function() {
	this.initialize(img.flake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.flake_1 = function() {
	this.initialize(img.flake_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,29);


(lib.psn = function() {
	this.initialize(img.psn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,78);


(lib.tek = function() {
	this.initialize(img.tek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,88);


(lib.xma = function() {
	this.initialize(img.xma);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,190);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGdBPQgPgIgIgRQgJgQAAgWQAAgUAJgQQAIgQAPgJQAPgJASAAQAPAAANAGQANAGAJAKIgZAPQgMgLgNAAQgJAAgIAGQgJAGgEAKQgGAJAAANQAAAOAGAKQAEALAJAGQAIAFAJAAQAOAAALgKIAZAOQgJALgNAFQgNAGgPAAQgRAAgQgJgAM6BWIAAhwIgkAAIAAgaIBoAAIAAAaIglAAIAABwgALmBWIAAhWIg0BWIgeAAIAAiKIAeAAIAABYIA0hYIAeAAIAACKgAJiBWIgKgeQgPAFgKAAQgLAAgOgFIgKAeIggAAIAziKIAgAAIAzCKgAIuAfQAIAFAJAAQAIAAAJgFIgRgygAERBWIgKgeQgPAFgKAAQgLAAgPgFIgJAeIghAAIAziKIAhAAIAyCKgADdAfQAHAFAKAAQAIAAAJgFIgRgygAB6BWIAAg5Ig0AAIAAA5IgdAAIAAiKIAdAAIAAA4IA0AAIAAg4IAeAAIAACKgAhLBWIAAhXIg1BXIgeAAIAAiKIAeAAIAABYIA1hYIAdAAIAACKgAj0BWIAAhwIgkAAIAAgaIBoAAIAAAaIgmAAIAABwgAlIBWIAAhWIg0BWIgeAAIAAiKIAeAAIAABYIA0hYIAeAAIAACKgAoMBWIAAiKIBaAAIAAAaIg8AAIAAAeIAtAAIAAAZIgtAAIAAAgIA+AAIAAAZgAqHBWIAAiKIA8AAQANAAAKAGQAKAFAFAJQAFAKABAMQgBAKgFAJQgFAKgKAFQgKAFgNAAIgeAAIAAA5gAppAEIAegBQAIAAAEgDQAFgEAAgHQAAgGgFgFQgEgEgIAAIgeAAgAr4BWIAAiKIBZAAIAAAaIg8AAIAAAeIAtAAIAAAZIgtAAIAAAgIA+AAIAAAZgAsuBWIAAhwIgxAAIAABwIgeAAIAAiKIBtAAIAACKgAK7hCQgIgGgDgJIAOgGQACAGAEADQAEACAEAAQAFAAAEgCQAEgDACgGIANAGQgEAJgHAGQgIAFgJAAQgKAAgHgFgAlzhCQgIgGgDgJIAOgGQACAGAEADQAEACAFAAQAEAAAEgCQAEgDABgGIAOAGQgDAJgIAGQgIAFgJAAQgKAAgHgFg");
	this.shape.setTransform(89.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.8,17.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tek();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,88);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGdBPQgPgIgJgRQgIgQgBgWQABgUAIgQQAKgQAPgJQAOgJATAAQAPAAANAGQAMAGAJAKIgaAPQgMgLgLAAQgLAAgHAGQgJAGgFAKQgEAJAAANQAAAOAEAKQAFALAJAGQAHAFALAAQAMAAALgKIAaAOQgJALgMAFQgNAGgPAAQgTAAgPgJgAM7BWIAAhwIglAAIAAgaIBnAAIAAAaIglAAIAABwgALmBWIAAhWIg0BWIgeAAIAAiKIAeAAIAABYIA0hYIAeAAIAACKgAJiBWIgKgeQgPAFgKAAQgKAAgPgFIgKAeIggAAIAziKIAgAAIAzCKgAIuAfQAIAFAJAAQAJAAAIgFIgRgygAEQBWIgKgeQgOAFgLAAQgKAAgOgFIgLAeIgfAAIAziKIAfAAIA0CKgADcAfQAJAFAIAAQAJAAAIgFIgRgygAB7BWIAAg5Ig0AAIAAA5IgfAAIAAiKIAfAAIAAA4IA0AAIAAg4IAeAAIAACKgAhMBWIAAhXIg1BXIgeAAIAAiKIAeAAIAABYIA1hYIAfAAIAACKgAjzBWIAAhwIglAAIAAgaIBnAAIAAAaIglAAIAABwgAlIBWIAAhWIg0BWIgeAAIAAiKIAeAAIAABYIA0hYIAeAAIAACKgAoLBWIAAiKIBZAAIAAAaIg7AAIAAAeIAsAAIAAAZIgsAAIAAAgIA9AAIAAAZgAqHBWIAAiKIA8AAQANAAAKAGQAKAFAFAJQAGAKgBAMQABAKgGAJQgFAKgKAFQgKAFgNAAIgeAAIAAA5gAppAEIAdgBQAJAAAFgDQAEgEAAgHQAAgGgEgFQgFgEgJAAIgdAAgAr5BWIAAiKIBaAAIAAAaIg7AAIAAAeIAsAAIAAAZIgsAAIAAAgIA9AAIAAAZgAsvBWIAAhwIgvAAIAABwIgeAAIAAiKIBsAAIAACKgAK7hCQgIgGgDgJIAOgGQACAGAEADQAEACAFAAQAEAAAEgCQAEgDABgGIAOAGQgEAJgHAGQgIAFgKAAQgJAAgHgFgAl0hCQgHgGgDgJIAOgGQACAGAEADQAEACAEAAQAFAAAEgCQAEgDACgGIANAGQgEAJgHAGQgIAFgKAAQgJAAgIgFg");
	this.shape.setTransform(92.6,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,4.4,178.8,17.7);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.psn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,78);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.backgr();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465,261);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flake();
	this.instance.setTransform(0,0,0.266,0.266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,21);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD678").s().p("Ay2AcIAAg4MAltAAAIAAA4g");
	this.shape.setTransform(120.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9B40A").s().p("Ay7F1IAArqMAl3AAAIAALqg");
	this.shape_1.setTransform(121.3,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.5,74.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dom_01();
	this.instance.setTransform(0,0,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190.8,78.2);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw7H5IAAvxMAh3AAAIAAPxg");
	this.shape.setTransform(108.5,50.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217,101.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cell();
	this.instance.setTransform(0,67);

	this.instance_1 = new lib.cell();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254,580);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dom_19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,26);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dom_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,42);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flake();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flake_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,29);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dom_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,49);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dom_25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,122);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dom_21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,52);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxJDYIAAmuMAiSAAAIAAGug");
	this.shape.setTransform(109.8,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtDCgIAAlCIaHADIAAFCg");
	this.shape_1.setTransform(83.8,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219.6,54.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxJCjIAAlFMAiTAAAIAAFFg");
	this.shape.setTransform(109.9,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwUCgIAAlCMAgpAADIAAFCg");
	this.shape_1.setTransform(104.7,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219.8,54.3);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArYDYIAAmuIWxAAIAAGug");
	this.shape.setTransform(73,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ax6ChIAAlBMAj1AAAIAAFBg");
	this.shape_1.setTransform(114.7,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.5,54);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604B3C").s().p("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");
	this.shape.setTransform(106.4,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.8,44.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604B3C").s().p("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");
	this.shape.setTransform(100.7,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.4,36.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604B3C").s().p("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");
	this.shape.setTransform(99.1,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.1,40);


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AGdBPQgPgIgIgRQgJgQAAgWQAAgUAJgQQAIgQAPgJQAPgJASAAQAPAAANAGQANAGAJAKIgZAPQgMgLgNAAQgJAAgIAGQgJAGgEAKQgGAJAAANQAAAOAGAKQAEALAJAGQAIAFAJAAQAOAAALgKIAZAOQgJALgNAFQgNAGgPAAQgRAAgQgJgAM6BWIAAhwIgkAAIAAgaIBoAAIAAAaIglAAIAABwgALmBWIAAhWIg0BWIgeAAIAAiKIAeAAIAABYIA0hYIAeAAIAACKgAJiBWIgKgeQgPAFgKAAQgLAAgOgFIgKAeIggAAIAziKIAgAAIAzCKgAIuAfQAIAFAJAAQAIAAAJgFIgRgygAERBWIgKgeQgPAFgKAAQgLAAgPgFIgJAeIghAAIAziKIAhAAIAyCKgADdAfQAHAFAKAAQAIAAAJgFIgRgygAB6BWIAAg5Ig0AAIAAA5IgdAAIAAiKIAdAAIAAA4IA0AAIAAg4IAeAAIAACKgAhLBWIAAhXIg1BXIgeAAIAAiKIAeAAIAABYIA1hYIAdAAIAACKgAj0BWIAAhwIgkAAIAAgaIBoAAIAAAaIgmAAIAABwgAlIBWIAAhWIg0BWIgeAAIAAiKIAeAAIAABYIA0hYIAeAAIAACKgAoMBWIAAiKIBaAAIAAAaIg8AAIAAAeIAtAAIAAAZIgtAAIAAAgIA+AAIAAAZgAqHBWIAAiKIA8AAQANAAAKAGQAKAFAFAJQAFAKABAMQgBAKgFAJQgFAKgKAFQgKAFgNAAIgeAAIAAA5gAppAEIAegBQAIAAAEgDQAFgEAAgHQAAgGgFgFQgEgEgIAAIgeAAgAr4BWIAAiKIBZAAIAAAaIg8AAIAAAeIAtAAIAAAZIgtAAIAAAgIA+AAIAAAZgAsuBWIAAhwIgxAAIAABwIgeAAIAAiKIBtAAIAACKgAK7hCQgIgGgDgJIAOgGQACAGAEADQAEACAEAAQAFAAAEgCQAEgDACgGIANAGQgEAJgHAGQgIAFgJAAQgKAAgHgFgAlzhCQgIgGgDgJIAOgGQACAGAEADQAEACAFAAQAEAAAEgCQAEgDABgGIAOAGQgDAJgIAGQgIAFgJAAQgKAAgHgFg");
	this.shape_1.setTransform(89.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.8,17.7);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(116.1,47.4,1,1,0,0,0,115.2,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0dTIMAAAgmPMAo6AAAMAAAAmPg");
	this.shape.setTransform(117.1,117.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-4.6,262,245);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(232.5,130.5,1,1,0,0,0,232.5,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:172.5},109).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465,261);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 37
	this.instance = new lib.Символ37();
	this.instance.setTransform(138.3,38.3,0.452,0.452,0,0,0,10.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:425.8},14).wait(1));

	// Символ 37
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(47.3,342.8,0.452,0.452,0,0,0,10.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:10.5,regY:10.5,y:425.8},3).wait(1).to({y:38.3},0).to({regX:10.6,regY:10.6,y:315.2},10).wait(1));

	// Символ 37
	this.instance_2 = new lib.Символ37();
	this.instance_2.setTransform(96.3,121.4,0.452,0.452,0,0,0,10.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:10.5,regY:10.5,y:425.8},11).wait(1).to({y:38.3},0).to({regX:10.6,regY:10.6,y:93.7},2).wait(1));

	// Символ 37
	this.instance_3 = new lib.Символ37();
	this.instance_3.setTransform(4.9,259.8,0.452,0.452,0,0,0,10.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:10.5,regY:10.5,x:4.8,y:425.8},6).wait(1).to({y:38.3},0).to({regY:10.6,y:232.1},7).wait(1));

	// Символ 37
	this.instance_4 = new lib.Символ37();
	this.instance_4.setTransform(-86.2,398.2,0.452,0.452,0,0,0,10.4,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:10.5,regY:10.5,y:425.8},1).wait(1).to({y:38.3},0).to({regX:10.4,regY:10.6,x:-86.3,y:370.5},12).wait(1));

	// Символ 37
	this.instance_5 = new lib.Символ37();
	this.instance_5.setTransform(-37.2,204.4,0.452,0.452,0,0,0,10.3,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:10.5,regY:10.5,y:425.8},8).wait(1).to({y:38.3},0).to({regX:10.4,regY:10.6,y:176.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.9,33.6,234,369.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7aUUMAAAgonMA21AAAMAAAAong");
	mask.setTransform(175.5,130.1);

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(42.7,-16.8,0.667,0.667,0,0,0,10.6,10.4);

	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(224.7,-16.8,0.667,0.667,0,0,0,10.5,10.4);

	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(127.7,-142.4,1.326,1.326,0,0,0,10.6,10.5);

	this.instance_3 = new lib.Символ36();
	this.instance_3.setTransform(123.5,-45.5,1,1,0,0,0,10.5,10.5);

	this.instance_4 = new lib.Символ36();
	this.instance_4.setTransform(396.5,-45.5,1,1,0,0,0,10.5,10.5);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ39();
	this.instance_5.setTransform(252.5,130.5,1,1,0,0,0,232.5,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,485,261);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(183.7,81.6,1,1,0,0,0,114.7,26.9);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(556.7,80.9,1,0.142,0,0,0,106.4,22.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},49).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},48).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},7).to({state:[]},1).to({state:[]},212).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({regY:22.1,scaleY:1.18,y:83.9},6,cjs.Ease.get(-1)).to({scaleY:1,y:83.4},3,cjs.Ease.get(1)).wait(48).to({scaleY:1.18,y:83.9},3,cjs.Ease.get(1)).to({regY:22.2,scaleY:0.14,y:80.9},7,cjs.Ease.get(-1)).to({_off:true},1).wait(278));

	// 11
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(556.7,80.7,1,0.142,0,0,0,114.7,27.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({regY:26.9,scaleY:1.18,y:81.8},6,cjs.Ease.get(-1)).to({scaleY:1,y:81.6},3,cjs.Ease.get(1)).wait(58).to({scaleY:1.18,y:81.8},3,cjs.Ease.get(1)).to({regY:27.1,scaleY:0.14,y:80.7},7,cjs.Ease.get(-1)).wait(1).to({_off:true},1).wait(272));

	// 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(554.5,80.2,1,0.142,0,0,0,100.7,18.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(137).to({_off:false},0).to({regY:18.1,scaleY:1.18,y:78.1},6,cjs.Ease.get(-1)).to({scaleY:1,y:78.5},3,cjs.Ease.get(1)).wait(100).to({scaleY:1.18,y:78.1},3,cjs.Ease.get(1)).to({regY:18.3,scaleY:0.14,y:80.2},7,cjs.Ease.get(-1)).to({_off:true},1).wait(143));

	// 22
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(552.4,80.4,1,0.142,0,0,0,109.8,27.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131).to({_off:false},0).to({regY:27.2,scaleY:1.18,y:79.7},6,cjs.Ease.get(-1)).to({scaleY:1,y:79.8},3,cjs.Ease.get(1)).wait(111).to({scaleY:1.18,y:79.7},3,cjs.Ease.get(1)).to({regY:27.4,scaleY:0.14,y:80.4},7,cjs.Ease.get(-1)).to({_off:true},1).wait(138));

	// 3
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(552.8,80.4,1,0.142,0,0,0,99,20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(269).to({_off:false},0).to({regY:19.9,scaleY:1.18,y:79.8},6,cjs.Ease.get(-1)).to({scaleY:1,y:79.9},3,cjs.Ease.get(1)).wait(105).to({scaleY:1.18,y:79.8},3,cjs.Ease.get(1)).to({regY:20,scaleY:0.14,y:80.4},7,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// 33
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(552.9,80.4,1,0.142,0,0,0,109.9,27.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(263).to({_off:false},0).to({regY:27.2,scaleY:1.18,y:79.5},6,cjs.Ease.get(-1)).to({scaleY:1,y:79.6},3,cjs.Ease.get(1)).wait(117).to({scaleY:1.18,y:79.5},3,cjs.Ease.get(1)).to({regY:27.1,scaleY:0.14,y:80.4},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69,54.7,229.5,54);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(12.5,13,1,1,0,0,0,12.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1.14,skewX:-34.3,skewY:-14.3,x:19.6,y:12.6},13,cjs.Ease.get(-1)).to({regY:13.1,scaleX:1.01,scaleY:1.29,skewX:-68.6,skewY:-28.6,x:26.6,y:12.2},13,cjs.Ease.get(1)).to({regX:12.4,regY:13.2,scaleX:1,scaleY:1.14,skewX:-34.3,skewY:-14.3,x:19.6,y:12.8},14,cjs.Ease.get(-1)).to({regX:12.5,regY:13,scaleX:1,scaleY:1,skewX:0,skewY:0,x:12.5,y:13},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,26);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(25.2,22.8,1,1,-22.2,0,0,23.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:23.6,regY:20.9,rotation:-0.1,x:23.6,y:20.2},6,cjs.Ease.get(-1)).to({regY:21,rotation:21.7,x:21.9,y:17.5},6,cjs.Ease.get(1)).to({regY:21.1,rotation:-0.1,x:23.6,y:20.3},6,cjs.Ease.get(-1)).to({regX:23.5,regY:21,rotation:-22.2,x:25.2,y:22.8},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-5.5,59.4,56.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(41.8,114.7,0.273,0.273,0,0,0,40,39.6);
	this.instance.alpha = 0.43;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(5.4,93.2,0.273,0.273,0,0,0,40,39.6);
	this.instance_1.alpha = 0.43;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(17.8,71.6,0.273,0.273,0,0,0,40,39.6);
	this.instance_2.alpha = 0.43;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(5.4,31.1,0.273,0.273,0,0,0,40,39.6);
	this.instance_3.alpha = 0.43;
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(38.1,50.1,0.273,0.273,0,0,0,40,39.6);
	this.instance_4.alpha = 0.43;
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.Символ25();
	this.instance_5.setTransform(17.8,43.3,0.273,0.273,0,0,0,40,39.6);
	this.instance_5.alpha = 0.43;
	this.instance_5.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:38.1,y:50.1}},{t:this.instance_3,p:{x:5.4,y:31.1}},{t:this.instance_2,p:{x:17.8,y:71.6}},{t:this.instance_1,p:{x:5.4,y:93.2}},{t:this.instance,p:{x:41.8,y:114.7}}]}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{x:-3.7,y:19.6}},{t:this.instance_3,p:{x:-1.7,y:71.6}},{t:this.instance_2,p:{x:34.1,y:62.9}},{t:this.instance_1,p:{x:21.8,y:103.2}},{t:this.instance,p:{x:61.9,y:122.7}}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,20.3,58,105.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(94.5,66.6,1,1,0,0,0,39.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.xma();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,190);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 22
	this.instance = new lib.Символ22();
	this.instance.setTransform(56.5,-14.5,1,1,0,0,0,13,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:152},19).to({_off:true},1).wait(15));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(18,21.5,1,1,0,0,0,13,14.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:188},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.5,-29,26,29);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABdEuIADgSQACgPgCgIQgIgNAAgIQgBgFAEgIQAGgKAFgFQAIgHAWgDQAcgDAMACIARAEQALAAACgIQADgEgDgGQgDgFgGgDQgOgFgGgEIgNgLQgGgFgPgHIhJgiQgQgGgeAAIgIABIAAhbIEEAAIAAEdgAkPEuIAAkdIEEAAIAABgIgIACIgQAIIggAXIgXAQQgcAWgXAvQgCAHgGAGIgKAKQgGAJABARIAAAWgAAMgQIAAkdIEEAAIAAEdgAkPgQIAAkdIEEAAIAAEdgAiohtQgDADgBAIIABALQAAAKgDAIQgKACgFAIQgDAEACAFQAAAFAEADQADACAHACQAEABAJAIQAIAFAFABIAHABIAHACIARABQAJAAADgCIAJgGQARgPACgOIABgKIACgJIADgYQAAgLgDgDQgDgFgHAAQgEgBgGADIgPAJQgEAGgHAOQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgEABIgFgBQgDgCgDgIQgEgLgGgFQgFgDgEAAQgFAAgEADg");
	mask.setTransform(40.9,123.3);

	// Символ 21
	this.instance = new lib.Символ21();
	this.instance.setTransform(20.4,49,1,1,0,0,0,13,14.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dom_10.png
	this.instance_1 = new lib.dom_10();
	this.instance_1.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,76,82,101);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(100,95,1,1,0,0,0,100,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,190);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(12.5,204,1,1,0,0,0,12.5,13);

	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(69.5,163,1,1,0,0,0,23.5,21);

	this.instance_2 = new lib.dom_12();
	this.instance_2.setTransform(0,138);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,136.5,100.9,80.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(94.4,23.1,1,1,0,0,0,95.4,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(94.2,24.6,1,1,0,0,0,108.5,50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-26,217,101.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(127,255.4,1,1,0,0,0,127,256.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:188.2},399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.1,254,580);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1_1();
	this.instance.setTransform(110.6,17,1,1,0,0,0,89.4,8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxQC9IAAl6MAihAAAIAAF6g");
	this.shape.setTransform(110.5,19);

	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(110.6,17,1,1,0,0,0,89.4,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8442E").s().p("AxQC9IAAl6MAihAAAIAAF6g");
	this.shape_1.setTransform(110.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,38);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 19
	this.instance = new lib.Символ19();
	this.instance.setTransform(124,-45.5,1,1,0,0,0,25,24.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:258},14,cjs.Ease.get(1)).wait(84).to({x:72},11,cjs.Ease.get(-1)).to({_off:true},1).wait(276));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(356,-347.5,1,1,0,0,0,107,108.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({y:-15.5},14,cjs.Ease.get(-1)).to({y:-21.5},2).to({y:-15.5},2).wait(53).to({x:150},11,cjs.Ease.get(-1)).to({_off:true},4).wait(279));

	// Символ 17
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(26.1,59,1,1,0,0,0,61,61);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({x:263},14,cjs.Ease.get(1)).wait(84).to({x:57},11,cjs.Ease.get(-1)).to({_off:true},4).wait(279));

	// Символ 16
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(118.5,94,1,1,0,0,0,42.5,26);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({x:400.5,y:97},14,cjs.Ease.get(1)).wait(70).to({x:513.5,y:94},11,cjs.Ease.get(-1)).to({_off:true},1).wait(279));

	// Символ 18
	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(591,25,1,1,0,0,0,100,95);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({x:390},14,cjs.Ease.get(1)).wait(82).to({x:122.4},11,cjs.Ease.get(-1)).to({_off:true},1).wait(275));

	// Символ 20
	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(667,-53.4,1,1,0,0,0,41,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:405},14,cjs.Ease.get(1)).wait(94).to({x:533},11,cjs.Ease.get(-1)).to({_off:true},2).wait(279));

	// Режим изоляции
	this.instance_6 = new lib.Символ34();
	this.instance_6.setTransform(68.8,146,1,1,0,0,0,121.3,37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:324.8},7,cjs.Ease.get(1)).wait(111).to({y:245},11,cjs.Ease.get(-1)).to({_off:true},1).wait(270));

	// Слой 10
	this.instance_7 = new lib.Символ35();
	this.instance_7.setTransform(400.5,30.5,1,1,0,0,0,232.5,130.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(139).to({_off:false},0).to({alpha:1},20,cjs.Ease.get(1)).wait(80).to({alpha:0},10).to({_off:true},1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-136.4,760.5,319.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 42
	this.instance = new lib.Символ42();
	this.instance.setTransform(322,-263.9,1,1,0,0,0,66,39);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284).to({_off:false},0).to({x:164},15,cjs.Ease.get(1)).wait(85).to({x:309},10,cjs.Ease.get(-1)).wait(6));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(116.5,46.1,1,1,0,0,0,116.5,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(275).to({x:113.5},0).to({x:115.5,y:-167.8},15,cjs.Ease.get(1)).wait(99).to({y:14.1},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-4.6,262,245);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(110.4,17.8,1,1,0,0,0,92.4,14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604B3B").s().p("AxQC9IAAl6MAihAAAIAAF6g");
	this.shape.setTransform(110.5,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8442E").s().p("AxQC9IAAl6MAihAAAIAAF6g");
	this.shape_1.setTransform(110.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,38);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(110.5,19,1,1,0,0,0,110.5,19);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,38);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(110.5,19,1,1,0,0,0,110.5,19);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,38);


(lib.Символ3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(110.5,19,1,1,0,0,0,110.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,x:110.6,y:19.1},19,cjs.Ease.get(-1)).to({regY:18.9,scaleX:0.93,scaleY:0.93,y:19},20,cjs.Ease.get(1)).to({regY:19,scaleX:0.96,scaleY:0.96},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:110.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,38);


(lib.Символ2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(110.5,19,1,1,0,0,0,110.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,x:110.6,y:19.1},19,cjs.Ease.get(-1)).to({regY:19.1,scaleX:0.94,scaleY:0.94,y:19.2},20,cjs.Ease.get(1)).to({regX:110.6,scaleX:0.97,scaleY:0.97,y:19.1},20,cjs.Ease.get(-1)).to({regX:110.5,regY:19,scaleX:1,scaleY:1,x:110.5,y:19},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,38);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ3_1();
	this.instance.setTransform(110.5,19,1,1,0,0,0,110.5,19);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({alpha:1},5).wait(122).to({alpha:0},5).to({_off:true},1).wait(128));

	// Слой 1
	this.instance_1 = new lib.Символ2_1();
	this.instance_1.setTransform(110.5,99,1,1,0,0,0,110.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:19},10,cjs.Ease.get(1)).wait(125).to({alpha:0},5).to({_off:true},1).wait(121).to({_off:false},0).to({alpha:1},5).wait(123).to({y:89},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,80,221,38);


// stage content:



(lib._240400mail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 38
	this.instance = new lib.Символ38();
	this.instance.setTransform(120,373.9,1,1,0,0,0,110.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 13
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(86.1,50.4,0.728,0.728,0,0,0,105.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(123.5,510.7,1,1,0,0,0,116.5,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 9
	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(171.7,150.8,1,1,0,0,0,613.6,118.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 11
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(-98,322.9,1,1,0,0,0,105,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 13
	this.instance_5 = new lib.Символ13();
	this.instance_5.setTransform(120.6,243.5,0.949,0.949,0,0,0,127,256.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.9,198.9,877.9,706.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;