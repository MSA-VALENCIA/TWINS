import NoneCardSelectioned from '../models/NoneCardSelectioned';

export let exceededTime = (game, updateGame) => {
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

export let restartTimer = (timer) => {timer.restartTimer()}

export let clearTimer = (timer) => {timer.clearTimer()}