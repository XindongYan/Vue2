import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Exp_1 from '@/components/Exp_1'
import list from '@/components/Exp_2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: '/Exp', component: Exp_1},
    {path: '/list', component: list},
  ]
})
