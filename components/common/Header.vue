<template>
    <section v-if="headerConfig.showHeader" class="header-wrap">
        <div v-if="headerConfig.showBack" class="header-icon header-back" @click="goBack"></div>
        <div v-if="headerConfig.showClose" class="header-icon header-close" @click="goClose"></div>
        <h2 class="header-title">{{headerConfig.title}}</h2>
    </section>
</template>

<script>
export default {
    name: 'Header',
    props: ['headerConfig'],
    methods: {
        goBack () {
            this.$router.go(-1)
        },
        goClose () {
            this.$router.push({ path: '/' })
        }
    }
}
</script>

<style scoped>
    .header-wrap{position:relative;z-index:499;height:1rem;background-color:#eee;}
    .header-icon{position:absolute;top:50%;}
    .header-icon img{display:block;width:100%;height:100%;}
    .header-back{left:0;width:1rem;height:1rem;transform:translateY(-50%);}
    .header-back::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) rotate(-45deg);width:.3rem;height:.3rem;border:1px solid;border-color:#333 transparent transparent #333;}
    .header-close{left:.7rem;width:.75rem;height:.75rem;transform:translateY(-50%) rotate(-45deg);}
    .header-close::before,
    .header-close::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#333;}
    .header-close::before{width:1px;height:70%;}
    .header-close::after{width:70%;height:1px;}
    .header-title{margin:0 1.25rem;height:1rem;line-height:1rem;text-align:center;font-size:.36rem;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold;}
    .header-title .title-icon{width:.6rem;height:.6rem;margin-right:.1rem;border-radius:100%;vertical-align:middle;}
</style>
