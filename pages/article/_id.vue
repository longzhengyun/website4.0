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
            let { data } = await $axios.get('/api/article/detail', { params: { id: params.id } })

            if (data.code === 0) {
                detailData = data.data
            }

            let recommendData = {}

            return {
                detailData,
                recommendData,
            }
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
