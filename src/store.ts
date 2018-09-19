import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerConfig: {
      showHeader: true,
      showBack: true,
      showClose: false,
      title: '',
    },
    menuData: [
      { name: '首页', icon: 'icon-home', path: '/' },
      { name: '小说', icon: 'icon-books', path: '/novel' },
      { name: '网站', icon: 'icon-stack', path: '/site' },
      { name: '我的', icon: 'icon-user-tie', path: '/me' },
    ],
    menuConfig: {
      showMenu: false,
      currentIndex: 0,
    },
  },
  mutations: {
    headerConfig(state: any, data: any) {
      Object.assign(state.headerConfig, data);
    },
  },
  actions: {},
});
