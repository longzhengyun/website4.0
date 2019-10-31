<template>
    <mescroll-component :up="mescrollUp" @init="mescrollInit" id="mescroll">
        <nothing-component />
    </mescroll-component>
</template>

<script>
import MescrollComponent from 'mescroll.js/mescroll.vue'
import NothingComponent from '~/components/common/Nothing'

export default {
    head () {
        return {
            title: 'article'
        }
    },
    data () {
        return {
            mescroll: null,
            mescrollUp: {
                auto: true,
                callback: this.upCallback,
                htmlNodata: '<p class="upwarp-nodata">没有更多数据了!</p>'
            },
            list: []
        }
    },
    mounted () {},
    methods: {
        mescrollInit (mescroll) {
            // mescroll组件初始化的回调,可获取到mescroll对象
            this.mescroll = mescroll
        },
        upCallback (page, mescroll) {
            this.getData(page, mescroll)
        },
        getData (page, mescroll) {
            this.$axios.post('/api/article/list', { index: (page.num - 1) * 10 + 1 }).then((res) => {
                let { code, data } = res.data
                if (code === 0) {
                    if (page.num === 1) {
                        this.list = []
                    }
                    this.list = this.list.concat(data)

                    this.$nextTick(() => {
                        mescroll.endSuccess(data.length)
                    })
                } else {
                    mescroll.endErr()
                }
            }).catch((error) => {
                mescroll.endErr(error)
            })
        }
    },
    beforeDestroy () {
        if (this.mescroll) {
            this.mescroll.destroy()
            this.mescroll = null
        }
    },
    components: {
        MescrollComponent,
        NothingComponent
    }
};
</script>
