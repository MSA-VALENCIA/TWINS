import OneCardSelectioned from './OneCardSelectioned';
import StateGame from './StateGame';

class NoneCardSelectioned extends StateGame {
    constructor() {
        super();
    }

    handle(game, index, updateGame) {

        console.log('none')

        deck = game.getDeck;
        card = deck.getCard(index);
        card.turn();
        card.select();
        game.setState = new OneCardSelectioned();
        updateGame(game);
    }

}

export default NoneCardSelectioned