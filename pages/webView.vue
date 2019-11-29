<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <Web-view-component :data="webView" />
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import WebViewComponent from '~/components/common/WebView'

    export default {
        async asyncData ({ query }) {
            return {
                webView: query,
            }
        },
        validate({ query }) {
            return query.url && query.url.indexOf('http') === 0
        },
        head () {
            return {
                title: this.webView.title,
            }
        },
        data () {
            return {
                headerConfig: {
                    showBack: true,
                    showClose: true,
                    title: '',
                },
            }
        },
        mounted () {
            this.headerConfig.title = this.webView.title
        },
        components: {
            HeaderComponent,
            WebViewComponent,
        }
    };
</script>

