import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native'
import AwesomeButton from 'react-native-really-awesome-button';

function FinalPage({ navigation }) {

    reiniciar = () => { navigation.navigate('GamePage') }

    volverInicio = () => { navigation.navigate('HomePage') }

    return (
        <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.back}>
            <View style={styles.container}>

                <View style={[styles.top, styles.centerAll]}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#263238' }}> FIN DE PARTIDA </Text>
                </View>

                <View style={styles.mid}>
                    <View style={[styles.midUp, styles.centerAll]}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#263238' }}>RESULTADO FINAL</Text>
                    </View>

                    <View style={styles.midCenter}>

                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ fontSize: 20 }}>Aciertos:</Text>
                            <Text style={{ fontSize: 20 }}>Fallos:</Text>
                        </View>

                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ color: 'green', fontSize: 20 }}>500 puntos</Text>
                            <Text style={{ color: 'red', fontSize: 20 }}> -70 puntos</Text>
                        </View>

                    </View>

                    <View style={{
                        borderBottomColor: '#263238', borderBottomWidth: 1, marginLeft: 20, marginRight: 20,
                        marginTop: 15
                    }} />

                    <View style={styles.midDown}>
                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ fontSize: 20 }}>Total:</Text>
                        </View>
                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#263238' }}>430 puntos</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.botones}>

                    <AwesomeButton width={100} borderRadius={15} backgroundColor='#039BE5' textColor='#424242' backgroundDarker='#01579B'
                        onPress={ this.reiniciar }>
                        REINICIAR
                    </AwesomeButton>

                    <AwesomeButton width={100} borderRadius={15} backgroundColor='#039BE5' textColor='#424242' backgroundDarker='#01579B'
                        onPress={ this.volverInicio }>
                        VOLVER AL INICIO
                    </AwesomeButton>

                </View>

            </View>
        </ImageBackground>

    )



}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: 'red'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,245,157,0.5)',
        marginTop: 100,
        marginBottom: 100,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 40
    },
    centerAll: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    },
    top: {
        flex: 0.7,
    },
    mid: {
        flex: 1.5,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 40,

    },
    midUp: {
        flex: 0.9,
    },
    midCenter: {
        flex: 1,
        flexDirection: "row"
    },
    midDown: {
        flex: 0.8,
        flexDirection: "row",
        marginBottom: 10
    },
    botones: {
        flex: 0.6,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    but: {
        borderRadius: 15,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'chocolate'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center'
    }

})

export default FinalPage