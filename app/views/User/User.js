import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserScreen from "./index"
import LoginScreen from './login'
import ProfileScreen from './profile'

const Stack = createStackNavigator();

class User extends Component {
    render() {
        return (
            <Stack.Navigator
                headerMode="none"
            >
                <Stack.Screen name="UserScreen" component={UserScreen} options={{ title: "个人中心" }} />
                {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "会员登录" }} /> */}
                {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "个人资料" }} /> */}
            </Stack.Navigator>
        )
    }
}

export default User