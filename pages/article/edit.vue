<template>
    <div>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
    export default {
        async asyncData ({ params, $axios }) {
            let id = params.id
            let detail = {}
            let { data } = await $axios.get('/api/article/detail', { params: { id } })

            if (data.code === 0) {
                detail = data.data
            }

            return {
                detail
            }
        },
        head () {
            return {
                title: 'article'
            }
        },
        methods: {
            submit () {
                this.$axios.post('/api/article/edit', this.detail).then((res) => {
                    let { code, data } = res.data
                    if (code === 0) {
                        console.log(data);
                    }
                }).catch((error) => {
                    // console.log(error);
                })
            }
        },
        components: {}
    };
</script>
