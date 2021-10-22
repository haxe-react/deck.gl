package react.deck_gl;

import haxe.Constraints;
import react.deck_gl.Layer;

@:jsRequire('@deck.gl/layers', 'IconLayer')
extern class IconLayer<T> extends Layer<IconLayerOptions<T>> {}

typedef IconLayerOptions<T> = {
	> BasicProps<T>,
	
	?sizeScale:Float,
	?sizeUnits:String,
	?sizeMinPixels:Float,
	?sizeMaxPixels:Float,
	?fp64:Bool,
	?billboard:Bool,
	
	?getIcon:Function,
	?getPosition:Function,
	?getSize:Function,
	?getColor:Function,
	?getAngle:Function,
}