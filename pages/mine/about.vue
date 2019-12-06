<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <form-component :data="baseData" nameLength="4" :doAction="goTarget" />
            <form-component :data="moreData" nameLength="4" />
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import FormComponent from '~/components/common/Form'

    import { version } from '~/package.json'

    export default {
        async asyncData () {
            let baseData = [
                { name: '版本', value: `V ${version}`, route: '/mine/version' },
                { name: '应用技术', value: 'HTML5、CSS3、VUE、NODE、MYSQL等' },
            ];

            let moreData = [
                { name: '版权声明', value: '网站版权归佳瑞网所有，文章归原作者所有。' },
                { name: '网站说明', value: '佳瑞网属于个人博客类网站，为记录及分享前端开发相关文章而建。' },
            ];

            return {
                baseData,
                moreData,
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
                    title: '关于佳瑞网'
                },
            }
        },
        methods: {
            goTarget (route) {
                this.$router.push(route)
            }
        },
        components: {
            HeaderComponent,
            FormComponent,
        }
    };
</script>