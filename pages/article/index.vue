<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <tab-component :data="tabConfig" :changeTab="changeTab" />
        <mescroll-component :up="mescrollUp" @init="mescrollInit">
            <list-component v-if="list.length > 0" :data="list" :doAction="goTarget" />
            <nothing-component v-else />
        </mescroll-component>
        <menu-component :data="menuConfig" :currentIndex="1" />
    </section>
</template>

<script>
    import MescrollComponent from 'mescroll.js/mescroll.vue'

    import HeaderComponent from '~/components/common/Header'
    import MenuComponent from '~/components/common/Menu'
    import TabComponent from '~/components/common/Tab'
    import ListComponent from '~/components/common/List'
    import NothingComponent from '~/components/common/Nothing'

    export default {
        head () {
            return {
                title: this.headerConfig.title,
            }
        },
        data () {
            return {
                headerConfig: {
                    title: '前端文章'
                },
                mescroll: null,
                mescrollUp: {
                    auto: true,
                    callback: this.upCallback,
                    htmlNodata: '<p class="upwarp-nodata">没有更多数据了!</p>'
                },
                list: []
            }
        },
        computed: {
            menuConfig () {
                return this.$store.state.menuConfig
            },
            tabConfig () {
                return this.$store.state.articleTabConfig
            },
        },
        methods: {
            mescrollInit (mescroll) {
                // mescroll组件初始化的回调,可获取到mescroll对象
                this.mescroll = mescroll
            },
            upCallback (page, mescroll) {
                this.getData(page, this.tabConfig.currentIndex, mescroll)
            },
            getData (page, category, mescroll) {
                this.$axios.get('/api/article/list', {
                    params: {
                        index: (page.num - 1) * 10 + 1,
                        category
                    }
                }).then((res) => {
                    let { code, data } = res.data
                    if (code === 0) {
                        if (page.num === 1) {
                            this.list = []
                        }

                        this.list = this.list.concat(data)

                        this.$nextTick(() => {
                            mescroll.endSuccess(data.length)
                        })
                    } else {
                        mescroll.endErr()
                    }
                }).catch((error) => {
                    mescroll.endErr(error)
                })
            },
            changeTab (index) {
                this.$store.commit('articleTabConfig', {
                    currentIndex: index
                })

                this.$nextTick(() => {
                    this.mescroll.triggerDownScroll()
                    this.mescroll.scrollTo(0, 0)
                })
            },
            goTarget (item) {
                this.$router.push(`/article/${item.id}`)
            }
        },
        beforeDestroy () {
            if (this.mescroll) {
                this.mescroll.destroy()
                this.mescroll = null
            }
        },
        components: {
            MescrollComponent,
            HeaderComponent,
            MenuComponent,
            TabComponent,
            ListComponent,
            NothingComponent
        }
    };
</script>