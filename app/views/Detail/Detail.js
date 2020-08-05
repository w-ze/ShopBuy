import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView
} from 'react-native'

import DetailsScreen from './details'
import EvaluateScreen from './evaluate'
import DetailScreen from './index'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../../styles/detail';
import Header from '../../components/header'

import { connect } from 'react-redux'
import actions from '../../store/actions/index'

const Tab = createMaterialTopTabNavigator();


class Detail extends Component {
    constructor(props) {
        super(props)
    }
    back() {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: '#ffffff' }}></SafeAreaView>
                <SafeAreaView style={{ flex: 1 }}>
                    <Header title="商品详情" back={this.back.bind(this)}>
                        <Icon name="shoppingcart" size={28} color="#333333" />
                    </Header>
                    <Tab.Navigator
                        tabBarOptions={{
                            inactiveTintColor: "#333333",
                            showIcon: true
                        }}
                        lazy={true}
                    >
                        <Tab.Screen name="DetailScreen" options={{ title: "商品" }} component={DetailScreen} />
                        <Tab.Screen name="DetailsScreen" options={{ title: "详情" }} component={DetailsScreen} />
                        <Tab.Screen name="EvaluateScreen" options={{ title: "评价" }} component={EvaluateScreen} />
                    </Tab.Navigator>

                </SafeAreaView>
                <SafeAreaView></SafeAreaView>
            </View>

        )
    }
    componentWillMount() {
        this.props.dispatch(actions.goodDetail.saveId({ gid: this.props.route.params.gid }))
    }
}

// export default Detail
export default connect((state) => {
    return {
        state
    }
})(Detail)