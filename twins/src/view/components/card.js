import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, ImageBackground, View} from 'react-native'

import CardFlip from 'react-native-card-flip'
//import FlipCard from 'react-native-flip-card'
//import { set } from 'react-native-reanimated';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
        game: this.props.game,
        //flip: false,
        //clickable: true
    };
    this.flip = this.flip.bind(this);
}

  selected = (index) => {
    this.state.game.request(index, this.flip)
  }

  flip = (index) => {
    console.log(this['card' + index].flip())
    this['card' + index].flip();
    //this.setState({flip: false, clickable: false});
  }

  render() {
    let {index} = this.props;
    let {card} = this.props;
    card.setIndex = index;
    
    return (
      <CardFlip key={index} style={styles.cardContainer} ref={card => (this['card' + index] = card)}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={ () => { this.flip(index) ; this.selected(index); }  }
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
      /*<FlipCard 
      style={styles.cardContainer}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={this.state.flip}
      clickable={this.state.clickable}
      onFlipEnd={(isFlipEnd)=>{this.setState({flip: true, clickable: false})}}
    >
      
      <ImageBackground style={{ flex: 1 }} resizeMode={"stretch"} borderRadius={30} source={require('../../../assets/images/back_card.png')} />
      <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
        <ImageBackground style={{ flex: 1 }} resizeMode={"center"} source={card.getImage} />
      </View>
      
    </FlipCard>*/

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
