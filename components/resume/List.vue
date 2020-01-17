<template>
    <ul class="model-wrap">
        <li class="model-item" :class="{ 'border-top-line': key !== 0, 'border-bottom-line': key !== data.length - 1, 'model-item-hack': key === data.length - 1 }" v-for="(item, key) in data" :key="key">
            <h3 class="item-title">{{item.title}}</h3>
            <p class="item-text">{{item.description}}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'List',
        props: ['data'],
    }
</script>

<style scoped>
    .model-wrap{position:relative;}
    .model-item{margin-bottom:.2rem;}
    .model-item-hack{margin-bottom:0;}
    .item-title{line-height:1rem;padding:0 .4rem;font-size:.4rem;background-color:#fff;}
    .item-text{background-color:#fff;margin-top:1px;padding:.2rem .4rem;color:#666;text-align:justify;}
</style>
