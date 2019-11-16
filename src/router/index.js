import Vue from 'vue'
import Router from 'vue-router'

import Novosti from '@/components/Novosti'
import Aktivnosti from '@/components/Aktivnosti'
import Natjecanja from '@/components/Natjecanja'
import Kontakt from '@/components/Kontakt'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Novosti',
            component: Novosti
        },
        {
            path: '/aktivnosti',
            name: 'Aktivnosti',
            component: Aktivnosti
        },
        {
            path: '/natjecanja',
            name: 'Natjecanja',
            component: Natjecanja
        },
        {
            path: '/kontakt',
            name: 'Kontakt',
            component: Kontakt
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})