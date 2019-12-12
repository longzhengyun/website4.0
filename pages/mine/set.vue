<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <form-component :data="userData" nameLength="3" />
            <button class="sumbit-btn border-top-line border-bottom-line" @click="submitAction">退出登录</button>
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import FormComponent from '~/components/common/Form'

    export default {
        async asyncData ({ $axios }) {
            let userData = []
            let { code, data } = (await $axios.post('/api/auth/user')).data

            if (code === 0) {
                userData = [
                    { name: '用户名', value: data.nickname },
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
                    showBack: true,
                    title: '设置'
                },
            }
        },
        methods: {
            submitAction () {
                this.$axios.post('/api/auth/logout').then((res) => {
                    let { code, msg, data } = res.data
                    if (code === 0) {
                        this.$toast.show(msg)
                        this.$store.commit('isLogin', false)
                        this.$router.go(-1)
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        components: {
            HeaderComponent,
            FormComponent,
        }
    };
</script>

<style scoped>
    .sumbit-btn{position:relative;display:block;width:100%;padding:.25rem 0;background-color:#fff;text-align:center;color:#333;}
</style>