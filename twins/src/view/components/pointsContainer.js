import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const LENGTH_ONE_SIZE=38
const LENGTH_TWO_SIZE=34
const LENGTH_THREE_SIZE=32

function PointsContainer(props) {
    let {points} = props
    
    
    getSize = ()=>{
        switch(points.toString().length){
            case 1: return LENGTH_ONE_SIZE
            case 2: return LENGTH_TWO_SIZE
            case 3: return LENGTH_THREE_SIZE
        }
    }

    getColor = () => {
        if(points==0)return 'black'
        else if(points<0) return 'red'
        else return 'green'
    }

    return (
        <View style={styles.pointsContainer}>
            <Image style={styles.image} resizeMode={"contain"}  source={require('../../../assets/images/star.png')}/>
            <Text style={[styles.text,{fontSize:getSize(),color:getColor()}]}>{points}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pointsContainer: {
        width: 110,
        height: 70,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        marginRight:10,
    },
    image:{
        width:40,
        height:40,
        marginLeft:10,
        marginRight:5
    }
})

export default PointsContainer
