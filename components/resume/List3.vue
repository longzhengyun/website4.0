<template>
    <ul class="model-wrap">
        <li class="model-item" :class="{ 'border-top-line': key !== 0, 'border-bottom-line': key !== data.length - 1, 'model-item-hack': key === data.length - 1 }" v-for="(item, key) in data" :key="key">
            <h3 class="item-title">{{item.title}}</h3>
            <div class="item-group border-top-line" v-for="(value, index) in item.description" :key="index">
                <div class="item-name">{{value.text}}</div>
                <div class="item-value">{{value.grade}}</div>
            </div>
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
    .model-item{position:relative;margin-bottom:.2rem;}
    .model-item-hack{margin-bottom:0;}
    .item-title{line-height:1rem;padding:0 .4rem;font-size:.4rem;background-color:#fff;}
    .item-group{position:relative;display:flex;padding:.2rem .4rem;font-size:.32rem;background-color:#fff;}
    .item-name{margin-right:.3rem;color:#999;}
    .item-value{flex:1;word-wrap:break-word;text-align:right;}
</style>
