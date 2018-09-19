<template>
  <div class="mescroll" id="mescroll">
    <slot />
  </div>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'vue-property-decorator';

  import MeScroll from 'mescroll.js';

  @Component
  export default class Mescroll extends Vue {
    // // data
    private mescroll: any = null;

    // // props
    @Prop() private callback!: any;

    // // methods
    private initMescroll() {
      this.mescroll = new MeScroll('mescroll', {
        down: {
          callback: this.callback,
          autoShowLoading: true, // 默认显示下拉刷新进度
        },
      });
    }

    private mounted() {
      this.initMescroll(); // 初始化mescroll
    }

    private beforeDestroy() {
      if (this.mescroll) {
        this.mescroll.destroy();
        this.mescroll = null;
      }
    }
  }
</script>

<style scoped>
  .mescroll{flex:1;}
</style>
