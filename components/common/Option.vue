<template>
    <ul class="model-wrap border-bottom-line">
        <li class="model-item" :class="{ 'border-bottom-line': key !== data.length - 1 }" v-for="(item, key) in data" :key="key" @click="item.route && goTarget(item.route)">{{item.name}}<span v-if="item.route" class="model-arrow"></span></li>
    </ul>
</template>

<script>
    export default {
        name: 'Form',
        props: ['data', 'goTarget'],
    }
</script>

<style scoped>
    .model-wrap{position:relative;background-color:#fff;padding:.1rem .4rem;margin-bottom:.2rem;}
    .model-item{position:relative;padding:.2rem 0;font-size:.32rem;}
    .model-arrow{position:absolute;top:50%;right:0;transform:translateY(-50%) rotate(-45deg);width:.2rem;height:.2rem;border:1px solid;border-color:transparent #ccc #ccc transparent;}
</style>
