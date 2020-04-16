import {animals} from './Deck'
import Deck from './Deck'

class Game {
    constructor(maxCards, deck){
        this.cardsPaired = 0;
        this.maxCards = maxCards;
        this.deck = deck.createPairs();
        this.state = new StateGame();
    }

    allPaired () {
        return this.cardsPaired == this.maxCards;
    }

    request () {
        this.state.handle(this);
    }
    
    get state () {
        return this.state;
    }

    set state (state) {
        this.state = state;
    }

    get deck () {
        return this.deck;
    }

} 

export default Game

export let defaultGame = new Game(24, animals)