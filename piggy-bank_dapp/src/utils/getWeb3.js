/* eslint-disable */

import Web3 from 'web3';
import { store } from '../store';

let getWeb3 = async () => {
  let metamaskWeb3 = window.ethereum;

  if (typeof metamaskWeb3 !== 'undefined') {
    const web3 = new Web3(metamaskWeb3);

    let piggyBalance = null;
    const networkId = await web3.eth.net.getId();
    const accounts = await web3.eth.getAccounts();
    const injectedWeb3 = await web3.eth.net.isListening();
    let balance = await web3.eth.getBalance(accounts[0]);
    const { contractInstance } = store.state;
    
    if (contractInstance) {
      piggyBalance = await contractInstance.methods.balance().call({
        from: accounts[0]
      });
      piggyBalance = await web3.utils.fromWei(piggyBalance.toString(), 'ether');
    }

    balance = await web3.utils.fromWei(balance.toString(), 'ether'); 

    return {
      injectedWeb3,
      web3 () {
        return web3;
      },
      networkId,
      balance,
      coinbase: accounts[0],
      piggyBalance
    };
  } else {
    throw new Error('Unable to connect to Metamask');
  }
};

export default getWeb3
