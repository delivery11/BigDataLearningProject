// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Statistic from '../views/Statistic.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {

        path: '/statistic',
        component: Statistic

    }
]

const router = new VueRouter({
    routes
})

export default router

