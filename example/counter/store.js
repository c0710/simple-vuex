import Vue from 'vue'
import SimpleVuex from '../../src/index';

Vue.use(SimpleVuex);

export default new SimpleVuex.Store({
    state: {
      count: 0
    },
    mutations: {
        incrementFive(state) {
            // console.log('初始state', JSON.stringify(state));
            state.count = state.count + 5;
        }
    },
    getters: {
        getStatePlusOne(state) {
            return state.count + 1
        }
    }
  });