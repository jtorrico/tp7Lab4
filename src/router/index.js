import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Intro',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/dondeEstamos',
    name: 'Lugar',
    component: () => import ('../views/Lugar.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import ('../views/Productos.vue')
  },
  {
    path: '/productos/:id?',
    name: 'Detalle',
    component: () => import ('../views/Detalles.vue')
  },
  {
    path: '/editar',
    name: 'Edicion',
    component: () => import ('../views/Editar.vue')
  },
  {
    path: '/editar/:id?',
    name: 'EditarProductos',
    component: () => import ('../views/EditarProductos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
