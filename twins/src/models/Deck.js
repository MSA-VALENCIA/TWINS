import {bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion} from './Card'
class Deck {
    constructor(cards){
        this.cards = cards;
        this.havePairs = false;
    }

    createPairs () {
        if (!this.havePairs) {
            this.cards = cards.push(cards);
            this.havePairs = true;
        }
    }
}

animals = (new Deck ([bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion])).createPairs();

export default {Deck, animals}