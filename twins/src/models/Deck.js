import {bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion} from './Card'
class Deck {
    constructor(cards){
        this.cards = cards;
        this.havePairs = false;
        
    }

    get getCards() {
        return this.cards;
    }

    createPairs() {
        if (!this.havePairs) {
            this.cards.forEach(card => {
                this.cards.push(card)
            });
            this.havePairs = true;
        }
    }

    shuffle() {
        this.cards = this.cards.sort(function() {return Math.random() - 0.5})
    }

    prepareDeck() {
        this.createPairs();
        this.shuffle();
        return this;
    }

}

let animals = new Deck ([bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion]);

export { Deck, animals }