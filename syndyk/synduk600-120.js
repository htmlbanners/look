(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 120,
	fps: 28,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bac.jpg?1473195542834", id:"bac"},
		{src:"images/blink.png?1473195542834", id:"blink"},
		{src:"images/blink2.png?1473195542834", id:"blink2"},
		{src:"images/item_03.png?1473195542834", id:"item_03"},
		{src:"images/item_06.png?1473195542834", id:"item_06"},
		{src:"images/item_09.png?1473195542834", id:"item_09"},
		{src:"images/item_12.png?1473195542834", id:"item_12"},
		{src:"images/item_14.png?1473195542834", id:"item_14"},
		{src:"images/item_16.png?1473195542834", id:"item_16"},
		{src:"images/item_18.png?1473195542834", id:"item_18"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bac = function() {
	this.initialize(img.bac);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,608,168);


(lib.blink = function() {
	this.initialize(img.blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,69);


(lib.blink2 = function() {
	this.initialize(img.blink2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,29);


(lib.item_03 = function() {
	this.initialize(img.item_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,159);


(lib.item_06 = function() {
	this.initialize(img.item_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,76);


(lib.item_09 = function() {
	this.initialize(img.item_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


(lib.item_12 = function() {
	this.initialize(img.item_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,36);


(lib.item_14 = function() {
	this.initialize(img.item_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,32);


(lib.item_16 = function() {
	this.initialize(img.item_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,32);


(lib.item_18 = function() {
	this.initialize(img.item_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,32);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("Ak0BXQgLgNAAgYIAAgVIAdAAIAAAYQAAAKAFAEQAEAFAHAAQAHAAAFgFQAEgEAAgOIAAgPQAAgNgFgGQgEgGgLABIgHAAIAAgaIAJAAQAIAAAFgFQAFgFAAgMIAAgLQAAgNgEgEQgFgFgHAAQgHAAgEAEQgFAFAAALIAAAQIgdAAIAAgPQAAgXAMgNQAMgNAWAAQAWABAMAMQAMANAAAXIAAAGQAAAPgFAKQgGAKgKAFQALAEAFAKQAFAKAAAPIAAAPQAAAYgMANQgMAMgWABQgXgBgMgMgAOvBiIAAjCIAgAAIAABJIAOAAQAXAAALAMQAMALAAAXIAAAaQAAAXgMANQgLANgXAAgAPPBFIAOAAQAHAAAFgEQADgDAAgLIAAgeQAAgKgDgEQgFgEgHAAIgOAAgANjBiIAAimIggAAIAAgcIBfAAIAAAcIggAAIAACmgAMfBiIgFgkIgmAAIgGAkIgcAAIAfjCIAtAAIAgDCgAMVAkIgOhiIgPBiIAdAAgAJoBiIAAjCIAvAAQAYgBALAMQALALgBAXIAAAHQABAPgFAJQgFALgKAEQAMAFAFAJQAGALAAAPIAAAQQAAAXgMALQgLANgYAAgAKIBFIARAAQAIABAEgFQAEgEAAgLIAAgRQAAgNgEgGQgGgFgKABIgNAAgAKIgQIAMAAQAJAAAEgFQAFgFAAgMIAAgLQAAgKgDgFQgFgEgIAAIgOAAgAIzBiIAAjCIAgAAIAADCgAHGBiIAAjCIAgAAIAABJIAOAAQAXAAAMAMQALALAAAXIAAAaQAAAXgLANQgMANgXAAgAHmBFIAOAAQAHAAAEgEQAEgDAAgLIAAgeQAAgKgEgEQgEgEgHAAIgOAAgAF7BiIAAimIghAAIAAgcIBgAAIAAAcIghAAIAACmgAE2BiIgGgkIglAAIgFAkIgdAAIAgjCIAtAAIAfDCgAEsAkIgPhiIgOBiIAdAAgAB+BiIAAjCIBWAAIAAAcIg4AAIAAAxIASAAQAXAAAMANQALALAAAXIAAAVQAAAXgLANQgMANgXAAgACcBFIASAAQAIAAADgEQAFgDAAgLIAAgZQAAgLgFgEQgDgDgIAAIgSAAgABQBiIgFgkIgmAAIgGAkIgcAAIAfjCIAtAAIAgDCgABGAkIgOhiIgQBiIAeAAgAhdBiIAAjCIAuAAQAXAAAMAMQALANAAAXIAAAaQAAAWgLALQgMANgXAAIgOAAIAABKgAg9gCIAOAAQAHAAAEgEQAEgEAAgLIAAgdQAAgKgEgFQgEgDgHAAIgOAAgAiKBiIgFgkIgmAAIgFAkIgcAAIAfjCIAtAAIAgDCgAiTAkIgPhiIgPBiIAeAAgAnXBiIAAjCIAfAAIAABJIAOAAQAYAAALAMQALALAAAXIAAAaQAAAXgLANQgLANgYAAgAm4BFIAOAAQAIAAAEgEQADgDABgLIAAgeQgBgKgDgEQgEgEgIAAIgOAAgAojBiIAAimIggAAIAAgcIBfAAIAAAcIghAAIAACmgApoBiIgFgkIgmAAIgFAkIgdAAIAgjCIAtAAIAfDCgApxAkIgPhiIgPBiIAeAAgAriBiIAAhPQgFAFgHADQgIADgGAAQgTgBgKgMQgJgMAAgSIAAhTIAfAAIAABQQgBAKAGAEQAFADAIAAQAHAAAEgDQAFgFgBgKIAAhPIAfAAIAADCgAtOBiIgFgkIglAAIgGAkIgcAAIAfjCIAtAAIAgDCgAtXAkIgPhiIgPBiIAeAAgAvIBiIAAhVIgjAAIAABVIgfAAIAAjCIAfAAIAABTIAjAAIAAhTIAfAAIAADCg");
	this.shape.setTransform(103.6,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.1,20.1);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AzHI6IAAxzMAmPAAAIAARzg");
	this.shape.setTransform(122.5,57);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,114);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBiIAAgeIAcAAIAAAegAgKA2IgEiXIAdAAIgECXg");
	this.shape.setTransform(1.6,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,19.6);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBXQgMgNAAgYIAAhkQAAgXAMgNQAJgMAXgBQAXABAMAMQAMANAAAXIAABkQAAAYgMANQgMAMgXABQgXgBgJgMgAAShDQgFAFAAALIAABoQAAAKAFAEQAEAFAHAAQAIAAAEgFQAEgEAAgKIAAhoQAAgLgEgFQgEgEgIAAQgHAAgEAEgAjVBXQgLgNAAgYIAAgXIAdAAIAAAaQAAAKAEAEQAEAFAIAAQAHAAAEgFQAEgEABgKIAAgrIgdAAIAAgaIAdAAIAAgjQgBgLgEgFQgEgEgHAAQgIAAgEAEQgEAFAAALIAAASIgdAAIAAgRQAAgXAMgNQALgMAWAAQAXAAAMAMQALANAAAXIAABkQAAAYgLANQgMAMgXABQgWgBgMgMgADEBiIAAiLIgVCLIgdAAIgXiJIAACJIgbAAIAAjCIArAAIAWCIIAViIIArAAIAADCgAhZBiIAAimIggAAIAAgcIBfAAIAAAcIghAAIAACmg");
	this.shape.setTransform(22.6,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,20.1);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABOBiIgFgkIgmAAIgFAkIgdAAIAgjDIAtAAIAfDDgABFAkIgPhiIgPBiIAeAAgAgqBiIAAhVIgjAAIAABVIgfAAIAAjDIAfAAIAABUIAjAAIAAhUIAfAAIAADDg");
	this.shape.setTransform(11,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,19.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABPBrQgMgNAAgXIAAhkQAAgXAMgNQAMgNAXAAQAWAAAMANQAMANAAAXIAABkQAAAXgMANQgMANgWABQgXgBgMgNgABmguQgEAFAAAKIAABoQAAAKAEAFQAEAEAIABQAHgBAEgEQAEgFABgKIAAhoQgBgKgEgFQgEgFgHABQgIgBgEAFgAnfBrQgMgNAAgXIAAgVIAdAAIAAAXQABAKAEAFQAEAEAHABQAIgBAEgEQAEgFAAgNIAAgPQAAgNgEgHQgFgGgLABIgHAAIAAgcIAJAAQAJAAAEgDQAFgEAAgMIAAgLQAAgNgEgFQgEgEgIAAQgHgBgEAFQgFAFAAAKIAAAQIgcAAIAAgOQAAgYALgNQAMgMAWAAQAXAAALANQAMANAAAXIAAAFQAAAQgFAIQgFAKgLAEQALAGAFAKQAFALAAAPIAAAPQAAAXgMANQgLANgXABQgWgBgMgNgAHQB2IAAiIIgmCIIggAAIAAjCIAbAAIAAB6IAlh6IAiAAIAADCgAFdB2IgGgjIglAAIgGAjIgcAAIAfjCIAtAAIAgDCgAE1A4IAeAAIgPhhgADMB2IAAimIggAAIAAgcIBfAAIAAAcIghAAIAACmgAgsB2IAAjCIBUAAIAAAcIg2AAIAAAwIAQAAQAYAAALANQAMAMAAAYIAAAUQAAAYgMAMQgLANgYAAgAgOBaIAQAAQAIAAAEgEQAEgEAAgLIAAgYQAAgLgEgEQgEgEgIAAIgQAAgAhaB2IgFgjIgmAAIgFAjIgdAAIAgjCIAtAAIAfDCgAiBA4IAeAAIgPhhgAkIB2IAAjCIAtAAQAXAAAMAMQALANAAAXIAAAaQAAAVgLANQgMAMgXAAIgOAAIAABKgAjpAQIAOAAQAIAAAEgDQADgFAAgIIAAgdQAAgLgDgEQgEgEgIAAIgOAAgAk1B2IgGgjIglAAIgGAjIgcAAIAfjCIAtAAIAgDCgAldA4IAeAAIgPhhgAGjhhQgIgJAAgOIATAAQABAIADACQADADAGAAQAHAAADgDQAEgCAAgIIATAAQAAAOgIAJQgIAIgRAAQgQAAgIgIg");
	this.shape.setTransform(49.2,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.5,24.2);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBiIAAgdIAdAAIAAAdgAgQA3IgBgFIgBgHQABgQAEgKQAFgLAHgGQAEgKAGgLQAEgLABgTQAAgKgEgEQgEgFgGAAQgHAAgEAFQgEAEAAAKIAAAWIgdAAIAAgUQAAgXAMgNQALgNAVAAQAWAAALANQAMANAAAXQAAAUgGAMQgGAMgGAHIgNATQgGAKABANIAAAGIABAFg");
	this.shape.setTransform(4.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,19.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkfBrQgMgNABgXIAAhkQgBgXAMgNQAMgNAXAAQAWAAAMANQAMANAAAXIAABkQAAAXgMANQgMANgWABQgXgBgMgNgAkHguQgFAFAAAKIAABoQAAAKAFAFQADAEAIABQAHgBAEgEQAFgFAAgKIAAhoQAAgKgFgFQgEgFgHABQgIgBgDAFgAmLBrQgMgNAAgXIAAhkQAAgXAMgNQAMgNAWAAQAWAAANANQALANAAAXIAAATIgdAAIAAgVQAAgKgFgFQgEgFgHABQgIgBgDAFQgFAFAAAKIAABoQAAAKAFAFQADAEAIAAQAHAAAEgEQAFgFAAgKIAAgcIAdAAIAAAaQAAAXgLANQgNANgWABQgWgBgMgNgAF8B2IAAiIIgnCIIgfAAIAAjCIAbAAIAAB6IAlh6IAiAAIAADCgAEEB2IAAiIIgmCIIggAAIAAjCIAcAAIAAB6IAkh6IAiAAIAADCgAByB2IAAimIggAAIAAgcIBfAAIAAAcIghAAIAACmgAAmB2IAAjCIAfAAIAADCgAhGB2IAAjCIAgAAIAABJIAOAAQAXABAJAKQAMAMAAAYIAAAZQAAAYgMAMQgJANgXAAgAgmBaIAOAAQAHAAAFgEQADgEAAgLIAAgdQAAgLgDgDQgFgFgHAAIgOAAgAi5B2IAAjCIBWAAIAAAcIg4AAIAAAwIATAAQAXAAAMANQALAMAAAYIAAAUQAAAYgLAMQgMANgXAAgAibBaIATAAQAHAAAEgEQAEgEABgLIAAgYQgBgLgEgEQgEgEgHAAIgTAAgAFPhhQgIgJAAgOIATAAQAAAIADACQAEADAGAAQAGAAAEgDQADgCABgIIATAAQAAAOgJAJQgIAIgQAAQgQAAgIgIg");
	this.shape.setTransform(40.8,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.6,24.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjKBXQgMgNAAgYIAAgVIAdAAIAAAYQABAKAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgOIAAgPQAAgNgEgGQgFgGgLABIgHAAIAAgaIAJAAQAJAAAEgFQAFgFAAgMIAAgLQAAgNgEgEQgEgFgIAAQgHAAgEAEQgFAFAAALIAAAQIgcAAIAAgPQAAgXALgNQAMgNAWAAQAXABALAMQAMANAAAXIAAAGQAAAPgFAKQgFAKgLAFQALAEAFAKQAFAKAAAPIAAAPQAAAYgMANQgLAMgXABQgWgBgMgMgAFdBiIAAjCIBUAAIAAAcIg1AAIAAA2IAqAAIAAAaIgqAAIAAA5IA1AAIAAAdgAErBiIAAiJIgmCJIggAAIAAjCIAcAAIAAB6IAkh6IAiAAIAADCgACZBiIAAimIggAAIAAgcIBfAAIAAAcIggAAIAACmgABQBiIAAiJIgmCJIggAAIAAjCIAcAAIAAB6IAkh6IAiAAIAADCgAhlBiIAAjCIAuAAQAYgBALAMQALALAAAXIAAAHQAAAPgFAJQgFALgKAEQAMAFAGAJQAFALAAAPIAAAQQAAAXgMALQgLANgYAAgAhGBFIARAAQAIABAEgFQAEgEAAgLIAAgRQAAgNgEgGQgFgFgKABIgOAAgAhGgQIAMAAQAJAAAEgFQAFgFAAgMIAAgLQAAgKgDgFQgEgEgIAAIgPAAgAkBBiIgGgkIglAAIgGAkIgcAAIAfjCIAtAAIAgDCgAkLAkIgPhiIgPBiIAeAAgAmwBiIAAjCIAuAAQAXAAALAMQAMANAAAXIAAAaQAAAWgMALQgLANgXAAIgPAAIAABKgAmRgCIAPAAQAHAAAEgEQAEgEAAgLIAAgdQAAgKgEgFQgEgDgHAAIgPAAg");
	this.shape.setTransform(43.3,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.7,20.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnyCFIAAgbIhBAAIAAAbIgeAAIAAg2IAMAAQAEgGABgGIACgOIAHiNIBXAAIAACnIANAAIAAA2gAofA1QgBAKgCAHQgCAFgEAEIAoAAIAAiLIgaAAgAlZBrIAAgdQAHAAAEgBQAEgBACgEQACgFAAgJIAFiSIBYAAIAADCIggAAIAAimIgbAAIgDB0QgBAbgKAMQgLAMgXAAgAH+BqIAAjCIBUAAIAAAcIg1AAIAAA2IAqAAIAAAaIgqAAIAAA6IA1AAIAAAcgAGYBqIAAjCIBUAAIAAAcIg1AAIAAA2IAqAAIAAAaIgqAAIAAA6IA1AAIAAAcgADwBqIAAjCIAfAAIAACmIAaAAIAAimIAfAAIAACmIAbAAIAAimIAeAAIAADCgAC+BqIAAiIIgmCIIggAAIAAjCIAbAAIAAB6IAlh6IAiAAIAADCgAARBqIAAjCIBUAAIAAAcIg1AAIAAA2IAqAAIAAAaIgqAAIAAA6IA1AAIAAAcgAgiBqIAAhUIgjAAIAABUIgfAAIAAjCIAfAAIAABUIAjAAIAAhUIAfAAIAADCgAjSBqIAAjCIAfAAIAABJIAOAAQAXABAMAMQALAKAAAYIAAAZQAAAYgLAMQgMANgXAAgAizBOIAOAAQAIAAAEgEQADgEAAgLIAAgdQAAgLgDgDQgEgFgIAAIgOAAgAl9BqIgGgjIglAAIgGAjIgcAAIAfjCIAtAAIAgDCgAmlAsIAeAAIgPhhgACRhtQgIgJAAgOIATAAQABAIADACQADADAGAAQAHAAADgDQAEgCAAgIIATAAQAAAOgIAJQgIAIgRAAQgQAAgIgIg");
	this.shape.setTransform(59.5,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,26.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEJBmIAAgIIhCAAIAAAIIgeAAIAAgkIAMAAQAEgFACgGIACgOIAHiOIBWAAIAACnIANAAIAAAkgADbAoQgBALgCAGQgCAGgEADIApAAIAAiLIgaAAgAjIBmIAAgIIhBAAIAAAIIgeAAIAAgkIAMAAQAEgFABgGIACgOIAHiOIBXAAIAACnIANAAIAAAkgAj1AoQgBALgCAGQgCAGgEADIAoAAIAAiLIgaAAgAiSBeIAAgbQAMAAAHgDQAGgDACgKIABgCIgriWIAfAAIAaBwIAVhwIAgAAIghCQQgDATgHALQgGALgMAGQgLAEgQAAIgHAAgAIOBeIAAjDIAfAAIAABKIAOAAQAXAAAMANQALAMAAAWIAAAZQAAAYgLAMQgMANgXAAgAItBCIAOAAQAIAAAEgFQADgDAAgLIAAgeQAAgKgDgEQgEgDgIAAIgOAAgAHCBeIAAinIggAAIAAgcIBfAAIAAAcIghAAIAACngAF9BeIgFgkIgmAAIgFAkIgdAAIAgjDIAtAAIAfDDgAF0AgIgPhiIgPBiIAeAAgACDBeIgGgkIglAAIgGAkIgcAAIAfjDIAtAAIAgDDgAB5AgIgPhiIgPBiIAeAAgAgmBeIAAjDIBPAAIAAAcIgwAAIAACngAmHBeIAAjDIBUAAIAAAcIg1AAIAAA3IAqAAIAAAaIgqAAIAAA6IA1AAIAAAcgAnxBeIAAjDIAuAAQAXAAALANQAMAMAAAYIAAAZQAAAYgMAKQgLAMgXABIgPAAIAABKgAnSgGIAPAAQAHAAAEgEQAEgFAAgKIAAgdQAAgLgEgDQgEgFgHAAIgPAAgAomBeIAAinIgjAAIAACnIgfAAIAAjDIBhAAIAADDg");
	this.shape.setTransform(61.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.6,20.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjqBXQgMgNAAgYIAAhkQAAgXAMgNQAMgMAXgBQAWABAMAMQAMANAAAXIAABkQAAAYgMANQgMAMgWABQgXgBgMgMgAjThDQgEAFAAALIAABoQAAAKAEAEQAEAFAIAAQAHAAAEgFQAEgEABgKIAAhoQgBgLgEgFQgEgEgHAAQgIAAgEAEgAExBiIAAjCIAfAAIAABJIAOAAQAXAAAMAMQALALAAAXIAAAaQAAAXgLANQgMANgXAAgAFQBFIAOAAQAIAAAEgEQADgDAAgLIAAgeQAAgKgDgEQgEgEgIAAIgOAAgACJBiIAAjCIAfAAIAAClIAaAAIAAilIAfAAIAAClIAbAAIAAilIAeAAIAADCgAAiBiIAAjCIBUAAIAAAcIg1AAIAAA2IAqAAIAAAaIgqAAIAAA5IA1AAIAAAdgAgIBiIgchXIgIAPIAABIIgeAAIAAhIIgIgPIgcBXIgfAAIAmhyIgmhQIAeAAIAlBPIAAhPIAeAAIAABPIAlhPIAcAAIgjBPIAjBzgAknBiIAAiLIgVCLIgdAAIgXiJIAACJIgbAAIAAjCIArAAIAWCIIAViIIArAAIAADCg");
	this.shape.setTransform(39.7,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.4,20.1);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bac();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,608,168);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,159);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,69);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,32);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blink2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,29);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_09();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,32);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,36);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,76);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,32);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(132.7,32.3,1,1,0,0,0,103.6,10.1);

	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(129.5,32.5,1.057,0.57,0,0,0,122.5,57);
	this.instance_1.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("A0NFEIAAqIMAobAAAIAAKIg");
	this.shape.setTransform(129.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,65);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.setTransform(117.5,33.5,1,1,0,0,0,129.4,32.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,1,259,65);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(61.8,10.2,1,1,0,0,0,61.8,10.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEJAJIAAgRIAfAAIAAARgACqAJIAAgRIAeAAIAAARgAjHAJIAAgRIAeAAIAAARgAknAJIAAgRIAeAAIAAARg");
	this.shape.setTransform(61.7,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.6,22.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(35,38,1,1,0,0,0,35,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,76);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(-241,-305.9,1,1,0,0,0,35,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,y:57},19).wait(15).to({x:-49,y:-250.9},0).to({rotation:0,y:49},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-343.9,70,76);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(86.5,79.5,1,1,0,0,0,86.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,159);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(86.5,75.5,1,1,0,0,0,86.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:81.5},12,cjs.Ease.get(-1)).to({y:87.5},12,cjs.Ease.get(1)).to({y:81.3},13,cjs.Ease.get(-1)).to({y:75.5},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,173,159);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(24.5,31.6,0.415,0.415,0,0,0,32.5,34.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:34.5,scaleX:1,scaleY:1,rotation:90,x:24,y:34.5,alpha:1},9).to({regX:32.4,scaleX:0.42,scaleY:0.42,rotation:217.2,x:31,y:34.1,alpha:0},9).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,17.2,27,28.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(20.8,11.8,1,1,0,0,0,32.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(15,16,1,1,0,0,0,15,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-5.5,30.8,37.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(24.8,19.3,1,1,0,0,0,32.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(16.5,18,1,1,0,0,0,16.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,36);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(25,15.8,1,1,0,0,0,32.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(18.5,16,1,1,0,0,0,18.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.5,37,33.5);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.setTransform(25.9,26.4,0.547,1,0,0,0,13.3,14.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({scaleX:1,alpha:0},3).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(25.5,25.5,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.18,x:25.6},4).to({scaleX:1,x:25.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();
	this.instance.setTransform(103.7,74.5,0.964,0.964,0,0,0,32.6,34.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(30));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(82.8,79,0.964,0.964,0,0,0,32.6,34.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({_off:true},30).wait(9));

	// Символ 21
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(97.7,85.5,0.964,0.964,0,0,0,32.6,34.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({_off:true},30).wait(14));

	// Символ 21
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(129.7,79,0.964,0.964,0,0,0,32.6,34.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({_off:true},30).wait(5));

	// Символ 21
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(103.7,68,0.964,0.964,0,0,0,32.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},30).wait(20));

	// Слой 1
	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(86.5,79.5,1,1,0,0,0,86.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,173,159);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(25.5,25.5,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(15.5,16,1,1,0,0,0,15.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,32);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.setTransform(42.7,17.5,1,1,0,0,0,39.6,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16,x:42.8},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:42.7},5,cjs.Ease.get(1)).wait(21));

	// Символ 32
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(150.5,18.7,1,1,0,0,0,61.8,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regY:11.2,scaleX:1.13,scaleY:1.13,y:18.9},4,cjs.Ease.get(-1)).to({regY:11.1,scaleX:1,scaleY:1,y:18.7},5,cjs.Ease.get(1)).wait(19));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(62,52.2,1,1,0,0,0,59.5,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({regY:13.4,scaleX:1.1,scaleY:1.1,y:52.3},4,cjs.Ease.get(-1)).to({regY:13.3,scaleX:1,scaleY:1,y:52.2},5,cjs.Ease.get(1)).wait(17));

	// Символ 34
	this.instance_3 = new lib.Символ34();
	this.instance_3.setTransform(170.9,53.1,1,1,0,0,0,43.3,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({scaleX:1.14,scaleY:1.14,x:171},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:170.9},5,cjs.Ease.get(1)).wait(15));

	// Символ 35
	this.instance_4 = new lib.Символ35();
	this.instance_4.setTransform(261.1,51,1,1,0,0,0,40.8,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({regX:40.9,regY:12.2,scaleX:1.15,scaleY:1.15,x:261.2,y:51.1},4,cjs.Ease.get(-1)).to({regX:40.8,regY:12.1,scaleX:1,scaleY:1,x:261.1,y:51},5,cjs.Ease.get(1)).wait(13));

	// Символ 36
	this.instance_5 = new lib.Символ36();
	this.instance_5.setTransform(308,52.9,1,1,0,0,0,4.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({regY:10,scaleX:1.41,scaleY:1.41,y:53.1},4,cjs.Ease.get(-1)).to({regY:9.9,scaleX:1,scaleY:1,y:52.9},5,cjs.Ease.get(1)).wait(11));

	// Символ 37
	this.instance_6 = new lib.Символ37();
	this.instance_6.setTransform(52.2,85.4,1,1,0,0,0,49.2,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({scaleX:1.18,scaleY:1.18},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(9));

	// Символ 38
	this.instance_7 = new lib.Символ38();
	this.instance_7.setTransform(119,87.4,1,1,0,0,0,11,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({scaleX:1.26,scaleY:1.26,x:118,y:88.3},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:119,y:87.4},5,cjs.Ease.get(1)).wait(7));

	// Символ 39
	this.instance_8 = new lib.Символ39();
	this.instance_8.setTransform(157.9,87.5,1,1,0,0,0,22.6,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({scaleX:1.23,scaleY:1.23,x:158},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:157.9},5,cjs.Ease.get(1)).wait(5));

	// Символ 40
	this.instance_9 = new lib.Символ40();
	this.instance_9.setTransform(184.3,87.4,1,1,0,0,0,1.6,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({scaleX:1.33,scaleY:1.33,x:186.8,y:86.7},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:184.3,y:87.4},5,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,7.4,310.2,90.1);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();
	this.instance.setTransform(132,25.9,1.387,1.387,0,0,0,32.6,34.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(29).to({_off:true},1).wait(38));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(105.4,100.1,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(29).to({_off:true},1).wait(18));

	// Символ 21
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(177.4,104.4,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(29).to({_off:true},1).wait(27));

	// Символ 21
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(235,-26.3,1.387,1.387,0,0,0,32.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:true},1).wait(55));

	// Символ 21
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(208.4,47.9,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(29).to({_off:true},1).wait(46));

	// Символ 21
	this.instance_5 = new lib.Символ21();
	this.instance_5.setTransform(261.4,69.9,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).wait(29).to({_off:true},1).wait(34));

	// Символ 21
	this.instance_6 = new lib.Символ21();
	this.instance_6.setTransform(182,-31.5,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).wait(29).to({_off:true},1).wait(13));

	// Символ 21
	this.instance_7 = new lib.Символ21();
	this.instance_7.setTransform(-261.8,-8.6,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(29).to({_off:true},1).wait(41));

	// Символ 21
	this.instance_8 = new lib.Символ21();
	this.instance_8.setTransform(-334.8,35.9,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({_off:false},0).wait(29).to({_off:true},1).wait(9));

	// Символ 21
	this.instance_9 = new lib.Символ21();
	this.instance_9.setTransform(-288.4,65.6,1.387,1.387,0,0,0,32.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:true},1).wait(55));

	// Символ 21
	this.instance_10 = new lib.Символ21();
	this.instance_10.setTransform(-216.4,69.9,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).wait(30));

	// Символ 21
	this.instance_11 = new lib.Символ21();
	this.instance_11.setTransform(-314.8,-13.8,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).wait(29).to({_off:true},8).wait(38));

	// Символ 21
	this.instance_12 = new lib.Символ21();
	this.instance_12.setTransform(62,-13.8,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off:false},0).wait(29).to({_off:true},1).wait(32));

	// Символ 21
	this.instance_13 = new lib.Символ21();
	this.instance_13.setTransform(-46,6.2,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).wait(29).to({_off:true},1).wait(15));

	// Символ 21
	this.instance_14 = new lib.Символ21();
	this.instance_14.setTransform(0.4,35.9,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({_off:false},0).wait(29).to({_off:true},1).wait(30));

	// Символ 21
	this.instance_15 = new lib.Символ21();
	this.instance_15.setTransform(72.4,40.2,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(34).to({_off:false},0).wait(29).to({_off:true},1).wait(21));

	// Символ 21
	this.instance_16 = new lib.Символ21();
	this.instance_16.setTransform(24.6,100.1,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(18).to({_off:false},0).wait(29).to({_off:true},1).wait(37));

	// Символ 21
	this.instance_17 = new lib.Символ21();
	this.instance_17.setTransform(-106,-4.3,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(37).to({_off:false},0).wait(29).to({_off:true},1).wait(18));

	// Символ 21
	this.instance_18 = new lib.Символ21();
	this.instance_18.setTransform(-179,40.2,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(7).to({_off:false},0).wait(29).to({_off:true},1).wait(48));

	// Символ 21
	this.instance_19 = new lib.Символ21();
	this.instance_19.setTransform(-132.6,69.9,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(51).to({_off:false},0).wait(29).to({_off:true},1).wait(4));

	// Символ 21
	this.instance_20 = new lib.Символ21();
	this.instance_20.setTransform(-60.6,74.2,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20).to({_off:false},0).wait(29).to({_off:true},1).wait(35));

	// Символ 21
	this.instance_21 = new lib.Символ21();
	this.instance_21.setTransform(-159,-9.5,1.387,1.387,0,0,0,32.6,34.6);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).wait(29).to({_off:true},1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.3,-50.4,560.9,131.6);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// but
	this.but = new lib.Символ43();
	this.but.setTransform(177.1,41.6,1,1,0,0,0,110.5,32.5);
	this.but.alpha = 0;
	this.but._off = true;

	this.timeline.addTween(cjs.Tween.get(this.but).wait(6).to({_off:false},0).to({alpha:1},8).to({alpha:0},9).to({_off:true},1).wait(6));

	// words
	this.words = new lib.Символ1();
	this.words.setTransform(155.2,46.5,1,1,0,0,0,157.6,53.8);

	this.timeline.addTween(cjs.Tween.get(this.words).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310.2,90.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ48();
	this.instance.setTransform(374.5,74.1,1,1,0,0,0,36.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(303.9,84.1,1.079,1.079,0,0,0,303.9,84);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 20, 4, 0))];
	this.instance_1.cache(-2,-2,612,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:0.199},15,cjs.Ease.get(-1)).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},15).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(304,84,1,1,0,0,0,304,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,scaleY:1.04,x:304.1},14,cjs.Ease.get(-1)).to({regX:303.9,scaleX:1.08,scaleY:1.08,x:303.9,y:84.1},15,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,x:304},15,cjs.Ease.get(-1)).to({regX:304,scaleX:1,scaleY:1,y:84},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,616,176);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(24.5,13.5,1,1,0,0,0,32.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(15.5,16,1,1,0,0,0,15.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.8,31,35.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ18();
	this.instance.setTransform(249,16,1,1,0,0,0,15,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:262},19).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(166.5,211.5,1,1,0,0,0,16.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:328},9).wait(1).to({y:82.1},0).to({y:198.6},9).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(421.5,281.2,1,1,0,0,0,15.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:320},3).wait(1).to({y:74.1},0).to({y:268.2},15).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(18.5,127.8,1,1,0,0,0,18.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:309},14).wait(1).to({y:63.1},0).to({y:114.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.5,437,302.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(118.5,185,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:323.5},12).wait(1).to({y:46.5},0).to({y:173.5},11).wait(1));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(336.5,57.5,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:334.5},24).wait(1));

	// Символ 8
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(450.5,244.8,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:302.5},5).wait(1).to({y:25.5},0).to({y:233.2},18).wait(1));

	// Символ 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(242.5,238.1,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:353.5},10).wait(1).to({y:76.5},0).to({y:226.5},13).wait(1));

	// Символ 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(-4.5,279.4,1,1,0,0,0,25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:302.5},2).wait(1).to({y:25.5},0).to({y:267.9},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,32,506,272.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(335,209,1,1,0,0,0,35,38);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(295.5,-58,1,1,0,0,0,218.5,50);

	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(317,-57,1,1,0,0,0,238,51);

	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(59.5,56.5,1,1,0,0,0,86.5,79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-173,582,369.9);


// stage content:



(lib.synduk600120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open("http://checkindigo.ru", "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.but.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
		this.but.gotoAndPlay(14);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.but = new lib.Символ45();
	this.but.setTransform(417.3,59.5,1,1,0,0,0,156.8,45.1);

	this.timeline.addTween(cjs.Tween.get(this.but).wait(1));

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(191,86.5,1,1,0,0,0,153,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(304,44,1,1,0,0,0,304,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,-113,612,369.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;