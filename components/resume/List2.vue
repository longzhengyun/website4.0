<template>
    <ul class="model-wrap">
        <li class="model-item" :class="{ 'border-top-line': key !== 0, 'border-bottom-line': key !== data.length - 1, 'model-item-hack': key === data.length - 1 }" v-for="(item, key) in data" :key="key">
            <div class="item-group">
                <div class="item-name">企业名称</div>
                <div class="item-value">{{item.title}}</div>
            </div>
            <div class="item-group border-top-line">
                <div class="item-name">入离时间</div>
                <div class="item-value">{{item.time}}</div>
            </div>
            <div class="item-group border-top-line">
                <div class="item-name">所属行业</div>
                <div class="item-value">{{item.industry}}</div>
            </div>
            <div class="item-group border-top-line">
                <div class="item-name">企业类型</div>
                <div class="item-value">{{item.property}}</div>
            </div>
            <div class="item-group border-top-line">
                <div class="item-name">企业规模</div>
                <div class="item-value">{{item.size}}</div>
            </div>
            <div class="item-group border-top-line" @click="item.website.indexOf('http') === 0 && doAction({
                url: item.website,
                title: item.tip
            })">
                <div class="item-name">企业网站</div>
                <div class="item-value">{{item.tip}}</div>
            </div>
            <div class="item-group border-top-line">
                <div class="item-name">企业介绍</div>
                <div class="item-value">{{item.description}}</div>
            </div>
            <div class="item-group border-top-line">
                <div class="item-name">个人职责</div>
                <div class="item-value">{{item.duty}}</div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'List',
        props: ['data', 'doAction'],
    }
</script>

<style scoped>
    .model-item{position:relative;margin-bottom:.2rem;padding:0 .4rem;background-color:#fff;}
    .model-item-hack{margin-bottom:0;}
    .item-group{position:relative;display:flex;padding:.2rem 0;font-size:.32rem;}
    .item-name{margin-right:.3rem;color:#999;}
    .item-value{flex:1;word-wrap:break-word;text-align:justify;}
</style>
