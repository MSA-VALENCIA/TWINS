class NoneCardSelectioned extends StateGame {
    constructor(){
        super();
    }

    handle (game, index) {

        game.state(new OneCardSelectioned());
    } 
}