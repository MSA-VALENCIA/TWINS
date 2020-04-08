import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomePage from '../pages/home_page';


const PageStack = createStackNavigator();

function RootPageStack() {
    return (
        <NavigationContainer>
            <PageStack.Navigator headerMode='none' initialRouteName='HomePage'>
                <PageStack.Screen
                    name="HomePage"
                    component={HomePage} />
            </PageStack.Navigator>
        </NavigationContainer>
    );
}

export default RootPageStack