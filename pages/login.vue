<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <ul class="login-wrap border-bottom-line">
                <li class="login-item border-bottom-line">
                    <div class="item-name" :style="`width:3em`">用户名</div>
                    <input class="item-value" type="text" v-model="username" placeholder="请输入用户名" />
                </li>
                <li class="login-item">
                    <div class="item-name" :style="`width:3em`">密码</div>
                    <input class="item-value" type="password" v-model="password" placeholder="请输入密码" />
                </li>
            </ul>
            <button class="sumbit-btn border-top-line border-bottom-line" :class="{ 'active': isPass }" @click="submitAction">登录</button>
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'

    export default {
        head () {
            return {
                title: this.headerConfig.title,
            }
        },
        data () {
            return {
                headerConfig: {
                    showBack: true,
                    title: '登录'
                },
                username: '',
                password: '',
                isPass: false,
            }
        },
        watch: {
            'username': function (val) {
                this.isPass = this.isVerification()
            },
            'password': function (val) {
                this.isPass = this.isVerification()
            },
        },
        methods: {
            isVerification() {
                return this.username && this.password && this.password.length > 0
            },
            submitAction () {
                if (!this.isPass) {
                    return false
                }

                this.$axios.post('/api/auth/login', {
                    username: this.username,
                    password: this.password
                }).then((res) => {
                    let { code, msg, data } = res.data
                    if (code === 0) {
                        this.$toast.show(msg)
                        this.$store.commit('isLogin', true)

                        let path = this.$route.query.redirect
                        if (path) {
                            this.$router.replace(path)
                        } else {
                            this.$router.go(-1)
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        components: {
            HeaderComponent,
        }
    };
</script>

<style scoped>
    .login-wrap{position:relative;background-color:#fff;padding:.1rem .4rem;margin-bottom:.2rem;}
    .login-item{position:relative;display:flex;padding:.2rem 0;font-size:.32rem;}
    .item-name{margin-right:.3rem;color:#999;}
    .item-value{flex:1;word-wrap:break-word;text-align:justify;}

    .sumbit-btn{position:relative;display:block;width:100%;padding:.25rem 0;background-color:#fff;text-align:center;color:#999;}
    .sumbit-btn.active{color:#333;}
</style>