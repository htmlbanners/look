(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dom_cat_728_90_atlas_.png?1471094562972", id:"dom_cat_728_90_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"dom_cat_728_90_atlas_", frames: [[242,378,159,146],[193,620,42,58],[242,526,159,93],[136,620,55,56],[0,378,240,240],[0,620,134,60],[136,678,50,48],[0,0,416,376]]}
];


// symbols:



(lib.cat_cut_02 = function() {
	this.spriteSheet = ss["dom_cat_728_90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cat_cut_04 = function() {
	this.spriteSheet = ss["dom_cat_728_90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cat_cut_07 = function() {
	this.spriteSheet = ss["dom_cat_728_90_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cat_cut_08 = function() {
	this.spriteSheet = ss["dom_cat_728_90_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.city = function() {
	this.spriteSheet = ss["dom_cat_728_90_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["dom_cat_728_90_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pattern = function() {
	this.spriteSheet = ss["dom_cat_728_90_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wall = function() {
	this.spriteSheet = ss["dom_cat_728_90_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgoxAFHIAAqNMBRjAAAIAAKNg");
	this.shape.setTransform(261,32.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,522,65.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604B3B").s().p("AgEAxIAAgVQgNgCgIgIQgHgHAAgLQAAgLAHgIQAIgHANgBIAAgVIAJAAIAAAVQANABAIAHQAHAIAAALQAAALgHAHQgIAIgNACIAAAVgAAFAQQAIgBAEgEQAFgFAAgGQAAgGgFgFQgEgEgIgBgAgQgLQgFAFAAAGQAAAGAFAEQAEAFAIABIAAggQgIAAgEAFg");
	this.shape.setTransform(235.2,51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAHQADgEAEgCQAEgCADAAQAHAAAFADQAGAEADAGQACAHAAAIQAAAIgCAGQgEAGgEAEQgGADgHAAQgCAAgFgCQgEgCgDgDIAAAdgAgJgWQgFAFAAAHQAAAJAFADQADAGAGgBQAGABADgGQAEgDABgIQgBgIgEgFQgDgGgGAAQgFAAgEAGg");
	this.shape_1.setTransform(228.6,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#604B3B").s().p("AgEAFQgCgDAAgCQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAACgCADQgCACgDAAQgCAAgCgCg");
	this.shape_2.setTransform(224.2,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#604B3B").s().p("AALAmIAAgkIgUAkIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1gAgIgbQgEgCgCgGIAIgCQABADACACIADABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCABgDIAHACQgBAGgFACQgEAEgEAAQgEAAgEgEg");
	this.shape_3.setTransform(220,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_4.setTransform(214.2,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_5.setTransform(208.4,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#604B3B").s().p("AgfAbIAAg1IAMAAIAAArIAPAAIAAgrIAJAAIAAArIAPAAIAAgrIAMAAIAAA1g");
	this.shape_6.setTransform(201.7,51.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#604B3B").s().p("AgNAaQgEgCgCgEQgDgEAAgEQABgJAGgDQAFgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgEACgBAEIgIgFQACgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQACAFAAAHIAAAgIgIAAIgCgFQgIAGgIAAQgEAAgFgCgAgFADQgFACAAAGQAAAEADACQAEACADAAQAEAAAEgDQADgCAAgFIAAgJIgEAAQgHAAgFADg");
	this.shape_7.setTransform(194.8,51.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#604B3B").s().p("AAOAbIAAghIgMAVIgCAAIgNgVIAAAhIgMAAIAAg1IAMAAIANAZIAOgZIAMAAIAAA1g");
	this.shape_8.setTransform(188.8,51.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#604B3B").s().p("AgNAYQgGgEgDgGQgEgHAAgHQAAgHAEgGQADgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQACAGAAAHQAAAHgCAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_9.setTransform(182.5,51.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#604B3B").s().p("AATAhIAAgJIglAAIAAAJIgLAAIAAgUIAGAAQAIgKAAgOIAAgVIAnAAIAAAtIAGAAIAAAUgAgDgMQAAALgCAFQgCAGgDADIAXAAIAAgiIgQAAg");
	this.shape_10.setTransform(175.8,52.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#604B3B").s().p("AgEAZQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCgAgEgNQgCgCAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_11.setTransform(167.3,52);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_12.setTransform(162.9,51.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#604B3B").s().p("AgEAbIAAgrIgRAAIAAgKIAsAAIAAAKIgSAAIAAArg");
	this.shape_13.setTransform(157.4,51.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#604B3B").s().p("AALAmIAAgkIgUAkIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1gAgIgbQgEgCgCgGIAIgCQABADACACIADABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCABgDIAHACQgBAGgFACQgEAEgEAAQgEAAgEgEg");
	this.shape_14.setTransform(151.8,50.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#604B3B").s().p("AgNAaQgEgCgDgEQgCgEABgEQgBgJAHgDQAFgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQADAFgBAHIAAAgIgIAAIgCgFQgIAGgIAAQgEAAgFgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_15.setTransform(145.9,51.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#604B3B").s().p("AgKAZQgGgEgDgHQgDgGAAgIQAAgHADgGQADgHAGgDQAGgEAGAAQAHAAAFADQAGADADAEIgJAGIgFgFIgHgBQgFAAgEAFQgEAFAAAHQAAAIAEAFQAEAFAFAAQAEAAADgBQADgCACgDIAJAGQgDAEgGADQgGADgGAAQgGAAgGgDg");
	this.shape_16.setTransform(140.5,51.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#604B3B").s().p("AgMAaQgFgCgDgEQgBgEAAgEQAAgJAFgDQAHgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAFgDAGAAQAGAAAFACQAFADADAFQACAFABAHIAAAgIgJAAIgBgFQgKAGgGAAQgGAAgDgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_17.setTransform(131.3,51.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_18.setTransform(125.8,51.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#604B3B").s().p("AAKAbIAAgSIgKABIgHARIgNAAIAKgTQgFgCgDgFQgCgCAAgGQAAgFACgEQACgFAEgCQAFgDAGAAIAWAAIAAA1gAgCgQIgEADQgCACAAAEQAAAEACACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIAKAAIAAgQIgKAAIAAAAIgCAAg");
	this.shape_19.setTransform(116.6,51.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_20.setTransform(111.1,51.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#604B3B").s().p("AAMAjIAAgQIgiAAIAAg1IALAAIAAArIAQAAIAAgrIAMAAIAAArIAGAAIAAAag");
	this.shape_21.setTransform(105.2,52.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#604B3B").s().p("AgMAaQgFgCgCgEQgCgEAAgEQAAgJAFgDQAHgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgEACgBAEIgIgFQACgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQADAFAAAHIAAAgIgJAAIgBgFQgKAGgGAAQgGAAgDgCgAgFADQgFACAAAGQAAAEADACQADACAEAAQAEAAAEgDQADgCAAgFIAAgJIgEAAQgHAAgFADg");
	this.shape_22.setTransform(99.1,51.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAHQADgEAEgCQAFgCADAAQAGAAAFADQAGAEACAGQADAHAAAIQAAAIgDAGQgDAGgFAEQgFADgGAAQgEAAgDgCQgFgCgDgDIAAAdgAgKgWQgDAFAAAHQAAAJADADQAFAGAFgBQAGABAEgGQADgDAAgIQAAgIgDgFQgFgGgFAAQgFAAgFAGg");
	this.shape_23.setTransform(93.6,53);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#604B3B").s().p("AgNAaQgEgCgDgEQgCgEAAgEQAAgJAHgDQAFgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQADAFgBAHIAAAgIgIAAIgBgFQgJAGgIAAQgEAAgFgCgAgEADQgGACAAAGQAAAEADACQAEACADAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_24.setTransform(87.4,51.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#604B3B").s().p("AgVAbIgCgBIAAgLIABAAIADABQADAAABgGIABgQIAAgVIAmAAIAAA2IgMAAIAAgrIgOAAIAAAJQAAARgEAJQgEAJgHAAIgEgBg");
	this.shape_25.setTransform(81.6,51.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#604B3B").s().p("AAJAbIgSgXIAAAXIgMAAIAAg1IAMAAIAAATIAQgTIANAAIgVAZIAXAcg");
	this.shape_26.setTransform(76.2,51.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_27.setTransform(70.3,51.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#604B3B").s().p("AATAhIAAgJIglAAIAAAJIgLAAIAAgUIAGAAQAIgKAAgOIAAgVIAnAAIAAAtIAGAAIAAAUgAgDgMQAAALgCAFQgCAGgDADIAXAAIAAgiIgQAAg");
	this.shape_28.setTransform(63.7,52.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#604B3B").s().p("AAKAbIAAgSIgKABIgHARIgNAAIAKgTQgFgCgDgFQgCgCAAgGQAAgFACgEQACgFAEgCQAFgDAGAAIAWAAIAAA1gAgCgQIgEADQgCACAAAEQAAAEACACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIAKAAIAAgQIgKAAIAAAAIgCAAg");
	this.shape_29.setTransform(53.8,51.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#604B3B").s().p("AgNAaQgEgCgDgEQgCgEAAgEQAAgJAHgDQAFgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgEACgBAEIgJgFQADgFAGgEQAFgDAGAAQAGAAAFACQAFADADAFQADAFgBAHIAAAgIgIAAIgCgFQgJAGgHAAQgFAAgEgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAAEgDQADgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_30.setTransform(48.3,51.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_31.setTransform(42.8,51.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#604B3B").s().p("AgFAbIAAgrIgRAAIAAgKIAtAAIAAAKIgSAAIAAArg");
	this.shape_32.setTransform(37.4,51.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#604B3B").s().p("AAJAbIgSgXIAAAXIgMAAIAAg1IAMAAIAAATIAQgTIANAAIgVAZIAXAcg");
	this.shape_33.setTransform(32.1,51.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_34.setTransform(26.2,51.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgCgHAAgHQAAgHACgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAGAAAHQAAAHgDAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_35.setTransform(20.2,51.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAHQADgEAEgCQAFgCACAAQAHAAAFADQAFAEADAGQADAHAAAIQAAAIgDAGQgCAGgGAEQgEADgIAAQgDAAgEgCQgEgCgDgDIAAAdgAgJgWQgFAFAAAHQAAAJAFADQADAGAGgBQAGABAEgGQADgDAAgIQAAgIgDgFQgEgGgGAAQgFAAgEAGg");
	this.shape_36.setTransform(14.2,53);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#604B3B").s().p("AAPAmIAAhAIgdAAIAABAIgNAAIAAhLIA3AAIAABLg");
	this.shape_37.setTransform(7.5,50.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#604B3B").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_38.setTransform(499,40.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#604B3B").s().p("AgMAaQgFgCgCgEQgCgEAAgEQAAgJAFgDQAHgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAFgDAGAAQAGAAAFACQAFADADAFQACAFABAHIAAAgIgJAAIgBgFQgKAGgGAAQgGAAgDgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_39.setTransform(494.8,38.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#604B3B").s().p("AATAhIAAgJIglAAIAAAJIgLAAIAAgUIAGAAQAIgKAAgOIAAgVIAnAAIAAAtIAGAAIAAAUgAgDgMQAAALgCAFQgCAGgDADIAXAAIAAgiIgQAAg");
	this.shape_40.setTransform(488.5,39.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgCgHAAgHQAAgHACgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAGAAAHQAAAHgDAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_41.setTransform(481.9,38.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#604B3B").s().p("AgSAbIAAg1IAlAAIAAAKIgZAAIAAArg");
	this.shape_42.setTransform(476.6,38.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#604B3B").s().p("AgMAjQgGgDgDgHQgEgGAAgGIACgIIACgFIACgDIATgiIAOAAIgQAbIADAAQAGAAAGACQAGAEADAEQAEAEAAAJQAAAGgEAGQgDAHgGADQgGAEgHAAQgGAAgGgEgAgIACQgEAEAAAHQAAAFAEAFQAEAEAEAAQAFAAAEgEQAEgFAAgFQAAgIgDgDQgEgCgGAAQgEAAgEACg");
	this.shape_43.setTransform(467.3,37.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#604B3B").s().p("AAAAmIAAg7IgMAJIAAgNIASgMIAHAAIAABLg");
	this.shape_44.setTransform(462,37.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#604B3B").s().p("AgPAiQgHgEgEgKQgEgIAAgMQAAgKAEgKQAEgIAHgFQAHgFAIAAQAJAAAHAFQAHAFAEAIQAEAKAAAKQAAAMgEAIQgEAKgHAEQgHAFgJAAQgIAAgHgFgAgJgYQgEAEgCAHQgDAGAAAHQAAAIADAGQACAHAEAEQAFADAEAAQAJAAAFgIQAEgHABgNQgBgLgEgIQgFgIgJAAQgEAAgFADg");
	this.shape_45.setTransform(456.7,37.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#604B3B").s().p("AgXAnIAAgGIAXgdIAIgMQADgEgBgEQABgFgEgDQgDgDgEAAQgEAAgDADQgEADABAFQAAAIAEACIgGAHQgEgBgDgEQgEgFAAgHQAAgHAEgFQADgEAGgDQAFgDAFABQAGgBAEADQAGADADAEQAEAFAAAHQAAAKgJAIIgSAZIAcAAIAAAMg");
	this.shape_46.setTransform(450.5,37.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#604B3B").s().p("AgNAaQgEgCgCgEQgDgEAAgEQABgJAFgDQAGgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgEACgBAEIgIgFQACgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQACAFAAAHIAAAgIgIAAIgCgFQgIAGgIAAQgEAAgFgCgAgFADQgFACAAAGQAAAEADACQAEACADAAQAEAAAEgDQADgCAAgFIAAgJIgEAAQgHAAgFADg");
	this.shape_47.setTransform(440.9,38.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#604B3B").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_48.setTransform(435.7,38.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#604B3B").s().p("AgKAZQgGgEgDgHQgDgGAAgIQAAgHADgGQADgHAGgDQAGgEAGAAQAHAAAFADQAGADADAEIgJAGIgFgFIgHgBQgFAAgEAFQgEAFAAAHQAAAIAEAFQAEAFAFAAQAEAAADgBQADgCACgDIAJAGQgDAEgGADQgGADgGAAQgGAAgGgDg");
	this.shape_49.setTransform(430.3,38.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#604B3B").s().p("AgNAnIAKgZIgVgzIALAAIANAlIANglIAMAAIgaBMg");
	this.shape_50.setTransform(424.7,39.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#604B3B").s().p("AgSAbIAAg1IAlAAIAAAKIgZAAIAAArg");
	this.shape_51.setTransform(419.6,38.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#604B3B").s().p("AgWAbIAAg1IAYAAQAJAAAFAEQAFAEAAAHQAAAEgCADQgBADgDABQADAAACAEQADADAAAFQAAAEgDAEQgCADgEACQgEACgHAAgAgLARIAOAAQAEAAADgCQACgCAAgDQAAgDgCgCQgDgCgEAAIgOAAgAgLgDIAMAAQAEAAADgCQACgCAAgDQAAgDgCgCQgDgCgEAAIgMAAg");
	this.shape_52.setTransform(414.4,38.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#604B3B").s().p("AgMAaQgFgCgCgEQgCgEAAgEQAAgJAFgDQAHgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgIgFQACgFAGgEQAFgDAGAAQAGAAAFACQAFADADAFQACAFABAHIAAAgIgJAAIgBgFQgKAGgGAAQgGAAgDgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_53.setTransform(408.4,38.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#604B3B").s().p("AAAAmIAAg7IgMAJIAAgNIASgMIAHAAIAABLg");
	this.shape_54.setTransform(400.2,37.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#604B3B").s().p("AgLAkIgJgDIgEgCIAFgKIADACIAHADIAJABQADAAAEgCQADgCACgDIACgHQAAgFgEgEQgEgEgGAAIgJAAIAAgEIAPgXIgYAAIAAgKIApAAIAAAFIgSAXQAFAAAFAEQAEACADADQADAGAAAIQAAAJgEAFQgFAFgGADQgHADgDAAQgGAAgFgDg");
	this.shape_55.setTransform(395,37.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#604B3B").s().p("AgNAYQgGgEgDgGQgDgHAAgHQAAgHADgGQADgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQADAGABAHQgBAHgDAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_56.setTransform(385.3,38.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#604B3B").s().p("AAKAbIAAgrIgTAAIAAArIgMAAIAAg1IArAAIAAA1g");
	this.shape_57.setTransform(379.4,38.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#604B3B").s().p("AAAAmIAAg7IgMAJIAAgNIASgMIAHAAIAABLg");
	this.shape_58.setTransform(371,37.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#604B3B").s().p("AgKAZQgGgEgDgHQgDgGAAgIQAAgHADgGQADgHAGgDQAGgEAGAAQAHAAAFADQAGADADAEIgJAGIgFgFIgHgBQgFAAgEAFQgEAFAAAHQAAAIAEAFQAEAFAFAAQAEAAADgBQADgCACgDIAJAGQgDAEgGADQgGADgGAAQgGAAgGgDg");
	this.shape_59.setTransform(362.8,38.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#604B3B").s().p("AAKAbIAAgSIgKABIgHARIgNAAIAKgTQgFgCgDgFQgCgCAAgGQAAgFACgEQACgFAEgCQAFgDAGAAIAWAAIAAA1gAgCgQIgEADQgCACAAAEQAAAEACACQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAIACAAIAKAAIAAgQIgKAAIAAAAIgCAAg");
	this.shape_60.setTransform(353.8,38.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_61.setTransform(348.3,38.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#604B3B").s().p("AALAjIAAgPIgiAAIAAg2IANAAIAAArIAQAAIAAgrIAMAAIAAArIAGAAIAAAag");
	this.shape_62.setTransform(342.4,39.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#604B3B").s().p("AAJAbIgSgXIAAAXIgMAAIAAg1IAMAAIAAATIAQgTIANAAIgVAZIAXAcg");
	this.shape_63.setTransform(336.7,38.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#604B3B").s().p("AAWAmIgHgTIgIADQgDABgEAAQgDAAgEgBIgHgDIgHATIgNAAIAdhLIALAAIAdBLgAgLAJQAGAEAFgBQAFABAGgEIgLggg");
	this.shape_64.setTransform(329.9,37.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#604B3B").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQACAAADACQACACAAACQAAADgCACQgDACgCAAQgCAAgCgCg");
	this.shape_65.setTransform(321.3,40.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#604B3B").s().p("AgEAbIAAgrIgRAAIAAgKIAsAAIAAAKIgSAAIAAArg");
	this.shape_66.setTransform(317.5,38.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_67.setTransform(311.8,38.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#604B3B").s().p("AgVAbIgCgBIAAgLIABAAIADABQADAAABgGIABgQIAAgVIAmAAIAAA2IgMAAIAAgrIgOAAIAAAJQAAARgEAJQgEAJgHAAIgEgBg");
	this.shape_68.setTransform(305.8,38.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#604B3B").s().p("AgPAiQgHgEgEgKQgEgIAAgMQAAgKAEgKQAEgIAHgFQAHgFAIAAQAJAAAHAFQAHAFAEAIQAEAKAAAKQAAAMgEAIQgEAKgHAEQgHAFgJAAQgIAAgHgFgAgJgYQgEAEgCAHQgDAGAAAHQAAAIADAGQACAHAEAEQAFADAEAAQAIAAAFgIQAFgHABgNQgBgLgFgIQgFgIgIAAQgEAAgFADg");
	this.shape_69.setTransform(295.7,37.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#604B3B").s().p("AAAAmIAAg7IgMAJIAAgNIASgMIAHAAIAABLg");
	this.shape_70.setTransform(289.9,37.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#604B3B").s().p("AgNAYQgGgEgDgGQgDgHAAgHQAAgHADgGQADgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQAEAGAAAHQAAAHgEAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_71.setTransform(281.4,38.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#604B3B").s().p("AATAhIAAgJIglAAIAAAJIgLAAIAAgUIAGAAQAIgKAAgOIAAgVIAnAAIAAAtIAGAAIAAAUgAgDgMQAAALgCAFQgCAGgDADIAXAAIAAgiIgQAAg");
	this.shape_72.setTransform(274.7,39.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#604B3B").s().p("AAOAbIgOgUIgNAUIgNAAIAVgbIgTgaIAOAAIAKARIAMgRIANAAIgTAaIAUAbg");
	this.shape_73.setTransform(264.6,38.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#604B3B").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_74.setTransform(258.5,39.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#604B3B").s().p("AgLAkIgJgDIgEgCIAFgKIADACIAHADIAJABQADAAAEgCQADgCACgDIACgHQAAgFgEgEQgEgEgGAAIgJAAIAAgEIAPgXIgYAAIAAgKIApAAIAAAFIgSAXQAFAAAFAEQAEACADADQADAGAAAIQAAAJgEAFQgFAFgGADQgHADgDAAQgGAAgFgDg");
	this.shape_75.setTransform(252.3,37.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#604B3B").s().p("AgEAbIAAgrIgRAAIAAgKIAsAAIAAAKIgSAAIAAArg");
	this.shape_76.setTransform(243,38.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgDgHAAgHQAAgHADgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQACAGAAAHQAAAHgCAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_77.setTransform(237.3,38.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#604B3B").s().p("AAOAbIAAghIgMAVIgCAAIgNgVIAAAhIgMAAIAAg1IAMAAIANAZIAOgZIAMAAIAAA1g");
	this.shape_78.setTransform(227.4,38.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgDgHAAgHQAAgHADgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQACAGAAAHQAAAHgCAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_79.setTransform(221.1,38.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#604B3B").s().p("AAJAbIgSgXIAAAXIgMAAIAAg1IAMAAIAAATIAQgTIANAAIgVAZIAXAcg");
	this.shape_80.setTransform(215.4,38.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#604B3B").s().p("AgNAYQgGgEgDgGQgDgHAAgHQAAgHADgGQADgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQAEAGAAAHQAAAHgEAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_81.setTransform(209.4,38.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAGQADgDAEgCQAFgCADAAQAGAAAFAEQAFADADAHQADAFAAAJQAAAJgDAEQgCAHgGADQgFAFgGAAQgDAAgEgDQgFgBgDgEIAAAdgAgKgXQgDAFAAAIQAAAJADADQAFAGAFAAQAGAAAEgGQADgDAAgIQAAgIgDgGQgFgFgFAAQgFAAgFAFg");
	this.shape_82.setTransform(203.5,39.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#604B3B").s().p("AgKAZQgGgEgDgHQgDgGAAgIQAAgHADgGQADgHAGgDQAGgEAGAAQAHAAAFADQAGADADAEIgJAGIgFgFIgHgBQgFAAgEAFQgEAFAAAHQAAAIAEAFQAEAFAFAAQAEAAADgBQADgCACgDIAJAGQgDAEgGADQgGADgGAAQgGAAgGgDg");
	this.shape_83.setTransform(197.5,38.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_84.setTransform(188.4,38.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#604B3B").s().p("AAHAjQgEgFAAgHQAAgEABgDQACgDAEgDQADgCAFAAQAIAAAEAEQAEAFAAAGQAAAEgCADQgCAEgDADQgEACgFAAQgHAAgEgEgAANASQgCABAAAEQAAAEACACQACACADgBQADABACgCQACgCAAgEQAAgEgCgBQgCgBgDAAIgFABgAgaAmIAphLIAMAAIgpBLgAgdgMQgEgEAAgHQAAgDACgEQABgDAEgCQAEgDAEAAQAGAAADACQAEADACADQACAEAAADQAAAEgCAEQgCAEgEACQgDACgGABQgHAAgEgGgAgWgcQgDACAAADQAAAEACACIAFACQADgBACgBQADgCAAgEQAAgDgDgCQgCgCgDAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_85.setTransform(177.8,37.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#604B3B").s().p("AgPAiQgHgEgEgKQgEgIAAgMQAAgKAEgKQAEgIAHgFQAHgFAIAAQAJAAAHAFQAIAFADAIQAEAKAAAKQAAAMgEAIQgDAKgIAEQgHAFgJAAQgIAAgHgFgAgIgYQgFAEgCAHQgCAGAAAHQAAAIACAGQACAHAFAEQAEADAEAAQAIAAAFgIQAGgHAAgNQAAgLgGgIQgFgIgIAAQgEAAgEADg");
	this.shape_86.setTransform(169.9,37.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#604B3B").s().p("AgLAjQgGgCgEgFQgEgFgBgHIAOAAQABAGAEACQAEADAEAAQAFAAAEgEQAEgDAAgGQAAgHgEgEQgEgDgFAAQgDAAgEABQgDACgDADIgKgGIAAglIAsAAIAAAKIgfAAIAAAWIAGgEIAGgBQAGAAAGADQAFADADAEQAEAFAAAJQAAAGgDAGQgDAGgGADQgGAEgJAAQgFAAgGgEg");
	this.shape_87.setTransform(163.4,37.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_88.setTransform(153.5,38.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_89.setTransform(147.6,38.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#604B3B").s().p("AgVAbIgCgBIAAgLIABAAIADABQADAAABgGIABgQIAAgVIAmAAIAAA2IgMAAIAAgrIgOAAIAAAJQAAARgEAJQgEAJgHAAIgEgBg");
	this.shape_90.setTransform(141.5,38.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgCgHAAgHQAAgHACgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQAEAGAAAHQAAAHgEAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_91.setTransform(135.7,38.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#604B3B").s().p("AgOAjQgGgEgCgHQgDgGAAgGQAAgUALgNQALgOAVgEIACAKIgRAFQgEADgDADIgGAIIAHgEIAFgBQAHAAAGAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgGADQgGAEgIAAQgIAAgGgFgAgHgDQgEADgBACQgCAFAAAFQAAAEACAFQABAEAEADQADACAEAAQAHAAAEgFQAEgFAAgIQAAgJgEgDQgFgFgGAAQgEAAgDACg");
	this.shape_92.setTransform(129.4,37.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_93.setTransform(119.8,38.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#604B3B").s().p("AgKAZQgGgEgDgHQgDgGAAgIQAAgHADgGQADgHAGgDQAGgEAGAAQAHAAAFADQAGADADAEIgJAGIgFgFIgHgBQgFAAgEAFQgEAFAAAHQAAAIAEAFQAEAFAFAAQAEAAADgBQADgCACgDIAJAGQgDAEgGADQgGADgGAAQgGAAgGgDg");
	this.shape_94.setTransform(114.1,38.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgCgHAAgHQAAgHACgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAGAAAHQAAAHgDAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_95.setTransform(108.4,38.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_96.setTransform(102.5,38.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#604B3B").s().p("AgLAaIgIgDIAEgJIAGADQAFACAEAAQADAAADgDQAEgCAAgEQAAgDgDgCQgCgCgEAAIgLAAIAAgIIALAAQADAAACgBQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAgDgDgCQgCgCgEAAQgDAAgFACIgHACIgEgIIAFgCIAIgCIAGgBQAGAAAEACQAEACACAEQADADAAAEQAAAHgFAEQADABACADQABAEAAAEQAAAFgDAEQgCAEgFACQgFACgFAAQgEAAgHgCg");
	this.shape_97.setTransform(97.3,38.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#604B3B").s().p("AgWAbIAAg1IAZAAQAIAAAFAEQAFAEAAAHQAAAEgBADQgDADgDABQAEAAADAEQACADAAAFQAAAEgCAEQgCADgFACQgFACgFAAgAgLARIAOAAQAEAAACgCQADgCAAgDQAAgDgDgCQgCgCgEAAIgOAAgAgLgDIAMAAQAEAAACgCQADgCAAgDQAAgDgDgCQgCgCgEAAIgMAAg");
	this.shape_98.setTransform(92.1,38.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#604B3B").s().p("AAOAbIAAghIgMAVIgCAAIgNgVIAAAhIgMAAIAAg1IAMAAIANAZIAOgZIAMAAIAAA1g");
	this.shape_99.setTransform(82.3,38.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgCgHAAgHQAAgHACgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAGAAAHQAAAHgDAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_100.setTransform(76,38.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_101.setTransform(70.1,38.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#604B3B").s().p("AgUAbIAAg1IAMAAIAAATIAIAAIAJABQAFACAEAEQADACAAAHIgCAIQgBAEgEADQgEADgHAAgAgIASIAJAAQADAAADgCQADgCAAgFQAAgFgDgCQgDgCgDAAIgJAAg");
	this.shape_102.setTransform(64.7,38.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#604B3B").s().p("AgVAbIgCgBIAAgLIABAAIADABQADAAABgGIABgQIAAgVIAmAAIAAA2IgMAAIAAgrIgOAAIAAAJQAAARgEAJQgEAJgHAAIgEgBg");
	this.shape_103.setTransform(58.8,38.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#604B3B").s().p("AgMAaQgFgCgDgEQgBgEAAgEQgBgJAHgDQAGgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQACAFAAAHIAAAgIgIAAIgBgFQgJAGgHAAQgFAAgEgCgAgEADQgGACAAAGQAAAEADACQAEACADAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_104.setTransform(53.1,38.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#604B3B").s().p("AAJAbIAAgVIgKACQgJAAgGgFQgEgDAAgMIAAgOIALAAIAAAOQAAAGACADQADACAEAAIAJgBIAAgYIANAAIAAA1g");
	this.shape_105.setTransform(47.6,38.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#604B3B").s().p("AgNAaQgEgCgDgEQgCgEAAgEQAAgJAHgDQAFgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQADAFgBAHIAAAgIgIAAIgBgFQgKAGgHAAQgEAAgFgCgAgEADQgGACAAAGQAAAEADACQAEACADAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_106.setTransform(41.9,38.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_107.setTransform(36.4,38.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgCgHAAgHQAAgHACgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAGAAAHQAAAHgDAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_108.setTransform(30.5,38.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#604B3B").s().p("AgWAbIAAg1IAYAAQAJAAAFAEQAFAEAAAHQAAAEgCADQgBADgDABQADAAACAEQADADAAAFQAAAEgDAEQgCADgEACQgEACgHAAgAgLARIAOAAQAEAAACgCQADgCAAgDQAAgDgDgCQgCgCgEAAIgOAAgAgLgDIAMAAQAEAAADgCQACgCAAgDQAAgDgCgCQgDgCgEAAIgMAAg");
	this.shape_109.setTransform(24.8,38.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAGQADgDAEgCQAFgCADAAQAGAAAFAEQAGADACAHQADAFAAAJQAAAJgDAEQgDAHgFADQgFAFgGAAQgEAAgDgDQgFgBgDgEIAAAdgAgKgXQgDAFAAAIQAAAJADADQAFAGAFAAQAGAAAEgGQAEgDgBgIQABgIgEgGQgFgFgFAAQgFAAgFAFg");
	this.shape_110.setTransform(18.9,39.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_111.setTransform(12.7,38.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#604B3B").s().p("AAKAbIAAgrIgTAAIAAArIgMAAIAAg1IArAAIAAA1g");
	this.shape_112.setTransform(6.9,38.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_113.setTransform(450.4,24.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAHQADgEAEgCQAFgCADAAQAGAAAFADQAGAEADAGQACAHAAAIQAAAIgCAGQgEAGgFAEQgFADgGAAQgEAAgDgCQgFgCgDgDIAAAdgAgKgWQgDAFAAAHQAAAJADADQAFAGAFgBQAGABAEgGQADgDAAgIQAAgIgDgFQgFgGgFAAQgFAAgFAGg");
	this.shape_114.setTransform(444.6,25.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#604B3B").s().p("AAKAbIAAgrIgTAAIAAArIgMAAIAAg1IArAAIAAA1g");
	this.shape_115.setTransform(438.5,24.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#604B3B").s().p("AAHAiQgEgEAAgHQAAgDABgEQACgDAEgDQADgCAFAAQAIAAAEAFQAEAEAAAGQAAAEgCAEQgCADgDADQgEABgFABQgHAAgEgFgAANASQgCACAAADQAAAEACACQACABADABQADgBACgBQACgCAAgEQAAgDgCgCQgCgCgDAAIgFACgAgaAmIAphLIAMAAIgpBLgAgdgMQgEgEAAgGQAAgFACgDQABgEAEgCQAEgCAEAAQAGAAADACQAEACACAEQACADAAAFQAAAEgCADQgCAEgEACQgDADgGAAQgHgBgEgFgAgWgcQgDABAAAFQAAAEACABIAFACQADAAACgCQADgBAAgEQAAgFgDgBQgCgBgDgBQAAABgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_116.setTransform(428,23.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#604B3B").s().p("AgLAkIgJgDIgEgDIAFgJIADACIAHADIAJABQADAAAEgBQADgCACgEIACgHQAAgFgEgFQgEgDgGAAIgJAAIAAgFIAPgVIgYAAIAAgLIApAAIAAAFIgSAXQAFAAAFADQAEADADADQADAGAAAIQAAAIgEAGQgFAFgGADQgHACgDAAQgGAAgFgCg");
	this.shape_117.setTransform(420.7,23.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#604B3B").s().p("AgEABIAAgBIgBAAIgBgEQAAgDACgCQACgCACAAQADAAABACQADACAAADIgBAEIgDACIgJAKg");
	this.shape_118.setTransform(416.4,27.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#604B3B").s().p("AgMAmIAPgcIgDABQgGAAgGgDQgFgCgEgGQgEgDAAgJQAAgHAEgGQADgFAGgEQAGgDAGAAQAHAAAGADQAGAEADAFQAEAGAAAHIgBAIIgDAFIgCADIgUAigAgIgWQgEAFAAAFQAAAHAEAEQADABAFAAQAFAAAEgBQAEgEAAgHQAAgFgEgFQgEgDgFAAQgEAAgEADg");
	this.shape_119.setTransform(413.1,23.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#604B3B").s().p("AgNAaQgEgCgDgEQgCgEAAgEQAAgJAHgDQAFgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgEACgBAEIgJgFQADgFAGgEQAFgDAGAAQAGAAAFACQAFADADAFQADAFgBAHIAAAgIgIAAIgCgFQgJAGgHAAQgFAAgEgCgAgFADQgFACAAAGQAAAEADACQADACAEAAQAEAAAEgDQADgCAAgFIAAgJIgEAAQgHAAgFADg");
	this.shape_120.setTransform(403.4,24.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#604B3B").s().p("AAJAbIgSgXIAAAXIgMAAIAAg1IAMAAIAAATIAQgTIANAAIgVAZIAXAcg");
	this.shape_121.setTransform(398.1,24.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_122.setTransform(392.2,24.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#604B3B").s().p("AgEAbIAAgrIgSAAIAAgKIAsAAIAAAKIgRAAIAAArg");
	this.shape_123.setTransform(386.6,24.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#604B3B").s().p("AgNAYQgGgEgDgGQgEgHAAgHQAAgHAEgGQADgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQACAGAAAHQAAAHgCAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_124.setTransform(380.9,24.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#604B3B").s().p("AAKAbIAAgrIgTAAIAAArIgMAAIAAg1IArAAIAAA1g");
	this.shape_125.setTransform(375,24.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#604B3B").s().p("AAQAmIAAg3IggA3IgNAAIAAhLIANAAIAAA2IAgg2IAOAAIAABLg");
	this.shape_126.setTransform(368.5,23.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#604B3B").s().p("AgEAFQgCgDAAgCQAAgCACgCQACgCACAAQADAAABACQADACAAACQAAACgDADQgBACgDAAQgCAAgCgCg");
	this.shape_127.setTransform(360.2,26.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#604B3B").s().p("AgEAFQgCgDAAgCQAAgCACgCQACgCACAAQADAAABACQADACAAACQAAACgDADQgBACgDAAQgCAAgCgCg");
	this.shape_128.setTransform(357.7,26.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#604B3B").s().p("AgSAbIAAg1IAlAAIAAAKIgZAAIAAArg");
	this.shape_129.setTransform(354.3,24.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#604B3B").s().p("AAFAmIAAgQIghAAIAAgHIAlg0IAJAAIAAAwIALAAIgDALIgIAAIAAAQgAgMALIARAAIAAgZg");
	this.shape_130.setTransform(344.8,23.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#604B3B").s().p("AAAAmIAAg7IgMAJIAAgOIASgLIAHAAIAABLg");
	this.shape_131.setTransform(339.4,23.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#604B3B").s().p("AgPAiQgHgFgEgIQgEgJAAgMQAAgKAEgKQAEgJAHgEQAHgFAIAAQAJAAAHAFQAIAEADAJQAEAKAAAKQAAAMgEAJQgDAIgIAFQgHAFgJAAQgIAAgHgFgAgIgXQgFAEgCAGQgCAHAAAGQAAAIACAGQACAHAFADQAEAEAEAAQAIAAAFgIQAGgHAAgNQAAgLgGgIQgFgIgIAAQgEAAgEAEg");
	this.shape_132.setTransform(334.1,23.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#604B3B").s().p("AgWAmIAAgFIAWgeIAIgKQACgFAAgDQAAgGgDgDQgDgCgEAAQgEAAgDACQgDADAAAGQAAAGAEADIgGAHQgEgBgDgFQgDgEAAgGQAAgIADgEQADgFAGgDQAEgCAGAAQAFAAAFACQAGADADAFQADAEABAIQAAAJgJAIIgRAaIAbAAIAAAKg");
	this.shape_133.setTransform(327.8,23.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#604B3B").s().p("AAKAbIAAgSIgKABIgHARIgNAAIAKgTQgFgCgDgFQgCgCAAgGQAAgFACgEQACgFAEgCQAFgDAGAAIAWAAIAAA1gAgCgQIgEADQgCACAAAEQAAAEACACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIAKAAIAAgQIgKAAIAAAAIgCAAg");
	this.shape_134.setTransform(318.4,24.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAHQADgEAEgCQAFgCACAAQAHAAAFADQAFAEADAGQADAHAAAIQAAAIgDAGQgCAGgGAEQgEADgIAAQgDAAgEgCQgEgCgDgDIAAAdgAgJgWQgFAFAAAHQAAAJAFADQADAGAGgBQAGABAEgGQADgDAAgIQAAgIgDgFQgEgGgGAAQgFAAgEAGg");
	this.shape_135.setTransform(313,25.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#604B3B").s().p("AgOAjQgGgEgCgHQgDgGAAgGQAAgUALgNQALgOAVgEIACAKIgRAFQgEADgDADIgGAIIAHgEIAFgBQAHAAAGAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgGADQgGAEgIAAQgIAAgGgFgAgHgDQgEADgBACQgCAFAAAFQAAAEACAFQABAEAEADQADACAEAAQAHAAAEgFQAEgFAAgIQAAgJgEgDQgFgFgGAAQgEAAgDACg");
	this.shape_136.setTransform(306.5,23.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#604B3B").s().p("AgMAaQgFgCgCgEQgCgEAAgEQAAgJAFgDQAHgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAFgDAGAAQAGAAAFACQAFADADAFQACAFABAHIAAAgIgJAAIgBgFQgKAGgGAAQgGAAgDgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_137.setTransform(300.5,24.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#604B3B").s().p("AAJAbIgSgXIAAAXIgMAAIAAg1IAMAAIAAATIAQgTIANAAIgVAZIAXAcg");
	this.shape_138.setTransform(295.2,24.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_139.setTransform(289.3,24.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#604B3B").s().p("AATAhIAAgJIglAAIAAAJIgLAAIAAgUIAGAAQAIgKAAgOIAAgVIAnAAIAAAtIAGAAIAAAUgAgDgMQAAALgCAFQgCAGgDADIAXAAIAAgiIgQAAg");
	this.shape_140.setTransform(282.7,25);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#604B3B").s().p("AgZAmIAihAIgiAAIAAgLIAzAAIAAAGIglBFg");
	this.shape_141.setTransform(272.8,23.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#604B3B").s().p("AAAAmIAAg7IgMAJIAAgOIASgLIAHAAIAABLg");
	this.shape_142.setTransform(267.5,23.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#604B3B").s().p("AgFAbIAAgrIgRAAIAAgKIAsAAIAAAKIgRAAIAAArg");
	this.shape_143.setTransform(259.5,24.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#604B3B").s().p("AgNAYQgGgEgDgGQgDgHgBgHQABgHADgGQADgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQADAGAAAHQAAAHgDAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_144.setTransform(253.8,24.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#604B3B").s().p("AAAAmIAAg7IgMAJIAAgOIASgLIAHAAIAABLg");
	this.shape_145.setTransform(245.2,23.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#604B3B").s().p("AgLAkQgGgDgEgFQgEgFgBgGIAOAAQABAFAEADQAEACAEAAQAFAAAEgDQAEgEAAgGQAAgHgEgEQgEgDgFAAQgDAAgEABQgDACgDAEIgKgHIAAglIAsAAIAAALIgfAAIAAAVIAGgDIAGgBQAGAAAGACQAFADADAEQAEAFAAAJQAAAGgDAGQgDAGgGADQgGAEgJgBQgFAAgGgCg");
	this.shape_146.setTransform(239.9,23.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#604B3B").s().p("AgWAmIAAgFIAWgeIAIgKQADgFAAgDQAAgGgEgDQgDgCgEAAQgEAAgDACQgDADgBAGQAAAGAGADIgHAHQgFgBgCgFQgDgEAAgGQgBgIAEgEQADgFAFgDQAFgCAGAAQAFAAAGACQAFADADAFQADAEABAIQAAAJgJAIIgRAaIAbAAIAAAKg");
	this.shape_147.setTransform(233.4,23.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#604B3B").s().p("AgLAkIgJgDIgEgDIAFgJIADACIAHADIAJABQADAAAEgBQADgCACgEIACgHQAAgFgEgFQgEgDgGAAIgJAAIAAgFIAPgVIgYAAIAAgLIApAAIAAAFIgSAXQAFAAAFADQAEADADADQADAGAAAIQAAAIgEAGQgFAFgGADQgHACgDAAQgGAAgFgCg");
	this.shape_148.setTransform(227.1,23.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#604B3B").s().p("AAAAfIgDgHIgLgbIAAAYQAFAAACACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQAAABAAAAIgIABIgHAAIgHgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQABgEAFgBIAAgpQgFgBgBgFQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQACgCAEAAIAEAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQACABABAFIALAcIAAgYQgHAAAAgGQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAFgBIAGAAIAHABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgFABIAAApIAAAGIgCAEQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAgAAVAUQgHAAAAgFIABgDQABgCAFAAIACAAQAGAAABACIABADQAAAFgHAAgAAOgBIAAgMQAAgEADgCQACgCAEAAQAEAAACACQADACgBAEIAAAMQAAAHgIAAQgJAAAAgHgAAVgMIAAALQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgLQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_149.setTransform(220.7,24);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#604B3B").s().p("AAKAbIAAgSIgKABIgHARIgNAAIAKgTQgFgCgDgFQgCgCAAgGQAAgFACgEQACgFAEgCQAFgDAGAAIAWAAIAAA1gAgCgQIgEADQgCACAAAEQAAAEACACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIAKAAIAAgQIgKAAIAAAAIgCAAg");
	this.shape_150.setTransform(211,24.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_151.setTransform(205.5,24.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#604B3B").s().p("AgLAaIgIgDIADgJIAHADQAGACADAAQAEAAADgDQADgCAAgEQAAgDgDgCQgDgCgEAAIgKAAIAAgIIAKAAQAEAAADgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgDAAQgDAAgFACIgHACIgDgIIAEgCIAHgCIAHgBQAFAAAFACQAEACADAEQABADAAAEQAAAHgEAEQADABABADQACAEAAAEQAAAFgDAEQgDAEgFACQgEACgFAAQgEAAgHgCg");
	this.shape_152.setTransform(200.3,24.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_153.setTransform(195,24.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_154.setTransform(189.1,24.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#604B3B").s().p("AAMAjIAAgQIgiAAIAAg1IALAAIAAArIAQAAIAAgrIAMAAIAAArIAGAAIAAAag");
	this.shape_155.setTransform(183.1,25.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_156.setTransform(177.1,24.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#604B3B").s().p("AgVAbIgCgBIAAgLIABAAIADABQADAAABgGIABgQIAAgVIAmAAIAAA2IgMAAIAAgrIgOAAIAAAJQAAARgEAJQgEAJgHAAIgEgBg");
	this.shape_157.setTransform(171.1,24.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#604B3B").s().p("AgBAQIATgQIgTgQIAAgMIAdAZIAAAHIgdAZgAgcAQIAWgQIgWgQIAAgMIAhAbIAAADIghAbg");
	this.shape_158.setTransform(161.3,24.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#604B3B").s().p("AAJAbIgSgXIAAAXIgMAAIAAg1IAMAAIAAATIAQgTIANAAIgVAZIAXAcg");
	this.shape_159.setTransform(155.1,24.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_160.setTransform(149.4,24.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#604B3B").s().p("AgMAaQgFgCgDgEQgBgEAAgEQgBgJAHgDQAGgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQACAFABAHIAAAgIgJAAIgBgFQgJAGgHAAQgFAAgEgCgAgEADQgGACAAAGQAAAEADACQAEACADAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_161.setTransform(143.5,24.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#604B3B").s().p("AgOAjQgGgEgCgHQgDgGAAgGQAAgUALgNQALgOAVgEIACAKIgRAFQgEADgDADIgGAIIAHgEIAFgBQAHAAAGAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgGADQgGAEgIAAQgIAAgGgFgAgHgDQgEADgBACQgCAFAAAFQAAAEACAFQABAEAEADQADACAEAAQAHAAAEgFQAEgFAAgIQAAgJgEgDQgFgFgGAAQgEAAgDACg");
	this.shape_162.setTransform(137.6,23.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#604B3B").s().p("AgUAbIAAg1IAMAAIAAATIAJAAIAIABQAFACAEAEQADACAAAHIgBAIQgCAEgEADQgEADgHAAgAgIASIAJAAQADAAADgCQADgCAAgFQAAgFgDgCQgDgCgDAAIgJAAg");
	this.shape_163.setTransform(132,24.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#604B3B").s().p("AgLAaIgIgDIAEgJIAGADQAGACADAAQADAAADgDQAEgCAAgEQAAgDgDgCQgCgCgEAAIgLAAIAAgIIALAAQAEAAABgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgDAAQgDAAgFACIgHACIgEgIIAFgCIAIgCIAGgBQAGAAAEACQAEACACAEQACADABAEQAAAHgFAEQADABACADQABAEAAAEQAAAFgDAEQgCAEgFACQgFACgFAAQgFAAgGgCg");
	this.shape_164.setTransform(126.9,24.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#604B3B").s().p("AAKAbIAAgSIgKABIgHARIgNAAIAKgTQgFgCgDgFQgCgCAAgGQAAgFACgEQACgFAEgCQAFgDAGAAIAWAAIAAA1gAgCgQIgEADQgCACAAAEQAAAEACACQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAIACAAIAKAAIAAgQIgKAAIAAAAIgCAAg");
	this.shape_165.setTransform(121.6,24.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#604B3B").s().p("AgWAbIAAg1IAYAAQAJAAAFAEQAFAEAAAHQAAAEgCADQgBADgEABQAEAAACAEQADADAAAFQAAAEgDAEQgCADgEACQgEACgHAAgAgLARIAOAAQAEAAADgCQACgCAAgDQAAgDgCgCQgDgCgEAAIgOAAgAgLgDIAMAAQAEAAADgCQACgCAAgDQAAgDgCgCQgDgCgEAAIgMAAg");
	this.shape_166.setTransform(116.4,24.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#604B3B").s().p("AgKAZQgGgEgDgHQgDgGAAgIQAAgHADgGQADgHAGgDQAGgEAGAAQAHAAAFADQAGADADAEIgJAGIgFgFIgHgBQgFAAgEAFQgEAFAAAHQAAAIAEAFQAEAFAFAAQAEAAADgBQADgCACgDIAJAGQgDAEgGADQgGADgGAAQgGAAgGgDg");
	this.shape_167.setTransform(110.6,24.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#604B3B").s().p("AAOAbIAAghIgMAVIgCAAIgNgVIAAAhIgMAAIAAg1IAMAAIANAZIAOgZIAMAAIAAA1g");
	this.shape_168.setTransform(104.6,24.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgCgHAAgHQAAgHACgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQAEAGAAAHQAAAHgEAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_169.setTransform(98.3,24.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAHQADgEAEgCQAFgCADAAQAGAAAFADQAFAEADAGQADAHAAAIQAAAIgDAGQgCAGgGAEQgFADgGAAQgDAAgEgCQgFgCgDgDIAAAdgAgKgWQgDAFAAAHQAAAJADADQAFAGAFgBQAGABAEgGQADgDAAgIQAAgIgDgFQgFgGgFAAQgFAAgFAGg");
	this.shape_170.setTransform(92.3,25.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#604B3B").s().p("AAPAmIAAhAIgeAAIAABAIgMAAIAAhLIA3AAIAABLg");
	this.shape_171.setTransform(85.6,23.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#604B3B").s().p("AgDACIAAgDIAfgbIAAAMIgVAQIAVAQIAAANgAgbAEIAAgHIAdgZIAAAMIgTAQIATAQIAAANg");
	this.shape_172.setTransform(78.6,24.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#604B3B").s().p("AgRAiQgIgFgEgIQgFgKAAgLQAAgKAFgKQAFgJAIgEQAIgFAIAAQAJAAAIAFQAIAEAFAJQAFAKAAAKQAAALgFAKQgFAIgIAFQgIAFgJAAQgJAAgIgFgAgKgXQgFADgDAHQgDAGAAAHQAAAJADAFQADAHAFADQAFAEAFAAQAGAAAFgEQAFgDADgHQADgFAAgJQAAgHgDgGQgDgHgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_173.setTransform(67.6,23.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#604B3B").s().p("AAWAmIgHgSIgIACQgDACgEgBQgDABgEgCIgHgCIgHASIgNAAIAdhLIALAAIAdBLgAgLAJQAGADAFABQAFgBAGgDIgLgfg");
	this.shape_174.setTransform(59.9,23.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#604B3B").s().p("AAPAmIAAhAIgdAAIAABAIgNAAIAAhLIA3AAIAABLg");
	this.shape_175.setTransform(52.5,23.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#604B3B").s().p("AgMAaQgFgCgCgEQgCgEAAgEQAAgJAFgDQAHgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAFgDAGAAQAGAAAFACQAFADADAFQACAFABAHIAAAgIgJAAIgBgFQgKAGgGAAQgGAAgDgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_176.setTransform(42.5,24.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#604B3B").s().p("AAJAbIgSgXIAAAXIgMAAIAAg1IAMAAIAAATIAQgTIANAAIgVAZIAXAcg");
	this.shape_177.setTransform(37.2,24.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_178.setTransform(31.3,24.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#604B3B").s().p("AgFAbIAAgrIgQAAIAAgKIAsAAIAAAKIgSAAIAAArg");
	this.shape_179.setTransform(25.8,24.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgCgHAAgHQAAgHACgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQAEAGAAAHQAAAHgEAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_180.setTransform(20.1,24.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#604B3B").s().p("AAKAbIAAgrIgTAAIAAArIgMAAIAAg1IArAAIAAA1g");
	this.shape_181.setTransform(14.2,24.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#604B3B").s().p("AARAmIAAg3IghA3IgMAAIAAhLIAMAAIAAA2IAhg2IAMAAIAABLg");
	this.shape_182.setTransform(7.7,23.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#604B3B").s().p("AgEAEQgCgBAAgDQAAgCACgCQACgCACAAQADAAABACQADACAAACQAAADgDABQgBADgDAAQgCAAgCgDg");
	this.shape_183.setTransform(473.5,12.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#604B3B").s().p("AgMAjQgGgDgDgGQgEgGAAgIIACgIIACgEIACgDIATgjIAOAAIgQAcIADAAQAGAAAGADQAGADADAEQAEAFAAAHQAAAIgEAGQgDAGgGADQgGADgHABQgGgBgGgDgAgIACQgEAEAAAGQAAAGAEAFQAEAEAEAAQAFAAAEgEQAEgFAAgGQAAgGgDgEQgEgCgGAAQgEAAgEACg");
	this.shape_184.setTransform(469.6,9.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#604B3B").s().p("AAAAmIAAg6IgMAIIAAgOIASgLIAHAAIAABLg");
	this.shape_185.setTransform(464.3,9.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#604B3B").s().p("AgPAiQgHgEgEgKQgEgIAAgMQAAgLAEgIQAEgKAHgEQAHgFAIAAQAJAAAHAFQAHAEAEAKQAEAIAAALQAAAMgEAIQgEAKgHAEQgHAFgJAAQgIAAgHgFgAgIgYQgFAFgCAGQgDAHABAGQgBAIADAHQACAGAFAEQAEADAEAAQAIAAAGgIQAEgIAAgMQAAgLgEgIQgGgIgIAAQgEAAgEADg");
	this.shape_186.setTransform(459,9.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#604B3B").s().p("AgWAnIAAgGIAWgeIAIgKQACgFABgDQgBgGgDgCQgDgDgEgBQgEABgDADQgDACgBAGQAAAGAGADIgHAHQgFgBgDgEQgCgFAAgGQAAgHADgGQADgFAFgCQAGgCAFgBQAFABAGACQAFACADAFQADAGAAAHQAAAJgIAIIgSAaIAbAAIAAALg");
	this.shape_187.setTransform(452.8,9.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#604B3B").s().p("AgEAEQgCgBAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCABQgCADgDAAQgCAAgCgDg");
	this.shape_188.setTransform(448.5,12.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#604B3B").s().p("AAAAmIAAg6IgMAIIAAgOIASgLIAHAAIAABLg");
	this.shape_189.setTransform(445.3,9.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#604B3B").s().p("AgPAiQgHgEgEgKQgEgIAAgMQAAgLAEgIQAEgKAHgEQAHgFAIAAQAJAAAHAFQAIAEADAKQAEAIAAALQAAAMgEAIQgDAKgIAEQgHAFgJAAQgIAAgHgFgAgJgYQgEAFgCAGQgCAHgBAGQABAIACAHQACAGAEAEQAFADAEAAQAJAAAFgIQAEgIAAgMQAAgLgEgIQgFgIgJAAQgEAAgFADg");
	this.shape_190.setTransform(440,9.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#604B3B").s().p("AgEAEQgCgBAAgDQAAgCACgCQACgCACAAQACAAADACQACACAAACQAAADgCABQgDADgCAAQgCAAgCgDg");
	this.shape_191.setTransform(435.6,12.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#604B3B").s().p("AgLAlIgJgEIgEgDIAFgJIADACIAHADIAJACQADAAAEgCQADgDACgDIACgHQAAgGgEgEQgEgDgGAAIgJAAIAAgEIAPgWIgYAAIAAgMIApAAIAAAGIgSAXQAFABAFADQAEACADAEQADAFAAAHQAAAKgEAFQgFAGgGACQgHACgDABQgGgBgFgBg");
	this.shape_192.setTransform(431.7,9.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#604B3B").s().p("AAAAmIAAg6IgMAIIAAgOIASgLIAHAAIAABLg");
	this.shape_193.setTransform(426.5,9.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#604B3B").s().p("AgFAbIAAgrIgRAAIAAgKIAsAAIAAAKIgRAAIAAArg");
	this.shape_194.setTransform(418.4,10.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#604B3B").s().p("AgNAYQgGgEgDgGQgDgHAAgHQAAgHADgGQADgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQADAGABAHQgBAHgDAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_195.setTransform(412.7,10.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#604B3B").s().p("AgMAjQgGgDgDgGQgEgGAAgIIACgIIACgEIACgDIATgjIAOAAIgQAcIADAAQAGAAAGADQAGADADAEQAEAFAAAHQAAAIgEAGQgDAGgGADQgGADgHABQgGgBgGgDgAgIACQgEAEAAAGQAAAGAEAFQAEAEAEAAQAFAAAEgEQAEgFAAgGQAAgGgDgEQgEgCgGAAQgEAAgEACg");
	this.shape_196.setTransform(402.9,9.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#604B3B").s().p("AAAAmIAAg6IgMAIIAAgOIASgLIAHAAIAABLg");
	this.shape_197.setTransform(397.6,9.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#604B3B").s().p("AAAAmIAAg6IgMAIIAAgOIASgLIAHAAIAABLg");
	this.shape_198.setTransform(393.7,9.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#604B3B").s().p("AgPAiQgHgEgEgKQgEgIAAgMQAAgLAEgIQAEgKAHgEQAHgFAIAAQAJAAAHAFQAHAEAEAKQAEAIAAALQAAAMgEAIQgEAKgHAEQgHAFgJAAQgIAAgHgFgAgIgYQgFAFgCAGQgDAHABAGQgBAIADAHQACAGAFAEQAEADAEAAQAIAAAGgIQAEgIAAgMQAAgLgEgIQgGgIgIAAQgEAAgEADg");
	this.shape_199.setTransform(388.4,9.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#604B3B").s().p("AgPAiQgHgEgEgKQgEgIAAgMQAAgLAEgIQAEgKAHgEQAHgFAIAAQAJAAAHAFQAHAEAEAKQAEAIAAALQAAAMgEAIQgEAKgHAEQgHAFgJAAQgIAAgHgFgAgJgYQgEAFgCAGQgDAHAAAGQAAAIADAHQACAGAEAEQAFADAEAAQAIAAAFgIQAFgIABgMQgBgLgFgIQgFgIgIAAQgEAAgFADg");
	this.shape_200.setTransform(380.8,9.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#604B3B").s().p("AgPAiQgHgEgEgKQgEgIAAgMQAAgLAEgIQAEgKAHgEQAHgFAIAAQAJAAAHAFQAHAEAEAKQAEAIAAALQAAAMgEAIQgEAKgHAEQgHAFgJAAQgIAAgHgFgAgJgYQgEAFgCAGQgCAHAAAGQAAAIACAHQACAGAEAEQAFADAEAAQAIAAAGgIQAEgIAAgMQAAgLgEgIQgGgIgIAAQgEAAgFADg");
	this.shape_201.setTransform(373.2,9.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#604B3B").s().p("AgLAlIgJgEIgEgDIAFgJIADACIAHADIAJACQADAAAEgCQADgDACgDIACgHQAAgGgEgEQgEgDgGAAIgJAAIAAgEIAPgWIgYAAIAAgMIApAAIAAAGIgSAXQAFABAFADQAEACADAEQADAFAAAHQAAAKgEAFQgFAGgGACQgHACgDABQgGgBgFgBg");
	this.shape_202.setTransform(366.7,9.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#604B3B").s().p("AAAAmIAAg6IgMAIIAAgOIASgLIAHAAIAABLg");
	this.shape_203.setTransform(361.5,9.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#604B3B").s().p("AgXAnIAAgGIAXgeIAIgKQACgFAAgDQABgGgEgCQgDgDgEgBQgEABgDADQgEACABAGQAAAGAEADIgGAHQgEgBgDgEQgDgFgBgGQAAgHAEgGQADgFAGgCQAEgCAGgBQAFABAFACQAGACADAFQAEAGAAAHQAAAJgJAIIgRAaIAbAAIAAALg");
	this.shape_204.setTransform(357,9.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#604B3B").s().p("AgZAmIAihAIgiAAIAAgLIAzAAIAAAFIglBGg");
	this.shape_205.setTransform(351.1,9.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#604B3B").s().p("AgZAmIAihAIgiAAIAAgLIAzAAIAAAFIglBGg");
	this.shape_206.setTransform(345,9.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#604B3B").s().p("AAAAeIgDgHIgLgbIAAAZQAEAAADABQAAABAAAAQAAAAABABQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgIABIgHAAIgHgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBABAAQAAgFAFgBIAAgpQgFgBAAgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQACgBAEAAIAEAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQACABABAFIALAbIAAgXQgHAAAAgFQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAFgBIAGAAIAHABQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFABIAAApIAAAHIgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBgAAVAUQgHAAAAgFIABgDQABgCAFAAIACAAQAGAAABACIABADQAAAFgHAAgAAOgBIAAgMQAAgEACgCQADgCAEgBQAEABACACQACACAAAEIAAAMQAAAHgIAAQgJAAAAgHgAAVgMIAAALQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgLQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAg");
	this.shape_207.setTransform(338.5,9.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#604B3B").s().p("AgNAYQgGgEgDgGQgDgHgBgHQABgHADgGQADgGAGgEQAGgEAHAAQAIAAAGAEQAGAEADAGQADAGAAAHQAAAHgDAHQgDAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_208.setTransform(332.1,10.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#604B3B").s().p("AgWAbIAAg1IAZAAQAIAAAFAEQAFAEAAAHQAAAEgBADQgDADgDABQAEAAADAEQACADAAAFQAAAEgCAEQgCADgFACQgFACgGAAgAgLARIAOAAQAEAAADgCQACgCAAgDQAAgDgCgCQgDgCgEAAIgOAAgAgLgDIAMAAQAEAAACgCQADgCAAgDQAAgDgDgCQgCgCgEAAIgMAAg");
	this.shape_209.setTransform(326.3,10.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#604B3B").s().p("AgEAbIAAgrIgRAAIAAgKIAsAAIAAAKIgSAAIAAArg");
	this.shape_210.setTransform(320.7,10.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#604B3B").s().p("AgKAZQgGgEgDgHQgDgGAAgIQAAgHADgGQADgHAGgDQAGgEAGAAQAHAAAFADQAGADADAEIgJAGIgFgFIgHgBQgFAAgEAFQgEAFAAAHQAAAIAEAFQAEAFAFAAQAEAAADgBQADgCACgDIAJAGQgDAEgGADQgGADgGAAQgGAAgGgDg");
	this.shape_211.setTransform(315.3,10.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#604B3B").s().p("AgUAbIAAg1IAMAAIAAATIAJAAIAIABQAFACAEAEQADACAAAHIgBAIQgCAEgEADQgEADgHAAgAgIASIAJAAQADAAADgCQADgCAAgFQAAgFgDgCQgDgCgDAAIgJAAg");
	this.shape_212.setTransform(310.1,10.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#604B3B").s().p("AgVAbIgCgBIAAgLIABAAIADABQADAAABgGIABgQIAAgVIAmAAIAAA2IgMAAIAAgrIgOAAIAAAJQAAARgEAJQgEAJgHAAIgEgBg");
	this.shape_213.setTransform(304.2,10.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_214.setTransform(298.5,10.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#604B3B").s().p("AgEAbIAAgrIgRAAIAAgKIArAAIAAAKIgRAAIAAArg");
	this.shape_215.setTransform(292.9,10.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_216.setTransform(287.3,10.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#604B3B").s().p("AgNAYQgGgEgEgGQgDgHAAgHQAAgHADgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQACAGAAAHQAAAHgCAHQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgMQgEAFAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_217.setTransform(281.4,10.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAGQADgDAEgCQAEgCADAAQAHAAAFAEQAGADADAGQACAHAAAIQAAAJgCAEQgEAHgEAEQgGADgHABQgCgBgFgBQgEgCgDgEIAAAdgAgJgXQgFAGAAAIQAAAHAFAEQADAFAGABQAGgBADgFQAEgDABgIQgBgIgEgGQgDgFgGAAQgFAAgEAFg");
	this.shape_218.setTransform(275.4,11.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#604B3B").s().p("AgEAbIAAgrIgSAAIAAgKIAsAAIAAAKIgRAAIAAArg");
	this.shape_219.setTransform(269.6,10.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#604B3B").s().p("AgKAZQgGgEgDgHQgDgGAAgIQAAgHADgGQADgHAGgDQAGgEAGAAQAHAAAFADQAGADADAEIgJAGIgFgFIgHgBQgFAAgEAFQgEAFAAAHQAAAIAEAFQAEAFAFAAQAEAAADgBQADgCACgDIAJAGQgDAEgGADQgGADgGAAQgGAAgGgDg");
	this.shape_220.setTransform(264.2,10.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#604B3B").s().p("AgMAaQgFgCgDgEQgBgEAAgEQAAgJAFgDQAHgEAGgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAFgDAGAAQAGAAAFACQAFADADAFQACAFABAHIAAAgIgJAAIgBgFQgKAGgGAAQgGAAgDgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_221.setTransform(255,10.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_222.setTransform(249.5,10.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_223.setTransform(240.2,10.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#604B3B").s().p("AALAbIAAgiIgUAiIgMAAIAAg1IAMAAIAAAiIAUgiIALAAIAAA1g");
	this.shape_224.setTransform(234.3,10.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#604B3B").s().p("AAKAbIAAgXIgTAAIAAAXIgMAAIAAg1IAMAAIAAAWIATAAIAAgWIAMAAIAAA1g");
	this.shape_225.setTransform(228.5,10.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_226.setTransform(222.7,10.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#604B3B").s().p("AgfAbIAAg1IAMAAIAAArIAOAAIAAgrIAKAAIAAArIAPAAIAAgrIAMAAIAAA1g");
	this.shape_227.setTransform(215.8,10.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#604B3B").s().p("AgNAYQgGgDgDgHQgDgHAAgHQAAgGADgHQADgGAGgEQAHgEAGAAQAJAAAGAEQAGAFACAHQADAGAAAFIgBAEIgmAAQABAGAEAEQADAEAFAAQAFAAADgCQAEgCACgDIAJAFQgEAGgGADQgGADgHAAQgGAAgHgEgAgJgOQgEAEAAAHIAcAAQgBgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_228.setTransform(208.9,10.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAGQADgDAEgCQAEgCADAAQAHAAAFAEQAFADAEAGQACAHAAAIQAAAJgCAEQgEAHgEAEQgGADgHABQgCgBgFgBQgEgCgDgEIAAAdgAgJgXQgEAGgBAIQABAHAEAEQAEAFAFABQAGgBADgFQAFgDAAgIQAAgIgFgGQgEgFgFAAQgGAAgDAFg");
	this.shape_229.setTransform(203.1,11.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#604B3B").s().p("AgLAaIgIgDIAEgJIAGADQAGACADAAQADAAADgDQAEgCAAgEQAAgDgDgCQgCgCgEAAIgLAAIAAgIIALAAQADAAACgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgDAAQgDAAgFACIgHACIgEgIIAFgCIAIgCIAGgBQAGAAAEACQAEACACAEQACADABAEQAAAHgFAEQADABACADQABAEAAAEQAAAFgDAEQgCAEgFACQgFACgFAAQgFAAgGgCg");
	this.shape_230.setTransform(197.5,10.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#604B3B").s().p("AgNAaQgEgCgCgEQgDgEAAgEQABgJAFgDQAGgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgEACgBAEIgIgFQACgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQACAFAAAHIAAAgIgIAAIgCgFQgIAGgIAAQgEAAgFgCgAgFADQgFACAAAGQAAAEADACQAEACADAAQAEAAAEgDQADgCAAgFIAAgJIgEAAQgHAAgFADg");
	this.shape_231.setTransform(192.1,10.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#604B3B").s().p("AgaAmIAAhLIAdAAQAHAAAFACQAGAEADAEQADAFAAAGQAAAHgDAGQgDADgGACQgFADgHAAIgQAAIAAAhgAgNgEIAQAAQAGAAADgDQADgEAAgEQAAgFgDgDQgDgDgGAAIgQAAg");
	this.shape_232.setTransform(186.2,9.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#604B3B").s().p("AgGACIAAgCIgBgEQAAgDACgDQADgDACAAQAEAAADADQACADAAADIgBAEQgBACgDACIgMAKg");
	this.shape_233.setTransform(178.1,12.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#604B3B").s().p("AAAAOIARgOIgRgNIAAgPIAeAYIAAAJIgeAYgAgdAOIAUgOIgUgNIAAgPIAhAbIAAADIghAbg");
	this.shape_234.setTransform(173.2,10);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#604B3B").s().p("AgQAjQgFgGgCgGIgCgLQAAgNAEgLQAEgLAKgHQAIgHARgDIADANIgUAGQgDACgCACIgFAHQAGgFAFAAQAHAAAGAEQAGAEADAHQACAFAAAHQAAAIgDAGQgDAHgGAEQgGAEgIAAQgKAAgGgGgAgHAAQgCACgBADIgBAHIABAGQABAEACADQADADAEAAQAFAAADgFQADgEAAgHQAAgHgDgEQgDgDgFAAQgEAAgDACg");
	this.shape_235.setTransform(166.2,8.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#604B3B").s().p("AgSAYQgFgFAAgHQAAgJAFgDQAGgEAGgBIAOgBQAAgJgIAAIgGABQgCABgCADIgKgFQACgFAGgEQAGgDAGAAQAGAAAFADQAGACADAGQAEAFAAAJIAAAdIgMAAIgBgFQgKAGgGAAQgIAAgFgEgAgDADQgFABAAAGQAAADADACQACACADAAQADAAADgCQADgCAAgFIgBgHIgDAAQgFAAgDACg");
	this.shape_236.setTransform(160,10.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#604B3B").s().p("AAIAbIAAgVIgPAAIAAAVIgQAAIAAg1IAQAAIAAAUIAPAAIAAgUIAPAAIAAA1g");
	this.shape_237.setTransform(154.2,10.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#604B3B").s().p("AgKAZQgGgEgEgHQgDgGAAgIQAAgHADgGQAEgHAGgDQAGgEAGAAQAHAAAGADQAGACADAFIgMAHIgEgDIgFgCQgEAAgDAFQgEAEAAAGQAAAHAEAEQADAEAEAAIAFgBIAEgDIAMAHQgEAEgFADQgHADgGAAQgGAAgGgDg");
	this.shape_238.setTransform(148.3,10.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#604B3B").s().p("AAJAmIAAgfIgRAfIgPAAIAAg2IAPAAIAAAdIARgdIAPAAIAAA2gAgIgaQgEgDgCgFIAIgDIADAEQABABAAAAQABAAAAABQABAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQADgBAAgDIAIADQgCAFgEADQgFADgEAAQgEAAgEgDg");
	this.shape_239.setTransform(142.4,9.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#604B3B").s().p("AgNAZQgGgEgDgHQgEgGAAgIQAAgHAEgHQADgGAGgEQAGgDAHAAQAIAAAGAEQAGADADAGQAEAHAAAHQAAAIgDAGQgEAHgGAEQgGADgIAAQgHAAgGgDgAgHgKQgEAEAAAGQAAAHAEAEQADAEAEAAQAFAAADgEQAEgEAAgHQAAgGgEgEQgDgFgFAAQgEAAgDAFg");
	this.shape_240.setTransform(136.2,10.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#604B3B").s().p("AgZAnIAAhMIAQAAIAAAFQADgDAEgBQACgCAFAAQAGAAAFAEQAFAEADAGQACAHAAAIQAAAKgGAIQgEAIgMABQgEgBgCgBIgHgFIAAAcgAgIgVQgEAEABAIQgBAHAEACQADAFAFAAQAEAAADgFQAEgCAAgHQAAgIgEgEQgDgEgEAAQgFAAgDAEg");
	this.shape_241.setTransform(130.2,11.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#604B3B").s().p("AgGAbIAAgnIgRAAIAAgOIAvAAIAAAOIgRAAIAAAng");
	this.shape_242.setTransform(124,10.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#604B3B").s().p("AgKAZQgGgEgEgHQgDgGAAgIQAAgHADgGQAEgHAGgDQAGgEAGAAQAHAAAGADQAGACADAFIgMAHIgEgDIgFgCQgEAAgDAFQgEAEAAAGQAAAHAEAEQADAEAEAAIAFgBIAEgDIAMAHQgEAEgFADQgHADgGAAQgGAAgGgDg");
	this.shape_243.setTransform(118.4,10.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#604B3B").s().p("AgKAZQgGgEgEgHQgDgGAAgIQAAgHADgGQAEgHAGgDQAGgEAGAAQAHAAAGADQAGACADAFIgMAHIgEgDIgFgCQgEAAgDAFQgEAEAAAGQAAAHAEAEQADAEAEAAIAFgBIAEgDIAMAHQgEAEgFADQgHADgGAAQgGAAgGgDg");
	this.shape_244.setTransform(112.9,10.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#604B3B").s().p("AgNAZQgGgEgDgHQgEgGAAgIQAAgHAEgHQADgGAGgEQAGgDAHAAQAIAAAGAEQAGADADAGQAEAHAAAHQAAAIgDAGQgEAHgGAEQgGADgIAAQgHAAgGgDgAgHgKQgEAEAAAGQAAAHAEAEQADAEAEAAQAFAAADgEQAEgEAAgHQAAgGgEgEQgDgFgFAAQgEAAgDAFg");
	this.shape_245.setTransform(107,10.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#604B3B").s().p("AASAmIAAgrIgNAdIgJAAIgNgdIAAArIgRAAIAAhLIARAAIARAnIASgnIARAAIAABLg");
	this.shape_246.setTransform(99.8,9.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#604B3B").s().p("AgDACIAAgDIAhgbIAAAPIgUANIAUAOIAAAPgAgdAFIAAgJIAegYIAAAPIgRANIARAOIAAAPg");
	this.shape_247.setTransform(92,10);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#604B3B").s().p("AgRAiQgIgEgFgKQgFgIAAgMQAAgLAFgIQAFgKAIgEQAIgFAJAAQAKAAAIAFQAIAEAFAKQAFAIAAALQAAAMgFAIQgFAKgIAEQgIAFgKAAQgJAAgIgFgAgJgUQgEACgDAHQgCAFAAAGQAAAHACAGQADAGAEADQAFADAEAAQAFAAAFgDQAEgDADgGQACgGAAgHQAAgGgCgFQgDgHgEgCQgFgEgFAAQgEAAgFAEg");
	this.shape_248.setTransform(80.8,9.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#604B3B").s().p("AATAmIgGgQQgIADgFAAQgEAAgIgDIgGAQIgRAAIAchLIAPAAIAcBLgAgIAIQAFACADAAQAEAAAFgCIgJgbg");
	this.shape_249.setTransform(72.8,9.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#604B3B").s().p("AgEABIAAgBIgBAAIgBgEQAAgDACgCQACgCACAAQACAAACACQADACAAADIgBAEIgDACIgJAKg");
	this.shape_250.setTransform(64.3,12.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#604B3B").s().p("AARAmIAAghIggAAIAAAhIgNAAIAAhLIANAAIAAAhIAgAAIAAghIAMAAIAABLg");
	this.shape_251.setTransform(59.6,9.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#604B3B").s().p("AgMAiQgIgEgFgKQgEgIAAgMQAAgLAEgIQAFgKAIgEQAIgFAIAAQAIAAAHADQAHADAEAGIgKAGQgEgDgDgCQgFgCgEAAQgFAAgFADQgFAEgDAGQgDAHAAAHQAAAIADAHQADAGAFAEQAFADAFAAQAEAAAEgCQAEgCADgEIALAGQgEAHgHACQgHAEgIAAQgIAAgIgFg");
	this.shape_252.setTransform(52.5,9.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#604B3B").s().p("AAPAmIAAhAIgdAAIAABAIgNAAIAAhLIA3AAIAABLg");
	this.shape_253.setTransform(45.6,9.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#604B3B").s().p("AgMAaQgFgCgDgEQgBgEgBgEQAAgJAHgDQAFgEAHgBIAOgBQAAgMgLAAQgCAAgDACQgDACgCAEIgJgFQADgFAGgEQAGgDAFAAQAGAAAFACQAFADADAFQADAFgBAHIAAAgIgIAAIgCgFQgJAGgHAAQgEAAgEgCgAgEADQgGACAAAGQAAAEADACQADACAEAAQAEAAADgDQAEgCAAgFIAAgJIgEAAQgHAAgEADg");
	this.shape_254.setTransform(35.6,10.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#604B3B").s().p("AAKAbIAAgrIgTAAIAAArIgMAAIAAg1IArAAIAAA1g");
	this.shape_255.setTransform(30.1,10.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#604B3B").s().p("AAKAbIAAgrIgTAAIAAArIgMAAIAAg1IArAAIAAA1g");
	this.shape_256.setTransform(24.4,10.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#604B3B").s().p("AgNAnIAKgZIgVg0IALAAIANAmIANgmIAMAAIgaBNg");
	this.shape_257.setTransform(18.7,11.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#604B3B").s().p("AgYAnIAAhMIAMAAIAAAGQADgDAEgCQAEgCAEAAQAGAAAFAEQAGADADAGQACAHAAAIQAAAJgCAEQgEAHgFAEQgEADgHABQgEgBgDgBQgFgCgDgEIAAAdgAgKgXQgDAGAAAIQAAAHADAEQAEAFAGABQAGgBADgFQAFgDAAgIQAAgIgFgGQgEgFgFAAQgGAAgEAFg");
	this.shape_258.setTransform(12.9,11.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#604B3B").s().p("AgWAmIAAhLIAtAAIAAALIghAAIAABAg");
	this.shape_259.setTransform(7,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,508,58.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604B3B").s().p("ACNBJQgMgJgIgQQgHgQAAgWQAAgUAHgRQAIgQAMgIQANgJASAAQARAAANAJQANAIAHAQQAHARAAAUQAAAWgHAQQgHAQgNAJQgNAIgRAAQgSAAgNgIgACaghQgIAGgFAMQgDAMAAANQAAAPADAMQAFAMAIAGQAHAHALgBQAPAAAKgOQAJgOAAgXQAAgWgJgOQgKgOgPAAQgLgBgHAIgAADBJQgLgJgHgQQgHgQAAgWQAAgUAHgRQAHgQALgIQANgJARAAQASAAANAJQAMAIAIAQQAGARABAUQgBAWgGAQQgIAQgMAJQgNAIgSAAQgRAAgNgIgAAPghQgIAGgEAMQgDAMAAANQAAAPADAMQAEAMAIAGQAIAHAKgBQAQAAAKgOQAJgOgBgXQABgWgJgOQgKgOgQAAQgKgBgIAIgAiGBJQgMgJgIgQQgGgQgBgWQABgUAGgRQAIgQAMgIQAOgJARAAQARAAANAJQANAIAHAQQAHARAAAUQAAAWgHAQQgHAQgNAJQgNAIgRAAQgRAAgOgIgAh5ghQgIAGgFAMQgEAMAAANQAAAPAEAMQAFAMAIAGQAHAHALgBQAPAAAKgOQAJgOAAgXQAAgWgJgOQgKgOgPAAQgLgBgHAIgAlBBMQgLgFgGgJQgIgJgBgMIAYAAQACAKAHAFQAIAGAJgBQALAAAHgGQAHgIAAgLQAAgMgHgIQgHgGgLAAQgHgBgHAEQgHAEgEAGIgTgLIAAhGIBUAAIAAATIg9AAIAAAnQAFgDAHgCQAGgCAIAAQAMAAAKAEQAJAEAGALQAGAKABAOQAAAMgGALQgGAKgLAGQgLAGgQAAQgMAAgLgFgArJBKQgLgHgGgMQgGgMAAgOQAAgOAGgMQAGgKALgHQALgHAPAAQAQAAALAHQALAHAGAKQAGAMAAAOQAAAOgGANQgGAMgLAGQgLAHgQAAQgPAAgLgHgArDAEQgIAKAAAPQAAAOAIALQAHAJANAAQAOAAAHgJQAHgLAAgOQAAgPgHgKQgHgHgOAAQgNAAgHAHgAJ9BPIAAhaIgdBDIgRAAIgdhEIAABbIgYAAIAAiJIAYAAIAmBVIAlhVIAYAAIAACJgAG0BPIA5iTIAWAAIg5CTgAE9BPIAAgZIgKAAIAAgVIAKAAIAAhbIA4AAQANAAAJAEQAKAFAFAJQAGAKAAALQAAAMgGAHQgFAKgKAEQgJAGgNAAIghAAIAAANIAXAAIAAAVIgXAAIAAAZgAFUAAIAhAAQAKAAAGgEQAFgGAAgJQAAgIgFgGQgGgGgKAAIghAAgAm0BPIAegyIgIABQgLAAgKgGQgLgFgGgJQgHgKAAgNQAAgNAHgLQAFgLAMgGQALgHANABQANgBALAHQALAGAGALQAGALABANQgBAIgCAFIgFAMIgqBDgAmtgfQgHAHAAALQAAAMAHAFQAGAGAMAAQAKAAAIgHQAGgEAAgMQAAgLgGgHQgIgIgKAAQgLAAgHAIgApSBPIAAhQIgfAAIAAgTIBUAAIAAATIgfAAIAABQgAKoAKIAAgGIAcgiIAKgPQAEgGAAgEQAAgFgFgEQgEgDgFAAQgGAAgEADQgDAEAAAFQAAAJAFADIgIALQgFgDgEgGQgDgFAAgIQABgIADgGQAEgGAGgDQAHgDAHAAQAHAAAHADQAGADAEAGQAEAGgBAIQAAALgJAMIgXAeIAiAAIAAALg");
	this.shape.setTransform(73.8,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.5,16.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604B3B").s().p("AkPBrQgZgPgPgcQgPgbgBglQABgjAPgcQAPgcAZgPQAagOAfAAQAfAAAbAOQAZAPAPAcQAPAcAAAjQAAAlgPAbQgPAcgZAPQgbAOgfAAQgfAAgagOgAj1hDQgOAKgIASQgIASAAAVQAAAXAIARQAHATAPAJQAOAKARAAQARAAAPgKQAOgJAIgTQAIgRAAgXQAAgVgIgSQgIgSgOgKQgPgKgRAAQgRAAgOAKgAHDB3IhThoIAABnIgzAAIAAjrIAzAAIAABiIBThiIA8AAIhlBzIBmB5gALPB2IgQgzQgZAKgSgBQgSABgZgKIgRAzIg2AAIBXjrIA3AAIBWDrgAJ3AaQAOAHAPAAQAPAAAOgIIgdhXgAB8B2IAAjrICYAAIAAArIhlAAIAAA2IBLAAIAAApIhLAAIAAA2IBpAAIAAArgAgSB2IAAjAIg/AAIAAgrICvAAIAAArIg/AAIAADAgAmXB2IAAjAIhSAAIAADAIg0AAIAAjrIC5AAIAADrgAp4B2IAAiVIhaCVIgzAAIAAjrIAzAAIAACWIBaiWIAzAAIAADrg");
	this.shape.setTransform(310,-98.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E94D33").s().p("AilBiQAAgCgCgFQgCgFgBgIQABgNAHgIQAJgJALABQANgBAIAJQAIAIAAANQAAAFgEAIQgDAJgIAGIgsAggAD6BaQgMgNAAgTQAAgNAFgLQAFgLALgHQALgHAQAAQAXAAANAOQAMAOAAASQABAMgGALQgFAMgMAHQgLAHgPABQgYgBgMgOgAESArQgGAEAAAKQAAAKAGAEQAFAEAHAAQAHAAAFgEQAGgEAAgKQAAgKgGgEQgFgDgHAAQgHAAgFADgAgrBjQgQgFgNgHIgMgGIAPglIAKAFQAKAEANAFQANADANAAQAQAAAKgKQALgKAAgOQAAgOgLgJQgKgIgQAAIghAAIAAgXIAshAIhDAAIAAgrICEAAIAAAWIgxBEQAWAHAPARQAQARAAAfQAAAbgOARQgOASgTAHQgTAHgOABQgQAAgRgGgACEBmICHjsIAvAAIiGDsgAkwBmIAxhPQgWgCgSgLQgSgKgKgQQgLgSAAgVQAAgWALgTQAMgTATgLQATgLAWAAQAXAAATALQATALALATQALATAAAWQAAALgEALIgIAUIgGAKIhBBpgAkThPQgJAJABAPQgBAQAJAJQAJAIAPAAQAQAAAIgIQAJgJAAgQQAAgPgJgJQgIgJgQAAQgPAAgJAJgAB7g3QgMgNAAgVQAAgMAFgLQAGgLALgHQALgHAPAAQARAAALAHQALAHAGALQAGAKAAANQAAANgGALQgGAKgLAIQgMAGgQABQgYAAgMgPgACThmQgGADAAAKQAAAJAGAFQAFAEAHAAQAHAAAFgEQAGgFAAgJQAAgKgGgDQgFgFgHAAQgGAAgGAFg");
	this.shape_1.setTransform(434.9,-97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(232.6,-110.8,235.8,27.7);


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
	this.instance.setTransform(16,-20,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-20,357.4,323.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cat_cut_07();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,93);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(104.3,-78.3,0.83,0.83,0,0,0,73.8,8.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604B3B").s().p("AMdBRQgTgLgMgVQgLgVAAgcQAAgbALgVQAMgVAUgLQATgLAXAAQAUAAARAHQAQAHALAOIghATQgPgOgQAAQgMAAgLAHQgLAIgGANQgGAOAAAQQAAARAGAOQAGANALAIQALAHAMAAQARAAAOgNIAhASQgLAOgQAHQgRAHgUAAQgXAAgUgLgAJSBRIAPgdQAJAFAGAAQAGAAAEgEQAEgFAGgLIg7h+IAqAAIAlBVIAmhVIApAAIg8B/QgLAbgPANQgOAOgSAAQgQAAgPgLgABrBRQgTgLgMgVQgLgVAAgcQAAgaALgWQAMgVATgLQAUgLAYAAQAXAAAUALQAUALALAVQALAWAAAaQAAAcgLAVQgLAVgUALQgUALgXAAQgYAAgUgLgAB/gyQgKAHgHAOQgHANAAAQQAAARAHAOQAGANALAIQAKAHAOAAQANAAAKgHQALgIAGgNQAHgOAAgRQAAgQgHgNQgGgOgLgHQgKgIgNAAQgOAAgKAIgAtyBRQgTgLgLgVQgMgVAAgcQAAgaAMgWQALgVATgLQAUgLAXAAQAZAAATALQAUALAMAVQAKAWAAAaQAAAcgKAVQgMAVgUALQgTALgZAAQgXAAgUgLgAtegyQgLAHgFAOQgHANAAAQQAAARAGAOQAGANALAIQALAHAMAAQAOAAALgHQAKgIAHgNQAFgOAAgRQAAgQgFgNQgHgOgKgHQgLgIgOAAQgMAAgLAIgAQbBaIgMgnQgTAHgOAAQgNAAgTgHIgNAnIgqAAIBCizIAqAAIBCCzgAPYATQALAGALAAQALAAAMgGIgWhCgAIIBaIAAiSIg9AAIAACSIgnAAIAAizICLAAIAACzgAEEBaIAAizIBNAAQARAAANAHQANAHAGAMQAIAMAAAQQAAAPgIANQgGAKgNAHQgNAGgRAAIgmAAIAABKgAErgPIAmAAQALAAAFgGQAGgHAAgIQAAgIgGgGQgFgGgLAAIgmAAgAgGBaIg/hPIAABPIgnAAIAAizIAnAAIAABKIA/hKIAsAAIhKBYIBLBbgAlSBaIAAizIB0AAIAAAhIhNAAIAAApIA5AAIAAAfIg5AAIAAApIBQAAIAAAhgAmYBaIAAizIAnAAIAACzgAo0BaIAAizIAnAAIAABFIAmAAQAPAAANAFQAPAFAJAKQAKAMAAATQAAAUgLANQgKANgPAHQgPAGgLAAgAoNA5IAjAAQASAAAEgJQAEgJAAgIQAAgFgFgHQgFgIgQAAIgjAAgArZBaIAAizIBKAAQATAAANAHQANAHAGAKQAGALAAANQAAAMgGALQgFAMgJADQANADAIAKQAHAMAAAQQAAANgGAMQgGAMgPAHQgNAIgVAAgAqyA5IAnAAQAKAAAGgGQAGgFAAgKQAAgJgGgGQgGgHgKAAIgnAAgAqygQIAhgBQAKAAAFgFQAFgFAAgJQAAgJgFgFQgGgGgJAAIghAAgAvaBaIAAhKIhDAAIAABKIgnAAIAAizIAnAAIAABKIBDAAIAAhKIAnAAIAACzg");
	this.shape.setTransform(56.2,-100.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E94D33").s().p("ABcBDIAAgXIhJAAIAAAXIgTAAIAAgrIALAAIAFgHQAEgHAFgPQAEgSAAgVIAAgUIBIAAIAABYIALAAIAAArgAAtAAQgGAQgCAEIgDAEIArAAIAAhEIgbAAQAAAdgFAPgAhXAnQgLgHgHgNQgHgNAAgPQAAgRAHgNQAHgNALgHQAMgHAPAAQAOAAAMAHQANAHAHANQAGANAAARQAAAPgGANQgHANgNAHQgMAGgOAAQgPAAgMgGgAhLgpQgGAFgEAIQgEAIAAALQAAAJAEAIQAEAIAGAFQAHAEAIAAQAIAAAGgEQAHgFAEgIQAEgIAAgJQAAgLgEgIQgEgIgHgFQgGgEgIAAQgIAAgHAEgAGFAsIAAhsIBHAAIAAAUIgvAAIAAAZIAjAAIAAATIgjAAIAAAYIAwAAIAAAUgAFbAsIgdguIAAAuIgYAAIAAguIgdAuIgdAAIApg3Igog1IAcAAIAdAuIAAguIAYAAIAAAuIAcguIAdAAIgoA1IAoA3gADKAsIgIgYQgLAFgJAAQgIAAgLgFIgIAYIgaAAIAphsIAZAAIAoBsgAChABQAGADAHAAQAHAAAHgDIgNgogAjNAsIAAhsIAvAAQAKAAAIAEQAIAEAEAHQAFAIAAAJQAAAKgFAHQgEAIgIAEQgIADgKAAIgXAAIAAAsgAi1gTIAXAAQAHAAADgEQAEgEAAgFQAAgFgEgEQgDgDgHAAIgXAAgAj4AsIAAhYIglAAIAABYIgYAAIAAhsIBVAAIAABsgAnMAsIAAhsIAtAAQAMAAAIAEQAHAEAEAHQADAGAAAIQAAAHgDAHQgDAHgGACQAIACAFAHQAEAGAAAJQAAAIgDAIQgEAHgJAEQgIAFgNAAgAm1AYIAYAAQAGAAAEgEQAEgDAAgGQAAgGgEgDQgEgCgGAAIgYAAgAm1gUIAVAAQAGAAACgDQAEgEAAgFQAAgFgEgEQgDgDgFAAIgVAAg");
	this.shape_1.setTransform(-8.2,-76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.4,-109.4,219.9,40.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(-175.9,-220.3,1,1,0,0,0,264,28.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({_off:false},0).to({alpha:1},5).wait(96).to({alpha:0},4).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(-451.4,-219.4,0.008,1,0,0,0,261.1,32.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({_off:false},0).to({regX:261,scaleX:1,x:-188.4},5,cjs.Ease.get(1)).wait(96).to({regX:261.1,scaleX:0.01,x:-451.4},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(300.4,76.1,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(268.9,76.1,0.634,0.634,0,0,180,25,24.1);

	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(300.4,106.5,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(268.9,106.5,0.634,0.634,0,0,180,25,24.1);

	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(237.3,76.1,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(205.8,76.1,0.634,0.634,0,0,180,25,24.1);

	this.instance_6 = new lib.Символ8();
	this.instance_6.setTransform(237.3,106.5,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(205.8,106.5,0.634,0.634,0,0,180,25,24.1);

	this.instance_8 = new lib.Символ8();
	this.instance_8.setTransform(174,76.1,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_9 = new lib.Символ8();
	this.instance_9.setTransform(142.5,76.1,0.634,0.634,0,0,180,25,24.1);

	this.instance_10 = new lib.Символ8();
	this.instance_10.setTransform(174,106.5,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_11 = new lib.Символ8();
	this.instance_11.setTransform(142.5,106.5,0.634,0.634,0,0,180,25,24.1);

	this.instance_12 = new lib.Символ8();
	this.instance_12.setTransform(111.2,76.1,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_13 = new lib.Символ8();
	this.instance_13.setTransform(79.7,76.1,0.634,0.634,0,0,180,25,24.1);

	this.instance_14 = new lib.Символ8();
	this.instance_14.setTransform(111.2,106.5,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_15 = new lib.Символ8();
	this.instance_15.setTransform(79.7,106.5,0.634,0.634,0,0,180,25,24.1);

	this.instance_16 = new lib.Символ8();
	this.instance_16.setTransform(47.9,76.1,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_17 = new lib.Символ8();
	this.instance_17.setTransform(16.4,76.1,0.634,0.634,0,0,180,25,24.1);

	this.instance_18 = new lib.Символ8();
	this.instance_18.setTransform(47.9,106.5,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_19 = new lib.Символ8();
	this.instance_19.setTransform(16.4,106.5,0.634,0.634,0,0,180,25,24.1);

	this.instance_20 = new lib.Символ8();
	this.instance_20.setTransform(300.4,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_21 = new lib.Символ8();
	this.instance_21.setTransform(268.9,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_22 = new lib.Символ8();
	this.instance_22.setTransform(300.4,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_23 = new lib.Символ8();
	this.instance_23.setTransform(268.9,45.7,0.634,0.634,0,0,180,25,24.1);

	this.instance_24 = new lib.Символ8();
	this.instance_24.setTransform(237.3,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_25 = new lib.Символ8();
	this.instance_25.setTransform(205.8,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_26 = new lib.Символ8();
	this.instance_26.setTransform(237.3,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_27 = new lib.Символ8();
	this.instance_27.setTransform(205.8,45.7,0.634,0.634,0,0,180,25,24.1);

	this.instance_28 = new lib.Символ8();
	this.instance_28.setTransform(174,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_29 = new lib.Символ8();
	this.instance_29.setTransform(142.5,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_30 = new lib.Символ8();
	this.instance_30.setTransform(174,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_31 = new lib.Символ8();
	this.instance_31.setTransform(142.5,45.7,0.634,0.634,0,0,180,25,24.1);

	this.instance_32 = new lib.Символ8();
	this.instance_32.setTransform(111.2,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_33 = new lib.Символ8();
	this.instance_33.setTransform(79.7,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_34 = new lib.Символ8();
	this.instance_34.setTransform(111.2,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_35 = new lib.Символ8();
	this.instance_35.setTransform(79.7,45.7,0.634,0.634,0,0,180,25,24.1);

	this.instance_36 = new lib.Символ8();
	this.instance_36.setTransform(47.9,15.3,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_37 = new lib.Символ8();
	this.instance_37.setTransform(16.4,15.3,0.634,0.634,0,0,180,25,24.1);

	this.instance_38 = new lib.Символ8();
	this.instance_38.setTransform(47.9,45.7,0.634,0.634,0,0,180,25.1,24.1);

	this.instance_39 = new lib.Символ8();
	this.instance_39.setTransform(16.4,45.7,0.634,0.634,0,0,180,25,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4sJfIAAy+MAxZAAAIAAS+g");
	this.shape.setTransform(159.2,60.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,316.8,121.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(8.7,31.2,0.83,0.83,0,0,0,67,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AriEQIAAofIXFAAIAAIfg");
	this.shape.setTransform(7.6,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,5.4,148,54.5);


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


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 22
	this.instance = new lib.Символ22();
	this.instance.setTransform(149.6,258,0.922,0.922,0,0,0,122.1,22.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({alpha:1},9).wait(31).to({alpha:0},10).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(448,252.9,1,1,0,0,0,143,13.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9,cjs.Ease.get(1)).wait(35).to({alpha:0},10).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.6,130,219.9,40.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzHFGIAAqLMAmPAAAIAAKLg");
	this.shape.setTransform(97.6,44.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(27.2,77.9,0.872,0.853,0,180,0,31.7,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,0,301.2,103.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(247.7,62.7,1.369,1.369,0,0,0,67.1,30.1);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(284.2,29.7,0.999,0.977,0,0,180,31.7,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,316.3,118.8);


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
p.nominalBounds = new cjs.Rectangle(16,-20,357.4,323.1);


// stage content:



(lib.dom_cat_72890 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.setTransform(791.8,280.9,1,1,0,0,0,149.3,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(550.2,35.4,1,1,0,0,0,345.6,138.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 16
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(605,51.9,1,1,0,0,0,138.2,51.9);

	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(97.6,20.3,0.877,0.877,0,0,0,157.9,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Символ 10
	this.instance_4 = new lib.Символ10();
	this.instance_4.setTransform(232.6,35.7,0.704,0.704,0,0,0,26.6,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.3,-39,784.9,227.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;