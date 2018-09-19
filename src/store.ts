import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabData: [
      { name: '首页', icon: 'home', path: '/' },
      { name: '小说', icon: 'novel', path: '/novel' },
      { name: '网站', icon: 'site', path: '/site' },
      { name: '我的', icon: 'me', path: '/me' },
    ],
    tabIndex: 0,
  },
  mutations: {
    tabIndex(state: any, data: any) {
      state.tabIndex = data;
    },
  },
  actions: {},
});
