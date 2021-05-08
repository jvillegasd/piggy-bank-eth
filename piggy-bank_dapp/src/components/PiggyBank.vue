<template>
  <div>
    <hello-metamask></hello-metamask>
    <deposit></deposit>
  </div>
</template>

<script>
import HelloMetamask from '@/components/HelloMetamask.vue'
import Deposit from '@/components/Deposit.vue'

export default {
  name: 'piggy-bank_dapp',
  components: {
    HelloMetamask,
    Deposit
  },
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from PiggyBank.vue')
    this.$store.dispatch('registerWeb3')
  }
}
</script>

<style scoped>
</style>
