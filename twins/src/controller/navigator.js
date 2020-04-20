import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import GamePage from '../view/pages/game_page'
import HomePage from '../view/pages/home_page';


const PageStack = createStackNavigator();

function RootPageStack() {
    return (
        <NavigationContainer>
            <PageStack.Navigator headerMode='none' initialRouteName='HomePage'>
                <PageStack.Screen
                    name="GamePage"
                    component={GamePage} />
                <PageStack.Screen
                    name="HomePage"
                    component={HomePage} />
            </PageStack.Navigator>
        </NavigationContainer>
    );
}

export default RootPageStack