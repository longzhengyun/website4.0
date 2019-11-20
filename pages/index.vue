<template>
    <section class="mescroll">
        <div class="index-search">
            <div class="logo">
                <img class="img" src="~/assets/logo.png" />
            </div>
            <div class="search" @click="goTarget('search')">
                <div class="input">
                    <div class="text">搜索感兴趣的前端文章</div>
                </div>
                <button class="submit icon-search" title="GO"></button>
            </div>
        </div>
        <div class="list-mode">
            <h2 class="mode-title">推荐文章</h2>
            <nuxt-link class="mode-more" to="/article">MORE</nuxt-link>
            <div class="mode-cont">
                <list-component :data="articleList" type="article" :goTarget="goTarget" />
            </div>
        </div>
        <div class="list-mode">
            <h2 class="mode-title">推荐网站</h2>
            <nuxt-link class="mode-more" to="/site">MORE</nuxt-link>
            <div class="mode-cont">
                <list-component :data="siteList" type="site" :goTarget="goTarget" />
            </div>
        </div>
    </section>
</template>

<script>
    import ListComponent from '~/components/home/List';

    export default {
        async asyncData ({ $axios }) {
            let articleList = []
            let siteList = []

            let articleData = await $axios.get('/api/article/hot')

            if (articleData.data.code === 0) {
                articleList = articleData.data.data
            }

            let siteData = await $axios.get('/api/site/hot')

            if (siteData.data.code === 0) {
                siteList = siteData.data.data
            }

            return {
                articleList,
                siteList
            }
        },
        head () {
            return {
                title: 'website'
            }
        },
        methods: {
            goTarget (type, item) {
                if (type === 'search') {
                    this.$router.push({ path: '/search' })
                }

                if (type === 'article') {
                    this.$router.push({ path: `/article/${item.id}` })
                }

                if (type === 'site') {
                    window.location.href = item.url
                }
            }
        },
        components: {
            ListComponent
        }
    };
</script>

<style scoped>
    .index-search{padding:1rem 0 .4rem 0;background-color:#fff;}
    .index-search .logo{width:3.84rem;height:1.2rem;margin:0 auto .6rem auto;}
    .index-search .search{position:relative;margin:0 .4rem;padding:.1rem .2rem;border-radius:.1rem;border:1px solid #ccc;}
    .index-search .input{height:.6rem;padding-right:1.5rem;}
    .index-search .text{width:100%;height:100%;font-size:.32rem;line-height:.6rem;color:#999;}
    .index-search .submit{position:absolute;top:50%;right:.1rem;transform:translateY(-50%);width:1.25rem;height:.6rem;font-size:.4rem;border-radius:0 .1rem .1rem 0;background-color:#eee;}

    .list-mode{position:relative;margin-top:.2rem;}
    .mode-title{line-height:1rem;padding:0 .4rem;font-size:.4rem;background-color:#fff;}
    .mode-more{position:absolute;top:0;right:0;padding:0 .4rem;line-height:1rem;color:#999;}
</style>