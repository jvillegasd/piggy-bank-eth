/* eslint-disable */

import Web3 from 'web3';

let getWeb3 = async () => {
  let metamaskWeb3 = window.ethereum;

  if (typeof metamaskWeb3 !== 'undefined') {
    const web3 = new Web3(metamaskWeb3);

    const networkId = await web3.eth.net.getId();
    const accounts = await web3.eth.getAccounts();
    const injectedWeb3 = await web3.eth.net.isListening();
    const balance = await web3.eth.getBalance(accounts[0]);

    return {
      injectedWeb3,
      web3 () {
        return web3;
      },
      networkId,
      balance,
      coinbase: accounts[0]
    };
  } else {
    throw new Error('Unable to connect to Metamask');
  }
};

export default getWeb3
