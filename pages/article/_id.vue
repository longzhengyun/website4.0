<template>
    <div></div>
</template>

<script>
    export default {
        async asyncData ({ params, $axios }) {
            let detail = {}
            let id = params.id
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
        components: {}
    };
</script>
