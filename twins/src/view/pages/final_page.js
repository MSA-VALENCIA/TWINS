import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native'

function FinalPage({ navigation }) {

    reiniciar = () => { navigation.navigate('GamePage') }

    volverInicio = () => { navigation.navigate('HomePage') }

    return (
        <ImageBackground source={require('../../../assets/images/background.jpg')} style={styles.back}>
            <View style={styles.container}>

                <View style={[styles.top, styles.centerAll]}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}> FIN DE PARTIDA </Text>
                </View>

                <View style={styles.mid}>
                    <View style={[styles.midUp, styles.centerAll]}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>RESULTADO FINAL</Text>
                    </View>

                    <View style={styles.midCenter}>

                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ fontSize: 25 }}>Aciertos x5:</Text>
                            <Text style={{ fontSize: 25 }}>Fallos x7:</Text>
                        </View>

                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ color: 'green', fontSize: 25 }}>500 puntos</Text>
                            <Text style={{ color: 'red', fontSize: 25 }}> -70 puntos</Text>
                        </View>

                    </View>

                    <View style={{
                        borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 30, marginRight: 30,
                        marginTop: 15
                    }} />

                    <View style={styles.midDown}>
                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ fontSize: 25 }}>Total:</Text>
                        </View>
                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>430 puntos</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.botones}>

                    <TouchableOpacity onPress={this.reiniciar}>
                        <View style={styles.but}>
                            <Text style={styles.buttonText}>Reiniciar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.volverInicio}>
                        <View style={styles.but}>
                            <Text style={styles.buttonText}>Volver a inicio</Text>
                        </View>
                    </TouchableOpacity>


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
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginTop: 80,
        marginBottom: 80,
        marginLeft: 50,
        marginRight: 50,
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
        flex: 1,
        backgroundColor: 'cornsilk',
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