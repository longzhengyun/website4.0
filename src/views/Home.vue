<template>
    <section class="home">
      <home-logo-component />
    </section>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  import HomeLogoComponent from '../components/home/logo.vue';

  @Component({
    components: {
      HomeLogoComponent,
    },
  })
  export default class Home extends Vue {}
</script>

<style scoped>
  .home{background-color:#fff;}
</style>