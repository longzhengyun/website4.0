<template>
  <section class="mescroll" id="mescroll">
    <slot />
  </section>
</template>

<script lang="ts">
  import { Vue, Prop, Watch, Component } from 'vue-property-decorator';

  import MeScroll from 'mescroll.js';
  import 'mescroll.js/mescroll.min.css';

  @Component
  export default class Mescroll extends Vue {
    // data
    private mescroll: any = null;

    // props
    @Prop()
    private config!: object;

    // watch
    @Watch('config', { immediate: true, deep: true })
    private onConfigChanged(val: object) {
      this.initMescroll(val);
    }

    // mounted
    private mounted() {
      this.initMescroll(this.config); // 初始化mescroll配置
    }

    // methods
    private initMescroll(config: object) {
      if (config) {
        this.mescroll = new MeScroll('mescroll', config);
      }
    }

    // beforeDestroy
    private beforeDestroy() {
      if (this.mescroll) {
        this.mescroll.destroy();
        this.mescroll = null;
      }
    }
  }
</script>

<style scoped>
  .mescroll >>> .mescroll-upwarp{display:none;}
</style>
