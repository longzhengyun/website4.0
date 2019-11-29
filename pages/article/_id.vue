<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <detail-component :data="detailData" />
            <recommend-component :data="recommendData" :goTarget="goTarget" />
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import RecommendComponent from '~/components/common/Recommend'
    import DetailComponent from '~/components/article/detail'

    export default {
        async asyncData ({ params, $axios }) {
            let detailData = {}
            let articleDetail = (await $axios.get('/api/article/detail', { params: { id: params.id } })).data

            if (articleDetail.code === 0) {
                detailData = articleDetail.data
            }

            let recommendData = {
                name: '相关文章',
                item: [],
            }
            let articleRecommend = (await $axios.get('/api/article/recommend', { params: { id: params.id, category: detailData.category } })).data

            if (articleRecommend.code === 0) {
                recommendData.item = articleRecommend.data
            }

            return {
                detailData,
                recommendData,
            }
        },
        validate({ params }) {
            return Number.isSafeInteger(Number(params.id)) && Number(params.id) >= 0
        },
        head () {
            return {
                title: this.detailData.title,
            }
        },
        data () {
            return {
                headerConfig: {
                    showBack: true,
                    showHome: true,
                    title: '文章详情'
                },
            }
        },
        methods: {
            goTarget (type, item) {
                this.$router.push(`/article/${item.id}`)
            }
        },
        components: {
            HeaderComponent,
            DetailComponent,
            RecommendComponent,
        }
    };
</script>
