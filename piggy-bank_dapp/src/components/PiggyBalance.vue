<template>
  <div class="pbalance_card">
    <label class="pbalance_label" for="pbalance">Piggy balance</label>
    <p id="pbalance">{{ piggyBalance }}</p>
  </div>
</template>

<script>
export default {
  name: 'piggy-balance',
  computed: {
    piggyBalance () {
      let balance = this.$store.state.web3.piggyBalance || 0
      return balance.toString()
    }
  }
}
</script>

<style scoped>
  .pbalance_card {
    border-radius: 15px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .pbalance_label {
    font-weight: bold;
  }
</style>
