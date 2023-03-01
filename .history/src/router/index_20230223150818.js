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
  // {
  //   path: '/mainpage',
  //   name: 'mainpage',
  //   component: () => import('@/views/MainPage/MainPage.vue'),
  //   meta: {layout: 'main'}
  // }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
