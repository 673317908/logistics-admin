import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/home",
    name: "Home",
    component: () => import("../views/Home/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;