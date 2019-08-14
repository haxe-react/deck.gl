package react.deck_gl;

typedef PickingInfo<T:{}> = {
	x:Float,
	y:Float,
	coordinate:Array<Float>, // [lng, lat]
	index:Int,
	layer:Layer<T>,
	object:Dynamic,
}

