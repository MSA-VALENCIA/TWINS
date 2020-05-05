import React, { Component } from 'react'

import ProgressCircle from 'react-native-progress-circle'

export default class CircularCountdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.props.duration,
            color: 'green',
            
        }
    }
    componentDidMount() {
        this.setState({
            timer: setInterval(() => this.updateTimer(), 1000)
        })
        
    }
    
    updateTimer = () => {
          
          if(this.state.time>0){
            this.setState({
              time: this.state.time - 1
          })
          }
    }

    restartTimer = () => {
        clearInterval(this.state.timer)
            this.setState({
                timer:setInterval(() => this.updateTimer(), 1000),
                time:this.props.duration,
                color:'green'
            })
    }

    updateColor = () => {
        if (this.state.time == Math.round(this.props.duration / 2))
            this.setState({
                color: 'yellow'
            })
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

    clearTimer = () => {
        clearInterval(this.state.timer)
    }

    calculatePercent = (time) => {
        return 100/this.props.duration * time
    }

    render() {
        return (
            <ProgressCircle
            percent={this.calculatePercent(this.state.time)}
            radius={24}
            borderWidth={6}
            color= {this.state.color}
            shadowColor="white"
            bgColor="trasparent"
        />
        )
    }
}

