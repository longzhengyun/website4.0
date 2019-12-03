<template>
    <div class="model-wrap">
        <div class="model-mask" @click="doAction(null)"></div>
        <ul class="model-cont">
            <li class="model-item" :class="{ 'border-top-line' : key > 0, 'active': item.type === type }" v-for="(item, key) in data" :key="key" @click="doAction(item)">{{item.typeName}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Select',
        props: ['data', 'type', 'doAction'],
    }
</script>

<style scoped>
    .model-wrap{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;}
    .model-mask{position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0, 0, 0, .7);}
    .model-cont{position:absolute;left:0;right:0;bottom:0;background-color:#fff;max-height:80%;overflow-y:auto;}
    .model-item{position:relative;margin:0 .3rem;padding:.3rem 0;text-align:center;}
    .model-item.active{color:#c00;}
</style>
