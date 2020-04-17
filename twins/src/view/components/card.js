import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, ImageBackground, Text } from 'react-native'

import CardFlip from 'react-native-card-flip'
import StateGame from '../../models/StateGame'

class Card extends Component {

  selected = (index) => {
    game.getState().handle(game, index)
  }
  

  render() {
    let { index } = this.props;
    let {game} = this.props;
    let card = game.getDeck.getCards;
    
    return (
      <CardFlip key={index} style={styles.cardContainer} ref={card => (this['card' + index] = card)}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={ () => { this['card' + index].flip(); this.selected(index); }  }
          style={{ flex: 1 }}>
          <ImageBackground style={{ flex: 1 }} resizeMode={"stretch"} borderRadius={30} source={require('../../../assets/images/back_card.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this['card' + index].jiggle({ count: 2, duration: 100, progress: 0.05 })}
          style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
          <ImageBackground style={{ flex: 1 }} resizeMode={"center"} source={card.getImage} />
        </TouchableOpacity>
      </CardFlip>
    )
  }
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 79,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    margin: 5,
    justifyContent: 'center'
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
