(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/golova.png", id:"golova"},
		{src:"images/pasta.png", id:"pasta"},
		{src:"images/rot.png", id:"rot"},
		{src:"images/u67.png", id:"u67"},
		{src:"images/y5.png", id:"y5"}
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



(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,471,223);


(lib.pasta = function() {
	this.initialize(img.pasta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,310);


(lib.rot = function() {
	this.initialize(img.rot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,329);


(lib.u67 = function() {
	this.initialize(img.u67);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,70);


(lib.y5 = function() {
	this.initialize(img.y5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,104);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3FB34F").s().p("Ag7BJQgJgFgFgJQgHgOABgYIAEglQACgZADgMQAGgYARgCQAIgBAMAGIATALQAdAQAPAJQAtAbgBAXQAAAUggAQIgwASQgTAKgKACIgKACQgLAAgJgHg");
	this.shape.setTransform(484.3,82.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3FB34F").s().p("Ag9BNQgFgGgCgOIgBgWIgDgyQgBgXADgNQAEgVANgIQARgLAfATQAPAKAZAVIAaATQAMAMAAAOQAAALgFAIQgHAOgVAMIgjARQgUAMgMAEQgJADgHAAQgLAAgHgIg");
	this.shape_1.setTransform(445.2,78.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3FB34F").s().p("Ag9BNQgFgGgCgOIgBgWIgDgyQgBgXADgMQAEgWANgIQARgLAfATQAPAKAZAVIAaATQANAMgBAOQAAALgFAIQgHAOgVAMIgjASQgUALgMAFQgIACgHAAQgMAAgHgIg");
	this.shape_2.setTransform(411.1,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrIAQgcQAKgOARgCQAHgCAKAFQAPAGAPATIAVAhIAUAeQAKAVgMANQgFAGgOADIgWADQgdAHgUADQgSADgMAAIgGgBg");
	this.shape_3.setTransform(379.8,105.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3FB34F").s().p("AASBQIgkgHQgZgEgMgEQgXgIgBgRQAAgIAHgMIANgSIAcgqQAOgSAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAfQADARgKANQgFAHgLAFQgKAEgOAAIgOgBg");
	this.shape_4.setTransform(406.1,92.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3FB34F").s().p("AgRBJQgKAAgIgHQgNgJgKgWIgNgjQgJgXgCgNQgFgXAOgJQAHgFAOAAIAWACIAxACQAXACANAEQAUAHAHAOQAJASgXAbIgkAmIgVAXQgLAKgLAAIgGgBg");
	this.shape_5.setTransform(368.7,58.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3FB34F").s().p("AAKBLQgpgKgegKQg2gVAwgzQAlgrArgTQARgHANANQAJAIAJAUQAcA7ABAkQAAAIgBAFQgFAUgcAAQgNAAghgIg");
	this.shape_6.setTransform(545.1,481.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3FB34F").s().p("Ag7BSQgHgCgGgDQgSgKAIgbQAEgNAQgbQAUgnATgaQAgguAnA8QAfAvAGAuQAEAfgxAHQgeAFgSABIgMAAQgWAAgRgEg");
	this.shape_7.setTransform(560.1,227.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3FB34F").s().p("Ag7BSQgHgCgGgDQgSgKAIgaQADgMAQgdQAVgmATgbQAgguAnA8QAfAwAGAtQAEAegxAIQgfAFgRABIgMAAQgWAAgRgEg");
	this.shape_8.setTransform(468.8,248.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3FB34F").s().p("AgJBIQgPgGgPgTIgVghIgTgeQgKgVALgNQAFgGAOgDIAWgDQAdgHAUgDQAXgDANABQAVACAKAMQANAPgPAhQgIAQgSAbQgKAUgGAIQgKAOgRACIgEABQgFAAgIgEg");
	this.shape_9.setTransform(468.8,215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3FB34F").s().p("AAXBSQgggIgQgGQgbgKgSgOQgFgEgEgFQgNgQARgUQAIgJAbgWQAigdAZgPQAygeAMBGQAKA2gMAuQgFASgSADIgIABQgKAAgPgEg");
	this.shape_10.setTransform(437.8,229.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3FB34F").s().p("AAKBLQgqgKgdgLQg2gUAwgzQAmgrAqgTQARgHANANQAJAIAJATQANAeAGAQQAJAbABAXQAAAIgBAFQgFAUgcAAQgNAAghgIg");
	this.shape_11.setTransform(496.2,192.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3FB34F").s().p("Ag7BSQgHgCgGgDQgSgKAIgbQADgMAQgcQAWgpASgYQAggvAnA8QAfAxAGAtQAEAfgxAHQghAFgQABIgMAAQgVAAgRgEg");
	this.shape_12.setTransform(531,242.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3FB34F").s().p("Ag8BSQgHgCgFgDQgSgKAIgbQADgNAQgbQAVgnATgaQAgguAmA7QAgAwAGAuQAEAfgxAHQghAFgQABIgMAAQgVAAgSgEg");
	this.shape_13.setTransform(526.6,450.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3FB34F").s().p("Ag7BSIgNgFQgSgKAIgbQADgNARgbQAUgnATgaQAggvAnA8QAfAxAGAtQACASgPAKQgKAGgWAEQggAFgQABIgMAAQgWAAgRgEg");
	this.shape_14.setTransform(501.9,225.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3FB34F").s().p("AAXBSQgfgIgQgGQgbgKgTgOQgFgEgEgFQgNgQASgUQAHgJAbgWQAggaAbgSQAygeAMBGQAKA2gMAvQgFARgSADIgIABQgKAAgPgEg");
	this.shape_15.setTransform(327.4,222.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3FB34F").s().p("AAKBLQgqgKgcgLQg3gUAwgzQAmgrAqgTQAdgMATAtQAcA7ABAlQABAHgCAGQgFAUgcAAQgNAAghgIg");
	this.shape_16.setTransform(397.4,227.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3FB34F").s().p("Ag7BSQgHgCgGgDQgSgKAIgbQADgMAQgcQAVgmATgbQAgguAnA8QAfAwAGAtQAEAfgxAHQgfAFgSABIgLAAQgWAAgRgEg");
	this.shape_17.setTransform(414.1,252.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3FB34F").s().p("Ag7BSIgNgFQgSgLAIgaQADgLAQgeQAXgpARgXQAggvAnA8QAfAxAGAtQACASgPAKQgKAGgWAEQghAFgQABIgMAAQgVAAgRgEg");
	this.shape_18.setTransform(537.9,201.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3FB34F").s().p("Ag7BSIgNgFQgSgKAIgbQADgMARgdQAVgnASgZQAggvAnA8QAfAwAGAuQACASgPAKQgKAGgWAEQggAFgQABIgMAAQgWAAgRgEg");
	this.shape_19.setTransform(356.6,259.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3FB34F").s().p("AgqBLQgJgIgJgUQgcg7gBgkQAAgIABgGQAFgUAcABQANAAAhAHQAkAIAjANQA2AUgwA0QgmArgqASQgGACgGAAQgKAAgIgHg");
	this.shape_20.setTransform(495.1,25.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3FB34F").s().p("Ag8AvQgcg7gBglQgBgHACgGQAFgUAcAAQANAAAhAIQAqAKAcALQA2AUgvAzQglArgrATQgGADgFAAQgWAAgPgkg");
	this.shape_21.setTransform(446.4,38.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgCgSAPgKQAKgGAWgEQAggFARgBQAcgBAWAFIANAFQASALgIAaQgDALgQAeQgXApgRAXQgPAUgOAAQgUAAgWghg");
	this.shape_22.setTransform(418.8,122.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3FB34F").s().p("AguA1QgggwgGguQgEgfAxgHQAfgFASgBQAcgBAXAFQAHACAFADQASAKgIAbQgDANgQAbQgTAkgUAdQgPAUgOAAQgVAAgVghg");
	this.shape_23.setTransform(392.3,27.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3FB34F").s().p("AgWBRQgUgCgNgiIgOgwIgJgfQgDgRAKgNQAGgIAKgEQAOgGAYADIAlAHIAkAIQAXAIABARQAAAIgHAMIgNASQgRAagLAPQgOATgKAJQgMANgPAAIgDAAg");
	this.shape_24.setTransform(462.3,184.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3FB34F").s().p("AAGBJIgogfIgagTQgNgLAAgPQAAgKAFgJQAIgOAVgMIAjgRIAggQQAXgIALANQAFAGABAOIACAWIADAyQABAXgDANQgEAVgOAIQgGAEgIAAQgOAAgTgMg");
	this.shape_25.setTransform(383.6,197.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3FB34F").s().p("AgJBIQgPgGgOgTIgVghIgUgeQgKgWALgMQAGgGANgDIAWgEIAxgJQA0gIAPATQANAQgPAhQgIAQgSAbQgKAUgGAIQgKAOgQACIgGAAQgFAAgHgDg");
	this.shape_26.setTransform(463,145.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3FB34F").s().p("AgWBRQgTgCgNghIgPgxQgHgUgCgKQgDgSAKgNQAHgIAJgEQAPgGAYADIAkAIIAlAIQAWAHABARQAAAIgHAMIgNATQgOAVgOAUQgOASgKAJQgMANgPAAIgDAAg");
	this.shape_27.setTransform(419.7,198.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3FB34F").s().p("Ag7BSIgNgFQgSgLAIgaQADgMARgdQAVgnASgZQAggvAnA8QAfAwAGAuQACASgPAKQgKAGgWAEQggAFgQABIgMAAQgWAAgRgEg");
	this.shape_28.setTransform(418.8,159.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3FB34F").s().p("AARBQIgkgHQgYgEgNgEQgWgIgBgRQAAgIAHgMIAMgSQAUgdAJgNQANgSALgJQAOgOAQABQATACANAiQAIASAHAeIAJAfQADARgKANQgGAHgKAFQgKAEgOAAIgPgBg");
	this.shape_29.setTransform(453.2,112.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3FB34F").s().p("Ag9BNQgGgHgBgNIgBgWQgDgfAAgTQgBgXADgNQAEgVANgJQARgKAfATQAPAKAZAVIAaATQAMAMAAAOQAAAJgFAKQgHAOgWAMIgjARIggAQQgIADgHAAQgLAAgHgIg");
	this.shape_30.setTransform(387.2,136.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3FB34F").s().p("AhOA9QgNgPAPghIAbgrIAPgcQAKgOARgCQAIgBAJAEQAPAGAPATIAVAhIAUAeQAKAWgMAMQgFAGgOADIgWAEIgxAJQgOACgMAAQgeAAgLgOg");
	this.shape_31.setTransform(348.5,184.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3FB34F").s().p("AARBQIgkgIIglgIQgWgHgBgRQAAgIAHgMIANgTQASgbAKgOQAegqAYACQATACANAiQAIASAHAeIAJAeQADASgKANQgHAIgJAEQgKAEgOAAIgPgBg");
	this.shape_32.setTransform(348.6,133.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3FB34F").s().p("AguA0QgfgwgHgtQgEgeAxgIQAggFARgBQAdgBAWAFQAIACAEADQASAKgIAbQgDAMgQAcQgTAlgUAbQgPAVgOAAQgVAAgVgig");
	this.shape_33.setTransform(365.7,162.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3FB34F").s().p("AAYBJIgTgLQgcgRgOgKQgTgNgJgJQgPgOAAgQQABgUAhgOQASgIAegIIAegLQARgDAOAJQAIAGAEAJQAHAOgCAZIgGAkIgGAlQgHAXgRACIgBAAQgIAAgLgHg");
	this.shape_34.setTransform(525.4,83.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrIAQgcQAKgOARgCQAIgBAJAEQAPAGAPATIAVAhIAUAeQAKAWgMAMQgFAGgOADIgWAEIgxAJQgRACgMAAIgHAAg");
	this.shape_35.setTransform(355,87.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3FB34F").s().p("AguBLQgWgCgKgMQgNgPAPghIAbgsIAPgbQAKgOARgCQAIgCAJAEQAPAGAPAUIAVAhIAUAeQAKAVgMAMQgFAGgOADIgWAEIgxAKQgRADgMAAIgGgBg");
	this.shape_36.setTransform(495,157.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrIAQgcQAKgOARgCQAIgBAJAEQAPAGAPATIAVAhIAUAeQAKAWgMAMQgFAGgOADIgWADQgcAHgVADQgRACgMAAIgHAAg");
	this.shape_37.setTransform(201.6,81.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3FB34F").s().p("AAbBPQgIAAgLgJIgOgOIgoghQgRgQgIgJQgMgSADgPQAEgUAjgJQATgFAegDIAggGQARgBAMALQAIAIACAJQAFAPgGAYIgLAjIgMAkQgKAUgQAAIgCAAg");
	this.shape_38.setTransform(547.3,107.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3FB34F").s().p("AASBQIglgIIgkgIQgXgHgBgRQAAgIAHgMIANgSQANgVAPgVQAOgSAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAeQADASgKANQgFAHgLAFQgKAEgOAAIgOgBg");
	this.shape_39.setTransform(560.1,319.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgEgeAxgIQAggFARgBQAcgBAWAFIANAFQASALgIAaQgDALgQAeQgVAmgTAaQgPAUgOAAQgUAAgWghg");
	this.shape_40.setTransform(523.9,332);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQALgGAVgEQAhgFAQgBQAdgBAWAFIAMAFQASALgIAaQgDALgQAeQgSAigWAeQgPAUgOAAQgUAAgVghg");
	this.shape_41.setTransform(345.2,39.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgCgSAPgKQAKgGAWgEQAggFARgBQAcgBAWAFIANAFQASALgIAaQgDALgQAeQgXApgRAXQgPAUgOAAQgUAAgWghg");
	this.shape_42.setTransform(523.4,171.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrIAQgcQAKgOARgCQAIgCAJAEQAPAGAOAUIAVAhIAUAeQAKAVgLANQgGAGgNADIgWADQggAHgRADQgSADgLAAIgHgBg");
	this.shape_43.setTransform(526.9,418.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3FB34F").s().p("AgpBQQgHgGgEgMIgFgWQgKgggEgQQgFgXAAgMQAAgXAMgLQAOgNAiAMQAQAIAdAPIAdANQAPAKADAQQACAJgDAIQgFAPgSARIgfAXIgcAXQgLAGgJAAQgIAAgGgFg");
	this.shape_44.setTransform(560.1,173.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3FB34F").s().p("AASBQIglgHQgYgEgMgEQgXgIgBgRQAAgIAHgMIANgSQANgVAPgVQAOgSAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAeQADASgKANQgFAHgLAFQgKAEgOAAIgOgBg");
	this.shape_45.setTransform(542.5,137.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3FB34F").s().p("AguA0QgggvgGguQgEgeAxgIQAggFARgBQAdgBAWAFQAHACAFADQASAKgIAbQgDAMgQAcQgUAmgUAaQgPAVgOAAQgUAAgVgig");
	this.shape_46.setTransform(510.4,113.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrIAQgcQAKgOARgCQAIgBAJAEQAPAGAPATIAVAhIAUAeQAKAVgMANQgFAGgOADIgWADQgcAHgVADQgSACgLAAIgHAAg");
	this.shape_47.setTransform(526.5,376.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrIAQgcQAKgOARgCQAHgCAKAFQAPAGAOATIAVAhIAUAeQAKAVgLANQgGAGgNADIgWADQgdAHgUADQgSADgLAAIgHgBg");
	this.shape_48.setTransform(563.4,383.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3FB34F").s().p("AARBQIgkgHQgYgEgMgEQgXgIgBgRQAAgIAHgMIANgSQANgVAPgVQAOgSAKgJQAOgOAQABQATACANAiQAIASAHAeIAJAeQADASgKANQgGAIgKAEQgKAEgOAAIgPgBg");
	this.shape_49.setTransform(554.8,28.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3FB34F").s().p("AASBQIgkgIIglgIQgXgHgBgRQAAgIAHgMIANgTIAdgpQAegqAXACQAUACANAiQAHASAHAeIAJAeQADASgKANQgGAIgJAEQgLAEgOAAIgOgBg");
	this.shape_50.setTransform(560.8,74.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQAKgGAWgEQAhgFAQgBQAdgBAVAFIANAFQASALgIAaQgDALgQAeQgVAmgTAaQgPAUgOAAQgUAAgVghg");
	this.shape_51.setTransform(546.5,274.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3FB34F").s().p("AAKBLQgqgKgcgLQg2gUAvgzQAmgrAqgTQARgHANAMQAJAJAJATQAcA7ABAlQAAAIgBAFQgFAUgcAAQgNAAghgIg");
	this.shape_52.setTransform(294,225.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3FB34F").s().p("Ag7BSQgHgCgGgDQgSgKAIgbQAEgNAQgbQAUgnATgaQAgguAnA8QAfAvAGAuQAEAfgxAHQgeAFgSABIgMAAQgWAAgRgEg");
	this.shape_53.setTransform(233.2,238.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3FB34F").s().p("Ag8BSQgHgCgFgDQgSgKAIgbQADgNAQgbQAUgnATgaQAggvAnA8QAfAwAHAuQAEAfgxAHQghAFgQABIgMAAQgVAAgSgEg");
	this.shape_54.setTransform(297.4,254.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3FB34F").s().p("Ag7BSQgHgCgGgDQgSgKAIgbQAEgNAQgbQATgkAUgdQAgguAnA8QAfAwAGAtQAEAfgxAHQgeAFgSABIgMAAQgVAAgSgEg");
	this.shape_55.setTransform(129.4,245.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3FB34F").s().p("AgJBIQgPgGgOgTIgVghIgUgeQgKgVALgNQAGgGANgDIAWgDQAdgHAUgDQAXgDANABQAVACAKAMQANAPgPAhQgIAQgSAbIgQAcQgKAOgRACIgEAAQgGAAgHgDg");
	this.shape_56.setTransform(133.5,222.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3FB34F").s().p("Ag7BSQgHgCgGgDQgSgKAIgbQAEgNAQgbQATgkAUgdQAgguAnA8QAfAvAGAuQAEAfgxAHQgeAFgSABIgMAAQgWAAgRgEg");
	this.shape_57.setTransform(196.4,245.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3FB34F").s().p("Ag7BSIgNgFQgSgLAIgaQADgLAQgeQAXgpARgXQAggvAnA8QAfAxAGAtQACASgPAKQgKAGgWAEQggAFgQABIgMAAQgWAAgRgEg");
	this.shape_58.setTransform(253,203.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3FB34F").s().p("AgJBIQgPgGgOgTIgVghQgPgSgFgMQgKgWALgMQAGgGANgDIAWgDQAbgHAWgDQA0gIAPAUQANAPgPAhQgIAQgSAbIgQAcQgKAOgRACIgEAAQgGAAgHgDg");
	this.shape_59.setTransform(38.2,208.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3FB34F").s().p("AhVARQARg1AhgjQAUgXAkAhQAYAWANANQATAVAKATQAEAHAAAFQAEAVgZALQgLAFgiAHQgrAJgeACIgGAAQgzAAAUhAg");
	this.shape_60.setTransform(71.4,181.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3FB34F").s().p("Ag8BSIgMgFQgSgKAIgbQADgMAQgcQATgkAVgdQAggvAmA8QAgAwAGAuQACASgPAKQgLAGgVAEQghAFgQABIgMAAQgVAAgSgEg");
	this.shape_61.setTransform(55.1,247);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3FB34F").s().p("Ag8BSIgMgFQgSgKAIgaQADgMAQgdQASgiAWgeQAggvAmA8QAgAwAGAtQACASgPAKQgLAHgVADQggAFgRABIgNAAQgVAAgRgEg");
	this.shape_62.setTransform(194.5,212.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3FB34F").s().p("Ag7BSIgNgFQgSgLAIgaQADgLAQgeQAXgpARgXQAggvAnA8QAfAxAGAtQACASgPAKQgKAGgWAEQghAFgQABIgMAAQgVAAgRgEg");
	this.shape_63.setTransform(19.9,242.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3FB34F").s().p("AgqBKQgJgIgJgUQgcg7gBgkIABgNQAFgUAcAAQANAAAhAIQAqAKAcAKQA3AVgwAzQglArgrATQgGADgGAAQgKAAgIgJg");
	this.shape_64.setTransform(54.6,60.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3FB34F").s().p("AgqBKQgJgIgJgUQgOgdgGgRQgJgaAAgXQAAgHABgGQAFgUAcAAQANAAAhAIQApAKAeAKQA2AVgwAzQglArgrATQgGADgGAAQgKAAgIgJg");
	this.shape_65.setTransform(88.1,33.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgEgfAxgHQAggFARgBQAcgBAWAFQAHACAGADQASAKgIAbQgEANgQAbQgUAngTAaQgPAUgOAAQgUAAgWghg");
	this.shape_66.setTransform(57.4,11.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrQAKgUAGgIQAKgOARgCQAIgBAJAEQAPAGAOATQAGAHAQAaIAUAeQAJAWgLAMQgFAGgOADIgWAEQggAHgRACQgRACgMAAIgHAAg");
	this.shape_67.setTransform(27.3,173.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3FB34F").s().p("AASBQIglgHIgkgIQgXgIgBgRQAAgIAHgMIANgSQAOgWAOgTQAOgTAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAfQADARgKANQgFAHgLAFQgJAEgOAAIgPgBg");
	this.shape_68.setTransform(126.6,185.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3FB34F").s().p("AASBQQgJgBgcgHIgkgIQgXgHgBgRQAAgIAHgMIANgTQAOgVAOgUQAOgSAKgJQAOgOAQABQATACANAiQAIASAHAeIAJAeQADASgKANQgHAIgJAEQgKAEgOAAIgOgBg");
	this.shape_69.setTransform(23.9,133.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3FB34F").s().p("AhPA9QgMgPAPghIAagrQAKgUAGgIQAKgOAQgCQAJgBAJAEQAPAGAOATIAVAhIAUAeQAKAWgLAMQgGAGgNADIgWAEIgxAJQgOACgMAAQgeAAgMgOg");
	this.shape_70.setTransform(20.4,87.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrIAQgcQAKgOARgCQAIgBAJAEQAPAGAOATIAVAhIAUAeQAKAWgLAMQgGAGgNADIgWAEQgjAHgOACQgRACgLAAIgIAAg");
	this.shape_71.setTransform(171.4,60.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagsIAQgbQAKgOARgCQAIgCAJAEQAPAGAPAUIAVAhIAUAeQAKAVgMAMQgFAHgOADIgWADIgxAKQgRADgNAAIgGgBg");
	this.shape_72.setTransform(235.9,22.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3FB34F").s().p("AARBQIgkgHIgkgIQgXgIgBgRQAAgIAHgMIANgSQAOgWAOgTQAOgTAKgJQAOgOAQABQATACANAiQAIASAHAeIAJAfQADARgKANQgHAJgJADQgJAEgOAAIgQgBg");
	this.shape_73.setTransform(156.4,94.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3FB34F").s().p("AASBQIgkgHIglgIQgXgIgBgRQAAgIAHgMIANgSIAcgpQAOgTAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAfQADARgKANQgGAIgKAEQgJAEgOAAIgPgBg");
	this.shape_74.setTransform(249.7,49.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3FB34F").s().p("AASBQQgJgBgcgHIgkgIQgXgIgBgQQAAgIAHgMIANgTQAOgVAOgUQAOgSAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAeQADASgKANQgGAIgKAEQgKAEgOAAIgOgBg");
	this.shape_75.setTransform(206,44.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3FB34F").s().p("Ag8AvQgcg7gBglQgBgHACgGQAFgUAcAAQANAAAhAIQAqAKAcALQA3AUgwAzQgmArgqATQgGADgGAAQgVAAgPgkg");
	this.shape_76.setTransform(129.4,62);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3FB34F").s().p("Ag8AvQgcg7gBgkQgBgHACgHQAFgUAcABQANAAAhAHQAkAIAiANQA3AUgwA0QgmArgqASQgGACgGAAQgVAAgPgjg");
	this.shape_77.setTransform(168.8,25.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgSAQgKQAKgGAWgEQAggFARgBQAcgBAWAFIANAFQASALgIAaQgDAMgRAdQgVAngSAZQgPAUgOAAQgUAAgWghg");
	this.shape_78.setTransform(240.3,80.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQALgGAVgEQAhgFAQgBQAdgBAWAFQAGACAGADQASALgIAaQgDANgQAcQgVAngSAZQgPAUgOAAQgVAAgVghg");
	this.shape_79.setTransform(25.3,40.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3FB34F").s().p("AhOA9QgNgPAPghIAbgrIAPgcQAKgOARgCQAIgBAJAEQAPAGAPATIAVAhIAUAeQAKAWgMAMQgFAGgOADIgWAEIgxAJQgOACgMAAQgeAAgLgOg");
	this.shape_80.setTransform(253.3,170.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3FB34F").s().p("AgpBQQgHgFgEgOIgFgVIgOgwQgFgXAAgNQAAgVAMgLQAOgOAiAMQAQAHAdAQIAdANQAPAJADARQACAJgDAIQgFAPgSARQgGAFgZASIgcAXQgLAGgJAAQgIAAgGgFg");
	this.shape_81.setTransform(223.5,191.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3FB34F").s().p("AguA1QgggxgGgtQgEgfAxgHQAegFATgBQAcgBAWAFQAIACAEADQASAKgHAbQgEANgQAbQgUAngTAaQgPAUgOAAQgUAAgVghg");
	this.shape_82.setTransform(284.9,192.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3FB34F").s().p("AguA1QgggwgGguQgEgfAxgHQAfgFASgBQAcgBAXAFQAIACAEADQASAKgIAbQgDAMgQAcQgTAkgVAdQgPAUgOAAQgUAAgVghg");
	this.shape_83.setTransform(128.7,28.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3FB34F").s().p("Ag9BNQgFgGgBgOIgCgWIgDgyQgBgXADgNQAEgVANgJQARgKAfATIAoAfIAaATQANAMAAAOQAAAJgFAKQgIAOgVAMQgHAEgcANIggAQQgJADgGAAQgMAAgHgIg");
	this.shape_84.setTransform(309.7,99.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3FB34F").s().p("Ag9BNQgGgHgBgNIgBgWIgDgyQgBgXADgNQAEgVANgIQARgLAfATQAPAKAZAVIAaATQAMAMAAAOQAAALgFAIQgHAOgVAMIgjARIghAQQgIADgHAAQgLAAgHgIg");
	this.shape_85.setTransform(300,42.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3FB34F").s().p("AguBLQgWgCgKgMQgNgPAPghIAbgsIAPgbQAKgOARgCQAIgCAJAEQAPAGAPAUIAVAhIAUAeQAKAVgMAMQgFAGgOADIgWAEIgxAKQgRADgMAAIgGgBg");
	this.shape_86.setTransform(194.4,151.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagsIAQgbQAKgOARgCQAIgCAJAEQAPAGAOAUIAVAhIAUAeQAKAVgLAMQgGAGgOADIgWAEQgeAHgSADQgSADgLAAIgHgBg");
	this.shape_87.setTransform(280.2,149.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghQAIgQASgbIAQgcQAKgOARgCQAHgCAKAFQAPAGAOATIAVAhIAUAeQAKAVgLANQgGAGgNADIgWADQgeAHgTADQgSADgLAAIgHgBg");
	this.shape_88.setTransform(362.7,14.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3FB34F").s().p("AASBQIgkgHIglgIQgXgIgBgRQAAgIAHgMIANgSIAdgpQAegrAXACQAUACANAiQAHASAHAeIAJAfQADARgKANQgGAIgJAEQgKAEgOAAIgPgBg");
	this.shape_89.setTransform(208.9,113.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3FB34F").s().p("AARBQIgkgIIgkgIQgXgIgBgQQAAgJAHgLIANgTQASgbAKgOQAOgTAKgIQAOgOAQABQATACANAiQAIASAHAeIAJAeQADASgKANQgHAIgJAEQgJAEgOAAIgQgBg");
	this.shape_90.setTransform(255.1,113.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3FB34F").s().p("AARBQQgIgBgbgHIglgIQgXgHgBgRQAAgIAHgMIANgTIAdgpQAdgqAXACQAUACANAiQAIASAHAeIAJAeQADASgKANQgHAIgJAEQgKAEgOAAIgPgBg");
	this.shape_91.setTransform(284.6,68.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3FB34F").s().p("AARBQIgkgHQgYgEgMgEQgXgIgBgRQAAgIAHgMIANgSQANgVAPgVQAPgTAJgIQAOgOAQABQATACANAiQAIASAHAeIAJAfQADARgKANQgGAIgKAEQgKAEgOAAIgPgBg");
	this.shape_92.setTransform(326,64.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgNgegGgRQgJgaAAgWQgBgHACgHQAFgUAcABQANAAAhAHQAkAIAiANQA2AUgvA0QgmArgqASQgGACgGAAQgKAAgJgHg");
	this.shape_93.setTransform(323.2,8.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgEgfAxgHQAhgFAQgBQAdgBAVAFQAHACAGADQASAKgIAbQgDAMgQAcQgWApgSAYQgPAUgOAAQgUAAgVghg");
	this.shape_94.setTransform(297.3,128.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3FB34F").s().p("AguA1QgggwgGguQgEgfAxgHQAfgFASgBQAcgBAXAFQAHACAFADQASAKgIAbQgDAMgQAcQgUAngTAaQgPAUgOAAQgVAAgVghg");
	this.shape_95.setTransform(275.9,28.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3FB34F").s().p("Ag9BNQgFgGgBgOIgCgWIgDgyQgBgXADgMQAEgWANgIQARgLAfATIAoAfIAaATQANAMgBAOQAAALgFAIQgHAOgVANIgjARIggAQQgIACgHAAQgMAAgHgIg");
	this.shape_96.setTransform(13.8,319.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3FB34F").s().p("AAgBQQgIgBgMgIIgPgOQgYgRgRgOQgRgPgIgKQgNgQACgPQADgUAjgKQATgGAegFIAfgHQASgCAMALQAIAHADAKQAFAPgFAXIgKAkIgLAkQgJAWgRAAIAAAAg");
	this.shape_97.setTransform(176.1,369.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3FB34F").s().p("AgeBQQgHgFgFgMIgIgVQgMgdgHgRQgRgxAQgUQANgPAjAJQATAFAdAMIAeAKQAPAIAFAQQAEAJgDAKQgDAOgQASIgdAbIgbAZQgKAIgKAAQgGAAgGgDg");
	this.shape_98.setTransform(149.9,387.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagsQAKgTAGgIQAKgOARgCQAIgCAJAEQAPAGAPAUIAVAhIAUAeQAKAVgMAMQgFAGgOADIgWAEIgxAKQgSADgMAAIgGgBg");
	this.shape_99.setTransform(22.4,282.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrQAKgUAGgIQAKgOARgCQAHgBAKAEQAPAGAOATIAVAhIAUAeQAKAVgLANQgGAGgNADIgWADQgfAHgSADQgSACgMAAIgGAAg");
	this.shape_100.setTransform(62.4,383.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3FB34F").s().p("AARBQIgkgIIglgIQgWgHgBgRQAAgIAHgMIANgTQASgbAKgOQAegqAYACQATACANAiQAIASAHAeIAJAeQADASgKANQgHAIgJAEQgKAEgOAAIgPgBg");
	this.shape_101.setTransform(121.5,361.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3FB34F").s().p("AAKBLQgpgKgegKQg2gVAwgzQAlgrArgTQARgHANANQAJAIAJAUQAOAfAFAOQAKAbAAAXQAAAIgBAFQgFAUgcAAQgNAAghgIg");
	this.shape_102.setTransform(303,554.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3FB34F").s().p("AgMBKQgJgIgTgdQgYgkgPgbQgZg0BHgGQA3gFAtARQARAGACATQABAMgHAUQgLAdgIARQgMAagPARQgEAEgGAEQgGAEgHAAQgLAAgMgMg");
	this.shape_103.setTransform(268.6,553.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3FB34F").s().p("Ag7BSQgHgCgGgDQgSgKAIgbQAEgNAQgbQATgkAUgdQAgguAnA8QAfAvAGAuQAEAegxAIQgfAFgRABIgMAAQgWAAgRgEg");
	this.shape_104.setTransform(339.8,524.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3FB34F").s().p("AAfBIIgxgCQg0gFgLgXQgJgRAWgbIAkgmQAOgRAIgGQALgMARACQAJACAJAFQANAKAKAWIANAjIAMAkQAEAXgOAJQgHAFgOAAIgWgCg");
	this.shape_105.setTransform(334,553.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3FB34F").s().p("AAWBSQg/gQgdgVQgGgEgDgFQgNgRARgTQAIgLAbgVQAkgdAXgPQAygeAMBGQAKA3gNAuQgGAVgZAAQgLAAgOgEg");
	this.shape_106.setTransform(22.7,573.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3FB34F").s().p("AgIBLQgKgJgUgcQgcgngMgXQgagzBGgIQA4gHAtAQQARAGACASQABANgGAUQgKAdgHARQgMAagPASQgFAGgFADQgGAEgHAAQgMAAgKgLg");
	this.shape_107.setTransform(238.2,538.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3FB34F").s().p("Ag7BSIgNgFQgSgLAIgaQADgMARgdQAVgnASgZQAggvAnA8QAeAwAHAuQACASgPAKQgKAGgWAEQggAFgQABIgMAAQgWAAgRgEg");
	this.shape_108.setTransform(276.9,511);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3FB34F").s().p("Ag8BSQgHgCgFgDQgSgKAIgaQADgNAQgcQAUglAUgcQAgguAmA8QAgAwAGAtQAEAegxAIQggAFgRABIgMAAQgVAAgSgEg");
	this.shape_109.setTransform(208.9,519.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3FB34F").s().p("AARBWQg1gRgjghQgNgMAGgSQADgJAPgRQAsgyAfgQQAFgDAHgBQAVgDALAZQAFALAHAiQAIAnACAiQADApgkAAQgNAAgSgFg");
	this.shape_110.setTransform(192.5,471.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3FB34F").s().p("AgqBKQgJgIgJgUQgOgfgFgPQgKgaAAgXQAAgHABgGQAFgUAcAAQANAAAhAIQApAKAeAKQA2AVgwAzQglArgrATQgGADgGAAQgKAAgIgJg");
	this.shape_111.setTransform(128.3,332.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3FB34F").s().p("AgvA0QgfgwgGgtQgEgeAxgIQAfgFASgBQAcgBAWAFQAHACAGADQASAKgIAbQgDALgQAdQgVAngTAZQgPAVgOAAQgUAAgWgig");
	this.shape_112.setTransform(90.7,273.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQALgGAVgEQAhgFAQgBQAdgBAWAFQAIADAEACQASALgIAaQgDALgQAeQgSAigWAeQgPAUgOAAQgUAAgVghg");
	this.shape_113.setTransform(184.3,656.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgEgfAxgHQAhgFAQgBQAdgBAVAFQAHACAGADQASAKgIAbQgDAMgQAcQgWApgSAYQgPAUgOAAQgUAAgVghg");
	this.shape_114.setTransform(221.7,648.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3FB34F").s().p("AAQBWQg0gRgjghQgXgVAhgjQAXgZANgMQAVgTASgKIANgEQAUgDALAYQAGANAGAhQAJAnACAhQADArgkAAQgNAAgTgGg");
	this.shape_115.setTransform(24,362.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3FB34F").s().p("AhXAaQAFg2AYgqQAKgPASACQAMABASAKQA6AiAWAcQAEAFADAFQAHASgWARQgLAHgfAOQgkARggAJQgKADgIAAQgkgBAFg6g");
	this.shape_116.setTransform(79.8,350.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3FB34F").s().p("AhXAaQAFg3AZgpQAQgaApAYQAcARAPAKQAXARAOASQAEAEADAGQAHASgWAQQgKAIggAOQgnARgdAJQgKADgIAAQgkAAAFg7g");
	this.shape_117.setTransform(90,313.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3FB34F").s().p("AguA0QgfgwgHgtQgEgeAxgIQAggFARgBQAdgBAWAFQAHACAFADQASAKgIAbQgDAMgQAcQgTAlgUAbQgPAVgOAAQgVAAgVgig");
	this.shape_118.setTransform(117.4,293.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3FB34F").s().p("AAGBJIgogfQgTgMgHgHQgNgMAAgOQAAgKAFgJQAIgOAVgMIAjgSIAggQQAXgHALANQAFAGABAOIACAWIADAyQABAXgDANQgEAVgOAIQgGAEgIAAQgOAAgTgMg");
	this.shape_119.setTransform(23.4,527.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3FB34F").s().p("AhOA9QgNgPAPghIAagrQAKgUAGgIQAKgOARgCQAIgBAJAEQAPAGAPATIAVAhIAUAeQAKAWgMAMQgFAGgOADIgWAEIgxAJQgOACgMAAQgeAAgLgOg");
	this.shape_120.setTransform(22.8,481.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3FB34F").s().p("AASBQIgkgIIglgIQgXgHgBgRQAAgIAHgMIANgSQAUgeAIgMQAfgqAXACQAUACANAiQAHASAHAeIAJAeQADASgKANQgFAHgKAFQgLAEgOAAIgOgBg");
	this.shape_121.setTransform(16.2,446.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQALgGAVgEQAhgFAQgBQAdgBAWAFQAFABAHAEQASAKgIAbQgDAMgQAcQgVAngTAaQgPAUgOAAQgUAAgVghg");
	this.shape_122.setTransform(15,664.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3FB34F").s().p("Ag9BNQgFgGgCgOIgBgWIgDgyQgBgXADgMQAEgWANgIQARgLAfATQAPAKAZAVIAaATQAMAMAAAOQAAALgFAIQgHAOgVAMIgjASIggAQQgIACgHAAQgMAAgHgIg");
	this.shape_123.setTransform(201.6,395.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3FB34F").s().p("Ag9BNQgFgGgBgOIgCgWIgDgyQgBgXADgMQAEgWANgIQARgLAfATIAoAfIAaATQANAMAAAOQgBAMgEAHQgIAOgVAMIgjASQgUALgMAFQgJACgGAAQgMAAgHgIg");
	this.shape_124.setTransform(203,340.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3FB34F").s().p("AguBLQgWgCgKgMQgNgPAPghIAbgrQAJgUAGgIQAKgOARgCQAIgBAJAEQAPAGAPATIAVAhIAUAeQAKAVgMANQgFAGgOADIgWADQgcAHgVADQgSACgLAAIgGAAg");
	this.shape_125.setTransform(24,402.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrQAKgUAGgIQAKgOARgCQAHgCAKAFQAPAGAOATIAWAhIATAeQAKAVgLANQgGAGgNADIgWADQgdAHgUADQgSADgLAAIgHgBg");
	this.shape_126.setTransform(103.1,383.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3FB34F").s().p("AASBQQgJgBgcgHIgkgIQgXgHgBgRQAAgIAHgMIANgTQAOgVAOgUQAOgSAKgJQAOgOAQABQATACANAiQAHASAHAeIAKAeQADASgLANQgGAIgJAEQgKAEgOAAIgOgBg");
	this.shape_127.setTransform(279.7,352.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3FB34F").s().p("AgRBKQgKgCgIgFQgNgKgJgWIgNgjIgMgjQgFgYAOgJQAHgFAOAAIAWACIAyACQA0AFAKAXQAJASgWAaQgMAPgYAXIgWAXQgLAKgMAAIgFAAg");
	this.shape_128.setTransform(59.6,290.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3FB34F").s().p("AhQAlQgKg3ANguQAFgRASgDQAMgCAVAFQAfAIAQAGQAbAKASAOQAGAEAEAFQAMAQgRAUQgIAKgbAVQgjAdgYAPQgPAJgLAAQgbAAgJgxg");
	this.shape_129.setTransform(274.2,277.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3FB34F").s().p("AAOBOQgKgGgYgXQghgggTgVQgkgtBEgWQA0gSAwAGQASADAFARQAEAMgCAWQgEAegEASQgGAcgLAUQgDAHgEAEQgIAHgJAAQgKAAgMgHg");
	this.shape_130.setTransform(181,287.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgEgeAxgIQAhgFAQgBQAdgBAWAFQAIADADACQASALgHAaQgDAMgQAdQgTAkgUAcQgPAUgOAAQgUAAgWghg");
	this.shape_131.setTransform(277,387.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgCgSAPgKQAKgGAWgEQAggFARgBQAcgBAWAFIANAFQASAKgIAbQgDAMgRAdQgVAngSAZQgPAUgOAAQgUAAgWghg");
	this.shape_132.setTransform(48.1,331.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQALgGAVgEQAhgFAQgBQAdgBAWAFQAGACAGADQASALgIAaQgDALgQAeQgVAngTAZQgPAUgOAAQgUAAgVghg");
	this.shape_133.setTransform(206.4,436.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3FB34F").s().p("AguBLQgWgCgKgMQgMgPAPghIAagrQAJgUAGgIQAKgOARgCQAIgCAJAEQAPAGAOAUIAVAhIAUAeQAKAVgLANQgGAGgNADIgWADQghAHgQADQgRADgMAAIgGgBg");
	this.shape_134.setTransform(280,473.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3FB34F").s().p("AgqBQQgGgGgEgNIgGgWIgNgvQgMgzASgSQAPgNAiAMQAQAHAdAQIAdANQAPAJADARQACAKgDAHQgFAPgSARIgfAXIgdAXQgKAGgJAAQgIAAgHgFg");
	this.shape_135.setTransform(250.2,494.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3FB34F").s().p("AASBQIgkgIIglgIQgXgIgBgQQAAgJAHgLIANgTIAcgpQAOgSAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAeQADASgKANQgGAIgKAEQgJAEgOAAIgPgBg");
	this.shape_136.setTransform(250.1,452.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgCgSAPgKQAKgGAWgEQAggFARgBQAcgBAWAFQAGABAHAEQASALgIAaQgDALgQAeQgXApgRAXQgPAUgOAAQgUAAgWghg");
	this.shape_137.setTransform(136.4,672.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgSAQgKQAKgGAWgEQAggFARgBQAcgBAWAFIANAFQASAKgIAbQgDANgRAbQgUAngTAaQgPAUgOAAQgUAAgWghg");
	this.shape_138.setTransform(150.7,304.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3FB34F").s().p("AASBXQg1gPgkggQgOgMAFgRQADgLAOgQQAVgZANgNQAUgUASgLQAGgDAHgCQAUgEAMAZQAFALAJAiQAKAmADAiQAFArgmAAQgNAAgRgEg");
	this.shape_139.setTransform(239.5,268.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3FB34F").s().p("Ag9BNQgFgGgCgOIgBgWIgDgyQgBgXADgNQAEgVANgIQARgLAfATQAPAKAZAVIAaATQAMAMAAAOQAAALgFAIQgHAOgVAMIgjARQgUAMgMAEQgJADgHAAQgLAAgHgIg");
	this.shape_140.setTransform(334,404);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrQAKgUAGgIQAKgOARgCQAIgBAJAEQAPAGAOATIAVAhIAUAeQAKAVgLANQgGAGgOADIgWADQgZAHgXADQgSACgLAAIgHAAg");
	this.shape_141.setTransform(279.7,431.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrQAKgUAGgIQAKgOARgCQAHgCAKAFQAPAGAPATIAVAhIAUAeQAKAVgMANQgFAGgOADIgWADQgdAHgUADQgRADgNAAIgGgBg");
	this.shape_142.setTransform(323.1,468.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3FB34F").s().p("AASBQIgkgHIglgIQgXgIgBgRQAAgIAHgMIANgSIAcgpQAOgTAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAfQADARgKANQgGAIgKAEQgJAEgOAAIgPgBg");
	this.shape_143.setTransform(250.1,415.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3FB34F").s().p("AASBQIglgHIgkgIQgXgIgBgRQAAgIAHgMIANgSQAOgWAOgTQAOgTAKgJQAOgOAQABQAUACANAiQAHASAHAeIAJAfQADARgKANQgGAIgKAEQgJAEgOAAIgPgBg");
	this.shape_144.setTransform(302.6,406.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3FB34F").s().p("AARBQIgkgHIglgIQgWgIgBgRQAAgIAHgMIAMgSIAdgpQAegrAYACQATACANAiQAIASAHAeIAJAfQADARgKANQgHAIgJAEQgJAEgOAAIgQgBg");
	this.shape_145.setTransform(323.2,367.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3FB34F").s().p("AARBQIgkgHIgkgIQgXgIgBgRQAAgIAHgMIANgSQATgeAJgLQAOgTAKgJQAOgOAQABQATACANAiQAIASAHAeIAJAfQADARgKANQgHAJgJADQgJAEgOAAIgQgBg");
	this.shape_146.setTransform(348.4,351.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3FB34F").s().p("AgqBLQgJgIgJgUQgcg7gBglQAAgHABgGQAFgUAcABQANAAAhAHQAkAIAiANQA3AUgwA0QgmArgqASQgGACgGAAQgKAAgIgHg");
	this.shape_147.setTransform(336.4,319.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgEgfAxgHQAhgFAQgBQAdgBAWAFQAFABAHAEQASAKgIAbQgDAMgQAcQgTAkgVAdQgPAUgOAAQgUAAgVghg");
	this.shape_148.setTransform(323.1,294.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgSAQgKQAKgGAWgEQAggFARgBQAcgBAWAFIANAFQASALgIAaQgDAMgRAdQgVAngSAZQgPAUgOAAQgUAAgWghg");
	this.shape_149.setTransform(351.1,439.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgCgSAPgKQAKgGAWgEQAggFARgBQAcgBAWAFIANAFQASAKgIAbQgDALgQAeQgXApgRAXQgPAUgOAAQgUAAgWghg");
	this.shape_150.setTransform(302.6,331.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgEgeAxgIQAfgFASgBQAcgBAWAFQAHACAGADQASAKgIAbQgDALgQAdQgVAmgTAbQgPAUgOAAQgUAAgWghg");
	this.shape_151.setTransform(363.9,311);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgEgeAxgIQAfgFASgBQAcgBAWAFQAHACAGADQASAKgIAbQgDAMgQAcQgVAmgTAbQgPAUgOAAQgUAAgWghg");
	this.shape_152.setTransform(226.9,702.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3FB34F").s().p("AAWBQIgvgSQgVgGgJgFQgQgIgFgQQgCgLACgIQADgOARgRIAdgbIAbgZQATgNAOAJQAHAEAFANIAHAVIASAvQAHAVABAOQACAVgKAMQgIAKgRAAQgKAAgNgEg");
	this.shape_153.setTransform(257.3,586.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3FB34F").s().p("AgvBLQgVgCgKgMQgNgPAPghIAagrQAKgUAGgIQAKgOARgCQAIgBAJAEQAPAGAOATIAVAhIAUAeQAKAVgLANQgGAGgNADIgWADQgeAHgTADQgSACgLAAIgHAAg");
	this.shape_154.setTransform(240.3,611.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3FB34F").s().p("AhQAlQgKg3ANguQAIgeAwANQA/AQAdAVQAGAEADAFQANARgRATQgIALgbAVQgjAcgYAQQgPAJgLAAQgbAAgJgxg");
	this.shape_155.setTransform(290.9,592.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3FB34F").s().p("AgqBKQgJgIgJgUQgcg7gBgkIABgNQAFgUAcAAQANAAAhAIQAqAKAcAKQA3AVgwAzQglArgrATQgGADgGAAQgKAAgIgJg");
	this.shape_156.setTransform(208.9,604.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQAKgGAWgEQAhgFAQgBQAdgBAVAFIANAFQASALgIAaQgDALgQAeQgVAmgTAaQgPAUgOAAQgUAAgVghg");
	this.shape_157.setTransform(46.7,693.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgCgSAPgKQAKgGAWgEQAhgFAQgBQAdgBAVAFIANAFQASAKgIAbQgDAMgQAcQgWApgSAYQgPAUgOAAQgUAAgWghg");
	this.shape_158.setTransform(244.1,675.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3FB34F").s().p("AguA1QgggwgGguQgEgfAxgHQAfgFASgBQAcgBAWAFQAHACAGADQASAKgIAbQgDAMgQAcQgWApgSAYQgPAUgOAAQgUAAgVghg");
	this.shape_159.setTransform(8.6,617.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgCgSAPgKQAKgGAWgEQAggFARgBQAcgBAWAFQAGABAHAEQASALgIAaQgDALgQAeQgXApgRAXQgPAUgOAAQgUAAgWghg");
	this.shape_160.setTransform(103.1,702.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3FB34F").s().p("AAHBMQg7gdgZgaQgDgEgEgHQgJgRAVgRQAJgJAfgQQAjgTAfgMQA3gUgCBIQgBA3gVArQgIAPgRAAQgOAAgTgJg");
	this.shape_161.setTransform(153.8,693.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgEgfAxgHQAggFARgBQAcgBAWAFIANAFQASAKgIAbQgDAMgQAcQgWApgSAYQgPAUgOAAQgUAAgWghg");
	this.shape_162.setTransform(233.2,573.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#3FB34F").s().p("Ag9BNQgFgGgCgOIgBgWIgDgyQgBgXADgMQAEgWANgIQARgLAfATQAPAKAZAVIAaATQAMAMAAAOQAAALgFAIQgHAOgVANIgjARIggAQQgIACgHAAQgMAAgHgIg");
	this.shape_163.setTransform(334,693.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3FB34F").s().p("AARBQIgkgIIglgIQgWgHgBgRQAAgIAHgMIAMgTIAdgpQAegqAYACQATACANAiQAIASAHAeIAJAeQADASgKANQgHAIgJAEQgKAEgOAAIgPgBg");
	this.shape_164.setTransform(323.2,657.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3FB34F").s().p("AARBQIgkgIIgkgIQgXgIgBgQQAAgIAHgMIANgTQASgbAKgOQAOgSAKgJQAOgOAQABQATACANAiQAIASAHAeIAJAeQADASgKANQgHAIgJAEQgKAEgOAAIgPgBg");
	this.shape_165.setTransform(348.4,641);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3FB34F").s().p("AgqBLQgJgJgJgTQgOgegGgRQgJgaAAgXQAAgHABgGQAFgUAcAAQANAAAhAIQArAKAbALQA3AUgwAzQglArgrATQgGADgGAAQgKAAgIgIg");
	this.shape_166.setTransform(336.4,609.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQALgGAVgEQAhgFAQgBQAdgBAWAFIAMAFQASALgIAaQgDALgQAeQgSAigWAeQgPAUgOAAQgUAAgVghg");
	this.shape_167.setTransform(323.1,583.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3FB34F").s().p("AguA1QgfgwgHguQgCgSAPgKQALgGAVgEQAhgFAQgBQAdgBAWAFQAFABAHAEQASALgIAaQgDANgQAbQgUAngTAaQgPAUgOAAQgVAAgVghg");
	this.shape_168.setTransform(271.6,641.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#3FB34F").s().p("AgvA1QgfgxgGgtQgCgSAPgKQAKgGAWgEQAggFARgBQAcgBAWAFIANAFQASAKgIAbQgDAMgQAcQgWApgSAYQgPAUgOAAQgUAAgWghg");
	this.shape_169.setTransform(363.9,600.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,571.9,711);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJkJ4Qifgfi0i+QiUidg7iIIADA0QADA/gFA4QgPCzhOAoQgvAXhpgeQhNgXhDglQiehXhkhLIhFgzQg4gqgCgIQgEgQBJAAQBIAAAPAMQgZgUg2gSQgzgSgqgDQgRgBAKgOQATgWAigQQAjgQAXAEQgogYg9gFQgKAAgCgFQgDgFAIgIQA3g2CEAiQB/AeA7BIQgRjrAdiUQAqjWCNhOQBkg3B6AOQCCAOBSBUQApApA2BQQAuBEAnBHQAqBMA7CFQBQCvAtCOQB7F+ifAAQgPAAgSgDg");
	mask.setTransform(73.5,346.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#1F603F","rgba(31,96,63,0.925)","rgba(31,96,63,0)"],[0,0,1],0,0,0,0,0,87.4).s().p("ArOHxQigg9hfhcQhihggOh0QgOh0BIhzQBGhwCNhhQEqjOHCg3QHAg3FTCAQCgA+BfBbQBiBgAOB1QAOBzhIBzQhGBxiNBgQkqDOnCA3QiFAQh9AAQkkAAjthZg");
	this.shape.setTransform(434.5,58.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3BB6A1").s().p("AJkJ4Qifgfi0i+QiUidg7iIIADA0QADA/gFA4QgPCzhOAoQgvAXhpgeQhNgXhDglQiehXhkhLIhFgzQg4gqgCgIQgEgQBJAAQBIAAAPAMQgZgUg2gSQgzgSgqgDQgRgBAKgOQATgWAigQQAjgQAXAEQgogYg9gFQgKAAgCgFQgDgFAIgIQA3g2CEAiQB/AeA7BIQgRjrAdiUQAqjWCNhOQBkg3B6AOQCCAOBSBUQApApA2BQQAuBEAnBHQAqBMA7CFQBQCvAtCOQB7F+ifAAQgPAAgSgDg");
	this.shape_1.setTransform(73.5,346.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,282.6,147.1,127.1);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgTRAkXQkSjohEmlQg2lRBTmaQApjKBFi9QBHjEBzjaQAxhcBvjFQBfirBZiuQDMmhBaisQCWkdCojIQBlh3CZkHQCakMBgh1QA5hEAsgpQA/g5A9gYQAugSBRg0QBRg0AugSQAjgPAfAyQAcAugBA0QgDCmApFHQAsFcBNGDQDAPKEGJAQBeDNA0EMQAyEBAFETQAFERgoDwQgqD5hUCrQiREnmVB6QiKAqivAWIjqAYQjJAUi0AAQr8AAmqlog");
	mask.setTransform(179.7,413.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60C4B4").s().p("Ag4FwQjzgci0iAQjFiNhPjrQgVg8hZhBQheg+gXgXQCDAyCfAdQB/AWCqAMQE7AWFZgOQFlgPFpg4QgxEKiWCWQiZCbjnBKQilA2iqAAQg9AAg8gHg");
	this.shape.setTransform(103.7,623.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60C4B4").s().p("Am6DhQi9gThLgMQhugUiSgtQgWgHANiNQAOiJALgOQBSgZBogNQBLgKBxgIQE4gTEEAJQDPAJEaAjQCjAVFFAuQACBcgRDMQilAajJAPQh8AJjzAKQjEAJiLAAQi+AAiSgPg");
	this.shape_1.setTransform(106.7,567.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60C4B4").s().p("AuljXQAsgaBTgcQCjg2EJgbQFHggGMAWQBuAHC4ABQCgAECDAeQAQBIAHArQAVB3AUCqQATCiAIB5QkKg9lpgkQmdgqlWAQQjNAJjIAoQi2AkhJAng");
	this.shape_2.setTransform(102.2,513.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60C4B4").s().p("AswBKQArjBAZhTQBfgnA8gTQBSgbBdgRQCBgYBZgKQBugOBzgDQCxgGCcAOQCXAOCkAiQA/B9A9C7QAfBkAxC0Qh1gZi0gFQjIgChjgGQlzgXlCAdQk+AdiSBEQAXh3Alilg");
	this.shape_3.setTransform(106.6,446.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60C4B4").s().p("AoxCPQBajRBxjEQBpgfCAgRQCMgSCQAEQBrADArADQAwADAzAHQCLFXBQD6QgngLhbgOQhKgLhNgIQingSi7AEQluAHj5BbIgBAAQgOAABNi2g");
	this.shape_4.setTransform(109.8,382.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60C4B4").s().p("AiUhSQCBisBbABQBZAABTCLQBMB7AsC9IiFgJQhOgEhKACQkGAGi0A9QCUj5BDhXg");
	this.shape_5.setTransform(112.7,325.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#1F603F","rgba(31,96,63,0.98)","rgba(31,96,63,0)"],[0,0.008,1],-1.8,33.7,0,-1.8,33.7,163.1).s().p("Aq5bjQjyhginjiQigjbhEk1QhEk1AjlhQAklqCOlnQCOlnDgkiQDXkZEGiyQEFizEIgyQEVgzDyBgQDyBgCmDiQChDbBEE1QBEE2gjFgQglFqiNFnQiPFnjfEiQjYEZkFCzQkFCzkJAxQhgARhbAAQitAAieg+g");
	this.shape_6.setTransform(142.1,134.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#1F603F","rgba(31,96,63,0.98)","rgba(31,96,63,0)"],[0,0.008,1],0,0,0,0,0,195.9).s().p("AuKXRQlQg7j0ikQj8iph1kBQh0kCAnktQAmkiCykjQCxkjEij4QEsj/F5irQF6irGEg4QF4g3FRA7QFQA7D0CkQD8CpB1EBQB0ECgnEtQgmEiiyEjQixEkkiD3QksD/l5CrQl6CrmEA5Qi1AairAAQi6AAivgfg");
	this.shape_7.setTransform(257.6,659);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1CBAA1").s().p("EgTRAkXQkSjohEmlQg2lRBTmaQApjKBFi9QBHjEBzjaQAxhcBvjFQBfirBZiuQDMmhBaisQCWkdCojIQBlh3CZkHQCakMBgh1QA5hEAsgpQA/g5A9gYQAugSBRg0QBRg0AugSQAjgPAfAyQAcAugBA0QgDCmApFHQAsFcBNGDQDAPKEGJAQBeDNA0EMQAyEBAFETQAFERgoDwQgqD5hUCrQiREnmVB6QiKAqivAWIjqAYQjJAUi0AAQr8AAmqlog");
	this.shape_8.setTransform(179.7,413.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,144.9,319.5,537.6);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiUDtQh2g+hsh0QgmgpgNgVQgGgMgJgFQgIgFgGAEIgPAOQgHgPgDgUQgEgeAMgYQAJgRAUgKQATgJAQAEQgOgMgEgIQgDgGgBgMQgBgTAQgXQAVgbAhACQgFgOAIgRQALgXAkgHQAqgIAjAeQATARAOARIAcAlQAlA0AZAaQAbAdAnAcQAfAVAhAOQASAHALADQAugYAggfQAXgWAkgxQAfgrApgVQArgXAxADQAxADAgAcQAiAdALAzQAKAwgKAxQgJAtgaArQg6BhhjBBQhnBChrAEIgLAAQhjAAhwg8g");
	mask_1.setTransform(48.1,29.7);

	// Слой 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#479D85").s().p("AiUDtQh2g+hsh0QgmgpgNgVQgGgMgJgFQgIgFgGAEIgPAOQgHgPgDgUQgEgeAMgYQAJgRAUgKQATgJAQAEQgOgMgEgIQgDgGgBgMQgBgTAQgXQAVgbAhACQgFgOAIgRQALgXAkgHQAqgIAjAeQATARAOARIAcAlQAlA0AZAaQAbAdAnAcQAfAVAhAOQASAHALADQAugYAggfQAXgWAkgxQAfgrApgVQArgXAxADQAxADAgAcQAiAdALAzQAKAwgKAxQgJAtgaArQg6BhhjBBQhnBChrAEIgLAAQhjAAhwg8g");
	this.shape_9.setTransform(48.1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,59.5);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHnDaIgXg5IgBAAIgXA5IgkAAIAohQIgnhNIAjAAIAXA3IABAAIAWg3IAkAAIgoBNIApBQgAFtDaIgJgiIgoAAIgJAiIggAAIAtidIAgAAIAuCdgAFDCgIAbAAIgOgyIAAAAgADmDaIgghCIgKAAIAABCIgfAAIAAidIAfAAIAABAIAIAAIAghAIAmAAIgsBHIAvBWgAAtDaIAAidIBaAAIAAAXIg7AAIAAApIAxAAIAAAXIgxAAIAAAuIA7AAIAAAYgAgnDaIAAiGIglAAIAAgXIBoAAIAAAXIgkAAIAACGgAh9DaIAAiGIg0AAIAACGIgfAAIAAidIByAAIAACdgAj/DaIgJgiIgoAAIgJAiIghAAIAuidIAgAAIAtCdgAkqCgIAbAAIgNgyIgBAAgAoEDaIAAidIAuAAQAZAAAOAKQAOALAAAVQAAAMgFAIQgFAJgKAEQAOADAGAKQAHAKAAANQAAAXgOALQgNAMgZAAgAnlDCIAXAAQAKAAAGgGQAFgFAAgLQAAgLgFgGQgFgHgKAAIgYAAgAnlB/IARAAQAKAAAFgFQAFgGAAgKQAAgLgFgFQgGgGgLAAIgPAAgArOgaQgPgQAAgdIAAgoQAAgcAOgRQAPgQAZAAQAaAAAOAOQAOANAAAZIAAABIgeAAQAAgPgGgHQgFgHgNAAQgMAAgFAKQgGAJAAASIAAAoQAAATAGAJQAGAJANAAQALAAAFgGQAGgHAAgQIAdAAIABABQAAAZgOAOQgNANgZAAQgaAAgPgQgAKEgMIAAidIBaAAIAAAXIg7AAIAAApIAxAAIAAAXIgxAAIAAAuIA7AAIAAAYgAIugMIAAiGIglAAIAAgXIBqAAIAAAXIgmAAIAACGgAHZgMIAAhjIgBgBIgzBkIgfAAIAAidIAfAAIAABjIABAAIAzhjIAfAAIAACdgAFYgMIgJgiIgoAAIgJAiIghAAIAuidIAgAAIAtCdgAEthGIAbAAIgNgyIgBAAgACHgMIAAidIAuAAQAZAAAOAKQAOALAAAVQAAAMgFAIQgFAJgKAEQAOADAGAKQAHAKAAANQAAAXgOALQgNAMgZAAgACmgkIAXAAQAKAAAGgGQAFgFAAgLQAAgLgFgGQgFgHgKAAIgYAAgACmhnIARAAQAKAAAFgFQAFgGAAgKQAAgLgFgFQgGgGgLAAIgPAAgABOgMIAAhjIgBgBIgzBkIgdAAIAAidIAdAAIAABjIABAAIAzhjIAfAAIAACdgAjPgMIAAidIAfAAIAACFIArAAIAAiFIAfAAIAACFIArAAIAAiFIAgAAIAACdgAj/gMIgJgiIgoAAIgJAiIggAAIAtidIAgAAIAuCdgAkphGIAbAAIgOgyIAAAAgAnPgMIAAidIA2AAQAYAAAOAOQAOAOAAAXQAAAXgOAOQgOAOgYAAIgXAAIAAA3gAmwhbIAXAAQAKAAAGgIQAFgHAAgMQAAgMgFgIQgGgIgKAAIgXAAgAoJgMIAAiGIg0AAIAACGIgfAAIAAidIByAAIAACdgAGmjCQgKgIABgOIAAgBIAWAAQAAAGADAEQADADAGAAQAGAAADgDQADgEAAgGIAXAAIAAABQAAANgJAJQgKAJgQAAQgQAAgJgJg");
	this.shape.setTransform(115,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.6,4.4,147,43.7);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F7FB").s().p("AAAAnQgRgBgLgMQgLgMABgOQABgRAMgLQAMgLAOABQAQAAALAMQAMAMgBAPQgBAQgMALQgLALgOAAIgBAAg");
	this.shape.setTransform(21.9,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000208").s().p("AgCBaQgmgBgZgcQgagcACgjQABgmAcgZQAbgaAkACQAmABAZAcQAaAbgCAkQgBAmgcAZQgaAYgjAAIgCAAg");
	this.shape_1.setTransform(20,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7FB").s().p("AgFCYQg/gCgrguQgrgvACg+QADg/AugrQAvgrA9ACQBAADArAvQArAugDA+QgCA/gvArQgrApg8AAIgFgBg");
	this.shape_2.setTransform(18.6,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000208").s().p("AidB1QghgpgHg0QgGg1AagxQAcgzAygcQA0gdA2AJQB3AUAoB4QAFANANASQAMAOADAQQAEAZgaAXQgiAYgOAQQg3BBhXADIgIAAQhVAAgzg/g");
	this.shape_3.setTransform(20,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,36.1);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F7FB").s().p("AgTApQgQgIgHgSQgGgQAIgRQAIgRASgHQAQgGARAIQARAIAHASQAGAQgIASQgIAQgSAHQgIADgHAAQgJAAgKgFg");
	this.shape.setTransform(20,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000208").s().p("AgrBfQgpgSgOgpQgPgoASgoQATgoAqgOQAngPAoASQAoAUAOApQAPAngTAoQgSAogpAPQgTAGgRAAQgVAAgWgLg");
	this.shape_1.setTransform(23.9,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7FB").s().p("AhKChQhEgggYhFQgahEAghDQAfhDBGgZQBEgZBDAgQBDAfAZBGQAZBEggBDQgfBDhGAZQgfALgdAAQglAAglgSg");
	this.shape_2.setTransform(22.9,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000208").s().p("AhwCvIhEgcQglgPgEgeQgCgTAHgWQAJgZAAgQQAEiRB9hAQA6geBDAOQBBANAyAwQAuAsALBAQALA6gWA6QglBchlAcQgjAKggAAQg8AAg3gjg");
	this.shape_3.setTransform(22.3,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.6,42.1);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,471,223);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pasta();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,310);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADA6QgJgCgGgEIgHgEIgJgCQgRgCgMgNQgNgMgDgRQgDgPAJgQQAIgQAPgHQAKgEAPgBIAYgBQAWAAAIADQAXAGALAXQAJAVgGAWQgDAKgEAGQgJAPgSAHQgLAEgMAAIgMgBg");
	this.shape.setTransform(69.3,14.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54).to({_off:false},0).to({_off:true},2).wait(6));

	// Слой 1
	this.instance = new lib.y5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,104);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A5A7").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rot();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329,329);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#479D85").s().p("ArHP7QszhLnCk/QnnlZjXo6QhDizggi1QgQhbgDg7QFngzHOhvQADAfAGAaQBCEiDiDAQDoDGF9BJQEUA1EDgHQFbgJFihfQFThZFHiiQB3g7Cwh1QD/ipAlgXQCohnCKgyQCrg+CmAEQDtAECeCOQCJB5BkD1QBaDdAKDGQANDphnC0Qg7Boj7B3QjjBsldBqQlKBjlkBIQlmBJkZAZQluAglEAAQkRAAj2gXg");
	this.shape.setTransform(280.1,104.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3BB6A1").s().p("AiDBzQgTgMgBgTQgEg4AehAQAehEAmgPQA5gXBQBEQBOBAgGAqQgCAZhkAiQhTAdgvAFIgLABQgXAAgRgLg");
	this.shape_1.setTransform(294.5,82.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3BB6A1").s().p("AAEBpQhcgsgogeQgcgVgGgYQgGgXAPgQQAqgtBNgcQBMgcArASQBBAbANBvQAFAugIAnQgIAngRAOQgGAEgKAAQghAAhSgng");
	this.shape_2.setTransform(130.2,68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3BB6A1").s().p("AhqCCQgigCgTgRQgSgRADgVQAKg9Awg/QAyhEAtgJQBDgOBKBXQAdAjAQAiQAPAmgHAVQgJAZh3ATQhVAOgzAAIgPgBg");
	this.shape_3.setTransform(245.7,87.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3BB6A1").s().p("AAcB8QhkgPgwgSQgggMgNgXQgNgVAKgTQAbg1BCgxQBDgxAsAFQBGAHAsBpQASAoAEAnQAEApgNARQgJANgpAAQggAAg1gIg");
	this.shape_4.setTransform(185.9,86.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560.3,208.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3BB6A1").s().p("AlVCeQgQgBgOgKQgOgLgGgPQgHgSAHgQQAJgUAWgVQAkgkAtgKQAhgIAbAMQAfAQAAAhQABAWgPAQQgJAJgZAQQggAVgSAIQgbANgXAAIgFAAgAgtAMQgPgEgLgKQgKgMgDgQQgDgRAKgPQAMgQAZgPQAmgYAsgDQAggBAXATQAYAUgGAfQgEAUgRAMQgKAGgaAKQgiALgSAEQgOADgOAAQgNAAgKgDgAEBg9QgLgFgHgMQgHgLAAgMQAAgOAKgKQALgLAVgJQAjgOAjADQAZADAQARQARATgJAYQgGAPgPAIQgIAEgWAEQgdAGgNABIgJAAQgUAAgOgGg");
	this.shape.setTransform(148.7,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#479D85").s().p("AwhMDQBhnhFalfQAjgkA3iEQAzh6AxgiIAfgWQEBi0DDhQQEFhqEkAAQCtAAB5AcQCjAlgMBMQgHAuicAsIiNAmQhXAXgzAVQj4Bki5CqQjHC6hUDpIhWDwQg6CogbB2QlIATkJAAQhlAAhbgDg");
	this.shape_1.setTransform(105.9,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.8,154.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE63A6").s().p("AqJQBQgTgEgQgNQgRgPANgHQAygWAggQQA5gdA2gxQA3gyArg1ICBidIApgxQAZgdANgVIAmg/QATgjAGggQAJgtABgJQAAgjgbgBQgRgBgRAlQgPAigUgJQgFgCgHgIQhHhRgShuQgEgYABguQACgvgDgXQgHgwgig4QgWgkgwg5Qg1g/gTgcQgmg5gCgsQgBgPAGgHQAGgIANAIQARALASAiIAbA0QAYAmBDBDQBABAAZAqQANAXAIAJQARATAOgIQANgGgvhAIg4hIIhziXQgpgzgTgbQgggwgJgpQgHgkALgpQAKglAXggQAlg1AMAPQAWAcARA4QAVBHAIARQASAoAdAvIA3BSQBLBvA2A1QASASATACQBBAHgohUQgWgvgsg6Qgpg2gYgnQghg0gTgxQghhUgKg6QgLg6ACgXQADgqAkgYICNhgQAJgHALgEQAPgFAGAHQAFAFgKAiIgMAsQgGAuAHA0QANBiAyBXQAKARAHAHQANAMANgFQANgGgEghIgHgsQgNg5gOgxQgPgxgGgbQgIgrABgjQACg1AhgOQAOgGAVgCIAngDQAhgHAmgYIAegVQASgLAQgBQAPgBAHAJQAHAJgBAPQgEA1AsAwQAWAXBDAvQAiAZAKAJQAYAUAPATQARAWAEAXQAEAVgFAeQgQBkhNBiQgpA0hXBPQhDA9AgAVQAVAOAigdIAsgtQBBhIAfgmQBOhfAgh8IADgMQACgEAHAAQAQABAVAjQAMATAPAeQAhA7AOA1QAKAngBAcQgCAjgUAdQglA1hIA4QgzAohPAsIiJBKQgiATgDAhQgDAgAtgEQAYgDAfgNQASgHAjgPQBGgfA2grQBGg4A9hLQAKgNAJgcQALgfAGgLQARgbAOAAQALgBgEAZIgGAiQgBAfAMAxQAOA6ACAUQAGA1gHBCQgFA1gMAnQgZBVhBA2IhLA6QgsAjgbAbIhDBKQgoAtghAWQgdAUgeAIQgxAOgpgEQgzgEgggeQgQgOgNgVQgMgVgGgVIgGgkQgEgWgFgMQgGgTgQgKQgRgLgTAFQgNAEgHAPQgFAJgDATQgNA/gXApQgLATgTAaIgfAqQgHALgPAPIgXAZQg4BAgcAjIiqDXQgiAsglAaQgrAfgmAAQgKAAgJgCg");
	this.shape.setTransform(69.5,102.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,205.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(120.4,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.5,4.1,199.9,38.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(119.2,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.9,3.9,204.6,40.3);


(lib.Символ13копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(120.3,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQATQgHgIAAgLQAAgKAHgJQAHgIAJAAQAKAAAHAIQAHAJAAAKQAAALgHAIQgHAJgKAAQgJAAgHgJgAgMgPQgHAGABAJQgBAJAHAHQAFAHAHAAQAIAAAGgHQAGgHgBgJQABgJgGgGQgGgHgIAAQgHAAgFAHgAAGAPIgBgCIAAgEIAAgCIgBgEIgEgBIgDAAIAAANIgFAAIAAgeIAIAAQAFAAACADQADACAAAFIgBAEIgCABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAABIABAEIAAADIAAACIABACIAAABgAgDgBIADAAIAEgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_1.setTransform(128.8,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.8,-0.6,151.1,40.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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goQgMgJAAgPIABgBIAVAAQgBAIAFADQAEAFAIAAQAIAAAFgFQAFgDAAgIQAAgIgFgEQgEgFgIAAIgOAAIAAgQIAOAAQAIAAADgEQAEgEAAgHQABgHgFgEQgEgEgIgBQgHAAgEAFQgEAEAAAGIgVAAIAAAAQgBgOALgJQAKgIAQAAQARAAALAIQAKAIAAAPQAAAIgFAGQgEAGgHAEQAJADAEAGQAEAHAAAJQABAQgLAIQgMAJgRAAQgQgBgKgHgAExgsQgLgMAAgTIAAgbQAAgTALgMQAKgMATAAQASAAALAMQAMAMAAATIAAAbQAAATgMAMQgKAMgTAAQgTAAgKgMgAFAh5QgFAGAAANIAAAbQAAAMAFAHQAEAHAKAAQAJAAAFgHQAFgHAAgMIAAgbQAAgNgFgGQgFgHgJAAQgKAAgEAHgABggrQgLgLAAgVIAAgcQAAgUALgKQAJgMASAAQASAAAKAJQAKAJAAASIgBAAIgUAAQgBgKgEgEQgDgGgJAAQgIABgFAGQgDAHAAAMIAAAcQAAANAEAGQAFAHAIAAQAIAAADgFQAEgEAAgLIAVAAIAAABQAAARgJAKQgJAIgSABQgSgBgKgKgAkAgsQgLgMAAgTIAAgbQAAgTALgMQALgMATAAQASAAALAMQALAMAAATIAAAbQAAATgLAMQgLAMgSAAQgTAAgLgMgAjxh5QgEAGAAANIAAAbQAAAMAEAHQAFAHAKAAQAJAAAEgHQAGgHAAgMIAAgbQAAgNgGgGQgFgHgIAAQgKAAgFAHgAoPgoQgLgJAAgPIABgBIAUAAQAAAIAFADQAFAFAGAAQAJAAAFgFQAFgDAAgIQAAgIgEgEQgFgFgJAAIgMAAIAAgQIAMAAQAJAAAEgEQADgEAAgHQAAgHgEgEQgEgEgJgBQgFAAgFAFQgEAEAAAGIgVAAIAAAAQAAgOAKgJQALgIAOAAQATAAAJAIQALAIAAAPQAAAIgEAGQgFAGgHAEQAIADAFAGQAFAHAAAJQAAAQgMAIQgKAJgTAAQgPgBgLgHgAwNgrQgLgLAAgVIAAgcQAAgUALgKQAKgMASAAQARAAALAJQAJAJAAASIAAAAIgVAAQAAgKgEgEQgEgGgIAAQgJABgEAGQgEAHAAAMIAAAcQAAANAEAGQAFAHAJAAQAHAAAEgFQADgEAAgLIAWAAIAAABQAAARgJAKQgKAIgRABQgTgBgKgKgAQ5giIAAhuIA+AAIAAARIgoAAIAAAcIAhAAIAAAQIghAAIAAAhIAoAAIAAAQgAPhgiIAAhuIAWAAIAAAoIAOAAQARAAAKAJQAKAKAAAQQAAAPgKAKQgKAKgRAAgAP3gyIAOAAQAHgBAFgFQADgGAAgHQAAgIgDgGQgFgFgHAAIgOAAgAOHgiIAAhuIAgAAQASAAAJAIQAKAHAAAQQAAAHgDAGQgEAGgHADQAJACAEAHQAFAHAAAJQAAAQgJAIQgKAIgQAAgAOdgyIAQAAQAGAAAEgFQADgDAAgIQAAgHgCgFQgEgEgHgBIgQAAgAOdhhIALAAQAHgBADgDQAFgEAAgHQAAgIgFgDQgDgEgIAAIgKAAgALNgiIAAhuIAlAAQARAAAKALQAJAJAAAQQAAAQgJAKQgKAKgRAAIgQAAIAAAmgALihYIAQAAQAHAAAEgGQADgFAAgJQAAgHgDgGQgEgGgHAAIgQAAgADbgiIAAgqIgOAAIgRAqIgYAAIAVgyQgHgEgEgGQgDgIAAgJQgBgPAKgJQAJgJARAAIAiAAIAABugADEh6QgEAEAAAIQAAAIAEAGQADAEAHAAIANAAIAAgjIgNAAQgHAAgDAFgAAbgiIAAhdIgbAAIAAgRIBKAAIAAARIgaAAIAABdgAgggiIAAhFIgBAAIgjBFIgVAAIAAhuIAVAAIAABFIABABIAjhGIAWAAIAABugAiVgiIAAhdIgaAAIAAgRIBKAAIAAARIgaAAIAABdgAlhgiIAAhuIBAAAIAAARIgqAAIAAAXIAPAAQAQAAAKAJQAKAKAAAQQAAAPgKAKQgKAKgQAAgAlLgyIAPAAQAHgBAEgFQADgGAAgHQAAgIgDgGQgEgFgHAAIgPAAgAmDgiIgHgYIgbAAIgHAYIgWAAIAfhuIAXAAIAfBugAmhhLIATAAIgJgiIAAAAgAqDgiIgGgYIgcAAIgGAYIgXAAIAghuIAWAAIAgBugAqhhLIATAAIgJgiIgBAAgAr4giIAAhdIgZAAIAAgRIBJAAIAAARIgaAAIAABdgAs0giIAAhdIgkAAIAABdIgWAAIAAhuIBPAAIAABugAu8giIAAhuIA9AAIAAARIgoAAIAAAcIAiAAIAAAQIgiAAIAAAhIApAAIAAAQgAw3giIgHgYIgcAAIgGAYIgWAAIAfhuIAXAAIAfBugAxVhLIATAAIgJgiIgBAAgAp0hfQgHgIAAgMQAAgLAHgJQAHgIAKAAQALAAAHAIQAHAJAAALQAAAMgHAIQgHAJgLAAQgJAAgIgJgApxiDQgFAGAAAKQAAAKAFAHQAGAHAIAAQAJAAAGgHQAGgHgBgKQABgKgGgGQgGgIgJAAQgIAAgGAIgApchkIgBgCIAAgDIAAgCIgBgEIgEgBIgGAAIAAAMIgEAAIAAgfIAJAAQAGAAADACQACADAAAFIgBADIgCADQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAIABAFIAAADIAAACIABACIAAAAgApoh1IAFAAIAEgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAIgFAAg");
	this.shape.setTransform(119.7,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.3,6.1,228.8,29.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D93A96").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D93A96").s().p("AgcAzIAAhlIA5AAIAAAQIglAAIAAAaIAeAAIAAANIgeAAIAAAeIAlAAIAAAQg");
	this.shape.setTransform(159.6,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D93A96").s().p("AgJAzIAAhVIgYAAIAAgQIBDAAIAAAQIgYAAIAABVg");
	this.shape_1.setTransform(152,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D93A96").s().p("AAKAzIgSgrIgHAAIAAArIgUAAIAAhlIAUAAIAAAqIAFAAIATgqIAZAAIgdAvIAfA2g");
	this.shape_2.setTransform(144.4,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D93A96").s().p("AgXAyIgHgBIACgPIAFABIAEABQAFAAACgDQADgCACgGIABgDIgghIIAWAAIAQAvIAAACIAAAAIASgxIAVAAIghBRQgEAKgDAFQgGAGgJgBIgHgBg");
	this.shape_3.setTransform(135.6,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D93A96").s().p("AAZA5IAAgMIgxAAIAAAMIgUAAIAAgcIAFAAQAJAAADgKQADgKACgYIAFgpIA1AAIAABVIAJAAIAAAcgAgBgPIgFAZQgDAMgEAHIAdAAIAAhFIgQAAg");
	this.shape_4.setTransform(126.8,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D93A96").s().p("AgaApQgKgLAAgSIAAgXQAAgSAKgLQAKgLAQAAQAQAAALALQAKALAAASIAAAXQAAASgKALQgKALgRAAQgQAAgKgLgAgLgdQgFAGAAAMIAAAXQAAAMAFAGQAEAHAHAAQAIAAAFgHQAEgGAAgMIAAgXQAAgMgEgGQgFgHgIAAQgIAAgDAHg");
	this.shape_5.setTransform(117.6,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D93A96").s().p("AghAzIAAhlIAhAAQAPAAAKAKQAJAJAAAPQAAAOgJAIQgKAJgPAAIgNAAIAAAkgAgNAAIANAAQAGAAAFgEQADgFAAgHQAAgIgDgFQgFgFgGAAIgNAAg");
	this.shape_6.setTransform(109,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D93A96").s().p("AAQAzIAAhVIgfAAIAABVIgVAAIAAhlIBJAAIAABlg");
	this.shape_7.setTransform(100,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D93A96").s().p("AgaApQgKgLAAgSIAAgXQAAgSAKgLQAKgLAQAAQAQAAALALQAKALAAASIAAAXQAAASgKALQgKALgRAAQgPAAgLgLgAgLgdQgFAGAAAMIAAAXQAAAMAFAGQAEAHAHAAQAIAAAFgHQAEgGAAgMIAAgXQAAgMgEgGQgFgHgIAAQgIAAgDAHg");
	this.shape_8.setTransform(87.3,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D93A96").s().p("AgcAzIAAhlIA5AAIAAAQIglAAIAAAaIAeAAIAAANIgeAAIAAAeIAlAAIAAAQg");
	this.shape_9.setTransform(75.7,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D93A96").s().p("AgcAzIAAhlIA5AAIAAAQIglAAIAAAaIAeAAIAAANIgeAAIAAAeIAlAAIAAAQg");
	this.shape_10.setTransform(68.3,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D93A96").s().p("AARAzIAAgrIghAAIAAArIgTAAIAAhlIATAAIAAAtIAhAAIAAgtIATAAIAABlg");
	this.shape_11.setTransform(59.9,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D93A96").s().p("AghAzIAAhlIA6AAIAAAQIgmAAIAAAUIANAAQAPAAAJAKQAKAHAAAOQAAAPgKAKQgJAJgPAAgAgNAjIANAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAIgNAAg");
	this.shape_12.setTransform(51.3,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D93A96").s().p("AgaApQgLgLAAgSIAAgXQAAgSALgLQAKgLAQAAQAQAAALALQALALAAASIAAAXQAAASgLALQgKALgRAAQgQAAgKgLgAgMgdQgEAGAAAMIAAAXQAAAMAEAGQAFAHAHAAQAIAAAFgHQAFgGAAgMIAAgXQAAgMgFgGQgFgHgIAAQgHAAgFAHg");
	this.shape_13.setTransform(42.5,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D93A96").s().p("AghAzIAAhlIAhAAQAQAAAJAKQAJAJAAAPQAAAOgJAIQgJAJgQAAIgNAAIAAAkgAgNAAIANAAQAGAAAEgEQAEgFAAgHQAAgIgEgFQgEgFgGAAIgNAAg");
	this.shape_14.setTransform(33.9,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D93A96").s().p("AAZA5IAAgMIgwAAIAAAMIgVAAIAAgcIAFAAQAJAAADgKQADgKACgYIAFgpIA1AAIAABVIAJAAIAAAcgAgBgPIgEAZQgDAMgFAHIAdAAIAAhFIgQAAg");
	this.shape_15.setTransform(24.9,11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D93A96").s().p("AgaApQgKgLAAgSIAAgXQAAgSAKgLQAKgLAQAAQARAAAKALQAKALAAASIAAAXQAAASgKALQgKALgRAAQgPAAgLgLgAgMgdQgEAGAAAMIAAAXQAAAMAEAGQAFAHAHAAQAIAAAFgHQAEgGABgMIAAgXQgBgMgEgGQgFgHgIAAQgHAAgFAHg");
	this.shape_16.setTransform(15.7,11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D93A96").s().p("AAQAzIAAhVIggAAIAABVIgUAAIAAhlIBIAAIAABlg");
	this.shape_17.setTransform(6.5,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.5,22);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxQEhIAApCMAihAAAIAAJCg");
	this.shape.setTransform(110.5,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221.1,58);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABRArIAAhIIANAAIABAGQAEgHAJAAQAJAAAGAIQAGAHgBANIAAAAQABALgGAHQgGAHgJAAQgIAAgFgFIAAAZgABfgNIAAAUQACAFAIAAQAKAAAAgPQgBgHgCgEQgDgEgFAAQgGAAgDAFgAEzASQgFgFABgJIAAghIANAAIAAAhQAAAIAIAAQAIAAACgFIAAgkIAOAAIAAAzIgNAAIgBgFQgEAGgKAAQgIAAgFgFgACzATQgEgFAAgHQAAgHAFgDQAHgFALAAIAHAAIAAgDQAAgEgCgCQgCgCgEAAQgDAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgNAAQAAgEACgEQADgEAGgCQAEgDAHAAQAJAAAHAFQAFAFAAAJIAAAVQAAAIADADIAAABIgPAAIgCgEQgEAFgIAAQgJAAgFgEgAC8AGIAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQACABAEAAIAFgBQADgBABgDIAAgHIgFAAQgLAAgBAGgACOAIIAAgaIgHAAIAAgLIAHAAIAAgNIAPAAIAAANIAJAAIAAALIgJAAIAAAYIABAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIAFgBIAAALIgJABQgPAAgBgPgAAeAQQgIgHABgKIAAgBQAAgIACgGQAEgHAGgDQAFgEAHAAQALAAAGAHQAHAHgBANIAAADIghAAQABAGADADQADADAGAAQAIAAAEgGIAIAIQgEAEgFADQgFACgHAAQgMAAgHgHgAApgPQgEADAAAFIATAAIAAgBQAAgFgCgDQgDgCgEAAQgEAAgCADgAgTAVQgFgDgDgEQgDgEAAgFIANAAQABAEACACQACACAFAAQAEAAACgBQAAgBABAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAIgJgDQgSgCAAgMQAAgHAFgFQAGgFAJAAQAIAAAHAFQAFAFABAHIgNAAQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgEAAQgDAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAIAHADIAHACQAMAEAAAIQAAAHgGAFQgHAEgIAAQgGAAgFgCgAhRATQgEgFgBgHQABgHAFgDQAHgFALAAIAHAAIAAgDQAAgEgCgCQgBgCgFAAQgEAAgCACQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgNAAQAAgEADgEQACgEAGgCQAEgDAHAAQAJAAAHAFQAFAFAAAJIAAAVQAAAIADADIAAABIgPAAIgBgEQgFAFgJAAQgIAAgFgEgAhIAGIAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQACABAEAAIAFgBQADgBABgDIAAgHIgFAAQgLAAgBAGgADrAVQgCgCAAgEQAAgDACgCQACgCAEAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgEAAgCgCgAhwAVQgCgCgBgEQABgDACgCQACgCADAAQAEAAADACQABACAAADQAAAEgBACQgDACgEAAQgDAAgCgCgAEIAWIAAgzIANAAIAAAHQAFgIAHAAIAFABIAAAOIgGgBQgHAAgDAGIAAAggAiWAWIgKgfIgKAfIgLAAIgOgzIAOAAIAHAgIAJggIAKAAIAKAgIAHggIANAAIgNAzgAjiAWIgKgfIgKAfIgMAAIgNgzIANAAIAHAgIAKggIAKAAIAKAgIAHggIAOAAIgOAzgAkuAWIgKgfIgKAfIgLAAIgOgzIAOAAIAHAgIAJggIAKAAIAKAgIAHggIANAAIgNAzg");
	this.shape.setTransform(37,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,5.9,69.7,8.7);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D93A96").s().p("AzzFFIAAqJMAnnAAAIAAKJg");
	this.shape.setTransform(119.1,31.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-1.5,253.7,65.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADqEYIkDouICNAAIEFIugAk0EYIA8iCIiAAAIAzhuICAAAIA/iEICCAAIg/CEICIAAIgzBuIiIAAIg9CCg");
	this.shape.setTransform(37.8,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHgAgMgMQgGAFAAAHQAAAHAGAGQAGAGAGAAQAIAAAFgGQAGgGgBgHQABgHgGgFQgFgGgIAAQgGAAgGAGgAAFAMIgBgDIgBgGQgBgBgCAAIgCAAIAAAKIgHAAIAAgYIAJAAQAKAAAAAIQAAAEgEABQADABABAHIAAADgAgCAAIACAAQAFAAAAgEQAAgCgFAAIgCAAg");
	this.shape_1.setTransform(121.5,69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAcIgEgLIgXAAIgEALIgOAAIAag3IAHAAIAaA3gAgGAHIANAAIgHgPg");
	this.shape_2.setTransform(118.6,99);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJAcIgRgXIgFAEIAAATIgMAAIAAg3IAMAAIAAAWIAVgWIARAAIgZAZIAaAeg");
	this.shape_3.setTransform(111.7,99);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAcIAAgVQgGADgHAAQgWAAAAgSIAAgTIAMAAIAAALQAAAQALAAQAGAAAGgEIAAgXIAMAAIAAA3g");
	this.shape_4.setTransform(104.4,99);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAcIAAg3IAMAAIAAA3gAgeAcIAAg3IAMAAIAAATIAJAAQAXAAgBARQAAATgXAAgAgSARIAIAAQAKgBAAgHQAAgIgJAAIgJAAg");
	this.shape_5.setTransform(96.9,99);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAcIAAg3IAXAAQAUgBAAAPQAAAIgFAFQAHACAAAJQAAARgWAAgAgKARIAKAAQAKAAAAgHQAAgFgKAAIgKAAgAgKgFIAKAAQAIAAAAgEQAAgHgIAAIgKAAg");
	this.shape_6.setTransform(89.5,99);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMAcIAAghIgaAhIgKAAIAAg3IANAAIAAAhIAaghIAKAAIAAA3g");
	this.shape_7.setTransform(82.4,99);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAcIAAg3IAXAAQAYAAAAATQAAASgYAAIgKAAIAAASgAgKAAIAKAAQAKAAAAgIQAAgIgKAAIgKAAg");
	this.shape_8.setTransform(75.7,99);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMAcIAAgsIgXAAIAAAsIgNAAIAAg3IAxAAIAAA3g");
	this.shape_9.setTransform(68.6,99);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAcIAAgTIgKAAIgMATIgQAAIARgVQgNgEAAgLQABgJAFgFQAHgGAJABIAZAAIAAA3gAgHgIQAAAIAHAAIANAAIAAgQIgNAAQgIABABAHg");
	this.shape_10.setTransform(58.6,99);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQAcIgFgLIgWAAIgEALIgNAAIAZg3IAHAAIAZA3gAgGAHIANAAIgHgPg");
	this.shape_11.setTransform(51.7,99);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAcIAAg3IAXAAQAUgBAAAPQAAAIgFAFQAHACAAAJQAAARgWAAgAgKARIAKAAQAKAAAAgHQAAgFgKAAIgKAAgAgKgFIAKAAQAIAAAAgEQAAgHgIAAIgKAAg");
	this.shape_12.setTransform(45.1,99);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIgAgKgLQgFAFAAAGQAAAHAFAFQAFAFAFAAQAGAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgGAAQgFAAgFAFg");
	this.shape_13.setTransform(37.9,99);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAcIAAg3IAXAAQAYAAAAATQAAASgYAAIgKAAIAAASgAgKAAIAKAAQAKAAAAgIQAAgIgKAAIgKAAg");
	this.shape_14.setTransform(31,99);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAVQgJgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgIgIgAgKgLQgFAFAAAGQAAAHAFAFQAFAFAFAAQAHAAAEgFQAFgFAAgHQAAgGgFgFQgFgFgGAAQgFAAgFAFg");
	this.shape_15.setTransform(23.8,99);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAhIAAgJIgjAAIAAAJIgMAAIAAgVIAHAAQAFgMABgZIAAgHIAnAAIAAAsIAHAAIAAAVgAgEgRQgBATgFAKIAVAAIAAggIgPAAg");
	this.shape_16.setTransform(16.5,99.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAQIAKgHQAGAIAJAAQALAAAAgGQAAgGgMAAIgHAAIAAgKIAHAAQAKAAAAgGQAAgGgKAAQgHAAgFAHIgKgHQAIgLAPAAQAWAAAAAQQAAAIgGADQAIABAAAKQAAAJgGAFQgHAFgLAAQgRAAgIgNg");
	this.shape_17.setTransform(9.4,99);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA/BWIgRgmIhbAAIgRAmIgiAAIBQirIAgAAIBRCrgAAhAVIghhGIghBGIBCAAg");
	this.shape_18.setTransform(111.7,77.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABABWIgSgmIhbAAIgRAmIgiAAIBRirIAgAAIBQCrgAAhAVIghhHIggBHIBBAAg");
	this.shape_19.setTransform(16.6,77.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhDBCQgcgbAAgnQAAglAcgcQAdgcAmAAQAiABAZATQAbAUAIAfIACAIIggAAIgCgEQgHgUgRgMQgQgLgWAAQgZAAgTATQgTARAAAZQAAAZATATQATASAZAAQAVAAARgMQARgLAHgTIAgAAIAAACQgIAggbAUQgZATgiAAQgmABgdgcg");
	this.shape_20.setTransform(36.9,77.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOBWIAAiOIhEAAIAAgdIClAAIAAAdIhEAAIAACOg");
	this.shape_21.setTransform(96.6,77.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhOBWIAAirICdAAIAAAdIh/AAIAAApIBiAAIAAAbIhiAAIAAAtIB/AAIAAAdg");
	this.shape_22.setTransform(57.8,77.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA0BWIAAiOIhnAAIAACOIggAAIAAirICnAAIAACrg");
	this.shape_23.setTransform(77.4,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.8,102.8);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u67();
	this.instance.setTransform(-50,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-35,100,70);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(50,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,70);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(19.9,39.8,1,1,0,0,0,19.9,18.1);

	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(195.2,21.1,1,1,0,0,0,22.3,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.5,57.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(105.5,155.7,0.932,0.932,0,0,0,110,155.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,11.2,205,288.9);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(105.9,77.4,1,1,0,0,0,105.9,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,rotation:-7.3,x:98.5,y:80.9},19,cjs.Ease.get(-1)).to({scaleX:1.07,rotation:-15,x:90.7,y:84.5},20,cjs.Ease.get(1)).to({regX:105.8,regY:77.5,scaleX:1.04,rotation:-7.3,x:98.3,y:81.1},20,cjs.Ease.get(-1)).to({regX:105.9,regY:77.4,scaleX:1,rotation:0,x:105.9,y:77.4},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(280.1,230.3,1,1,0,0,0,280.1,104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,skewY:-1.8,x:280.2,y:239.2},19,cjs.Ease.get(-1)).to({scaleX:1,skewY:-3.7,x:280.1,y:248.6},20,cjs.Ease.get(1)).to({scaleX:1,skewY:-1.8,x:280.2,y:239.4},20,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:280.1,y:230.3},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560.3,334.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CBAA1").s().p("AgsKOQhvgPjfgnIhcgQQg/gMgRgLQgRgMA3gfQA5ggApABQgvgUg/AGQg6AFguAYQgDACgDgCQgDgCAAgEQADgjAigoQAngsAtgEQgYgLg1AGQglAEgrALQgFACgDgEQgEgFADgEQAphIBZgPQBLgMBfAeQhlizATjUQATjSB+irQBLhnBpgvQBpgvCKAGQDOAICVBVQCxBkAmC0QAMA6gCA8QgCA/gRA4QgaBWg5A4Qg/A+hbAMQhJADgmAEQhFAGghAcQgjAcgMAyQgJApAFA0QADAUAhBcQAdBOgJAZQgQAqhBARQgmAKgyAAQgsAAgzgIg");
	this.shape.setTransform(204.5,451.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#479D85").s().p("ADAHKQhZhthRgjQgrgTg5gKQgsgHg+gEQhAgEgjgOQgngPgTghQgohEArhkQAkhPBUhaQBphwByhZQBthTBigxIg8BwQhDB9ghA6QgvBTg2BmIAYACQAdAEAgAGQBFANAsASQAmAPA1AkQAgAUAaAjQAUAZAYAqQAOAaAGAfQAGAdgGABQgDAAgVgPQgagTgYgJQASAiAAArQAAAdgIAXQgDAKgHgHQgbgcgQgNQgUgQgcgQQAKAVACAoQADAggDAbQgBAGgFAAQgEAAgDgFg");
	this.shape_1.setTransform(139.7,273.8);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(302.9,260.6,1,1,0,0,0,226,405.4);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(271.7,291.7,1,1,0,0,0,271.7,204.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#479D85").s().p("AgKCfQgaAAgvhmQgohWgKgvQgHggAMgXQALgVAUgDQA7gKBHAYQBKAYAUAnQAeA6g+BbQg7BYguAAIAAAAg");
	this.shape_2.setTransform(382,250.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#479D85").s().p("AgrCiQgagEgfhrQgbhagEgxQgCggAPgVQAOgUAVAAQA7gBBDAiQBGAjAOApQAVA8hLBTQgeAhghAVQgcASgTAAIgGgBg");
	this.shape_3.setTransform(368.8,208.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#479D85").s().p("AggCJQgWgDgdhbQgYhLgEgpQgDgbAMgTQAMgQARgBQAzgDA5AcQA8AdANAiQATAyg+BIQg2BAglAAIgGgBg");
	this.shape_4.setTransform(358.1,165.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#479D85").s().p("AgqB5QgTgFgRhTQgOhEAAglQAAgYAMgOQALgNAPABQArAFAuAgQAxAgAHAgQAMAug6A2QgtAsgfAAQgGAAgFgCg");
	this.shape_5.setTransform(340,48.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#479D85").s().p("AgkCVQgYgFgdhkQgZhUgDgsQgDgeANgSQANgSASABQA1ABA8AiQBAAjANAnQATA3hCBJQg3A+gmAAIgKgBg");
	this.shape_6.setTransform(350.9,123.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#479D85").s().p("AgoB+QgTgFgUhWQgRhHgBglQAAgZALgPQALgOAQABQAtADAwAgQA0AhAJAhQAOAvg7A6QgwAvgfAAIgLgBg");
	this.shape_7.setTransform(342.8,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-192.7,543.4,858.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(48.1,29.7,1,1,0,0,0,48.1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,59.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(50,35,1,1,0,0,0,50,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-14.8,x:50.1},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-30,x:50},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.8,x:50.1},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:50},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,70);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(115,28.9,1,1,0,0,0,115,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.75},5,cjs.Ease.get(-1)).to({alpha:0.488},5,cjs.Ease.get(1)).to({alpha:0.711},4,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.6,4.4,147,43.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(115,19.4,0.958,0.958,0,0,0,120,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,5.9,219.3,28.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(110.6,29.1,1,1,0,0,0,84.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(110.5,29,1,1,0,0,0,110.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221.1,58);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ17();
	this.instance.setTransform(109.1,23.8,1,1,0,0,0,115,28.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(-1)).wait(70).to({alpha:0},6,cjs.Ease.get(-1)).wait(5));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ13копия();
	this.instance_1.setTransform(109.1,24.2,0.958,0.958,0,0,0,120,20.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(238).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(-1)).wait(28).to({alpha:0},6,cjs.Ease.get(-1)).wait(87));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(109.1,24.2,1,1,0,0,0,115,19.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).wait(78).to({alpha:0},5,cjs.Ease.get(-1)).wait(127));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(109.1,26.1,1,1,0,0,0,120,26.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(-1)).wait(84).to({alpha:0},5,cjs.Ease.get(-1)).wait(215));

	// Слой 1
	this.instance_4 = new lib.Символ14();
	this.instance_4.setTransform(109.1,26.1,1,1,0,0,0,120,26.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).wait(43).to({alpha:0},5,cjs.Ease.get(-1)).wait(310));

	// Слой 7
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(108.1,25,1,1,0,0,0,120,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(365));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-8,253.7,65.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Group();
	this.instance.setTransform(285.9,355.6,1,1,0,0,0,285.9,355.6);
	this.instance.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,571.9,711);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuyDRQgUgGgZgRQgzgfgOghQgNghANglQAKgdAagfQAcghAbgIQAQgFAkACIAuAEQAZADATAGQAyAQAXAiQAJAQAHAdQAFAagBARQgCAZgPAPIgPAOIgMAQQgIAMgYANQgaANgOADQgOAEgdAAQgnAAgSgFgAMaBFQhQgegcgxQgSghADgmQADgkAWgSIAVgOIAQgOQAOgNAigTQAXgMALgDQAMgDAeABIA7AAQAfAEAiAOQAZAKAQANQAaAXAEAeIACAXQABAJAHARQAEARgIAVQgFAOgNAUQgPAbgOAKQgJAHgNAFIgZAJQgnARgVAEQgNADgQAAQgkAAgtgQgAOUhlIgDAGQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAGgCIACgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAgBgBIgJgBg");
	this.shape.setTransform(108.5,28.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34).to({_off:false},0).to({_off:true},2).wait(49));

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(108.8,28.9,1,1,0,0,0,108.8,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({scaleY:0.81,y:28.1},0).wait(2).to({scaleY:1,y:28.9},0).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.5,57.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.setTransform(280.7,62.1,1,1,0,0,0,108.8,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(235.5,111.5,1,1,0,0,0,235.5,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,471,223);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(56.1,195,1,1,0,0,0,48.1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.5,x:61.8,y:201.3},24,cjs.Ease.get(-1)).to({regY:29.8,rotation:-20.2,x:69.3,y:209.9},25,cjs.Ease.get(1)).to({regY:29.7,scaleX:1,scaleY:1,rotation:-11.3,x:63.5,y:203.3},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:56.1,y:195},26,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(69.5,102.8,1,1,0,0,0,69.5,102.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-14.3,x:54,y:108.5},24,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-33.4,x:33.3,y:116.1},25,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-18.8,x:49.2,y:110.3},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:69.5,y:102.8},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,224.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(60.8,55.3,1,1,30,0,0,50,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:34.9,scaleX:1,scaleY:1,rotation:29.9,x:60.9,y:59.4},4,cjs.Ease.get(-1)).to({regY:35,scaleX:1,scaleY:1,rotation:30,x:60.8,y:64.6},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:29.9,x:60.9,y:60},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:60.8,y:55.3},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(64.3,73.3,1,1,0,0,0,54.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:77.4},4,cjs.Ease.get(-1)).to({y:82.6},5,cjs.Ease.get(1)).to({y:77.9},5,cjs.Ease.get(-1)).to({y:73.3},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.6,125.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ36();
	this.instance.setTransform(234.5,111.5,1,1,0,0,0,235.5,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:235.6,regY:111.6,scaleX:0.98,rotation:-1.5,x:238.4,y:117.6},19,cjs.Ease.get(-1)).to({regX:235.4,scaleX:0.95,rotation:-3.2,x:242.2,y:124.1},22,cjs.Ease.get(1)).to({regX:235.5,scaleX:0.98,rotation:-1.6,x:238.8,y:118.4},18,cjs.Ease.get(-1)).to({regY:111.5,scaleX:1,rotation:0,x:234.5,y:111.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(306.5,295.5,1,1,0,0,0,164.5,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:164.6,scaleY:1.03,rotation:1.3,x:302.3,y:294.5},19,cjs.Ease.get(-1)).to({regY:164.6,scaleY:1.07,rotation:3,x:297.6,y:293.4},22,cjs.Ease.get(1)).to({scaleY:1.04,rotation:1.5,x:301.8,y:294.4},18,cjs.Ease.get(-1)).to({regX:164.5,regY:164.5,scaleY:1,rotation:0,x:306.5,y:295.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,472,460);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.instance = new lib.Символ28();
	this.instance.setTransform(460.9,10.2,0.442,0.442,0,0,0,69.5,112.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(376.8,-38.1,0.447,0.431,0,0,0,205.7,229.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Режим изоляции
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(466.7,51.7,0.46,0.46,0,0,0,271.9,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Режим изоляции
	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(397.2,135.9,0.38,0.38,0,0,0,280.2,167.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.3,-156.9,307.3,395.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(120,149.2,0.42,0.42,0,0,0,285.9,355.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EC549").s().p("EgtWA/HMAAAh+OMBatAAAMAAAB+Og");
	this.shape.setTransform(120,200,0.413,0.495);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240.1,400);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D93A96").s().p("AgmDHIAAmOIBOAAIAAGOg");
	this.shape.setTransform(-134,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(8));

	// Слой 4
	this.instance = new lib.Символ7();
	this.instance.setTransform(120,220,1,1,0,0,0,110.5,29);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:200,alpha:1},4).to({y:220,alpha:0},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,0,378,400);


(lib.Символ42копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(-219.3,139.8,0.867,0.867,0,0,0,31.4,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-17.2,266.6,342.8);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(-63.7,122.3,0.403,0.403,0,0,0,60.5,62.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({regX:60.4,regY:62.6},0).to({regX:60.3,regY:62.7,x:-25.9,y:120.2},6,cjs.Ease.get(-1)).to({regX:60.5,x:24.4,y:117.3},8,cjs.Ease.get(1)).wait(15).to({regY:62.8,rotation:-15,x:47.7,y:125.4},4).to({regX:60.6,regY:63,rotation:0,y:125.5},3).to({regX:60.5,regY:62.8,rotation:-15,y:125.4},2).to({regX:60.6,regY:63,rotation:0,y:125.5},3).to({regX:60.5,regY:62.8,rotation:-15,y:125.4},2).to({regY:62.7,rotation:0,x:24.4,y:117.3},4).wait(7).to({regY:62.8,rotation:-15,x:90.2,y:119.8},4).to({regX:60.6,regY:63,rotation:0,y:119.9},3).to({regX:60.5,regY:62.8,rotation:-15,y:119.8},2).to({regX:60.6,regY:63,rotation:0,y:119.9},3).to({regX:60.5,regY:62.8,rotation:-15,y:119.8},2).to({regY:62.7,rotation:0,x:24.4,y:117.3},4).wait(6).to({regY:62.8,rotation:-15,x:47.7,y:125.4},4).to({regX:60.6,regY:63,rotation:0,y:125.5},3).to({regX:60.5,regY:62.8,rotation:-15,y:125.4},2).to({regX:60.6,regY:63,rotation:0,y:125.5},3).to({regX:60.5,regY:62.8,rotation:-15,y:125.4},2).to({regY:62.7,rotation:0,x:24.4,y:117.3},4).wait(88));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(-219.3,139.8,0.867,0.867,0,0,0,31.4,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-17.2,354.7,342.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.setTransform(-55.3,-22.1,0.405,0.405,30,0,0,49.7,35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(233).to({_off:false},0).to({regX:49.9,regY:34.8,rotation:29.9,x:18.9,y:-5.9},7,cjs.Ease.get(-1)).to({regX:49.8,regY:34.9,rotation:30,x:114.3,y:14.8},9,cjs.Ease.get(1)).to({_off:true},1).wait(115));

	// Слой 3
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(-53.9,-14.7,0.405,0.405,0,0,0,54.3,52);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(233).to({_off:false},0).to({regY:51.8,x:20.3,y:1.4},7,cjs.Ease.get(-1)).to({regY:52.1,x:115.7,y:22.1},9,cjs.Ease.get(1)).wait(107).to({regY:52,y:17.6},0).to({regY:51.8,x:-10.7},3,cjs.Ease.get(-1)).to({regY:52,x:-179.3},5,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(-132,125,1,1,0,0,0,110,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(141).to({x:13},10,cjs.Ease.get(-1)).to({x:158},10,cjs.Ease.get(1)).wait(195).to({x:55.2},3,cjs.Ease.get(-1)).to({x:-82},5,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.txt = new lib.Символ5();
	this.txt.setTransform(166.9,280,0.949,0.949,0,0,0,110.1,26.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(365));

	// Слой 1
	this.instance_3 = new lib.Символ42();
	this.instance_3.setTransform(93.7,154.3,1,1,0,0,0,23.7,154.3);

	this.instance_4 = new lib.Символ42копия();
	this.instance_4.setTransform(323.7,154.3,1,1,0,0,0,23.7,154.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({regX:23.8,regY:154.2,scaleX:1.22,scaleY:1.22,x:83.5,y:154.4},40).wait(92).to({x:259.9},10,cjs.Ease.get(-1)).to({x:436.5},10,cjs.Ease.get(1)).to({_off:true},195).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(356).to({_off:false},0).to({x:225.2},3,cjs.Ease.get(-1)).to({x:93.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239,-18.8,575.6,344.5);


// stage content:



(lib.asepta_240400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		this.pop_up.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		this.pop_up.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(120,200);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ32(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// web
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(194.3,20.9,1,1,0,0,0,38.7,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// pop_up
	this.pop_up = new lib.Символ11();
	this.pop_up.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.pop_up).wait(1));

	// logo
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(43.8,38.9,0.551,0.551,0,0,0,62,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 2
	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(49.9,244.8,1,1,0,0,0,93.7,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,200,575.6,416.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;