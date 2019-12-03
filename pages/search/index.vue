<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <input-component :typeName="typeName" :keyword="keyword" :doAction="doSearch" />
        <mescroll-component :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
            <list-component v-if="list.length > 0" :data="list" :doAction="goTarget" />
            <history-component v-if="showHistory" :data="historyData" :doAction="doSearch" />
        </mescroll-component>
        <select-component v-show="showSelect" :data="selectConfig" :type="type" :doAction="doSelect" />
    </section>
</template>

<script>
    import MescrollComponent from 'mescroll.js/mescroll.vue'

    import HeaderComponent from '~/components/common/Header'
    import SelectComponent from '~/components/common/Select'
    import ListComponent from '~/components/common/List'
    import InputComponent from '~/components/search/Input'
    import HistoryComponent from '~/components/search/History'

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
                    auto: false,
                    callback: this.upCallback,
                    htmlNodata: '<p class="upwarp-nodata">没有更多数据了!</p>'
                },
                mescrollDown: {
                    use: false,
                },
                type: 'article',
                typeName: '文章',
                keyword: '',
                showHistory: false,
                historyData: [],
                list: [],
                showSelect: false,
                selectConfig: [
                    { type: 'article', typeName: '文章' },
                    { type: 'site', typeName: '网站' },
                ]
            }
        },
        mounted () {
            this.doHistoryData('get', null)
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

                        this.showHistory = false // 隐藏历史搜索列表
                        this.list = this.list.concat(data)

                        this.$nextTick(() => {
                            this.doHistoryData('set', keyword) // 本地存储搜索关键字
                            mescroll.endSuccess(data.length)
                        })
                    } else {
                        mescroll.endErr()
                    }
                }).catch((error) => {
                    mescroll.endErr(error)
                })
            },
            doHistoryData(key, value) {
                if (key === 'get') {
                    let historySearch = window.localStorage.getItem('historySearch')
                    if (historySearch) {
                        this.historyData = JSON.parse(historySearch)
                        this.showHistory = true
                    }
                }

                if (key === 'set') {
                    // 本地存储搜索记录
                    let isRecorded = false
                    this.historyData.map(item => {
                        if (item.title.toUpperCase() === value.toUpperCase()) { // 不区分大小写
                            isRecorded = true
                        }
                    })

                    if (!isRecorded) {
                        this.historyData.unshift({ title: value })
                        localStorage.setItem('historySearch', JSON.stringify(this.historyData))
                    }
                }
            },
            doSearch(key, keyword) {
                if (key === 'select') {
                    this.showSelect = true
                }

                if (key === 'search' && keyword) {
                    this.keyword = keyword
                    this.list = []

                    this.mescroll.resetUpScroll()
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
            },
            doSelect (item) {
                this.showSelect = false

                if (item) {
                    this.type = item.type
                    this.typeName = item.typeName
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
            SelectComponent,
            ListComponent,
            InputComponent,
            HistoryComponent,
        }
    };
</script>