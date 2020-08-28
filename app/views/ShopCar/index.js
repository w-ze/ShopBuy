import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    Image,
    TouchableHighlight
} from 'react-native'

import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import CheckBox from 'react-native-check-box'

import Header from '../../components/header'

import styles from '../../styles/shopcar'

import { connect } from 'react-redux'
import actions from '../../store/actions/index'


class ShopCarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopCar: this.props.state.Cart,
            shopCarData: this.props.state.Cart.data,
            checkedAll: false
        }
    }
    back() {
        this.props.navigation.goBack()
    }
    subCount(index) {
        this.props.dispatch(actions.Cart.subCount(index))
    }
    addCount(index) {
        this.props.dispatch(actions.Cart.addCount(index))
    }
    deleteItem(index) {
        this.props.dispatch(actions.Cart.deleteItem(index))
    }
    checked(index) {
        console.log(index)
        this.props.dispatch(actions.Cart.checked(index))
    }
    checkedAll() {
        this.setState({
            checkedAll: !this.state.checkedAll
        }, () => {
            this.props.dispatch(actions.Cart.checkedAll(this.state.checkedAll))
        })
    }
    shopCarItem(item, index) {
        return (
            <View style={styles.item}>
                <View style={styles.radioWrap}>
                    <CheckBox
                        checkBoxColor="#d62619"
                        onClick={this.checked.bind(this, index)}
                        isChecked={item.checked}
                    />
                </View>
                <View style={styles.headerWrap}>
                    <View style={styles.imgWrap}>
                        <Image style={styles.header} source={{ uri: 'http:' + item.img }} />
                    </View>
                    <TouchableHighlight underlayColor="none" onPress={this.deleteItem.bind(this, index)}>
                        <Text style={styles.delete}>
                            删除
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.titleWrap}>
                    <Text style={styles.title} numberOfLines={2}>
                        {item.title}
                    </Text>
                    <View style={styles.attr}>
                        {
                            item.attrs.map((item2, index2) => {
                                return (
                                    <View key={index2} style={styles.attrItem}>
                                        <Text style={styles.attrText}>
                                            {item2.title}:
                                        </Text>
                                        <Text style={styles.attrText}>
                                            {item2.param[0].title}
                                        </Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View style={styles.footerWrap}>
                        <Text style={styles.price}>
                            ￥{item.price}
                        </Text>
                        <View style={styles.CountWrap}>
                            <TouchableHighlight underlayColor="none" style={styles.Count} onPress={this.subCount.bind(this, index)}>
                                <Text>-</Text>
                            </TouchableHighlight>
                            <View style={styles.Count}>
                                <Text>{item.amount}</Text>
                            </View>
                            <TouchableHighlight underlayColor="none" style={styles.Count} onPress={this.addCount.bind(this, index)}>
                                <Text>+</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: '#ffffff' }}></SafeAreaView>
                <SafeAreaView style={{ flex: 1 }}>
                    <Header left={false} title="购物车" back={this.back.bind()}></Header>
                    <FlatList
                        data={this.state.shopCarData}
                        renderItem={({ item, index }) =>
                            this.shopCarItem(item, index)
                        }
                        keyExtractor={(item, index) => index.toString()}
                    ></FlatList>
                    <View style={styles.bottom}>
                        <View style={styles.allradioWrap}>
                            <CheckBox
                                checkBoxColor="#d62619"
                                onClick={this.checkedAll.bind(this)}
                                isChecked={this.state.checkedAll}
                            />
                            <Text>
                                全选
                            </Text>
                        </View>
                        <View style={styles.buttonWrap}>
                            <Text style={styles.totalWrap}>
                                运费：
                                <Text style={styles.total}>
                                    ￥{this.props.state.Cart.freight}
                                </Text>
                                合计：
                                <Text style={styles.total}>
                                    ￥{this.props.state.Cart.total}
                                </Text>
                            </Text>
                            <TouchableHighlight style={styles.button} underlayColor="none">
                                <Text style={styles.buttoText}>
                                    去结算
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </SafeAreaView>
                <SafeAreaView></SafeAreaView>
            </View>
        )
    }
    componentDidMount() {

    }
}

export default connect((state) => {
    // console.log(state)
    return {
        state
    }
})(ShopCarScreen)