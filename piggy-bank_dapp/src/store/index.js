import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import getWeb3 from '../utils/getWeb3.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
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
      state.web3 = web3Copy;
    }
  },
  actions: {
    registerWeb3 ({ commit }) {
      console.log('registerWeb3 Action being executed');
      
      getWeb3.then(result => {
        console.log('commiting result to registerWeb3Instance mutation');
        commit('registerWeb3Instance', result);
      }).catch(err => {
        console.log('error in action registerWeb3', err);
      });
    }
  }
});