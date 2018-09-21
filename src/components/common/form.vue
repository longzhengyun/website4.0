<template>
  <ul class="form-model">
      <li class="list-item border-bottom-line" :class="{ 'list-multi': item.multi }" v-for="(item, key) in data" :key="key">
        <span class="item-name" v-if="item.name">{{item.name}}</span>
        <div class="item-value" :class="{ ['item-space' + item.space]: item.space }">{{item.value}}</div>
        <span class="item-arrow" v-if="item.path"></span>
        <a class="item-link" v-if="item.path" @click="goTarget(item.path)"></a>
      </li>
  </ul>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class Form extends Vue {
    // props
    @Prop()
    private data!: any[];

    // methods
    private goTarget(path) {
      this.$router.push({ path });
    }
  }
</script>

<style scoped>
  .form-model{margin-bottom:.2rem;background-color:#fff;}
  .form-model .list-item{position:relative;margin:0 .2rem;}
  .form-model .list-item:last-child::after{content:initial;}
  .form-model .list-item.list-multi .item-name{top:0;padding:.25rem 0;line-height:1.7;transform:translateY(0);}
  .form-model .list-item.list-multi .item-value{padding:.25rem 0;line-height:1.7;}

  .form-model .item-name{position:absolute;top:50%;left:0;transform:translateY(-50%);color:#999;}
  .form-model .item-value{min-height:.5rem;line-height:1rem;}
  .form-model .item-arrow{position:absolute;top:50%;right:0;transform:translateY(-50%) rotate(45deg);border:1px solid;border-color:#dfdfdf #dfdfdf transparent transparent;width:.25rem;height:.25rem;}
  .form-model .item-link{position:absolute;top:0;right:0;bottom:0;left:0;z-index:5;}

  .form-model .item-space1{margin-left:1em;}
  .form-model .item-space2{margin-left:2em;}
  .form-model .item-space3{margin-left:3em;}
  .form-model .item-space4{margin-left:4em;}
  .form-model .item-space5{margin-left:5em;}
</style>
