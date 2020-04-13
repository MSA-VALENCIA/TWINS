import React from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'
import Grid from '../components/grid'


function GamePage({ navigation }) {
    return (
        <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.background}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Grid>

                </Grid>
            </View>
            <View style={styles.footer}></View>
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
        opacity: 0.3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15,
    },
    footer: {
        flex: 1,
    }
  })

export default GamePage