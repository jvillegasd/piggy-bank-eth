<template>
  <div class='metamask-info'>
    <label class="metamask_label">Metamask info</label>
    <p><b>Connection status:</b> {{ web3.isInjected }}</p>
    <p><b>Network:</b> {{ web3.networkId }}</p>
    <p><b>Account:</b> {{ web3.coinbase }}</p>
    <p><b>Account balance:</b> {{ web3.balance }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello-metamask',
  computed: {
    web3 () {
      return this.$store.state.web3
    }
  }
}
</script>

<style scoped>
  .metamask-info {
    border-radius: 15px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .metamask_label {
    font-weight: bold;
  }
</style>
