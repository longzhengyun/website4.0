<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <list-component :data="list" />
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import ListComponent from '~/components/resume/List'

    export default {
        async asyncData ({ $axios }) {
            let list = []
            let { code, data } = (await $axios.post('/api/user/detail', { category: 'evaluation' })).data

            if (code === 0) {
                list = JSON.parse(data.info)
            }

            return {
                list,
            }
        },
        head () {
            return {
                title: this.headerConfig.title,
            }
        },
        data () {
            return {
                headerConfig: {
                    showBack: true,
                    title: '职业评价'
                },
            }
        },
        components: {
            HeaderComponent,
            ListComponent,
        }
    };
</script>