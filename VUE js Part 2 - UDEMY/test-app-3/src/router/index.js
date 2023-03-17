import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
    props: true,
  },
  {
    path: "/",
    name: 'about',
    component: About,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to.path.split('/')[2])
//   if (to.path.includes('/home')) {
//     next({ path: '/', name: 'home' });
//   } else {
//     next();
//   }
// });

export default router
