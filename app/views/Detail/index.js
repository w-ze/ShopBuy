import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableHighlight,
    Modal
} from 'react-native'

import { request } from '../../lib/request'
import Swiper from 'react-native-swiper'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/detail'

class DetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodInfo: {},
            swiper: [],
            reviews: [],
            page: {},
            visible: false,
            option: [],
            optionId: ""
        }
    }

    FetchData() {
        request(`${base.baseUrl}/home/goods/info?gid=${this.props.route.params.gid}&type=details&token=${base.token}`).then(res => {
            if (res.code == 200) {
                this.setState({
                    goodInfo: res.data,
                    swiper: res.data.images
                })
            }
        })
        request(`${base.baseUrl}/home/reviews/index?gid=${this.props.route.params.gid}&page=1&token=${base.token}`).then(res => {
            if (res.code == 200) {
                this.setState({
                    reviews: res.data,
                    page: res.pageinfo,
                    visible: false
                })
            }
        })
    }
    addCart() {
        this.setState({ visible: true })
        request(`${base.baseUrl}/home/goods/info?gid=${this.props.route.params.gid}&type=spec&token=${base.token}`).then(res => {
            console.log(res)
            if (res.code == 200) {
                this.setState({
                    option: res.data
                })
            }
        })
    }
    option(value) {
        this.setState({
            optionId: value
        })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        this.state.swiper.length ?
                            <Swiper style={styles.wrapper} autoplay={true}>
                                {this.state.swiper.map((item, index) => {
                                    return (
                                        <View style={styles.slide} key={index}>
                                            <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'http:' + item }} />
                                        </View>
                                    )
                                })}
                            </Swiper> : null
                    }
                    <View style={styles.goodMain}>
                        <Text style={styles.goodTitle} numberOfLines={2}>
                            {this.state.goodInfo.title}
                        </Text>
                        <Text style={styles.goodPrice}>
                            ￥{this.state.goodInfo.price}
                        </Text>
                        <View style={styles.goodSaleWrap}>
                            <Text style={styles.goodExpress}>
                                快递：{this.state.goodInfo.freight}元
                        </Text>
                            <Text style={styles.goodSale}>
                                月销量{this.state.goodInfo.sales}件
                        </Text>
                        </View>
                    </View>
                    <View style={styles.goodEvalute}>
                        <Text style={styles.goodEvaluteTitle}>
                            商品评价（{this.state.reviews.length ? this.state.page.total : 0}）
                            </Text>
                        {
                            this.state.reviews.length ?
                                this.state.reviews.map((item, index) => {
                                    return (
                                        <View style={styles.goodEvaluteItem} key={index}>
                                            <View style={styles.goodEvaluteHeader}>
                                                <Image style={styles.goodEvaluteImage} source={{ uri: 'http:' + item.head }} />
                                                <Text style={styles.goodEvaluteUser}>
                                                    {item.nickname}
                                                </Text>
                                            </View>
                                            <Text style={styles.goodEvaluteContent}>
                                                {item.content}
                                            </Text>
                                            <Text style={styles.goodEvaluteTime}>
                                                {item.times}
                                            </Text>
                                        </View>
                                    )
                                }) :
                                <View style={styles.noReviewWrap}>
                                    <Text style={styles.noReview}>暂无评价！</Text>
                                </View>
                        }

                        {
                            this.state.reviews.length ?
                                <View style={styles.goodEvaluteMoreWrap}>
                                    <Text style={styles.goodEvaluteMore}>
                                        查看更多评价
                                    </Text>
                                </View>
                                : null
                        }
                    </View>
                </ScrollView>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight style={styles.Collect} underlayColor='none' onPress={() => { alert(1) }}>
                        <Text style={styles.buttonText}>
                            收藏
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.addCart} underlayColor='none' onPress={this.addCart.bind(this)}>
                        <Text style={styles.buttonText}>
                            加入购物车
                        </Text>
                    </TouchableHighlight>
                </View>
                <Modal
                    animationType="fade"
                    visible={this.state.visible}
                    transparent={true}
                    onRequestClose={() => {
                        this.setState({

                        })
                    }}
                    onShow={() => {

                    }}>
                    <View style={styles.modalView}>
                        <TouchableHighlight underlayColor="none" style={{ flex: 1 }} onPress={() => {
                            this.setState({
                                visible: false
                            })
                        }}>
                            <View>

                            </View>
                        </TouchableHighlight>
                        <View style={styles.cartModal}>
                            <View style={styles.modalHead}>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'http:' + this.state.swiper[0] }} />
                                </View>
                                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                    <View style={styles.modalTitleWrap}>
                                        <Text style={styles.modalTitle} numberOfLines={2}>
                                            {this.state.goodInfo.title}
                                        </Text>
                                    </View>
                                    <View style={styles.modalPriceWrap}>
                                        <Text style={styles.modalPrice}>
                                            ￥{this.state.goodInfo.price}
                                        </Text>
                                        <Text style={styles.modalNum}>
                                            商品编码：{this.state.goodInfo.gid}
                                        </Text>
                                    </View>
                                </View>

                            </View>
                            {
                                this.state.option.map((item, index) => {
                                    return (
                                        <View style={styles.modalMain} key={index}>
                                            <Text style={styles.modalMainTitle}>
                                                {item.title}
                                            </Text>

                                            <View style={styles.modalOptionWrap}>

                                                {
                                                    item.values.map((item2, index2) => {
                                                        return (
                                                            <TouchableHighlight underlayColor="none" onPress={this.option.bind(this, item2.value)} style={this.state.optionId == item2.value ? styles.optionActive : styles.modalOption} key={index2}>
                                                                <Text style={this.state.optionId == item2.value ? { color: '#ffffff' } : { color: '#333333' }}>
                                                                    {item2.value}
                                                                </Text>
                                                            </TouchableHighlight>
                                                        )
                                                    })
                                                }
                                            </View>
                                        </View>
                                    )
                                })
                            }

                            <View style={styles.modalFooter}>
                                <Text style={styles.modalCount}>
                                    购买数量
                                    </Text>
                                <View style={styles.modalCounterWrap}>
                                    <TouchableHighlight style={styles.modalCounter}>
                                        <Text>-</Text>
                                    </TouchableHighlight>
                                    <View style={styles.modalCounter}>
                                        <Text>1</Text>
                                    </View>
                                    <TouchableHighlight style={styles.modalCounter}>
                                        <Text>+</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
    componentDidMount() {
        this.FetchData()
    }
}

export default DetailScreen