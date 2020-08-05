import { combineReducers } from 'redux'
import goodDetailReducer from './goodDetail'
import CartReducer from './Cart'

let reducers = combineReducers({
    goodDetail: goodDetailReducer,
    Cart: CartReducer
})

export default reducers