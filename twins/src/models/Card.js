
class Card {
    constructor(image) {
        this.image = image
        this.index = 0
        this.selected = false
        this.turned = false
        this.paired = false
        this.turnedAroundAtLeastOnce = false
    }

    get getImage() {return this.image}

    get getIndex() {return this.index}

    set setIndex(index) {this.index = index}

    get getTurned() {return this.turned}

    turn() {
        if(!this.turnedAroundAtLeastOnce && this.turned == true)this.turnedAroundAtLeastOnce=true
        this.turned = !this.turned
    }

    get getSelected() {return this.selected}

    select() {this.selected = !this.selected}

    get getPaired() {return this.paired}

    pair() {this.paired = true}

    get getTurnedAroundAtLeastOnce() {return this.turnedAroundAtLeastOnce}

    arePair(card) {return this.image == card.getImage && this.index != card.getIndex}

}

let bear = new Card(require('../../assets/images/cards/bear.png'))
let bull = new Card(require('../../assets/images/cards/bull.png'))
let cat = new Card(require('../../assets/images/cards/cat.png'))
let chicken = new Card(require('../../assets/images/cards/chicken.png'))
let cocodrile = new Card(require('../../assets/images/cards/cocodrile.png'))
let dog = new Card(require('../../assets/images/cards/dog.png'))
let dove = new Card(require('../../assets/images/cards/dove.png'))
let goat = new Card(require('../../assets/images/cards/goat.png'))
let hippopotamus = new Card(require('../../assets/images/cards/hippopotamus.png'))
let kangaroo = new Card(require('../../assets/images/cards/kangaroo.png'))
let koala = new Card(require('../../assets/images/cards/koala.png'))
let lion = new Card(require('../../assets/images/cards/lion.png'))

export { bear, bull, cat, chicken, cocodrile, dog, dove, goat, hippopotamus, kangaroo, koala, lion }

export default Card


