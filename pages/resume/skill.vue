<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <list3-component :data="list" />
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import List3Component from '~/components/resume/List3'

    export default {
        async asyncData ({ $axios }) {
            let list = []
            let { code, data } = (await $axios.post('/api/user/detail', { category: 'skill' })).data

            if (code === 0) {
                list = JSON.parse(data.skill)
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
                    title: '职业技能'
                },
            }
        },
        components: {
            HeaderComponent,
            List3Component,
        }
    };
</script>