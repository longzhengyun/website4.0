<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <form-component :data="userData" nameLength="3" />
            <option-component :data="optionData" :goTarget="goTarget" />
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
        async asyncData ({ $axios }) {
            let userData = []
            let { data } = await $axios.get('/api/user/base')

            if (data.code === 0) {
                userData = [
                    { name: '英文名', value: data.data.nickname },
                    { name: 'Email', value: data.data.email },
                    { name: '城市', value: data.data.city },
                    { name: '职业', value: data.data.job },
                    { name: '签名', value: data.data.motto },
                ];
            }

            return {
                userData,
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
                optionData: [
                    { name: '个人简历', route: '/resume' },
                    { name: '关于佳瑞网', route: '/about' },
                    { name: '佳瑞网APP', route: '/myapp' },
                    // { name: '设置', route: '/set' },
                ],
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