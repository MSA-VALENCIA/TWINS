import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export class GameButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            icon:this.props.iconOn
        }
    }

    onPress = () => {
        console.log('holaa')
        this.props.onPress()
        let icon
        this.state.icon == this.props.iconOn ? icon = this.props.iconOff : icon = this.props.iconOn
        console.log(icon)
        this.setState({
            icon
        })
    }

    render() {
        return (
                <Button
                buttonStyle={styles.button}
                onPress={this.onPress}
                icon={<Icon name={this.state.icon} size={20} style={styles.icon} />}/>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'tomato',
        padding:5
    },
    icon:{
        backgroundColor:'#f4a460',
        padding:5
    }

})

export default GameButton
