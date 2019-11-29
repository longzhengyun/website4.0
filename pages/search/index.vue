<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <input-component :doAction="doSearch" />
        <mescroll-component :up="mescrollUp" :down="mescrollDown" @init="mescrollInit">
            <list-component :data="list" :goTarget="goTarget" />
        </mescroll-component>
    </section>
</template>

<script>
    import MescrollComponent from 'mescroll.js/mescroll.vue'

    import HeaderComponent from '~/components/common/Header'
    import ListComponent from '~/components/common/List'
    import InputComponent from '~/components/search/Input'

    export default {
        head () {
            return {
                title: this.headerConfig.title,
            }
        },
        data () {
            return {
                headerConfig: {
                    showBack: true,
                    title: '全站搜索'
                },
                mescroll: null,
                mescrollUp: {
                    use: false,
                    callback: this.upCallback,
                    htmlNodata: '<p class="upwarp-nodata">没有更多数据了!</p>'
                },
                mescrollDown: {
                    use: false,
                },
                type: 'article',
                keyword: '',
                list: []
            }
        },
        methods: {
            mescrollInit (mescroll) {
                // mescroll组件初始化的回调,可获取到mescroll对象
                this.mescroll = mescroll
            },
            upCallback (page, mescroll) {
                this.getData(page, this.type, this.keyword, mescroll)
            },
            getData (page, type, keyword, mescroll) {
                this.$axios.get('/api/search', {
                    params: {
                        index: (page.num - 1) * 10 + 1,
                        type,
                        keyword,
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
            doSearch(data) {
                if (data && data.keyword) {
                    this.keyword = data.keyword
                    this.type = data.type

                    // this.mescroll.triggerUpScroll()
                    this.mescroll.scrollTo(0, 0)
                }
            },
            goTarget (item) {
                if (this.type === 'article') {
                    this.$router.push(`/article/${item.id}`)
                }

                if (this.type === 'site') {
                    this.$router.push({ path: `/webView?url=${item.url}&title=${item.title}` })
                }
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
            ListComponent,
            InputComponent,
        }
    };
</script>