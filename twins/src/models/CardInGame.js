class CardInGame extends Card {
    constructor(image, index) {
        super(image);
        this.index = index;
        this.turned = false;
        this.paired = false;  
    }

    get index () {
        return this.index;
    }

    get turned () {
        return this.turned;
    }

    get paired () {
        return this.paired;
    }

    arePair(card) {
        return this.image == card.image && this.index != card.index;
    }
}