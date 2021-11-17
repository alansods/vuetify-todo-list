import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tarefas from '../views/Tarefas.vue'
import Dashboard from '../views/Dashboard.vue'
import Configuracoes from '../views/Configuracoes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: Configuracoes
  },
]

const router = new VueRouter({
  routes
})

export default router
