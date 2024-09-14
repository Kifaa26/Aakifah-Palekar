import { createRouter, createWebHistory } from 'vue-router'

const routes = [
   {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/aboutMe',
    name: 'AboutMe',
    component: () => import('@/views/AboutMeView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

