import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    TouchableHighlight,

} from 'react-native'

import { request } from '../../lib/request'

import styles from '../../styles/result'

import Icon from 'react-native-vector-icons/AntDesign'

class ResultScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: this.props.route.params.keywords
        }
    }
    goBack(){
        this.props.navigation.goBack()
    }
    filter(){
        
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <SafeAreaView></SafeAreaView>
                 <SafeAreaView>
                    <View style={styles.header}>
                        <TouchableHighlight underlayColor="none" onPress={this.goBack.bind(this)}>
                            <Icon name="left" size={32} style={styles.icon}></Icon>
                        </TouchableHighlight>
                        <View style={styles.inputWrap}>
                            <Text style={styles.input}>
                                {this.state.keywords}
                            </Text>
                        </View>
                        <TouchableHighlight underlayColor="none" onPress={this.filter.bind(this)}>
                            <Icon name="filter" size={32} style={styles.icon}></Icon>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bar}>
                        <View style={styles.barItem}>
                            <Text style={styles.barText}>
                                综合
                            </Text>
                            <Icon name="down" style={styles.down}></Icon>
                        </View>
                        <View style={styles.barItem}>
                            <Text style={styles.barText}>
                                销量
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
                <SafeAreaView></SafeAreaView>
            </View>
        )
    } 
    componentDidMount(){
        request(`${base.baseUrl}/home/goods/search?kwords=${this.state.keywords}&token=${base.token}`).then(res=>{
            console.log(res)
        })
    }
}

export default ResultScreen