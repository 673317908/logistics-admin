// 验证用户名
export function checkUserName(value) {
    var reg = /^([a-zA-Z]|[0-9])(\w|)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    if (!reg.test(value)) {
        return true
    } else {
        return false
    }
}

// 密码格式验证
export function checkPassword(value) {
    var checkPwd = /^[0-9]{6,20}$/
    if (!checkPwd.test(value)) {
        return true
    } else {
        return false
    }
}