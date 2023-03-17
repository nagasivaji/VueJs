import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: "/",
    name: 'about',
    component: About,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  to.fullPath = '/'
  to.matched[0].params = to.query
  next()
});

export default router
