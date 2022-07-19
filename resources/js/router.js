import VueRouter from "vue-router";
import Vue from 'vue';
import Get from "./components/Get";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Personal from "./components/Personal";


Vue.use(VueRouter)

const route = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/get',
            component: Get,
            name: 'get.index'

        },
        {
            path: '/users/login',
            component: Login,
            name: 'user.login'
        },
        {
            path: '/users/registration',
            component: Registration,
            name: 'user.registration'
        },
        {
            path: '/users/personal',
            component: Personal,
            name: 'user.personal'
        },
    ]
})

route.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (to.name === 'user.login' && token || to.name === 'user.registration' && token) {
        return next({
            name: 'user.personal'
        })
    }

    next()
})

export default route
