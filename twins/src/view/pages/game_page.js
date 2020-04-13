import React from 'react'
import { Text, View, ImageBackground } from 'react-native'

function GamePage({ navigation }) {
    return (
        <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.background}>
            <View>
                
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: 'column',
    },
  })

export default GamePage