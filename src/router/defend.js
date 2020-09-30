import router from "./index"
import {
    getToken,
    removeToken,
    removeUserName
} from "../utils/comm"


router.beforeEach((to, from, next) => {
    console.log(to)
    next()
    // if (getToken()) {
    //     if (to.path == '/login') {
    //        removeToken()
    //         removeUserName()
    //         next()
    //     } else {
    //         next()
    //     }
    // } else {
    //     next('/login')
    // }
})