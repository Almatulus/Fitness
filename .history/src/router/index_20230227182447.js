
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



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
    component: () => import('../views/Clients/Clients.vue')
  },
  {
    path: '/trainers',
    name: 'trainers',
    meta: {layout: 'main'},
    component: () => import('../views/Trainers/Trainers.vue')
  },
  {
    path: '/groups',
    name: 'groups',
    meta: {layout: 'main'},
    component: () => import('../views/Groups/Groups.vue')
  },
  {
    path: '/abonements',
    name: 'abonements',
    meta: {layout: 'main'},
    component: () => import('../views/Abonements/Abonements.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    meta: {layout: 'main'},
    component: () => import('../views/Reports.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
