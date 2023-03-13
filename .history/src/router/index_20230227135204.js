import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
    meta: {layout: 'auth'}
  },
  {
    path: '/clients',
    name: 'clients',
    meta: {layout: 'main'},
    component: () => import('../views/Clients.vue')
  },
  {
    path: '/trainers',
    name: 'trainers',
    meta: {layout: 'main'},
    component: () => import('../views/Trainers.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    meta: {layout: 'main'},
    component: () => import('../views/Invoices.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
