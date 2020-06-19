import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "RegisterForm" */ "../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "LoginForm" */ "../views/Login.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { requiresAuth: true },
    component: () =>
      import(
        /* webpackChunkName: "RegisterForm" */ "../views/loggedIn/Dashboard.vue"
      )
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem("authUser"));
    if (authUser && authUser.access_token) {
      next();
    } else {
      next({ name: "Login" });
    }
  }
  next();
});

export default router;
