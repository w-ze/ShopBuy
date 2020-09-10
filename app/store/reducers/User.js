import Storage from '../../lib/asyncstorage'

function UserReducer(state = {}, action) {
    switch (action.type) {
        case "LOGIN":
            state = action.data
            return Object.assign({}, state)
        case "INITUSER":
            // initUser(state,action.data)
            state = action.data
            return Object.assign({}, state)
        default:
            return state;
    }
}


export default UserReducer