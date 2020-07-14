import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flex: 1
    },
    classifyWrap: {
        width: '20%',
        backgroundColor: '#ffffff',
    },
    goodWrap: {
        width: '80%',
        backgroundColor: '#efefef',
    },
    classifyItem: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(100,53,201,0.1)',
        borderBottomWidth: 1
    },
    classifyItemTitleActive: {
        color: '#ff0000'
    },
    classifyItemTitle: {
        color: '#333333'
    },
    goodWrap: {
        // paddingHorizontal:20
        flex:1
    },
    goodList: {
        padding: 15,
        flex:1
    },
    goodTitleWrap: {
        paddingBottom:10
    },
    goodTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    goodContent: {
        backgroundColor: '#ffffff',
        flexDirection:'row',
        width:'100%',
        flexWrap:'wrap',
        paddingVertical:10
    },
    goodItemBtn:{
        width: '33%',
    },
    goodItem: {
        padding: 5,
       
        alignItems:'center'
    },
    goodImgWrap: {
        width:60,
        height: 80,
    },
    goodImg: {
        width:'100%',
        height:'100%'
    },
    goodTextWrap:{
        padding:4,
        alignItems:'center',
        width:'100%'
    },
    goodText:{
        alignItems:'center'
    }
})

export default styles