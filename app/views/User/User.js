import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserScreen from "./index"

const Stack = createStackNavigator();

class User extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="UserScreen" component={UserScreen} options={{ title: "我的" }} />
            </Stack.Navigator>
        )
    }
}

export default User