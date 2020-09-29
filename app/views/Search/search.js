import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableHighlight
} from 'react-native'

import styles from '../../styles/search'

import Icon from 'react-native-vector-icons/AntDesign'

// import {
//     Placeholder,
//     PlaceholderMedia,
//     PlaceholderLine,
//     Fade
// } from "rn-placeholder";

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: ""
        }
    }
    changText(e) {
        this.setState({
            keywords: e
        })
    }
    goBack(){
        this.props.navigation.goBack()
    }
    search(){
        this.props.navigation.navigate('ResultScreen',{
            keywords:this.state.keywords
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <SafeAreaView></SafeAreaView>
                <SafeAreaView>
                    <View style={styles.header}>
                        <TouchableHighlight underlayColor="none" onPress={this.goBack.bind(this)}>
                            <Icon name="close" size={32} style={styles.icon}></Icon>
                        </TouchableHighlight>
                        <View style={styles.inputWrap}>
                            <TextInput value={this.state.keywords} style={styles.input} placeholder="请输入宝贝名称" onChangeText={this.changText.bind(this)}></TextInput>
                        </View>
                        <TouchableHighlight underlayColor="none" onPress={this.search.bind(this)}>
                            <Icon name="search1" size={32} style={styles.icon}></Icon>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.contentWrap}>
                        <Text style={styles.title}>
                            热门搜索
                        </Text>
                        <View style={styles.content}>
                            <View style={styles.itemWrap}>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>
                                        电脑
                                </Text>
                                </View>
                            </View>
                            <View style={styles.itemWrap}>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>
                                        电脑
                                </Text>
                                </View>
                            </View>
                            <View style={styles.itemWrap}>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>
                                        电脑
                                </Text>
                                </View>
                            </View>
                            <View style={styles.itemWrap}>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>
                                        电脑
                                </Text>
                                </View>
                            </View>
                            <View style={styles.itemWrap}>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>
                                        电脑
                                </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* <Placeholder
                        Animation={Fade}
                        Left={PlaceholderMedia}
                        // Right={PlaceholderLine}
                    >
                        <PlaceholderMedia color="#f00" size={80}/>
                        <PlaceholderLine  width={10} />
                        <PlaceholderLine />
                        <PlaceholderLine width={30} />
                    </Placeholder> */}
                </SafeAreaView>
                <SafeAreaView></SafeAreaView>

            </View>
        )
    }
}

export default SearchScreen