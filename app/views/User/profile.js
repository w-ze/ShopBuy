import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableHighlight,
    TextInput
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
            ]
        }
    }
    back() {
        this.props.navigation.goBack()
    }
    openDialog() {
        this.setState({
            visible: true
        })
    }
    closeDialog() {
        this.setState({
            visible: false
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
                console.log(image);
                this.closeDialog()
                this.uploadHeader(image)
            });
        }
    }
    uploadHeader(image) {
        const formData = new FormData();
        const file = {
            uri: image.path,
            type: image.mime,
            name: image.filename,
            size: image.size,
        };
        formData.append('headfile', file);
        console.log(formData)
        request(`${base.baseUrl}/user/myinfo/formdatahead?token=${base.token}`, 'file', formData).then(res => {
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
                        {/* <Icon name="check" size={24} color="#e83e36"></Icon> */}
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
                                <TextInput value={this.state.nickname} onChangeText={text => this.setState({ nickname: text })}></TextInput>

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