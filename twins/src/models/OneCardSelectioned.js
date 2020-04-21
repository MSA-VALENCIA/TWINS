import NoneCardSelectioned from './NoneCardSelectioned'
import StateGame from './StateGame'

class OneCardSelectioned extends StateGame {
    constructor() {
        super()
    }

    handle(game, index, viewFunctions) {
        let gamePunctuation = game.getGamePunctuation
        let deck = game.getDeck
        let card = deck.getCard(index)
        card.turn()
        card.select()
        let selectedCards = deck.getSelectedCards();
        let firstCard = selectedCards[0]
        let secondCard = selectedCards[1]

        if (firstCard.arePair(secondCard)) {
            firstCard.pair()
            secondCard.pair()
            game.foundedPair()
            gamePunctuation.addPairedPoints()
        } else {
            if(firstCard.getTurnedAroundAtLeastOnce || secondCard.getTurnedAroundAtLeastOnce){
                gamePunctuation.mistake()
                gamePunctuation.substractNotPairedPenaltyWithMistakes()
            }
            else gamePunctuation.substractNotPairedPenalty()
            firstCard.turn()
            secondCard.turn()
        }
        firstCard.select()
        secondCard.select()
        viewFunctions.restartTimer()
        if (game.allPaired()) {
            viewFunctions.clearTimer()
            console.log('Todas emparejadas') //Aqui se tiene que llamara a la ventana de final
        }
        else game.setState = new NoneCardSelectioned()
        viewFunctions.updateGame(game)
    }
}

export default OneCardSelectioned