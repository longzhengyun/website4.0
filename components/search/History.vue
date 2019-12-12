<template>
    <div class="model-wrap border-top-line">
        <h2 class="model-title">历史搜索</h2>
        <ul class="model-cont">
            <li class="model-item" :class="{ 'border-top-line' : key > 0 }" v-for="(item, key) in data" :key="key" @click="doAction('search', item)">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'History',
        props: ['data', 'doAction'],
    }
</script>

<style scoped>
    .model-wrap{position:relative;margin-top:.2rem;}
    .model-title{line-height:1rem;padding:0 .4rem;font-size:.4rem;background-color:#fff;}
    .model-cont{position:relative;background-color:#fff;margin-top:1px;padding:0 .4rem;}
    .model-item{position:relative;padding:.2rem 0;}
</style>
