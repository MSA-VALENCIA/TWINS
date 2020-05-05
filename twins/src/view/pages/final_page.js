import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import {restartGame} from '../../controller/navigator'

function FinalPage({route, navigation }) {
   
    let puntuation = route.params.getGamePunctuation 

    let finalTime = route.params.getTime

    let cardsOfGame = route.params.getMaxCards

    console.log(finalTime)
    console.log(cardsOfGame)
    
    restart = () => { navigation.dispatch(restartGame) }

    backToStart = () => { navigation.navigate('HomePage') }

    return (
            <View style={styles.container}>

                <View style={[styles.top, styles.centerAll]}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#263238' }}> FIN DE PARTIDA </Text>
                </View>

                <View style={styles.mid}>
                    <View style={[styles.midUp, styles.centerAll]}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#263238' }}>RESULTADO FINAL</Text>
                    </View>

                    <View style={styles.midCenter}>

                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 40 }}>Puntos:</Text>                          
                        </View>

                        <View style={[styles.flex, styles.centerAll]}>
                            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>{cardsOfGame * 0.25 * finalTime}</Text>
                            
                        </View>

                    </View>

                   
                </View>

                <View style={styles.buttons}>

                    <AwesomeButton width={100} borderRadius={15} backgroundColor='#039BE5' textColor='#424242' backgroundDarker='#01579B'
                        onPress={ restart }>
                        REINICIAR
                    </AwesomeButton>

                    <AwesomeButton width={100} borderRadius={15} backgroundColor='#039BE5' textColor='#424242' backgroundDarker='#01579B'
                        onPress={ backToStart }>
                        VOLVER AL INICIO
                    </AwesomeButton>

                </View>

            </View>

    )



}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: 'red'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,245,157,1)',
        marginTop: '35%',
        marginBottom: '35%',
        marginLeft: '10%',
        marginRight: '10%',
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
        flex: 0.8,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 40,

    },
    midUp: {
        flex: 1.2,
        marginTop : 20
    },
    midCenter: {
        flex: 0.7,
        flexDirection: "row",
        marginBottom : 35
    },
  
    buttons: {
        flex: 0.6,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})

export default FinalPage