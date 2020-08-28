import Storage from '../../lib/asyncstorage'
import BigNumber from "bignumber.js"

let cartData = {
    data: [],
    total: 0,
    freight: 0
}


function CartReducer(state = cartData, action) {
    switch (action.type) {
        case "ADD":
            addCart(state, action.data)
            return Object.assign({}, state);
        case "INIT":
            // state = Object.assign({}, action.data)
            return Object.assign({}, state, action.data)
        case "ADDCOUNT":
            addCount(state, action.data)
            return Object.assign({}, state);
        case "SUBCOUNT":
            subCount(state, action.data)
            return Object.assign({}, state)
        case "DELETEITEM":
            deleteItem(state, action.data)
            return Object.assign({}, state)
        case "CHECKED":
            checked(state, action.data)
            console.log(Object.assign({}, state))
            return Object.assign({}, state)
        case "CHECKEDAll":
            checkedAll(state, action.data)
            return Object.assign({}, state)
        default:
            return state
    }
}


function addCart(state, data) {
    if (state.data.length > 0) {
        for (let i in state.data) {
            if (state.data[i].gid == data.gid && JSON.stringify(state.data[i].attrs) === JSON.stringify(data.attrs)) {
                state.data[i].amount += 1
            } else {
                state.data.push(data)
                break
            }
        }
    } else {
        state.data.push(data)
    }
    console.log(state)
    Storage.save('cartData', state)

    // Storage.delete('cartData')
}

function addCount(state, index) {
    state.data[index].amount += 1
    Storage.update('cartData', state)
}

function subCount(state, index) {
    if (state.data[index].amount > 1) {
        state.data[index].amount -= 1
    } else {
        state.data[index].amount = 1
    }
    Storage.update('cartData', state)
}
function deleteItem(state, index) {
    state.data.splice(index, 1)
    setTotal(state)
    setFreight(state)
    Storage.update('cartData', state)
}
function checked(state, index) {
    state.data[index].checked = !state.data[index].checked

    // Storage.delete('cartData')
    // state.data.forEach(item => {
    //     console.log(item.price,item.amount)
    //     if (item.checked) {
    //         state.total += item.price * item.amount
    //     }
    // })
    setTotal(state)
    setFreight(state)
}
function checkedAll(state, data) {
    state.data.forEach(item => {
        item.checked = data
    })
    setTotal(state)
    setFreight(state)
}
function setTotal(state) {
    let total = 0;
    state.data.forEach(item => {
        if (item.checked) {
            total += item.price * item.amount
        }
    })
    state.total = total.toFixed(2)
}
function setFreight(state) {
    let freight = 0;
    state.data.forEach(item => {
        if (item.checked) {
            freight += item.freight
        }
    })
    state.freight = freight.toFixed(2)
}


export default CartReducer