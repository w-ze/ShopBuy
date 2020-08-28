import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/header'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.left}>
                    {this.props.left ?
                        <TouchableHighlight underlayColor="none" onPress={this.props.back.bind(this)}>
                            <Icon style={styles.leftButton} name='angle-left' size={30} />
                        </TouchableHighlight> : null}
                </View>

                <View style={styles.titleWrap}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.right}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default Header