package react.deck_gl;

import haxe.Constraints;
import react.deck_gl.Layer;

@:jsRequire('@deck.gl/core', 'CompositeLayer')
extern class CompositeLayer<Props:{}> extends Layer<Props> {
	function renderLayers():Array<Layer<{}>>;
	function getPickingInfo(pickParams:{info:PickInfo, mode:String, sourceLayer:Layer<{}>}):PickingInfo<{}>;
	function getSubLayerProps<Out>(subLayerProps:Out):Out;
	function shouldRenderSubLayer<Data>(id:String, data:Data):Bool;
	function getSubLayerClass(id:String, DefaultLayerClass:Any):Function;
	static inline function fromHxx():Dynamic throw 'CompositeLayer cannot be rendered directly';
}

typedef PickInfo = {
	x:Float,
	y:Float,
	coordinate:Array<Float>, // [lng, lat]
	color:Array<Float>, // [r, g, b, a]
	index:Int,
	picked:Bool,
}