import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
    meta: {layout: 'auth'}
  },
  {
    path: '/clients/add/1',
    name: 'clients/add/1',
    component: () => import('@/views/Clients/ClientsAdd1.vue'),
    meta: {layout: 'main'}
  },
  {
    path: '/clients/add/2',
    name: 'clients/add/2',
    component: () => import('@/views/Clients/ClientsAdd2.vue'),
    meta: {layout: 'main'}
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/Clients/Clients.vue'),
    meta: {layout: 'main'}
  },
  {
    path: '/clients/client/:id',
    name: 'clients/client/id',
    params: true,
    component: () => import('@/views/Clients/ClientView.vue'),
    meta: {layout: 'main'}
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: () => import('@/views/Coaches/Coaches.vue'),
    meta: {layout: 'main'}
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
