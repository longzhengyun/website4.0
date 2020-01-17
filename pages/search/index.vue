<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <input-component :typeName="typeName" :keyword="keyword" :doAction="doSearch" />
        <mescroll-component :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
            <list-component v-if="list.length > 0" :data="list" :doAction="goTarget" />
            <history-component v-if="showHistory" :data="historyData" :doAction="doSearch" />
            <nothing-component v-if="!showHistory && list.length === 0" />
        </mescroll-component>
        <button class="sumbit-btn border-top-line border-bottom-line" v-if="showHistory" @click="clearAction">清空历史搜索</button>
        <select-component v-show="showSelect" :data="selectConfig" :type="type" :doAction="doSelect" />
    </section>
</template>

<script>
    import MescrollComponent from 'mescroll.js/mescroll.vue'

    import HeaderComponent from '~/components/common/Header'
    import SelectComponent from '~/components/common/Select'
    import ListComponent from '~/components/common/List'
    import NothingComponent from '~/components/common/Nothing'
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
                    noMoreSize: 10,
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
                            this.doHistoryData('set', { title: keyword, type, typeName: this.typeName }) // 本地存储搜索关键字
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
                         // 搜索内容不区分大小写
                        if (item.title.toUpperCase() === value.title.toUpperCase() && item.type === value.type) {
                            isRecorded = true
                        }
                    })

                    if (!isRecorded) {
                        this.historyData.unshift(value)
                        window.localStorage.setItem('historySearch', JSON.stringify(this.historyData))
                    }
                }
            },
            doSearch(key, item) {
                if (key === 'select') {
                    this.showSelect = true
                }

                if (key === 'search' && item) {
                    this.list = []

                    this.keyword = item.title
                    if (item.type) {
                        this.type = item.type
                    }
                    if (item.typeName) {
                        this.typeName = item.typeName
                    }

                    this.mescroll.resetUpScroll()
                    this.mescroll.scrollTo(0, 0)
                }
            },
            goTarget (item) {
                let path = ''
                let title = ''
                if (this.type === 'article') {
                    path = `/article/${item.id}`
                }

                if (this.type === 'site') {
                    path = item.url
                    title = item.title
                }

                this.$GoTarget(path, title)
            },
            doSelect (item) {
                this.showSelect = false

                if (item) {
                    this.type = item.type
                    this.typeName = item.typeName
                }
            },
            clearAction () {
                this.historyData = [] // 清空历史搜索列表数据
                this.showHistory = false // 隐藏历史搜索列表
                window.localStorage.removeItem('historySearch') // 清空本地存储数据
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
            NothingComponent,
            InputComponent,
            HistoryComponent,
        }
    };
</script>

<style scoped>
    .sumbit-btn{position:relative;display:block;width:100%;padding:.25rem 0;background-color:#fff;text-align:center;color:#333;}
</style>