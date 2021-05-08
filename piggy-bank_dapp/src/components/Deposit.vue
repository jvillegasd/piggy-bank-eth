<template>
  <div>
    <label for="name">Deposit amount - {{ amount }}</label>
    <input type="text" id="name" name="name" v-model="amount">
    <button @click=depositEther>Deposit</button>
  </div>
</template>

<script>
export default {
  name: 'deposit',
  data () {
    return {
      amount: 0
    }
  },
  methods: {
    depositEther () {
      console.log(this.amount)
      const { web3, contractInstance } = this.$store.state
      contractInstance.methods.deposit().send({
        from: web3.coinbase,
        value: web3.web3Instance().utils.toWei(this.amount.toString(), 'ether')
      })
    }
  },
  mounted () {
    console.log('dispatching getSmartContract')
    this.$store.dispatch('getSmartContract')
  }
}
</script>

<style>

</style>
