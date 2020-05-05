import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

import {Button} from 'react-native-elements';

export class PauseButton extends Component {
    render() {
        return (
                <Button
                buttonStyle={styles.button}
                onPress={this.props.onPress}
                title={this.props.title}
                titleStyle={styles.title}/>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'tomato',
        margin:40
    },
    title:{
    }
})

export default PauseButton
