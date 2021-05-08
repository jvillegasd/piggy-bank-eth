<template>
  <div class="withdraw_card">
    <label class="withdraw_label" for="withdraw">Withdraw amount</label>
    <input class="withdraw_input" type="text" id="withdraw" name="withdraw" v-model="withdrawAmount" placeholder="An ether amount">
    <button class="withdraw_bt" @click=withdrawEther>Withdraw</button>
  </div>
</template>

<script>
export default {
  name: 'withdraw',
  data () {
    return {
      withdrawAmount: null
    }
  },
  methods: {
    withdrawEther () {
      if (this.withdrawAmount === undefined || this.withdrawAmount === null) {
        window.alert('Digit a valid Ether amount')
        return
      }

      const { web3, contractInstance } = this.$store.state
      contractInstance.methods.withdraw(this.withdrawAmount).send({
        from: web3.coinbase
      })
    }
  }
}
</script>

<style scoped>
  .withdraw_card {
    border-radius: 15px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .withdraw_bt {
    background-color: rgba(0, 94, 238, 0.8);
    outline: none;
    border: none;
    width: 75px;
    height: 30px;
    color: white;
    border-radius: 10px;
  }
  .withdraw_bt:hover {
    background-color: white;
    color: rgba(0, 94, 238, 0.8);
    border-style: solid;
    border-width: 2px;
    border-color: rgba(0, 94, 238, 0.8);
  }
  .withdraw_label {
    font-weight: bold;
  }
  .withdraw_input {
    border-radius: 7px;
    border-color: gray;
    border-style: solid;
    outline: none;
  }
</style>
