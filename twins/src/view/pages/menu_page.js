import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function HomePage({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icon name='bars'></Icon>
      <Text>HOLA</Text>
      <Text>Sergio</Text>
    </View>
  )
}

export default HomePage