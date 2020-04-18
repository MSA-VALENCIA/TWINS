import {bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion} from './Card'
import Card from '../models/Card';
class Deck {
    constructor(cards){
        this.cards = cards;
        this.havePairs = false;
        
    }

    get getCards() {
        return this.cards;
    }

    getCard(index) {
        return this.cards[index];
    }

    createPairs() {
        if (!this.havePairs) {
            this.cards.forEach(card => {
                let aux = new Card(card.getImage)
                this.cards.push(aux)
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

    getTurnedCards() {
        let turnedCards = [];
        this.cards.forEach(card => {
            if(card.getTurned) turnedCards.push(card);
        });
        return turnedCards;
    }

}

let animals = new Deck ([bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion]);

export { Deck, animals }