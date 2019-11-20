<template>
    <div class="model-wrap">
        <ul class="model-list border-bottom-line">
            <li class="model-item" :class="{ 'current': key === tabConfig.currentIndex }" v-for="(item, key) in tabConfig.item" :key="key" @click="changeTab(key)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Tab',
        props: ['tabConfig', 'type'],
        methods: {
            changeTab (key) {
                this.$store.commit(`${this.type}TabConfig`, {
                    currentIndex: key
                })
            }
        }
    }
</script>

<style scoped>
    .model-wrap{height:1rem;}
    .model-list{display:flex;position:absolute;top:1rem;left:0;right:0;z-index:19;background-color:#fff;}
    .model-item{flex:1;line-height:1rem;color:#666;text-align:center;}
    .model-item.current{color:#c00;}
</style>