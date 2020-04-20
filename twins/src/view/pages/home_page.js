import React from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const image = { uri: "http://www.hdfondos.eu/preview/get_photo/84085/2880/1800" }

function HomePage({ navigation }) {
  return (
    <View style={styles.view}>
        <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>
          TWINS
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {navigation.navigate('GamePage');}}
          >
          <Text style={styles.text}>
              EMPEZAR PARTIDA
          </Text>
        </TouchableOpacity>
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
    color:"white",
    fontSize: 75,
    fontWeight: "bold",
    margin: '20%',
  },
  text: {
    color:"white",
    fontSize: 20,
    
  },
  image: {
    flex: 6,
    resizeMode: "cover",
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#0C58fc80",
    height: 50,
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '50%',
  }
});

export default HomePage