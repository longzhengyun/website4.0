<template>
    <section class="mescroll"></section>
</template>

<script>
    import ListComponent from '~/components/home/List';

    export default {
        async asyncData ({ $axios }) {
            let userData = []

            let { data } = await $axios.get('/api/user/base')

            if (data.code === 0) {
                userData = data.data
            }

            return {
                userData
            }
        },
        head () {
            return {
                title: 'mine'
            }
        },
        methods: {
            goTarget (item) {
                this.$router.push({ path: `/mine/${item.route}` })
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