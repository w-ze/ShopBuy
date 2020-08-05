import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native'

import WebView from 'react-native-webview'

import { request } from '../../lib/request'

import Button from '@ant-design/react-native/lib/button';

import { connect } from 'react-redux'

class DetailsScreen extends Component {
    constructor(props) {
        super(props),
            this.state = {
                body: ""
            }
    }
    FetchData() {
        request(`${base.baseUrl}/home/goods/info?gid=${this.props.state.goodDetail.gid}&type=details&token=${base.token}`).then(res => {
            if (res.code == 200) {
                console.log(res)
                this.setState({
                    body: res.data.bodys
                })
            }
        })
    }
    render() {
        return (
            <View style={{flex:1}}>
                <WebView
                    source={{ html: this.state.body,originWhitelist:'*' }}
                    // source={{ uri: 'https://baidu.com',originWhitelist:'*' }}
                />
            </View>
        )
    }
    componentDidMount() {
        console.log(this.props)
        this.FetchData()
    }
}

export default connect((state) => {
    return {
        state
    }
})(DetailsScreen)