import React, { Component } from 'react';

import {
    View,
    Text,
    Modal,
    SafeAreaView,
    TouchableHighlight
} from 'react-native'

import { Picker } from '@react-native-community/picker';

import styles from '../styles/customPicker'

class CustomPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }
    render() {
        return (
            <View>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.props.visible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <SafeAreaView style={styles.content}>
                        <View style={styles.operation}>
                            <TouchableHighlight underlayColor="none" onPress={this.props.handleCancel.bind(this)}>
                                <Text style={styles.buttonText}>
                                    取消
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="none" onPress={this.props.handleOk.bind(this,this.state.value)}>
                                <Text style={styles.buttonText}>
                                    确认
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Picker
                            selectedValue={this.state.value}
                            style={{ backgroundColor:'#fff' }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ value: itemValue })
                            }>
                                {
                                    this.props.option.map((item,index)=>{
                                        return(
                                            <Picker.Item label={item.title} value={item.value} key={index}/>
                                        )
                                    })
                                }
                        </Picker>
                    </SafeAreaView>
                    <SafeAreaView style={{backgroundColor:'#fff'}}></SafeAreaView>
                </Modal>
            </View>
        )
    }
}

export default CustomPicker