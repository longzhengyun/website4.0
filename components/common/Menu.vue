<template>
    <section v-if="menuConfig.showMenu" class="model-wrap border-top-line">
        <ul class="model-list">
            <li class="model-item" :class="{ 'current': key === menuConfig.currentIndex }" v-for="(item, key) in menuConfig.item" :key="key" @click="changeMenu(key, item.url)">
                <i :class="`icon ${item.icon}`"></i>
                <span class="name">{{item.name}}</span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Menu',
        props: ['menuConfig'],
        methods: {
            changeMenu (key, url) {
                this.$store.commit('menuConfig', {
                    currentIndex: key
                })
                this.$router.push(url)
            }
        }
    }
</script>

<style scoped>
    .model-wrap{position:relative;height:1rem;z-index:499;background-color:#fff;}
    .model-list{display:flex;height:1rem;}
    .model-item{flex:1;padding-top:.14rem;color:#666;text-align:center;}
    .model-item .icon{font-size:.48rem;}
    .model-item .name{display:block;font-size:.24rem;line-height:1;}
    .model-item.current{color:#c00;}

    /* iPhone X 全面屏适配 */
    @supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
        .model-wrap {
            padding-bottom: constant(safe-area-inset-bottom);
            padding-bottom: env(safe-area-inset-bottom);
        }
    }
</style>