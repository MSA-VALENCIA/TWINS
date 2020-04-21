import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View,Text } from 'react-native';
import { defaultGame } from '../../models/Game';
import Grid from '../components/grid';
import Countdown from '../components/countdown'
import { exceededTime, restartTimer,clearTimer } from '../../controller/timeController'
import PointsContainer from '../components/pointsContainer'


class GamePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game: route.params.newGame,
        };
    }

    doTurn = (index) => {
        this.state.game.request(index, this.viewFunctions);
    }

    updateGame = (newGame) => {
        this.setState({ game: newGame })
    }

    exceededTime = () => {
        exceededTime(this.state.game, this.updateGame)
    }

    restartTimer = () => {
        restartTimer(this.countdown)
    }

    clearTimer = () => {
        clearTimer(this.countdown)
    }

    viewFunctions = {
        updateGame : this.updateGame,
        restartTimer: this.restartTimer,
        clearTimer:this.clearTimer
    }



    render() {
        //const {navigator} = this.props
        return (
            <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.background}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <View style={styles.header}>
                    <PointsContainer points={this.state.game.getGamePunctuation.getPoints}/>
                        <Countdown ref={countdown => { this.countdown = countdown }} duration={5} onFinish={this.exceededTime} />
                        
                    </View>
                    <View style={styles.body}>
                        <Grid game={this.state.game} doTurn={this.doTurn} />
                    </View>
                </View>
            </ImageBackground>)
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:20
    },
    body: {
        flex: 5,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 15,
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10
    },
    
})

export default GamePage