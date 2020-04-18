import React, { Component } from 'react'
import { StyleSheet} from 'react-native'

import GridComponent from 'react-native-grid-component';
import Card from '../components/card';

class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game: this.props.game,
            cards: this.props.game.getDeck.getCards
        };
    }


    _renderItem = (card, index) => (
        <Card style={styles.item} game={this.state.game} card={card} index={index}/>
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