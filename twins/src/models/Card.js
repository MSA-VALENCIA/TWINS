class Card {
    constructor(image){
        this.image = image; 
        
    }

    get getImage() {
        return this.image;
    }

}

let bear = new Card (require('../../assets/images/cards/bear.png'));
let bull = new Card (require('../../assets/images/cards/bull.png'));
let cat = new Card (require('../../assets/images/cards/cat.png'));
let chicken = new Card (require('../../assets/images/cards/chicken.png'));
let cocodrile = new Card (require('../../assets/images/cards/cocodrile.png'));
let dog = new Card (require('../../assets/images/cards/dog.png'));
let dove = new Card (require('../../assets/images/cards/dove.png'));
let goat = new Card (require('../../assets/images/cards/goat.png'));
let hippopotamus = new Card (require('../../assets/images/cards/hippopotamus.png'));
let kangaroo = new Card (require('../../assets/images/cards/kangaroo.png'));
let koala = new Card (require('../../assets/images/cards/koala.png'));
let lion = new Card (require('../../assets/images/cards/lion.png'));

export { bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion }

