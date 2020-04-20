import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import GridComponent from 'react-native-grid-component';
import Card from '../components/card';

class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game: this.props.game,
            cards: this.props.game.getDeck.getCards,
            flipedCards: this.props.game.getDeck.getCards.map((card) => { return false }),
            clickableCards: this.props.game.getDeck.getCards.map((card) => { return true })
        };
        this.flipCards = this.flipCards.bind(this)
    }

    selected = (index) => {

        console.log('request')

        this.state.game.request(index, this.flipCards);
    }

    /*UNSAFE_componentWillMount() {
        let flipedCards1 = this.state.cards.map((card) => { return false })
        let clickableCards1 = this.state.cards.map((card) => { return true })

        this.setState({
            flipedCards: flipedCards1,
            clickableCards: clickableCards1
        })
    }*/

    flipCards (newFlipedCards, newClickableCards) {

        //this.setState({flipedCards: newFlipedCards, clickableCards: newClickableCards})

        console.log(this.state.flipedCards)
        console.log(this.state.clickableCards)

    }


    _renderItem = (card, index) => (
        <Card style={styles.item} game={this.state.game} card={card} index={index} selected={this.selected} flip={this.state.flipedCards[index]} clickable={this.state.clickableCards[index]} />
    )

    render() {
        return (
            <GridComponent
                style={styles.grid}
                renderItem={this._renderItem}
                data={this.state.cards}
                numColumns={4}
            />
        )
    }

}

export default Grid

const styles = StyleSheet.create({
    grid: {
        margin: 10,
    },
    item: {
        flex: 1,
        height: 65,
        margin: 5,
    },
})