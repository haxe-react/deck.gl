package react.deck_gl;

import haxe.Constraints;
import react.ReactComponent;

@:jsRequire('@deck.gl/core', 'Layer')
extern class Layer<P:{}> extends ReactComponentOfProps<P>  {
	var id:String;
	
	function new(props:P);
	
	function shouldUpdateState(obj:{
		props:P,
		oldProps:P,
		context:Any,
		oldContext:Any,
		changeFlags:ChangeFlags
	}):Bool;
	
	
	// ReactComponent rip-off
	// var state:Any;
	// var context:Any;
	// var props:P;
	// function setState(v:Any):Void;
	static inline function fromHxx():Dynamic throw 'Layer cannot be rendered directly';
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

typedef BaseLayerOptions<Data> = {
	> BaseLayerOptionsWithoutData,
	?data:Data,
}


typedef BaseLayerOptionsWithoutData = {
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