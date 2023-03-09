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
    path: '/clients/add',
    name: 'clients/add',
    component: () => import('@/views/Clients/ClientsAdd.vue'),
    meta: {layout: 'main'}
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/Clients/Clients.vue'),
    meta: {layout: 'main'},
    children:[
      {
        path: '/client/:id',
        name: 'client',
        params: true,
        component: () => import('@/views/Clients/ClientView.vue'),
        meta: {layout: 'main'}
      }
    ]
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: () => import('@/views/Coaches/Coaches.vue'),
    meta: {layout: 'main'}
  },
  {
    path: '/abonements',
    name: 'abonements',
    component: () => import('@/views/Abonements/Abonements.vue'),
    meta: {layout: 'main'}
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('@/views/Reports.vue'),
    meta: {layout: 'main'}
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
