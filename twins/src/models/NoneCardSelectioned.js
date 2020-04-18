import StateGame from './StateGame'
import OneCardSelectioned from './OneCardSelectioned'

class NoneCardSelectioned extends StateGame {
    constructor(){
        super();
    }

    handle(game, index, flip) {
        game.getDeck.getCard(index).turn();
        game.setState = new OneCardSelectioned();
    } 

    toString() {
        return 'None'
    }
}

export default NoneCardSelectioned