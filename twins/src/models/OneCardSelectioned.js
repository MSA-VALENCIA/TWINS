import StateGame from './StateGame'
import NoneCardSelectioned from './NoneCardSelectioned'
import AllCardPaired from './AllCardPaired'

class OneCardSelectioned extends StateGame {
    constructor(){
        super();
    }

    handle(game, index, flip) {
        deck = game.getDeck
        deck.getCard(index).turn();
        turnedCards = deck.getTurnedCards();
        firstCard = turnedCards[0];
        secondCard = turnedCards[1];
        if (firstCard.arePair(secondCard)) {
            firstCard.pair();
            secondCard.pair();
        } else {
            setTimeout(function(){
                flip(firstCard.getIndex);
                flip(secondCard.getIndex);
            }, 2000);
        }
        firstCard.turn();
        secondCard.turn();
        if (game.allPaired()) game.setState = new AllCardPaired();
        else game.setState = new NoneCardSelectioned();
    } 

    toString() {
        return 'One'
    }
}

export default OneCardSelectioned