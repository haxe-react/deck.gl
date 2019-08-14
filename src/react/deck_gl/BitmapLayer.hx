package react.deck_gl;

import haxe.Constraints;
import haxe.extern.EitherType;
import react.deck_gl.Layer;

@:jsRequire('@deck.gl/layers', 'BitmapLayer')
extern class BitmapLayer extends Layer<BitmapLayerOptions> {}

typedef BitmapLayerOptions = {
	> BaseLayerOptionsWithoutData,
	
	?image:Bitmap,
	?bounds:Array<Float>, // [left, bottom, right, top]
	?desaturate:Float,
	?transparentColor:Array<Int>, // The color to use for transparent pixels, in [r, g, b, a]. Each component is in the [0, 255] range.
	?tintColor:Array<Int>, // The color to tint the bitmap by, in [r, g, b]. Each component is in the [0, 255] range.
}

private abstract Bitmap(Dynamic) 
	from String to String 
	from js.html.webgl.Texture to js.html.webgl.Texture 
	from js.html.ImageElement to js.html.ImageElement 
	from js.html.CanvasElement to js.html.CanvasElement 
	from js.html.VideoElement to js.html.VideoElement 
{}