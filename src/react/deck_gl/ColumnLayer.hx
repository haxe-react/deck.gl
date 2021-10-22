package react.deck_gl;

import haxe.Constraints;
import react.deck_gl.Layer;

@:jsRequire('@deck.gl/layers', 'ColumnLayer')
extern class ColumnLayer<T> extends Layer<ColumnLayerOptions<T>> {}

typedef ColumnLayerOptions<T> = {
	> BasicProps<T>,

	?diskResolution:Int,
	?radius:Int,
	?extruded:Bool,
	?pickable:Bool,
	?elevationScale:Int,
	?getPosition:Array<Float>,
	?getFillColor:Array<Float>,
	?getLineColor:Array<Int>,
	?getElevation:Float
}
