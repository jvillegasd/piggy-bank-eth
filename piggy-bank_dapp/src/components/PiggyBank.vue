<template>
  <div class="main_div">
    <div class="container_one">
      <div><hello-metamask></hello-metamask></div>
      <div><deposit></deposit></div>
      <div><withdraw></withdraw></div>
      <div><piggy-balance></piggy-balance></div>
    </div>

    <div class="container_two">
      <contact-us></contact-us>
    </div>
  </div>
</template>

<script>
import HelloMetamask from '@/components/HelloMetamask.vue'
import Deposit from '@/components/Deposit.vue'
import Withdraw from '@/components/Withdraw.vue'
import PiggyBalance from '@/components/PiggyBalance.vue'
import ContactUs from '@/components/ContactUs.vue'

export default {
  name: 'piggy-bank_dapp',
  components: {
    HelloMetamask,
    Deposit,
    Withdraw,
    PiggyBalance,
    ContactUs
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
  .main_div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .container_one {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
  .container_two {
    margin-top: 30px;
  }
</style>
