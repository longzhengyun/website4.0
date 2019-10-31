<template>
    <section v-if="menuConfig.showMenu" class="menu-wrap border-top-line">
        <ul class="menu-list">
            <li class="list-item" :class="{ 'current': key === menuConfig.currentIndex }" v-for="(item, key) in menuConfig.item" :key="key" @click="changeMenu(key, item.url)">
                <img class="img" :src="key === menuConfig.currentIndex ? item.iconCurrent : item.icon" />
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
            let eventName = ''
            if (key === 0) eventName = 'home'
            else if (key === 1) eventName = 'loan'
            else if (key === 2) eventName = 'mine'
            window.gtag('event', `click_${eventName}`, {
                'eventAction': 'click',
                'eventCategory': 'menu'
            })
            this.$store.commit('menuConfig', {
                currentIndex: key
            })
            this.$router.push(url)
        }
    }
}
</script>

<style scoped>
    .menu-wrap{position:relative;height:.98rem;z-index:499;background-color:#fff;}
    .menu-list{display:flex;height:.98rem;}
    .menu-list .list-item{flex:1;padding-top:.14rem;color:#666;}
    .menu-list .list-item .img{display:block;width:.4rem;height:.4rem;margin:0 auto .1rem auto;}
    .menu-list .list-item .name{display:block;text-align:center;font-size:.22rem;line-height:1;}
    .menu-list .list-item.current{color:#c1a36B;}

    /* iPhone X 全面屏适配 */
    @supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
        .menu-wrap {
            padding-bottom: constant(safe-area-inset-bottom);
            padding-bottom: env(safe-area-inset-bottom);
        }
    }
</style>