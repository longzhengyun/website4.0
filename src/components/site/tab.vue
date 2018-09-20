<template>
  <div class="tab-wrap">
    <ul class="tab-list" :class="{ 'moveing': config.onMoving }">
      <li class="list-item" :class="{ 'current': key === config.currentIndex }" v-for="(item, key) in data" :key="key" @click="changeTab(item, key)">
        <span class="item-text">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class Tab extends Vue {
    // props
    @Prop()
    private data!: any[];
    @Prop()
    private config!: any;

    // methods
    private changeTab(this: any, item: any, key: number) {
      this.$store.commit('siteTabConfig', {
        currentCategory: item.category,
        currentIndex: key,
      });
    }
  }
</script>

<style scoped>
  .tab-wrap{height:1rem;margin-bottom:.2rem;}
  .tab-wrap .tab-list{display:flex;position:fixed;top:1rem;left:0;right:0;z-index:98;height:1rem;background-color:#fff;}
  .tab-wrap .tab-list.moveing{position:static;top:0;}
  .tab-wrap .list-item{flex:1;text-align:center;line-height:1rem;border-bottom:1px solid #dfdfdf;}
  .tab-wrap .current{border-bottom-color:#c00;color:#c00;}
</style>
