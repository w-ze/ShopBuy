import 'react-native-gesture-handler';
import Global from './app/config/global';
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Home from './app/views/Home/Home'
import ShopCar from './app/views/ShopCar/ShopCar'
import User from './app/views/User/User'
import Detail from './app/views/Detail/Detail'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';

import { Provider } from 'react-redux'
import reducers from './app/store/reducers/index'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import LoginScreen from './app/views/User/login'
import ProfileScreen from './app/views/User/profile'
import SearchScreen from './app/views/Search/search'
import ResultScreen from './app/views/Search/result'

let store = createStore(reducers, applyMiddleware(thunk))

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBarIcon1 = (focused) => {
    return (
        <Icon name="home" size={28} color={focused.color} />
    );
};

const TabBarIcon2 = (focused) => {
    return (
        <Icon name="shoppingcart" size={28} color={focused.color} />
    );
};


const TabBarIcon3 = (focused) => {
    return (
        <Icon name="user" size={28} color={focused.color} />
    );
};




class App extends Component {
    tab() {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: "#ff0000"
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{ title: "首页", tabBarIcon: TabBarIcon1 }} />
                <Tab.Screen name="ShopCar" component={ShopCar} options={{ title: "购物车", tabBarIcon: TabBarIcon2 }} />
                <Tab.Screen name="User" component={User} options={{ title: "我的", tabBarIcon: TabBarIcon3 }} />
            </Tab.Navigator>
        )
    }
    render() {
        return (
            <Provider store={store}>
                <StatusBar barStyle="dark-content" />
                <NavigationContainer>
                    <Stack.Navigator
                        headerMode="none"
                    >
                        <Stack.Screen name="Tab" component={this.tab} options={{ title: "tab" }} />
                        <Stack.Screen name="Detail" component={Detail} options={{ title: "商品详情" }} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "会员登录" }} />
                        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "个人资料" }} />
                        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: "搜索" }} />
                        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: "搜索结果" }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
};

const styles = StyleSheet.create({

});

export default App;
