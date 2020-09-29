import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        borderBottomColor: '#efefef',
        borderBottomWidth: 1
    },
    inputWrap: {
        flex: 1,
        paddingVertical: 10,
    },
    input: {
        borderColor: '#b2b2b2',
        borderWidth: 1,
        flex: 1
    },
    icon: {
        padding: 10
    },
    contentWrap: {
        padding: 20
    },
    title: {
        fontSize: 16
    },
    content: {
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemWrap:{
        width:'33%'
    },
    item: {
        borderColor: '#efefef',
        borderWidth: 1,
        padding:10,
        margin:10,
        borderRadius:30,
        alignItems:'center'
    },
    itemText:{
        color:'#717376'
    }
})

export default styles