package react.deck_gl;

import haxe.Constraints;
import haxe.extern.EitherType;
import react.deck_gl.Layer;

@:jsRequire('@deck.gl/layers', 'PathLayer')
extern class PathLayer<T> extends Layer<PathLayerOptions<T>> {}

typedef PathLayerOptions<T> = {
	> BasicProps<Array<T>>,
	
	?widthUnits:String,
	?widthScale:Float,
	?widthMinPixels:Float,
	?widthMaxPixels:Float,
	?rounded:Bool,
	?billboard:Bool,
	?miterLimit:Float,
	?dashJustified:Bool,

	?getPath:Function,
	?getColor:Function,
	?getWidth:Function,
	?getDashArray:Function,
}

