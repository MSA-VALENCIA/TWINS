import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback,ImageBackground } from 'react-native'

export default class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: this.props.duration,
            color: 'green'
        }
    }
    componentDidMount() {
        this.setState({
            timer: setInterval(() => this.updateTimer(), 1000),
            time: this.state.duration
        })
        
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    updateTimer = () => {
        this.updateColor()
        if (this.state.time > 0)
            this.setState({
                time: this.state.time - 1
            })
        else {
            this.props.onFinish()
        }
    }

    updateColor = () => {
        if (this.state.time == Math.round(this.state.duration / 2))
            this.setState({
                color: 'yellow'
            })
        if(this.state.time == 0)
        this.setState({
            color:'red'
        })
    }

    clearTimer = () => {
        clearInterval(this.state.timer)
    }

    secondsToFormat = (seconds) => {
        let min = 0
        let sec = seconds
        if(seconds>60){
            min = Math.floor(seconds/60)
            sec = seconds%60
        }
        if(sec<10)sec = '0'+sec
        return min + ':' + sec
    }
    // pauseTimer = () => {
    //     this.setState({
    //         paused:false
    //     })
    //     clearInterval(this.state.timer);
    // }
    // resumeTimer = () => {
    //     this.setState({
    //         paused:true
    //     })
    //     this.state.timer = setInterval(() => this.updateTimer(), 1000)
    // }
    render() {
        var { time } = this.state
        var { color } = this.state
        // var {paused} = this.state
        return (
            <View style={{ justifyContent: 'center' ,height:80,width:80}}>
                <ImageBackground source={require('../../../assets/images/reloj.png')} style={{flex:1}}>
                {/* <TouchableWithoutFeedback onPress={() => {
                    if(!paused)this.resumeTimer()
                    else this.pauseTimer()
                }}> */}
                <Text style={[{ color: color, textAlign: 'center' }, styles.text]}>{this.secondsToFormat(time)}</Text>
                </ImageBackground>
                {/* </TouchableWithoutFeedback> */}
                {/* <Text style={{textAlign:'center'}}>Pulsa el tiempo para pausar o reanudar</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginTop:23
    },
})
