import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { defaultGame } from '../../models/Game';
import Grid from '../components/grid';


function GamePage({ route, navigation }) {

    let game = route.params.newGame;

    return (
        <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.background}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Grid game={game} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
    },
    body: {
        flex: 5,
        backgroundColor: 'rgba(255,255,255,0.3)',
        margin: 10,
        borderRadius: 15,
        marginBottom: 30
    },
})

export default GamePage