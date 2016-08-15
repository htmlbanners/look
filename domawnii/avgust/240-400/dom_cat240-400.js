(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dom_cat240_400_atlas_.png?1471282819206", id:"dom_cat240_400_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"dom_cat240_400_atlas_", frames: [[242,378,159,146],[193,620,42,58],[242,526,159,93],[136,620,55,56],[0,378,240,240],[0,620,134,60],[136,678,50,48],[0,0,416,376]]}
];


// symbols:



(lib.cat_cut_02 = function() {
	this.spriteSheet = ss["dom_cat240_400_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cat_cut_04 = function() {
	this.spriteSheet = ss["dom_cat240_400_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cat_cut_07 = function() {
	this.spriteSheet = ss["dom_cat240_400_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cat_cut_08 = function() {
	this.spriteSheet = ss["dom_cat240_400_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.city = function() {
	this.spriteSheet = ss["dom_cat240_400_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["dom_cat240_400_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pattern = function() {
	this.spriteSheet = ss["dom_cat240_400_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wall = function() {
	this.spriteSheet = ss["dom_cat240_400_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("AgDAoIAAgSQgLgBgGgGQgGgGAAgJQAAgJAGgGQAGgGALgBIAAgRIAHAAIAAARQALABAGAGQAGAGAAAJQAAAJgGAGQgGAGgLABIAAASgAAEANQAGgBAEgEQAEgDAAgFQAAgFgEgEQgDgDgHgBgAgNgJQgDAEAAAFQAAAFADADQAEAEAGABIAAgaQgGAAgEAEg");
	this.shape.setTransform(162.5,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AgTAgIAAg+IAJAAIAAAFQADgDADgBQAEgCACAAQAFAAAEADQAFADACAFQACAFAAAHQAAAHgCADQgCAGgEADQgFADgFAAQgCAAgEgCIgGgEIAAAYgAgIgSQgDAEAAAGQAAAHADACQAEAFAEAAQAFAAADgFQADgCAAgGQAAgHgDgEQgEgFgEAAQgEAAgEAFg");
	this.shape_1.setTransform(157.1,36.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAABQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(153.5,37.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("AAJAfIAAgeIgQAeIgKAAIAAgrIAKAAIAAAbIAQgbIAJAAIAAArgAgGgVQgDgDgCgEIAGgCIACADIADACIADgCQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAGACQgBAEgDADQgEACgDAAQgDAAgDgCg");
	this.shape_3.setTransform(150.1,35.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("AAIAWIAAgcIgQAcIgJAAIAAgrIAJAAIAAAbIAQgbIAKAAIAAArg");
	this.shape_4.setTransform(145.3,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AAIAWIAAgSIgPAAIAAASIgJAAIAAgrIAJAAIAAASIAPAAIAAgSIAKAAIAAArg");
	this.shape_5.setTransform(140.6,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#330000").s().p("AgZAWIAAgrIAJAAIAAAjIAMAAIAAgjIAIAAIAAAjIANAAIAAgjIAJAAIAAArg");
	this.shape_6.setTransform(135,35.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330000").s().p("AgKAVQgEgBgCgEQgCgDAAgDQAAgIAGgCQAFgDAFgBIALAAQAAgKgJAAIgEABIgEAFIgHgEQADgEAEgDQAFgDAEAAQAFAAAEACQAEACACAEQACAFAAAGIAAAZIgGAAIgCgEQgHAFgFAAQgFAAgDgCgAgDACQgFACAAAFQABADACACQACACADAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgDACg");
	this.shape_7.setTransform(129.4,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("AAMAWIAAgbIgLASIgBAAIgLgRIAAAaIgJAAIAAgrIAJAAIALAUIAMgUIAJAAIAAArg");
	this.shape_8.setTransform(124.5,35.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330000").s().p("AgKAUQgFgDgDgGQgCgFgBgGQABgFACgFQADgGAFgDQAFgDAFAAQAHAAAFADQAFADACAGQADAFAAAFQAAAGgDAFQgCAGgFADQgFADgHAAQgFAAgFgDgAgIgJQgDAEAAAFQAAAGADAEQAEAFAEAAQAGAAADgFQADgEAAgGQAAgFgDgEQgDgFgGAAQgEAAgEAFg");
	this.shape_9.setTransform(119.3,35.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#330000").s().p("AAPAbIAAgIIgdAAIAAAIIgKAAIAAgQIAGAAQAGgJAAgLIAAgRIAgAAIAAAlIAFAAIAAAQgAgCgJQAAAJgCADQgCAFgCADIASAAIAAgcIgMAAg");
	this.shape_10.setTransform(113.8,36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s().p("AgDAUQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAAAgBgAgDgKQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_11.setTransform(106.9,36);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#330000").s().p("AgJAUQgFgDgDgGQgDgFAAgGQAAgFADgFQADgGAFgDQAEgDAFAAQAHAAAGAEQAEAEACAFQACAGAAADIAAADIgfAAQAAAFADADQAEADADAAQAEAAADgBQADgCACgCIAHAEQgDAFgFACQgFADgGAAQgFAAgEgDgAgHgLQgDADAAAGIAWAAQgBgGgDgDQgDgDgFAAQgDAAgEADg");
	this.shape_12.setTransform(103.3,35.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330000").s().p("AgDAWIAAgjIgOAAIAAgIIAkAAIAAAIIgPAAIAAAjg");
	this.shape_13.setTransform(98.7,35.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#330000").s().p("AAIAfIAAgeIgQAeIgJAAIAAgrIAJAAIAAAbIAQgbIAKAAIAAArgAgHgVQgDgDgBgEIAGgCIADADIACACIAEgCQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAABgBIAFACQgBAEgDADQgEACgDAAQgDAAgEgCg");
	this.shape_14.setTransform(94.2,35.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330000").s().p("AgKAVQgEgBgCgEQgCgDAAgDQAAgIAGgCQAFgDAFgBIALAAQAAgKgJAAIgEABIgEAFIgHgEQADgEAEgDQAFgDAEAAQAFAAAEACQAEACACAEQACAFAAAGIAAAZIgGAAIgCgEQgHAFgFAAQgFAAgDgCgAgDACQgFACAAAFQABADACACQACACADAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgDACg");
	this.shape_15.setTransform(89.3,35.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("AgIAUQgFgDgCgFQgDgFAAgHQAAgFADgGQACgFAFgDQAFgDAFAAQAFAAAFACQAFADACAEIgIAEQgBgCgDgBQgCgCgDAAQgEAAgDAEQgDAFAAAFQAAAGADAFQADAEAEAAQADAAACgCQADgBABgCIAIAEQgDAEgEADQgFACgFAAQgFAAgFgDg");
	this.shape_16.setTransform(84.9,35.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330000").s().p("AgKAVQgEgBgBgEQgDgDAAgDQABgIAFgCQAEgDAGgBIALAAQAAgKgJAAIgEABIgEAFIgGgEQACgEAEgDQAFgDAEAAQAFAAAEACQAEACACAEQACAFABAGIAAAZIgHAAIgCgEQgHAFgGAAQgDAAgEgCgAgDACQgEACgBAFQAAADADACQACACADAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgDACg");
	this.shape_17.setTransform(77.4,35.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#330000").s().p("AAIAWIAAgSIgPAAIAAASIgKAAIAAgrIAKAAIAAASIAPAAIAAgSIAJAAIAAArg");
	this.shape_18.setTransform(72.9,35.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330000").s().p("AAJAWIAAgcIgQAcIgKAAIAAgrIAKAAIAAAbIAQgbIAJAAIAAArg");
	this.shape_19.setTransform(221,27.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#330000").s().p("AAIAWIAAgcIgQAcIgJAAIAAgrIAJAAIAAAbIAQgbIAKAAIAAArg");
	this.shape_20.setTransform(216.2,27.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330000").s().p("AAKAdIAAgNIgcAAIAAgsIAKAAIAAAjIAMAAIAAgjIAKAAIAAAjIAFAAIAAAWg");
	this.shape_21.setTransform(211.3,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#330000").s().p("AAHAWIgPgTIAAATIgJAAIAAgrIAJAAIAAAPIAOgPIAKAAIgRAVIATAWg");
	this.shape_22.setTransform(206.7,27.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#330000").s().p("AgKAVQgEgBgCgEQgCgDAAgDQAAgIAGgCQAFgDAFgBIALAAQAAgKgJAAIgEABQgDACgBADIgHgEQADgEAEgDQAFgDAEAAQAFAAAEACQAEACACAEQACAFAAAGIAAAZIgGAAIgCgEQgHAFgFAAQgFAAgDgCgAgDACQgFACAAAFQABADACACQACACADAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgDACg");
	this.shape_23.setTransform(201.8,27.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#330000").s().p("AAIAWIAAgOIgIAAIgGAOIgLAAIAJgPQgEgCgCgEQgCgCAAgEQAAgFABgDQACgEAEgCQAEgCAFAAIARAAIAAArgAgBgNIgEACQgBACgBADQABAEABABIAEABIABAAIAIAAIAAgNIgIAAg");
	this.shape_24.setTransform(194.4,27.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#330000").s().p("AAJAWIAAgcIgQAcIgKAAIAAgrIAKAAIAAAbIAQgbIAJAAIAAArg");
	this.shape_25.setTransform(190,27.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#330000").s().p("AgSAWIAAgrIAUAAQAHAAAEADQAEAEAAAGQAAADgCACQgBADgDAAQAEAAACADQACADAAAEQAAADgCADIgGAFQgEABgEAAgAgJAOIALAAQAEAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgEAAIgLAAgAgJgCIAKAAQADAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgDAAIgKAAg");
	this.shape_26.setTransform(185.3,27.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#330000").s().p("AgKAUQgFgDgDgGQgCgFgBgGQABgFACgFQADgGAFgDQAFgDAFAAQAHAAAFADQAFADACAGQADAFAAAFQAAAGgDAFQgCAGgFADQgFADgHAAQgFAAgFgDgAgIgJQgDAEAAAFQAAAGADAEQAEAFAEAAQAGAAADgFQADgEAAgGQAAgFgDgEQgDgFgGAAQgEAAgEAFg");
	this.shape_27.setTransform(180.3,27.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#330000").s().p("AgRAWIgBgBIAAgJIABAAIACABQADAAAAgFIABgNIAAgRIAfAAIAAAsIgKAAIAAgjIgMAAIAAAIQAAANgDAHQgDAIgGgBIgDAAg");
	this.shape_28.setTransform(175.3,27.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#330000").s().p("AgIAUQgFgDgCgFQgDgFAAgHQAAgFADgGQACgFAFgDQAFgDAFAAQAFAAAFACQAFADACAEIgIAEQgBgCgDgBQgCgCgDAAQgEAAgDAEQgDAFAAAFQAAAGADAFQADAEAEAAQADAAACgCQADgBABgCIAIAEQgDAEgEADQgFACgFAAQgFAAgFgDg");
	this.shape_29.setTransform(170.8,27.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#330000").s().p("AgKAfIAIgUIgSgqIAKAAIAKAfIALgfIAKAAIgVA+g");
	this.shape_30.setTransform(166.2,28.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#330000").s().p("AAJAWIAAgcIgQAcIgKAAIAAgrIAKAAIAAAbIAQgbIAJAAIAAArg");
	this.shape_31.setTransform(158.6,27.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#330000").s().p("AAIAWIAAgOIgIAAIgFAOIgLAAIAIgPQgEgCgCgEQgCgCAAgEQAAgFACgDQACgEADgCQAEgCAFAAIASAAIAAArgAgBgNIgEACQgCACABADQgBAEACABIAEABIABAAIAIAAIAAgNIgIAAg");
	this.shape_32.setTransform(150.9,27.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#330000").s().p("AAIAWIAAgcIgQAcIgJAAIAAgrIAJAAIAAAbIAQgbIAKAAIAAArg");
	this.shape_33.setTransform(146.5,27.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#330000").s().p("AAKAdIAAgNIgcAAIAAgsIAKAAIAAAjIAMAAIAAgjIAKAAIAAAjIAFAAIAAAWg");
	this.shape_34.setTransform(141.6,27.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#330000").s().p("AgKAVQgDgBgCgEQgCgDAAgDQAAgIAEgCQAFgDAGgBIALAAQAAgKgJAAIgEABQgDACAAADIgHgEQACgEAEgDQAFgDAEAAQAFAAAEACQAEACADAEQACAFAAAGIAAAZIgIAAIgBgEQgHAFgGAAQgEAAgDgCgAgEACQgDACAAAFQgBADADACQADACACAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgEACg");
	this.shape_35.setTransform(136.6,27.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#330000").s().p("AgTAgIAAg+IAJAAIAAAFQADgDADgBQAEgCACAAQAFAAAEADQAFADACAFQACAFAAAHQAAAHgCADQgCAGgEADQgFADgFAAQgCAAgEgCIgGgEIAAAYgAgIgSQgDAEAAAGQAAAHADACQAEAFAEAAQAFAAADgFQADgCAAgGQAAgHgDgEQgEgFgEAAQgEAAgEAFg");
	this.shape_36.setTransform(132.1,28);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#330000").s().p("AgKAVQgEgBgCgEQgCgDAAgDQAAgIAGgCQAFgDAFgBIALAAQAAgKgJAAIgEABQgCACgCADIgHgEQACgEAFgDQAFgDAEAAQAFAAAEACQAEACACAEQACAFAAAGIAAAZIgHAAIgBgEQgHAFgFAAQgEAAgEgCgAgDACQgFACAAAFQABADACACQACACADAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgDACg");
	this.shape_37.setTransform(127,27.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#330000").s().p("AgRAWIgBgBIAAgJIABAAIACABQACAAABgFIABgNIAAgRIAeAAIAAAsIgJAAIAAgjIgLAAIAAAIQgBANgDAHQgDAIgGgBIgDAAg");
	this.shape_38.setTransform(122.3,27.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#330000").s().p("AAHAWIgPgTIAAATIgJAAIAAgrIAJAAIAAAPIAOgPIALAAIgSAVIATAWg");
	this.shape_39.setTransform(117.9,27.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#330000").s().p("AgJAUQgFgDgDgGQgDgFAAgGQAAgFADgFQADgGAFgDQAEgDAFAAQAHAAAGAEQAEAEACAFQACAGAAADIAAADIgfAAQAAAFADADQAEADADAAQAEAAADgBQADgCABgCIAIAEQgDAFgFACQgGADgFAAQgFAAgEgDgAgHgLQgDADAAAGIAWAAQAAgGgEgDQgDgDgFAAQgDAAgEADg");
	this.shape_40.setTransform(113.1,27.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#330000").s().p("AAPAbIAAgIIgdAAIAAAIIgKAAIAAgQIAGAAQAGgJAAgLIAAgRIAgAAIAAAlIAFAAIAAAQgAgCgJQAAAJgCADQgCAFgCADIASAAIAAgcIgMAAg");
	this.shape_41.setTransform(107.7,27.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#330000").s().p("AAIAWIAAgOIgIAAIgFAOIgLAAIAIgPQgEgCgCgEQgCgCAAgEQAAgFACgDQACgEADgCQADgCAGAAIASAAIAAArgAgBgNIgEACQgBACAAADQAAAEABABIAEABIABAAIAIAAIAAgNIgIAAg");
	this.shape_42.setTransform(99.5,27.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#330000").s().p("AgKAVQgDgBgCgEQgCgDgBgDQABgIAEgCQAFgDAGgBIALAAQAAgKgJAAIgEABQgCACgBADIgHgEQACgEAEgDQAFgDAEAAQAFAAAEACQAEACACAEQADAFAAAGIAAAZIgHAAIgCgEQgHAFgGAAQgDAAgEgCgAgEACQgDACAAAFQAAADACACQADACACAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgEACg");
	this.shape_43.setTransform(95,27.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#330000").s().p("AAIAWIAAgSIgPAAIAAASIgJAAIAAgrIAJAAIAAASIAPAAIAAgSIAKAAIAAArg");
	this.shape_44.setTransform(90.5,27.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#330000").s().p("AgDAWIAAgjIgPAAIAAgIIAlAAIAAAIIgPAAIAAAjg");
	this.shape_45.setTransform(86,27.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#330000").s().p("AAHAWIgOgTIAAATIgKAAIAAgrIAKAAIAAAPIAMgPIAMAAIgSAVIATAWg");
	this.shape_46.setTransform(81.7,27.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#330000").s().p("AgJAUQgFgDgDgGQgDgFAAgGQAAgFADgFQADgGAFgDQAFgDAEAAQAIAAAEAEQAFAEACAFQACAGAAADIAAADIgfAAQABAFACADQAEADADAAQAEAAADgBQADgCABgCIAIAEQgDAFgFACQgGADgFAAQgEAAgFgDgAgHgLQgCADgBAGIAWAAQAAgGgEgDQgDgDgFAAQgDAAgEADg");
	this.shape_47.setTransform(76.9,27.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#330000").s().p("AgKAUQgFgDgDgGQgCgFgBgGQABgFACgFQADgGAFgDQAFgDAFAAQAHAAAFADQAFADACAGQADAFAAAFQAAAGgDAFQgCAGgFADQgFADgHAAQgFAAgFgDgAgIgJQgDAEAAAFQAAAGADAEQAEAFAEAAQAGAAADgFQADgEAAgGQAAgFgDgEQgDgFgGAAQgEAAgEAFg");
	this.shape_48.setTransform(71.9,27.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#330000").s().p("AgTAgIAAg+IAJAAIAAAFQADgDADgBQAEgCACAAQAFAAAEADQAFADACAFQACAFAAAHQAAAHgCADQgCAGgEADQgFADgFAAQgCAAgEgCIgGgEIAAAYgAgIgSQgDAEAAAGQAAAHADACQAEAFAEAAQAFAAADgFQADgCAAgGQAAgHgDgEQgEgFgEAAQgEAAgEAFg");
	this.shape_49.setTransform(67.1,28);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#330000").s().p("AAMAfIAAg0IgYAAIAAA0IgKAAIAAg9IAtAAIAAA9g");
	this.shape_50.setTransform(61.6,26.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#330000").s().p("AgCAEQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_51.setTransform(54.9,28.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#330000").s().p("AgKAVQgEgBgCgEQgBgDAAgDQgBgIAGgCQAFgDAFgBIALAAQAAgKgJAAIgEABQgCACgCADIgHgEQACgEAFgDQAFgDAEAAQAFAAAEACQAEACACAEQACAFAAAGIAAAZIgHAAIgBgEQgHAFgFAAQgEAAgEgCgAgDACQgFACAAAFQABADACACQACACADAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgDACg");
	this.shape_52.setTransform(51.4,27.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#330000").s().p("AAPAbIAAgIIgdAAIAAAIIgKAAIAAgQIAGAAQAGgJAAgLIAAgRIAgAAIAAAlIAFAAIAAAQgAgCgJQAAAJgCADQgCAFgCADIASAAIAAgcIgMAAg");
	this.shape_53.setTransform(46.3,27.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#330000").s().p("AgKAUQgFgDgDgGQgCgFgBgGQABgFACgFQADgGAFgDQAFgDAFAAQAHAAAFADQAFADACAGQADAFAAAFQAAAGgDAFQgCAGgFADQgFADgHAAQgFAAgFgDgAgIgJQgDAEAAAFQAAAGADAEQAEAFAEAAQAGAAADgFQADgEAAgGQAAgFgDgEQgDgFgGAAQgEAAgEAFg");
	this.shape_54.setTransform(40.8,27.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#330000").s().p("AgOAWIAAgrIAdAAIAAAIIgUAAIAAAjg");
	this.shape_55.setTransform(36.6,27.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#330000").s().p("AgJAdQgFgDgDgFQgDgFAAgGIABgGIACgEIABgCIAQgcIALAAIgMAXIABgBQAFAAAFACQAFADADADQADAEAAAGQAAAGgDAFQgDAFgFADQgFACgFAAQgEAAgFgCgAgHACQgDADAAAFQAAAFADAEQADADAEAAQAEAAADgDQADgEAAgFQAAgFgDgDQgDgCgEAAQgEAAgDACg");
	this.shape_56.setTransform(28.9,26.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#330000").s().p("AAAAfIAAgvIgJAGIAAgLIAOgJIAFAAIAAA9g");
	this.shape_57.setTransform(24.6,26.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#330000").s().p("AgMAcQgGgEgDgHQgDgIAAgJQAAgJADgGQADgIAGgEQAGgDAGgBQAHABAGADQAGAEADAIQADAGAAAJQAAAJgDAIQgDAHgGAEQgGAEgHgBQgGABgGgEgAgHgTQgDADgCAFQgCAGAAAFQAAAHACAEQACAGADADQAEADADAAQAHAAAEgGQAEgHAAgKQAAgJgEgGQgEgHgHAAQgDAAgEADg");
	this.shape_58.setTransform(20.2,26.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#330000").s().p("AgSAfIAAgEIASgZIAHgIQACgEAAgDQAAgEgEgCQgCgDgDAAQgDAAgDADQgCACAAAEQgBAGAFACIgFAFQgFAAgBgDQgDgEAAgFQAAgGADgEQACgEAFgCQAEgCAEAAQAEAAAFACQAEACADAEQACAEAAAGQAAAHgHAHIgOAUIAWAAIAAAJg");
	this.shape_59.setTransform(15.1,26.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#330000").s().p("AgKAVQgDgBgDgEQgCgDAAgDQAAgIAGgCQAEgDAGgBIALAAQAAgKgJAAIgEABIgEAFIgGgEQABgEAFgDQAFgDAEAAQAFAAAEACQAEACACAEQACAFAAAGIAAAZIgGAAIgCgEQgHAFgFAAQgEAAgEgCgAgDACQgFACAAAFQAAADADACQADACACAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgDACg");
	this.shape_60.setTransform(222.6,17.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#330000").s().p("AgDAWIAAgjIgPAAIAAgIIAlAAIAAAIIgPAAIAAAjg");
	this.shape_61.setTransform(218.3,17.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#330000").s().p("AgIAUQgFgDgCgFQgDgFAAgHQAAgFADgGQACgFAFgDQAFgDAFAAQAFAAAFACQAFADACAEIgIAEQgBgCgDgBQgCgCgDAAQgEAAgDAEQgDAFAAAFQAAAGADAFQADAEAEAAQADAAACgCQADgBABgCIAIAEQgDAEgEADQgFACgFAAQgFAAgFgDg");
	this.shape_62.setTransform(213.9,17.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#330000").s().p("AgKAgIAIgUIgSgqIAKAAIAKAeIALgeIAKAAIgVA+g");
	this.shape_63.setTransform(209.3,18.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#330000").s().p("AgOAWIAAgrIAdAAIAAAIIgUAAIAAAjg");
	this.shape_64.setTransform(205.2,17.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#330000").s().p("AgSAWIAAgrIAUAAQAHAAAEADQAEAEAAAGQAAADgCACQgBADgDAAQAEAAACADQACADAAAEQAAADgCADIgGAFQgEABgEAAgAgJAOIALAAQAEAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgEAAIgLAAgAgJgCIAKAAQADAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgBgDAAIgKAAg");
	this.shape_65.setTransform(200.8,17.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#330000").s().p("AgKAVQgDgBgCgEQgCgDAAgDQAAgIAEgCQAFgDAGgBIALAAQAAgKgJAAIgEABQgDACAAADIgHgEQACgEAEgDQAFgDAEAAQAFAAAEACQAEACADAEQACAFAAAGIAAAZIgIAAIgBgEQgHAFgGAAQgEAAgDgCgAgEACQgDACAAAFQAAADACACQADACACAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgEACg");
	this.shape_66.setTransform(195.9,17.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#330000").s().p("AAAAfIAAgwIgJAHIAAgLIAOgJIAFAAIAAA9g");
	this.shape_67.setTransform(189.2,16.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#330000").s().p("AgIAeIgJgDIgCgCIADgIIADACIAGACIAHACQACAAAEgCQACgCABgDQACgCAAgDQAAgFgDgDQgDgDgFAAIgHAAIAAgDIAMgSIgUAAIAAgJIAhAAIAAAEIgPATQAFABADACQAEACADACQACAFAAAGQAAAHgDAFQgEAEgFACQgFACgDAAIgIgBg");
	this.shape_68.setTransform(185,16.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#330000").s().p("AgKAUQgFgDgDgGQgCgFgBgGQABgFACgFQADgGAFgDQAFgDAFAAQAHAAAFADQAFADACAGQADAFAAAFQAAAGgDAFQgCAGgFADQgFADgHAAQgFAAgFgDgAgIgJQgDAEAAAFQAAAGADAEQAEAFAEAAQAGAAADgFQADgEAAgGQAAgFgDgEQgDgFgGAAQgEAAgEAFg");
	this.shape_69.setTransform(176.9,17.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#330000").s().p("AAIAWIAAgjIgPAAIAAAjIgJAAIAAgrIAiAAIAAArg");
	this.shape_70.setTransform(172.1,17.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#330000").s().p("AAAAfIAAgwIgJAHIAAgLIAOgJIAFAAIAAA9g");
	this.shape_71.setTransform(165.2,16.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#330000").s().p("AgIAUQgFgDgCgFQgDgFAAgHQAAgFADgGQACgFAFgDQAFgDAFAAQAFAAAFACQAFADACAEIgIAEQgBgCgDgBQgCgCgDAAQgEAAgDAEQgDAFAAAFQAAAGADAFQADAEAEAAQADAAACgCQADgBABgCIAIAEQgDAEgEADQgFACgFAAQgFAAgFgDg");
	this.shape_72.setTransform(158.4,17.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#330000").s().p("AAIAWIAAgOIgIAAIgGAOIgLAAIAJgPQgEgCgCgEQgCgCAAgEQAAgFABgDQADgEADgCQADgCAGAAIARAAIAAArgAgBgNIgEACQgCACAAADQAAAEACABIAEABIABAAIAIAAIAAgNIgIAAg");
	this.shape_73.setTransform(151,17.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#330000").s().p("AAJAWIAAgcIgQAcIgKAAIAAgrIAKAAIAAAbIAQgbIAJAAIAAArg");
	this.shape_74.setTransform(146.5,17.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#330000").s().p("AAJAdIAAgNIgbAAIAAgsIAJAAIAAAjIAOAAIAAgjIAJAAIAAAjIAFAAIAAAWg");
	this.shape_75.setTransform(141.6,18.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#330000").s().p("AAHAWIgOgTIAAATIgKAAIAAgrIAKAAIAAAPIAMgPIAMAAIgSAVIATAWg");
	this.shape_76.setTransform(137,17.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#330000").s().p("AASAfIgFgQIgHADIgGABIgFgBIgGgDIgGAQIgLAAIAYg9IAJAAIAYA9gAgIAHQAEADAEAAQAEAAAGgDIgKgZg");
	this.shape_77.setTransform(131.4,16.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#330000").s().p("AgCAEQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_78.setTransform(124.3,19.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#330000").s().p("AgKAdQgEgDgDgFQgDgFAAgGIABgGIACgEIACgCIAPgcIALAAIgMAXIACgBQAEAAAFACQAFADADADQADAEAAAGQAAAGgDAFQgDAFgFADQgFACgFAAQgFAAgFgCgAgGACQgEADAAAFQAAAFAEAEQACADAEAAQAEAAAEgDQADgEAAgFQAAgFgDgDQgEgCgEAAQgEAAgCACg");
	this.shape_79.setTransform(121.2,16.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#330000").s().p("AAAAfIAAgwIgJAHIAAgLIAOgJIAFAAIAAA9g");
	this.shape_80.setTransform(116.9,16.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#330000").s().p("AgMAcQgGgEgDgHQgDgIAAgJQAAgIADgHQADgIAGgEQAGgDAGAAQAHAAAGADQAGAEADAIQADAHAAAIQAAAJgDAIQgDAHgGAEQgGADgHAAQgGAAgGgDgAgHgTQgDADgCAFQgCAGAAAFQAAAGACAGQACAFADADQAEADADAAQAHAAAEgHQAEgGAAgKQAAgJgEgGQgEgHgHAAQgDAAgEADg");
	this.shape_81.setTransform(112.5,16.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#330000").s().p("AgSAfIAAgEIASgZIAGgIQACgEAAgDQAAgEgDgCQgCgDgDAAQgDAAgCADQgDACgBAEQABAGAEACIgGAFQgDAAgDgDQgCgEAAgFQAAgGACgEQADgEAEgCQAFgCAEAAQAEAAAEACQAFACACAEQADAEAAAGQAAAHgGAHIgOAUIAVAAIAAAJg");
	this.shape_82.setTransform(107.4,16.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#330000").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_83.setTransform(103.9,19.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#330000").s().p("AAAAfIAAgwIgJAHIAAgLIAOgJIAFAAIAAA9g");
	this.shape_84.setTransform(101.3,16.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#330000").s().p("AgMAcQgGgEgDgHQgDgIAAgJQAAgIADgHQADgIAGgEQAGgDAGAAQAHAAAGADQAGAEADAIQADAHAAAIQAAAJgDAIQgDAHgGAEQgGADgHAAQgGAAgGgDgAgHgTQgDADgCAFQgCAGAAAFQAAAGACAGQACAFADADQAEADADAAQAHAAAEgHQAEgGAAgKQAAgJgEgGQgEgHgHAAQgDAAgEADg");
	this.shape_85.setTransform(96.9,16.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#330000").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_86.setTransform(93.3,19.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#330000").s().p("AgJAeIgIgDIgCgCIADgIIADACIAGACIAHACQADAAADgCQACgCABgDQACgCAAgDQAAgFgDgDQgDgDgFAAIgIAAIAAgDIANgSIgUAAIAAgJIAhAAIAAAEIgOATQAEABADACQAEACADACQACAFAAAGQAAAHgEAFQgDAEgFACQgFACgDAAIgJgBg");
	this.shape_87.setTransform(90.1,16.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#330000").s().p("AAAAfIAAgwIgJAHIAAgLIAOgJIAFAAIAAA9g");
	this.shape_88.setTransform(85.8,16.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#330000").s().p("AgDAWIAAgjIgPAAIAAgIIAlAAIAAAIIgOAAIAAAjg");
	this.shape_89.setTransform(79.2,17.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#330000").s().p("AgKAUQgFgDgDgGQgCgFgBgGQABgFACgFQADgGAFgDQAFgDAFAAQAHAAAFADQAFADACAGQADAFAAAFQAAAGgDAFQgCAGgFADQgFADgHAAQgFAAgFgDgAgIgJQgDAEAAAFQAAAGADAEQAEAFAEAAQAGAAADgFQADgEAAgGQAAgFgDgEQgDgFgGAAQgEAAgEAFg");
	this.shape_90.setTransform(74.5,17.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#330000").s().p("AgKAdQgFgDgDgFQgCgFAAgGIABgGIACgEIABgCIAQgcIALAAIgMAXIABgBQAGAAAEACQAFADADADQADAEAAAGQAAAGgDAFQgDAFgFADQgEACgGAAQgFAAgFgCgAgHACQgDADAAAFQAAAFADAEQAEADADAAQAEAAADgDQADgEABgFQgBgFgDgDQgCgCgFAAQgDAAgEACg");
	this.shape_91.setTransform(66.5,16.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#330000").s().p("AAAAfIAAgwIgJAHIAAgLIAOgJIAFAAIAAA9g");
	this.shape_92.setTransform(62.1,16.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#330000").s().p("AAAAfIAAgwIgJAHIAAgLIAOgJIAFAAIAAA9g");
	this.shape_93.setTransform(58.9,16.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#330000").s().p("AgMAcQgGgEgDgHQgDgIAAgJQAAgIADgHQADgIAGgEQAGgDAGAAQAHAAAGADQAGAEADAIQADAHAAAIQAAAJgDAIQgDAHgGAEQgGADgHAAQgGAAgGgDgAgHgTQgDADgCAFQgCAGAAAFQAAAGACAGQACAFADADQAEADADAAQAHAAAEgHQAEgGAAgKQAAgJgEgGQgEgHgHAAQgDAAgEADg");
	this.shape_94.setTransform(54.5,16.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#330000").s().p("AgMAcQgGgEgDgHQgDgIAAgJQAAgIADgHQADgIAGgEQAGgDAGAAQAHAAAGADQAGAEADAIQADAHAAAIQAAAJgDAIQgDAHgGAEQgGADgHAAQgGAAgGgDgAgHgTQgDADgCAFQgCAGAAAFQAAAGACAGQACAFADADQAEADADAAQAHAAAEgHQAEgGAAgKQAAgJgEgGQgEgHgHAAQgDAAgEADg");
	this.shape_95.setTransform(48.3,16.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#330000").s().p("AgMAcQgGgEgDgHQgDgIAAgJQAAgIADgHQADgIAGgEQAGgDAGAAQAHAAAGADQAGAEADAIQADAHAAAIQAAAJgDAIQgDAHgGAEQgGADgHAAQgGAAgGgDgAgHgTQgDADgCAFQgCAGAAAFQAAAGACAGQACAFADADQAEADADAAQAHAAAEgHQAEgGAAgKQAAgJgEgGQgEgHgHAAQgDAAgEADg");
	this.shape_96.setTransform(42.1,16.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#330000").s().p("AgJAeIgIgDIgDgCIAEgIIADACIAGACIAHACQADAAACgCQADgCABgDQACgCAAgDQAAgFgDgDQgDgDgFAAIgIAAIAAgDIANgSIgUAAIAAgJIAhAAIAAAEIgOATQAEABAEACQAEACACACQADAFAAAGQAAAHgFAFQgDAEgFACQgGACgCAAIgJgBg");
	this.shape_97.setTransform(36.8,16.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#330000").s().p("AAAAfIAAgwIgJAHIAAgLIAOgJIAFAAIAAA9g");
	this.shape_98.setTransform(32.5,16.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#330000").s().p("AgSAfIAAgEIASgZIAHgIQABgEAAgDQAAgEgCgCQgDgDgDAAQgDAAgDADQgCACAAAEQAAAGAEACIgFAFQgFAAgCgDQgCgEAAgFQAAgGACgEQADgEAFgCQAEgCAEAAQAFAAADACQAFACADAEQACAEAAAGQAAAHgHAHIgNAUIAVAAIAAAJg");
	this.shape_99.setTransform(28.8,16.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#330000").s().p("AgUAfIAcg0IgcAAIAAgJIApAAIAAAEIgdA5g");
	this.shape_100.setTransform(24,16.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#330000").s().p("AgUAfIAbg0IgbAAIAAgJIApAAIAAAEIgeA5g");
	this.shape_101.setTransform(19,16.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#330000").s().p("AAAAZQAAgBgCgFIgJgVIAAATIAFABQAAABABAAQAAAAAAABQAAAAAAABQAAAAABABQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgGABIgFAAIgGgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgEAFgBIAAghQgFgBABgEIABgDQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAEAAIAEABIADAFIAIAWIAAgTQgGAAAAgFQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQABgBADAAIAFAAIAGABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAEgEABIAAAhIAAAFIgCADIgEABQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAgAARAQQgGAAAAgEIABgCQABgCAFAAIABAAQAFAAAAACIABACQAAAEgFAAgAALAAIAAgKQAAgDACgCQACgCAEAAQACAAACACQACACABADIAAAKQgBAFgGAAQgIAAAAgFgAASgJIAAAJQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgJQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_102.setTransform(13.7,17.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#330000").s().p("AgKAUQgFgDgCgGQgDgFAAgGQAAgFADgFQACgGAFgDQAGgDAEAAQAIAAAEAEQAFAEACAFQACAGAAADIAAADIgfAAQABAFADADQADADAEAAQADAAADgBQADgCABgCIAIAEQgDAFgFACQgFADgGAAQgEAAgGgDgAgGgLQgDADgBAGIAWAAQAAgGgEgDQgDgDgFAAQgDAAgDADg");
	this.shape_103.setTransform(213.5,8.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#330000").s().p("AAIAWIAAgcIgQAcIgJAAIAAgrIAJAAIAAAbIAQgbIAKAAIAAArg");
	this.shape_104.setTransform(208.7,8.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#330000").s().p("AAIAWIAAgSIgPAAIAAASIgJAAIAAgrIAJAAIAAASIAPAAIAAgSIAKAAIAAArg");
	this.shape_105.setTransform(203.9,8.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#330000").s().p("AgJAUQgFgDgDgGQgDgFAAgGQAAgFADgFQADgGAFgDQAEgDAFAAQAHAAAGAEQAEAEACAFQACAGAAADIAAADIgfAAQAAAFADADQAEADADAAQAEAAADgBQADgCACgCIAHAEQgDAFgFACQgFADgGAAQgFAAgEgDgAgHgLQgDADAAAGIAWAAQgBgGgDgDQgDgDgFAAQgDAAgEADg");
	this.shape_106.setTransform(199.1,8.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#330000").s().p("AgZAWIAAgrIAJAAIAAAjIAMAAIAAgjIAIAAIAAAjIANAAIAAgjIAJAAIAAArg");
	this.shape_107.setTransform(193.5,8.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#330000").s().p("AgJAUQgFgDgDgGQgDgFAAgGQAAgFADgFQADgGAFgDQAEgDAFAAQAHAAAGAEQAEAEACAFQACAGAAADIAAADIgfAAQAAAFADADQAEADADAAQAEAAADgBQADgCACgCIAHAEQgDAFgFACQgFADgGAAQgFAAgEgDgAgHgLQgDADAAAGIAWAAQgBgGgDgDQgDgDgFAAQgDAAgEADg");
	this.shape_108.setTransform(187.9,8.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#330000").s().p("AgTAgIAAg+IAJAAIAAAFQADgDADgBQAEgCACAAQAFAAAEADQAFADACAFQACAFAAAHQAAAHgCADQgCAGgEADQgFADgFAAQgCAAgEgCIgGgEIAAAYgAgIgSQgDAEAAAGQAAAHADACQAEAFAEAAQAFAAADgFQADgCAAgGQAAgHgDgEQgEgFgEAAQgEAAgEAFg");
	this.shape_109.setTransform(183.1,9.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#330000").s().p("AgIAVIgHgDIADgHIAFACIAHACQADAAADgCQACgCAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBQgCgBgDAAIgJAAIAAgGIAJAAQADABACgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgCgCgDABIgGAAIgGADIgDgHIAEgCIAGgCIAFAAQAFAAADABIAGAFIABAGQAAAGgDADQACABABADIABAGQAAAEgCADIgGAFQgEACgEAAQgDAAgFgCg");
	this.shape_110.setTransform(178.5,8.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#330000").s().p("AgKAVQgDgBgDgEQgBgDAAgDQAAgIAEgCQAGgDAFgBIALAAQAAgKgJAAIgEABQgCACgBADIgIgEQACgEAFgDQAFgDAEAAQAFAAAEACQAEACADAEQABAFAAAGIAAAZIgHAAIgBgEQgHAFgGAAQgEAAgDgCgAgEACQgDACAAAFQgBADADACQADACACAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgEACg");
	this.shape_111.setTransform(174.1,8.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#330000").s().p("AgVAfIAAg9IAXAAQAGAAAEACQAFADACADQADAEAAAFQAAAGgDAEQgCADgFACQgEACgGAAIgNAAIAAAbgAgLgDIANAAQAFAAACgCQADgDAAgEQAAgEgDgDQgCgCgFAAIgNAAg");
	this.shape_112.setTransform(169.3,7.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#330000").s().p("AgEABIgBgBIgBgDQAAgDADgCQACgCABAAQADAAACACQACACAAADIgBADQAAABgDACIgJAIg");
	this.shape_113.setTransform(162.6,10.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#330000").s().p("AAAALIAOgLIgOgKIAAgNIAYAUIAAAHIgYAUgAgXALIAPgLIgPgKIAAgNIAaAWIAAADIgaAWg");
	this.shape_114.setTransform(158.6,8.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#330000").s().p("AgMAdQgFgFgCgFIgBgJQAAgLADgIQAEgJAIgGQAGgFAOgDIACALIgQAEQgCACgCACIgEAGQAFgFAEAAQAGAAAEAEQAFADACAFQACAEAAAGQAAAGgCAGQgDAFgFADQgFADgGAAQgIAAgEgEgAgFAAQgCACgBADIgBAFIABAFQABADACADQACACADAAQAEAAADgEQADgDAAgGQAAgFgDgEQgDgCgEAAQgDAAgCABg");
	this.shape_115.setTransform(152.9,7.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#330000").s().p("AgOATQgEgDAAgGQAAgIAEgCQAEgDAGgBIALgBQAAgHgHAAIgEABIgEADIgIgEQACgEAFgDQAFgDAEAAQAFAAAEACQAFADACAEQADAFAAAGIAAAYIgKAAIAAgEQgIAFgEAAQgHAAgEgEgAgCACQgEABAAAFQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQACACACAAQACAAADgCQACgCAAgDIAAgGIgCAAQgFAAgCABg");
	this.shape_116.setTransform(147.8,8.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#330000").s().p("AAGAWIAAgRIgLAAIAAARIgNAAIAAgrIANAAIAAARIALAAIAAgRIANAAIAAArg");
	this.shape_117.setTransform(143.1,8.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#330000").s().p("AgIAUQgFgDgDgFQgCgFAAgHQAAgFACgGQADgFAFgDQAFgDAFAAQAFAAAFACQAFADACADIgKAGIgCgDIgFgBQgCAAgDAEQgDAEAAAEQAAAFADAEQADADACAAIAFgBIACgCIAKAGQgCADgFADQgFACgFAAQgFAAgFgDg");
	this.shape_118.setTransform(138.3,8.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#330000").s().p("AAHAfIAAgZIgNAZIgMAAIAAgsIAMAAIAAAYIANgYIAMAAIAAAsgAgGgVQgDgCgCgFIAGgCIADAEIACABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAGACQgBAFgEACQgDACgEAAQgDAAgDgCg");
	this.shape_119.setTransform(133.5,7.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#330000").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgDAFAAQAHAAAEADQAGADACAFQADAGAAAFQAAAHgDAFQgCAFgGADQgEADgHAAQgFAAgFgDgAgGgIQgDAEAAAEQAAAFADAEQADADADAAQAEAAADgDQADgEgBgFQABgEgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_120.setTransform(128.4,8.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#330000").s().p("AgUAgIAAg+IAMAAIAAAEIAGgEIAFgBQAGAAAEADQAEAEACAFQACAFAAAGQAAAIgEAHQgFAHgJAAIgFgBIgGgEIAAAXgAgHgRQgCADAAAGQAAAGACACQADAEAEAAQADAAADgEQADgCAAgGQAAgGgDgDQgDgEgDAAQgEAAgDAEg");
	this.shape_121.setTransform(123.4,9.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#330000").s().p("AgEAWIAAggIgPAAIAAgLIAnAAIAAALIgOAAIAAAgg");
	this.shape_122.setTransform(118.4,8.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#330000").s().p("AgIAUQgFgDgCgFQgEgFAAgHQAAgFAEgGQACgFAFgDQAFgDAFAAQAFAAAFACQAFADADADIgKAGIgEgDIgEgBQgCAAgDAEQgDAEAAAEQAAAFADAEQADADACAAIAEgBIAEgCIAKAGQgDADgFADQgFACgFAAQgFAAgFgDg");
	this.shape_123.setTransform(113.8,8.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#330000").s().p("AgIAUQgFgDgDgFQgCgFAAgHQAAgFACgGQADgFAFgDQAGgDAEAAQAFAAAFACQAFADACADIgJAGIgDgDIgFgBQgDAAgCAEQgDAEAAAEQAAAFADAEQACADADAAIAFgBIADgCIAJAGQgCADgFADQgFACgFAAQgEAAgGgDg");
	this.shape_124.setTransform(109.3,8.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#330000").s().p("AgKAUQgFgDgDgFQgDgGAAgGQAAgGADgFQADgFAFgDQAFgDAFAAQAHAAAFADQAFADADAFQACAGAAAFQAAAHgCAFQgDAFgFADQgFADgHAAQgFAAgFgDgAgFgIQgDAEgBAEQABAFADAEQACADADAAQAEAAADgDQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgCAEg");
	this.shape_125.setTransform(104.5,8.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#330000").s().p("AAPAfIAAgjIgLAXIgHAAIgLgXIAAAjIgNAAIAAg9IANAAIAOAgIAPggIANAAIAAA9g");
	this.shape_126.setTransform(98.6,7.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#330000").s().p("AgCACIAAgDIAagWIAAANIgPAKIAPALIAAANgAgXAEIAAgHIAYgUIAAANIgOAKIAOALIAAANg");
	this.shape_127.setTransform(92.2,8.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#330000").s().p("AgNAcQgHgEgFgHQgDgIAAgJQAAgIADgHQAFgIAHgEQAGgDAHgBQAIABAHADQAGAEAEAIQAEAHABAIQgBAJgEAIQgEAHgGAEQgHAEgIgBQgHABgGgEgAgHgQQgDACgCAEQgDAFAAAFQAAAGADAFQACAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgFAAgGQAAgFgCgFQgCgEgEgCQgEgDgEAAQgDAAgEADg");
	this.shape_128.setTransform(83,7.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#330000").s().p("AAPAfIgEgNQgHACgEAAQgDAAgHgCIgEANIgPAAIAXg9IANAAIAXA9gAgGAGQAEADACAAQADAAAEgDIgHgVg");
	this.shape_129.setTransform(76.5,7.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#330000").s().p("AgDABIAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgBADIgCABIgIAJg");
	this.shape_130.setTransform(69.4,10.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#330000").s().p("AANAfIAAgbIgaAAIAAAbIgKAAIAAg9IAKAAIAAAbIAaAAIAAgbIALAAIAAA9g");
	this.shape_131.setTransform(65.6,7.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#330000").s().p("AgJAcQgIgEgDgHQgEgHAAgKQAAgIAEgHQAEgIAHgEQAGgEAGAAQAGAAAHADQAFACAEAFIgJAFQgDgDgDgBQgDgCgEAAQgDAAgFADQgEADgCAFQgDAGAAAFQAAAHADAFQACAFAEADQAFADADAAQAEAAADgCQADgBADgDIAJAFQgEAFgGACQgGADgGAAQgGAAgGgEg");
	this.shape_132.setTransform(59.9,7.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#330000").s().p("AAMAfIAAg0IgYAAIAAA0IgKAAIAAg9IAtAAIAAA9g");
	this.shape_133.setTransform(54.2,7.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#330000").s().p("AgKAVQgEgBgCgEQgCgDAAgDQAAgIAGgCQAFgDAFgBIALAAQAAgKgJAAIgEABQgCACgCADIgHgEQACgEAFgDQAFgDAEAAQAFAAAEACQAEACADAEQABAFAAAGIAAAZIgHAAIgBgEQgHAFgFAAQgEAAgEgCgAgDACQgFACAAAFQABADACACQACACADAAQADAAADgDQADgCAAgEIAAgHIgDAAQgGAAgDACg");
	this.shape_134.setTransform(46,8.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#330000").s().p("AAIAWIAAgjIgPAAIAAAjIgKAAIAAgrIAiAAIAAArg");
	this.shape_135.setTransform(41.5,8.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#330000").s().p("AAIAWIAAgjIgPAAIAAAjIgJAAIAAgrIAiAAIAAArg");
	this.shape_136.setTransform(36.8,8.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#330000").s().p("AgKAfIAIgTIgSgrIAKAAIAKAfIALgfIAKAAIgVA+g");
	this.shape_137.setTransform(32.1,9.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#330000").s().p("AgTAgIAAg+IAJAAIAAAFQADgDADgBQAEgCACAAQAFAAAEADQAFADACAFQACAFAAAHQAAAHgCADQgCAGgEADQgFADgFAAQgCAAgEgCIgGgEIAAAYgAgIgSQgDAEAAAGQAAAHADACQAEAFAEAAQAFAAADgFQADgCAAgGQAAgHgDgEQgEgFgEAAQgEAAgEAFg");
	this.shape_138.setTransform(27.3,9.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#330000").s().p("AgSAfIAAg9IAlAAIAAAJIgbAAIAAA0g");
	this.shape_139.setTransform(22.5,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,42.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E94D33").s().p("AilBiQABgBgDgGQgCgFAAgIQAAgNAIgIQAHgJANABQAMgBAIAJQAIAIAAANQAAAFgDAIQgEAJgJAGIgrAggAD6BaQgMgNAAgTQAAgNAFgLQAGgLALgHQAKgHAQAAQAXAAANAOQANAOAAASQgBAMgFALQgGAMgLAHQgLAHgQABQgWgBgNgOgAERArQgFAEAAAKQAAAKAFAEQAGAEAHAAQAHAAAGgEQAFgEAAgKQAAgKgFgEQgGgDgHAAQgGAAgHADgAgqBjQgRgFgMgGIgNgHIAQglIAJAFQAJAEANAFQANADANAAQARAAALgKQAKgKAAgOQAAgOgKgJQgLgIgQAAIggAAIAAgXIArg/IhDAAIAAgsICDAAIAAAWIgwBEQAXAHAPARQAPARABAfQAAAbgPARQgOASgTAHQgUAHgNABQgQAAgQgGgACDBmICIjsIAwAAIiHDsgAkwBmIAwhPQgVgCgSgLQgRgKgLgQQgLgSAAgVQAAgWAMgTQALgTATgLQATgLAXAAQAWAAATALQATALALATQALATAAAWQAAALgEALIgIAUIgFAKIhCBpgAkThPQgIAJgBAPQABAQAIAJQAIAIARAAQAOAAAJgIQAIgJAAgQQAAgPgIgJQgJgJgOAAQgRAAgIAJgAB7g3QgMgNAAgVQAAgMAGgLQAEgLAMgHQALgHAPAAQAQAAAMAHQALAHAGALQAGAKAAANQAAANgGALQgGALgMAHQgLAGgRABQgWAAgNgPgACThmQgGADAAAKQAAAJAGAFQAFAEAHAAQAHAAAGgEQAFgFAAgJQAAgKgFgDQgGgFgHAAQgHAAgFAFg");
	this.shape.setTransform(169.4,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkPBrQgagPgPgcQgPgbAAglQAAgjAPgcQAPgcAagPQAagOAfAAQAgAAAZAOQAaAPAPAcQAPAcAAAjQAAAlgPAbQgPAcgaAPQgZAOggAAQgfAAgagOgAj1hDQgOAKgIASQgIASAAAVQAAAXAHARQAJATAOAJQAOAKARAAQASAAANgKQAPgJAIgTQAIgRAAgXQAAgVgIgSQgIgSgPgKQgNgKgSAAQgRAAgOAKgAHDB3IhThoIAABnIgzAAIAAjrIAzAAIAABiIBShiIA+AAIhlBzIBlB5gALQB2IgRgzQgZAKgTgBQgRABgZgKIgRAzIg2AAIBWjrIA3AAIBXDrgAJ3AaQAOAHAOAAQAPAAAQgIIgehXgAB8B2IAAjrICYAAIAAArIhlAAIAAA2IBMAAIAAApIhMAAIAAA2IBoAAIAAArgAgSB2IAAjAIg+AAIAAgrICtAAIAAArIg+AAIAADAgAmYB2IAAjAIhSAAIAADAIgyAAIAAjrIC3AAIAADrgAp4B2IAAiVIhaCVIgzAAIAAjrIAzAAIAACWIBaiWIAzAAIAADrg");
	this.shape_1.setTransform(44.5,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,27.3,235.9,27.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E94D33").s().p("AMsBUQgSgNgNgVQgLgVAAgdQAAgcALgVQAMgWAUgMQAVgKAXAAQAUAAARAIQAQAGAMAOIgiAUQgPgOgQAAQgNAAgLAHQgLAIgHAOQgFANAAARQAAASAFANQAHAOALAIQALAHANAAQARAAAOgNIAiATQgMAOgQAGQgRAIgUAAQgXAAgWgKgAJdBUIAQgfQAKAEAFAAQAGABAEgEQAFgGAGgKIg8iBIAqAAIAmBXIAmhXIAqAAIg8CCQgLAagQAOQgPAOgRABQgRAAgQgKgABtBUQgUgNgMgVQgLgVAAgdQAAgbALgWQAMgVAUgNQATgKAZAAQAYAAAVAKQAUANAMAVQALAWgBAbQABAdgLAVQgMAVgUANQgVAKgYAAQgZAAgTgKgACAgzQgKAHgHAOQgGANgBARQAAASAHANQAHAOAKAIQAMAHANAAQAOAAAKgHQAKgIAIgOQAGgNAAgSQAAgRgGgNQgIgOgKgHQgKgIgOAAQgNAAgMAIgAuFBUQgTgNgMgVQgMgVAAgdQAAgbAMgWQAMgVATgNQAVgKAXAAQAZAAAUAKQAVANALAVQALAWgBAbQABAdgLAVQgLAVgVANQgUAKgZAAQgXAAgVgKgAtwgzQgLAHgGAOQgHANgBARQABASAGANQAHAOALAIQAKAHANAAQAOAAALgHQALgIAGgOQAHgNAAgSQAAgRgHgNQgGgOgLgHQgLgIgOAAQgNAAgKAIgAQwBcIgNgoQgSAHgPAAQgNAAgUgHIgNAoIgrAAIBDi3IArAAIBFC3gAPsAUQAKAGAMgBQALABAMgGIgWhEgAITBcIAAiVIhAAAIAACVIgnAAIAAi3ICOAAIAAC3gAEIBcIAAi3IBQAAQARAAAMAHQAOAHAGAMQAIANAAAQQAAAQgIAMQgGALgOAIQgMAGgRABIgnAAIAABKgAExgPIAmAAQAMAAAFgGQAGgIAAgIQAAgIgGgGQgFgGgMAAIgmAAgAgFBcIhChQIAABQIgnAAIAAi3IAnAAIAABMIBAhMIAsAAIhKBZIBMBegAlZBcIAAi3IB2AAIAAAiIhQAAIAAAqIA8AAIAAAhIg8AAIAAAnIBTAAIAAAjgAmhBcIAAi3IAoAAIAAC3gApABcIAAi3IAoAAIAABGIAmAAQAPAAAOAGQAPAFAJAKQALAMAAATQAAAVgLAOQgLANgQAHQgOAGgMAAgAoYA5IAjAAQASAAAFgJQAEgIAAgJQAAgEgGgIQgDgHgSAAIgjAAgArpBcIAAi3IBNAAQATAAANAHQAMAHAHALQAGAMAAAMQAAAMgGAMQgFAMgJADQANADAIALQAIAMAAAPQAAAOgHANQgGALgQAIQgNAIgVAAgArBA5IAoAAQALAAAFgFQAHgGAAgJQAAgJgHgHQgFgHgLAAIgoAAgArBgQIAigCQAJABAGgFQAFgGAAgJQAAgIgFgGQgGgGgJAAIgiAAgAvuBcIAAhKIhFAAIAABKIgnAAIAAi3IAnAAIAABMIBFAAIAAhMIAmAAIAAC3g");
	this.shape.setTransform(115.4,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,11.8,223.2,18.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFjC2QgggVgSgoQgSgoAAg4QAAg1ASgpQASgpAggVQAhgWAqAAQAsAAAhAWQAgAVASApQARApAAA1QAAA4gRAoQgSAoggAVQghAWgsAAQgqAAghgWgAGBhWQgUAQgKAdQgKAfAAAjQAAAmAKAdQAKAeAUARQAUAPAZAAQApAAAXgkQAXgiAAg7QAAg4gXglQgXgjgpgBQgZABgUARgAAIC2QgegVgSgoQgSgoAAg4QAAg1ASgpQASgpAegVQAhgWAqAAQAsAAAhAWQAgAVASApQARApAAA1QAAA4gRAoQgSAoggAVQghAWgsAAQgqAAghgWgAAmhWQgUAQgKAdQgIAfAAAjQAAAmAIAdQAKAeAUARQAUAPAZAAQApAAAXgkQAXgiAAg7QAAg4gXglQgXgjgpgBQgZABgUARgAlRC2QghgVgRgoQgSgoAAg4QAAg1ASgpQARgpAhgVQAhgWAqAAQAsAAAgAWQAhAVASApQARApAAA1QAAA4gRAoQgSAoghAVQggAWgsAAQgqAAghgWgAkzhWQgUAQgKAdQgKAfAAAjQAAAmAKAdQAKAeAUARQAUAPAZAAQAoAAAYgkQAWgiAAg7QAAg4gWglQgYgjgogBQgZABgUARgAsnC/QgbgMgRgWQgSgXgFgcIA+AAQAFAVASAOQAUANAXAAQAbAAARgRQATgRAAgdQAAgegTgSQgRgSgbAAQgSAAgSAJQgRAKgKAPIgwgcIAAi0IDRAAIAAAyIiXAAIAABjQAMgKASgGQAQgEARAAQAgAAAZAMQAXALAPAbQAQAZAAAkQAAAfgOAbQgOAZgcAPQgbAPgpAAQggAAgagNgA7+C7QgbgSgPgeQgPgdAAglQAAgjAPgfQAPgbAbgRQAdgSAlAAQAmAAAdASQAcARAPAbQAPAfAAAjQAAAmgPAdQgPAegcARQgdARgmAAQglAAgdgRgA7wANQgTAXAAAlQAAAlATAYQATAZAhAAQAjAAARgZQATgYAAglQAAglgTgXQgRgXgjAAQghAAgTAXgAY/DIIAAjmIhLCqIgpAAIhLitIAADpIg6AAIAAldIA6AAIBgDaIBfjaIA6AAIAAFdgARGDIICPl1IA1AAIiMF1gAMbDIIAAhCIgaAAIAAgxIAaAAIAAjqICNAAQAfAAAZANQAYANANAWQAPAXAAAcQAAAegPAUQgNAZgYAMQgZANgfAAIhTAAIAAAjIA4AAIAAAxIg4AAIAABCgANVAAIBRAAQAbAAANgMQAPgQAAgWQAAgVgPgOQgNgPgbABIhRAAgAxIDIIBNiAQgJADgMAAQgcAAgagNQgbgMgPgZQgRgZAAghQAAgjARgbQAPgaAbgRQAcgPAhAAQAhAAAbAPQAcARAPAaQAQAbAAAjQAAARgGAQQgFARgHAOIhoCpgAw2hRQgRATAAAdQAAAcAQAPQAQAQAdAAQAcAAARgSQARgNAAgcQAAgdgRgTQgRgTgcAAQgaAAgSATgA3SDIIAAjLIhPAAIAAgwIDSAAIAAAwIhPAAIAADLgAarAaIAAgQIBGhWQARgZAHgOQAIgOAAgJQAAgQgKgJQgKgHgOgBQgNABgKAHQgKAJAAAQQAAAVAPAHIgUAbQgOgIgJgOQgHgMAAgVQAAgUAIgPQAKgPAPgIQARgHASAAQATAAAQAHQAPAIALAPQAIAPAAAUQAAAcgYAeIg5BLIBVAAIAAAfg");
	this.shape.setTransform(22.5,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.4,22.4,369.8,40.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cat_cut_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,146);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cat_cut_08();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,56);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cat_cut_04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,58);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,60);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pattern();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,48);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.city();
	this.instance.setTransform(-18,-7,1.184,1.149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-7,284.2,275.7);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wall();
	this.instance.setTransform(16,576.8,0.859,0.755,0,180,0);

	this.instance_1 = new lib.wall();
	this.instance_1.setTransform(16,-20,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-20,357.4,596.8);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cat_cut_07();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,93);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 22
	this.instance = new lib.Символ22();
	this.instance.setTransform(454.6,258,0.922,0.922,0,0,0,122.1,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({x:149.6},9,cjs.Ease.get(1)).wait(24).to({x:-152.3},10,cjs.Ease.get(-1)).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(448,252.9,1,1,0,0,0,143,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:143},9,cjs.Ease.get(1)).wait(38).to({x:-158.9},10,cjs.Ease.get(-1)).to({_off:true},6).wait(41));

	// Символ 19
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(452.7,269.3,0.605,0.605,0,0,0,76.7,14.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:147.7},9,cjs.Ease.get(1)).wait(38).to({x:-154.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308.8,251.3,223.2,18.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(119,11,1,1,0,0,0,118,21);
	this.instance.alpha = 0.629;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzUDxIAAnhMAmpAAAIAAHhg");
	this.shape.setTransform(121.8,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-11,247.5,48.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(300.4,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(268.9,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(300.4,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(268.9,45.7,0.634,0.634,0,0,180,25,24.1);

	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(237.3,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(205.8,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_6 = new lib.Символ8();
	this.instance_6.setTransform(237.3,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(205.8,45.7,0.634,0.634,0,0,180,25,24.1);

	this.instance_8 = new lib.Символ8();
	this.instance_8.setTransform(174,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_9 = new lib.Символ8();
	this.instance_9.setTransform(142.5,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_10 = new lib.Символ8();
	this.instance_10.setTransform(174,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_11 = new lib.Символ8();
	this.instance_11.setTransform(142.5,45.7,0.634,0.634,0,0,180,25,24.1);

	this.instance_12 = new lib.Символ8();
	this.instance_12.setTransform(111.2,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_13 = new lib.Символ8();
	this.instance_13.setTransform(79.7,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_14 = new lib.Символ8();
	this.instance_14.setTransform(111.2,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_15 = new lib.Символ8();
	this.instance_15.setTransform(79.7,45.7,0.634,0.634,0,0,180,25,24.1);

	this.instance_16 = new lib.Символ8();
	this.instance_16.setTransform(47.9,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_17 = new lib.Символ8();
	this.instance_17.setTransform(16.4,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_18 = new lib.Символ8();
	this.instance_18.setTransform(47.9,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_19 = new lib.Символ8();
	this.instance_19.setTransform(16.4,45.7,0.634,0.634,0,0,180,25,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak7EwIAApfIJ3AAIAAJfg");
	this.shape.setTransform(147.4,30.4,4.656,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.3,60.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(0,30,1,1,0,0,0,67,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsuFJIAAqRIZdAAIAAKRg");
	this.shape.setTransform(0,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-6.9,163,67);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(21,29,1,1,0,0,0,21,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.8,x:22,y:29.7},14,cjs.Ease.get(-1)).to({rotation:-3.7,x:22.9,y:30.3},15,cjs.Ease.get(1)).to({rotation:-1.8,x:22,y:29.7},15,cjs.Ease.get(-1)).to({rotation:0,x:21,y:29},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,58);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(27.5,28,1,1,0,0,0,27.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-11,x:21.2,y:23.9},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-22.2,x:14.9,y:19.7},12,cjs.Ease.get(1)).to({regX:27.4,scaleX:1,scaleY:1,rotation:-11,x:21.2,y:23.9},10,cjs.Ease.get(-1)).to({regX:27.5,scaleX:1,scaleY:1,rotation:0,x:27.5,y:28},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,56);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(79.5,73,1,1,0,0,0,79.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.5,x:79.6},19,cjs.Ease.get(-1)).to({rotation:-3.2},20,cjs.Ease.get(1)).to({rotation:-1.5},20,cjs.Ease.get(-1)).to({rotation:0,x:79.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,146);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(563.6,49.6,0.929,0.929,0,0,0,27.5,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(510.7,-4.4,0.929,0.929,0,0,0,79.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(474.1,75.5,0.929,0.929,0,0,0,21.1,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(541.3,89.9,0.929,0.929,0,0,0,79.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(436.8,-72.2,178.3,205.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(236.1,44.5,1.057,1.057,0,0,0,67,30);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(284.2,29.7,0.999,0.977,0,0,180,31.7,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315.9,76.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-278.7,213.7,0.865,0.865,0,0,0,79.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:79.4,regY:73.1,x:-274.8,y:213.8},39,cjs.Ease.get(-1)).to({regX:79.5,regY:73,x:-270.7,y:213.7},38,cjs.Ease.get(1)).to({regX:79.4,regY:73.1,x:-274.7,y:213.8},38,cjs.Ease.get(-1)).to({regX:79.5,regY:73,x:-278.7,y:213.7},40,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(166,150.1,1,1,0,0,0,166,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:172.1},39,cjs.Ease.get(-1)).to({x:178},38,cjs.Ease.get(1)).to({x:172.2},38,cjs.Ease.get(-1)).to({x:166},40,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(170.5,120.5,1,1,0,0,0,120,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:160.4},39,cjs.Ease.get(-1)).to({x:150.5},38,cjs.Ease.get(1)).to({x:160.3},38,cjs.Ease.get(-1)).to({x:170.5},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-20,357.4,596.8);


// stage content:



(lib.dom_cat240400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Символ 9
	this.instance = new lib.Символ16();
	this.instance.setTransform(111.8,23.6,1.013,1.013,0,0,0,157.8,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(149.8,383.4,1,1,0,0,0,149.3,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 8
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(351.6,182.9,1,1,0,0,0,345.6,138.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(-8.2,176.5,0.982,0.982,0,0,0,26.5,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.1,185,585.9,610.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;