import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground } from 'react-native'

import ProgressCircle from 'react-native-progress-circle'

export default class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'green'
        }
    }
    componentDidMount() {
        this.setState({
            timer: setInterval(() => this.update(), 1000),
            globalTime: this.props.duration,
            ticTime: this.props.ticDuration
        })

    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    update = () => {
        this.updateTicColor()
        console.log(this.state.ticTime)
        if (this.state.globalTime > 0)
        if(this.state.ticTime-1 > 0)
            this.setState({
                globalTime: this.state.globalTime - 1,
                ticTime: this.state.ticTime - 1
            })
            else {
                this.setState({
                    globalTime:this.state.globalTime - 1,
                    ticTime: this.props.ticDuration,
                    color:'green'
                })
                this.props.onTicFinish()
            }
        else {
            this.props.onFinish()
        }
    }

    restartTic = () => {
            this.setState({
                ticTime:this.props.ticDuration,
                color:'green'
            })
    }

    updateTicColor = () => {
        if (this.state.ticTime == Math.round(this.props.ticDuration / 2))
            this.setState({
                color: 'yellow'
            })
            if(this.state.ticTime == 2)
            this.setState({
                color:'red'
            })
    }

    clear = () => {
        clearInterval(this.state.timer)
    }

    secondsToFormat = (seconds) => {
        let min = 0
        let sec = seconds
        if (seconds > 60) {
            min = Math.floor(seconds / 60)
            sec = seconds % 60
        }
        if (sec < 10) sec = '0' + sec
        return min + ':' + sec
    }

    calculatePercent = (time) => {
        return 100/this.props.ticDuration * time
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
        var { globalTime } = this.state
        var { ticTime } = this.state
        var { color } = this.state
        // var {paused} = this.state
        return (
            <View style={{ justifyContent: 'center', height: 80, width: 80 }}>
                    {/* <TouchableWithoutFeedback onPress={() => {
                    if(!paused)this.resumeTimer()
                    else this.pauseTimer()
                }}> */}
                    <ProgressCircle
                        percent={this.calculatePercent(ticTime)}
                        radius={30}
                        borderWidth={6}
                        color={color}
                        shadowColor="white"
                        bgColor="white"
                    >
                        <Text style={ styles.text}>{this.secondsToFormat(globalTime)}</Text>
                    </ProgressCircle>

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
        color:'black'
    },
})
