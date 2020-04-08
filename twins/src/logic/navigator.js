import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import MenuPage from '../pages/menu_page';
import GamePage from '../pages/game_page'


const PageStack = createStackNavigator();

function RootPageStack() {
    return (
        <NavigationContainer>
            <PageStack.Navigator headerMode='none' initialRouteName='MenuPage'>
                <PageStack.Screen
                    name="MenuPage"
                    component={MenuPage} />
                <PageStack.Screen
                    name="GamePage"
                    component={GamePage} />
            </PageStack.Navigator>
        </NavigationContainer>
    );
}

export default RootPageStack