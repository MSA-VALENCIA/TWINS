import React from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import AwesomeButton from 'react-native-really-awesome-button';

function HomePage({ navigation }) {
  return (
    <View style={styles.view}>
        <ImageBackground style={styles.image} source={require('../../../assets/images/background_homepage.png')} >
        <Text style={styles.title}>
          𝕋𝕎𝕀ℕ𝕊
        </Text>
        <AwesomeButton width = {250} borderRadius = {15} backgroundColor = '#039BE5' textColor = '#424242' backgroundDarker = '#01579B'
          onPress={() => {navigation.navigate('GamePage');}}>
            EMPEZAR PARTIDA
        </AwesomeButton>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  view: { 
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: "#FF8A65",
    fontSize: 75,
    fontWeight: "bold",
    margin: '10%',
  },
  text: {
    color:"black",
    fontSize: 15,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
  },
});

export default HomePage