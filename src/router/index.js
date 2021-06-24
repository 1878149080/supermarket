import Vue from "vue";
import VueRouter from "vue-router"
import home from "../views/home/home.vue"
const category = () => import("../views/category/category.vue");
const shopcart = () => import("../views/shopcart/shopcart.vue");
const profile  = () => import("../views/profile/profile.vue");

Vue.use(VueRouter);

const routes = [
    {
        path : '/',
        redirect : '/home'
    },
    {
        path : '/home',
        component : home,
    },
    {
        path : '/category',
        component : category
    },
    {
        path : '/profile',
        component : profile
    },
    {
        path : '/shopcart',
        component : shopcart
    }
]


const Router = new VueRouter({
    routes,
    mode : 'history'
});

export default Router