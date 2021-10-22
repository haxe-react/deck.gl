package react.deck_gl;

import react.deck_gl.Layer;

typedef PickingInfo<T:BasicPropsWithoutData> = {
	x:Float,
	y:Float,
	coordinate:Array<Float>, // [lng, lat]
	index:Int,
	layer:Layer<T>,
	object:Dynamic,
}

