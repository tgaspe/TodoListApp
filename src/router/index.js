import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComicBook from '../views/ComicBook.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TasksCompleted.vue'),
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: HomeView
  },
  {
    path: '/albo',
    name: 'albo',
    component: ComicBook
  },
]

const router = new VueRouter({
  routes
})

export default router
