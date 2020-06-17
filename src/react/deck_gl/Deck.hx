package react.deck_gl;

import react.ReactComponent;
import react.map_gl.ViewState;
import haxe.extern.EitherType;

@:jsRequire('@deck.gl/react', 'default')
extern class Deck extends ReactComponentOfProps<DeckProps> {}

typedef DeckProps = {
	?viewState:ViewState,
	?controller:EitherType<Controller, Bool>,
	?layers:Array<Layer<{}>>,
	?children:ReactFragment,
	?onViewStateChange:{viewState:ViewState}->Void,
	?onClick:PickingInfo<{}>->Dynamic->Void,
}

