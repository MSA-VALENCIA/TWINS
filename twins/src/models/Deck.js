import Card from '../models/Card';
import { bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion } from './Card';
class Deck {
    constructor(cards) {
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
        this.cards = this.cards.sort(function () { return Math.random() - 0.5 })
    }

    asignIndex(){
        let i = 0
        this.cards.forEach(card => {
            card.setIndex = i
            i++
        });
    }

    prepareDeck() {
        this.createPairs();
        this.shuffle();
        this.asignIndex()
        return this;
    }

    getSelectedCards() {
        let selectedCards = [];
        this.cards.forEach(card => {
            if (card.getSelected) selectedCards.push(card);
        });
        return selectedCards;
    }

}

let animals = new Deck([bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion]);

export { Deck, animals };
