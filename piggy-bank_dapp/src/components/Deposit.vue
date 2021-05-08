<template>
  <div class="deposit_card">
    <label class="deposit_label" for="deposit">Deposit amount</label>
    <input class="deposit_input" @keypress="onlyNumber" type="text" id="deposit" name="deposit" v-model="amount" placeholder="An ether amount">
    <button class="deposit_bt" @click=depositEther>Deposit</button>
  </div>
</template>

<script>
export default {
  name: 'deposit',
  data () {
    return {
      amount: null
    }
  },
  methods: {
    depositEther () {
      if (this.amount === undefined || this.amount === null) {
        window.alert('Digit a valid Ether amount')
        return
      }

      try {
        const { web3, contractInstance } = this.$store.state
        contractInstance.methods.deposit().send({
          from: web3.coinbase,
          value: web3.web3Instance().utils.toWei(this.amount.toString(), 'ether')
        })
      } catch (error) {
        console.log('Error at deposit component', error)
        window.alert('Error ocurred while sending ethers to piggy bank')
      }
    },
    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which)
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
        $event.preventDefault()
      }
    }
  }
}
</script>

<style scoped>
  .deposit_card {
    border-radius: 15px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .deposit_bt {
    background-color: rgba(0, 94, 238, 0.8);
    outline: none;
    border: none;
    width: 75px;
    height: 30px;
    color: white;
    border-radius: 10px;
  }
  .deposit_bt:hover {
    background-color: white;
    color: rgba(0, 94, 238, 0.8);
    border-style: solid;
    border-width: 2px;
    border-color: rgba(0, 94, 238, 0.8);
  }
  .deposit_label {
    font-weight: bold;
  }
  .deposit_input {
    border-radius: 7px;
    border-color: gray;
    border-style: solid;
    outline: none;
  }
</style>
