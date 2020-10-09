export function getToken() {
    return sessionStorage.getItem("token")
}

export function getUserName() {
    return sessionStorage.getItem("user_name")
}

export function removeToken() {
    return sessionStorage.removeItem("token")
}

export function removeUserName() {
    return sessionStorage.removeItem("user_name")
}