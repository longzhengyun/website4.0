<template>
    <section class="container">
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
            <div class="mode-cont"></div>
        </div>
        <div class="list-mode">
            <h2 class="mode-title">推荐网站</h2>
            <nuxt-link class="mode-more" to="/site">MORE</nuxt-link>
            <div class="mode-cont"></div>
        </div>
    </section>
</template>

<script>
export default {
    // auth: false,
    mounted () {},
    components: {},
    methods: {
        goTarget () {
            this.$router.push({ path: 'search' })
        }
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

    .list-mode{position:relative;margin-top:.2rem;background-color:#fff;}
    .mode-title{line-height:1rem;padding:0 .4rem;font-size:.4rem;}
    .mode-more{position:absolute;top:0;right:0;padding:0 .4rem;line-height:1rem;color:#999;}
</style>