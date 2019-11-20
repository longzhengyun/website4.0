<template>
    <section class="container">
        <div class="fail">
            <img src="/img/default_fail.png" class="fail-icon" />
            <span class="fail-text">加载失败，请检查网络是否连接！</span>
            <nuxt-link class="button" to="/" v-if="error.statusCode === 404">返回首页</nuxt-link>
        </div>
    </section>
</template>
<script>
    export default {
        props: ['error'],
        head () {
            return {
                title: '404'
            }
        },
        mounted () {
            console.log(this.error.statusCode + ':' + this.error.message)
        }
    }
</script>

<style scoped>
    .fail{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;}
    .fail .fail-icon{display:block;width:2.04rem;height:1.35rem;margin:0 auto;}
    .fail .fail-text{display:block;margin-top:.3rem;color:#999;white-space:nowrap;}
    .button{display:inline-block;margin:.3rem auto 0 auto;padding:0 .25rem;font-size:.32rem;border-radius:.06rem;line-height:1.7;border:1px solid #42d69c;color:#42d69c;}
</style>
