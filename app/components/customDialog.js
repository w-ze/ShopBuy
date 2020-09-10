import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    Modal,
    SafeAreaView
} from 'react-native'

import styles from '../styles/customDialog'

class CustomDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.modalWrap}>
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
                            <View style={styles.buttonWrap}>
                                {
                                    this.props.dialog.map((item, index) => {
                                        return (
                                            <TouchableHighlight style={styles.button} underlayColor="none"  key={index} onPress={this.props.click.bind(this,index)}>
                                                <Text style={styles.buttonText}>
                                                    {item}
                                                </Text>
                                            </TouchableHighlight>
                                        )
                                    })
                                }
                            </View>
                            <View style={styles.cancelButtonWrap}>
                                <TouchableHighlight style={styles.button} underlayColor="none" onPress={this.props.closeDialog.bind(this)}>
                                    <Text style={styles.buttonText}>
                                        取消
                                    </Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>
        )
    }
}

export default CustomDialog