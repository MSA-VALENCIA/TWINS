import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function GamePage({ navigation }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name='gamepad'></Icon>
            <Text>HOLA MASTER</Text>
        </View>
    )
}

export default GamePage