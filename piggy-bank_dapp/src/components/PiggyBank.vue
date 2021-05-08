<template>
  <hello-metamask></hello-metamask>
</template>

<script>
import HelloMetamask from '@/components/HelloMetamask.vue'

export default {
  name: 'piggy-bank_dapp',
  components: { HelloMetamask },
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from PiggyBank.vue');
    this.$store.dispatch('registerWeb3');
  }
}
</script>

<style scoped>
</style>
