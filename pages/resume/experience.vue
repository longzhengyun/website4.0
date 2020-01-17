<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <list2-component :data="list" :doAction="goTarget" />
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import List2Component from '~/components/resume/List2'

    export default {
        async asyncData ({ $axios }) {
            let list = []
            let { code, data } = (await $axios.post('/api/user/detail', { category: 'experience' })).data

            if (code === 0) {
                list = JSON.parse(data.experience)
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
                    title: '工作经历'
                },
            }
        },
        methods: {
            goTarget (item) {
                this.$GoTarget(item.url, item.title)
            }
        },
        components: {
            HeaderComponent,
            List2Component,
        }
    };
</script>