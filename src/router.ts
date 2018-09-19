import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Novel from './views/Novel.vue';
import Site from './views/Site.vue';
import Me from './views/Me.vue';

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
  ],
});
