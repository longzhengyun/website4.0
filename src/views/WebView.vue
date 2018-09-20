<template>
    <section class="webView">
        <iframe :src="iframeUrl" class="iframe" width="100%" height="100%" ref="iframe"></iframe>
    </section>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class WebView extends Vue {
    // data
    public iframeUrl: string = '';

    // mounted
    private created() {
      this.iframeUrl = this.$route.query.url;
    }
  }
</script>

<style scoped>
    .webView{flex:1;-webkit-overflow-scrolling:touch;overflow-y:scroll;}
    .iframe{border:0;}
</style>