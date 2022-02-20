import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/collection',
    name: 'Collection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "OpenseaCollection" */ '../views/OpenseaCollection.vue')
  },
  {
    path: '/validator',
    name: 'Validator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Validator" */ '../views/Validator.vue')
  },
  {
    path: '/qr-reader',
    name: 'QrReader',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "QrReader" */ '../views/QrReader.vue')
  },
  {
    path: '/user-counter',
    name: 'UserCounter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "UserCounter" */ '../views/UserCounter.vue')
  },
  {
    path: '/purple',
    name: 'PurplePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PurplePage" */ '../views/club/PurplePage.vue')
  },
  {
    path: '/gold',
    name: 'GoldPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "GoldPageGoldPage" */ '../views/club/GoldPage.vue')
  },
  {
    path: '/red',
    name: 'RedPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "RedPage" */ '../views/club/RedPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
