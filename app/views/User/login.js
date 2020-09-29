import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableHighlight,
    Image
} from 'react-native';

import Header from '../../components/header';
import styles from '../../styles/user';

import { request } from '../../lib/request'

import Storage from '../../lib/asyncstorage'

import actions from '../../store/actions/index'

import { connect } from 'react-redux'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    onChangePassWord(text) {
        this.setState({
            password: text,
        });
    }
    onChangeUsername(text) {
        this.setState({
            username: text
        })
    }
    login() {
        let formData = {};
        formData.cellphone = this.state.username
        formData.password = this.state.password
        console.log(formData)
        request(`${base.baseUrl}/home/user/pwdlogin?token=${base.token}`, 'post', formData).then(res => {
            console.log(res)
            if (res.code == 200) {
                let userData = {
                    uid: res.data.uid,
                    nickname: res.data.nickname,
                    auth_token: res.data.auth_token,
                    isLogin: true
                }
                Storage.save('userData', userData)
                console.log(this)
                this.props.dispatch(actions.User.login(userData))
            }
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: '#ffffff' }} />
                <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
                    <Header title="登录" />
                    <View style={styles.loginWrap}>
                        <TextInput
                            style={styles.input1}
                            onChangeText={text => this.onChangeUsername(text)}
                            value={this.state.username}
                            autoComplete="username"
                            clearButtonMode="while-editing"
                            placeholder="用户名"
                        />

                        <TextInput
                            style={styles.input1}
                            onChangeText={text => this.onChangePassWord(text)}
                            value={this.state.password}
                            autoComplete="password"
                            clearButtonMode="while-editing"
                            placeholder="密码"
                            secureTextEntry={true}
                        />
                        <TouchableHighlight style={styles.loginButton} underlayColor="none" onPress={this.login.bind(this)}>
                            <Text style={styles.buttonText}>登录</Text>
                        </TouchableHighlight>
                        <View style={styles.forgetWrap}>
                            <View style={styles.forget}>
                                <Image style={styles.forgetImage} source={require('../../assets/image/forget.png')}></Image>
                                <Text style={styles.forgetText}>
                                    忘记密码
                                </Text>
                            </View>
                            <View style={styles.forget}>
                                <Image style={styles.forgetImage} source={require('../../assets/image/reg.png')}></Image>
                                <Text style={styles.forgetText}>
                                    快速注册
                                </Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
                <SafeAreaView />
            </View>
        );
    }
}

export default connect(state => {
    return {
        state
    }
})(LoginScreen);
