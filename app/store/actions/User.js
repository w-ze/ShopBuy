export function initUser(data) {
    return {
        type: 'INITUSER',
        data: data
    }
}

export function login(data) {
    return {
        type: "LOGIN",
        data: data
    }
}
