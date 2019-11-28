<template>
    <iframe class="model-wrap" :src="data.url" />
</template>

<script>
    export default {
        name: 'WebView',
        props: ['data'],
    }
</script>

<style scoped>
    .model-wrap{width:100%;height:100%;}
</style>
