import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import NewCharacterAbilities from '@/components/NewCharacterAbilities'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Homepage
    },
    {
      path: '/new-character',
      name: 'New-Character',
      component: NewCharacterAbilities
    }
  ]
})
