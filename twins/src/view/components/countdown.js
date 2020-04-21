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
        if (this.state.time > 1)
            this.setState({
                time: this.state.time - 1
            })
        else {
            this.props.onFinish()
            this.restartTimer()
        }
    }

    restartTimer = () => {
        clearInterval(this.state.timer)
            this.setState({
                timer:setInterval(() => this.updateTimer(), 1000),
                time:this.state.duration,
                color:'green'
            })
    }

    updateColor = () => {
        if (this.state.time == Math.round(this.state.duration / 2))
            this.setState({
                color: 'yellow'
            })
    }

    clearTimer = () => {
        clearInterval(this.state.timer)
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
            <View style={{ justifyContent: 'center' ,height:75,width:75}}>
                <ImageBackground source={require('../../../assets/images/reloj.png')} style={{flex:1}}>
                {/* <TouchableWithoutFeedback onPress={() => {
                    if(!paused)this.resumeTimer()
                    else this.pauseTimer()
                }}> */}
                <Text style={[{ color: color, textAlign: 'center' }, styles.text]}>{time}</Text>
                </ImageBackground>
                {/* </TouchableWithoutFeedback> */}
                {/* <Text style={{textAlign:'center'}}>Pulsa el tiempo para pausar o reanudar</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 45,
        textAlign: 'center',
        marginTop:5
    },
})
