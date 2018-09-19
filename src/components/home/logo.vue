<template>
  <div class="home-logo animation">
    <div class="logo1"><img class="img" src="@/assets/logo.png" /></div>
    <p class="line"></p>
    <div class="logo2"><img class="img" src="@/assets/logo.png" /></div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Logo extends Vue {}
</script>

<style scoped>
  .home-logo{position:relative;top:50%;}
  .home-logo .img{display:block;width:3.2rem;margin:0 auto;}
  .home-logo .logo2{position:relative;transform:rotateX(180deg);opacity:.2;}
  .home-logo .logo2::after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));}
  .line{margin:.15rem 0;height:1px;background-color:#eee;opacity:.5;}
  .animation{animation:scale 3s infinite ease-in-out;}

  @keyframes scale {
    0% {transform:translateY(-50%) scale(1);}
    50% {transform:translateY(-50%) scale(.9);}
    100% {transform:translateY(-50%) scale(1);}
  }
</style>
