<template>
  <section v-if="config.showHeader" class="header-wrap" :style="'background-color:' + config.setBgColor">
    <div v-if="config.showBack" class="header-icon header-back" @click="goBack"></div>
    <div v-if="config.showClose" class="header-icon header-close" @click="goClose"></div>
    <h2 class="header-title">{{config.title}}</h2>
  </section>
</template>

<script lang="ts">
  import { Vue, Prop, Watch, Component } from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {
    // props
    @Prop()
    private config!: any;

    @Watch('$route')
    private onRouteChanged(this: any, val: any) {
      if (val.name === 'webView') {
        this.config.title = val.query.title;
        this.config.showClose = true;
      }
    }

    // methods
    private goBack(this: any) {
      this.$router.go(-1);
    }

    private goClose(this: any) {
      this.$router.push({ path: '/' });
    }
  }
</script>

<style scoped>
  .header-wrap{position:relative;z-index:499;height:1rem;background-color:#fff;overflow:hidden;}
  .header-icon{position:absolute;top:50%;}
  .header-back{left:0;width:1rem;height:1rem;transform:translateY(-50%);}
  .header-back::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) rotate(-45deg);width:.3rem;height:.3rem;border:1px solid;border-color:#999 transparent transparent #999;}
  .header-close{left:.7rem;width:.75rem;height:.75rem;transform:translateY(-50%) rotate(-45deg);}
  .header-close::before,
  .header-close::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#fff;}
  .header-close::before{width:1px;height:70%;}
  .header-close::after{width:70%;height:1px;}
  .header-title{margin:0 1.25rem;height:1rem;line-height:1rem;text-align:center;font-size:.36rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
</style>
