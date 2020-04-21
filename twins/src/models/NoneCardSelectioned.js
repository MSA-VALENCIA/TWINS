import OneCardSelectioned from './OneCardSelectioned';
import StateGame from './StateGame';

class NoneCardSelectioned extends StateGame {
    constructor() {
        super();
    }

    handle(game, index, viewFunctions) {
        deck = game.getDeck;
        card = deck.getCard(index);
        card.turn();
        card.select();
        game.setState = new OneCardSelectioned();
        viewFunctions.updateGame(game);
    }

}

export default NoneCardSelectioned