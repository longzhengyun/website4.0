<template>
    <ul class="model-wrap">
        <li class="model-item border-top-line border-bottom-line" v-for="(item, key) in data" :key="key" @click="goTarget(item)">
            <h3 class="item-title ellips">{{item.title}}</h3>
            <p class="item-text">{{item.description}}</p>
            <div class="item-more">
                <span class="item-more-text">{{item.date}}</span>
                <span class="item-more-text">{{item.category}}</span>
                <span class="item-more-text item-more-hot" v-if="item.hot === 'y'">HOT</span>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'List',
        props: ['data', 'goTarget'],
    }
</script>

<style scoped>
    .model-item{position:relative;padding:.3rem .4rem;margin-bottom:.2rem;background-color:#fff;}
    .item-title{font-size:.36rem;line-height:1;margin-right:.2rem;}
    .item-text{margin:.2rem 0;font-size:.28rem;line-height:.4rem;color:#666;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}
    .item-more{font-size:.24rem;color:#999;line-height:1;}
    .item-more-text{margin-right:.4rem;}
    .item-more-hot{color:#c00;}
</style>
