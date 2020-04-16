class Card {
    constructor(image){
        this.image = image;     
    }

    get image () {
        return this.image;
    }

}

bear = new Card ('assets/images/cards/bear.png');
bull = new Card ('assets/images/cards/bull.png');
cat = new Card ('assets/images/cards/cat.png');
chicken = new Card ('assets/images/cards/chicken.png');
cocodrile = new Card ('assets/images/cards/cocodrile.png');
dog = new Card ('assets/images/cards/dog.png');
dove = new Card ('assets/images/cards/dove.png');
goat = new Card ('assets/images/cards/goat.png');
hippopotamus = new Card ('assets/images/cards/hippopotamus.png');
kangaroo = new Card ('assets/images/cards/kangaroo.png');
koala = new Card ('assets/images/cards/koala.png');
lion = new Card ('assets/images/cards/lion.png');

export default { bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion }

