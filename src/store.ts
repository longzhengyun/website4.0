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
      // { name: '首页', icon: 'icon-home', path: '/' },
      { name: '小说', icon: 'icon-books', path: '/novel' },
      { name: '网站', icon: 'icon-stack', path: '/site' },
      { name: '我的', icon: 'icon-user-tie', path: '/me' },
    ],
    menuConfig: {
      showMenu: false,
      currentIndex: 0,
      hasLine: true,
    },
    siteData: null,
    siteTabData: [
      { name: '全部', category: '' },
      { name: '技术', category: '技术' },
      { name: '工具', category: '工具' },
      { name: '其他', category: '其他' },
    ],
    siteTabConfig: {
      currentCategory: '',
      currentIndex: 0,
      onMoving: false,
    },
  },
  mutations: {
    siteData(state: any, data: any) {
      state.siteData = data;
    },
    siteTabConfig(state: any, data: any) {
      Object.assign(state.siteTabConfig, data);
    },
  },
  actions: {},
});
