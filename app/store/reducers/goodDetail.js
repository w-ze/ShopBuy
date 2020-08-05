function goodDetailReducer(state = {gid:null}, action) {
    switch(action.type){
        case "SAVE":
            return {...state,...action.data}
        default:
            return state
    }
}

export default goodDetailReducer