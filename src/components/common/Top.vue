<template>
  <div class="top-model"></div>
</template>

<script lang="ts">
  import { Vue, Prop } from 'vue-property-decorator';

  export default class Top extends Vue {
    // props
    // @Prop() public data!: any[];
  }
</script>

<style scoped>
  .top-model{height:1rem;}
  .tab-list{display:flex;position:fixed;left:0;right:0;bottom:0;height:1.15rem;background-color:#fff;}
  .tab-list.active{color:#fff;}
</style>
