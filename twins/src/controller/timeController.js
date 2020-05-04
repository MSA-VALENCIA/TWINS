import NoneCardSelectioned from '../models/NoneCardSelectioned';

export let exceededTicTime = (game, updateGame) => {
    let deck = game.getDeck
    let selectedCards = deck.getSelectedCards()
    selectedCards.forEach(card => {
        card.select()
        card.turn()
    });
    game.getGamePunctuation.substractExceededTimePenalty()
    game.setState = new NoneCardSelectioned()
    updateGame(game)
}