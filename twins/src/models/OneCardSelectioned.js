import NoneCardSelectioned from './NoneCardSelectioned';
import StateGame from './StateGame';

class OneCardSelectioned extends StateGame {
    constructor() {
        super();
    }

    handle(game, index, updateGame) {

        console.log('one')

        deck = game.getDeck
        card = deck.getCard(index);
        card.turn();
        card.select();
        selectedCards = deck.getSelectedCards();
        firstCard = selectedCards[0];
        secondCard = selectedCards[1];

        if (firstCard.arePair(secondCard)) {
            firstCard.pair();
            secondCard.pair();
            console.log(firstCard.getPaired)
            console.log(secondCard.getPaired)
        } else {
            firstCard.turn();
            secondCard.turn();
        }
        firstCard.select();
        secondCard.select();
        if (game.allPaired()) console.log('Todas enparejadas') //Aqui se tiene que llamara a la ventana de final
        else game.setState = new NoneCardSelectioned()
        updateGame(game);
    }
}

export default OneCardSelectioned