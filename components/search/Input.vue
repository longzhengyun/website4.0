<template>
    <div class="model-wrap">
        <div class="model-cont">
            <div class="select" @click="doAction('select', null)">{{typeName}}</div>
            <input class="input" type="text" v-model="text" placeholder="搜索感兴趣的前端文章和网站" />
            <button class="submit icon-search" title="GO" @click="doAction('search', { title: text, typeName })"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        props: ['typeName', 'keyword', 'doAction'],
        watch: {
            'keyword': function (val) {
                this.text = val
            }
        },
        data () {
            return {
                text: '',
            }
        },
    }
</script>

<style scoped>
    .model-wrap{padding:.4rem 0;background-color:#fff;}
    .model-cont{position:relative;display:flex;margin:0 .4rem;padding:.1rem .2rem;border-radius:.1rem;border:1px solid #ccc;}
    .model-cont .select{position:relative;width:1.2rem;line-height:.6rem;font-size:.28rem;}
    .model-cont .select::after{content:'';position:absolute;top:40%;right:0;width:0;height:0;border:.1rem solid transparent;border-top-color:#333;}
    .model-cont .input{width:100%;height:.6rem;box-sizing:border-box;font-size:.28rem;line-height:.6rem;color:#999;padding:0 .2rem;}
    .model-cont .submit{width:1.25rem;height:.6rem;font-size:.4rem;border-radius:0 .1rem .1rem 0;background-color:#eee;}
</style>
