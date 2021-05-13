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
      component: Home,
      meta: {
        title: 'Flow Podcast - A melhor conversa que você vai ouvir.'
      }
    },
    {
      path: '/loja',
      component: Shop,
      meta: {
        title: 'Loja - Flow Podcast'
      }
    },
    {
      path: '/episodios',
      component: Eps,
      meta: {
        title: 'Episódios - Flow Podcast'
      }
    },
    {
      path: '/concursos',
      component: Contests,
      meta: {
        title: 'Concursos - Flow Podcast'
      }
    },
    {
      path: '/membros',
      component: Members,
      meta: {
        title: 'Membros - Flow Podcast'
      }
    },
    {
      path: '/flowcoins',
      component: Flowcoins,
      meta: {
        title: 'Flowcoins - Flow Podcast'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
