import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableHighlight,
    TextInput,
    DeviceEventEmitter
} from 'react-native'

import Header from '../../components/header'

import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../../styles/user'

import ImagePicker from 'react-native-image-crop-picker';

import CustomDialog from '../../components/customDialog'

import { request } from '../../lib/request'

import CustomPicker from '../../components/customPicker'

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            pickerVisible: false,
            dialog: ['拍照', '从手机相册选择'],
            uid: this.props.route.params.uid,
            gender: this.props.route.params.gender,
            nickname: this.props.route.params.nickname,
            head: this.props.route.params.head,
            option: [
                {
                    value: '1',
                    title: '男'
                },
                {
                    value: '2',
                    title: '女'
                }
            ],
            headName: ''
        }
    }
    back() {
        this.props.navigation.goBack()
    }
    openDialog() {
        this.setState({
            dialogVisible: true
        })
    }
    closeDialog() {
        this.setState({
            dialogVisible: false
        })
    }
    click(index) {
        console.log(index)
        if (index == 0) {
            ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
            }).then(image => {
                console.log(image);
            });
        } else if (index == 1) {
            ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: true,
                cropperCircleOverlay: true,
                cropperChooseText: '选择',
                cropperCancelText: '取消',
                loadingLabelText: '加载中'
            }).then(image => {
                this.closeDialog()
                this.uploadHeader(image)
            });
        }
    }
    uploadHeader(image) {
        console.log(image)
        const formData = new FormData();
        const file = {
            uri: image.path,
            type: image.mime,
            name: image.filename?image.filename:'image.jpg',
            size: image.size,
        };
        formData.append('headfile', file);
        console.log(formData)
        console.log(`${base.baseUrl}/user/myinfo/formdatahead?token=${base.token}`)
        request(`${base.baseUrl}/user/myinfo/formdatahead?token=${base.token}`, 'file',formData).then(res => {
            console.log(res)
            if (res.code == 200) {
                this.setState({
                    head: `//vueshop.glbuys.com/userfiles/head/${res.data.msbox}`,
                    headName: res.data.msbox
                }, () => {
                    console.log(this.state.head)
                })
            }
        }).catch(res=>{
            console.log(res)
        })
    }
    handleOk(value) {
        this.setState({
            gender: value,
            pickerVisible: false
        })
    }
    handleCancel() {
        this.setState({
            pickerVisible: false
        })
    }
    changeGender() {
        this.setState({
            pickerVisible: true
        })
    }
    save() {
        console.log(this.state.gender, this.state.nickname, this.state.head)
        request(`${base.baseUrl}/user/myinfo/updateuser?token=${base.token}`, 'post', {
            uid: this.state.uid,
            gender: this.state.gender,
            head: this.state.headName,
            nickname: this.state.nickname,
        }).then(res => {
            console.log(res)
            if (res.code == 200) {
                this.props.navigation.navigate('UserScreen')
                DeviceEventEmitter.emit('refresh', {
                    'newMessage': '新消息',
                    'messageCount': 5,
                })
            } else {

            }
        })
    }
    selectImage() {
        // ImagePicker.openPicker({
        //     width: 400, 
        //     height: 400, 
        //     cropping: true,
        //     cropperCircleOverlay:true,
        //     cropperChooseText:'选择',
        //     cropperCancelText:'取消',
        //     loadingLabelText:'加载中'
        //  }).then(image => { 
        //     console.log(image);
        //  });
        // ImagePicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        // }).then(image => {
        //     console.log(image);
        // });
    }
    render() {
        return (
            <View>
                <SafeAreaView style={{ backgroundColor: '#fff' }}></SafeAreaView>
                <SafeAreaView>
                    <Header title="个人资料" left={true} back={this.back.bind(this)}>
                        <TouchableHighlight underlayColor="none" onPress={this.save.bind(this)}>
                            <Icon name="check" size={24} color="#e83e36"></Icon>
                        </TouchableHighlight>
                    </Header>
                    <View style={styles.content}>
                        <TouchableHighlight underlayColor="none" onPress={this.openDialog.bind(this)}>
                            <View style={[styles.contentItem, styles.contentHeaderItem]}>
                                <Text style={styles.contentText}>
                                    头像
                                    </Text>
                                <View style={styles.rightWrap}>
                                    <View style={styles.headerWrap}>
                                        <Image style={styles.header} source={{ uri: 'http:' + this.state.head }}></Image>
                                    </View>
                                    <Icon name="right" size={20} />
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View style={styles.contentItem}>
                            <Text style={styles.contentText}>
                                昵称
                                </Text>
                            <View style={{ flexDirection: 'row' }}>
                                {/* <Text style={styles.contentText}> */}
                                <TextInput style={styles.input} value={this.state.nickname} onChangeText={text => this.setState({ nickname: text })}></TextInput>

                                {/* </Text> */}
                                <Icon style={{ marginLeft: 20 }} name="right" size={20} />
                            </View>
                        </View>
                        <TouchableHighlight underlayColor='none' onPress={this.changeGender.bind(this)}>
                            <View style={styles.contentItem}>
                                <Text style={styles.contentText}>
                                    性别
                            </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.contentText}>
                                        {this.state.gender == 1 ? '男' : '女'}
                                    </Text>
                                    <Icon style={{ marginLeft: 20 }} name="right" size={20} />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <CustomDialog visible={this.state.dialogVisible} dialog={this.state.dialog} closeDialog={this.closeDialog.bind(this)} click={this.click.bind(this)}></CustomDialog>
                    <CustomPicker visible={this.state.pickerVisible} option={this.state.option} value={this.state.gender} handleOk={this.handleOk.bind(this)} handleCancel={this.handleCancel.bind(this)}></CustomPicker>
                </SafeAreaView>
                <SafeAreaView></SafeAreaView>
            </View>
        )
    }
    componentDidMount() {
       
       
        console.log(this.props)
    }
}

export default ProfileScreen