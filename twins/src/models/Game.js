import { animals } from './Deck'
import NoneCardSelectioned from './NoneCardSelectioned'
import GamePunctuation from './GamePunctuation'

class Game {
    constructor(maxCards, deck) {
        this.cardsPaired = 0
        this.maxCards = maxCards
        this.deck = deck.prepareDeck()
        this.state = new NoneCardSelectioned()
        this.gamePunctuation = new GamePunctuation()
    }

    allPaired() {
        return this.cardsPaired == this.maxCards
    }

    request(index, updateGame,restartTimer) {
        return this.state.handle(this, index, updateGame,restartTimer)
    }

    get getState() {
        return this.state
    }

    set setState(state) {
        this.state = state
    }

    get getDeck() {
        return this.deck
    }

    foundedPair () {
        this.cardsPaired += 2
    }

}

let defaultGame = new Game(24, animals)

export { Game, defaultGame }

