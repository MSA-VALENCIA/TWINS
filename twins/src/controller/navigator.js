import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GamePage from '../view/pages/game_page'
import HomePage from '../view/pages/home_page';
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
            </PageStack.Navigator>
        </NavigationContainer>
    );
}

export default RootPageStack