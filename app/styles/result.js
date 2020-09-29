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
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#efefef',
        lineHeight: 28
    },
    icon: {
        padding: 10
    },
    bar: {
        height: 50,
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
    barItem:{
        flexDirection:'row',
        paddingRight:20
    },
    barText:{
        fontSize:14
    },
    
})

export default styles