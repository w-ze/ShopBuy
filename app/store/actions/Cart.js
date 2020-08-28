export function addCart(data) {
    return {
        type: "ADD",
        data: data
    }
}
export function initCart(data) {
    return {
        type: "INIT",
        data: data
    }
}
export function addCount(data) {
    return {
        type: "ADDCOUNT",
        data: data
    }
}
export function subCount(data) {
    return {
        type: "SUBCOUNT",
        data: data
    }
}
export function deleteItem(data) {
    return {
        type: "DELETEITEM",
        data: data
    }
}

export function checked(data) {
    return {
        type: "CHECKED",
        data: data
    }
}
export function checkedAll(data) {
    return {
        type: "CHECKEDAll",
        data: data
    }
}