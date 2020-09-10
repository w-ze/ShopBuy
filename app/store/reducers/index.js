import { combineReducers } from 'redux'
import goodDetailReducer from './GoodDetail'
import CartReducer from './Cart'
import UserReducer from './User'

let reducers = combineReducers({
    goodDetail: goodDetailReducer,
    Cart: CartReducer,
    User: UserReducer
})

export default reducers