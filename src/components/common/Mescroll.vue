<template>
  <div class="mescroll" id="mescroll"></div>
</template>

<script lang="ts">
  import { Vue, Prop } from 'vue-property-decorator';

  import MeScroll from 'mescroll.js';

  export default class Mescroll extends Vue {
    // // data
    // public mescroll: any = null;

    // // props
    // @Prop() public callback!: any;

    // // methods
    // public initMescroll() {
    //   this.mescroll = new MeScroll('mescroll', {
    //     down: {
    //       callback: this.callback,
    //       autoShowLoading: true, // 默认显示下拉刷新进度
    //     },
    //   });
    // }

    // public mounted() {
    //   this.initMescroll(); // 初始化mescroll
    // }

    // public beforeDestroy() {
    //   if (this.mescroll) {
    //     this.mescroll.destroy();
    //     this.mescroll = null;
    //   }
    // }
  }
</script>
