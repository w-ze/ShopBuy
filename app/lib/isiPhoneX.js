import { Dimensions, Platform } from 'react-native'


let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;

// iPhoneX,XS,11 Pro
const X_WIDTH1 = 375
const X_HEIGHT1 = 812

// iPhoneXR,11
const X_WIDTH2 = 414
const X_HEIGHT2 = 896

// iPhoneXS Max,11 Pro Max
const X_WIDTH3 = 414
const X_HEIGHT3 = 896


export function isiPhoneX() {
    if (Platform.OS == 'ios') {
        if ((screenW == X_WIDTH1 && screenH == X_HEIGHT1) || (screenW == X_WIDTH2 && screenH == X_HEIGHT2) && (screenW == X_WIDTH3 && screenH == X_HEIGHT3)) {
            return 'iPhoneX'
        }else{
            return 'iPhone'
        }
    }else{
        return 'Andriod'
    }
}