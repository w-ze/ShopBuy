import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex: 1,
        justifyContent: 'flex-end'
    },
    operation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: 40,
        alignItems:'center'
    },
    buttonText: {
        color: '#157efb',
        fontSize: 18
    },
})

export default styles