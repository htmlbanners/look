(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 400,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bike.jpg", id:"bike"},
		{src:"images/hvost.png", id:"hvost"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/tre.png", id:"tre"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bike = function() {
	this.initialize(img.bike);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,600);


(lib.hvost = function() {
	this.initialize(img.hvost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,26);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,35);


(lib.tre = function() {
	this.initialize(img.tre);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,4);


(lib.si23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,1.044,1.044);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.9,36.6);


(lib.si20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUBIIAAg+IgpA+IgcAAIAAhtIAeAAIAAA8IApg8IAcAAIAABtgAgQgxQgHgHgCgLIAQgDQACAEADACQACADACAAQAFAAADgDQACgCACgEIAQADQgCALgHAHQgHAFgMABQgJgBgHgFg");
	this.shape.setTransform(111.8,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUA3IAAg8IgpA8IgcAAIAAhtIAeAAIAAA8IApg8IAcAAIAABtg");
	this.shape_1.setTransform(99.8,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaBBIAAgVIhQAAIAAhtIAeAAIAABSIAkAAIAAhSIAfAAIAABSIAMAAIgDAwg");
	this.shape_2.setTransform(88.1,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUA3IAAg8IgpA8IgcAAIAAhtIAeAAIAAA8IApg8IAcAAIAABtg");
	this.shape_3.setTransform(75.6,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOA3IAAhSIghAAIAAgbIBfAAIAAAbIghAAIAABSg");
	this.shape_4.setTransform(64.4,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAxQgNgHgIgNQgHgMAAgRQAAgPAHgNQAIgNANgHQANgHAPgBQAQABALAGQAMAHAHAKIgXARQgEgGgGgDQgGgEgIAAQgFAAgGAEQgGAEgDAHQgEAGAAAHQAAAIAEAGQADAHAGAEQAGAEAFAAQAJAAAGgEQAFgDAFgHIAXARQgFAHgHAFQgGAHgJACQgKAEgMAAQgOAAgMgIg");
	this.shape_5.setTransform(53.6,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgrA3IAAhtIBWAAIAAAaIg4AAIAAARIAzAAIAAAWIgzAAIAAASIA5AAIAAAag");
	this.shape_6.setTransform(42.7,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwA3IAAhtIA3AAQAKAAAIADQAHACAFAFQADADACAFQACAEAAAGQAAAKgFAGQgFAGgHADQAKABAGAGQAGAHAAALQAAAOgLAJQgLAHgUABgAgSAeIAWAAQAHAAADgCQAEgDAAgFQAAgFgDgCQgEgDgIAAIgVAAgAgSgKIASAAQAGABAEgDQAEgDAAgFQAAgEgEgDQgDgCgHAAIgSAAg");
	this.shape_7.setTransform(32,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATA3IAAgqIglAAIAAAqIgeAAIAAhtIAeAAIAAAqIAlAAIAAgqIAfAAIAABtg");
	this.shape_8.setTransform(20.1,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUA3IAAg8IgpA8IgcAAIAAhtIAeAAIAAA8IApg8IAcAAIAABtg");
	this.shape_9.setTransform(8.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,22);


(lib.si19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAmA8QgDAAgBgCIgigzIghAzQgCACgDAAIgEAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBIAng5Igmg3QgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIADAAIADAAIADAAIADADIAgAyIAhgyIADgDIADAAIADAAIADAAIgCAEIgmA3IAnA5QAAABAAAAQABABAAAAQgBABAAAAQAAAAgBAAg");
	this.shape.setTransform(112.7,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAuA8QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAhyQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAEAAIACABIABACIAAByQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAgAgxA8IgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhyQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIAEAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABIAAArIAhAAQAIAAAFADQAGADAFAFQAGADACAHQADAHAAAIQAAAHgDAIQgDAHgFAFQgFAFgHADQgFACgIAAgAgqAzIAgAAQAGAAAEgCIAJgGIAGgJQACgGAAgFQAAgGgCgFIgGgJIgJgFQgEgBgGAAIggAAg");
	this.shape_1.setTransform(100.9,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqA8QAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAg3IhPAAIAAA3QAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgDAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAhyIABgCIACgBIADAAIADABIAAACIAAA0IBPAAIAAg0IAAgCIACgBIAEAAIACABIABACIAAByQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAg");
	this.shape_2.setTransform(88.1,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkA8IAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhxQAAgBAAgBQABAAAAgBQAAAAABAAQABAAAAAAIAEAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAAArIAfAAQAIAAAHADQAHADAFAFQAFADADAHQADAHAAAHQAAAIgDAHQgDAHgFAFQgFAFgHADQgHADgIAAgAgdAzIAfAAQAGAAAFgCIAJgGIAGgJQACgGAAgGQAAgFgCgGQgCgFgEgEQgEgCgFgCQgFgCgGAAIgfAAg");
	this.shape_3.setTransform(76.8,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyA8IgBgEIAAgCIABgCIADgBIAGgCIAEgEIADgFIABgFIAAhbIABgDIADgBIBNAAIADABIABADIAABwQAAAEgEAAIgCAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAhqIhBAAIAABVQAAAEgCAFQgCAFgDADQgDADgFACQgEADgFABIgDgBg");
	this.shape_4.setTransform(65.2,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAtA8QgEAAAAgEIAAhkIhRBnIgDABIgDAAIgDgBIgBgDIAAhwIABgDIADAAIACAAIADABIABACIAABlIBRhnIADgBIACAAIADABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAIAABwQgBAEgEAAg");
	this.shape_5.setTransform(53.5,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoA8IgDgBIgBgDIAAhwIABgCIADgBIAuAAQAGAAAGACQAGACAEAFQAEAEADAGQADAFAAAHQgBAIgEAHQgDAHgGAFQAFABADACIAHAGIAEAJQABAEAAAGQAAAGgCAGQgDAHgEAEQgEAFgGADQgGACgHAAgAgjAzIAvAAQAFAAAEgCQAEgCADgDQADgDACgFQACgEAAgFQAAgFgCgEQgBgFgDgDQgEgDgEgBQgEgCgFAAIgvAAgAgjgDIApAAQAEAAAFgCQAEgCADgEIAEgIQACgEAAgFQAAgFgCgEQgBgEgDgDQgDgDgEgCIgJgBIgpAAg");
	this.shape_6.setTransform(41.7,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAwA8IgDgBIgCgCIgLgbIg/AAIgLAaQgBAEgEAAIgCAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIABgCIAvhwIACgCIACgBIABAAIACAAIABABIABACIAAABIAwBwIAAABIgBACIgCAAgAgbAVIA3AAIgchDg");
	this.shape_7.setTransform(29.9,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjA8QgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAhyQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAAAAIAmAAQAIAAAGADQAIADAEAFQAGAFADAHQADAHAAAIQAAAHgDAHQgDAHgFADQgGAFgGAEQgHADgIgBIgfAAIAAAsQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAgAgdAFIAfAAQAFAAAGgCQAFgDAEgCQADgDADgGQACgEAAgGQAAgGgCgFIgGgJQgEgFgFgBQgFgDgGAAIgfAAg");
	this.shape_8.setTransform(19,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkA8QAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhrIhBAAIAABrQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgCAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhxIAAgCIADgBIBNAAIACAAIABADIAABxQAAADgDAAg");
	this.shape_9.setTransform(8,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.1,26.1);


(lib.si18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATA0IAAg5IgnA5IgbAAIAAhnIAdAAIAAA5IAng5IAbAAIAABng");
	this.shape.setTransform(85.7,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATA0IAAg5IgnA5IgbAAIAAhnIAdAAIAAA5IAng5IAbAAIAABng");
	this.shape_1.setTransform(74.2,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZA+IAAgUIhMAAIAAhoIAdAAIAABOIAiAAIAAhOIAdAAIAABOIALAAIgDAug");
	this.shape_2.setTransform(63.1,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATA0IAAg5IgnA5IgbAAIAAhnIAdAAIAAA5IAng5IAbAAIAABng");
	this.shape_3.setTransform(51.1,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAcA+IAAgUIg2AAIgCAUIgaAAIAAguIAJAAIAFgPIADgNIACgVIABgaIAAgDIBOAAIAABOIALAAIgDAugAgGgjIgBAVIgDAPIgFAPIAeAAIAAg0IgVAAg");
	this.shape_4.setTransform(39.5,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbA1IgIgTIgmAAIgIATIgeAAIAshoIAaAAIAtBogAALALIgLgcIgLAcIAWAAg");
	this.shape_5.setTransform(27.8,10.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgrA0IAAhnIArAAQANAAAKAEQAKAFAFAIQAGAJAAALQAAAMgGAHQgGAIgKAEQgKAFgMAAIgOAAIAAAegAgOAAIAOAAQAGAAAEgDQAFgDAAgHQAAgHgFgDQgEgEgGAAIgOAAg");
	this.shape_6.setTransform(17.1,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNA0IAAhOIggAAIAAgZIBbAAIAAAZIggAAIAABOg");
	this.shape_7.setTransform(6.8,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,93.8,21);


(lib.si17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgMAZQgDgCgDgDQgDgDgBgDQgBgEAAgFIAAgbIABgDIACAAIAJAAIACAAIABADIAAAZIAAADIACAEIADACIADAAIADAAIADgCIACgDIABgEIAAgaQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAIAAIADAAIAAACIAAAuIAAACIgDABIgGAAIgCgBIgCgCIAAgCIgBgDIgDADIgDADIgEACIgDAAQgFAAgEgBg");
	this.shape.setTransform(225.4,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgPAaIgDgBIgBgCIAAgtIABgCIADgBIAFAAIADABIABACIABACIABADIABgDIACgDIACgCIADAAIAFAAIADABIACABIAEACQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBACIgEAGIgCACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgCgBIgCgBIgCAAIgCAAIgDAAIAAABIgCACIgCADIAAAcIAAACIgDABg");
	this.shape_1.setTransform(220.1,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgCAHIgDgBIgCgDIAAgDIAAgCIACgDIADgCIACAAIADAAIADACIACADIAAACIAAADIgCADIgDABIgDABIgCgBg");
	this.shape_2.setTransform(216,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgDAoQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAhJIABgCIACgBIAHAAIACABIABACIAABJIgBACIgCABg");
	this.shape_3.setTransform(213,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAAAbQgFAAgFgCQgFgCgDgEQgEgEgCgEQgCgFABgGQgBgFACgFQACgFAEgDQADgEAFgCQAEgCAGAAIADABIAFACIADACIACADIAAgCIAAgCIABgBIAAgBIACgBIACAAIAFAAIADABIABACIAAAtIgBACIgDABIgHAAIgCAAIgBgBIAAgBIgBgCIAAAAIAAgBIAAAAIAAgBIgCACIgCADIgFACIgDAAgAgEgLIgDADIgDAEIgBAEIABAFIADAEIADADIAEABIAEgBIAFgDIACgEIABgFIgBgEIgCgEIgFgDIgEgBIgEABg");
	this.shape_4.setTransform(208.2,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgFAkQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAgkIgDAAQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgGQAAgBAAgBQABAAAAgBQAAAAABgBQABAAAAAAIADAAIAAgOIABgCIADgBIAGgBIAAgBIABAAIACABIAAADIAAAPIAHAAIACABIABADIAAAGIgBACIgCABIgHAAIAAAkIgBACIgCABg");
	this.shape_5.setTransform(203.3,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgQAaIgCgBIAAgCIAAgtIABgCIABgBIAHAAIABABIABACIABACIABADIADgDIACgDIAAgCIAFAAIAEAAIACABIAEABIACACQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAACIgEAGIgCACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgBgBIgCgBIgCAAIgCAAIgDAAIAAABIgCACIgCADIAAAcIgBACIgCABg");
	this.shape_6.setTransform(199.4,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAAAbQgFAAgFgCQgFgCgEgEQgDgEgCgEQgBgFgBgGQABgFABgFQACgFADgDQAEgEAFgCQAFgCAFAAIAEABIADACIADACIADADIABgCIAAgCIAAgBIABgBIAAgBIACAAIAGAAIACABIABACIAAAtIgBACIgCABIgHAAIgBAAIgBgBIgBgBIAAgCIAAAAIAAgBIAAAAIgBgBIgCACIgDADIgDACIgEAAgAgDgLIgFADIgCAEIAAAEIAAAFIACAEIAFADIADABIAFgBIADgDIADgEIABgFIgBgEIgDgEIgDgDIgFgBIgDABg");
	this.shape_7.setTransform(193.3,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgDAaIgBAAIgBgBIgBgCIgBgBIgJgWIgEgKIgFgLIAAAAIAAgBIAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAKAAIACABIACACIAJAbIAKgcQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAJAAIADABIAAABIAAABIAAABIgTAsIgBACIgDABg");
	this.shape_8.setTransform(187.7,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAKAoIgCgBIgBgBIgMgUIgEAFIAAAOIAAAAIgBABIgBABIgCABIgJAAIgBgBIgBgBIAAgBIAAAAIAAhJIAAgBIAAgBIABAAIABgBIAJAAIACABIAAAAIABABIABABIAAApIAMgPQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIANAAIABAAIABACIgBAAIAAABIgRAQIAWAcIABABIAAABIgBABIgCABg");
	this.shape_9.setTransform(182.1,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgKAmIgIgGQgDgDgCgFQgCgFAAgGQAAgGACgFQACgDADgEQAEgDAEgCQAFgDAFAAQADAAADACIAFAEIAAgdIABgCIADgBIAIAAIACABIABACIAABIIgBACIgCABIgFAAIgCAAIgBAAIgBgBIgBgCIAAgDIgHAGQgDABgDAAQgFAAgFgCgAgCAAIgEADIgDAFIgBAFIABAFIADAEIAEADIACABIAFgBIAEgDIADgEIABgFIgBgFIgDgFIgEgDIgFAAIgCAAg");
	this.shape_10.setTransform(175.3,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAAAbQgFAAgFgCQgFgCgEgEQgDgEgCgEQgBgFAAgGQAAgFABgFQACgFADgDQAEgEAFgCQAEgCAGAAIADABIAFACIADACIACADIAAgCIAAgCIABgBIAAgBIABgBIADAAIAFAAIADABIABACIAAAtIgBACIgDABIgHAAIgCAAIgBgBIAAgBIgBgCIAAAAIAAgBIAAAAIAAgBIgCACIgCADIgFACIgDAAgAgEgLIgDADIgDAEIgBAEIABAFIADAEIADADIAEABIAEgBIAFgDIACgEIABgFIgBgEIgCgEIgFgDIgEgBIgEABg");
	this.shape_11.setTransform(168.9,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgEAbIgFgCIgFgCIgEgEIgBgCIAAgBIAAgBIABgCIAGgEIAAgBIAAAAIABAAIAAAAIACABIABABIACACIADABIACABIABAAIACAAIACgBIABgBIABgCIgBgCIgCgBIgCgBIgCgBQgIgDgFgCQgEgEAAgGQAAgEABgDIAEgFIAHgDQADgBADAAQALAAAHAJIAAAAIAAABIAAABIgBABIAAABIgBAAIAAAAIgBACIgDACIgCAAIgBAAIgBgBIgCgBIgCgCIgCgBIgCAAIgBABIgCABIgBABIAAABIAAACIACABIACABIABABIABAAIAHADIAGACIAEAEIABAHIgBAHQgCADgDACIgHADIgHABIgEAAg");
	this.shape_12.setTransform(163.6,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgIAZQgFgCgDgEQgEgEgCgFQgCgFAAgFQAAgEACgFQACgFAEgEQADgEAFgCQAFgCADAAQAFAAAFACQAEACADADQAEAFACAEQACAFAAAFIgBABIgDABIgmAAQAAAEACAEIAEAFIAGAFQADABACAAIABAAQAEAAAEgBIAHgGIACAAIABAAIABACIABACIgCACQgDADgFACQgFACgGAAQgDAAgFgCgAgFgTIgGAFQgCACgCADIgCAHIAkAAIgDgHQgBgDgDgCIgGgFQgDgBgDAAQgCAAgDABg");
	this.shape_13.setTransform(154.8,13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAAAaQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgrIgRAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgCQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAlAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAACIgBABIgBABIgRAAIAAArQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_14.setTransform(149.3,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AASAnQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgoIgfApIgBAAIgEAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgwIABgCIABAAIAEAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAmIAfgnIABgBIADAAIACAAIAAACIAAAwQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAgEgaIgDgDIgDgDIgBgEIABgCIABAAIACAAIABAAIABACIAAACIABACIACABIACAAIABAAIADgBIABgCIAAgCIABgCIACAAIABAAIABAAIABACIgBAEIgCADIgEADIgEABIgEgBg");
	this.shape_15.setTransform(143.8,12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgJAZQgFgCgDgEQgDgDgCgFQgCgFAAgGQAAgEACgFQACgFADgEQADgEAFgCQAFgCAEAAIAGABIAGADIAEAEIAEAFIAAgKIAAgBIABgBIACAAIACABIAAABIAAAvIAAACIgCAAIgCAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgJIgEAFIgEAEQgCACgEAAIgGABQgEAAgFgCgAgGgSIgHAEIgDAHQgCAEAAADQAAAEACAEQABAEACADIAHAFIAGABQAEAAADgBIAHgFIAEgHQABgEABgEQgBgDgBgEQgBgEgDgCQgDgDgEgCQgDgCgEAAIgGACg");
	this.shape_16.setTransform(137.3,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgGAZQgFgCgDgEQgEgDgCgGQgCgFAAgFQAAgEACgFQACgFAEgEQADgEAFgCQAFgCAEAAQAFAAAFACIAIAFIABABIAAABIAAABIgBACIgBABIgBAAIgBgBQgDgDgEgBQgEgCgEAAQgDAAgDACQgEABgDADQgDADgBAEQgCAEAAADQAAAEACAEQABAEADADQADADAEACQADABADAAIAEAAIAEgCIAEgCIADgCIACgBIAAAAIABABIABACIABABIAAAAIgCACQgDADgFACQgFACgFAAQgEAAgFgCg");
	this.shape_17.setTransform(131.5,13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgIAZQgFgCgEgEQgEgDgCgFQgCgFAAgGQAAgEACgFQACgFAEgEQAEgEAFgCQAEgCAEAAIAHABIAFADIAFAEIACAFIAAgKIABgBIABgBIADAAIABABIABABIAAAvIgBACIgBAAIgDAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAgJIgCAFIgFAEQgCACgDAAIgHABQgEAAgEgCgAgHgSIgGAEIgDAHQgCAEAAADQAAAEACAEQABAEACADIAGAFIAHABQAEAAAEgBIAGgFIAEgHQACgEgBgEQABgDgCgEQgCgEgCgCQgDgDgDgCQgEgCgEAAIgHACg");
	this.shape_18.setTransform(122,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AASAaQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAgXIgdAAIAAAXQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgvIAAgBIACgBIADAAIABABIABABIAAATIAdAAIAAgTIABgBIACgBIACAAIABABIABABIAAAvQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_19.setTransform(115.8,13.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AASAaQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgoIgfApIgCAAIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgwIAAgCIABAAIADAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAAmIAegnIACgBIAEAAIABAAIAAACIAAAwQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_20.setTransform(106.3,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AASAaQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgoIgfApIgCAAIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgwIAAgCIABAAIADAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAAmIAegnIACgBIAEAAIABAAIAAACIAAAwQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_21.setTransform(100.2,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAVAgQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgLIgqAAIgBgBIgBgBIAAgvQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIADAAIABAAIABACIAAArIAeAAIAAgrIAAgCIABAAIADAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIAAArIAGAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAAAQQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_22.setTransform(93.9,14.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAOAaIgBAAIgBgBIgBgBIAAgBIgPgUIgEACIgFABIAAASQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAgvIABgBIABgBIACAAIACABIAAABIAAAYIAFgBIAEgDIAEgFIACgGIAEgGIAFgDQADgCAEAAIABABIABABIAAACIgBACIgBAAIgBAAIgDABIgDACIgDACIgCAEIgBABIgBACIgCAEIgCADIAUAYIAAABIAAABIgBAAg");
	this.shape_23.setTransform(87.8,13.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgJAZQgFgCgDgEQgDgDgCgFQgCgFAAgGQAAgEACgFQACgFADgEQADgEAFgCQAFgCAEAAIAGABIAGADIAEAEIAEAFIAAgKIAAgBIABgBIACAAIACABIAAABIAAAvIAAACIgCAAIgCAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgJIgEAFIgEAEQgCACgEAAIgGABQgEAAgFgCgAgGgSIgHAEIgDAHQgCAEAAADQAAAEACAEQABAEACADIAHAFIAGABQAEAAADgBIAHgFIAEgHQABgEABgEQgBgDgBgEQgBgEgDgCQgDgDgEgCQgDgCgEAAIgGACg");
	this.shape_24.setTransform(81.5,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AASAaQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgoIgfApIgCAAIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgwIAAgCIABAAIADAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAAmIAegnIACgBIAEAAIABAAIAAACIAAAwQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_25.setTransform(72.1,13.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAAAaQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgrIgSAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgCQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAnAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAACIAAABIgBABIgRAAIAAArQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_26.setTransform(66.5,13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgGAZQgFgCgDgEQgEgDgCgGQgCgFAAgFQAAgEACgFQACgFAEgEQADgEAFgCQAFgCAEAAQAFAAAFACIAIAFIABABIAAABIAAABIgBACIgBABIgBAAIgBgBQgDgDgEgBQgEgCgEAAQgDAAgDACQgEABgDADQgDADgBAEQgCAEAAADQAAAEACAEQABAEADADQADADAEACQADABADAAIAEAAIAEgCIAEgCIADgCIACgBIAAAAIABABIABACIABABIAAAAIgCACQgDADgFACQgFACgFAAQgEAAgFgCg");
	this.shape_27.setTransform(61.3,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgJAZQgFgCgEgEQgDgEgCgFQgCgFAAgFQAAgEACgFQACgGADgDQAEgEAFgCQAFgCAEAAQAFAAAFACQAFACAEAEQADADACAGQACAFAAAEQAAAFgCAFQgCAFgDAEQgEAEgFACQgFACgFAAQgEAAgFgCgAgHgTQgEACgCADQgDADgCAEQgBAEAAADQAAAEABAEQACAEADADQACADAEABQAEACADAAQAEAAAEgCQADgBADgDQADgDACgEQABgEAAgEQAAgDgBgEQgCgEgDgDIgGgFQgEgBgEAAQgDAAgEABg");
	this.shape_28.setTransform(55.4,13.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AASAaQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgXIgeAAIAAAXQgBABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgvIAAgBIACgBIADAAIABABIABABIAAATIAeAAIAAgTIAAgBIACgBIACAAIABABIABABIAAAvQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_29.setTransform(49.3,13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgHAnQgEgBgDgDIgGgHQgCgDgBgFIgCgHIAAgIIAAgFIAAgGIACgNQACgGAEgEQADgFAFgDQAFgCAEAAIAGAAIAFABIAFACIADACIACABIgCADIgBABIAAABIgBgBIgDgBIgEgCIgFgBIgFgBQgDAAgDACQgEADgCADIgEAIQgCAFAAAEIAAAEIAAAEIAEgFIAFgDIAFgCIAEgBIAHABIAGACIAFAEIAEAFQACACABAEIABAHQAAAGgCAFQgCAEgEAEQgDAEgFACQgFADgFAAQgDAAgEgCgAgGgFIgHAFQgCABgCAEQgBAEAAAEIABAIIAEAHQADADAEACQAEACACAAQAEAAAEgCQADgCADgDQADgDABgEIACgIQAAgEgCgEQgBgEgDgBIgGgFIgIgCIgGACg");
	this.shape_30.setTransform(43,12.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgJAZQgFgCgEgEQgDgEgCgFQgCgFAAgFQAAgEACgFQACgGADgDQAEgEAFgCQAFgCAEAAQAFAAAFACQAFACAEAEQADADACAGQACAFAAAEQAAAFgCAFQgCAFgDAEQgEAEgFACQgFACgFAAQgEAAgFgCgAgHgTQgEACgCADQgDADgCAEQgBAEAAADQAAAEABAEQACAEADADQACADAEABQAEACADAAQAEAAAEgCQADgBADgDQADgDACgEQABgEAAgEQAAgDgBgEQgCgEgDgDIgGgFQgEgBgEAAQgDAAgEABg");
	this.shape_31.setTransform(36.6,13.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgWAlIgCAAIAAgCIAAhEQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIACAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAAHIACgDIAEgDIAGgDIAGgBQAFAAAFACQAEACAEAEQADADACAFQACAGAAAFQAAAGgCADQgCAFgDAEQgEAEgEACQgFACgFAAIgFgBIgGgDIgEgEIgDgFIAAAfIgBACIgBAAgAgGgdQgEACgCADQgDADgCAEQgBAEAAAEQAAAFABAEQACACADADIAGAEQADACADAAQADAAAEgCIAGgEIAEgFQACgEAAgFQAAgEgCgEIgEgHQgCgDgEgCQgEgBgDAAQgDAAgDABg");
	this.shape_32.setTransform(30.5,14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgZAgIgCgBIAAgBIAAgOIAAgBIACgBIADAAIAEgGIADgIIADgIIABgPIAAgGIAAgCIACAAIAdAAIABAAIAAACIAAArIAGAAIABAAIAAACIAAAOIAAABIgBAAIgEAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAgKIgrAAIAAAKQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAgFgYIAAAAIAAADIgBANIgBAJIgEAHIgEAGIAfAAIAAgmIgVAAg");
	this.shape_33.setTransform(23.7,14.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgJAZQgFgCgEgEQgDgEgCgFQgCgFAAgFQAAgEACgFQACgGADgDQAEgEAFgCQAFgCAEAAQAFAAAFACQAFACAEAEQADADACAGQACAFAAAEQAAAFgCAFQgCAFgDAEQgEAEgFACQgFACgFAAQgEAAgFgCgAgHgTQgEACgCADQgDADgCAEQgBAEAAADQAAAEABAEQACAEADADQACADAEABQAEACADAAQAEAAAEgCQADgBADgDQADgDACgEQABgEAAgEQAAgDgBgEQgCgEgDgDIgGgFQgEgBgEAAQgDAAgEABg");
	this.shape_34.setTransform(17.2,13.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AAYAoQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAhFIgrAAIAABFQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhJIABgCIABgBIAzAAIABABIABACIAABJQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_35.setTransform(10.5,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,3.6,225.2,17.7);


(lib.si16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiSDAT6MAAAgnzMEkHAAAMAAAAnzg");
	this.shape.setTransform(206.1,127.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-728.7,0,1869.7,255);


(lib.si15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tre();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,4);


(lib.si14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/PSwMAAAglfMA+eAAAMAAAAlfg");
	this.shape.setTransform(200,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,240);


(lib.si10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjA3QgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhnIABgCIADgBIBGAAIACABIABACIAAACIgBACIgCABIhCAAIAAArIA1AAIADAAIABADIAAAAIgBACIgDABIg1AAIAAAsIBEAAIACABIABACIAAACIgBACIgCABg");
	this.shape.setTransform(64.3,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnA3QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgyIhHAAIAAAyQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgDAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAhpIABgBIACgBIADAAIACABIABABIAAAwIBHAAIAAgwIABgBIACgBIADAAIACABIABABIAABpQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(53.3,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA3QgGgCgHgEIgLgIQgGgFgDgGQgEgGgCgHQgCgHgBgHIgQAAIAAAyQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAhpQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAIACABIABABIAAAwIAQAAQABgHADgHIAFgMIAJgLQAGgEAGgEIANgFQAFgCAHAAQAIAAAHADQAIACAGADQAHAEAEAFQAGAFADAHQAEAGACAHQACAIAAAGQAAAIgCAHQgCAHgEAHIgJALQgEAFgHAEQgGAEgIACQgHACgIAAQgHAAgGgCgAAAgtQgFACgFADIgKAHQgFAFgDAFIgEAMQgCAGAAAFQAAAKAEAIQAEAJAGAHQAHAGAJAEQAGAEAKAAQAHAAAGgCIALgFQAGgDAFgEIAHgKIAFgMQACgGgBgGQAAgIgDgJQgEgJgGgGQgIgHgIgEQgJgEgKAAQgGAAgGACg");
	this.shape_2.setTransform(39.9,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AApA3QgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAhcIhJBeIgCABIgEAAIgCgBIgBgCIAAhnIABgCIACgBIACAAIADABIABACIAABcIBJheIACgBIAEAAIACABIABACIAABnQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAg");
	this.shape_3.setTransform(26.1,38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglA3IgBgBIgBgCIAAhnIABgCIABgBIAqAAQAGAAAFACQAGACAEAEIAGAJQACAGAAAGQAAAHgDAHQgDAGgGAFIAIACIAFAGIAFAHIABAJQAAAHgCAFQgDAGgEAEQgEAEgFADQgGACgGAAgAgfAvIAqAAIAIgCIAHgFIAFgHQABgEAAgEQAAgFgBgEQgCgEgDgDIgHgEQgEgBgEAAIgqAAgAgfgDIAkAAQAFAAAEgCQADgBADgEIAEgHQACgEgBgEQABgFgCgDIgEgHQgDgDgDgBQgEgCgFAAIgkAAg");
	this.shape_4.setTransform(10.7,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOA3QgHgCgGgEQgHgEgFgFQgFgFgEgHQgEgGgCgHQgCgHAAgIQAAgGACgIQACgHAEgGQAEgGAFgGQAFgFAHgEQAGgDAHgCQAIgDAGAAQAHAAAIADQAHACAGADQAHAEAFAFQAFAFAEAHIAGANQACAIAAAGQAAAIgCAHIgGAOQgEAGgFAFQgFAFgHAEQgGAEgHACQgIACgHAAQgGAAgIgCgAgLgtQgGACgGADIgKAHQgEAFgDAFIgFAMQgCAGAAAFQAAAKAEAIQAEAJAGAHQAHAGAJAEQAJAEAIAAQAGAAAGgCQAHgCAFgDQAFgDAFgEIAHgKIAFgMQACgGAAgGQAAgIgEgJQgEgJgGgGQgHgHgJgEQgIgEgKAAQgFAAgGACg");
	this.shape_5.setTransform(64.2,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiA3IgDgBIgCgCIgXgbIgUgZIgEACIgFACIgEACIgFAAIAAAvQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgEAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhoQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAEAAIACABIABACIAAAzIAIgBIAHgGIAEgFIAFgFIADgGIAFgGIAAgBIAAgCIAGgIIAHgHQAEgDADgCQAFgCAFAAIACABIABABIAAAEIgBABIgCABQgEAAgEADQgEACgEAFIgIAJIgGAKIgEAGIgDAFIAwA7IABABIgBABIgBAAg");
	this.shape_6.setTransform(53.3,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghA3IAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhnQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIADAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAAnIAdAAQAHAAAGADQAHADAEAEQAFADADAGQACAHAAAHQAAAHgCAGQgDAGgFAFQgEAFgHADQgGACgHAAgAgbAvIAdAAQAFAAAFgCQAFgCADgEQAEgDACgFQACgFAAgFQAAgGgCgEQgCgFgEgEQgDgCgFgBQgFgCgFAAIgdAAg");
	this.shape_7.setTransform(43.2,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AguA2IAAgCIAAgCIAAgDIADgBQADABACgCIAFgDIACgFIABgFIAAhTIABgCIADgBIBGAAIACABIABACIAABnQAAAAAAABQAAABgBAAQAAABgBAAQgBAAAAAAIgCAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAhhIg8AAIAABNQAAAEgCAFQgBAEgEADIgGAFQgEACgFAAIgDgBg");
	this.shape_8.setTransform(32.6,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOA3QgHgCgGgEQgHgEgFgFQgFgFgEgHQgEgGgCgHQgCgHAAgIQAAgGACgIQACgHAEgGQAEgGAFgGQAFgFAHgEQAGgDAHgCQAIgDAGAAQAHAAAIADQAHACAGADQAHAEAFAFQAFAFAEAHIAGANQACAIAAAGQAAAIgCAHIgGAOQgEAGgFAFQgFAFgHAEQgGAEgHACQgIACgHAAQgGAAgIgCgAgLgtQgGACgGADIgKAHQgEAFgDAFIgFAMQgCAGAAAFQAAAKAEAIQAEAJAGAHQAHAGAJAEQAJAEAIAAQAGAAAGgCQAHgCAFgDQAFgDAFgEIAHgKIAFgMQACgGAAgGQAAgIgEgJQgEgJgGgGQgHgHgJgEQgIgEgKAAQgFAAgGACg");
	this.shape_9.setTransform(21,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAA3QAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhiIgiAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgCQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIBLAAIADABIABACIAAACIgBACIgDABIgiAAIAABiQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_10.setTransform(10,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,9.3,69.6,40.7);


(lib.si9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAxQgGgDgDgHQgDgGAAgIQAAgHADgHQADgHAGgDQAHgCAIAAQAIAAAGACQAGADAEAHQADAGAAAJQgBAHgDAGQgDAHgHADQgGAFgHAAQgIAAgHgFgAAcARQgCADAAAGQAAAEACAEQADADAEAAQADAAADgDQACgEABgFQgBgFgCgDQgDgEgDAAQgEAAgDAEgAgxA0IBPhnIAUAAIhPBngAgwAAQgGgDgEgHQgDgGAAgJQAAgHADgHQAEgGAGgEQAGgDAIAAQAIAAAHADQAFAEAEAGQADAHAAAIQAAAIgDAGQgEAHgFADQgHACgIAAQgIAAgGgCgAgoghQgCADgBAGQABAFACADQADADADAAQAEABADgEQACgDAAgGQAAgEgCgEQgDgDgEAAQgEAAgCADg");
	this.shape.setTransform(54.5,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAwQgKgEgJgIIARgTQAGAGAHADQAGACAGAAQAFABAFgEQAEgDAAgGQAAgGgFgDQgDgEgGAAQgEAAgFACIgIAEIgRgJIAEg0IBDAAIAAAYIgtAAIgBAQIAIgDIAIgBQAJAAAIADQAIAFAFAHQAFAFABAMQgBALgGAJQgFAIgJAEQgKAFgMAAQgNAAgKgFg");
	this.shape_1.setTransform(42.9,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA0IAAhMIgSAEIgFgXIAcgJIAVAAIAABog");
	this.shape_2.setTransform(34.6,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNA0IAAhNIggAAIAAgaIBaAAIAAAaIgfAAIAABNg");
	this.shape_3.setTransform(22.8,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAuQgMgGgIgNQgHgMAAgPQAAgOAIgMQAHgNANgGQAMgIAPAAQAQAAANAHQAMAIAIAMQAHAMAAAOQAAAPgHAMQgIANgNAGQgMAIgQAAQgPAAgNgIgAgNgXQgFAEgEAGQgDAGAAAHQAAAHADAGQAEAHAGAEQAGAEAGAAQAIAAAGgEQAGgEADgGQADgHAAgHQAAgGgDgHQgDgGgHgEQgGgEgHAAQgHAAgGAEg");
	this.shape_4.setTransform(11.6,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATA0IAAg5IgnA5IgbAAIAAhnIAdAAIAAA5IAng5IAbAAIAABng");
	this.shape_5.setTransform(67.1,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPA0IgYgnIgLAMIAAAbIgdAAIAAhnIAdAAIAAArIAigrIAjAAIgoAtIApA6g");
	this.shape_6.setTransform(56.4,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAcA/IAAgWIg2AAIgCAWIgaAAIAAgvIAJAAIAFgOIADgPIACgUIABgaIAAgCIBOAAIAABNIALAAIgDAvgAgGgjIgBAVIgDAPIgFAPIAeAAIAAg0IgVAAg");
	this.shape_7.setTransform(44.5,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATA0IAAg5IgnA5IgbAAIAAhnIAdAAIAAA5IAng5IAbAAIAABng");
	this.shape_8.setTransform(33.1,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAPA0IgZgnIgKAMIAAAbIgdAAIAAhnIAdAAIAAArIAigrIAjAAIgoAtIApA6g");
	this.shape_9.setTransform(22.4,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWAvQgMgHgIgMQgGgNgBgPQABgOAGgMQAIgMAMgIQANgHAOAAQAPAAALAGQALAGAHAKIgWAQQgEgFgGgEQgFgCgHAAQgGAAgGADQgFAEgEAGQgDAGAAAHQAAAIADAGQAEAGAFAEQAGADAGAAQAHAAAGgDQAGgDAEgGIAWAPQgFAHgGAGQgHAFgIADQgJADgLAAQgOAAgMgHg");
	this.shape_10.setTransform(11,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,-0.8,71.6,38);


(lib.si7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYA3QgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgkIgWAAIgRAlQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgSAAIgCAAIgBgDIAAAAIAAAAIATgoIgIgGQgDgDgCgDIgEgIIgBgKQAAgHACgHQADgGAFgFQAFgFAHgDQAGgDAIAAIAsAAQACAAAAAEIAABmIgBADIgBAAgAgKggIgEADIgEAGQgBACAAADIABAGIADAFIAFAEIAHABIAYAAIAAggIgYAAQgEAAgDACg");
	this.shape.setTransform(85.5,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdA3QAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhIIgyBJIgBACIgCAAIgQAAQgEAAAAgDIAAhnQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIACgBIAPAAIACAAIABACIAABEIAwhEIACgCIACAAIARAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABACIAABnQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_1.setTransform(74.7,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfBGQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAgaIhIAAIgDgBIgBgCIAAhnIABgCIADgBIAOAAIACABIABACIAABXIArAAIAAhXIABgCIACgBIAOAAIADABIABACIAABXIAIAAIADABIABADIAAApQAAABAAABQgBABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_2.setTransform(63.1,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeA3QgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhIIgyBJIgBACIgCAAIgQAAQgEAAAAgDIAAhnQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAPAAIACAAIACACIAABEIAuhEIACgCIADAAIASAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABACIAABnQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAg");
	this.shape_3.setTransform(51,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAlBFQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgYIhEAAIAAAYQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgOAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgpQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAJAAIAHgOIAFgLIADgQIACgTIAAgNIAAgNQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIA9AAIACACIABABIAABXIAJAAIACABIABACIAAApQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAgAgFgdQgBANgDAOQgDALgGANIAmAAIAAhFIgYAAIgBASg");
	this.shape_4.setTransform(38.9,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAiA3IgCAAIgBgCIgIgSIgtAAIgIASQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIgQAAIgDAAIAAgDIALgaIAghOIACgBIADgBIAHAAIACABIACABIAsBoIAAAAIgBACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAgAgOAPIAdAAIgPglg");
	this.shape_5.setTransform(27.4,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjA3IgDgBIgBgDIAAhlIABgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAoAAQAIAAAHADQAGADAFAFQAEAFADAGQACAHAAAHQAAAHgCAGQgDAFgEAEQgFAFgGADQgHADgIAAIgWAAIAAAkQAAAEgEAAgAgRgCIATAAIAGgBIAFgEIADgFIACgGIgCgGIgDgGIgFgDQgDgCgDAAIgTAAg");
	this.shape_6.setTransform(17.1,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA3IgBAAIgBgBIgBgBIAAgCIAAhVIgcAAIgDgBIgBgDIAAgNIABgCIADgBIBLAAIACABIABACIAAANIgBADIgCABIgbAAIAABVIgBACIAAABIgBABIgCAAg");
	this.shape_7.setTransform(6.6,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.1,23.9);


(lib.si6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA3QgHgCgGgEQgHgEgFgFQgFgFgEgGQgEgHgCgHQgCgIAAgHQAAgGACgIQACgHAEgGQAEgHAFgFQAFgFAHgEQAGgEAHgCQAGgCAIAAQALAAALAFIAHADIAGAFQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgCADIgCABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgHgFgHgCQgHgDgIAAQgHAAgEACIgMAFIgKAIIgHAJQgEAGgBAGQgCAGAAAFQAAAGACAGIAFAMIAIAKIAJAIIAMAFQAEACAGAAIAIgBIAIgCIAIgEIAHgFIACAAIACACIACABIAAADIgBACIgHAEIgGADQgLAFgMAAQgHAAgGgCg");
	this.shape.setTransform(42.1,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAsA3IgDgBIgCgCIgKgYIg6AAIgJAXQgCAEgDAAIgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgBIAshnIABgCIACgBIABAAIABAAIABABIABACIABABIArBmIAAABIAAACIgCAAgAgZATIAzAAIgag9g");
	this.shape_1.setTransform(31.3,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnA3QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgyIhHAAIAAAyQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgDAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAhpIABgBIACgBIADAAIACABIABABIAAAwIBHAAIAAgwIABgBIACgBIADAAIACABIABABIAABpQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_2.setTransform(20.1,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA3IgBgCIAAgFIABgBIACgBQAGAAADgDQADgCADgHIAHgQIgPgiIgOgkIAAAAIgBgBIABgBIABAAIACAAIACAAIACAAIACABIAMAfIALAdIAYg8IACgBIADAAIADAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIgBAEIgCADIgIAVIgJAWIgJATIgGATIgDAIIgFAHQgDADgDABQgEABgGAAIgCAAg");
	this.shape_3.setTransform(5.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,23.9);


(lib.si5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAASIAAAAIgDgDIgBgCIABgCIABgBIABgCIAAgDIgEgCIgDgCIgCgCIgBgEIABgFIACgEIAFgDIADgBIAFABIADADIADAEIABAGQAAAEgCAFIgDAIIgDAEIgEACIAAgBg");
	this.shape.setTransform(85.7,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiA3IgEgBIgBgDIAAhlIABgDIADgBIAOAAQAFAAAAAEIAAAkIAVAAQAIAAAHADQAGADAEAFQAFADADAGQACAGAAAHQAAAHgCAHQgDAGgFAFQgFAFgFADQgHADgIAAgAgQAkIASAAQADAAAEgCIAEgDIAEgGQABgCAAgEIgBgGIgEgFQgCgCgCgBQgEgCgDAAIgSAAg");
	this.shape_1.setTransform(79.4,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5A3IgDgBIgBgCIAAhnIABgCIADgBIAOAAIADABIABACIAABXIAeAAIAAhXIAAgCIADgBIANAAIACABIABACIAABXIAeAAIAAhXIABgCIACgBIAPAAIACABIABACIAAAzIAAA0QAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_2.setTransform(66.8,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOA3QgHgCgGgEQgHgEgFgFQgGgFgDgGQgEgHgCgHQgCgHAAgIQAAgGACgIQACgHAEgGQADgHAGgFQAFgFAHgEQAGgEAHgCQAHgCAHAAQAHAAAIACQAHACAGAEQAGAEAGAFQAFAFAEAHQADAGADAHQACAIAAAGQAAAIgCAHQgDAHgDAHIgJALIgMAJQgGAEgHACQgIACgHAAQgHAAgHgCgAgNggQgGADgFAFQgFAFgCAGQgCAHgBAGQABAHACAHQACAHAFAEQAFAFAGADQAHADAGAAQAHAAAGgDQAGgDAGgFQAEgEACgHQADgHAAgHQAAgGgDgHQgCgGgEgFQgGgFgGgDQgGgDgHAAQgGAAgHADg");
	this.shape_3.setTransform(53,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYA3IgCAAIgBgBIgCgCIgBgCIgfgoIgGADIgHABIAAAmQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgPAAQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhnIABgCIACgBIAPAAIACABIABACIAAAsQADAAAEgDQAFgDADgFIACgDIACgDIACgDIACgCIAFgKIAIgIQAEgEAFgBQAGgCAHAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAIAAAOIgBACIgCABQgEAAgFADIgJAJIgEAGIgEAGIgEAFIgCAEIAvA3IAAABIABABIgCAAg");
	this.shape_4.setTransform(41,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCA3QgHgCgHgEQgGgEgFgFQgGgFgDgGQgEgHgCgHQgCgHAAgIQAAgGACgIQACgHAEgGQADgHAGgFQAFgFAGgEQAHgEAHgCQAFgCAIAAQAJAAAIADQAIACAHAFIACACIAAADIgHAMIgDACIgCgBIgKgFQgGgCgGAAQgIAAgEADQgGADgFAFQgFAFgCAGQgDAHAAAGQAAAHADAHQACAHAFAFQAFAEAGADQAEADAIAAQAGAAAGgCIAKgFIADgBIACACIAHAMIAAADIgCACQgGAFgJACQgIADgJAAQgIAAgFgCg");
	this.shape_5.setTransform(30,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOA3QgHgCgHgEQgGgEgFgFQgFgFgEgGQgEgHgCgHQgCgHAAgIQAAgGACgIQACgHAEgGQAEgHAFgFQAFgFAGgEQAHgEAHgCQAIgCAGAAQAIAAAGACQAIACAHAEQAFAEAGAFQAFAFAEAHQADAGADAHQACAIAAAGQAAAIgCAHQgDAHgDAHIgJALIgLAJQgHAEgIACQgGACgIAAQgGAAgIgCgAgNggQgGADgFAFQgEAFgDAGQgCAHAAAGQAAAHACAHQADAHAEAEQAFAFAGADQAGADAHAAQAHAAAGgDQAHgDAEgFQAFgEADgHQACgHAAgHQAAgGgCgHQgDgGgFgFQgEgFgHgDQgGgDgHAAQgHAAgGADg");
	this.shape_6.setTransform(18.4,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjA3IgDgBIgBgDIAAhlIABgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAnAAQAIAAAHADQAFADAFAFQAFAFADAGQACAHAAAHQAAAHgCAGQgDAFgFAEQgEAFgGADQgHADgIAAIgVAAIAAAkQAAAEgFAAgAgQgCIASAAIAHgBIAEgEIAEgFIABgGIgBgGIgEgGIgEgDQgEgCgDAAIgSAAg");
	this.shape_7.setTransform(7.4,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,23.9);


(lib.si4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAjA3QgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIgfguIgeAuQgBACgDAAIgEAAQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABgBIAkg0IgjgyIgCgDQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABAAIADAAIADABIACACIAdAtIAegtIADgCIADgBIADAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIgBADIgkAyIAkA0QABABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(128.3,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AApA3QgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhcIhLBeIgCABIgDAAIgCgBIgBgCIAAhnIABgCIACgBIACAAIACABIABACIAABcIBLheIABgBIADAAIADABIABACIAABnQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_1.setTransform(118.1,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeA3IgDgBIgBgCIAAhnQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIA+AAIACABIABACIAAACIgBADIgCAAIg5AAIAABiIgBACIgDABg");
	this.shape_2.setTransform(108.3,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA3IgBgCIAAgFIABgBIACgBQAFAAAEgDQADgCADgHIAHgQIgPgiIgOgkIAAAAIgBgBIABgBIABAAIACAAIACAAIACAAIACABIAMAfIALAdIAYg8IACgBIADAAIADAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIgBAEIgCADIgIAVIgJAWIgJATIgGATIgDAIIgFAHQgCADgEABQgEABgGAAIgCAAg");
	this.shape_3.setTransform(99.9,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggA3QgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhoQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIABAAIAiAAQAHAAAGADQAGACAFAFQAFAFACAGQADAGAAAHQAAAIgDAGQgCAGgFADQgEAFgHACQgGADgHAAIgcAAIAAAoQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBAAgAgaAEIAcAAQAFAAAEgCQAFgCAEgBQADgEADgEQACgFAAgGQAAgFgCgFQgDgEgDgEQgEgEgEgCQgFgCgFAAIgcAAg");
	this.shape_4.setTransform(91.5,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAuBGIgDgBIgBgCIAAgaIhUAAIAAAbQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgDAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAghQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAGAAIAIgNIAFgPIAFgTQABgLABgOIAAgaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIA5AAIABABIABABIAABjIAKAAIABABIABABIAAAhIgBACIgBABgAgOgoQAAAOgBALIgFASIgFAQIgHANIA+AAIAAhcIgsAAg");
	this.shape_5.setTransform(80.6,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiA3QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgnIgiAAIgEAAIgDgBIgSApIgCABIgGAAIgBAAIAAgCIAAgBIATgpQgFgCgEgEIgGgFIgEgJQgCgFAAgFQAAgHADgHQACgGAFgFQAFgFAGgCQAHgDAHAAIApAAIACAAIABACIAABpQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAgAgOgsQgFADgEADQgDAEgCAFQgCAEAAAGIABAIIAEAHIAFAEIAIAEIAGABIAGAAIAfAAIAAgzIgjAAQgGAAgEACg");
	this.shape_6.setTransform(65.1,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AguA3IAAgDIAAgCIAAgDIADAAQADgBACgBIAEgDIAEgFIABgGIAAhSIAAgCIACgCIBGAAIADACIABACIAABmQAAABAAABQAAABgBAAQAAABgBAAQgBAAgBAAIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAhhIg8AAIAABNQAAAGgCADQgCAFgDADIgHAFQgEACgEABIgDgBg");
	this.shape_7.setTransform(54.8,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAtBGIgBgBIgBgCIAAgaIhVAAIAAAbQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgEAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAghQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIAGAAIAHgNIAHgPIAEgTQABgLAAgOIAAgaQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIA4AAIACABIABABIAABjIAKAAIACABIABABIAAAhIgBACIgDABgAgOgoQAAAOgCALIgDASIgGAQIgHANIA+AAIAAhcIgsAAg");
	this.shape_8.setTransform(43.7,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOA3QgHgCgGgEQgHgEgFgFQgFgFgEgHQgEgGgCgHQgCgHAAgIQAAgGACgIQACgHAEgGQAEgGAFgGQAFgFAHgEQAGgDAHgCQAIgDAGAAQAHAAAIADQAHACAGADQAHAEAFAFQAFAFAEAHIAGANQACAIAAAGQAAAIgCAHIgGAOQgEAGgFAFQgFAFgHAEQgGAEgHACQgIACgHAAQgGAAgIgCgAgLgtQgGACgGADIgKAHQgEAFgDAFIgFAMQgCAGAAAFQAAAKAEAIQAEAJAGAHQAHAGAJAEQAJAEAIAAQAGAAAGgCQAHgCAFgDQAFgDAFgEIAHgKIAFgMQACgGAAgGQAAgIgEgJQgEgJgGgGQgHgHgJgEQgIgEgKAAQgFAAgGACg");
	this.shape_9.setTransform(27,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAA3QAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhiIgjAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgCQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAIBMAAIACABIABACIAAACIgBACIgCABIgjAAIAABiQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_10.setTransform(16,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcA3IgCAAIgBgDIAAgnIgFAFIgHAEIgIADIgGABQgGAAgGgDQgGgCgEgFQgFgEgCgGQgDgGAAgFIAAguIABgCIACgBIADAAIACAAIABADIAAAwIACAGQACAEAEADQADAEAEABQAEACAFAAQACAAAFgCQAFgBAEgDIAGgHQADgEAAgDIAAgwQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIADAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAABnIgBADIgCAAg");
	this.shape_11.setTransform(6.7,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.1,23.9);


(lib.si3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-36,-14,1.41,1.41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-14,249.5,49.4);


(lib.si1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hvost();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,26);


(lib.sisi8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(114));

	// Символ 18
	this.instance = new lib.si18();
	this.instance.setTransform(-89.3,60,1.796,1.796,0,0,0,46.6,10.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:46.7,x:95.1,alpha:1},17,cjs.Ease.get(1)).wait(140));

	// Символ 19
	this.instance_1 = new lib.si19();
	this.instance_1.setTransform(-90,91.3,1.394,1.394,0,0,0,60,13.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:60.1,x:94.3,alpha:1},17,cjs.Ease.get(1)).wait(134));

	// Символ 20
	this.instance_2 = new lib.si20();
	this.instance_2.setTransform(-89.7,117.4,1.394,1.394,0,0,0,60,11.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({regX:60.1,x:94.6,alpha:1},17,cjs.Ease.get(1)).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.4,41,168.5,37.7);


(lib.si21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.si1();
	this.instance.setTransform(7.7,7.1,0.546,0.546,0,0,0,14,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:14.1,x:8.1,y:9.4},9,cjs.Ease.get(-1)).to({rotation:30,x:8.5,y:11.9},10,cjs.Ease.get(1)).to({regX:14.1,regY:13.1,rotation:14.8,x:8.1,y:9.7},10,cjs.Ease.get(-1)).to({regX:14,regY:13,rotation:0,x:7.7,y:7.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,14.2);


(lib.si11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_131 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(131).call(this.frame_131).wait(1));

	// Слой 3
	this.instance = new lib.si4();
	this.instance.setTransform(-32,19.2,1.08,1.08,0,0,0,67.5,12);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:67.6,x:69.8,alpha:1},17,cjs.Ease.get(1)).wait(99).to({y:32.7,alpha:0},15,cjs.Ease.get(-1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.si5();
	this.instance_1.setTransform(72.5,49.2,0.643,0.643,0,0,0,44.7,12.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:44.6,regY:12.1,scaleX:1.75,scaleY:1.75,x:72.6,y:49.1,alpha:1},14,cjs.Ease.get(1)).wait(83).to({y:62.7,alpha:0},15,cjs.Ease.get(-1)).wait(6));

	// Слой 1
	this.instance_2 = new lib.si6();
	this.instance_2.setTransform(68.7,78,1.584,1.584,0,0,0,24.7,12);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,x:68.8,y:77.9,alpha:1},14,cjs.Ease.get(1)).wait(64).to({y:91.4,alpha:0},15,cjs.Ease.get(-1)).wait(11));

	// Слой 7
	this.instance_3 = new lib.si15();
	this.instance_3.setTransform(36.2,77,0.095,1,0,0,0,19,2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({regX:18.9,scaleX:1.16,x:15.8},15).to({regX:19,scaleX:1,x:19},4).wait(47).to({y:82,alpha:0},11,cjs.Ease.get(-1)).wait(13));

	// Слой 8
	this.instance_4 = new lib.si15();
	this.instance_4.setTransform(102.5,77,0.095,1,180,0,0,19,2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({regX:18.9,scaleX:1.16,x:123},15).to({regX:19,scaleX:1,x:119.7},4).wait(43).to({y:82,alpha:0},12,cjs.Ease.get(-1)).wait(14));

	// Слой 5
	this.instance_5 = new lib.si7();
	this.instance_5.setTransform(72.9,103.7,0.7,0.7,0,0,0,46.6,12.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).to({regX:46.5,scaleX:1.58,scaleY:1.58,x:70.5,y:107.5,alpha:1},14,cjs.Ease.get(1)).wait(31).to({y:121,alpha:0},15,cjs.Ease.get(-1)).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,6.3,145.9,25.8);


(lib.si8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 2
	this.instance = new lib.si10();
	this.instance.setTransform(-106.9,25.7,1.38,1.38,0,0,0,68.8,12);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.69,scaleY:1.69,x:110.2,y:22.9,alpha:1},15,cjs.Ease.get(1)).wait(7));

	// Слой 1
	this.instance_1 = new lib.si9();
	this.instance_1.setTransform(-106.7,92,1.444,1.444,0,0,0,65.8,10.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1.76,scaleY:1.76,x:110.4,y:103.9,alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.3,22,96,56.2);


(lib.si2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.si21();
	this.instance.setTransform(143.3,171.1,1,1,0,0,0,7.7,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bike();
	this.instance_1.setTransform(0,0,0.526,0.526);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,396.3,315.8);


(lib.si13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.si23();
	this.instance.setTransform(94.4,44.3,1,1,0,0,0,92.4,18.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(197).to({alpha:0},12).wait(6));

	// Слой 6
	this.instance_1 = new lib.sisi8();
	this.instance_1.setTransform(61.1,73.1,1.045,1.045,0,0,0,68.9,24.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(151).to({_off:false},0).wait(79).to({alpha:0},12).wait(136));

	// Слой 3
	this.instance_2 = new lib.si8();
	this.instance_2.setTransform(70.6,82.4,1.045,1.045,0,0,0,68.9,24.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(244).to({_off:false},0).wait(104).to({alpha:0},11).wait(19));

	// Слой 4
	this.instance_3 = new lib.si3();
	this.instance_3.setTransform(192,71.9,0.664,0.664,0,0,0,88.6,17.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:88.5,regY:17.4,scaleX:0.88,scaleY:0.88,y:71.8,alpha:1},16).wait(122).to({alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(228));

	// Слой 1
	this.instance_4 = new lib.si11();
	this.instance_4.setTransform(191.3,149.5,1,1,0,0,0,67.5,50.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},131).wait(228));

	// Слой 5
	this.instance_5 = new lib.si16();
	this.instance_5.setTransform(193.4,131.1,1,1,0,0,0,206,127.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(151).to({_off:false},0).to({alpha:0},22).wait(186).to({alpha:1},18).wait(1));

	// Слой 7
	this.instance_6 = new lib.si17();
	this.instance_6.setTransform(131.2,261.2,1,1,0,0,0,135.1,10.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.si8();
	this.instance_7.setTransform(70.6,36.9,1.045,1.045,0,0,0,68.9,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},151).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_7}]},213).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(151).to({_off:false},0).to({y:236.2,alpha:1},13,cjs.Ease.get(1)).to({_off:true},213).wait(1));

	// Слой 2
	this.instance_8 = new lib.si2();
	this.instance_8.setTransform(361,157.8,1,1,0,0,0,198.2,157.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(151).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,x:356.6,y:153.5},226).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.3,50.9,165.6,32.8);


// stage content:



(lib.sad_kvartal_400x240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		
		
		window._setCanvasSize = function() {
			
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = 240 + 'px';
			stage.canvas.width = windowSize.width;
			stage.canvas.height = 240;
			
		    _this.main.x = windowSize.width/2;
		    _this.main.y = 240; 
			
			
			
			
		}
		
		window.onresize=function(){
				_setCanvasSize();
		}
		
		window.onresize();
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.main = new lib.si13();
	this.main.setTransform(199,238.8,1,1,0,0,0,190.8,248.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 2
	this.instance = new lib.si14();
	this.instance.setTransform(200,120,1,1,0,0,0,200,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,120,400,240);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;