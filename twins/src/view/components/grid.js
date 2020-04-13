import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import GridComponent from 'react-native-grid-component';
import Card from '../components/card';

class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index = 0
        };
    }

    _renderItem = (data, i) => (
        <Card style={styles.item} card={data} index={i} />
    )

    render() {
        return (
            <GridComponent
                style={styles.grid}
                renderItem={_renderItem}
                data={['black', 'white', 'red', 'green', 'black', 'white', 'red', 'green', 'black', 'white', 'red', 'green', 'black', 'white', 'red', 'green', 'black', 'white', 'red', 'green', 'black', 'white', 'red', 'green']}
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