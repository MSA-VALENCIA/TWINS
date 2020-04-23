import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GamePage from '../view/pages/game_page'
import HomePage from '../view/pages/home_page';
import FinalPage from '../view/pages/final_page';
import { Game } from '../models/Game';
import { animals } from '../models/Deck';


const PageStack = createStackNavigator();

function RootPageStack() {
    
    return (
        <NavigationContainer>
            <PageStack.Navigator headerMode='none' initialRouteName='HomePage'>
                <PageStack.Screen
                    name="GamePage"
                    component={GamePage}
                    initialParams = {{newGame: new Game(24, animals)}} />
                <PageStack.Screen
                    name="HomePage"
                    component={HomePage} />
                <PageStack.Screen
                    name="FinalPage"
                    component={FinalPage}
                    options={modalOptions} />
            </PageStack.Navigator>
        </NavigationContainer>
    );
}

const modalOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "transparent" },
    cardOverlayEnabled: true,
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 0.5, 0.9, 1],
          outputRange: [0, 0.1, 0.3, 0.7]
        })
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.6],
          extrapolate:  'clamp'
        })
      }
    })
  };

export default RootPageStack