import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    top: {
        height: 140,
        backgroundColor: "#eb3c2e",
        flexDirection: 'row',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    headerWrap: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        marginRight: 20
    },
    header: {
        width: '100%',
        height: '100%'
    },
    nameWrap: {
        flex: 1,
        justifyContent: 'center'
    },
    nickName: {
        color: '#ffffff',
        fontSize: 14,
        lineHeight: 18
    },
    orderAllWrap: {
        padding: 10,
        height: 50,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    orderAll: {
        fontSize: 16
    },
    orderAllView: {
        fontSize: 16
    },
    statusWrap: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopColor: '#efefef',
        borderTopWidth: 1,
        borderBottomColor: '#efefef',
        borderBottomWidth: 1
    },
    statusItem: {
        alignItems: 'center'
    },
    contentWrap: {
        marginTop: 10
    },
    contentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
        height: 50,
        paddingHorizontal: 10
    },
    contentText: {
        fontSize: 20
    },
    buttonWrap: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff'
    },
    button: {
        backgroundColor: '#e32025',
        width: 300,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18
    },
    buttonText: {
        color: '#ffffff'
    }
})

export default styles