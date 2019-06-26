import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from './layout/BasicLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      name: 'layout',
      redirect: '/home',
      component: BasicLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/market',
          name: 'market',
          component: () => import('./views/Market.vue')
        },
        {
          path: '/community',
          name: 'community',
          component: () => import('./views/Community.vue')
        },
        {
          path: '/self',
          name: 'selfCenter',
          component: () => import('./views/SelfCenter.vue')
        }
      ]
    },
   
  ]
})
