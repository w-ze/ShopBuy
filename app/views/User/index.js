import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native'

import styles from '../../styles/user'

import Icon from 'react-native-vector-icons/AntDesign'

import Button from '@ant-design/react-native/lib/button'

class UserScreen extends Component {
    render() {
        return (
            <View>
                <SafeAreaView></SafeAreaView>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.top}>
                            <View style={styles.headerWrap}>
                                <Image style={styles.header} source={require('../../assets/image/user.png')} />
                            </View>
                            <View style={styles.nameWrap}>
                                <Text style={styles.nickName}>
                                    昵称
                            </Text>
                                <Text style={styles.nickName}>
                                    我的积分：0
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
                            <View style={styles.contentItem}>
                                <Text style={styles.contentText}>
                                    个人资料
                                </Text>
                                <Icon name="right" size={20} />
                            </View>
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
                                <TouchableHighlight style={styles.button}>
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
}

export default UserScreen