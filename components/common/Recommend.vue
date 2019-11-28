<template>
    <div class="model-wrap border-top-line">
        <h2 class="model-title">{{data.name}}</h2>
        <nuxt-link v-if="data.route" class="model-more" :to="data.route">MORE</nuxt-link>
        <div class="model-cont">
            <ul class="model-list">
                <li class="model-item ellips" :class="{ 'left border-right-line' : key%2 === 0, 'right' : key%2 === 1 }" v-for="(item, key) in data.item" :key="key" @click="goTarget(data.type, item)">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Recommend',
        props: ['data', 'goTarget'],
    }
</script>

<style scoped>
    .model-wrap{position:relative;margin-top:.2rem;}
    .model-title{line-height:1rem;padding:0 .4rem;font-size:.4rem;background-color:#fff;}
    .model-more{position:absolute;top:0;right:0;padding:0 .4rem;line-height:1rem;color:#999;}

    .model-list{position:relative;display:flex;flex-wrap:wrap;background-color:#fff;margin-top:1px;padding:.2rem 0;}
    .model-item{width:50%;margin:.1rem 0;padding:0 .4rem;box-sizing:border-box;}
    .model-item.left{position:relative;padding-right:.2rem;}
    .model-item.right{padding-left:.2rem;}
</style>
