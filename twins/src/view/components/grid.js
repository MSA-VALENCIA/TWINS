import React, { Component } from 'react'
import { StyleSheet} from 'react-native'

import GridComponent from 'react-native-grid-component';
import Card from '../components/card';

class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0
        };
    }

    _renderItem = (data, index) => (
        <Card style={styles.item} card={data} key={index}/>
        //<View style={[{ backgroundColor: data }, styles.item]} key={index}/>
    )

    render() {
        return (
            <GridComponent
                style={styles.grid}
                renderItem={this._renderItem}
                data={['black', 'white', 'red', 'green','black', 'white', 'red', 'green','black', 'white', 'red', 'green','black', 'white', 'red', 'green','black', 'white', 'red', 'green','black', 'white', 'red', 'green']}
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