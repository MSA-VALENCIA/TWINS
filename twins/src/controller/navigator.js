import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import GamePage from '../view/pages/game_page'


const PageStack = createStackNavigator();

function RootPageStack() {
    return (
        <NavigationContainer>
            <PageStack.Navigator headerMode='none' initialRouteName='GamePage'>
                <PageStack.Screen
                    name="GamePage"
                    component={GamePage} />
            </PageStack.Navigator>
        </NavigationContainer>
    );
}

export default RootPageStack