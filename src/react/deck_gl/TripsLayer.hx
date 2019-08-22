package react.deck_gl;

import haxe.Constraints;
import haxe.extern.EitherType;
import react.deck_gl.Layer;
import react.deck_gl.PathLayer;

@:jsRequire('@deck.gl/geo-layers', 'TripsLayer')
extern class TripsLayer<T> extends Layer<TripsLayerOptions<T>> {}

typedef TripsLayerOptions<T> = {
	> PathLayerOptions<T>,
	
	?currentTime:Float,
	?trailLength:Float,
	?getPath:Function,
	?getTimestamps:Function,
}