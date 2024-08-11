import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import("@/views/HomeView.vue")
const BoxOfTheMonthView = () => import("@/views/BoxOfTheMonth.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/box-of-the-month",
      name: "boxOfTheMonth",
      component: BoxOfTheMonthView
    }
  ]
})

export default router
