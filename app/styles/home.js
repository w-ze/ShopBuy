import React, { Component } from 'react';

import { StyleSheet } from 'react-native'
import { Dimensions, Platform } from 'react-native'
import { isiPhoneX } from '../lib/isiPhoneX'

const height = Dimensions.get('window').height;

const device = isiPhoneX()


const styles = StyleSheet.create({
    header: {
        height: 50,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fd8538'
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 4,
        backgroundColor: '#fd502f',
        marginLeft: 10,
        height: 30,
        justifyContent: 'center'
    },
    searchText: {
        color: '#f0e0dc',
        fontSize: 20,
        paddingHorizontal: 5
    },
    login: {
        color: '#ffffff',
        fontSize: 22,
        lineHeight: 30,
        paddingLeft: 10
    },
    scrollView: {
        backgroundColor: '#efefef',
        // height: device == 'iPhoneX' ? height - 180 : height - 120
    },
    wrapper: {
        height: 180
    },
    slide: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    nav: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15
    },
    navText: {
        color: '#7b7f82',
        fontSize: 16,
        textAlign: 'center'
    },
    navIcon: {
        width: 50,
        height: 50,
        marginBottom: 10
    },
    navItem: {
        alignItems: 'center'
    },
    good: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
        marginTop: 10
    },
    goodTitle: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goodTitleText1: {
        fontSize: 20,
        color: "#f73b61"
    },
    goodTitleText2: {
        fontSize: 20,
        color: "#fe6719"
    },
    goodTitleText3: {
        fontSize: 20,
        color: "#5fc600"
    },
    goodItem1: {
        width: '50%',
        height: 180,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#efefef',
        padding: 5,
    },
    goodItemwrap2: {
        width: '50%',
    },
    goodItem2: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopColor: '#efefef',
        borderBottomColor: '#efefef',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 5
    },
    goodItem3: {
        width: '25%',
        alignItems: 'center',
        padding: 5,
        borderRightColor: '#efefef',
        borderBottomColor: '#efefef',
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    goodItem4: {
        width: '50%',
        alignItems: 'center',
        padding: 5,
        borderRightColor: '#efefef',
        borderBottomColor: '#efefef',
        borderTopColor: '#efefef',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    goodItempart1: {
        width: '60%'
    },
    itemImg: {
        width: '100%',
        height: '100%'
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%'
    },
    itemSubtitle1: {
        color: '#cb385d',
        fontSize: 16,
    },
    itemSubtitle2: {
        fontSize: 18,
        color: '#ffffff'
    },
    itemSubtitle4: {
        color: '#5fc600',
        fontSize: 16,
    },
    itemTitleWrap: {
        width: '100%',
        paddingVertical: 3
    },
    itemSubtitleWrap1: {
        width: '50%',
    },
    itemSubtitleWrap2: {
        backgroundColor: '#f21d4f',
        borderRadius: 8
    },
    itemSubtitleWrap4: {
        backgroundColor: '#5fc600',
        borderRadius: 8
    },
    imgwrap1: {
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 5,
        height: 120
    },
    imgwrap2: {
        width: '40%',
        height: '100%',
        paddingLeft: 5
    },
    itemSubtitle3: {
        color: '#7B7F82',
        fontSize: 16
    },
    imgwrap3: {
        width: '100%',
        height: 105,
        padding: 5
    },
    itemPrice1: {
        color: '#d32a4e',
        fontSize: 14
    },
    itemPrice2: {
        color: '#7b7f82',
        textDecorationLine: 'line-through',
        fontSize: 14
    },
    imgwrap4: {
        width: 100,
        height: 150
    },
    titleWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20
    },
    line: {
        height: 1,
        backgroundColor: '#d4d4d4',
        width: '35%'
    },
    titleTextWrap: {
        flex: 1,
        alignItems: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    recomList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    recomWrap: {
        width: '50%',
        padding: 10,
    },
    recomItem: {
        padding:10,
        backgroundColor: '#ffffff'
    },
    recomImg: {
        width: '100%',
        height: 150,
        alignSelf: 'center'
    },
    recomTitle: {
        fontSize: 16,
        paddingVertical:5
    },
    recomPrice: {
        color: '#d32a44',
        fontSize: 15
    },
    item: {
        width: '100%',
        alignItems: 'center'
    },
    itemRow: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export { styles as default }