import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import(/* webpackChunkName: "hot" */ './views/Hot.vue')
    },
    {
      path: '/best',
      name: 'best',
      component: () => import(/* webpackChunkName: "best" */ './views/Best.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ './views/Detail.vue')
    }
  ]
})
