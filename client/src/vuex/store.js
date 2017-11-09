import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      name: '',
    },
  },
  mutations: {
    changeUser(state, name) {
      // eslint-disable-next-line
      state.user.name = name;
    },
  },
});

export default store;
