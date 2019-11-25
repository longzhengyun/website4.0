<template>
    <ul class="model-wrap border-bottom-line">
        <li class="model-item" :class="{ 'current': item.index === data.currentIndex }" v-for="(item, key) in data.item" :key="key" @click="changeTab(item.index)">{{item.name}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Tab',
        props: ['data', 'changeTab'],
    }
</script>

<style scoped>
    .model-wrap{display:flex;background-color:#fff;}
    .model-item{flex:1;line-height:1rem;color:#666;text-align:center;border-bottom:2px solid transparent;}
    .model-item.current{color:#c00;border-bottom-color:#c00;}
</style>