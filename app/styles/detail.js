import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        height: 60
    },
    wrapper: {
        height: 400
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goodMain: {
        backgroundColor: '#ffffff',
        padding: 20
    },
    goodTitle: {
        fontSize: 16,
        lineHeight: 20
    },
    goodPrice: {
        color: '#f03036',
        fontSize: 16,
        paddingVertical: 5
    },
    goodSaleWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    goodExpress: {
        color: '#969696'
    },
    goodSale: {
        color: '#969696'
    },
    goodEvalute: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    goodEvalute1: {
        marginTop: 0
    },
    goodEvaluteItem: {
        paddingVertical: 10
    },
    goodEvaluteTitle: {
        color: '#7b7f82',
        paddingBottom: 5
    },
    goodEvaluteHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    goodEvaluteImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginRight: 10
    },
    goodEvaluteContent: {
        fontSize: 16,
        lineHeight: 20,
        paddingVertical: 10
    },
    goodEvaluteTime: {
        color: '#7b7f82'
    },
    goodEvaluteMoreWrap: {
        alignItems: 'center'
    },
    goodEvaluteMore: {
        borderWidth: 1,
        borderColor: '#d50a17',
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    buttonWrap: {
        flexDirection: 'row',
        height: 60
    },
    Collect: {
        width: '50%',
        backgroundColor: '#fcb40a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addCart: {
        width: '50%',
        backgroundColor: '#cc0004',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    },
    modalView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    modal: {
        flex: 1,
    },
    cartModal: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        height: 500,
        width: '100%'
    },
    noReviewWrap: {
        alignItems: 'center'
    },
    noReview: {
        fontSize: 16,
        alignItems: 'center',
        paddingVertical: 10
    },
    modalHead: {
        height: 80,
        borderWidth: 1,
        borderColor: '#efefef',
        flexDirection: 'row',
        padding: 8,
        // alignItems: 'center'
    },
    imageWrap: {
        width: 60,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 14,
        lineHeight: 16
    },
    modalPriceWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalPrice: {
        color: '#f93036'
    },
    modalNum: {
        color: '#888888'
    },
    modalMain: {
        padding: 10
    },
    modalMainTitle: {
        fontSize: 16
    },
    modalOptionWrap: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    modalOption: {
        width: 60,
        height: 30,
        backgroundColor: '#efefef',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: 10
    },
    modalFooter: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalCounterWrap: {
        flexDirection: 'row'
    },
    modalCounter: {
        width: 30,
        height: 30,
        marginRight: 2,
        backgroundColor: '#efefef',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionActive: {
        backgroundColor: '#fda208',
        color: '#fff',
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: 10
    },
    certain: {
        backgroundColor: '#cf0005',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default styles