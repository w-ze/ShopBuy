import React, { Component } from 'react';

import {
    View,
    Text,
    FlatList,
    Image
} from 'react-native'

import { connect } from 'react-redux'

import styles from '../../styles/detail'

import { request } from '../../lib/request'

class EvalueteScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            pageNo: 1,
            page:{}
        }
    }
    FetchData() {
        request(`${base.baseUrl}/home/reviews/index?gid=${this.props.state.goodDetail.gid}&page=${this.state.pageNo}&token=${base.token}`).then(res => {
            console.log(res)
            if (res.code == 200) {
                this.setState({
                    reviews: [...this.state.reviews,...res.data],
                    page: res.pageinfo,
                    visible: false
                })
            }
        })
    }
    renderItem(item) {
        return (
            <View style={styles.goodEvaluteItem}>
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
    }
    empty() {
        return (
            <View style={styles.noReviewWrap}>
                <Text style={styles.noReview}>暂无评价！</Text>
            </View>
        )
    }
    header() {
        return (
            <Text style={styles.goodEvaluteTitle}>
                商品评价（{this.state.reviews.length ? this.state.page.total : 0}）
            </Text>
        )
    }
    footer() {
        return (
            <View>

            </View>
        )
    }
    endReached(){
        this.setState({
            pageNo:++this.state.pageNo
        },()=>{
            this.FetchData()
        })
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.reviews}
                    renderItem={({ item }) => this.renderItem(item)}
                    // keyExtractor={(item,index) => index}
                    style={{ flex: 1 }}
                    ListEmptyComponent={this.empty.bind(this)}
                    ListHeaderComponent={this.header.bind(this)}
                    ListFooterComponent={this.footer.bind(this)}
                    style={[styles.goodEvalute, { marginTop: 0 }]}
                    onEndReachedThreshold={0.1}
                    onEndReached={this.endReached.bind(this)}
                >
                    {/* <View style={styles.goodEvalute}>
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
                    </View> */}
                </FlatList>
            </View>
        )
    }
    componentDidMount() {
        this.FetchData()
    }
}

export default connect((state) => {
    return {
        state
    }
})(EvalueteScreen)