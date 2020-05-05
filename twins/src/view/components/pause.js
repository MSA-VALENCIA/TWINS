import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import PauseButton from './pauseButton'
import GameButton from './gameButton'
import { BaseRouter } from '@react-navigation/native'

export class Pause extends Component {

    resume = () => {
        this.props.route.params()
        this.props.navigation.pop()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                    <GameButton iconOn='volume-high' iconOff='volume-off' onPress={()=>{}}></GameButton>
                    <GameButton iconOn='music-note' iconOff='music-note-off' onPress={()=>{}}></GameButton>
                </View>
                <PauseButton title = {'REANUDAR'} onPress={this.resume}/>
                <PauseButton title = {'REINICIAR'}/>
                <PauseButton title = {'SALIR'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,245,157,1)',
        marginTop: '55%',
        marginBottom: '55%',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 40,
        justifyContent:'space-evenly'
    },
    icon:{
        backgroundColor:'#f4a460',
        padding:5
    }
})

export default Pause
