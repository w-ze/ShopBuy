import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ShopCarScreen from './index'

const Stack = createStackNavigator();

class ShopCar extends Component {
    render() {
        return (
            <Stack.Navigator
                headerMode="none"
            >
                <Stack.Screen name="ShopCarScreen" component={ShopCarScreen} options={{ title: "购物车" }} />
            </Stack.Navigator>
        )
    }
}

export default ShopCar