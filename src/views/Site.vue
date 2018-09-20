<template>
    <mescroll-component class="site" :config="siteMescrollConfig">
      <tab-component :data="siteTabData" :config="siteTabConfig" />
      <list-component :data="currentListData" />
    </mescroll-component>
</template>

<script lang="ts">
  import axios from 'axios';
  import { Vue, Watch, Component } from 'vue-property-decorator';

  import MescrollComponent from '../components/common/mescroll.vue';
  import TabComponent from '../components/site/tab.vue';
  import ListComponent from '../components/site/list.vue';

  @Component({
    components: {
      MescrollComponent,
      TabComponent,
      ListComponent,
    },
  })
  export default class Site extends Vue {
    // data
    private currentListData: any[] = [];
    private siteMescrollConfig: any = null;

    // computed
    get siteData() {
      return this.$store.state.siteData;
    }
    get siteTabData() {
      return this.$store.state.siteTabData;
    }
    get siteTabConfig() {
      return this.$store.state.siteTabConfig;
    }

    // watch
    @Watch('siteTabConfig', { immediate: true, deep: true })
    private onConfigChanged(this: any, val: any) {
      this.updateData(this.siteData, val);
    }

    // mounted
    private mounted() {
      this.initMescrollConfig(); // 初始化mescroll配置
    }

    // methods
    private initMescrollConfig() {
      let auto = true;
      if (this.siteData) {
        auto = false;
      }
      this.siteMescrollConfig = {
        down: {
          auto,
          callback: this.downCallback,
          onMoving: (mescroll: any, rate: number, downHight: number) => {
            if (this.$route.name === 'site') {
              this.$store.commit('siteTabConfig', { onMoving: true });
            }
          },
        },
        up: {
          isLock: true,
          onScroll: () => {
            if (this.$route.name === 'site') {
              this.$store.commit('siteTabConfig', { onMoving: false });
            }
          },
        },
      };
    }
    private downCallback(mescroll: any) {
      axios.get('/api?id=site_data').then((res: any) => {
        const data = res.data.db_data;
        this.updateData(data, this.siteTabConfig);
        this.$store.commit('siteData', data);

        if (mescroll) {
          mescroll.endSuccess();
        }
      });
    }
    private updateData(data: any, config: any) {
      if (config.currentCategory) {
        this.currentListData = [];
        data.forEach((value: any) => {
          if (value.category === config.currentCategory) {
            this.currentListData.push(value);
          }
        });
      } else {
        this.currentListData = data;
      }
    }
  }
</script>
