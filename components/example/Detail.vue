<template>
    <div class="model-wrap border-bottom-line">
        <div class="model-info">
            <span class="info-item">分类：{{data.category}}</span>
            <span class="info-item">所属：{{data.belong}}</span>
            <span class="info-item">日期：{{data.date}}</span>
        </div>
        <div class="model-cont border-top-line" v-html="data.description"></div>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props: ['data'],
    }
</script>

<style scoped>
    .model-wrap{position:relative;padding:.4rem;background-color:#fff;}
    .model-info{display:flex;margin-bottom:.4rem;}
    .model-info .info-item{flex:1;text-align:center;font-size:.24rem;color:#999;}
    .model-cont{position:relative;padding-top:.4rem;text-align:justify;}
</style>
