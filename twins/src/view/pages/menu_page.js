import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function HomePage({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icon name='bars'></Icon>
      <Text>Hola</Text>
    </View>
  )
}

export default HomePage