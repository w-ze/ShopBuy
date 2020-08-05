import React, { Component } from 'react';

import Swiper from 'react-native-swiper'
import { request } from '../../lib/request'
import {
    View,
    Text,
    SafeAreaView,
    TouchableHighlight,
    ScrollView,
    Image
} from 'react-native'
import styles from '../../styles/home'

import Icon from 'react-native-vector-icons/FontAwesome';

import LazyImage from 'animated-lazy-image';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiper: [],
            nav: [],
            good: [],
            recom: []
        }
    }
    fetchData() {
        request(`${base.baseUrl}/home/index/slide?token=${base.token}`).then(res => {
            if (res.code == 200) {
                this.setState({
                    swiper: res.data
                })
            }
        })
        request(`${base.baseUrl}/home/index/nav?token=${base.token}`).then(res => {
            if (res.code == 200) {
                this.setState({
                    nav: res.data
                })
            }
        })
        request(`${base.baseUrl}/home/index/goodsLevel?token=${base.token}`).then(res => {
            if (res.code == 200) {
                this.setState({
                    good: res.data
                })
            }
        })
        request(`${base.baseUrl}/home/index/recom?token=${base.token}`).then(res => {
            if (res.code == 200) {
                this.setState({
                    recom: res.data
                })
            }
        })
    }
    classify(cid) {
        this.props.navigation.navigate('ClassifyScreen', {
            cid: cid
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
                <SafeAreaView style={{ backgroundColor: "#fd8538" }}></SafeAreaView>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <TouchableHighlight underlayColor="none" onPress={this.classify.bind(this, 492)}>
                            <Icon name='list-ul' size={30} color="#ffffff" />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ flex: 1 }} underlayColor="none" onPress={() => alert(1)}>
                            <View style={styles.search}>
                                <Icon name='search' size={18} color="#f0e0dc" />
                                <Text style={styles.searchText}>请输入宝贝名称</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="none" onPress={() => alert(1)}>
                            <Text style={styles.login}>登录</Text>
                        </TouchableHighlight>
                    </View>
                    <ScrollView style={styles.scrollView}>
                        {
                            this.state.swiper.length ? <Swiper style={styles.wrapper} autoplay={true}>
                                {
                                    this.state.swiper.map((item, index) => {
                                        return (
                                            <View style={styles.slide} key={index}>
                                                <Image style={styles.image} source={{ uri: 'http:' + item.image }}></Image>
                                            </View>
                                        )
                                    })
                                }
                            </Swiper> : null
                        }
                        <View style={styles.nav}>
                            {
                                this.state.nav.map((item, index) => {
                                    return (
                                        <TouchableHighlight underlayColor="none" onPress={this.classify.bind(this, item.cid)} key={item.cid}>
                                            <View underlayColor="none" onPress={() => alert(1)} style={styles.navItem}>
                                                <Image style={styles.navIcon} source={{ uri: 'http:' + item.image }}></Image>
                                                <Text style={styles.navText}>{item.title}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }
                        </View>
                        {
                            this.state.good.map((item, index) => {
                                return (
                                    index == 1 ?
                                        <View style={styles.good} key={index}>
                                            <View style={styles.goodTitle}>
                                                <Text style={styles.goodTitleText2}>—— {item.title} ——</Text>
                                            </View>
                                            {
                                                item.items.slice(0, 2).map((item2, index2) => {
                                                    return (
                                                        <TouchableHighlight style={styles.goodItem4} underlayColor="none" onPress={this.detail.bind(this, item2.gid)} key={item2.gid}>
                                                            <View style={styles.item}>
                                                                <View style={styles.itemTitleWrap}>
                                                                    <Text style={styles.itemTitle} numberOfLines={1}>{item2.title}</Text>
                                                                </View>
                                                                <View style={styles.itemSubtitleWrap3}>
                                                                    <Text style={styles.itemSubtitle3} numberOfLines={1}>火爆开售</Text>
                                                                </View>
                                                                <View style={styles.imgwrap4}>
                                                                    <LazyImage
                                                                        style={styles.itemImg}
                                                                        source={'http:' + item2.image}
                                                                        placeholderColor="#e9e9e9"
                                                                    />
                                                                </View>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )
                                                })
                                            }
                                            {
                                                item.items.slice(2).map((item2, index2) => {
                                                    return (
                                                        <TouchableHighlight style={styles.goodItem3} underlayColor="none" onPress={this.detail.bind(this, item2.gid)} key={item2.gid}>
                                                            <View style={styles.item}>
                                                                <View style={styles.itemTitleWrap}>
                                                                    <Text style={styles.itemTitle} numberOfLines={1}>{item2.title}</Text>
                                                                </View>
                                                                <View style={styles.imgwrap3}>
                                                                    <LazyImage
                                                                        style={styles.itemImg}
                                                                        source={'http:' + item2.image}
                                                                        placeholderColor="#e9e9e9"
                                                                    />
                                                                </View>
                                                                <View style={styles.itemPriceWrap1}>
                                                                    <Text style={styles.itemPrice1} numberOfLines={1}>￥{item2.price}</Text>
                                                                </View>
                                                                <View style={styles.itemPriceWrap2}>
                                                                    <Text style={styles.itemPrice2} numberOfLines={1}>￥{item2.price * 2}</Text>
                                                                </View>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )
                                                })
                                            }
                                        </View>
                                        :
                                        <View style={styles.good} key={index}>
                                            <View style={styles.goodTitle}>
                                                <Text style={index ? styles.goodTitleText3 : styles.goodTitleText1}>—— {item.title} ——</Text>
                                            </View>
                                            <TouchableHighlight style={styles.goodItem1} underlayColor="none" onPress={this.detail.bind(this, item.items[0].gid)} >
                                                <View style={styles.itemRow}>
                                                    <View style={styles.itemTitleWrap}>
                                                        <Text style={styles.itemTitle} numberOfLines={1}>{item.items[0].title}</Text>
                                                    </View>
                                                    <View style={styles.itemSubtitleWrap1}>
                                                        <Text style={index ? styles.itemSubtitle4 : styles.itemSubtitle1}>精品打折</Text>
                                                    </View>
                                                    <View style={index ? styles.itemSubtitleWrap4 : styles.itemSubtitleWrap2}>
                                                        <Text style={styles.itemSubtitle2}>{item.items[0].price}元</Text>
                                                    </View>
                                                    <View style={styles.imgwrap1}>
                                                        <LazyImage
                                                            style={styles.itemImg}
                                                            source={'http:' + item.items[0].image}
                                                            placeholderColor="#e9e9e9"
                                                        />
                                                    </View>
                                                </View>
                                            </TouchableHighlight>
                                            <View style={styles.goodItemwrap2}>
                                                {
                                                    item.items.slice(1, 3).map((item2, index2) => {
                                                        return (
                                                            <TouchableHighlight style={styles.goodItem2} underlayColor="none" onPress={this.detail.bind(this, item2.gid)} key={item2.gid}>
                                                                <View style={styles.itemRow} >
                                                                    <View style={styles.goodItempart1}>
                                                                        <View style={styles.itemTitleWrap}>
                                                                            <Text style={styles.itemTitle} numberOfLines={1}>{item2.title}</Text>
                                                                        </View>
                                                                        <View style={styles.itemSubtitleWrap3}>
                                                                            <Text style={styles.itemSubtitle3}>精品打折</Text>
                                                                        </View>
                                                                    </View>
                                                                    <View style={styles.imgwrap2}>
                                                                        <LazyImage
                                                                            style={styles.itemImg}
                                                                            source={'http:' + item2.image}
                                                                            placeholderColor="#e9e9e9"
                                                                        />
                                                                    </View>
                                                                </View>
                                                            </TouchableHighlight>
                                                        )
                                                    })
                                                }
                                            </View>
                                            {
                                                item.items.slice(3).map((item2, index2) => {
                                                    return (
                                                        <TouchableHighlight style={styles.goodItem3} underlayColor="none" onPress={this.detail.bind(this, item2.gid)} key={item2.gid}>
                                                            <View style={styles.item} >
                                                                <View style={styles.itemTitleWrap}>
                                                                    <Text style={styles.itemTitle} numberOfLines={1}>{item2.title}</Text>
                                                                </View>
                                                                <View style={styles.imgwrap3}>
                                                                    <LazyImage
                                                                        style={styles.itemImg}
                                                                        source={'http:' + item2.image}
                                                                        placeholderColor="#e9e9e9"
                                                                    />
                                                                </View>
                                                                <View style={styles.itemPriceWrap1}>
                                                                    <Text style={styles.itemPrice1} numberOfLines={1}>￥{item2.price}</Text>
                                                                </View>
                                                                <View style={styles.itemPriceWrap2}>
                                                                    <Text style={styles.itemPrice2} numberOfLines={1}>￥{item2.price * 2}</Text>
                                                                </View>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )
                                                })
                                            }
                                        </View>
                                )
                            })
                        }
                        <View style={styles.titleWrap}>
                            <View style={styles.line}></View>
                            <View style={styles.titleTextWrap}>
                                <Text style={styles.titleText}>
                                    为你推荐
                                </Text>
                            </View>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.recomList}>
                            {
                                this.state.recom.map((item, index) => {
                                    return (
                                        <TouchableHighlight style={styles.recomWrap} underlayColor="none" onPress={this.detail.bind(this, item.gid)} key={item.gid}>
                                            <View style={styles.recomItem}>
                                                <LazyImage
                                                    style={styles.recomImg}
                                                    source={'http:' + item.image}
                                                    placeholderColor="#e9e9e9"
                                                />
                                                <Text style={styles.recomTitle} numberOfLines={2}>
                                                    {item.title}
                                                </Text>
                                                <Text style={styles.recomPrice}>
                                                    ￥{item.price}
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }

                        </View>
                    </ScrollView>
                </SafeAreaView>
                <SafeAreaView></SafeAreaView>
            </View>
        )
    }

    componentDidMount() {
        this.fetchData()
    }
}

export default HomeScreen