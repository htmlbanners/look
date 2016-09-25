(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#663366",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png?1474839217370", id:"logo"},
		{src:"images/One.jpg?1474839217370", id:"One"},
		{src:"images/three.jpg?1474839217370", id:"three"},
		{src:"images/two.jpg?1474839217370", id:"two"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.One = function() {
	this.initialize(img.One);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.three = function() {
	this.initialize(img.three);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.two = function() {
	this.initialize(img.two);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCAtIAAgOIgmAAIAAg6IAIAAIAAA0IAXAAIAAg0IAJAAIAAA0IAGAAIAAAUgApRAtIAAgOIgiAAIAAAOIgHAAIgBgUIADAAQADgEADgGQACgIAAgLIABgXIAgAAIAAA0IAGAAIgBAUgApngEIgCAQQgDAIgDAFIAYAAIAAguIgQAAgAQOAbQgFgFAAgJIAAgoIAIAAIAAAoQAAAGADADQADADAFAAQAFAAADgCQADgEAAgGIAAgoIAIAAIAAAoQAAAJgFAFQgFAFgJAAQgJAAgFgFgANyAaQgFgGAAgLIAAgPQAAgKAFgGQAGgGAIAAQAJAAAFAFQAEAFAAAJIgIAAQAAgGgCgDQgDgDgFAAQgFAAgDAEQgDAEAAAHIAAAPQAAAIADAFQADAEAFgBQAFAAADgCQACgEAAgGIAIAAIAAAAQAAAJgEAFQgFAFgJAAQgIAAgGgGgAKjAbQgGgFAAgIIAIAAQAAAFADAEQADACAGAAQAEAAADgCQADgCAAgFQAAgEgDgDQgCgDgGgCQgJgDgEgBQgEgFgBgHQAAgHAGgFQAFgEAHAAQAJAAAFAFQAFAFAAAIIgIAAQAAgFgDgDQgDgDgFAAQgEAAgDACQgCADAAAEQAAAEACACQADADAGADQAJAAAEAFQAEAEAAAHQAAAHgFAEQgFAFgIAAQgIAAgGgFgAgHAaQgFgGAAgLIAAgPQAAgKAFgGQAGgGAGAAQAJAAAFAFQAEAFAAAJIgIAAQAAgGgCgDQgDgDgFAAQgFAAgBAEQgDAEAAAHIAAAPQAAAIADAFQABAEAFgBQAFAAADgCQACgEAAgGIAIAAIAAAAQAAAJgEAFQgFAFgJAAQgGAAgGgGgAvIAaQgGgGAAgLIAAgPQAAgKAGgGQAFgGAJAAQAJAAAGAGQAGAGAAAKIAAAPQAAALgGAGQgGAGgJAAQgJAAgFgGgAvDgRQgDAEAAAHIAAAPQAAAIADAEQAEAEAFAAQAGABADgEQADgFABgIIAAgPQgBgHgDgEQgDgEgGAAQgFAAgEAEgAP5AfIgDgEIAAgGIAAgFQAAgFgCgDQgDgDgEAAIgLAAIAAAaIgIAAIAAg6IASAAQAJAAAFAEQAFAFgBAIQAAAFgBADQgDACgEABQAEACADAEQABAEAAAFIAAAFIABAFIACAEIAAABgAPiAAIAKAAQAFAAACgCQADgDAAgFQAAgFgDgDQgBgDgGAAIgKAAgAPFAfIAAgIIAJAAIAAAIgAObAfIAAg6IAiAAIAAAGIgaAAIAAAUIAXAAIAAAEIgXAAIAAAWIAaAAIAAAGgANbAfIgXgrIgBABIAAAqIgHAAIAAg6IAHAAIAYArIAAAAIAAgrIAIAAIAAA6gAMSAfIAAg6IAiAAIAAAGIgaAAIAAAUIAWAAIAAAEIgWAAIAAAWIAaAAIAAAGgALiAfIAAg6IAQAAQAKAAAFAHQAHAIAAALIAAAGQAAAMgHAHQgFAHgKAAgALpAZIAIAAQAHgBADgFQAEgFAAgJIAAgGQAAgJgEgGQgDgFgHAAIgIAAgALNAfIAAg6IAIAAIAAA6gAJ2AfIAAg6IAhAAIAAAGIgaAAIAAAUIAXAAIAAAEIgXAAIAAAWIAaAAIAAAGgAJkAfIgCgEIgBgGIAAgFQAAgFgCgDQgCgDgEAAIgMAAIAAAaIgIAAIAAg6IATAAQAIAAAGAEQAEAFAAAIQAAAFgCADQgDACgEABQAFACACAEQACAEAAAFIAAAFIAAAFIADAEIAAABgAJNAAIAKAAQAFAAADgCQACgDAAgFQAAgFgCgDQgCgDgFAAIgLAAgAIYAfIAAg6IAIAAIAAA6gAHtAfIAAg6IAiAAIAAAGIgaAAIAAAVIAXAAIAAAEIgXAAIAAAbgAHeAfIgFgPIgTAAIgEAPIgJAAIATg6IAIAAIASA6gAHIAJIAPAAIgHgYIgBAAgAGpAfIAAgIIAJAAIAAAIgAGOAfIgKgoIgLAoIgHAAIgNg6IAIAAIAIApIABAAIAKgpIAGAAIALApIAAAAIAIgpIAIAAIgLA6gAFOAfIgKgoIgLAoIgHAAIgNg6IAIAAIAIApIABAAIAKgpIAHAAIAKApIAAAAIAIgpIAJAAIgMA6gAEOAfIgLgoIgKAoIgIAAIgMg6IAIAAIAJApIAAAAIAKgpIAHAAIAKApIABAAIAIgpIAIAAIgNA6gACtAfIAAg6IAiAAIAAAGIgaAAIAAAUIAWAAIAAAEIgWAAIAAAWIAaAAIAAAGgACOAfIAAg0IgPAAIAAgGIAmAAIAAAGIgPAAIAAA0gABvAfIAAgqIgYAqIgIAAIAAg6IAIAAIAAAqIABAAIAXgqIAIAAIAAA6gABAAfIgFgPIgTAAIgEAPIgIAAIASg6IAIAAIATA6gAAqAJIAQAAIgIgYIAAAAgAgsAfIgEgPIgTAAIgFAPIgJAAIATg6IAIAAIASA6gAhCAJIAQAAIgIgYIAAAAgAhfAfIAAgaIgYAAIAAAaIgIAAIAAg6IAIAAIAAAbIAYAAIAAgbIAIAAIAAA6gAimAfIAAgXIgJAAIgLAXIgJAAIAMgaQgFgDgCgCQgCgDgBgGQAAgIAGgGQAEgEAJAAIARAAIAAA6gAi2gRQgCACAAAGQAAAGACADQADABAFAAIAIAAIAAgWIgIAAQgFAAgDAEgAjTAfIAAgqIgXAqIgIAAIAAg6IAIAAIAAAqIABAAIAWgqIAJAAIAAA6gAk3AfIgFgPIgTAAIgEAPIgIAAIASg6IAIAAIATA6gAlNAJIAQAAIgIgYIAAAAgAmGAfIAAg6IAUAAQAIAAAGAFQAEAFAAAIQAAAIgEADQgGAFgIAAIgMAAIAAAYgAl+ABIAMAAQAFAAACgBQACgEAAgFQAAgFgCgDQgCgEgFAAIgMAAgAmVAfIgEgPIgTAAIgFAPIgJAAIATg6IAIAAIASA6gAmrAJIAQAAIgHgYIgBAAgAnJAfIAAg0IgQAAIAAAVQAAAPgFAJQgDAHgJAAIgCAAIAAgGIACAAQAEgBACgFQACgGAAgNIAAgbIAiAAIAAA6gAn4AfIgQgbIgGAAIAAAbIgJAAIAAg6IAJAAIAAAbIAEAAIAQgbIAKAAIgTAbIAVAfgApBAfIAAg6IAiAAIAAAGIgaAAIAAAUIAXAAIAAAEIgXAAIAAAWIAaAAIAAAGgAqeAfIAAgXIgJAAIgLAXIgJAAIALgaQgEgDgCgCQgCgDgBgGQAAgIAGgGQAEgEAJAAIARAAIAAA6gAqugRQgCACAAAGQAAAGACADQADABAFAAIAIAAIAAgWIgIAAQgFAAgDAEgArGAfIgFgPIgSAAIgFAPIgJAAIATg6IAIAAIASA6gArcAJIAQAAIgIgYIAAAAgAr5AfIAAgaIgYAAIAAAaIgIAAIAAg6IAIAAIAAAbIAYAAIAAgbIAIAAIAAA6gAs4AfIAAg0IgQAAIAAgGIAnAAIAAAGIgPAAIAAA0gAtTAfIgRgbIgGAAIAAAbIgIAAIAAg6IAIAAIAAAbIAGAAIAQgbIAKAAIgTAbIAUAfgAubAfIAAg6IAiAAIAAAGIgaAAIAAAUIAWAAIAAAEIgWAAIAAAWIAaAAIAAAGgAv7AfIAAg6IAUAAQAJAAAFAFQAEAFAAAIQAAAIgEADQgFAFgJAAIgMAAIAAAYgAvzABIAMAAQAFAAACgBQACgEAAgFQAAgFgCgDQgCgEgFAAIgMAAgAwPAfIAAg0IgXAAIAAA0IgIAAIAAg6IAoAAIAAA6gAIpAIIAAgGIATAAIAAAGgABbgkQgEgDAAgFIAAgBIAHAAIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIABgFIAHAAIAAABQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape.setTransform(107.2,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214.3,9.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgcbAjoMAAAhHPMA42AAAMAAABHPg");
	this.shape.setTransform(182,228);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,364,456);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F46F02").s().p("AnBG/IAAt9IODAAIAAN9g");
	this.shape.setTransform(45,44.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,89.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009FA5").s().p("A7oHGIAAuMMA3RAAAIAAOMg");
	this.shape.setTransform(177,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,354,91);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E1A00").s().p("A+OHCIAAuDMA8dAAAIAAODg");
	this.shape.setTransform(193.5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,90);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#327CDC").s().p("A6oHCIAAuDMA1RAAAIAAODg");
	this.shape.setTransform(170.5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341,90);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkIA4QgNgNAAgYIAAgkQAAgZANgNQANgOAVAAQAWAAANAOQANANAAAZIAAAkQAAAYgNANQgNAOgWAAQgVAAgNgOgAj2goQgFAHAAAPIAAAlQAAAOAFAIQAGAHAKAAQAKAAAGgHQAFgIAAgOIAAglQAAgPgFgHQgGgIgKAAQgKAAgGAIgAnfA4QgNgNAAgYIAAgkQAAgZANgNQANgOAVAAQAWAAANAOQANANAAAZIAAAkQAAAYgNANQgNAOgWAAQgVAAgNgOgAnNgoQgFAHAAAPIAAAlQAAAOAFAIQAGAHAKAAQAKAAAGgHQAFgIAAgOIAAglQAAgPgFgHQgGgIgKAAQgKAAgGAIgAGBBDIgbg4IgLAAIAAA4IgbAAIAAiGIAbAAIAAA4IAIAAIAbg4IAgAAIglA+IAoBIgAERBDIAAhwIgqAAIAABwIgbAAIAAiGIBgAAIAACGgACjBDIgbg4IgLAAIAAA4IgbAAIAAiGIAbAAIAAA4IAIAAIAbg4IAgAAIglA+IAoBIgAAzBDIADhaIgBAAIgaBaIgSAAIgXhaIgBABIADBZIgbAAIAAiGIAjAAIAWBiIAAAAIAZhiIAjAAIAACGgAk3BDIgIgdIgkAAIgHAdIgbAAIAniGIAbAAIAmCGgAldARIAZAAIgMguIgBAAgAhJA4IgWgkIAAgBIAWgjIAQAAIgSAkIASAkgAhqA4IgWgkIAAgBIAWgjIAQAAIgSAkIASAkgAHHA2IASgmIgSgjIARAAIAVAiIAAACIgVAlgAGlA2IATgmIgTgjIARAAIAWAiIAAACIgWAlg");
	this.shape.setTransform(49.4,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.8,14);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEvBnIAAghIh3AAIAAiGIALAAIAAB8IArAAIAAh8IALAAIAAB8IArAAIAAh8IALAAIAAB8IAMAAIgCArgAgbA7QgLgNAAgZIAAgkQAAgZALgNQALgNASAAQAUAAALANQAMANAAAZIAAAkQAAAZgMANQgLANgUAAQgSAAgLgNgAgTguQgIAKAAAUIAAAlQAAAUAIALQAIAKANAAQAPAAAJgKQAIgLAAgUIAAglQAAgUgIgKQgJgKgPAAQgNAAgIAKgAlCA6QgLgNAAgYIAAgkQAAgYALgOQALgNASAAQATAAAKAKQAKAKAAAVIAAAAIgLAAQAAgQgHgIQgHgHgOAAQgOAAgIAKQgHALAAAUIAAAkQAAAUAHALQAIAKAOAAQAOAAAHgHQAHgIAAgRIALAAIAAABQAAAUgKAKQgLALgSAAQgSAAgLgOgAoLA+QgMgKABgTIAAgBIALAAQAAANAHAJQAIAIANAAQAOAAAIgIQAHgHAAgOQAAgOgHgHQgHgHgPAAIgNAAIAAgHIANAAQAOAAAHgHQAHgHAAgNQAAgMgHgIQgHgHgOAAQgMAAgHAHQgIAIAAAMIgKAAIgBAAQAAgRALgKQALgKAQAAQASAAAKAKQALAJAAATQAAAKgFAIQgGAIgJACQAKAEAGAIQAGAIAAANQAAASgMAKQgLALgSAAQgQAAgMgKgAIKBGIguhAIgOAAIAABAIgLAAIAAiGIALAAIAAA+IAOAAIArg+IANAAIgvBAIAzBGgAGZBGIAAhvIgBAAIg9BvIgLAAIAAiGIALAAIAABvIABAAIA9hvIALAAIAACGgACOBGIAAhvIAAAAIg9BvIgLAAIAAiGIALAAIAABvIAAAAIA9hvIALAAIAACGgAiGBGIAAiGIAoAAQASAAAKALQAKALAAASQAAASgKAJQgKAKgSAAIgdAAIAAA5gAh7AEIAdAAQANAAAHgHQAHgJAAgMQAAgNgHgJQgHgIgNAAIgdAAgAjLBGIAAh8IgmAAIAAgKIBXAAIAAAKIgmAAIAAB8gAlnBGIgLgmIgyAAIgLAmIgMAAIAriGIAKAAIArCGgAmhAWIAsAAIgWhEIAAAAgABfhUQgHgHABgKIAAgBIAJAAQAAAIADAEQADAEAIAAQAHAAAEgEQADgFAAgHIAJAAIAAABQABAKgHAHQgGAHgLAAQgLAAgGgHg");
	this.shape.setTransform(53.6,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.2,20.7);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlcBVIAAghIhUAAIAAAhIgKAAIgBgqIAIAAQAGgIAGgSQAGgRABghIACgxIBAAAIAAB9IANAAIgBAqgAmVghQgBAbgFASQgFATgHAMIA+AAIAAhzIgqAAgAk2ApQgLgNAAgZIAAgkQAAgZALgNQALgNAUAAQAUAAALANQAMANAAAZIAAAkQAAAZgMANQgLANgUAAQgUAAgLgNgAkug/QgIAKAAATIAAAlQAAAVAIAKQAIAKAPAAQAPAAAJgKQAIgKAAgVIAAglQAAgTgIgKQgJgLgPAAQgPAAgIALgAGxA0IAAg1IgeAAIgYA1IgMAAIAag5QgLgFgFgIQgGgKAAgNQAAgUAKgKQAKgLASAAIAjAAIAACGgAGFhAQgHAIAAAOQAAAOAHAJQAGAHANABIAZAAIAAg9IgYAAQgNAAgHAIgAFMA0IAAh8IguAAIgBA0QgBAmgHARQgHARgSAAIgDAAIAAgJIADAAQALgBAFgOQAFgNABgjIABg+IBEAAIAACGgADbA0IABhyIgBAAIgmByIgIAAIgmhxIgBAAIACBxIgLAAIAAiGIAOAAIAmB1IAAAAIAmh1IAPAAIAACGgAAgA0IAAiGIBIAAIAAAKIg9AAIAAAyIA1AAIAAAKIg1AAIAAA3IA9AAIAAAJgAhDA0IAAiGIAoAAQASAAAJALQAIALAAASQAAASgIALQgJALgSAAIgdAAIAAA2gAg4gMIAdAAQANAAAGgIQAHgJAAgNQAAgNgHgIQgGgJgNAAIgdAAgAhjA0Igug+IgOAAIAAA+IgLAAIAAiGIALAAIAAA/IAOAAIArg/IANAAIgvBCIAzBEg");
	this.shape.setTransform(44.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,17.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADfBGIgEgBIgBgVIADAAIADAAQAGABADgEQADgEADgGIABgFIAAAAIgphhIAdAAIAWA/IABAAIATg/IAcAAIgmBsQgGAOgHAHQgHAIgNAAIgEAAgAkgA3QgLgNAAgcIAAgbQAAgbALgOQAKgOATgBQASABALAOQALAOgBAbIAAAbQABAcgLANQgLAPgSAAQgTAAgKgPgAkDAvQAGABAEgIQADgHAAgQIAAggQAAgRgEgIQgDgHgGAAIAAAAQgHAAgDAHQgDAIAAARIAAAgQAAAQADAHQAEAIAGgBgAFNBDIAAhwIgeAAIAAgWIBYAAIAAAWIgfAAIAABwgACgBDIAAg4IgqAAIAAA4IgbAAIAAiGIAbAAIAAA7IAqAAIAAg7IAbAAIAACGgAAsBDIAAhSIAAAAIgqBSIgYAAIAAiGIAYAAIAABTIABAAIAphTIAbAAIAACGgAhEBDIADhaIgBAAIgaBaIgSAAIgZhaIgBABIACBZIgaAAIAAiGIAjAAIAYBiIAAAAIAZhiIAiAAIAACGgAltBDIAAhqIgZABIAAgUIAzgJIAACGg");
	this.shape.setTransform(39.2,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.3,14);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGkBGIgFgBIAAgVIADAAIADAAQAGABADgEQADgEACgGIACgFIgBAAIgohhIAcAAIAXA/IAAAAIATg/IAcAAIgmBsQgGAOgGAHQgIAIgMAAIgEAAgAj0A3QgLgNABgcIAAgbQgBgbALgOQALgOASgBQATABAKAOQALAOAAAbIAAAbQAAAcgLANQgKAPgTAAQgSAAgLgPgAjXAvQAHABADgIQAEgHAAgQIAAggQAAgRgEgIQgDgHgHAAIAAAAQgHAAgDAHQgDAIAAARIAAAgQAAAQADAHQAEAIAGgBgApGA4QgNgNAAgYIAAgkQAAgZANgNQANgOAWAAQAVAAANAOQAOANAAAZIAAAkQAAAYgOANQgNAOgVAAQgWAAgNgOgAozgoQgFAHAAAPIAAAlQAAAOAFAIQAFAHALAAQAKAAAFgHQAGgIAAgOIAAglQAAgPgGgHQgFgIgKAAQgLAAgFAIgAH7BDIAAiGIBNAAIAAAWIgyAAIAAAdIARAAQAVAAALALQAMAKAAATQAAATgMAMQgLAMgVAAgAIWAuIARAAQAJAAAEgGQAFgHAAgJQAAgKgFgFQgEgHgJAAIgRAAgAEnBDIAAiGIAvAAQAUABAMAMQAMALAAAUQAAAUgMAKQgMALgUABIgVAAIAAAwgAFBAAIAVAAQAIAAAFgHQAFgGgBgKQABgKgFgGQgFgHgIABIgVAAgADOBDIAAg4IgqAAIAAA4IgaAAIAAiGIAaAAIAAA7IAqAAIAAg7IAaAAIAACGgABaBDIAAhwIgdAAIABAnQAAAngKARQgKARgUAAIgHAAIAAgVIADAAQALgBADgKQAEgMgBgdIAAg9IBRAAIAACGgAgYBDIADhaIAAAAIgaBaIgSAAIgahaIAAABIACBZIgbAAIAAiGIAjAAIAYBiIABAAIAZhiIAgAAIAACGgAlBBDIAAhqIgYABIAAgUIAzgJIAACGgAnMBDIAAhwIgeAAIAAgWIBYAAIAAAWIgfAAIAABwg");
	this.shape.setTransform(59.6,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.2,14);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHIA4QgLgNAAgYIAAgkQAAgZALgNQALgOATAAQASAAAKALQAKAKABAVIgBAAIgKAAQAAgQgHgIQgHgHgOgBQgOAAgIALQgIALAAAUIAAAkQAAAUAIAKQAIALAOAAQAOAAAHgHQAHgIAAgRIAKAAIABAAQgBAUgKALQgKALgSAAQgTAAgLgOgAFlA4QgLgNAAgYIAAgkQAAgZALgNQALgOATAAQASAAAKALQAKAKABAVIgBAAIgKAAQAAgQgHgIQgHgHgOgBQgOAAgIALQgIALAAAUIAAAkQAAAUAIAKQAIALAOAAQAOAAAHgHQAHgIAAgRIAKAAIABAAQgBAUgKALQgKALgSAAQgTAAgLgOgAhpA4QgLgNAAgYIAAgkQAAgZALgNQALgOASAAQATAAAKALQAKAKAAAVIAAAAIgLAAQAAgQgHgIQgHgHgOgBQgOAAgIALQgHALAAAUIAAAkQAAAUAHAKQAIALAOAAQAOAAAHgHQAHgIAAgRIALAAIAAAAQAAAUgKALQgLALgSAAQgSAAgLgOgAmbA7QgMgJAAgUIABAAIAKAAQAAANAIAJQAIAIAMAAQAOAAAIgIQAIgHAAgOQAAgOgHgHQgIgHgOAAIgNAAIAAgIIANAAQAOABAHgIQAGgGAAgNQAAgMgHgIQgHgHgOgBQgLABgIAHQgHAIAAAMIgLAAIAAgBQgBgQALgKQALgLAQAAQASAAALAKQAKAKAAASQAAALgFAHQgFAJgKAEQALABAGAJQAFAIAAAMQAAATgLAKQgMALgSAAQgQAAgLgLgAJuBDIgMglIgxAAIgMAlIgLAAIAriGIAKAAIAqCGgAI0AUIArAAIgVhFIgBAAgAFBBDIgMglIgxAAIgMAlIgLAAIAriGIAKAAIAqCGgAEHAUIArAAIgVhFIgBAAgADPBDIAAh8IguAAIgBA0QgBAngHAQQgHASgSgBIgDAAIAAgJIADAAQALAAAFgOQAFgOABgjIABg+IBEAAIAACGgABnBDIgthAIgPAAIAABAIgLAAIAAiGIALAAIAAA/IAOAAIAsg/IANAAIgvBDIAyBDgAjNBDIAAiGIBIAAIAAAKIg9AAIAAAzIA2AAIAAAHIg2AAIAAA5IA+AAIAAAJgAj3BDIAAg+Ig9AAIAAA+IgLAAIAAiGIALAAIAABAIA9AAIAAhAIALAAIAACGgAnJBDIAAhuIgBAAIg9BuIgLAAIAAiGIALAAIAABwIABAAIA9hwIALAAIAACGgAp4BDIAAiGIBEAAIAAAKIg5AAIAAAyIAcAAQASAAAKAIQAJAKAAASQAAARgJALQgKAKgSAAgAptA6IAcAAQANAAAHgJQAGgHAAgOQAAgMgGgHQgHgJgNABIgcAAgAgXAOIAAgKIAjAAIAAAKg");
	this.shape.setTransform(63.4,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.8,14);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGQBDIAAiGIALAAIAACGgAExBDIAAiGIAMAAIAAA8IAcAAQASgBAKAJQAJALABARQgBASgJAKQgKAKgSAAgAE9A6IAcAAQANAAAHgJQAGgHAAgNQAAgNgGgHQgHgIgNAAIgcAAgADNBDIAAiGIAoAAQASAAAKALQAKAMAAARQAAATgKAJQgKAKgSAAIgdAAIAAA4gADYACIAdAAQANAAAHgHQAGgJAAgNQAAgNgGgIQgHgJgNAAIgdAAgACjBDIAAhuIgBAAIg8BuIgMAAIAAiGIAMAAIAABwIAAAAIA9hwIALAAIAACGgAAWBDIAAh8IgkAAIAAgKIBVAAIAAAKIgmAAIAAB8gAhnBDIAAiGIAnAAQASAAAKALQAKAMAAARQAAATgKAJQgKAKgSAAIgcAAIAAA4gAhcACIAcAAQANAAAHgHQAHgJAAgNQAAgNgHgIQgHgJgNAAIgcAAgAiGBDIgLglIgyAAIgMAlIgLAAIAriGIAKAAIAqCGgAjAAUIAsAAIgWhFIgBAAgAkzBDIAAiGIAiAAQASAAAKAJQAKAKAAARQAAAKgGAJQgFAHgIADQAKACAHAIQAGAJAAANQAAASgKAKQgJAJgSAAgAkoA6IAcAAQAMAAAHgIQAHgHAAgNQAAgMgGgIQgGgIgLAAIgfAAgAkogFIAaAAQALgBAGgGQAGgHAAgMQAAgMgGgHQgIgGgMgBIgXAAgAlTBDIguhAIgOAAIAABAIgLAAIAAiGIALAAIAAA/IAOAAIArg/IAOAAIgwBDIAzBDg");
	this.shape.setTransform(41.2,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.3,13.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxaFUIAAqnMAi1AAAIAAKng");
	this.shape.setTransform(111.5,34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,68);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.three();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkKBkIgCgHQALgKAIgZQAJgZAAggIAAgBQAAgfgJgaQgIgZgLgKIACgHIABAAQANAJAMAcQAMAcAAAiIAAAAQAAAkgMAbQgMAcgNAJgAorBkQgOgJgMgcQgLgbAAgkIAAAAQAAgiALgcQAMgcAOgJIAAAAIADAHQgMAKgIAZQgJAaAAAfIAAABQAAAfAJAaQAIAZAMAKIgDAHgAIIAvQgMgKAAgTIABgBIAaAAQAAAIAEAGQAFAFAGAAQAHAAAEgFQAFgGAAgJQAAgLgEgFQgFgDgIAAIgNAAIAAgWIANAAQAIAAADgFQAEgFAAgKQAAgIgEgFQgDgFgHAAQgFAAgEAEQgEAFAAAHIgbAAIAAAAQAAgRALgKQALgLARAAQATAAAMALQALAKAAATQAAAKgFAIQgFAIgIAFQAKAEAFAIQAFAHAAAMQAAATgMALQgNALgTAAQgRAAgMgLgAEkA4QgGgBgGgDIADgVIALAEIALABQAIAAAGgIQAFgIAAgOIAAgGQgDAGgGADQgFADgGAAQgQAAgKgMQgJgMAAgXQAAgVAMgOQALgPASAAQATAAALAPQAMAPAAAbIAAAgQAAAZgNAOQgOAPgUAAIgNgCgAEsg2QgEAIAAALQAAANAEAHQADAIAHAAQAEAAAEgCQAEgDACgEIAAgQQAAgPgDgIQgEgIgHABIAAAAIgBAAQgFAAgEAIgAC3ArQgMgPAAgbIAAgbQAAgbAOgQQAOgQAWAAQAHAAAFACQAGABAGADIgFAVIgJgEIgKgBQgKAAgGAKQgGAJAAAQIAAABQAEgFAGgCQAGgDAHAAQAQAAAJAOQAJANAAATQAAAVgMAOQgLAOgSAAQgUAAgMgPgADNgNQgEACgDAEIAAAJQAAAQAFAJQAEAJAIAAQAGAAAEgIQADgIAAgLQAAgKgDgHQgEgHgGAAQgGAAgEACgAg4ArQgLgOAAgcIAAgdQAAgcALgOQALgPATAAQATAAAJAPQALAOAAAcIAAAdQAAAcgLAOQgJAPgTAAQgTAAgLgPgAgZAjQAGABADgIQAEgIAAgRIAAghQAAgRgEgIQgDgIgHABIAAAAQgHgBgDAIQgEAIAAARIAAAhQAAARAEAIQAEAIAGgBgAlUAwQgKgKABgTIAAAAIAKAAQAAAOAHAHQAGAIAKAAQAMAAAGgKQAGgJAAgSQAAgNgGgKQgGgJgLAAQgLAAgFAEQgFAEgDAJIgJgCIAGhNIA6AAIAAALIgwAAIgEAyQAEgFAFgDQAFgCAIgBQAQAAAJANQAJAMAAATQAAAVgJANQgJANgSAAQgPAAgJgKgAmrA4IgMgEIACgKQAFADAFACIAMABQANAAAHgLQAIgLAAgUIAAgKQgEAGgHAFQgHAEgIAAQgQAAgKgLQgKgOAAgVQAAgVAKgPQALgOAPAAQARAAAKANQALAOAAAZIAAAnQAAAZgLANQgLAOgSAAIgMgCgAmug/QgHAMAAAQQAAAQAGALQAHAJALAAQAKAAAGgEQAHgGADgKIAAgPQAAgUgHgKQgHgLgMAAQgKAAgHAMgAG6A4IAAhuIgaAAIAAgTIA2gKIAACLgABLA4IAAgfIgvAAIgCgRIAwhbIAcAAIAABWIAMAAIAAAWIgMAAIAAAfgABIgpIgVAsIAYAAIAAgvIgBAAgAiHA4IAAhuIgaAAIAAgTIA2gKIAACLgAnqA4IAAgkIg2AAIAAgGIA1hhIAMAAIAABdIASAAIAAAKIgSAAIAAAkgAnug5IglBDIApAAIAAhLIgBgBg");
	this.shape.setTransform(0.1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-8,118.8,20.2);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA+QgMgLAAgTIABgBIAaAAQAAAJAEAFQAFAFAFAAQAGAAAEgFQAFgFAAgKQAAgLgEgFQgFgFgGAAIgNAAIAAgUIANAAQAGAAADgEQAEgGAAgKQAAgHgEgFQgDgGgGAAQgEAAgEAFQgEAEAAAIIgbAAIAAgBQAAgRALgKQALgLARAAQARAAAMALQALAKAAATQAAAKgFAIQgFAJgIAEQAKACAFAJQAFAIAAAMQAAATgMALQgNALgRAAQgRAAgMgKg");
	this.shape.setTransform(55.2,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABGIAAhuIgZAAIAAgTIAzgKIAACLg");
	this.shape_1.setTransform(44.5,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBHQgHgCgGgDIAEgUIAKADIALABQAHAAAFgIQAGgIgBgOIAAgGQgDAGgGADQgEADgEAAQgRAAgKgNQgJgNAAgVQAAgUAMgPQALgPARAAQASAAAMAPQALAPAAAbIAAAgQAAAZgNAOQgNAPgTAAIgMgBgAgIgoQgFAIAAALQABANADAHQAEAGAFAAQADAAAFgCQADgDACgCIAAgPQABgQgEgIQgEgIgGABIAAAAIAAAAQgFAAgDAIg");
	this.shape_2.setTransform(31.2,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA5QgNgPAAgbIAAgbQAAgbAOgQQAOgQAUAAQAHAAAFACQAGABAGADIgEAVIgKgEIgKgBQgIAAgGAKQgGAJAAAQIAAABQAEgFAGgCQAEgCAIgBQAPAAAKAOQAIAMAAAUQAAAWgMANQgLAOgSAAQgSAAgLgPgAgHAAQgEABgDAEIAAALQABAQAEAJQAFAJAFAAQAGAAAEgIQAEgHAAgMQAAgMgEgHQgEgFgGAAQgEAAgEABg");
	this.shape_3.setTransform(21.5,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEBGIAAgfIgtAAIgCgRIAuhbIAcAAIAABWIANAAIAAAWIgNAAIAAAfgAABgbIgSAsIAVAAIAAgvIgBAAg");
	this.shape_4.setTransform(7.2,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcA5QgMgOAAgcIAAgdQAAgbAMgPQALgPARAAQATAAALAPQALAPAAAbIAAAdQAAAcgLAOQgLAPgTAAQgRAAgLgPgAAAAxQAHABADgIQADgIAAgRIAAghQAAgRgDgIQgEgIgGABIAAAAQgFgBgEAIQgDAIAAARIAAAhQAAARAEAIQADAIAFgBg");
	this.shape_5.setTransform(-2.6,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABGIAAhuIgZAAIAAgTIAzgKIAACLg");
	this.shape_6.setTransform(-13.4,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBkIgCgHQAKgKAIgZQAIgZAAggIAAgBQAAgfgIgaQgIgZgKgKIACgHIAAAAQAOAJAKAcQALAcAAAiIAAAAQAAAkgLAbQgKAcgOAJg");
	this.shape_7.setTransform(-24.8,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYA9QgKgKABgTIAAAAIAKAAQAAAOAHAHQAGAIAKAAQAKAAAGgKQAGgJAAgSQAAgPgGgJQgGgIgKAAQgKAAgFAEQgFAEgDAHIgJgCIAGhLIA4AAIAAALIguAAIgEAyQAEgFAFgDQAFgCAGgBQAQAAAJANQAJAKAAAVQAAAVgJANQgJANgQAAQgPAAgJgKg");
	this.shape_8.setTransform(-31.5,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBHIgMgFIACgKQAFADAGACIAMABQAKAAAIgLQAHgKAAgUIAAgNQgEAIgHAFQgGAFgHAAQgQAAgKgOQgJgMAAgVQAAgVAKgPQAKgOAPAAQAQAAAKANQAKAOAAAZIAAAoQAAAYgLANQgLAOgPAAIgNgBgAgRgxQgHAMAAAQQAAAQAHAJQAGALALAAQAIABAHgHQAGgGADgHIAAgQQAAgTgGgLQgHgKgLAAQgKAAgHALg");
	this.shape_9.setTransform(-41.2,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAMBGIAAgkIg0AAIAAgGIAzhhIANAAIAABdIARAAIAAAKIgRAAIAAAkgAAIgrIgjBDIAnAAIAAhLIgBgBg");
	this.shape_10.setTransform(-50.3,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBkQgOgJgKgcQgLgbAAgkIAAAAQAAgiALgcQAKgcAOgJIAAAAIACAHQgLAKgIAZQgHAaAAAfIAAABQAAAfAHAaQAIAZALAKIgCAHg");
	this.shape_11.setTransform(-57.2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-14.4,123.7,29);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.two();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.One();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.One();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация9("synched",0);
	this.instance.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:81},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(200,200);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(60,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},99).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:60},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:59},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ22();
	this.instance.setTransform(-68,182,1,1,0,0,0,182,228);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).wait(81).to({alpha:1},9).to({alpha:0},9).wait(81).to({alpha:1},9).wait(1).to({alpha:0},9).wait(82).to({alpha:1},9).wait(1));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(-50,154,1,1,0,0,0,200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},100).wait(200));

	// Символ 13
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(-50,154,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({_off:true},101).wait(100));

	// Слой 5
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(-50,154,1,1,0,0,0,200,200);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-46,400,456);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6633CC").ss(1,1,1).p("AjTjTIGnAAIAAGnImnAAg");
	this.shape.setTransform(-76.8,-34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#327CDC").s().p("AjTDUIAAmnIGnAAIAAGng");
	this.shape_1.setTransform(-76.8,-34.7);

	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(45,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Анимация6("synched",0);
	this.instance_1.setTransform(45,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},260).to({state:[{t:this.instance_1}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true,alpha:1},10).wait(271));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},10).wait(260).to({startPosition:0},0).to({y:-55},10,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(45,-8,1,0.045,0,0,0,45,44.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleY:1,y:44.8},10,cjs.Ease.get(-1)).wait(265).to({y:-55.2},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-57,44.5,44.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// (495) 104 69 13
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(281.9,12.5);

	this.instance_1 = new lib.Анимация8("synched",0);
	this.instance_1.setTransform(51.9,12.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},254).to({state:[{t:this.instance_1}]},9).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(254).to({startPosition:0},0).to({alpha:0},9).wait(7));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(321.1,1.3,1,1,0,0,0,111.5,34);
	this.instance_2.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({x:91.1,y:-58.7},0).to({y:1.3},10,cjs.Ease.get(1)).wait(260).to({alpha:0},9).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(209.6,-32.7,223,68);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(144.3,-90.6,1,1,0,0,0,49.4,7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208).to({_off:false},0).to({y:-100.6,alpha:1},5).wait(78).to({y:-110.6,alpha:0},5).to({_off:true},1).wait(3));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(34.1,-90.8,1,1,0,0,0,53.6,10.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(204).to({_off:false},0).to({y:-100.8,alpha:1},5).wait(79).to({y:-110.8,alpha:0},5).wait(6).to({y:-100.8,alpha:1},0).wait(1));

	// Слой 10
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(130.6,-49.1,1,0.055,0,0,0,177,46);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:false},0).to({regY:45.5,scaleY:1,y:-92.1},10,cjs.Ease.get(1)).wait(80).to({regY:46,scaleY:0.06,y:-49.1},10,cjs.Ease.get(-1)).wait(1));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(127.2,-89.8,1,1,0,0,0,44.5,8.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(113).to({_off:false},0).to({y:-99.8,alpha:1},5,cjs.Ease.get(1)).wait(72).to({y:-109.8,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},5).wait(100));

	// Символ 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(34.3,-91.4,1,1,0,0,0,39.1,7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({y:-101.4,alpha:1},5,cjs.Ease.get(1)).wait(72).to({y:-111.4,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},9).wait(100));

	// Слой 9
	this.instance_5 = new lib.Символ19();
	this.instance_5.setTransform(147.6,-48.9,1,0.044,0,0,0,193.5,45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({scaleY:1,y:-91.9},10,cjs.Ease.get(1)).wait(81).to({regY:44.6,scaleY:0.07,y:-49.9},9,cjs.Ease.get(-1)).to({_off:true},1).wait(100));

	// Символ 7
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(87.4,-81.9,1,1,0,0,0,59.6,7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({y:-91.9,alpha:1},6).wait(72).to({y:-101.9,alpha:0},6).to({_off:true},1).wait(200));

	// Символ 6
	this.instance_7 = new lib.Символ6();
	this.instance_7.setTransform(129.3,-104.5,1,1,0,0,0,63.4,7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({y:-114.5,alpha:1},6).wait(71).to({y:-124.5,alpha:0},6).wait(4).to({y:-114.5,alpha:1},0).to({_off:true},1).wait(200));

	// Символ 5
	this.instance_8 = new lib.Символ5();
	this.instance_8.setTransform(17.6,-104.5,1,1,0,0,0,41.1,6.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({y:-114.5,alpha:1},6).wait(71).to({y:-124.5,alpha:0},6).wait(7).to({y:-114.5,alpha:1},0).to({_off:true},1).wait(200));

	// Слой 11
	this.instance_9 = new lib.Символ18();
	this.instance_9.setTransform(123.5,-48.9,1,0.044,0,0,0,170.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:1,y:-91.9},9,cjs.Ease.get(1)).wait(80).to({scaleY:0.04,y:-48.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-50.9,341,4);


// stage content:



(lib.Pavelec_240400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(120.7,387.4,1,1,0,0,0,107.2,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(51.7,44.9,1,1,0,0,0,51.7,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(173.2,24.3,1,1,0,0,0,62.8,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(201.5,486.7,1,1,0,0,0,166.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(439,244,1,1,0,0,0,200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.5,143.6,641.5,510.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;