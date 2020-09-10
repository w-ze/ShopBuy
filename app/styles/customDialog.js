import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modalWrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex: 1,
        justifyContent: 'flex-end'
    },
    operation: {
        padding: 10
    },
    buttonWrap: {
        borderRadius: 14,
        overflow: 'hidden',
        marginBottom:10
    },
    button: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor:'#efefef',
        borderBottomWidth:1
    },
    buttonText: {
        color: '#157efb',
        fontSize:18
    },
    cancelButtonWrap:{
        borderRadius: 14,
        overflow: 'hidden',
    }
})

export default styles