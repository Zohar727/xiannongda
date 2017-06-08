import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import cart from '@/components/cart'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/cart',
      name:'cart',
      component:cart
    },
    {
      path:'/info',
      name:'info',
      component:info
    }
  ]
})
