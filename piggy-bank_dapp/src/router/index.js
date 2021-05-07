import Vue from 'vue'
import Router from 'vue-router'
import PiggyBankDapp from '@/components/PiggyBank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'piggy-bank_dapp',
      component: PiggyBankDapp
    }
  ]
})
