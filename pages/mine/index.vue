<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <form-component :data="userData" nameLength="3" />
            <option-component :data="optionData" :doAction="goTarget" />
        </section>
        <menu-component :data="menuConfig" :currentIndex="3" />
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import MenuComponent from '~/components/common/Menu'
    import FormComponent from '~/components/common/Form'
    import OptionComponent from '~/components/common/Option'

    export default {
        async asyncData ({ $axios, store }) {
            let userData = []
            let { code, data } = (await $axios.get('/api/user/base')).data

            if (code === 0) {
                userData = [
                    { name: '英文名', value: data.nickname },
                    { name: 'Email', value: data.email },
                    { name: '城市', value: data.city },
                    { name: '职业', value: data.job },
                    { name: '签名', value: data.motto },
                ];
            }

            let optionData = [
                { name: '个人简历', route: '/resume' },
                { name: '关于佳瑞网', route: '/mine/about' },
                { name: '佳瑞网APP', route: '/mine/myapp' },
            ]

            if (store.state.isLogin) {
                optionData.push({
                    name: '设置',
                    route: '/mine/set'
                })
            }

            return {
                userData,
                optionData,
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
                    title: '我的'
                },
            }
        },
        computed: {
            menuConfig () {
                return this.$store.state.menuConfig
            },
        },
        methods: {
            goTarget (route) {
                this.$router.push(route)
            }
        },
        components: {
            HeaderComponent,
            MenuComponent,
            FormComponent,
            OptionComponent
        }
    };
</script>