<template>
  <div>
    <label for="withdraw">Withdraw amount</label>
    <input type="text" id="withdraw" name="withdraw" v-model="withdrawAmount">
    <button @click=withdrawEther>Withdraw</button>
  </div>
</template>

<script>
export default {
  name: 'withdraw',
  data () {
    return {
      withdrawAmount: 0
    }
  },
  methods: {
    withdrawEther () {
      const { web3, contractInstance } = this.$store.state
      contractInstance.methods.withdraw(this.withdrawAmount).send({
        from: web3.coinbase
      })
    }
  }
}
</script>

<style>

</style>
