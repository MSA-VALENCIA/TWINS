import {animals} from './Deck'
import Deck from './Deck'
import StateGame from './StateGame'

class Game {
    constructor(maxCards, deck){
        this.cardsPaired = 0;
        this.maxCards = maxCards;          
        this.deck = deck.prepareDeck();
        this.state = new StateGame();
        
    }

    allPaired() {
        return this.cardsPaired == this.maxCards;
    }

    request() {
        this.state.handle(this);
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

} 

let defaultGame = new Game(24, animals)

export { Game, defaultGame }

