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
  {
    path: '/education&experience',
    name: 'Education&Experience',
    component: () => import('@/views/Education&ExperienceView.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/ProjectsView.vue')
  },
  {
    path: '/contactMe',
    name: 'ContactMe',
    component: () => import('@/views/ContactMeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

