import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import GridComponent from 'react-native-grid-component';
import Card from '../components/card';


class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game: this.props.game,
        };
    }

    doTurn = (index) => {

        console.log('request')

        this.state.game.request(index, this.updateGame);
    }

    updateGame = (newGame) => {
        this.setState({ game: newGame })
    }


    _renderItem = (card, index) => (
        <Card style={styles.item} card={card} index={index} doTurn={this.doTurn} />
    )

    render() {
        console.log(this.state.flipedCards)
        return (
            <GridComponent
                style={styles.grid}
                renderItem={this._renderItem}
                data={this.state.game.getDeck.getCards}
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