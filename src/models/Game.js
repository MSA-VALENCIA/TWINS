import NoneCardSelectioned from './NoneCardSelectioned'
import GamePunctuation from './GamePunctuation'

class Game {
    constructor(maxCards, deck) {
        this.cardsPaired = 0
        this.maxCards = maxCards
        deck.createPairs()
        this.deck = deck
        this.state = new NoneCardSelectioned()
        this.gamePunctuation = new GamePunctuation()
    }

    allPaired() {return this.cardsPaired == this.maxCards}

    request(index, viewFunctions) {return this.state.handle(this, index, viewFunctions)}

    get getState() {return this.state}

    set setState(state) {this.state = state}

    get getDeck() {return this.deck}

    get getGamePunctuation() {return this.gamePunctuation}

    foundedPair () {this.cardsPaired += 2}

    restartGame(){
        this.cardsPaired = 0
        this.deck.prepareDeck()
        this.state = new NoneCardSelectioned()
        this.gamePunctuation = new GamePunctuation()
        return this
    }

} export default Game

export { Game };

