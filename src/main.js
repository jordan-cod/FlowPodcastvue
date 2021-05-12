import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Eps from './components/pages/Eps'
import Contests from './components/pages/Contests'
import Members from './components/pages/Members'
import Flowcoins from './components/pages/Flowcoins'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/loja',
      component: Shop
    },
    {
      path: '/episodios',
      component: Eps
    },
    {
      path: '/concursos',
      component: Contests
    },
    {
      path: '/membros',
      component: Members
    },
    {
      path: '/flowcoins',
      component: Flowcoins
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
