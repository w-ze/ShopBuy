import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1
    },
    left: {
        width: 60
    },
    leftButton: {
        fontSize: 40,
        padding: 10,
    },
    titleWrap: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    },
    right: {
        width: 60
    }
})

export default styles