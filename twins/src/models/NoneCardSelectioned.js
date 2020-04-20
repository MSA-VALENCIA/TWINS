import StateGame from './StateGame'
import OneCardSelectioned from './OneCardSelectioned'

class NoneCardSelectioned extends StateGame {
    constructor() {
        super();
    }

    handle(game, index, flipCards) {

        console.log('none')

        deck = game.getDeck
        deck.getCard(index).turn();
        let flipedCards = [];
        let clickableCards = [];
        deck.getCards.forEach(card => {
            if (card.getPaired) {
                flipedCards.push(true);
                clickableCards.push(false);
            } else if (card.getTurned) {
                flipedCards.push(true);
                clickableCards.push(false);
            } else {
                flipedCards.push(false);
                clickableCards.push(true);
            }
        });

        console.log('flipCards')
        console.log(flipedCards)
        console.log(clickableCards)

        flipCards(flipedCards, clickableCards);
        game.setState = new OneCardSelectioned();
        return false;
    }

    toString() {
        return 'None'
    }
}

export default NoneCardSelectioned