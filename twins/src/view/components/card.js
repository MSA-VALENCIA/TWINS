import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import FlipCard from 'react-native-flip-card';


class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      game: this.props.game,
      clickable: true
    };
  }

  render() {
    let { index } = this.props;
    let { card } = this.props;
    let { doTurn } = this.props;
    let flip = card.getTurned;
    card.setIndex = index;

    return (

      <FlipCard
        style={styles.cardContainer}
        flipHorizontal={true}
        flipVertical={false}
        flip={flip}
        clickable={!flip}
        onFlipEnd={(onFlipEnd) => { if (onFlipEnd) doTurn(index) }}>
        <ImageBackground style={{ flex: 1 }} resizeMode={"stretch"} borderRadius={30} source={require('../../../assets/images/back_card.png')} />
        <View style={[{ flex: 1, borderRadius: 10 }, card.getPaired ? { backgroundColor: '#32cd32' } : { backgroundColor: '#ffe4c4' }]}>
          <ImageBackground style={{ flex: 1 }} resizeMode={"center"} source={card.getImage} />
        </View>
      </FlipCard>
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
