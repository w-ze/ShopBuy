import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableHighlight,
    DeviceEventEmitter
} from 'react-native'

import styles from '../../styles/user'

import Icon from 'react-native-vector-icons/AntDesign'

import Button from '@ant-design/react-native/lib/button'

import { connect } from 'react-redux'

import { request } from '../../lib/request'

class UserScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {}
        }
    }
    login() {
        this.props.navigation.navigate('LoginScreen')
    }
    getUserInfo() {
        request(`${base.baseUrl}/user/myinfo/userinfo/uid/${this.props.state.User.uid}?token=${base.token}`).then(res => {
            console.log(res)
            if (res.code == 200) {
                this.setState({ userInfo: res.data })
            }
        })
    }
    goProfile() {
        this.props.navigation.navigate('ProfileScreen', {
            uid: this.state.userInfo.uid,
            gender: this.state.userInfo.gender,
            head: this.state.userInfo.head,
            nickname: this.state.userInfo.nickname
        })
    }
    render() {
        return (
            <View>
                <SafeAreaView></SafeAreaView>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.top}>
                            <View style={styles.headerWrap}>
                                <Image style={styles.header} source={{ uri: 'http:' + this.state.userInfo.head }} />
                            </View>
                            <View style={styles.nameWrap}>
                                <Text style={styles.nickName}>
                                    {this.state.userInfo.nickname}
                                </Text>
                                <Text style={styles.nickName}>
                                    我的积分：{this.state.userInfo.points}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.orderAllWrap}>
                            <Text style={styles.orderAll}>
                                全部订单
                        </Text>
                            <TouchableHighlight underlayColor="none" >
                                <Text style={styles.orderAllView}>
                                    查看全部订单
                                    <Icon name="right" size={16}></Icon>
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.statusWrap}>
                            <TouchableHighlight underlayColor="none">
                                <View style={styles.statusItem}>
                                    <View style={styles.statusLogoWrap}>
                                        <Image style={styles.statusLogo} source={require('../../assets/image/pay.png')}></Image>
                                    </View>
                                    {/* <View style={styles.text}> */}
                                    <Text style={styles.statusText}>
                                        待支付
                                    </Text>
                                    {/* </View> */}
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="none" >
                                <View style={styles.statusItem}>
                                    <View style={styles.statusLogoWrap}>
                                        <Image style={styles.statusLogo} source={require('../../assets/image/shouhuo.png')}></Image>
                                    </View>
                                    {/* <View style={styles.text}> */}
                                    <Text style={styles.statusText}>
                                        待收货
                                </Text>
                                    {/* </View> */}
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="none">
                                <View style={styles.statusItem}>
                                    <View style={styles.statusLogoWrap}>
                                        <Image style={styles.statusLogo} source={require('../../assets/image/comment.png')}></Image>
                                    </View>
                                    {/* <View style={styles.text}> */}
                                    <Text style={styles.statusText}>
                                        待评价
                                </Text>
                                    {/* </View> */}
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.contentWrap}>
                            <TouchableHighlight underlayColor="none" onPress={this.goProfile.bind(this)}>
                                <View style={styles.contentItem}>
                                    <Text style={styles.contentText}>
                                        个人资料
                                    </Text>
                                    <Icon name="right" size={20} />
                                </View>
                            </TouchableHighlight>
                            <View style={styles.contentItem}>
                                <Text style={styles.contentText}>
                                    收货地址
                                </Text>
                                <Icon name="right" size={20} />
                            </View>
                            <View style={styles.contentItem}>
                                <Text style={styles.contentText}>
                                    绑定手机
                                </Text>
                                <Icon name="right" size={20} />
                            </View>
                            <View style={styles.contentItem}>
                                <Text style={styles.contentText}>
                                    修改密码
                                </Text>
                                <Icon name="right" size={20} />
                            </View>
                            <View style={styles.contentItem}>
                                <Text style={styles.contentText}>
                                    我的收藏
                                </Text>
                                <Icon name="right" size={20} />
                            </View>
                            <View style={styles.buttonWrap}>
                                <TouchableHighlight style={styles.button} underlayColor="none" onPress={this.login.bind(this)}>
                                    <Text style={styles.buttonText}>
                                        登录/注册
                                </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <SafeAreaView></SafeAreaView>
            </View>
        )
    }
    componentDidMount() {
        this.getUserInfo()
        DeviceEventEmitter.addListener('refresh', (message) => {
            if (message) {
                this.getUserInfo()
            }
        })
    }
}

export default connect((state) => {
    console.log(state)
    return {
        state
    }
})(UserScreen)