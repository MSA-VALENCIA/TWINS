import StateGame from './StateGame'
import NoneCardSelectioned from './NoneCardSelectioned'
import AllCardPaired from './AllCardPaired'
import FlipCard from 'react-native-card-flip';

class OneCardSelectioned extends StateGame {
    constructor() {
        super();
    }

    handle(game, index, flipCards) {

        console.log('one')

        deck = game.getDeck
        deck.getCard(index).turn();
        turnedCards = deck.getTurnedCards();
        firstCard = turnedCards[0];
        secondCard = turnedCards[1];

        if (firstCard.arePair(secondCard)) {
            firstCard.pair();
            secondCard.pair();
            console.log(firstCard.getPaired)
            console.log(secondCard.getPaired)
        } else {
            let flipedCards = [];
            let clickableCards = [];
            deck.getCards.forEach(card => {
                if (card.getPaired) {
                    flipedCards.push(true);
                    clickableCards.push(false);
                }else if (card.getTurned) {
                    flipedCards.push(false);
                    clickableCards.push(true);
                } else {
                    flipedCards.push(false);
                    clickableCards.push(true);
                }
            });

            console.log('flipCards')

            console.log(flipedCards)
            console.log(clickableCards)
            flipCards(flipedCards, clickableCards);
        }
        firstCard.turn();
        secondCard.turn();
        if (game.allPaired()) game.setState = new AllCardPaired();
        else game.setState = new NoneCardSelectioned()
    }

    toString() {
        return 'One'
    }
}

export default OneCardSelectioned