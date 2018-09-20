<template>
  <menu v-if="config.showMenu" class="menu-wrap" :class="{ 'border-top-line': config.hasLine }">
    <ul class="menu-list">
      <li class="list-item" :class="{ 'current': key === config.currentIndex }" v-for="(item, key) in data" :key="key" @click="changeMenu(item.path, key)">
        <i class="item-icon" :class="item.icon"></i>
        <span class="item-text">{{item.name}}</span>
      </li>
    </ul>
  </menu>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class Menu extends Vue {
    // props
    @Prop()
    private data!: any[];
    @Prop()
    private config!: any;

    // methods
    private changeMenu(this: any, path: string, key: number) {
      this.$router.push(path);
    }
  }
</script>

<style scoped>
  .menu-wrap{position:relative;z-index:499;height:1rem;background-color:#fff;overflow:hidden;}
  .menu-list{display:flex;height:1rem;}
  .menu-list .list-item{flex:1;padding:.1rem 0;text-align:center;}
  .menu-list .list-item.current{color:#c00;}
  .menu-list .item-icon{display:block;font-size:.48rem;}
  .menu-list .item-text{font-size:.24rem;}
</style>
