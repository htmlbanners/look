(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/inteko.png", id:"inteko"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/magistr.png", id:"magistr"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,400);


(lib.inteko = function() {
	this.initialize(img.inteko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,34);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,74);


(lib.magistr = function() {
	this.initialize(img.magistr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,57);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAjQgIgDgFgKQgFgJAAgNIAAgHIADgKQACgGAEgEQAEgFAGgDQAHgDAIAAQAKAAAIAEQAIAEAFAIQAEAJAAANIAAAFIgxAAIAAAFIADAGQABADAEACQADACAEAAQAFAAADgCQAEgCABgEIAUAAQgCAJgGAFQgFAGgHACQgGACgHAAQgIAAgJgEgAAPgGQgBgGgCgDQgDgEgDgBQgDgCgDAAQgFAAgEAEQgEAFgBAHIAdAAIAAAAg");
	this.shape.setTransform(132.9,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAjQgIgDgFgKQgFgJAAgNIAAgHIADgKQACgGAEgEQAEgFAGgDQAHgDAIAAQAKAAAIAEQAIAEAFAIQAEAJAAANIAAAFIgxAAIAAAFIADAGQABADAEACQADACAEAAQAFAAADgCQAEgCABgEIAUAAQgCAJgGAFQgFAGgHACQgGACgHAAQgIAAgJgEgAAPgGQgBgGgCgDQgDgEgDgBQgDgCgDAAQgFAAgEAEQgEAFgBAHIAdAAIAAAAg");
	this.shape_1.setTransform(124.8,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAlIAAgfIgbAAIAAAfIgTAAIAAhJIATAAIAAAcIAbAAIAAgcIATAAIAABJg");
	this.shape_2.setTransform(116.5,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAwQgIgFgFgJQgFgJAAgOQAAgNADgLQADgMAHgIQAHgHANgEIAJgCQAFgBADgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBIAOAAQgBAKgHAEQgGAFgLACQgHABgFADQgHADgEAFQgDAGgCAJQAEgHAGgEQAGgFAHAAQAJAAAIAEQAIADAEAIQAFAFABANQAAANgFAJQgFAJgIAEQgJAFgKAAQgKAAgIgFgAgIgBQgEABgBAFQgCAFAAAFIABAKQABAEAEAEQAEADAFAAQAGAAAEgDQAEgEABgEIABgKQAAgFgBgFQgCgFgDgBQgDgDgHAAQgEAAgEADg");
	this.shape_3.setTransform(108.1,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAjQgJgEgGgJQgFgJAAgNQAAgMAFgJQAGgJAJgEQAIgEAJAAQAKAAAIAEQAJAEAGAJQAEAJABAMQgBANgEAJQgGAJgJAEQgIAEgKAAQgJAAgIgEgAgKgSQgEAEgCAFIgBAJIABAKQACAFAEAEQAEADAGABQAHgBAEgDQAEgEABgFQACgFgBgFIgBgJQgBgFgEgEQgEgDgHAAQgGAAgEADg");
	this.shape_4.setTransform(99.6,27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA1IAAhnIATAAIAAALIABAAIADgGIAHgFIAJgCQAJAAAHAEQAIAFADAIQAFAJAAANIgBANQgDAHgDAGQgEAGgGADQgHADgIAAQgEAAgFgCQgEgCgDgDIgDgEIAAgBIAAAogAgJggQgEAEgBAFQgCAFAAAGIABAIIACAFQACADAEADQACACAFAAQAEAAAFgDQAEgDABgDQACgFAAgGQAAgGgCgFQgBgGgDgDQgFgEgFAAQgFAAgEADg");
	this.shape_5.setTransform(91.1,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXAvIAAgUIgtAAIAAAUIgSAAIAAgkIAIAAQAEgFACgIQACgKAAgOIAAgUIA4AAIAAA5IAJAAIAAAkgAgGgWIgBARIgCAJIgDAHIAYAAIAAgqIgSAAg");
	this.shape_6.setTransform(82.1,28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAjQgJgEgGgJQgFgJAAgNQAAgMAFgJQAGgJAJgEQAIgEAJAAQAJAAAJAEQAJAEAGAJQAFAJAAAMQAAANgFAJQgGAJgJAEQgJAEgJAAQgJAAgIgEgAgKgSQgEAEgCAFIgBAJIABAKQACAFAEAEQAEADAGABQAHgBAEgDQAEgEABgFIACgKIgCgJQgBgFgEgEQgEgDgHAAQgGAAgEADg");
	this.shape_7.setTransform(73.4,27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATAyIAAhSIglAAIAABSIgVAAIAAhjIBPAAIAABjg");
	this.shape_8.setTransform(63.9,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#0F9423","#096919"],[0,1],-97.9,0,98,0).s().p("AuOEDQhEAAAAhDIAAl/QAAhDBEAAIcdAAQBEAAAABDIAAF/QAABDhEAAg");
	this.shape_9.setTransform(98,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAlQgJgEgFgKQgFgJgBgOIABgIIADgKQACgGAEgFQAEgFAHgDQAHgDAIAAQALAAAIAEQAJAEAEAJQAFAJAAANIAAAGIgzAAIAAAGIACAGQACADAEACQADACAFAAQAEAAAEgCQADgCACgEIAVAAQgDAJgFAGQgGAFgHACQgHADgGAAQgKAAgIgEgAAQgGQgBgHgCgDQgDgEgDgBQgEgCgDAAQgFAAgFAEQgEAFAAAIIAeAAIAAAAg");
	this.shape_10.setTransform(134.4,27.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAlQgJgEgFgKQgFgJgBgOIABgIIADgKQACgGAEgFQAEgFAHgDQAHgDAIAAQALAAAIAEQAJAEAEAJQAFAJAAANIAAAGIgzAAIAAAGIACAGQACADAEACQADACAFAAQAEAAAEgCQADgCACgEIAVAAQgDAJgFAGQgGAFgHACQgHADgGAAQgKAAgIgEgAAQgGQgBgHgCgDQgDgEgDgBQgEgCgDAAQgFAAgFAEQgEAFAAAIIAeAAIAAAAg");
	this.shape_11.setTransform(125.9,27.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOAnIAAghIgbAAIAAAhIgVAAIAAhNIAVAAIAAAeIAbAAIAAgeIAVAAIAABNg");
	this.shape_12.setTransform(117.3,27.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAyQgJgFgEgKQgFgKAAgOQAAgNADgMQADgMAHgIQAIgIANgEIAKgCIAIgDQAAAAABAAQABgBAAAAQABgBAAAAQAAAAAAgBIAQAAQgCAJgGAGQgHAEgMACQgHACgGADQgGACgEAHQgFAFAAAKQADgHAHgFQAGgFAHABQAJgBAJAEQAIAEAFAHQAFAHAAANQAAAOgFAIQgEAKgJAFQgJAEgLAAQgKAAgJgFgAgIgBQgEACgCAFQgCAEAAAFIACALQABAFAEADQAEADAFAAQAGAAAEgDQAEgEACgFIABgKIgBgJQgCgFgDgCQgEgDgHAAQgFAAgDADg");
	this.shape_13.setTransform(108.5,25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAkQgJgEgGgJQgFgJgBgOQABgNAFgJQAGgJAJgFQAJgEAJAAQAKAAAJAEQAJAFAGAJQAFAJABANQgBANgFAKQgGAJgJAEQgJAFgKAAQgJAAgJgFgAgKgTQgFAEgBAGIgBAJIABAKQABAGAFADQAEAEAGAAQAHAAAFgEQAEgDABgGIABgKIgBgJQgBgGgEgEQgFgDgHgBQgGABgEADg");
	this.shape_14.setTransform(99.6,27.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglA4IAAhtIAUAAIAAAMIAAAAIAFgGQADgDAFgDQAEgCAFAAQAJABAHAEQAHAFAFAIQAFAKAAANQAAAIgCAGQgCAHgEAGQgEAGgGADQgHAEgIAAQgGAAgEgCQgEgCgDgDIgEgFIAAAAIAAAqgAgKghQgDADgCAGQgCAFAAAHIABAHIADAGQACADADACQADADAFAAQAFAAAEgDQAEgEACgDQABgFAAgGQABgGgCgFQgCgHgEgDQgDgDgGgBQgGAAgEAEg");
	this.shape_15.setTransform(90.8,28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAYAxIAAgVIgvAAIAAAVIgTAAIAAglIAJAAQAEgFACgJQACgLAAgOIAAgVIA6AAIAAA8IAKAAIAAAlgAgGgWIgBARQAAAFgCAEIgEAIIAaAAIAAgsIgTAAg");
	this.shape_16.setTransform(81.4,28.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAkQgJgEgGgJQgFgJgBgOQABgNAFgJQAGgJAJgFQAJgEAJAAQAKAAAJAEQAJAFAGAJQAFAJABANQgBANgFAKQgGAJgJAEQgJAFgKAAQgJAAgJgFgAgKgTQgFAEgBAGIgBAJIABAKQABAGAFADQAEAEAGAAQAHAAAFgEQAEgDABgGIABgKIgBgJQgBgGgEgEQgFgDgHgBQgGABgEADg");
	this.shape_17.setTransform(72.3,27.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAUA1IAAhWIgnAAIAABWIgWAAIAAhoIBTAAIAABog");
	this.shape_18.setTransform(62.4,25.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#0F9423","#0EA627"],[0,1],-97.9,0,98,0).s().p("AuOEDQhEAAAAhDIAAl/QAAhDBEAAIcdAAQBEAAAABDIAAF/QAABDhEAAg");
	this.shape_19.setTransform(98.1,26,1.044,1.044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,52);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-16,2,1.436,1.436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,2,328.8,106.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgTrAgQMAAAhAfMAnXAAAMAAABAfg");
	this.shape.setTransform(126,206.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,413);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AgLAcQgFgCgDgEQgDgEAAgHIAAgnIAKAAIAAAkQAAAHADADQADADAFAAQAEAAAEgDQADgDACgFIABgIIAAgeIAKAAIAAA4IgJAAIAAgJQgDAFgEADQgFACgFAAQgEAAgEgBg");
	this.shape.setTransform(235.1,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AgNAdIAAg3IAKAAIAAAJQADgFACgDQAEgDAFAAIACAAIABAAIAAAKIgEAAQgFAAgDACQgCACgBAEQgCADAAAFIAAAfg");
	this.shape_1.setTransform(230.5,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003300").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(226.8,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("AgEAnIAAhOIAJAAIAABOg");
	this.shape_3.setTransform(224.1,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDADgDQACgCAEgBIAMgCIAJgBQAEgBAAgCIACgFQgBgEgDgDQgDgCgFAAQgGAAgCACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAIACIAFAFQAEAEAAAFIAAAfIAAADIADABIABAAIACAAIAAAHIgDABIgCAAIgHgBIgDgEIgBgEIgFAEIgGAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFADADQACACAGAAQAEAAADgCQAEgBACgDQADgDAAgEIAAgJIgDAAg");
	this.shape_4.setTransform(219.9,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003300").s().p("AAAAjQgCgCgBgDIgBgFIAAglIgIAAIAAgIIAIAAIAAgQIAIAAIAAAQIAJAAIAAAIIgJAAIAAAkIABADIACABIADAAIADAAIAAAIIgEABIgEAAQgEAAgBgCg");
	this.shape_5.setTransform(215.2,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003300").s().p("AgNAdIAAg3IAKAAIAAAJQADgFACgDQAEgDAFAAIACAAIABAAIAAAKIgEAAQgFAAgDACQgCACgBAEQgCADAAAFIAAAfg");
	this.shape_6.setTransform(212.1,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIABgGQAAgDACgDQACgCAFgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgCgDQgEgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAFgCAHAAIAEAAIAHACIAHAFQACAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgEAAIgGgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAIAAIgFABIgHACIgFABIgFACQgCACAAAEQAAAFACADQADACAFAAQAGAAABgCQAFgBACgDQADgDgBgEIAAgJIgCAAg");
	this.shape_7.setTransform(207,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003300").s().p("AgEAcIgVg3IALAAIAOAsIAQgsIAKAAIgWA3g");
	this.shape_8.setTransform(201.1,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003300").s().p("AAMAnIgRgdIgIAIIAAAVIgKAAIAAhOIAKAAIAAAuIAXgXIANAAIgXATIAYAkg");
	this.shape_9.setTransform(195.8,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003300").s().p("AgLAlQgFgDgDgFQgDgEgBgGIgBgLQAAgIACgFQAEgGAEgEQAGgEAIAAQACAAAEACIAFADIAEAFIAAgeIAKAAIAABOIgJAAIAAgIIgGAGIgFADIgFAAQgGAAgFgDgAgHgIQgDACgCAEIgCAFIAAAGQAAAHABAFQADAFADADQAEADADAAIAHgCQADgBACgFQADgEAAgIIAAgIIgCgGQgBgDgEgDQgDgCgFAAQgEAAgDACg");
	this.shape_10.setTransform(189.5,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIABgGQAAgDACgDQACgCAFgBIAMgCIAJgBQAEgBABgCIAAgFQAAgEgCgDQgEgCgFAAQgGAAgCACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAHACIAHAFQACAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgEAAIgGgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAJAAIgGABIgHACIgFABIgFACQgCACAAAEQAAAFACADQADACAFAAQAFAAACgCQAEgBADgDQADgDgBgEIAAgJIgBAAg");
	this.shape_11.setTransform(183.5,9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003300").s().p("AgLAcQgFgCgCgDQgDgDgBgEIgBgGIAKAAIABAFQABADADACQADACAGAAIAGgBQADgBABgCQACgCAAgDIgBgEIgFgDIgJgDQgJgCgFgBQgFgEAAgGQAAgHAEgEQACgEAGgCQAEgCAFAAQAHAAAEACQAFADACADQADADAAADIAAAEIgJAAIgBgEQAAgCgDgCQgEgCgEAAIgEABIgFACQgCACAAAEIABADIAFADIAHADIAOADQAEABACADQABADAAAEQAAAGgDAEQgDAFgFACQgFACgGAAQgHAAgFgCg");
	this.shape_12.setTransform(177.6,9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003300").s().p("AgEAcIAAgMIAJAAIAAAMgAgEgPIAAgMIAJAAIAAAMg");
	this.shape_13.setTransform(170.1,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003300").s().p("AgNAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAIAAAGAEQAFAEADAIQADAIAAAIIgpAAQAAAJAFAFQAEAFAGAAQAFAAADgCQADgCADgDIABgFIAKAAQgBAFgDAFQgDAEgFADQgFADgIAAQgIAAgFgDgAAQgDIgCgIQgBgEgEgDQgEgCgFAAQgDAAgEACQgDADgDAEQgCAEAAAEIAfAAIAAAAg");
	this.shape_14.setTransform(165.6,9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003300").s().p("AgDAcIAAgvIgUAAIAAgIIAuAAIAAAIIgTAAIAAAvg");
	this.shape_15.setTransform(160,9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003300").s().p("AAOAnIAAgpIgaApIgLAAIAAg3IAKAAIAAApIAagpIALAAIAAA3gAgGgZQgEgCgCgCIgCgFIAAgFIAFAAQABAEACADQACACAFAAQADAAACgBIAEgDIACgFIAFAAIgBAFIgCAEQgBAEgDABQgEACgFAAQgEAAgDgCg");
	this.shape_16.setTransform(154.4,8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDADgDQABgCAFgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgDgDQgDgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAIACIAFAFQADAEABAFIAAAfIAAADIADABIABAAIACAAIAAAHIgCABIgDAAIgHgBIgDgEIgBgEIgFAEIgGAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFADADQACACAFAAQAGAAABgCQAEgBADgDQACgDAAgEIAAgJIgCAAg");
	this.shape_17.setTransform(148.3,9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003300").s().p("AgLAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAHAAAFADQAFADACAFQACAFAAAFIgJAAQgBgGgDgDQgEgDgGAAQgEAAgDADQgEADgBAFQgCAFAAAEIABAHQAAAEACAEQACADADACQADACADAAQAFAAAEgEQAEgDABgHIAJAAIgBAIIgEAHQgDADgFACQgEACgGAAQgGAAgGgDg");
	this.shape_18.setTransform(142.4,9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDADgDQABgCAFgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgDgDQgDgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAIACIAFAFQADAEABAFIAAAfIAAADIADABIABAAIACAAIAAAHIgDABIgCAAIgHgBIgDgEIgBgEIgFAEIgGAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFADADQACACAFAAQAGAAABgCQAEgBADgDQACgDAAgEIAAgJIgCAAg");
	this.shape_19.setTransform(133.4,9.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003300").s().p("AANAcIAAgaIgZAAIAAAaIgKAAIAAg3IAKAAIAAAWIAZAAIAAgWIAKAAIAAA3g");
	this.shape_20.setTransform(127.2,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003300").s().p("AANAcIAAgYIgMAAIgMAYIgLAAIAOgYIgGgDQgCgBgDgCQgCgEAAgEQAAgJAGgFQAFgDAKAAIAXAAIAAA3gAgIgRQgDACAAAFQAAAEADACQADACAFABIANAAIAAgSIgNAAQgFgBgDADg");
	this.shape_21.setTransform(118.1,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003300").s().p("AAOAcIAAgpIgbApIgKAAIAAg3IAKAAIAAApIAagpIALAAIAAA3g");
	this.shape_22.setTransform(112.2,9.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003300").s().p("AARAlIAAgRIgqAAIAAg4IAKAAIAAAwIAZAAIAAgwIAKAAIAAAwIAGAAIAAAZg");
	this.shape_23.setTransform(106.1,10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDADgDQACgCAEgBIAMgCIAJgBQAEgBAAgCIACgFQgBgEgDgDQgDgCgFAAQgGAAgCACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAIACIAFAFQAEAEAAAFIAAAfIAAADIADABIABAAIACAAIAAAHIgDABIgCAAIgHgBIgDgEIgBgEIgFAEIgGAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFADADQACACAGAAQAEAAADgCQAEgBACgDQADgDAAgEIAAgJIgDAAg");
	this.shape_24.setTransform(99.8,9.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003300").s().p("AgYApIAAhPIAKAAIAAAIIADgEQACgDAEgCQADgBADAAQAHABAGADQAFAEADAHQADAGAAAIIgBALQgBAEgDAFQgDAEgFAEQgFACgHAAQgEAAgEgCQgEgCgCgEIAAAegAgHgdQgDADgCADIgBAHIgBAHQAAAGABADQACAFAEADQADADAEAAIAGgBQAEgCACgFQADgDAAgGIgBgIIgCgJQgBgDgDgDQgDgCgFAAQgEAAgDACg");
	this.shape_25.setTransform(93.7,10.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDACgDQADgCAEgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgDgDQgDgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAHACIAGAFQADAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgDAAIgHgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFACADQADACAFAAQAGAAABgCQAEgBADgDQACgDAAgEIAAgJIgCAAg");
	this.shape_26.setTransform(87.4,9.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003300").s().p("AgXAdIgDgBIAAgIIACAAIADAAIAEAAQACgCAAgEIABgNIAAgdIAoAAIAAA4IgJAAIAAgwIgVAAIAAAYQAAAOgFAFQgDAGgHAAIgEAAg");
	this.shape_27.setTransform(80.9,9.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003300").s().p("AAMAcIgRgcIgIAHIAAAVIgKAAIAAg3IAKAAIAAAZIAXgZIANAAIgXAVIAYAig");
	this.shape_28.setTransform(75.5,9.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003300").s().p("AgNAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAIAAAGAEQAFAEADAIQADAIAAAIIgpAAQAAAJAFAFQAEAFAGAAQAFAAADgCQAEgCACgDIABgFIAKAAQgBAFgCAFQgDAEgGADQgGADgHAAQgIAAgFgDgAAQgDIgCgIQgCgEgDgDQgEgCgFAAQgDAAgEACQgDADgCAEQgDAEAAAEIAfAAIAAAAg");
	this.shape_29.setTransform(69.4,9.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003300").s().p("AAVAlIAAgRIgpAAIAAARIgJAAIAAgZIAHAAQAEgHABgHIABgQIAAgSIAnAAIAAAwIAHAAIAAAZgAgGgSIgBARQgCAGgDAHIAZAAIAAgoIgTAAg");
	this.shape_30.setTransform(63.2,10.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003300").s().p("AANAcIAAgYIgMAAIgMAYIgLAAIAOgYIgFgDQgDgBgDgCQgCgEAAgEQAAgJAGgFQAFgDAKAAIAXAAIAAA3gAgJgRQgCACAAAFQAAAEACACQAEACAFABIANAAIAAgSIgNAAQgFgBgEADg");
	this.shape_31.setTransform(54,9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDACgDQADgCAEgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgDgDQgDgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAHACIAGAFQADAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgDAAIgHgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFACADQADACAFAAQAGAAABgCQAEgBADgDQACgDAAgEIAAgJIgCAAg");
	this.shape_32.setTransform(48.3,9.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003300").s().p("AANAcIAAgaIgZAAIAAAaIgKAAIAAg3IAKAAIAAAWIAZAAIAAgWIAKAAIAAA3g");
	this.shape_33.setTransform(42.1,9.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003300").s().p("AgDAcIAAgvIgUAAIAAgIIAvAAIAAAIIgTAAIAAAvg");
	this.shape_34.setTransform(36.5,9.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003300").s().p("AAMAcIgRgcIgIAHIAAAVIgKAAIAAg3IAKAAIAAAZIAXgZIANAAIgXAVIAYAig");
	this.shape_35.setTransform(31.5,9.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003300").s().p("AgNAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAIAAAGAEQAFAEADAIQADAIAAAIIgpAAQABAJAEAFQAEAFAGAAQAFAAADgCQAEgCACgDIABgFIAKAAQgBAFgCAFQgEAEgFADQgGADgHAAQgHAAgGgDgAAQgDIgCgIQgCgEgDgDQgDgCgGAAQgDAAgEACQgDADgCAEQgCAEgBAEIAfAAIAAAAg");
	this.shape_36.setTransform(25.4,9.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003300").s().p("AgKAcQgGgDgDgEQgDgFgCgFQgCgGABgFQgBgEACgFQACgGADgEQADgFAGgCQAEgDAGAAQAGAAAFADQAFACAEAFQADAEACAGQACAFAAAEQAAAFgCAGQgCAFgDAFQgEAEgFADQgFACgGAAQgGAAgEgCgAgHgSQgEACgCAEIgCAHIgBAFIABAGIACAIQACADAEADQADACAEAAQAEAAAEgCQAEgDABgDQACgEABgEIABgGIgBgFIgDgHQgBgEgEgCQgEgDgEAAQgEAAgDADg");
	this.shape_37.setTransform(19.3,9.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003300").s().p("AgYApIAAhPIAKAAIAAAIIADgEQACgDAEgCQADgBADAAQAHABAGADQAFAEADAHQADAGAAAIIgBALQgBAEgDAFQgDAEgFAEQgFACgHAAQgEAAgEgCQgEgCgCgEIAAAegAgHgdQgDADgCADIgCAHIAAAHQAAAGABADQACAFAEADQADADAEAAIAGgBQAEgCACgFQADgDAAgGIgBgIIgCgJQgBgDgDgDQgDgCgFAAQgEAAgDACg");
	this.shape_38.setTransform(13.2,10.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003300").s().p("AAUAnIAAhEIgnAAIAABEIgLAAIAAhOIA9AAIAABOg");
	this.shape_39.setTransform(6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240.4,16.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AACAIIAMgIIgMgIIAAgJIARANIAAAJIgRANgAgTAIIAMgIIgMgIIAAgJIASANIAAAJIgSANg");
	this.shape.setTransform(205.9,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AAXAcIAAg3IAJAAIAAA3gAgfAcIAAg3IAKAAIAAAWIAOAAQAHABADACQAFACACACQADAFAAAEQAAAGgDADQgCAEgFACQgDACgHAAgAgVAUIAOAAQAGAAABgCQADgCAAgFQAAgEgDgCQgBgDgGAAIgOAAg");
	this.shape_1.setTransform(198.7,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003300").s().p("AgXAdIgDgBIAAgIIACAAIADAAIAEAAQACgCAAgEIABgNIAAgdIAoAAIAAA4IgJAAIAAgwIgVAAIAAAYQgBAOgEAFQgEAGgGAAIgEAAg");
	this.shape_2.setTransform(191.4,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDACgDQADgCAEgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgCgDQgEgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAHACIAGAFQADAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgDAAIgHgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFACADQADACAFAAQAGAAABgCQAEgBADgDQACgDAAgEIAAgJIgCAAg");
	this.shape_3.setTransform(185.5,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003300").s().p("AgDAcIAAgvIgUAAIAAgIIAuAAIAAAIIgTAAIAAAvg");
	this.shape_4.setTransform(179.8,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003300").s().p("AgYApIAAhPIAKAAIAAAIIADgEQACgDADgCQAEgBADAAQAHABAGADQAGAEACAHQADAGAAAIIgBALQgCAEgDAFQgCAEgFAEQgFACgHAAQgEAAgEgCQgEgCgCgEIAAAegAgHgdQgDADgCADIgCAHIAAAHQAAAGABADQADAFADADQADADAEAAIAHgBQADgCACgFQADgDAAgGIgBgIIgCgJQgBgDgDgDQgDgCgFAAQgEAAgDACg");
	this.shape_5.setTransform(174.4,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDADgDQACgCAEgBIAMgCIAJgBQAEgBAAgCIACgFQgBgEgDgDQgDgCgFAAQgGAAgCACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAIACIAFAFQAEAEAAAFIAAAfIAAADIADABIABAAIACAAIAAAHIgDABIgCAAIgHgBIgDgEIgBgEIgFAEIgGAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFADADQACACAGAAQAEAAADgCQAEgBACgDQADgDAAgEIAAgJIgDAAg");
	this.shape_6.setTransform(168.2,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003300").s().p("AgXAcIAAg3IAZAAQAGAAAEABQAFACACAEQABADABAEQgBADgBADQgBADgDACIgEACIAGAAIAFAFQACADAAAFQAAAHgFAFQgGADgLAAgAgNAUIAPAAQAGAAADgCQADgCAAgFQAAgEgDgCQgEgDgFAAIgPAAgAgNgDIANAAQAGgBACgCQADgCAAgEQAAgEgCgBQgEgCgFAAIgNAAg");
	this.shape_7.setTransform(162.2,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003300").s().p("AAMAcIgRgcIgIAHIAAAVIgKAAIAAg3IAKAAIAAAZIAXgZIANAAIgXAVIAYAig");
	this.shape_8.setTransform(156.5,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003300").s().p("AgNAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAIAAAFAEQAHAEACAIQADAIAAAIIgoAAQAAAJADAFQAFAFAHAAQAEAAADgCQADgCACgDIACgFIAKAAQgBAFgDAFQgDAEgFADQgGADgHAAQgIAAgFgDgAAQgDIgCgIQgCgEgDgDQgEgCgFAAQgDAAgDACQgFADgCAEQgBAEAAAEIAeAAIAAAAg");
	this.shape_9.setTransform(147.3,9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003300").s().p("AAXAcIAAg3IAJAAIAAA3gAgfAcIAAg3IAKAAIAAAWIAOAAQAHABADACQAFACACACQADAFAAAEQAAAGgDADQgCAEgFACQgDACgHAAgAgVAUIAOAAQAGAAABgCQADgCAAgFQAAgEgDgCQgBgDgGAAIgOAAg");
	this.shape_10.setTransform(140.2,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003300").s().p("AgXAcIAAg3IAYAAQAHAAAEABQAEACACAEQACADABAEQAAADgCADIgDAFIgFACIAGAAIAFAFQACADAAAFQAAAHgGAFQgFADgKAAgAgNAUIAQAAQAFAAADgCQADgCAAgFQAAgEgDgCQgDgDgHAAIgOAAgAgNgDIANAAQAFgBADgCQADgCAAgEQAAgEgDgBQgCgCgGAAIgNAAg");
	this.shape_11.setTransform(133.4,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003300").s().p("AgLAcQgFgDgDgEQgDgFgCgFIgBgLQgBgEACgFQACgGADgEQADgFAFgCQAFgDAGAAQAGAAAFADQAFACAEAFQADAEACAGQACAFAAAEQAAAFgCAGQgCAFgDAFQgEAEgFADQgFACgGAAQgGAAgFgCgAgHgSQgEACgCAEIgCAHIAAAFIAAAGIACAIQACADAEADQADACAEAAQAEAAAEgCQADgDACgDQACgEABgEIABgGIgBgFIgDgHQgCgEgDgCQgEgDgEAAQgEAAgDADg");
	this.shape_12.setTransform(127.2,9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003300").s().p("AAVAlIAAgRIgpAAIAAARIgJAAIAAgZIAHAAQAEgHABgHIABgQIAAgSIAnAAIAAAwIAHAAIAAAZgAgGgSIgBARQgCAGgDAHIAZAAIAAgoIgTAAg");
	this.shape_13.setTransform(120.9,10.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDACgDQACgCAFgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgCgDQgEgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAFgCAHAAIAEAAIAHACIAGAFQADAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgEAAIgGgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAJAAIgGABIgHACIgFABIgFACQgCACAAAEQAAAFACADQADACAFAAQAGAAABgCQAFgBACgDQADgDgBgEIAAgJIgBAAg");
	this.shape_14.setTransform(114.8,9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003300").s().p("AgLAnQgHgCgFgFQgFgFgDgJQgDgIAAgKQAAgLAFgKQAEgJAIgFQAJgFAJgBQALAAAHAFQAHADAEAGQADAGABAGIgKAAQgCgGgEgEQgDgDgFgCIgJgBQgFAAgGAEQgGADgDAHQgEAIAAAJQAAAJADAHQACAIAGAEQAGAEAIAAIAIgCQAFgBAEgFQAEgFABgJIALAAQgBAJgEAGQgDAGgFADQgEADgEACQgFACgDAAIgGABQgFgBgGgCg");
	this.shape_15.setTransform(107.6,8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003300").s().p("AACAFIAAgJIARgNIAAAJIgLAIIALAIIAAAKgAgSAFIAAgJIARgNIAAAJIgMAIIAMAIIAAAKg");
	this.shape_16.setTransform(100.5,9.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003300").s().p("AgRAlQgIgDgEgHQgEgGgCgIQgCgHAAgGQAAgFACgIQACgGAEgHQAEgGAIgEQAHgFAKAAQALAAAHAFQAIAEAEAGQAFAHABAGQACAIAAAFQAAAGgCAHQgBAIgFAGQgEAHgIADQgHAEgLABQgKgBgHgEgAgNgaQgHADgDAIQgDAHAAAIQAAAJADAHQADAIAHAEQAGAEAHAAQAIAAAGgEQAHgFADgGQADgIAAgJQAAgIgDgHQgDgIgHgDQgGgFgIAAQgHAAgGAFg");
	this.shape_17.setTransform(89.9,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003300").s().p("AAYAnIgIgXIgfAAIgIAXIgLAAIAehOIALAAIAcBOgAALAHIgLghIAAAAIgLAhIAWAAg");
	this.shape_18.setTransform(81.8,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003300").s().p("AgRAlQgIgDgEgHQgEgGgCgIQgCgHAAgGQAAgFACgIQACgGAEgHQAEgGAIgEQAHgFAKAAQALAAAHAFQAIAEAEAGQAFAHABAGQACAIAAAFQAAAGgCAHQgBAIgFAGQgEAHgIADQgHAEgLABQgKgBgHgEgAgNgaQgHADgDAIQgDAHAAAIQAAAJADAHQADAIAHAEQAGAEAHAAQAIAAAGgEQAHgFADgGQADgIAAgJQAAgIgDgHQgDgIgHgDQgGgFgIAAQgHAAgGAFg");
	this.shape_19.setTransform(73.7,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003300").s().p("AAMAcIgRgcIgIAHIAAAVIgKAAIAAg3IAKAAIAAAZIAXgZIANAAIgXAVIAYAig");
	this.shape_20.setTransform(63.8,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003300").s().p("AAOAcIAAgpIgbApIgKAAIAAg3IAKAAIAAApIAagpIALAAIAAA3g");
	this.shape_21.setTransform(57.5,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003300").s().p("AAhAlIAAgRIhKAAIAAg4IAKAAIAAAwIAYAAIAAgwIAIAAIAAAwIAZAAIAAgwIAKAAIAAAwIAGAAIAAAZg");
	this.shape_22.setTransform(49.9,10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003300").s().p("AAOAnIAAgpIgbApIgKAAIAAg3IAKAAIAAApIAagpIALAAIAAA3gAgGgZQgEgCgCgCIgCgFIgBgFIAGAAQAAAEADADQADACADAAQAEAAADgBIADgDIACgFIAFAAIAAAFIgCAEQgDAEgCABQgEACgGAAQgDAAgDgCg");
	this.shape_23.setTransform(41.8,8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003300").s().p("AgLAcQgEgDgEgEQgEgFgBgFIgCgLQAAgEACgFQABgGAEgEQAEgFAEgCQAFgDAGAAQAGAAAGADQAEACAEAFQADAEABAGQACAFAAAEQAAAFgCAGQgBAFgDAFQgEAEgEADQgGACgGAAQgGAAgFgCgAgHgSQgDACgCAEIgDAHIAAAFIAAAGIADAIQACADADADQADACAEAAQAFAAADgCQADgDACgDQACgEAAgEIABgGIgBgFIgCgHQgCgEgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_24.setTransform(35.5,9.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003300").s().p("AgYApIAAhPIAJAAIAAAIIAEgEQACgDADgCQAEgBADAAQAHABAGADQAGAEACAHQADAGAAAIIgBALQgBAEgEAFQgCAEgFAEQgFACgHAAQgEAAgEgCQgEgCgCgEIAAAegAgHgdQgDADgCADIgBAHIgBAHQAAAGACADQACAFACADQAEADAEAAIAGgBQAEgCADgFQACgDAAgGIAAgIIgCgJQgBgDgEgDQgDgCgFAAQgEAAgDACg");
	this.shape_25.setTransform(29.5,10.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003300").s().p("AgDAcIAAgvIgUAAIAAgIIAuAAIAAAIIgTAAIAAAvg");
	this.shape_26.setTransform(23.7,9.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003300").s().p("AgLAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAHAAAFADQAFADACAFQACAFAAAFIgJAAQgBgGgDgDQgEgDgGAAQgEAAgDADQgEADgBAFQgCAFAAAEIABAHQAAAEACAEQACADADACQADACADAAQAFAAAEgEQAEgDABgHIAJAAIgBAIIgEAHQgDADgFACQgEACgGAAQgGAAgGgDg");
	this.shape_27.setTransform(18.5,9.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDACgDQACgCAFgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgCgDQgEgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAFgCAHAAIAEAAIAHACIAGAFQADAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgEAAIgGgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAJAAIgGABIgHACIgFABIgFACQgCACAAAEQAAAFACADQADACAFAAQAGAAABgCQAFgBACgDQADgDgBgEIAAgJIgBAAg");
	this.shape_28.setTransform(12.6,9.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003300").s().p("AgPAnQgHgCgDgEQgEgEgBgFQgBgFAAgGIAKAAQAAAIADAEQADAEAFABQAFACAFAAIAHgBIAGgCQAEgCACgCQACgDAAgEQAAgGgDgDQgDgEgEgCQgFgBgFAAIgHAAIAAgHIAGAAQADABAEgCQAFgCADgCQACgDAAgEQAAgFgBgDIgFgDIgGgDIgFAAIgIABQgFACgDADQgDAEAAAGIgKAAQgBgDACgFQABgEAEgEQADgEAGgCQAHgEAHAAQAIAAAHAEQAGACAEAFQAEAFAAAHQgBAFgCAEQgCADgEACIgGADQAFABAEABQAEACADAFQACAEAAAGQAAAGgDAFQgDAFgFACIgKAEIgLACQgJAAgGgDg");
	this.shape_29.setTransform(5.7,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.2,16.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AgCAaQgFgEgDgGQgDgHgBgHIgLAAIAAAbIgKAAIAAg4IAKAAIAAAXIALAAQACgHADgFQACgGAGgEQADgDAIAAQAHAAAFADQAFACADAFQADAEACAGQABAFAAAEIgBALQgCAFgDAFQgDAEgFADQgFACgHAAQgIAAgEgEgAACgSIgDAGIgCAHIgBAFIABAGIACAIQABADACACQADADAFAAQAFAAADgDQAEgCACgDIACgIIAAgGIAAgFIgDgHQgCgEgDgCQgDgDgFAAQgFAAgDADg");
	this.shape.setTransform(270.5,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AgWAdIAAg5IAKAAIAAAYIANAAQAGAAAFACQAFACADACQADAFgBAEQABAFgDAEQgCAEgFACQgFACgHABgAgMAUIANAAQAGAAADgCQADgCgBgFQAAgFgCgCQgDgCgGAAIgNAAg");
	this.shape_1.setTransform(263.4,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003300").s().p("AgDAdIAAgxIgUAAIAAgIIAvAAIAAAIIgTAAIAAAxg");
	this.shape_2.setTransform(257.9,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("AgLAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAHAAAFADQAFADACAFQACAFAAAFIgJAAQgBgGgDgDQgEgDgGAAQgEAAgDADQgEADgBAFQgCAFAAAEIABAHQAAAEACAEQACADADACQADACADAAQAFAAAEgEQAEgDABgHIAJAAIgBAIIgEAHQgDADgFACQgEACgGAAQgGAAgGgDg");
	this.shape_3.setTransform(252.7,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003300").s().p("AgKAcQgFgDgEgEQgDgFgCgFIgCgLQABgEABgFQACgGADgEQAEgFAFgCQAFgDAFAAQAHAAAEADQAGACADAFQADAEACAGQABAFAAAEQAAAFgBAGQgCAFgDAFQgDAEgGADQgEACgHAAQgFAAgFgCgAgHgSQgEACgBAEIgDAHIgBAFIABAGIADAIQABADAEADQADACAEAAQAEAAAEgCQAEgDABgDQACgEABgEIAAgGIAAgFIgDgHQgBgEgEgCQgEgDgEAAQgEAAgDADg");
	this.shape_4.setTransform(246.7,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003300").s().p("AAVAdIAAghIABgFIAAgFIAAgCIgBAAIgSAtIgFAAIgSgtIgBAAIAAACIAAAFIAAAFIAAAhIgJAAIAAg5IAOAAIAQAsIASgsIANAAIAAA5g");
	this.shape_5.setTransform(239.7,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003300").s().p("AAOAdIAAgqIgaAqIgLAAIAAg5IAKAAIAAAqIAagqIALAAIAAA5g");
	this.shape_6.setTransform(232.7,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003300").s().p("AAbAdIgSgbIgFAGIAAAVIgHAAIAAgVIgFgGIgTAbIgLAAIAXgfIgWgaIAMAAIAWAaIAAgaIAHAAIAAAaIAWgaIAMAAIgWAaIAXAfg");
	this.shape_7.setTransform(225.5,24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003300").s().p("AAOAdIAAgqIgaAqIgLAAIAAg5IAKAAIAAAqIAbgqIAKAAIAAA5g");
	this.shape_8.setTransform(218.4,24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003300").s().p("AgXAdIAAg5IAZAAQAGABAEACQAEACADADQACADAAAEQgBAEgBACIgEAEIgEACIAGABIAFAFQACADAAAFQAAAHgFAEQgGAFgKAAgAgNAUIAQAAQAFAAADgCQADgCAAgFQAAgEgDgDQgEgCgFAAIgPAAgAgNgEIANAAQAFAAADgBQADgDAAgFQAAgDgDgBQgCgDgGAAIgNAAg");
	this.shape_9.setTransform(212.4,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003300").s().p("AAVAlIAAgRIgpAAIAAARIgJAAIAAgZIAHAAQAEgIABgFIABgRIAAgSIAnAAIAAAwIAHAAIAAAZgAgGgSIgBASQgCAFgDAHIAZAAIAAgoIgTAAg");
	this.shape_10.setTransform(206,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003300").s().p("AgNAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAIAAAGAEQAFAEADAIQADAIAAAIIgpAAQAAAJAFAFQAEAFAGAAQAFAAADgCQAEgCACgDIABgFIAKAAQgBAFgCAFQgDAEgGADQgGADgHAAQgIAAgFgDgAAQgDIgCgIQgCgEgDgDQgEgCgFAAQgDAAgEACQgDADgCAEQgDAEAAAEIAfAAIAAAAg");
	this.shape_11.setTransform(199.9,24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003300").s().p("AANAdIAAgbIgZAAIAAAbIgKAAIAAg5IAKAAIAAAYIAZAAIAAgYIAKAAIAAA5g");
	this.shape_12.setTransform(193.8,24.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003300").s().p("AgLAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAHAAAFADQAFADACAFQACAFAAAFIgJAAQgBgGgDgDQgEgDgGAAQgEAAgDADQgEADgBAFQgCAFAAAEIABAHQAAAEACAEQACADADACQADACADAAQAFAAAEgEQAEgDABgHIAJAAIgBAIIgEAHQgDADgFACQgEACgGAAQgGAAgGgDg");
	this.shape_13.setTransform(184.9,24.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003300").s().p("AAMAdIgRgdIgIAGIAAAXIgKAAIAAg5IAKAAIAAAZIAXgZIANAAIgXAWIAYAjg");
	this.shape_14.setTransform(176.5,24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003300").s().p("AgLAcQgFgDgDgEQgEgFgBgFIgBgLQAAgEABgFQABgGAEgEQADgFAFgCQAGgDAFAAQAHAAAEADQAFACAEAFQADAEABAGQADAFAAAEQAAAFgDAGQgBAFgDAFQgEAEgFADQgEACgHAAQgFAAgGgCgAgHgSQgEACgCAEIgCAHIAAAFIAAAGIACAIQACADAEADQADACAEAAQAFAAADgCQADgDACgDQACgEAAgEIACgGIgCgFIgCgHQgCgEgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_15.setTransform(170.3,24.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003300").s().p("AgXAcIgDAAIAAgHIACAAIADAAIAEgCQABgBABgEIABgNIAAgdIAoAAIAAA4IgJAAIAAgwIgVAAIAAAZQAAAMgFAHQgDAFgIAAIgDgBg");
	this.shape_16.setTransform(163.8,24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003300").s().p("AgNAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAIAAAFAEQAGAEADAIQADAIAAAIIgoAAQAAAJADAFQAFAFAHAAQAEAAADgCQADgCADgDIABgFIAKAAQgBAFgCAFQgDAEgGADQgFADgIAAQgHAAgGgDgAAQgDIgCgIQgCgEgDgDQgDgCgGAAQgDAAgDACQgFADgBAEQgCAEAAAEIAeAAIAAAAg");
	this.shape_17.setTransform(157.9,24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003300").s().p("AAVAlIAAgRIgpAAIAAARIgJAAIAAgZIAHAAQAEgIABgFIABgRIAAgSIAnAAIAAAwIAHAAIAAAZgAgGgSIgBASQgCAFgDAHIAZAAIAAgoIgTAAg");
	this.shape_18.setTransform(151.7,25.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003300").s().p("AgLAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAHAAAFADQAFADACAFQACAFAAAFIgJAAQgBgGgDgDQgEgDgGAAQgEAAgDADQgEADgBAFQgCAFAAAEIABAHQAAAEACAEQACADADACQADACADAAQAFAAAEgEQAEgDABgHIAJAAIgBAIIgEAHQgDADgFACQgEACgGAAQgGAAgGgDg");
	this.shape_19.setTransform(145.8,24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003300").s().p("AgCAaQgFgEgDgGQgDgHgBgHIgLAAIAAAbIgKAAIAAg4IAKAAIAAAXIALAAQABgHAEgFQACgGAGgEQADgDAIAAQAHAAAFADQAFACADAFQADAEACAGQABAFAAAEIgBALQgCAFgDAFQgDAEgFADQgFACgHAAQgJAAgDgEgAACgSIgDAGIgCAHIgBAFIABAGIACAIQABADACACQADADAFAAQAGAAACgDQADgCADgDIACgIIAAgGIAAgFIgDgHQgCgEgDgCQgDgDgFAAQgFAAgDADg");
	this.shape_20.setTransform(135.8,24.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003300").s().p("AAOAdIAAgqIgaAqIgLAAIAAg5IAKAAIAAAqIAagqIALAAIAAA5g");
	this.shape_21.setTransform(128.3,24.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003300").s().p("AANAdIAAgbIgZAAIAAAbIgKAAIAAg5IAKAAIAAAYIAZAAIAAgYIAKAAIAAA5g");
	this.shape_22.setTransform(122.1,24.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003300").s().p("AgNAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAIAAAFAEQAGAEADAIQADAIAAAIIgoAAQAAAJADAFQAFAFAHAAQAEAAADgCQADgCACgDIACgFIAKAAQgBAFgCAFQgDAEgGADQgFADgIAAQgHAAgGgDgAAQgDIgCgIQgCgEgDgDQgDgCgGAAQgDAAgDACQgFADgBAEQgCAEAAAEIAeAAIAAAAg");
	this.shape_23.setTransform(116.1,24.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003300").s().p("AAVAlIAAgRIgpAAIAAARIgJAAIAAgZIAHAAQAEgIABgFIABgRIAAgSIAnAAIAAAwIAHAAIAAAZgAgGgSIgBASQgCAFgDAHIAZAAIAAgoIgTAAg");
	this.shape_24.setTransform(109.8,25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003300").s().p("AAbAdIgSgbIgFAGIAAAVIgHAAIAAgVIgFgGIgTAbIgLAAIAXgfIgWgaIAMAAIAWAaIAAgaIAHAAIAAAaIAWgaIAMAAIgWAaIAXAfg");
	this.shape_25.setTransform(102.7,24.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003300").s().p("AgLAcQgFgDgDgEQgDgFgCgFIgBgLQAAgEABgFQACgGADgEQADgFAFgCQAGgDAFAAQAHAAAFADQAEACAEAFQADAEABAGQADAFAAAEQAAAFgDAGQgBAFgDAFQgEAEgEADQgFACgHAAQgFAAgGgCgAgHgSQgEACgCAEIgCAHIAAAFIAAAGIACAIQACADAEADQADACAEAAQAFAAADgCQADgDACgDQACgEAAgEIACgGIgCgFIgCgHQgCgEgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_26.setTransform(95.6,24.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003300").s().p("AgXAdIAAg5IAZAAQAGABAEACQAFACACADQACADAAAEQgBAEgBACQgBACgDACIgEACIAGABIAFAFQACADAAAFQAAAHgFAEQgGAFgKAAgAgNAUIAQAAQAFAAADgCQADgCAAgFQAAgEgDgDQgEgCgFAAIgPAAgAgNgEIANAAQAFAAADgBQADgDAAgFQAAgDgCgBQgEgDgFAAIgNAAg");
	this.shape_27.setTransform(89.6,24.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003300").s().p("AgKAcQgFgDgEgEQgDgFgCgFIgCgLQABgEABgFQACgGADgEQAEgFAFgCQAFgDAFAAQAHAAAEADQAGACADAFQADAEACAGQABAFAAAEQAAAFgBAGQgCAFgDAFQgDAEgGADQgEACgHAAQgFAAgFgCgAgHgSQgEACgBAEIgDAHIgBAFIABAGIADAIQABADAEADQADACAEAAQAEAAAEgCQAEgDABgDQACgEABgEIAAgGIAAgFIgDgHQgBgEgEgCQgEgDgEAAQgEAAgDADg");
	this.shape_28.setTransform(83.4,24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003300").s().p("AgYApIAAhPIAJAAIAAAIIAEgFQACgCADgBQAEgCADAAQAIAAAFAEQAFAEADAGQADAHAAAIIgBALQgCAEgDAEQgCAGgFACQgFADgHABQgEAAgEgDQgEgCgCgEIAAAegAgHgdQgEADgBADIgCAHIAAAGQAAAHABADQACAFAEADQADADAEAAIAHgCQADgBACgEQADgEAAgHIAAgHIgDgIQAAgEgEgDQgDgCgFAAQgEAAgDACg");
	this.shape_29.setTransform(77.3,25.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003300").s().p("AANAdIAAgxIgZAAIAAAxIgKAAIAAg5IAtAAIAAA5g");
	this.shape_30.setTransform(71,24.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003300").s().p("AgLAcQgEgDgEgEQgDgFgCgFIgBgLQAAgEABgFQACgGADgEQAEgFAEgCQAGgDAFAAQAHAAAFADQAEACAEAFQADAEABAGQACAFABAEQgBAFgCAGQgBAFgDAFQgEAEgEADQgFACgHAAQgFAAgGgCgAgHgSQgDACgCAEIgDAHIAAAFIAAAGIADAIQACADADADQADACAEAAQAFAAADgCQADgDACgDQACgEAAgEIABgGIgBgFIgCgHQgCgEgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_31.setTransform(64.9,24.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003300").s().p("AgLAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAHAAAFADQAFADACAFQACAFAAAFIgJAAQgBgGgDgDQgEgDgGAAQgEAAgDADQgEADgBAFQgCAFAAAEIABAHQAAAEACAEQACADADACQADACADAAQAFAAAEgEQAEgDABgHIAJAAIgBAIIgEAHQgDADgFACQgEACgGAAQgGAAgGgDg");
	this.shape_32.setTransform(59,24.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003300").s().p("AgKAcQgGgDgDgEQgDgFgCgFIgCgLQABgEABgFQACgGADgEQADgFAGgCQAEgDAGAAQAHAAAEADQAGACADAFQADAEACAGQABAFAAAEQAAAFgBAGQgCAFgDAFQgDAEgGADQgEACgHAAQgGAAgEgCgAgHgSQgDACgDAEIgCAHIgBAFIABAGIACAIQADADADADQADACAEAAQAEAAAEgCQAEgDABgDQACgEABgEIABgGIgBgFIgDgHQgBgEgEgCQgEgDgEAAQgEAAgDADg");
	this.shape_33.setTransform(50,24.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003300").s().p("AANAdIAAgxIgZAAIAAAxIgKAAIAAg5IAtAAIAAA5g");
	this.shape_34.setTransform(43.8,24.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003300").s().p("AAOAdIAAgqIgaAqIgLAAIAAg5IAKAAIAAAqIAbgqIAKAAIAAA5g");
	this.shape_35.setTransform(34.5,24.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003300").s().p("AgSAdIAAg5IAkAAIAAAIIgaAAIAAAxg");
	this.shape_36.setTransform(29.4,24.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003300").s().p("AgSAoIgCgBIAAgJIADABIADABIAEgCIADgDIAEgJIgWg6IALAAIAOAuIAPguIALAAIgGAQIgGATIgHAQIgHAQIgCAIQgCADgDABQgDACgGAAIgCgBg");
	this.shape_37.setTransform(24,25.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003300").s().p("AgXAcIgCAAIAAgHIABAAIACAAIAFgCQABgBABgEIABgNIAAgdIApAAIAAA4IgKAAIAAgwIgVAAIAAAZQAAAMgEAHQgFAFgHAAIgDgBg");
	this.shape_38.setTransform(17.8,24.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003300").s().p("AgLAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAHAAAFADQAFADACAFQACAFAAAFIgJAAQgBgGgDgDQgEgDgGAAQgEAAgDADQgEADgBAFQgCAFAAAEIABAHQAAAEACAEQACADADACQADACADAAQAFAAAEgEQAEgDABgHIAJAAIgBAIIgEAHQgDADgFACQgEACgGAAQgGAAgGgDg");
	this.shape_39.setTransform(12.2,24.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003300").s().p("AgKAoIgEAAIgEAAIAAgJIADAAIADAAIADAAIADgDIADgFIgfg/IAMAAIAWA1IAXg1IAMAAIgeBCIgFAJQgBADgDABIgFACIgBgBg");
	this.shape_40.setTransform(5.6,23.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003300").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_41.setTransform(99.5,11.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#003300").s().p("AACAIIALgIIgLgIIAAgJIASANIAAAJIgSANgAgTAIIAMgIIgMgIIAAgJIASANIAAAJIgSANg");
	this.shape_42.setTransform(94.9,9.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003300").s().p("AgDAcIAAgvIgUAAIAAgIIAuAAIAAAIIgTAAIAAAvg");
	this.shape_43.setTransform(89.3,9.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDACgDQADgCAEgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgDgDQgDgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAGgCAGAAIAEAAIAHACIAGAFQADAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgDAAIgHgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAIAAIgEABIgHACIgGABIgFACQgCACAAAEQAAAFACADQADACAFAAQAGAAABgCQAEgBADgDQACgDAAgEIAAgJIgCAAg");
	this.shape_44.setTransform(83.8,9.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003300").s().p("AgYApIAAhPIAKAAIAAAIIADgEQACgDAEgCQADgBADAAQAIABAFADQAGAEACAHQADAGAAAIIgBALQgCAEgCAFQgDAEgFAEQgFACgHAAQgEAAgEgCQgEgCgCgEIAAAegAgHgdQgEADgBADIgBAHIgBAHQAAAGACADQABAFADADQAEADAEAAIAGgBQAEgCADgFQACgDAAgGIgBgIIgBgJQgBgDgEgDQgDgCgFAAQgEAAgDACg");
	this.shape_45.setTransform(77.7,10.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#003300").s().p("AgDAcIAAgvIgUAAIAAgIIAvAAIAAAIIgUAAIAAAvg");
	this.shape_46.setTransform(71.9,9.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#003300").s().p("AgLAbQgGgEgDgHQgDgGAAgJQAAgHADgHQADgHAGgFQAGgEAIAAQAHAAAFADQAFADACAFQACAFAAAFIgJAAQgBgGgDgDQgEgDgGAAQgEAAgDADQgEADgBAFQgCAFAAAEIABAHQAAAEACAEQACADADACQADACADAAQAFAAAEgEQAEgDABgHIAJAAIgBAIIgEAHQgDADgFACQgEACgGAAQgGAAgGgDg");
	this.shape_47.setTransform(66.7,9.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#003300").s().p("AAOAcIAAgpIgaApIgLAAIAAg3IAKAAIAAApIAagpIALAAIAAA3g");
	this.shape_48.setTransform(60.7,9.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#003300").s().p("AgSAcIAAg3IAkAAIAAAIIgaAAIAAAvg");
	this.shape_49.setTransform(55.6,9.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#003300").s().p("AgVAaQgFgFAAgHIAAgGQABgDACgDQACgCAFgBIAMgCIAJgBQAEgBAAgCIABgFQAAgEgCgDQgEgCgFAAQgFAAgDACQgDACgBACIgBAFIgJAAQAAgHADgEQADgEAFgCQAFgCAHAAIAEAAIAHACIAGAFQADAEAAAFIAAAfIABADIADABIABAAIACAAIAAAHIgCABIgEAAIgGgBIgDgEIgBgEIgEAEIgHAEQgCABgGAAQgIAAgFgEgAAIAAIgFABIgHACIgFABIgFACQgCACAAAEQAAAFACADQADACAFAAQAGAAABgCQAFgBACgDQADgDgBgEIAAgJIgCAAg");
	this.shape_50.setTransform(50,9.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#003300").s().p("AAbAnIAAgtIAAgEIABgHIAAgIIgBAAIgWBAIgJAAIgWhAIAAAIIAAAHIAAAEIAAAtIgLAAIAAhOIAQAAIAVBCIAAAAIAWhCIAQAAIAABOg");
	this.shape_51.setTransform(42.2,8.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#003300").s().p("AACAFIAAgJIASgNIAAAJIgMAIIAMAIIAAAKgAgSAFIAAgJIARgNIAAAJIgMAIIAMAIIAAAKg");
	this.shape_52.setTransform(34.5,9.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#003300").s().p("AgRAlQgIgDgEgHQgEgGgCgIQgCgHAAgGQAAgFACgIQACgGAEgHQAEgGAIgEQAHgFAKAAQALAAAHAFQAIAEAEAGQAFAHABAGQACAIAAAFQAAAGgCAHQgBAIgFAGQgEAHgIADQgHAEgLABQgKgBgHgEgAgNgaQgHADgDAIQgDAHAAAIQAAAJADAHQADAIAHAEQAGAEAHAAQAIAAAGgEQAHgFADgGQADgIAAgJQAAgIgDgHQgDgIgHgDQgGgFgIAAQgHAAgGAFg");
	this.shape_53.setTransform(23.9,8.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#003300").s().p("AgRAlQgIgDgEgHQgEgGgCgIQgCgHAAgGQAAgFACgIQACgGAEgHQAEgGAIgEQAHgFAKAAQALAAAHAFQAIAEAEAGQAFAHABAGQACAIAAAFQAAAGgCAHQgBAIgFAGQgEAHgIADQgHAEgLABQgKgBgHgEgAgNgaQgHADgDAIQgDAHAAAIQAAAJADAHQADAIAHAEQAGAEAHAAQAIAAAGgEQAHgFADgGQADgIAAgJQAAgIgDgHQgDgIgHgDQgGgFgIAAQgHAAgGAFg");
	this.shape_54.setTransform(15.1,8.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#003300").s().p("AgRAlQgIgDgEgHQgEgGgCgIQgCgHAAgGQAAgFACgIQACgGAEgHQAEgGAIgEQAHgFAKAAQALAAAHAFQAIAEAEAGQAFAHABAGQACAIAAAFQAAAGgCAHQgBAIgFAGQgEAHgIADQgHAEgLABQgKgBgHgEgAgNgaQgHADgDAIQgDAHAAAIQAAAJADAHQADAIAHAEQAGAEAHAAQAIAAAGgEQAHgFADgGQADgIAAgJQAAgIgDgHQgDgIgHgDQgGgFgIAAQgHAAgGAFg");
	this.shape_55.setTransform(6.4,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.7,31.8);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.magistr();
	this.instance.setTransform(10,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-20,68,57);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.inteko();
	this.instance.setTransform(5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-29,73,34);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvA5QgLgKAAgRIABgMQACgHAEgGQAFgFAKgDQAKgFAQgBQAPgBAHgCQAIgCACgEQACgDAAgHQAAgKgHgFQgHgEgNgBQgMAAgGAFQgGAEgDAFIgCALIgUAAQAAgPAHgKQAGgJAMgEQAMgFAPAAIAKABQAIABAIAEQAIADAGAIQAFAHABAMIAABGQAAAEABADQACABADAAIAEAAIADAAIAAAPIgFACIgGABQgJAAgFgDQgFgEgCgDIgCgKIgKAKQgGAEgIADQgHADgMAAQgSABgLgKgAATABIgKACIgSADIgMADQgGACgFADQgEAFAAAIQAAAKAFAGQAGAFAMABQAKAAAHgEQAJgEAFgHQAGgGAAgJIAAgTIgFABg");
	this.shape.setTransform(127.8,62.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBRIAAglIhaAAIAAAlIgUAAIAAg3IAOAAQAJgQACgPQADgRAAgRIAAgqIBXAAIAABrIAOAAIAAA3gAgPgnQAAATgDARQgDAOgHAPIA6AAIAAhZIgtAAg");
	this.shape_1.setTransform(114,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA5QgLgKAAgRIABgMQACgHAEgGQAFgFAKgDQAKgFAQgBQAPgBAHgCQAIgCACgEQACgDAAgHQAAgKgHgFQgHgEgNgBQgMAAgGAFQgGAEgDAFIgCALIgUAAQAAgPAHgKQAGgJAMgEQAMgFAPAAIAKABQAIABAIAEQAIADAGAIQAFAHABAMIAABGQAAAEABADQACABADAAIAEAAIADAAIAAAPIgFACIgGABQgJAAgFgDQgFgEgCgDIgCgKIgKAKQgGAEgIADQgHADgMAAQgSABgLgKgAATABIgKACIgSADIgMADQgGACgFADQgEAFAAAIQAAAKAFAGQAGAFAMABQAKAAAHgEQAJgEAFgHQAGgGAAgJIAAgTIgFABg");
	this.shape_2.setTransform(100.6,62.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA6QgNgIgHgOQgGgOgBgTQAAgSAHgPQAGgRAOgJQANgKATAAQARAAAKAIQAKAHAFAKQAFAKABALIgVAAQgCgMgHgHQgIgHgNgBQgLABgIAHQgHAHgEALQgDALAAAKIACAQQABAJAEAHQADAHAHAEQAHAFAJAAQALAAAIgIQAIgHADgPIAVAAQgBAIgDAIQgDAJgGAHQgGAHgJAFQgKAEgOAAQgQABgMgJg");
	this.shape_3.setTransform(87.8,62.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeA/IgegwIgeAwIgbAAIAthAIgqg9IAbAAIAbAsIAdgsIAbAAIgrA9IAsBAg");
	this.shape_4.setTransform(68.8,62.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfA/IAAhdIAAAAIg8BdIgXAAIAAh9IAWAAIAABdIAAAAIA8hdIAXAAIAAB9g");
	this.shape_5.setTransform(55.8,62.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbA/Igng/IgSAPIAAAwIgVAAIAAh9IAVAAIAAA4IA0g4IAbAAIgwAwIAzBNg");
	this.shape_6.setTransform(43.6,62.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA6QgNgIgHgOQgGgOgBgTQAAgSAHgPQAGgRAOgJQANgKATAAQARAAAKAIQAKAHAFAKQAFAKABALIgVAAQgCgMgHgHQgIgHgNgBQgLABgIAHQgHAHgEALQgDALAAAKIACAQQABAJAEAHQADAHAHAEQAHAFAJAAQALAAAIgIQAIgHADgPIAVAAQgBAIgDAIQgDAJgGAHQgGAHgJAFQgKAEgOAAQgQABgMgJg");
	this.shape_7.setTransform(30.8,62.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKA/IAAhrIgpAAIAAgSIBnAAIAAASIgqAAIAABrg");
	this.shape_8.setTransform(19,62.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeA6QgNgIgGgOQgHgOAAgTQAAgSAGgQQAHgQANgJQAOgKATAAQASAAAMAJQAMAKAGARQAGAQAAAUIhaAAQAAAUAJALQAJALAQAAQALAAAHgEQAHgEAEgGQAEgGAAgFIAVAAQgCAKgGAKQgGAKgMAGQgLAIgSgBQgRABgNgJgAAjgJQAAgJgEgJQgDgIgIgGQgHgFgNgBQgIABgIAFQgIAGgFAIQgEAJAAAJIBEAAIAAAAg");
	this.shape_9.setTransform(6.9,62.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuBRIAAglIhbAAIAAAlIgTAAIAAg3IAOAAQAJgQACgPQADgRAAgRIAAgqIBXAAIAABrIAOAAIAAA3gAgPgnQAAATgDARQgDAOgHAPIA6AAIAAhZIgtAAg");
	this.shape_10.setTransform(-6.7,64);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfBQQgNgHgHgNQgGgNgBgRIAWAAQABAIACAJQACAIAJAHQAHAFAPABQAQAAAJgKQAKgIABgPQAAgNgGgHQgGgHgMgCQgLgDgNAAIAAgQQALABAIgCQAKgBAGgGQAHgGAAgNQAAgGgCgGQgDgFgHgFQgHgEgLgBQgNABgHAFQgHAFgDAJQgCAIAAAJIgWAAQAAgKADgKQACgKAGgIQAGgIALgFQAKgFAQAAQAQAAAMAGQALAFAHALQAGAJAAAOQAAAKgEAIQgDAHgFAEQgFAEgFACIAAAAQANAEAHAIQAJAJgBARQABAPgHALQgGANgOAIQgNAIgUAAQgSAAgMgHg");
	this.shape_11.setTransform(-26.9,60.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfA/IAAhdIAAAAIg8BdIgXAAIAAh9IAWAAIAABdIAAAAIA8hdIAXAAIAAB9g");
	this.shape_12.setTransform(-47.3,62.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvA5QgLgLAAgQIABgNQACgGAEgGQAFgFAKgDQAKgEAQgCQAPgBAHgCQAIgBACgFQACgDAAgHQAAgKgHgFQgHgEgNAAQgMAAgGADQgGAEgDAGIgCALIgUAAQAAgPAHgJQAGgKAMgFQAMgDAPAAIAKABQAIABAIADQAIADAGAIQAFAHABAMIAABHQAAADABADQACACADAAIAEgBIADAAIAAAPIgFACIgGABQgJAAgFgEQgFgDgCgDIgCgKIgKAKQgGAEgIADQgHADgMABQgSgBgLgJgAATAAIgKADIgSADIgMACQgGACgFAEQgEAFAAAHQAAALAFAGQAGAFAMABQAKgBAHgDQAJgEAFgHQAGgGAAgJIAAgTIgFAAg");
	this.shape_13.setTransform(71.6,35.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgzBAIgHgCIAAgQIAFAAIAEAAQAGAAAEgDQADgDACgJQACgJAAgSIAAhDIBaAAIAAB9IgUAAIAAhrIgxAAIAAA4QAAAcgJAMQgIANgPAAIgIAAg");
	this.shape_14.setTransform(57.3,36);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZA8QgLgFgHgKQgHgJgEgMQgDgMAAgMQAAgLADgMQAEgMAHgKQAHgJALgFQAMgHANABQAPgBALAHQALAFAHAJQAHAKAEAMQADAMAAALQAAAMgDAMQgEAMgHAJQgHAKgLAFQgLAHgPAAQgNAAgMgHgAgRgqQgHAFgEAIQgEAHgCAJIgBANIABAOQACAJAEAHQAEAIAHAFQAHAFAKAAQALAAAHgFQAIgFAEgIQAEgHABgJIACgOIgCgNQgBgJgEgHQgEgIgIgFQgHgFgLAAQgKAAgHAFg");
	this.shape_15.setTransform(44.3,35.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAbA/Igng/IgSAPIAAAwIgWAAIAAh9IAWAAIAAA3IA1g3IAbAAIgxAwIAzBNg");
	this.shape_16.setTransform(32.3,35.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhiBXIAAitIAYAAIAACYIBAAAIAAiYIAWAAIAACYIBAAAIAAiYIAXAAIAACtg");
	this.shape_17.setTransform(13.7,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,17.5,192.8,58.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBRIAAglIhbAAIAAAlIgTAAIAAg3IAOAAQAJgQACgOQADgRAAgSIAAgqIBXAAIAABrIAOAAIAAA3gAgPgnQAAATgDARQgDAOgHAPIA6AAIAAhZIgtAAg");
	this.shape.setTransform(131.4,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBYIgFgBIAAgUIAFACIAIAAQAGABADgCQACgCAEgHIAHgTIgviAIAZAAIAgBlIAAAAIAihlIAXAAIgMAjIgPAoIgPAmIgNAjQgDALgEAGQgFAHgGACQgIADgLAAIgFgBg");
	this.shape_1.setTransform(118.5,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BaIAAivIAUAAIAAASIAIgKQAFgFAHgEQAIgDAJAAQAQAAAMAJQALAIAHAOQAGAOAAATQAAALgDAMQgCALgHAKQgFALgMAHQgKAGgQAAQgLAAgJgFQgIgFgEgIIAABBgAgRhBQgIAFgDAIQgDAIgBAHIAAAPQAAAOADAJQAEALAHAGQAIAHAKAAQAHAAAHgEQAIgEAFgJQAGgIAAgQIgBgRQgBgJgDgJQgDgIgHgFQgGgFgMgBQgKABgHAEg");
	this.shape_2.setTransform(106.1,36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdA/IAAhrIg5AAIAABrIgVAAIAAh9IBjAAIAAB9g");
	this.shape_3.setTransform(92.3,34.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfA/IAAhdIAAAAIg8BdIgXAAIAAh9IAWAAIAABdIAAAAIA8hdIAXAAIAAB9g");
	this.shape_4.setTransform(72.1,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbA/Igng/IgSAPIAAAwIgVAAIAAh9IAVAAIAAA4IA0g4IAbAAIgwAwIAzBNg");
	this.shape_5.setTransform(53.2,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BaIAAivIAUAAIAAASIAIgKQAFgFAHgEQAIgDAJAAQAQAAAMAJQALAIAHAOQAGAOAAATQAAALgDAMQgCALgHAKQgFALgMAHQgKAGgQAAQgLAAgJgFQgIgFgEgIIAABBgAgRhBQgIAFgDAIQgDAIgBAHIAAAPQAAAOADAJQAEALAHAGQAIAHAKAAQAHAAAHgEQAIgEAFgJQAGgIAAgQIAAgRQgCgJgDgJQgDgIgHgFQgGgFgMgBQgKABgHAEg");
	this.shape_6.setTransform(39.9,36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA4QgLgKAAgQIABgMQACgHAEgGQAFgFAKgDQAKgFAQgBQAPgBAHgCQAIgBACgEQACgEAAgHQAAgKgHgFQgHgEgNgBQgMAAgGAFQgGAEgDAFIgCALIgUAAQAAgPAHgKQAGgJAMgEQAMgFAPAAIAKABQAIABAIAEQAIAEAGAHQAFAHABAMIAABGQAAAFABACQACABADAAIAEAAIADgBIAAAQIgFACIgGABQgJgBgFgCQgFgEgCgDIgCgKIgKAKQgGAEgIADQgHADgMAAQgSABgLgLgAATABIgKACIgSADIgMADQgGACgFADQgEAFAAAIQAAAKAFAGQAGAFAMABQAKgBAHgDQAJgEAFgGQAGgIAAgIIAAgTIgFABg");
	this.shape_7.setTransform(26.2,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAtBXIAAiYIhZAAIAACYIgXAAIAAitICHAAIAACtg");
	this.shape_8.setTransform(10.7,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16,140.6,32.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdA/IAAg1IgbAAIgbA1IgZAAIAgg3QgHAAgGgFQgHgDgEgGQgFgIAAgLQAAgSAMgKQANgJAVAAIA0AAIAAB9gAgTgnQgHAFABAJQgBAKAHAFQAFAFAMAAIAfAAIAAgnIgfAAQgMAAgFAFg");
	this.shape.setTransform(196.2,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeA7QgNgJgGgOQgHgOAAgTQAAgSAGgQQAHgQANgJQAOgKATABQASgBAMAKQAMAJAGARQAGAQAAAUIhaAAQAAAVAJAKQAJALAQAAQALAAAHgEQAHgEAEgGQAEgGAAgFIAVAAQgCAKgGAKQgGAKgMAGQgLAIgSAAQgRAAgNgIgAAjgJQAAgJgEgJQgDgIgIgGQgHgFgNgBQgIABgIAFQgIAGgFAIQgEAJAAAJIBEAAIAAAAg");
	this.shape_1.setTransform(183.7,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BaIAAivIAUAAIAAASIAIgKQAFgFAHgEQAHgDAKAAQAQAAAMAJQAMAIAFAOQAHAOAAATQAAALgCAMQgDALgGAKQgHALgKAHQgLAGgQAAQgLAAgJgFQgIgFgEgIIAABBgAgRhBQgHAFgEAIQgDAIgBAHIAAAPQAAAOADAJQAEALAIAGQAHAHAKAAQAGAAAIgEQAIgEAGgJQAFgIAAgQIgBgRQAAgJgEgJQgDgIgGgFQgIgFgLgBQgKABgHAEg");
	this.shape_2.setTransform(170.7,39.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeA7QgNgJgGgOQgHgOAAgTQAAgSAGgQQAHgQANgJQAOgKATABQASgBAMAKQAMAJAGARQAGAQAAAUIhaAAQAAAVAJAKQAJALAQAAQALAAAHgEQAHgEAEgGQAEgGAAgFIAVAAQgCAKgGAKQgGAKgMAGQgLAIgSAAQgRAAgNgIgAAjgJQAAgJgEgJQgDgIgIgGQgHgFgNgBQgIABgIAFQgIAGgFAIQgEAJAAAJIBEAAIAAAAg");
	this.shape_3.setTransform(157,37.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BAIgFgCIAAgQIADAAIAGAAQAFAAAEgDQADgDACgJQACgJAAgTIAAhCIBbAAIAAB9IgWAAIAAhrIgwAAIAAA4QAAAcgIAMQgKANgPAAIgIAAg");
	this.shape_4.setTransform(142.9,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA5QgLgKAAgRIABgNQACgGAEgGQAFgFAKgDQAKgEAQgCQAPgBAHgCQAIgBACgFQACgDAAgHQAAgKgHgFQgHgEgNgBQgMAAgGAEQgGAFgDAFIgCALIgUAAQAAgPAHgKQAGgJAMgFQAMgDAPAAIAKAAQAIACAIADQAIADAGAIQAFAHABAMIAABGQAAAFABACQACACADAAIAEgBIADAAIAAAPIgFACIgGABQgJAAgFgEQgFgDgCgDIgCgKIgKAKQgGAEgIADQgHADgMABQgSAAgLgKgAATABIgKACIgSADIgMACQgGADgFADQgEAEAAAIQAAALAFAGQAGAFAMABQAKgBAHgDQAJgEAFgHQAGgGAAgJIAAgTIgFABg");
	this.shape_5.setTransform(130,37.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA/IAAh9IBRAAIAAASIg7AAIAABrg");
	this.shape_6.setTransform(118.8,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeA/IAAg1IgbAAIgdA1IgYAAIAfg3QgFAAgHgFQgGgDgFgGQgFgIAAgLQAAgSAMgKQAMgJAWAAIA0AAIAAB9gAgTgnQgGAFgBAJQABAKAGAFQAGAFALAAIAgAAIAAgnIggAAQgLAAgGAFg");
	this.shape_7.setTransform(99.8,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA5QgLgKAAgRIABgNQACgGAEgGQAFgFAKgDQAKgEAQgCQAPgBAHgCQAIgBACgFQACgDAAgHQAAgKgHgFQgHgEgNgBQgMAAgGAEQgGAFgDAFIgCALIgUAAQAAgPAHgKQAGgJAMgFQAMgDAPAAIAKAAQAIACAIADQAIADAGAIQAFAHABAMIAABGQAAAFABACQACACADAAIAEgBIADAAIAAAPIgFACIgGABQgJAAgFgEQgFgDgCgDIgCgKIgKAKQgGAEgIADQgHADgMABQgSAAgLgKgAATABIgKACIgSADIgMACQgGADgFADQgEAEAAAIQAAALAFAGQAGAFAMABQAKgBAHgDQAJgEAFgHQAGgGAAgJIAAgTIgFABg");
	this.shape_8.setTransform(87.3,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0A/IAAh9IA4AAQAOAAAJAFQAJAEAFAHQAEAHAAAKQAAAHgDAFQgDAGgEADQgFAEgGABQAHADAHABQAGAEAEAHQAFAGAAAMQAAAPgMAIQgMAKgXAAgAgeAtIAkAAQAMAAAHgFQAHgEAAgLQgBgJgHgFQgHgGgNAAIgiAAgAgegKIAeAAQAMAAAGgDQAGgFAAgLQAAgHgFgEQgGgEgNAAIgeAAg");
	this.shape_9.setTransform(74.2,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZA8QgLgFgHgJQgHgKgEgNQgDgLAAgMQAAgLADgMQAEgMAHgKQAHgJALgFQAMgHANABQAPgBALAHQALAFAHAJQAHAKAEAMQADAMAAALQAAAMgDALQgEANgHAKQgHAJgLAFQgLAHgPAAQgNAAgMgHgAgRgqQgHAFgEAIQgEAHgCAJIgBANIABAOQACAJAEAHQAEAIAHAFQAHAFAKAAQALAAAHgFQAIgFAEgIQAEgHABgJIACgOIgCgNQgBgJgEgHQgEgIgIgFQgHgFgLAAQgKAAgHAFg");
	this.shape_10.setTransform(60.6,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoA/IAAh9IBRAAIAAASIg7AAIAABrg");
	this.shape_11.setTransform(49.5,37.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2BaIAAivIAUAAIAAASIAIgKQAFgFAHgEQAIgDAJAAQAQAAAMAJQALAIAGAOQAHAOAAATQAAALgDAMQgCALgHAKQgGALgKAHQgLAGgQAAQgLAAgJgFQgIgFgEgIIAABBgAgRhBQgHAFgEAIQgDAIgBAHIAAAPQgBAOAEAJQAEALAHAGQAIAHAKAAQAGAAAIgEQAIgEAGgJQAFgIAAgQIgBgRQgBgJgDgJQgDgIgGgFQgIgFgLgBQgKABgHAEg");
	this.shape_12.setTransform(37.4,39.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZA8QgLgFgHgJQgHgKgEgNQgDgLAAgMQAAgLADgMQAEgMAHgKQAHgJALgFQAMgHANABQAPgBALAHQALAFAHAJQAHAKAEAMQADAMAAALQAAAMgDALQgEANgHAKQgHAJgLAFQgLAHgPAAQgNAAgMgHgAgRgqQgHAFgEAIQgEAHgCAJIgBANIABAOQACAJAEAHQAEAIAHAFQAHAFAKAAQALAAAHgFQAIgFAEgIQAEgHABgJIACgOIgCgNQgBgJgEgHQgEgIgIgFQgHgFgLAAQgKAAgHAFg");
	this.shape_13.setTransform(23.5,37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBXIAAiYIg7AAIAAgVICLAAIAAAVIg7AAIAACYg");
	this.shape_14.setTransform(9.4,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18.9,205.1,32.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,623.1,324.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#023B0D","#0F9423","#023B0D"],[0,0.478,1],-192.4,-0.1,192.5,-0.1).s().p("A+DMMIAA4XMA8HAAAIAAYXg");
	this.shape.setTransform(192.5,94.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16.8,384.9,156.2);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBXIgvhIIguBIIgdAAIA+hYIg6hVIAeAAIAqBDIAshDIAcAAIg6BVIA9BYg");
	this.shape.setTransform(89,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzBXIgRgzIhDAAIgTAzIgYAAIBBitIAZAAIA/CtgAAZAPIgZhLIAAAAIgbBLIA0AAg");
	this.shape_1.setTransform(72.9,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBXIg7hXIgbAaIAAA9IgYAAIAAitIAYAAIAABVIBShVIAhAAIhHBHIBJBmg");
	this.shape_2.setTransform(57.4,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBXIAAiLIgBAAIhWCLIgcAAIAAitIAYAAIAACNIABAAIBWiNIAbAAIAACtg");
	this.shape_3.setTransform(39.8,30.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAtBXIAAhSIhZAAIAABSIgXAAIAAitIAXAAIAABJIBZAAIAAhJIAXAAIAACtg");
	this.shape_4.setTransform(22.4,30.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBXIAAitIBLAAQAQABALAGQALAGAGAKQAFAJAAAMIgBANQgCAHgFAGQgGAGgJAFQAGACAHADQAIAEAFAIQAGAIAAAPQAAAOgHAMQgHAMgNAHQgNAHgUAAgAgqBDIAwAAQATgBAJgIQAJgJAAgOQAAgMgGgHQgGgGgJgCQgKgDgKAAIgsAAgAgqgMIAqAAQAQAAAJgGQAKgGAAgQQAAgMgIgHQgJgGgSAAIgqAAg");
	this.shape_5.setTransform(5.9,30.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBSQgRgIgKgOQgJgOgEgQQgEgQAAgOQAAgNAEgQQAEgPAJgOQAKgOARgJQARgJAWAAQAYAAAQAJQAQAJAKAOQAKAOAEAPQAEAQAAANQAAAOgEAQQgEAQgKAOQgKAOgQAIQgQAJgYAAQgWAAgRgJgAgfg8QgOAJgGAQQgIAPAAAUQAAAUAIAQQAGAQAOAJQANAJASAAQATAAANgJQAOgJAGgQQAIgQAAgUQAAgTgIgQQgGgQgOgJQgNgJgTAAQgSAAgNAJg");
	this.shape_6.setTransform(-12.1,30.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA8BXIAAhlIAAgKIAAgQIAAgSIgxCRIgVAAIgxiRIgBAAIAAASIABAQIAAAKIAABlIgXAAIAAitIAiAAIAwCSIAAAAIAyiSIAhAAIAACtg");
	this.shape_7.setTransform(-31.7,30.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA0BXIgSgzIhEAAIgSAzIgYAAIBCitIAYAAIA/CtgAAaAPIgahLIAAAAIgaBLIA0AAg");
	this.shape_8.setTransform(-49.9,30.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAvBXIgvhIIguBIIgdAAIA+hYIg6hVIAeAAIAqBDIAshDIAcAAIg6BVIA9BYg");
	this.shape_9.setTransform(-66.1,30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBXIAAitIBLAAQAQABALAGQALAGAGAKQAFAJAAAMIgBANQgCAHgFAGQgGAGgJAFQAGACAHADQAIAEAFAIQAGAIAAAPQAAAOgHAMQgHAMgNAHQgNAHgUAAgAgqBDIAwAAQATgBAJgIQAJgJAAgOQAAgMgGgHQgGgGgJgCQgKgDgKAAIgsAAgAgqgMIAqAAQAQAAAJgGQAKgGAAgQQAAgMgIgHQgJgGgSAAIgqAAg");
	this.shape_10.setTransform(-88.7,30.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhCBXIAAitIBLAAQAQABALAGQALAGAGAKQAFAJAAAMIgBANQgCAHgFAGQgGAGgJAFQAGACAHADQAIAEAFAIQAGAIAAAPQAAAOgHAMQgHAMgNAHQgNAHgUAAgAgqBDIAwAAQATgBAJgIQAJgJAAgOQAAgMgGgHQgGgGgJgCQgKgDgKAAIgsAAgAgqgMIAqAAQAQAAAJgGQAKgGAAgQQAAgMgIgHQgJgGgSAAIgqAAg");
	this.shape_11.setTransform(101.5,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnBSQgQgIgKgOQgKgOgEgQQgFgQABgOQgBgNAFgQQAEgPAKgOQAKgOAQgJQAQgJAXAAQAYAAAQAJQAQAJALAOQAJAOAEAPQAEAQAAANQAAAOgEAQQgEAQgJAOQgLAOgQAIQgQAJgYAAQgXAAgQgJgAgfg8QgNAJgIAQQgHAPAAAUQAAAUAHAQQAIAQANAJQAOAJARAAQATAAANgJQAOgJAGgQQAIgQAAgUQAAgTgIgQQgGgQgOgJQgNgJgTAAQgRAAgOAJg");
	this.shape_12.setTransform(83.5,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA8BXIAAhlIAAgKIABgQIAAgSIgyCRIgVAAIgxiRIgBAAIAAASIABAQIAAAKIAABlIgXAAIAAitIAiAAIAwCSIAAAAIAxiSIAiAAIAACtg");
	this.shape_13.setTransform(63.8,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnBSQgRgIgKgOQgJgOgEgQQgEgQAAgOQAAgNAEgQQAEgPAJgOQAKgOARgJQARgJAWAAQAYAAAQAJQAQAJAKAOQAKAOAEAPQAEAQAAANQAAAOgEAQQgEAQgKAOQgKAOgQAIQgQAJgYAAQgWAAgRgJgAgfg8QgOAJgGAQQgIAPAAAUQAAAUAIAQQAGAQAOAJQANAJASAAQATAAANgJQAOgJAGgQQAIgQAAgUQAAgTgIgQQgGgQgOgJQgNgJgTAAQgSAAgNAJg");
	this.shape_14.setTransform(44.2,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA7BpIAAglIh1AAIAAAlIgWAAIAAg6IAPAAQAIgRAEgPQAEgOABgOIABgkIAAg3IBwAAIAACXIAPAAIAAA6gAgXgtQAAAUgCAPQgBAOgEAOQgEAOgHAPIBSAAIAAiDIhAAAg");
	this.shape_15.setTransform(26,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAvBXIgvhIIguBIIgdAAIA+hYIg6hVIAeAAIAqBDIAshDIAcAAIg6BVIA9BYg");
	this.shape_16.setTransform(2.6,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABBBXIAAitIAYAAIAACtgAhYBXIAAitIAZAAIAABJIA4AAQAMAAAKAEQAKAFAHAGQAFAIAEAJQACAKAAAJQAAAOgGALQgGALgMAGQgMAHgOAAgAg/BCIAxAAQAKAAAGgDQAIgCAFgGQAEgHAAgKQgBgSgJgHQgJgIgPAAIgwAAg");
	this.shape_17.setTransform(-16.2,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAtBXIAAhSIhZAAIAABSIgYAAIAAitIAYAAIAABJIBZAAIAAhJIAYAAIAACtg");
	this.shape_18.setTransform(-35.5,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhBBXIAAitIB5AAIAAAVIhhAAIAAA0IA3AAQAOAAAKAEQAKAFAGAGQAGAIADAJQADAKAAAJQAAAOgGALQgHALgLAGQgMAHgQAAgAgpBCIAwAAQAKAAAIgDQAIgCAEgGQAFgHAAgKQgBgSgJgHQgKgIgQAAIgvAAg");
	this.shape_19.setTransform(-51.9,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghBYIgIgBIAAgTIAGAAIAIABQAEAAADgCQADgBACgDIAHgLIhEiMIAaAAIAzB1IAzh1IAZAAIhBCRQgGANgGAHQgEAHgHADQgGACgHAAIgJgBg");
	this.shape_20.setTransform(-68.4,0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BYIgIAAIgIgBIAAgUIAEABIAHAAQAJAAAFgIQAFgIACgPQACgQgBgWIAAhXIBwAAIAACtIgYAAIAAiYIhAAAIAABHQAAAZgDARQgDAQgFAKQgGAJgHAEQgHAEgIAAIgCgBg");
	this.shape_21.setTransform(-85.4,0.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAoBXIg7hXIgbAaIAAA9IgYAAIAAitIAYAAIAABVIBShVIAhAAIhHBHIBJBmg");
	this.shape_22.setTransform(-100.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaBWQgOgFgLgLQgLgLgHgSQgGgRgBgYQAAgaAKgVQAJgUATgLQASgMAXAAQAXAAAPAIQAQAIAIANQAIANACAPIgXAAQgDgPgJgIQgIgIgKgDQgKgCgJAAQgNAAgNAIQgNAHgHAQQgJAPABAXQgBATAGAQQAFAQANAKQAMAJAUAAQAIABAKgEQAKgEAJgKQAIgKAFgUIAWAAQgCATgIANQgHANgKAHQgJAIgKADQgJAEgJABIgLAAQgNAAgOgFg");
	this.shape_23.setTransform(60.9,-30.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAoBXIg7hXIgbAaIAAA9IgYAAIAAitIAYAAIAABVIBShVIAhAAIhHBHIBJBmg");
	this.shape_24.setTransform(44.8,-30.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag/BXIAAitIB9AAIAAAVIhlAAIAAA0IBdAAIAAASIhdAAIAAA9IBnAAIAAAVg");
	this.shape_25.setTransform(28.3,-30.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag4BYIgIAAIgIgBIAAgUIAEABIAHAAQAJAAAFgIQAFgIACgPQACgQgBgWIAAhXIBwAAIAACtIgYAAIAAiYIhAAAIAABHQAAAZgDARQgDAQgFAKQgGAJgHAEQgHAEgIAAIgCgBg");
	this.shape_26.setTransform(10.9,-29.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAtBXIAAiYIhZAAIAACYIgXAAIAAitICHAAIAACtg");
	this.shape_27.setTransform(-5.4,-30.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA8BXIAAhlIAAgKIABgQIAAgSIgyCRIgVAAIgxiRIgBAAIAAASIABAQIAAAKIAABlIgXAAIAAitIAiAAIAwCSIAAAAIAyiSIAhAAIAACtg");
	this.shape_28.setTransform(-24.2,-30.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgnBSQgQgIgLgOQgJgOgEgQQgEgQAAgOQAAgNAEgQQAEgPAJgOQALgOAQgJQAQgJAXAAQAYAAAQAJQAQAJAKAOQAKAOAEAPQAFAQgBANQABAOgFAQQgEAQgKAOQgKAOgQAIQgQAJgYAAQgXAAgQgJgAgfg8QgOAJgGAQQgIAPAAAUQAAAUAIAQQAGAQAOAJQANAJASAAQASAAAOgJQANgJAIgQQAHgQAAgUQAAgTgHgQQgIgQgNgJQgOgJgSAAQgSAAgNAJg");
	this.shape_29.setTransform(-43.8,-30.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAoBXIg7hXIgbAaIAAA9IgYAAIAAitIAYAAIAABVIBShVIAhAAIhHBHIBJBmg");
	this.shape_30.setTransform(-60.7,-30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-46.1,229.4,92.3);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoBKIgog9IgnA9IgYAAIA1hKIgyhJIAZAAIAkA5IAlg5IAYAAIgxBJIAzBKg");
	this.shape.setTransform(75.9,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBKIgOgsIg6AAIgPAsIgVAAIA4iTIAVAAIA2CTgAAVANIgVhAIAAAAIgWBAIArAAg");
	this.shape_1.setTransform(62.2,40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBKIgyhKIgXAWIAAA0IgUAAIAAiTIAUAAIAABIIBGhIIAbAAIg7A8IA9BXg");
	this.shape_2.setTransform(49,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnBKIAAh2IhKB2IgXAAIAAiTIAUAAIAAB4IABAAIBJh4IAXAAIAACTg");
	this.shape_3.setTransform(34,40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBKIAAhGIhLAAIAABGIgUAAIAAiTIAUAAIAAA+IBLAAIAAg+IAUAAIAACTg");
	this.shape_4.setTransform(19.1,40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BKIAAiTIBAAAQAOAAAJAFQAJAGAFAIQAFAIAAALIgCAKQgCAGgEAFQgEAGgIAEIALAEQAGADAFAHQAFAHAAANQAAAMgGAKQgGAKgLAGQgLAGgRAAgAgkA5IApAAQAQgBAIgHQAIgHAAgNQAAgKgGgFQgFgGgIgCQgIgCgIAAIgmAAgAgkgKIAkAAQANAAAIgFQAIgFABgOQAAgKgHgGQgIgFgPgBIgkAAg");
	this.shape_5.setTransform(5.1,40.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBGQgOgIgIgLQgIgMgEgOQgEgNAAgMQAAgLAEgNQAEgOAIgMQAIgLAOgIQAOgHATgBQAUABAOAHQAOAIAJALQAIAMADAOQAEANAAALQAAAMgEANQgDAOgIAMQgJALgOAIQgOAHgUABQgTgBgOgHgAgagzQgMAIgGANQgGANAAARQAAARAGANQAGAOAMAIQALAIAPAAQAQAAALgIQAMgIAGgNQAGgOAAgRQAAgQgGgOQgGgNgMgIQgLgIgQAAQgPAAgLAIg");
	this.shape_6.setTransform(-10.3,40.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAzBKIAAhWIABgIIAAgOIAAgPIgrB7IgRAAIgqh7IgBAAIAAAPIABANIAAAJIAABWIgUAAIAAiTIAdAAIApB8IAAAAIAqh8IAdAAIAACTg");
	this.shape_7.setTransform(-27,40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AArBKIgOgsIg5AAIgQAsIgUAAIA3iTIAVAAIA2CTgAAWANIgWhAIAAAAIgWBAIAsAAg");
	this.shape_8.setTransform(-42.5,40.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAoBKIgog9IgnA9IgYAAIA1hKIgyhJIAZAAIAkA5IAlg5IAYAAIgxBJIAzBKg");
	this.shape_9.setTransform(-56.3,40.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BKIAAiTIBAAAQAOAAAJAFQAJAGAFAIQAFAIAAALIgCAKQgCAGgEAFQgEAGgIAEIALAEQAGADAFAHQAFAHAAANQAAAMgGAKQgGAKgLAGQgLAGgRAAgAgkA5IApAAQAQgBAIgHQAIgHAAgNQAAgKgGgFQgFgGgIgCQgIgCgIAAIgmAAgAgkgKIAkAAQANAAAIgFQAIgFABgOQAAgKgHgGQgIgFgPgBIgkAAg");
	this.shape_10.setTransform(-75.5,40.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4BKIAAiTIBAAAQAOAAAJAFQAJAGAFAIQAFAIAAALIgCAKQgCAGgEAFQgEAGgIAEIALAEQAGADAFAHQAFAHAAANQAAAMgGAKQgGAKgLAGQgLAGgRAAgAgkA5IApAAQAQgBAIgHQAIgHAAgNQAAgKgGgFQgFgGgIgCQgIgCgIAAIgmAAgAgkgKIAkAAQANAAAIgFQAIgFABgOQAAgKgHgGQgIgFgPgBIgkAAg");
	this.shape_11.setTransform(86.5,14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBGQgOgIgIgLQgIgMgEgOQgEgNAAgMQAAgLAEgNQAEgOAIgMQAIgLAOgIQAOgHATgBQAUABAOAHQAOAIAJALQAIAMADAOQAEANAAALQAAAMgEANQgDAOgIAMQgJALgOAIQgOAHgUABQgTgBgOgHgAgagzQgMAIgGANQgGANAAARQAAARAGANQAGAOAMAIQALAIAPAAQAQAAALgIQAMgIAGgNQAGgOAAgRQAAgQgGgOQgGgNgMgIQgLgIgQAAQgPAAgLAIg");
	this.shape_12.setTransform(71.1,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAzBKIAAhWIAAgIIAAgOIAAgPIgpB7IgSAAIgqh7IAAAAIAAAPIAAANIAAAJIAABWIgTAAIAAiTIAcAAIApB8IAAAAIAqh8IAcAAIAACTg");
	this.shape_13.setTransform(54.4,14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghBGQgOgIgIgLQgIgMgEgOQgEgNAAgMQAAgLAEgNQAEgOAIgMQAIgLAOgIQAOgHATgBQAUABAOAHQAOAIAJALQAIAMADAOQAEANAAALQAAAMgEANQgDAOgIAMQgJALgOAIQgOAHgUABQgTgBgOgHgAgagzQgMAIgGANQgGANAAARQAAARAGANQAGAOAMAIQALAIAPAAQAQAAALgIQAMgIAGgNQAGgOAAgRQAAgQgGgOQgGgNgMgIQgLgIgQAAQgPAAgLAIg");
	this.shape_14.setTransform(37.7,14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyBaIAAggIhjAAIAAAgIgTAAIAAgyIANAAQAHgPADgMQADgNABgLIABgfIAAgvIBfAAIAACBIAOAAIAAAygAgUgmIgBAeQgBALgDAMQgEAMgGANIBGAAIAAhvIg3AAg");
	this.shape_15.setTransform(22.2,16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAoBKIgog9IgnA9IgYAAIA1hKIgyhJIAZAAIAkA5IAlg5IAYAAIgxBJIAzBKg");
	this.shape_16.setTransform(2.2,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA3BKIAAiTIAUAAIAACTgAhKBKIAAiTIAUAAIAAA+IAwAAQAKAAAJAEQAIAEAGAFQAFAGACAIQADAIAAAIQAAAMgGAJQgFAKgKAFQgKAGgLAAgAg2A4IArAAQAIAAAFgCQAGgCAEgGQAEgFAAgJQAAgPgIgGQgIgHgNAAIgpAAg");
	this.shape_17.setTransform(-13.8,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAmBKIAAhGIhLAAIAABGIgUAAIAAiTIAUAAIAAA+IBLAAIAAg+IAUAAIAACTg");
	this.shape_18.setTransform(-30.2,14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag3BKIAAiTIBmAAIAAASIhSAAIAAAsIAuAAQAMAAAJAEQAJAEAFAFQAFAGADAIQACAIAAAIQAAAMgFAJQgGAKgJAFQgLAGgNAAgAgjA4IApAAQAIAAAHgCQAGgCAEgGQAFgFAAgJQgBgPgIgGQgJgHgOAAIgnAAg");
	this.shape_19.setTransform(-44.2,14.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcBLIgHgBIAAgQIAFAAIAHAAQADABADgCQACgBADgDIAFgJIg5h3IAVAAIAsBkIArhkIAVAAIg3B7QgFALgFAGQgDAGgGADQgFACgGAAIgIgBg");
	this.shape_20.setTransform(-58.3,14.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2BLIgHgBIAAgRIADABIAHAAQAHAAAEgHQAEgGACgOQABgNABgTIAAhJIBeAAIAACSIgUAAIAAiAIg3AAIAAA8QAAAVgCAOQgDAOgFAIQgEAIgGADQgHADgIAAIgGAAg");
	this.shape_21.setTransform(-72.7,14.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAiBKIgyhKIgXAWIAAA0IgUAAIAAiTIAUAAIAABIIBGhIIAbAAIg7A8IA9BXg");
	this.shape_22.setTransform(-85.5,14.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWBJQgMgEgJgJQgKgKgFgPQgGgPAAgUQAAgWAIgSQAJgRAPgKQAPgJAUgBQATABANAGQANAHAHALQAIALABANIgTAAQgDgNgHgHQgHgGgJgDQgJgCgHAAQgLAAgLAHQgLAGgHANQgGANAAAUQAAAQAEAOQAFAOALAIQAKAIARAAQAGAAAJgDQAJgDAHgJQAHgJAEgRIATAAQgCARgGALQgHALgIAGQgIAGgIADQgIADgHABIgKABQgLAAgMgFg");
	this.shape_23.setTransform(51.9,-11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAiBKIgyhKIgXAWIAAA0IgUAAIAAiTIAUAAIAABIIBGhIIAbAAIg7A8IA9BXg");
	this.shape_24.setTransform(38.2,-11.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag1BKIAAiTIBqAAIAAASIhWAAIAAAsIBPAAIAAAPIhPAAIAAA0IBXAAIAAASg");
	this.shape_25.setTransform(24.1,-11.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag2BLIgHgBIAAgRIADABIAGAAQAIAAAEgHQAEgGACgOQACgNgBgTIAAhJIBfAAIAACSIgUAAIAAiAIg3AAIAAA8QAAAVgCAOQgDAOgFAIQgEAIgHADQgFADgJAAIgGAAg");
	this.shape_26.setTransform(9.4,-10.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAmBKIAAiBIhLAAIAACBIgUAAIAAiTIBzAAIAACTg");
	this.shape_27.setTransform(-4.6,-11.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAzBKIAAhWIABgIIAAgOIAAgPIgrB7IgRAAIgqh7IgBAAIAAAPIABANIAAAJIAABWIgUAAIAAiTIAdAAIApB8IAAAAIAqh8IAcAAIAACTg");
	this.shape_28.setTransform(-20.6,-11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AghBGQgOgIgIgLQgIgMgEgOQgEgNAAgMQAAgLAEgNQAEgOAIgMQAIgLAOgIQAOgHATgBQAUABAOAHQAOAIAJALQAIAMADAOQAEANAAALQAAAMgEANQgDAOgIAMQgJALgOAIQgOAHgUABQgTgBgOgHgAgagzQgMAIgGANQgGANAAARQAAARAGANQAGAOAMAIQALAIAPAAQAQAAALgIQAMgIAGgNQAGgOAAgRQAAgQgGgOQgGgNgMgIQgLgIgQAAQgPAAgLAIg");
	this.shape_29.setTransform(-37.3,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAiBKIgyhKIgXAWIAAA0IgUAAIAAiTIAUAAIAABIIBGhIIAbAAIg7A8IA9BXg");
	this.shape_30.setTransform(-51.7,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.7,-24.7,195.5,78.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(98,26,1,1,0,0,0,98,26);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-1.1,204.5,54.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(103.7,12,1,1,0,0,0,98,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,x:103.8,y:12.1},13,cjs.Ease.get(-1)).to({scaleX:0.95,scaleY:0.95,x:103.7,y:12},11,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.7,-14,196,52);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(114.5,37,1,1,0,0,0,114.5,37);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(284).to({regX:114.6,regY:37.1,scaleX:1.22,scaleY:1.22,x:147.7,y:383.4},15,cjs.Ease.get(1)).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,2,328.8,106.3);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// Символ 9
	this.instance = new lib.Символ9();
	this.instance.setTransform(0.1,14.6,1,1,0,0,0,102.6,16.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(214).to({_off:false},0).to({y:0.1,alpha:1},24,cjs.Ease.get(1)).wait(28).to({y:-14.5,alpha:0},18,cjs.Ease.get(-1)).to({_off:true},1).wait(75));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(97.6,-0.7,1,1,0,0,0,137.8,16.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(145).to({_off:false},0).to({y:-15.2,alpha:1},24,cjs.Ease.get(1)).wait(34).to({y:-29.8,alpha:0},25,cjs.Ease.get(-1)).to({_off:true},1).wait(131));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(0.1,14.6,1,1,0,0,0,70.3,16.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({y:0.1,alpha:1},24,cjs.Ease.get(1)).wait(37).to({y:-14.5,alpha:0},25,cjs.Ease.get(-1)).to({_off:true},21).wait(181));

	// КОМПЛЕКС  КЛУБНЫХ ДОМОВ  В ХАМОВНИКАХ
	this.instance_3 = new lib.Анимация3("synched",0);
	this.instance_3.setTransform(0,18.9);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Анимация4("synched",0);
	this.instance_4.setTransform(0,-14.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},23).to({state:[{t:this.instance_4}]},25).to({state:[]},1).wait(287));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:9.8,alpha:0.629},15).to({y:4.4,alpha:1},9).wait(23).to({startPosition:0},0).to({_off:true,y:-14.5,alpha:0},25,cjs.Ease.get(-1)).wait(288));

	// Слой 7
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(-0.3,13.1,1,1,0,0,0,192.5,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(284).to({y:14.6},0).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.8,-30.1,384.9,156.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_360 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(360).call(this.frame_360).wait(1));

	// Слой 8
	this.instance = new lib.Символ20();
	this.instance.setTransform(291.2,-226.8,1.271,1.271,0,0,0,98,26);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgJgEgGgKQgFgKAAgOIABgIQAAgFADgGQACgGAEgFQAEgEAHgEQAHgDAJAAQALAAAJAEQAIAEAFAKQAFAJAAANIAAAGIg1AAIAAAGIADAHIAFAFQAEACAEAAQAFAAAEgCQAEgDABgEIAWAAQgDAKgGAFQgFAHgHABQgHADgIAAQgJAAgJgEgAAQgGQgBgHgCgEQgDgDgDgCQgEgCgDABQgGAAgEAEQgEAEgBAJIAfAAIAAAAg");
	this.shape.setTransform(334.8,-214.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAmQgJgEgGgKQgFgKAAgOIABgIQAAgFADgGQACgGAEgFQAEgEAHgEQAHgDAJAAQALAAAJAEQAIAEAFAKQAFAJAAANIAAAGIg1AAIAAAGIADAHIAFAFQAEACAEAAQAFAAAEgCQAEgDABgEIAWAAQgDAKgGAFQgFAHgHABQgHADgIAAQgJAAgJgEgAAQgGQgBgHgCgEQgDgDgDgCQgEgCgDABQgGAAgEAEQgEAEgBAJIAfAAIAAAAg");
	this.shape_1.setTransform(326.1,-214.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAoIAAgiIgbAAIAAAiIgWAAIAAhPIAWAAIAAAeIAbAAIAAgeIAWAAIAABPg");
	this.shape_2.setTransform(317.2,-214.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA0QgJgFgFgKQgEgLAAgOQgBgOADgMQADgNAIgIQAIgIAOgEIAKgDIAIgCQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBIAQAAQgCAKgHAFQgHAGgMABQgHACgGADQgHADgEAGQgEAGgBAKQADgIAHgEQAHgFAHAAQAKAAAIADQAJAEAFAIQAFAHABANQgBAOgFAKQgFAJgJAFQgJAFgLAAQgLAAgJgFgAgJgBQgEABgCAGQgCAFAAAFIACALQABAFAEADQAEAEAGAAQAGAAAEgEQAEgDACgFIACgLIgCgKQgBgFgEgCQgEgDgHAAQgFAAgEADg");
	this.shape_3.setTransform(308.1,-216.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAmQgJgFgGgKQgGgJAAgOQAAgNAGgKQAGgJAJgFQAJgEAKAAQALAAAJAEQAJAFAGAJQAGAKAAANQAAAOgGAJQgGAKgJAFQgJAEgLAAQgKAAgJgEgAgLgTQgEADgCAGIgBAKIABALQACAFAEAEQAEAEAHAAQAIAAAEgEQAEgEACgFIABgLIgBgKQgCgFgEgEQgEgEgIAAQgHAAgEAEg");
	this.shape_4.setTransform(299,-214.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA5IAAhvIAVAAIAAALIAAAAIAEgGQADgDAFgCQAFgCAFAAQAJAAAHAEQAJAFAEAJQAFAKAAAOQAAAIgCAGQgCAHgFAHQgEAGgGADQgHAEgIAAQgGAAgFgCIgHgFIgDgGIgBAAIAAArgAgKgiQgEADgCAGQgBAFAAAHIAAAIIADAGQACAEAEACQADACAFAAQAFAAAEgDQAEgDACgEQACgFAAgGQAAgHgBgGQgCgFgEgEQgEgEgGAAQgGAAgEAEg");
	this.shape_5.setTransform(289.8,-213.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAzIAAgWIgxAAIAAAWIgTAAIAAgnIAJAAQAEgFACgKQACgKAAgPIAAgWIA9AAIAAA+IAKAAIAAAngAgGgXIgBASIgCAJIgFAIIAbAAIAAgtIgTAAg");
	this.shape_6.setTransform(280.2,-213.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAmQgJgFgGgKQgGgJAAgOQAAgNAGgKQAGgJAJgFQAJgEAKAAQALAAAJAEQAJAFAGAJQAGAKAAANQAAAOgGAJQgGAKgJAFQgJAEgLAAQgKAAgJgEgAgLgTQgEADgCAGIgBAKIABALQACAFAEAEQAEAEAHAAQAIAAAEgEQAEgEACgFIABgLIgBgKQgCgFgEgEQgEgEgIAAQgHAAgEAEg");
	this.shape_7.setTransform(270.8,-214.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVA2IAAhYIgpAAIAABYIgWAAIAAhrIBVAAIAABrg");
	this.shape_8.setTransform(260.6,-216.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#0F9423","#096919"],[0,1],-97.9,0,98,0).s().p("AuOEDQhEAAAAhDIAAl/QAAhDBEAAIcdAAQBEAAAABDIAAF/QAABDhEAAg");
	this.shape_9.setTransform(297.2,-216.4,1.077,1.077);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},323).to({state:[{t:this.instance}]},15).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},22).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(323).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,y:-201.3,alpha:1},15,cjs.Ease.get(1)).to({_off:true},22).wait(1));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(219.7,-129.5,1,1,0,0,0,34,28.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(320).to({_off:false},0).to({y:-116.7,alpha:1},15,cjs.Ease.get(1)).wait(26));

	// Символ 14
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(346.2,-118,1,1,0,0,0,36.5,17);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(317).to({_off:false},0).to({y:-105.2,alpha:1},15,cjs.Ease.get(1)).wait(29));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(278,29.1,0.806,0.806,0,0,0,120.3,8.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(310).to({_off:false},0).to({y:-40.9,alpha:1},15,cjs.Ease.get(1)).wait(36));

	// Символ 17
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(266.9,16,0.806,0.806,0,0,0,105.6,8.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(306).to({_off:false},0).to({y:-54,alpha:1},15,cjs.Ease.get(1)).wait(40));

	// Символ 16
	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(293.4,-1.9,0.806,0.806,0,0,0,138.4,15.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(302).to({_off:false},0).to({y:-71.9,alpha:1},15,cjs.Ease.get(1)).wait(44));

	// Слой 1
	this.instance_6 = new lib.Символ19();
	this.instance_6.setTransform(292,5.5,1,0.133,0,0,0,126,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(287).to({regX:126.1,regY:206,scaleY:1.36,x:294.1,y:-57},15,cjs.Ease.get(1)).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166,-22,252,55);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(311.5,162.3,1,1,0,0,0,311.5,162.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:53.5},299).to({regX:311.4,scaleX:0.8,scaleY:0.8,x:120.6,y:110.8},30,cjs.Ease.get(-1)).to({regX:311.5,scaleX:0.6,scaleY:0.6,x:187.7,y:69.9},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,623.1,324.5);


// stage content:



(lib.sept_kvart_300600_15sek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(150,300,1.251,1.501);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(101.6,42.1,0.622,0.622,0,0,0,114.6,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(73.1,679.8,1.252,1.252,0,0,0,234.8,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(295.4,559.3,1.263,1.263,0,0,0,114.7,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(392.6,250.4,1.672,1.672,0,0,0,311.4,162.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,279,1041.6,700.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;