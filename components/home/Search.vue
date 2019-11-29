<template>
    <div class="model-wrap">
        <div class="model-logo">
            <img class="img" src="~/assets/logo.png" />
        </div>
        <div class="model-cont" @click="goTarget('search')">
            <div class="input">
                <div class="text">搜索感兴趣的前端文章和网站</div>
            </div>
            <button class="submit icon-search" title="GO"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        props: ['goTarget'],
    }
</script>

<style scoped>
    .model-wrap{padding:1rem 0 .4rem 0;background-color:#fff;}
    .model-logo{width:3.84rem;height:1.2rem;margin:0 auto .6rem auto;}
    .model-cont{position:relative;margin:0 .4rem;padding:.1rem .2rem;border-radius:.1rem;border:1px solid #ccc;}
    .model-cont .input{height:.6rem;padding-right:1.5rem;}
    .model-cont .text{width:100%;height:100%;font-size:.32rem;line-height:.6rem;color:#999;}
    .model-cont .submit{position:absolute;top:50%;right:.1rem;transform:translateY(-50%);width:1.25rem;height:.6rem;font-size:.4rem;border-radius:0 .1rem .1rem 0;background-color:#eee;}
</style>
