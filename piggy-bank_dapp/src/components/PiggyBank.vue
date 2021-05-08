<template>
  <div class="main_app_div">
    <div><hello-metamask></hello-metamask></div>
    <div><deposit></deposit></div>
    <div><withdraw></withdraw></div>
    <div><piggy-balance></piggy-balance></div>
  </div>
</template>

<script>
import HelloMetamask from '@/components/HelloMetamask.vue'
import Deposit from '@/components/Deposit.vue'
import Withdraw from '@/components/Withdraw.vue'
import PiggyBalance from '@/components/PiggyBalance.vue'

export default {
  name: 'piggy-bank_dapp',
  components: {
    HelloMetamask,
    Deposit,
    Withdraw,
    PiggyBalance
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
  .main_app_div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
</style>
