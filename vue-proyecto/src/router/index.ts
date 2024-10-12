import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Registro from '../components/Registro.vue'
import Categorias from '../components/Categorias.vue'
import AddSchedule from '../components/AddSchedule.vue'
import Home from '../components/Home.vue' // Importación de Home.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
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
  },
  {
    path: '/add',
    name: 'AddSchedule',
    component: AddSchedule
  },
  {
    path: '/days',
    name: 'DiasSemana',
    component: () => import('../components/DiasSemana.vue')
  },
  {
    path: '/schedule/:day',
    name: 'Horario',
    component: () => import('../components/Horario.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
