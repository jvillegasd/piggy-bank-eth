/* eslint-disable */

import Web3 from 'web3';
import { store } from '../store';

let pollWeb3 = (state) => {
  let web3 = new Web3(window.ethereum);

  setInterval(async () => {
    if (web3 && store.state.web3.coinbase) {
      let piggyBalance = null;
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      const { contractInstance } = store.state;

      if (contractInstance) {
        piggyBalance = await contractInstance.methods.balance().call({
          from: accounts[0]
        });
        piggyBalance = parseInt(piggyBalance, 10);
      }

      if (accounts[0] !== store.state.web3.coinbase) {
        store.dispatch('pollWeb3', {
          coinbase: accounts[0],
          balance: parseInt(balance, 10),
          piggyBalance
        });
      } else {
        if (parseInt(balance, 10) !== store.state.web3.balance) {
          store.dispatch('pollWeb3', {
            coinbase: store.state.web3.coinbase,
            balance: parseInt(balance, 10),
            piggyBalance
          });
        }
      }
    }
  }, 500);
};

export default pollWeb3;