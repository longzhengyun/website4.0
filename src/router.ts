import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Novel from './views/Novel.vue';
import Site from './views/Site.vue';
import Me from './views/Me.vue';
import About from './views/About.vue';
import Version from './views/Version.vue';
import WebView from './views/WebView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/novel',
      name: 'novel',
      component: Novel,
    },
    {
      path: '/site',
      name: 'site',
      component: Site,
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/version',
      name: 'version',
      component: Version,
    },
    {
      path: '/webview',
      name: 'webview',
      component: WebView,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
