import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
    View,
    Text,
} from 'react-native'

import HomeScreen from './index'
import ClassifyScreen from './classify'

const Stack = createStackNavigator();



class Home extends Component {
    render() {
        return (
            <Stack.Navigator
                headerMode="none"
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "首页" }} />
                <Stack.Screen name="ClassifyScreen" component={ClassifyScreen} options={{ title: "商品分类" }} />
            </Stack.Navigator>
        )
    }
}

export default Home