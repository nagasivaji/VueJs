import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: "/:catchAll(.*)",
    component: Home,
    alias : '/home'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
