class Game {
    constructor(index, image){
        this.index = index;
        this.image = image;
        this.turned = false;
        this.paired = false;
        
    }

    get index () {
        return this.index;
    }

    get image () {
        return this.image;
    }

}

