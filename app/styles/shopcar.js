import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        borderTopColor: '#efefef',
        borderBottomColor: '#efefef',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 100,
        padding: 10
    },
    radioWrap: {
        width: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    headerWrap: {
        height: '100%',
        alignItems: 'center',
        width: 80
    },
    imgWrap: {
        width: 60,
        height: 60,
    },
    header: {
        width: '100%',
        height: '100%'
    },
    delete: {
        marginTop: 5,
        color: '#b5b5b5'
    },
    titleWrap: {
        flex: 1
    },
    title: {
        color: '#333333',
        fontSize: 12
    },
    attr: {
        flexDirection: 'row',

    },
    attrItem: {
        flexDirection: 'row',
        marginRight:5
    },
    attrText: {
        fontSize: 14,
        color: '#333333',
    },
    footerWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    price: {
        color: '#cc0004'
    },
    CountWrap: {
        flexDirection: 'row',

    },
    Count: {
        width: 30,
        height: 30,
        marginRight: 2,
        backgroundColor: '#efefef',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    allradioWrap: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems:'center'
    },
    buttonWrap: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center'
    },
    totalWrap: {
        fontSize: 12,
        marginRight: 10
    },
    total: {
        color: '#cc0004',
    },
    button: {
        height: '100%',
        width: 100,
        backgroundColor: '#cc0004',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttoText: {
        color: '#ffffff',
        fontSize: 18,
    }
})

export default styles