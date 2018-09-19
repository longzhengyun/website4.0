<template>
  <div class="app-wrap">
    <header-component :config="curHeaderConfig" />
    <router-view />
    <menu-component :data="menuData" :config="curMenuConfig" />
  </div>
</template>

<script lang="ts">
  import 'mescroll.js/mescroll.min.css';
  import '@/assets/main.css';
  import { Vue, Watch, Component } from 'vue-property-decorator';

  import HeaderComponent from './components/common/header.vue';
  import MenuComponent from './components/common/menu.vue';

  @Component({
    components: {
      HeaderComponent,
      MenuComponent,
    },
  })
  export default class App extends Vue {
    // data
    private curHeaderConfig: any = {};
    private curMenuConfig: any = {};

    // computed
    get headerConfig(this: any) {
      return this.$store.state.headerConfig;
    }

    get menuData(this: any) {
      return this.$store.state.menuData;
    }

    get menuConfig(this: any) {
      return this.$store.state.menuConfig;
    }

    @Watch('$route')
    private onRouteChanged(this: any, val: any) {
      this.setHeaderConfig(val);
      this.setMenuConfig(val);
    }

    private mounted() {
      this.setConfig();
    }

    // methods
    private setConfig(this: any) {
      this.setHeaderConfig(this.$route);
      this.setMenuConfig(this.$route);
    }

    private setHeaderConfig(route: any) {
      const name: string = route.name;
      let config: any = {};

      // home
      if (name === 'home') {
        config = {
          showHeader: false,
        };
      }

      // novel
      if (name === 'novel') {
        config = {
          showHeader: true,
          showBack: false,
          title: '小说',
        };
      }

      // site
      if (name === 'site') {
        config = {
          showHeader: true,
          showBack: false,
          title: '推荐网站',
        };
      }

      // me
      if (name === 'me') {
        config = {
          showHeader: true,
          showBack: false,
          title: '我的',
        };
      }

      this.curHeaderConfig = Object.assign({}, this.headerConfig, config);
    }

    private setMenuConfig(route: any) {
      const name = route.name;
      let config = {};

      // home
      if (name === 'home') {
        config = {
          showMenu: true,
          currentIndex: 0,
        };
      }

      // novel
      if (name === 'novel') {
        config = {
          showMenu: true,
          currentIndex: 1,
        };
      }

      // site
      if (name === 'site') {
        config = {
          showMenu: true,
          currentIndex: 2,
        };
      }

      // me
      if (name === 'me') {
        config = {
          showMenu: true,
          currentIndex: 3,
        };
      }

      this.curMenuConfig = Object.assign({}, this.menuConfig, config);
    }
  }
</script>

<style scoped>
  .app-wrap{display:flex;flex-direction:column;height:100%;}
</style>
