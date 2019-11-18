<template>
    <section v-if="menuConfig.showMenu" class="menu-wrap border-top-line">
        <ul class="menu-list">
            <li class="list-item" :class="{ 'current': key === menuConfig.currentIndex }" v-for="(item, key) in menuConfig.item" :key="key" @click="changeMenu(key, item.url)">
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
    mounted () {
    },
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
    .menu-wrap{position:relative;height:1rem;z-index:499;background-color:#fff;}
    .menu-list{display:flex;height:1rem;}
    .menu-list .list-item{flex:1;padding-top:.14rem;color:#666;text-align:center;}
    .menu-list .list-item .icon{font-size:.48rem;}
    .menu-list .list-item .name{display:block;font-size:.24rem;line-height:1;}
    .menu-list .list-item.current{color:#c00;}

    /* iPhone X 全面屏适配 */
    @supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
        .menu-wrap {
            padding-bottom: constant(safe-area-inset-bottom);
            padding-bottom: env(safe-area-inset-bottom);
        }
    }
</style>