class OneCardSelectioned extends StateGame {
    constructor(){
        super();
    }

    handle(game, index) {
        if (game.allPaired()) game.state(new AllCardPaired());
        else game.state(new NoneCardSelectioned());
    } 
}