import Vue from 'vue';
import Vuex from 'vuex';

import abilities from './modules/abilities';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    abilities
  }
});
