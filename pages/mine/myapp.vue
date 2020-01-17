<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <form-component :data="appData" nameLength="4" :doAction="goTarget" />
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import FormComponent from '~/components/common/Form'

    export default {
        async asyncData () {
            let appData = [
                { name: '平台', value: 'Android' },
                { name: '版本', value: 'V1.2' },
                { name: '应用说明', value: '采用React Native开发' },
                { name: '下载地址', route: 'Download' },
            ];

            return {
                appData,
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
                    title: '佳瑞网App'
                },
            }
        },
        methods: {
            goTarget (route) {
                if (route === 'Download') {
                    this.$GoTarget('http://wwww.jary8.com')
                }
            }
        },
        components: {
            HeaderComponent,
            FormComponent,
        }
    };
</script>