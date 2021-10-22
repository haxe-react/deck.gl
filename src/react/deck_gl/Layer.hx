package react.deck_gl;

import haxe.Constraints;

@:jsRequire('@deck.gl/core', 'Layer')
// @:autoBuild(react.deck_gl.Macro.addHxx())
extern class Layer<P:BasicPropsWithoutData> {
	final id:String;
	function new(props:P);
	function shouldUpdateState(obj:UpdateParams<P>):Bool;
}

typedef UpdateParams<P> = {
	props:P,
	oldProps:P,
	context:Any,
	oldContext:Any,
	changeFlags:ChangeFlags
}

typedef ChangeFlags = {
	dataChanged:Bool,
	propsChanged:Bool,
	viewportChanged:Bool,
	somethingChanged:Bool,
	propsOrDataChanged:Bool,
	stateChanged:Bool,
	updateTriggersChanged:Bool,
}

typedef BasicProps<Data> = {
	> BasicPropsWithoutData,
	?data:Data,
}


typedef BasicPropsWithoutData = {
	?id:String,
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