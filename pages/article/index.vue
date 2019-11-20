<template>
    <mescroll-component :up="mescrollUp" @init="mescrollInit">
        <tab-component :tabConfig="tabConfig" type="article" />
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
                title: 'article'
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
                return this.$store.state.articleTabConfig
            },
        },
        methods: {
            mescrollInit (mescroll) {
                // mescroll组件初始化的回调,可获取到mescroll对象
                this.mescroll = mescroll
            },
            upCallback (page, mescroll) {
                this.getData(page, mescroll)
            },
            getData (page, mescroll) {
                this.$axios.get('/api/article/list', { params: { index: (page.num - 1) * 10 + 1 } }).then((res) => {
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
            goTarget (item) {
                this.$router.push({ path: `/article/${item.id}` })
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
