import Vue from 'vue';
import Vuex from 'vuex';

import abilities from './modules/abilities';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    abilities
  }
});
