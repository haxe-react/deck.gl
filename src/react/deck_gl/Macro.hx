package react.deck_gl;

import haxe.macro.Context;

using Lambda;
using tink.MacroApi;

class Macro {
	// generally this is not needed as the constructor should serve the same purpose
	public static function addHxx() {
		final fields = Context.getBuildFields();

		if (Context.defined('tink_hxx')) {
			if (fields.exists(f -> f.name == 'fromHxx'))
				return null;

			final cls = Context.getLocalClass().get();

			fields.push({
				access: [APublic, AStatic, AInline],
				name: 'fromHxx',
				kind: FFun({
					args: [
						{
							name: 'attrs',
							type: {
								final ct = Context.getLocalType().toComplex();
								(macro {
									function get<A:react.deck_gl.Layer.BasicPropsWithoutData>(layer:react.deck_gl.Layer<A>):A
										throw 0;
									get((null : $ct));
								}).typeof().sure().toComplex();
							}
						}
					],
					ret: macro:react.ReactComponent.ReactSingleFragment,
					expr: {
						final id = cls.isPrivate ? macro $i{cls.name} : macro $p{'${cls.module}.${cls.name}'.split('.')};
						macro return cast react.React.createElement(cast $id, attrs);
					},
					params: [for (p in cls.params) p.toDecl()],
				}),
				pos: Context.currentPos(),
			});

			// trace(new haxe.macro.Printer().printField(fields[fields.length - 1]));
		}

		return fields;
	}
}
