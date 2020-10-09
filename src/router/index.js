import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue"


Vue.use(VueRouter);

const routes = [{
    path: "/",
    hidden: false,
    redirect: 'login',
  },
  {
    path: "/index",
    component: Layout,
  },
  // {
  //   path: "/home",
  //   hidden: true,
  //   icon: "md-home",
  //   meta: {
  //     title: "首页"
  //   },
  //   children: [{
  //     path: "/home",
  //     name: "Home",
  //     component: () => import("../views/Home/index.vue")
  //   }],
  //   component: Layout
  // },
  {
    path: "/goods",
    name: "Goods",
    hidden: true,
    icon: "md-archive",
    meta: {
      title: "发货"
    },
    // children: [{
    //   path: "/account",
    //   name: "Account",
    //   component: () => import("../views/Account/index.vue")
    // }],
    component: Layout
  },
  {
    path: "/account",
    name: "Account",
    hidden: true,
    icon: "md-archive",
    meta: {
      title: "应收款管理"
    },
    // children: [{
    //   path: "/account",
    //   name: "Account",
    //   component: () => import("../views/Account/index.vue")
    // }],
    component: Layout
  },
  {
    path: "/setting",
    name: "Setting",
    hidden: true,
    icon: "md-settings",
    meta: {
      title: "基础设置"
    },
    children: [{
        path: "/setting",
        name: "Setting",
        meta: {
          title: "基础数据管理"
        },
        component: () => import("../views/Setting/setting.vue")
      },
      {
        path: "/data-setting",
        name: "data-setting",
        meta: {
          title: "参数设置"
        },
        component: () => import("../views/Setting/dataSetting.vue")
      },
      {
        path: "/wx",
        name: "Wx",
        meta: {
          title: "微信设置"
        },
        component: () => import("../views/Setting/wx.vue")
      }
    ],
    component: Layout
  },
  {
    path: "/login",
    name: "Login",
    hidden: false,
    meta: {
      title: "登录"
    },
    component: () => import("../views/Login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;