package react.deck_gl;

import geojson.*;
import haxe.extern.EitherType;
import react.deck_gl.Layer;

@:jsRequire('@deck.gl/layers', 'GeoJsonLayer')
extern class GeoJsonLayer extends Layer {
	function new(opt:GeoJsonLayerOptions);
}

typedef GeoJsonLayerOptions = {
	> BaseLayerOptions<FeatureCollection<Geometry>>, // actually can be any geojson
	
	?mode:String,
	
	?filled:Bool,
	?stroked:Bool,
	?extruded:Bool,
	?wireframe:Bool,
	
	?lineWidthUnits:Float,
	?lineWidthScale:Float,
	?lineWidthMinPixels:Int,
	?lineWidthMaxPixels:Int,
	?lineJointRounded:Bool,
	?lineMiterLimit:Float,
	
	?elevationScale:Float,
	
	?pointRadiusScale:Float,
	?pointRadiusMinPixels:Int,
	?pointRadiusMaxPixels:Int,
	?lineDashJustified:Bool,
	
	?fp64:Bool,
	?material:Dynamic,
	
	?getLineColor:EitherType<Array<Int>, Feature<Geometry>->Array<Int>>,
	?getFillColor:EitherType<Array<Int>, Feature<Geometry>->Array<Int>>,
	?getRadius:EitherType<Float, Feature<Geometry>->Float>,
	?getLineWidth:EitherType<Float, Feature<Geometry>->Bool->String->Float>,
	?getElevation:EitherType<Float, Feature<Geometry>->Float>,
	?getLineDashArray:EitherType<Array<Int>, Feature<Geometry>->Array<Int>>,
}