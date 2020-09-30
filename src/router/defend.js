import router from "./index"
import {
    getToken
} from "../utils/comm"


router.beforeEach((to, from, next) => {
    console.log(to)
    next()
    // if (getToken()) {
    //     if (to.path == '/login') {
    //         sessionStorage.removeItem("token")
    //         sessionStorage.removeItem("user_name")
    //         next()
    //     } else {
    //         next()
    //     }
    // } else {
    //     next('/login')
    // }
})