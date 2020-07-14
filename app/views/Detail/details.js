import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native'

import Button from '@ant-design/react-native/lib/button';

class DetailsScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Button>Start</Button>
            </View>
        )
    }
}

export default DetailsScreen