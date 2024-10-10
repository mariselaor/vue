import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Registro from '../components/Registro.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
