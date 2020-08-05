import Storage from '../../lib/asyncstorage'

let cartData = {
    data: [],
    total: 0,
    freight: 0
}

function CartReducer(state=cartData, action) {
    switch (action.type) {
        case "ADD":
            addCart(state,action.data)
            return state;
        default:
            return state
    }
}


function addCart(state,data){
    state.data.push(data)
    Storage.save('cartData',state)
    Storage.get('cartData').then(data=>{
        console.log(data)
    })
}


export default CartReducer