import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import CardFlip from 'react-native-card-flip'

class Card extends Component {

    render() {
        let { index } = this.props;
        return (
            <CardFlip key={index} style={{ flex: 1 }} ref={card => (this['card' + index] = card)}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ flex: 1 }}
                    onPress={() => this['card' + index].flip()}>
                    <Image style={{ flex: 1 }} source={require('../../../assets/images/back_card.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ flex: 1 }}
                    onPress={() => this['card' + i].jiggle({ count: 2, duration: 100, progress: 0.05 })}>
                    <Image style={{ flex: 1 }} source={require('../../../assets/images/cards/bear.png')} />
                </TouchableOpacity>
            </CardFlip>
        )
    }
}

export default Card
