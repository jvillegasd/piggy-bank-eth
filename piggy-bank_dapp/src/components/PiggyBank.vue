<template>
  <div>
    <hello-metamask></hello-metamask>
    <deposit></deposit>
    <withdraw></withdraw>
  </div>
</template>

<script>
import HelloMetamask from '@/components/HelloMetamask.vue'
import Deposit from '@/components/Deposit.vue'
import Withdraw from '@/components/Withdraw.vue'

export default {
  name: 'piggy-bank_dapp',
  components: {
    HelloMetamask,
    Deposit,
    Withdraw
  },
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from PiggyBank.vue')
    this.$store.dispatch('registerWeb3')
  },
  mounted () {
    console.log('getSmartContract Action dispatched from PiggyBank.vue')
    this.$store.dispatch('getSmartContract')
  }
}
</script>

<style scoped>
</style>
