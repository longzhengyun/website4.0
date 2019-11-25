<template>
    <div class="mescroll">
        <button @click="login">提交</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
                this.$axios.post('/api/auth/login', {
                    phone: '812345678',
                    password: '123456'
                })
            }
        },
        components: {}
    };
</script>
