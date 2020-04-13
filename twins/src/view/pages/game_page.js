import React from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'

function GamePage({ navigation }) {
    return (
        <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.background}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                
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
        flex: 3,
        opacity: 0.3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15
    },
    footer: {
        flex: 1,
    }
  })

export default GamePage