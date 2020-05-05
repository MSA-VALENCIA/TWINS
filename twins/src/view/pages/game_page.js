import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Grid from '../components/grid';
import Countdown from '../components/countdown'
import { exceededTicTime} from '../../controller/timeController'
import PointsContainer from '../components/pointsContainer'


class GamePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game: this.props.route.params.newGame.restartGame(),
        };
    }

    doTurn = (index) => { this.state.game.request(index, this.viewFunctions); }

    updateGame = (newGame) => { this.setState({ game: newGame }) }

    exceededTicTime = () => { exceededTicTime(this.state.game, this.updateGame) }

    restartTic = () => {this.countdown.restartTic()}

    finishGame = () => {
        this.countdown.clear()
        this.state.game.setTime = this.countdown.state.globalTime
        this.props.navigation.navigate('FinalPage', this.state.game) 
    }

    viewFunctions = {
        updateGame: this.updateGame,
        restartTic: this.restartTic,
        finishGame: this.finishGame
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.background}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <View style={styles.header}>
                        <PointsContainer points={this.state.game.getGamePunctuation.getPoints} />
                        <Countdown ref={countdown => { this.countdown = countdown }} duration={120} ticDuration={5} onTicFinish={this.exceededTicTime} onFinish={this.finishGame}/>
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
        alignItems: 'center',
        marginTop: 20
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