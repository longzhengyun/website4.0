<template>
    <mescroll-component class="home">
      <home-logo-component />
    </mescroll-component>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import MescrollComponent from '../components/common/mescroll.vue';
  import HomeLogoComponent from '../components/home/logo.vue';

  @Component({
    components: {
      MescrollComponent,
      HomeLogoComponent,
    },
  })
  export default class Home extends Vue {}
</script>

<style scoped>
  .home{background-color:#fff;}
</style>