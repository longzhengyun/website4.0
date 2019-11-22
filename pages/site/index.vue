<template>
    <mescroll-component :up="mescrollUp" @init="mescrollInit">
        <tab-component :tabConfig="tabConfig" :changeTab="changeTab" />
        <list-component v-if="list.length > 0" :data="list" :goTarget="goTarget" />
        <nothing-component v-else />
    </mescroll-component>
</template>

<script>
    import MescrollComponent from 'mescroll.js/mescroll.vue'
    import TabComponent from '~/components/common/Tab';
    import ListComponent from '~/components/common/List';
    import NothingComponent from '~/components/common/Nothing'

    export default {
        head () {
            return {
                title: 'site'
            }
        },
        data () {
            return {
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
            tabConfig () {
                return this.$store.state.siteTabConfig
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
                this.$axios.get('/api/site/list', {
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
                this.$store.commit('siteTabConfig', {
                    currentIndex: index
                })

                this.$nextTick(() => {
                    this.mescroll.triggerDownScroll()
                    this.mescroll.scrollTo(0, 0)
                })
            },
            goTarget (item) {
                window.location.href = item.url
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
            TabComponent,
            ListComponent,
            NothingComponent
        }
    };
</script>

<style scoped>
    .mescroll{padding-top: 1rem;}
</style>