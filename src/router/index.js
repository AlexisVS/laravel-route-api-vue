import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/pokedex',
    component: () => import(/* webpackChunkName: "Pokedex" */ '../views/Pokedex.vue')
  },
  {
    path: '/pokedex/pokemon/:pokemonId',
    component: () => import(/* webpackChunkName: "PokemonInfo" */ '../views/PokemonInfo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
