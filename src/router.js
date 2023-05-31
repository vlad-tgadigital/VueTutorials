import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '@/views/MainPage'
import Todos from '@/views/Todos'
import TodosAlternativeEventBusPage from '@/views/TodosAlternativeEventBusPage'
import CounterPage from '@/views/CounterPage'
import SubmitFormPage from '@/views/SubmitFormPage'
import SlotPage from '@/views/SlotPage'
import ModalPage from '@/views/ModalPage'
import MoviePage from '@/views/MoviePage'
import TransitionPage from '@/views/TransitionPage'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/todos',
    component: Todos
    // component: () => import('@/views/Todos.vue')
  },
  {
    path: '/counter',
    component: CounterPage
  },
  {
    path: '/submitForm',
    component: SubmitFormPage
  },
  {
    path: '/slot',
    component: SlotPage
  },
  {
    path: '/modal',
    component: ModalPage
  },
  {
    path: '/movie',
    component: MoviePage
  },
  {
    path: '/transition',
    component: TransitionPage
  },
  {
    path: '/todosAlternative',
    component: TodosAlternativeEventBusPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
