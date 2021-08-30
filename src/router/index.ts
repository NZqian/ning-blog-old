import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CountDown from "../views/CountDown.vue"
import Dynamics from "../views/Dynamics.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        //name: 'CountDown',
        //component: CountDown
        name: 'Home',
        component: Home
    },
    {
        path: '/countdown',
        name: 'CountDown',
        component: CountDown
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/dynamics',
        name: 'Dynamics',
        component: Dynamics
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
