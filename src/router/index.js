import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Tarefas from '../views/Tarefas.vue'
import Configuracoes from '../views/Configuracoes.vue'
import MyTasks from '../views/MyTasks.vue'
import Finalizadas from '../views/Finalizadas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: Tarefas,
    children: [
      {
        path: '/',
        component: MyTasks,
      },
      {
        path: 'finalizadas',
        component: Finalizadas,
      },
    ]
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
