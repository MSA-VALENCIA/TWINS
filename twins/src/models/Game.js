import { animals } from './Deck';
import NoneCardSelectioned from './NoneCardSelectioned';

class Game {
    constructor(maxCards, deck) {
        this.cardsPaired = 0;
        this.maxCards = maxCards;
        this.deck = deck.prepareDeck();
        this.state = new NoneCardSelectioned();

    }

    allPaired() {
        return this.cardsPaired == this.maxCards;
    }

    request(index, updateGame) {
        return this.state.handle(this, index, updateGame);
    }

    get getState() {
        return this.state;
    }

    set setState(state) {
        this.state = state;
    }

    get getDeck() {
        return this.deck;
    }

    foundedPair () {
        this.cardsPaired += 2;
    }

}

export { Game };

