/* eslint-disable */

import Web3 from 'web3';
import { address, ABI } from '../constants/piggyBankContract.js';

let getContract = async () => {
  const web3 = new Web3(window.ethereum);
  const contractInstance = new web3.eth.Contract(ABI, address);

  return contractInstance;
};

export default getContract;
