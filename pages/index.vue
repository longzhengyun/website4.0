<template>
    <section class="app-wrap">
        <section class="mescroll">
            <search-component :doAction="goTarget" />
            <recommend-component :data="articleData" :doAction="goTarget" />
            <recommend-component :data="siteData" :doAction="goTarget" />
        </section>
        <menu-component :data="menuConfig" :currentIndex="0" />
    </section>
</template>

<script>
    import MenuComponent from '~/components/common/Menu'
    import RecommendComponent from '~/components/common/Recommend'
    import SearchComponent from '~/components/home/Search'

    export default {
        async asyncData ({ $axios }) {
            let articleData = {
                name: '推荐文章',
                route: '/article',
                type: 'article',
                item: [],
            }
            let articleList = (await $axios.get('/api/article/hot')).data

            if (articleList.code === 0) {
                articleData.item = articleList.data
            }

            let siteData = {
                name: '推荐网站',
                route: '/site',
                type: 'site',
                item: [],
            }
            let sitelist = (await $axios.get('/api/site/hot')).data

            if (sitelist.code === 0) {
                siteData.item = sitelist.data
            }

            return {
                articleData,
                siteData
            }
        },
        head () {
            return {
                title: '佳瑞网',
            }
        },
        computed: {
            menuConfig () {
                return this.$store.state.menuConfig
            }
        },
        methods: {
            goTarget (type, item) {
                if (type === 'search') {
                    this.$router.push('/search')
                }

                if (type === 'article') {
                    this.$router.push(`/article/${item.id}`)
                }

                if (type === 'site') {
                    this.$router.push({ path: `/webView?url=${item.url}&title=${item.title}` })
                }
            }
        },
        components: {
            MenuComponent,
            SearchComponent,
            RecommendComponent,
        }
    };
</script>