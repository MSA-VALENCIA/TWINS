import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';
import GridComponent from 'react-native-grid-component';
import Card from '../components/card';


class Grid extends Component {
    
    _renderItem = (card, index) => (
        <Card key={index} style={styles.item} card={card} index={index} doTurn={this.props.doTurn} />
    )

    render() {
        let {game} = this.props
        return (
            <GridComponent
                style={styles.grid}
                renderItem={this._renderItem}
                data={game.getDeck.getCards}
                numColumns={4}
            />
        )
    }

}

export default Grid

const styles = StyleSheet.create({
    grid: {
        flex:0,
        margin: 10,
    },
    item: {
        flex: 1,
        height: 65,
    },
})