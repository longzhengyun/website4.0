<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <detail-component :data="detailData" />
            <recommend-component :data="listData" :doAction="goTarget" />
            <recommend-component v-if="recommendData.item.length > 0" :data="recommendData" :doAction="goTarget" />
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import RecommendComponent from '~/components/common/Recommend'
    import DetailComponent from '~/components/example/Detail'

    export default {
        async asyncData ({ params, $axios }) {
            let detailData = {}
            let listData = {
                name: 'Pages',
                type: 'page',
                item: [],
            }
            let exampleDetail = (await $axios.post('/api/example/detail', { id: params.id })).data

            if (exampleDetail.code === 0) {
                detailData = exampleDetail.data

                let pages = JSON.parse(exampleDetail.data.pages)
                pages.map((item) => {
                    listData.item.push({
                        title: item.name,
                        url: item.url,
                    })
                })
            }

            let recommendData = {
                name: '相关案例',
                type: 'example',
                item: [],
            }
            let exampleRecommend = (await $axios.post('/api/example/recommend', { id: params.id, belong: detailData.belong })).data

            if (exampleRecommend.code === 0) {
                recommendData.item = exampleRecommend.data
            }

            return {
                headerConfig: {
                    showBack: true,
                    title: detailData.title
                },
                detailData,
                listData,
                recommendData,
            }
        },
        head () {
            return {
                title: this.detailData.title,
            }
        },
        methods: {
            goTarget (type, item) {
                if (type === 'example') {
                    this.$router.push(`/example/${item.id}`)
                }

                if (type === 'page') {
                    if (item.url.substring(item.url.length - 5) === '.html') {
                        this.$GoTarget(`${window.location.origin}/example/${item.url}`, item.title)
                    } else {
                        this.$toast.show('该页面为后端html模板，暂不支持预览')
                    }
                }
            }
        },
        components: {
            HeaderComponent,
            DetailComponent,
            RecommendComponent,
        }
    };
</script>
