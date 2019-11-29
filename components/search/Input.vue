<template>
    <div class="model-wrap">
        <div class="model-cont">
            <select class="select" name="select" v-model="type">
                <option value="article">文章</option>
                <option value="site">网站</option>
            </select>
            <input class="input" type="text" v-model="keyword" placeholder="搜索感兴趣的前端文章和网站" />
            <button class="submit icon-search" title="GO" @click="doAction({ type, keyword })"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        props: ['doAction'],
        data () {
            return {
                type: 'article',
                keyword: '',
            }
        },
    }
</script>

<style scoped>
    .model-wrap{padding:.4rem 0;background-color:#fff;}
    .model-cont{position:relative;display:flex;margin:0 .4rem;padding:.1rem .2rem;border-radius:.1rem;border:1px solid #ccc;}
    .model-cont .select{padding:0;margin:0;background-color:transparent;border:0;}
    .model-cont .input{width:100%;height:.6rem;box-sizing:border-box;font-size:.28rem;line-height:.6rem;color:#999;padding:0 .2rem;}
    .model-cont .submit{width:1.25rem;height:.6rem;font-size:.4rem;border-radius:0 .1rem .1rem 0;background-color:#eee;}
</style>
