/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import getWeb3 from '../utils/getWeb3.js';
import pollWeb3 from '../utils/pollWeb3.js';
import getContract from '../utils/getContracts.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: false,
  state,
  mutations: {
    registerWeb3Instance (state, payload) {
      console.log('registerWeb3Instance Mutation being executed', payload);
      let result = payload;
      let web3Copy = state.web3;

      web3Copy.coinbase = result.coinbase;
      web3Copy.networkId = result.networkId;
      web3Copy.balance = parseInt(result.balance, 10);
      web3Copy.isInjected = result.injectedWeb3;
      web3Copy.web3Instance = result.web3;
      web3Copy.piggyBalance = result.piggyBalance;
      state.web3 = web3Copy;
      pollWeb3();
    },
    pollWeb3Instance (state, payload) {
      console.log('pollWeb3Instance being executed');
      state.web3.coinbase = payload.coinbase;
      state.web3.balance = parseInt(payload.balance, 10);
      state.web3.piggyBalance = payload.piggyBalance;
    },
    getSmartContractInstance (state, payload) {
      console.log('getSmartContractInstance being executed', payload);
      state.contractInstance = payload;
    }
  },
  actions: {
    async registerWeb3 ({ commit }) {
      console.log('registerWeb3 Action being executed');
      try {
        let result = await getWeb3();

        console.log('commiting result to registerWeb3Instance mutation');
        commit('registerWeb3Instance', result);
      } catch (error) {
        console.log('error in action registerWeb3', error);
      }
    },
    pollWeb3 ({commit}, payload) {
      console.log('pollWeb3 action being executed');
      commit('pollWeb3Instance', payload);
    },
    async getSmartContract ({commit}) {
      try {
        let result = await getContract();

        console.log('commiting result to getSmartContractInstance mutation');
        commit('getSmartContractInstance', result);
      } catch (error) {
        console.log('error in action getSmartContract', error);
      }
    }
  }
});