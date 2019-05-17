package react.deck_gl;

import haxe.Constraints;

extern class Layer {
	var id:String;
}

typedef BaseLayerOptions<Data> = {
	?id:String,
	?data:Data,
	?visible:Bool,
	?opacity:Float,
	?pickable:Bool,
	?onHover:Function,
	?onClick:Function,
	?onDragStart:Function,
	?onDrag:Function,
	?onDragEnd:Function,
	?highlightColor:Array<Int>,
	?highlightedObjectIndex:Int,
	?autoHighlight:Bool,
	?coordinateSystem:Float,
	?coordinateOrigin:Array<Float>,
	?wrapLongitude:Bool,
	?modelMatrix:Array<Float>,
	?dataComparator:Function,
	?numInstances:Float,
	?updateTriggers:Dynamic,
	?parameters:Function,
	?getPolygonOffset:Function,
	?transitions:Dynamic,
}