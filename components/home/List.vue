<template>
    <ul class="model-wrap">
        <li class="model-item ellips" :class="{ 'left border-right-line' : key%2 === 0, 'right' : key%2 === 1 }" v-for="(item, key) in data" :key="key" @click="goTarget(type, item)">{{item.title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'List',
        props: ['data', 'type', 'goTarget'],
    }
</script>

<style scoped>
    .model-wrap{position:relative;display:flex;flex-wrap:wrap;background-color:#fff;margin-top:1px;padding:.2rem 0;}
    .model-item{width:50%;margin:.1rem 0;padding:0 .4rem;box-sizing:border-box;}
    .model-item.left{position:relative;padding-right:.2rem;}
    .model-item.right{padding-left:.2rem;}
</style>
