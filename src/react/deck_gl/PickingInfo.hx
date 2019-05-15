package react.deck_gl;

typedef PickingInfo = {
	layer:Layer,
	index:Int,
	object:Dynamic,
	x:Float,
	y:Float,
	coordinate:Array<Float>, // [lng, lat]
}