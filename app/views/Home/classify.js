import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableHighlight,
    ScrollView
} from 'react-native'

import Header from '../../components/header'
import styles from '../../styles/classify';

import { request } from '../../lib/request'

import LazyImage from 'animated-lazy-image';

class ClassifyScreen extends Component {
    constructor(props) {
        super(props),
            this.state = {
                classify: [],
                good: [],
                cid: this.props.route.params.cid
            }
    }
    back() {
        this.props.navigation.goBack()
    }
    fetchData() {
        this.setState({
            cid: this.props.route.params.cid
        })
        request(`${base.baseUrl}/home/category/menu?token=${base.token}`).then(res => {
            if (res.code == 200) {
                this.setState({
                    classify: res.data,
                })
            }
        })
    }
    classifyList(item) {
        return (
            <TouchableHighlight underlayColor="none" onPress={this.classifyChange.bind(this, item.cid)}>
                <View style={styles.classifyItem}>
                    <Text style={this.state.cid == item.cid ? styles.classifyItemTitleActive : styles.classifyItemTitle}>{item.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    fetchGood() {
        console.log(this.state.cid)
        request(`${base.baseUrl}/home/category/show?cid=${this.state.cid}&token=${base.token}`).then(res => {
            if (res.code == 200) {
                this.setState({
                    good: res.data
                })
            } else {
                this.setState({
                    good: []
                })
            }
        })
    }
    classifyChange(cid) {
        this.setState({
            cid: cid
        }, () => {
            this.fetchGood()
        })
    }
    detail(gid) {
        this.props.navigation.navigate('Detail', {
            gid: gid,
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: '#ffffff' }}></SafeAreaView>
                <SafeAreaView style={{ flex: 1 }}>
                    <Header title="商品分类" back={this.back.bind(this)}></Header>
                    <View style={styles.content}>
                        <View style={styles.classifyWrap}>
                            <FlatList
                                data={this.state.classify}
                                renderItem={({ item }) =>
                                    this.classifyList(item)
                                }
                                keyExtractor={item => item.cid}
                            />
                        </View>
                        <View style={styles.goodWrap}>
                            {
                                this.state.good.length ?
                                    <ScrollView>
                                        {
                                            this.state.good.map((item, index) => {
                                                return (
                                                    <View style={styles.goodList} key={item.cid}>
                                                        <View style={styles.goodTitleWrap}>
                                                            <Text style={styles.goodTitle}>
                                                                {item.title}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.goodContent}>
                                                            {
                                                                item.goods ? item.goods.map((item2, index2) => {
                                                                    return (
                                                                        <TouchableHighlight style={styles.goodItemBtn} underlayColor="none" key={item2.gid} onPress={this.detail.bind(this, item2.gid)}>
                                                                            <View style={styles.goodItem}>
                                                                                <View style={styles.goodImgWrap}>
                                                                                    <LazyImage
                                                                                        style={styles.goodImg}
                                                                                        source={'http:' + item2.image}
                                                                                        placeholderColor="#e9e9e9"
                                                                                    />
                                                                                </View>
                                                                                <View style={styles.goodTextWrap}>
                                                                                    <Text style={styles.goodText} numberOfLines={1}>{item2.title}</Text>
                                                                                </View>
                                                                            </View>
                                                                        </TouchableHighlight>
                                                                    )
                                                                }) : <Text></Text>
                                                            }
                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                    </ScrollView> :
                                    <Text>没有相关商品</Text>
                            }
                        </View>
                    </View>
                </SafeAreaView>
                <SafeAreaView></SafeAreaView>
            </View>
        )
    }
    componentDidMount() {
        console.log(this.props.route.params.cid)
        this.fetchData()
        this.fetchGood()
    }
}

export default ClassifyScreen