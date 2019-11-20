<template>
    <div class="model-wrap">
        <img src="/img/default_nothing.png" class="model-icon" />
        <span class="model-text">暂无内容</span>
    </div>
</template>

<script>
    export default {
        name: 'Nothing',
    }
</script>

<style scoped>
    .model-wrap{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);}
    .model-wrap .model-icon{display:block;width:2.04rem;height:1.87rem;margin:0 auto;}
    .model-wrap .model-text{display:block;text-align:center;margin-top:.3rem;color:#999;}
</style>