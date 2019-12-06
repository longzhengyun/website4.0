<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <form-component :data="baseData" nameLength="4" />
            <form-component :data="detailData" nameLength="4" />
            <option-component :data="optionData" :doAction="goTarget" />
        </section>
    </section>
</template>

<script>
    import HeaderComponent from '~/components/common/Header'
    import FormComponent from '~/components/common/Form'
    import OptionComponent from '~/components/common/Option'

    export default {
        middleware: 'auth',
        async asyncData ({ $axios }) {
            let baseData = []
            let detailData = []
            let { code, data } = (await $axios.post('/api/user/detail')).data

            if (code === 0) {
                baseData = [
                    { name: '姓名', value: data.nickname },
                    { name: '年龄', value: data.email },
                    { name: '手机', value: data.city },
                    { name: 'Email', value: data.job },
                    { name: 'GitHub', value: data.motto, route: '/' },
                ];

                detailData = [
                    { name: '学历', value: data.nickname },
                    { name: '专业', value: data.email },
                    { name: '职业', value: data.job },
                    { name: '工作年限', value: data.job },
                    { name: '工作状态', value: data.motto },
                    { name: '期望年薪', value: data.motto },
                ];
            }

            return {
                baseData,
                detailData,
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
                    title: 'Resume'
                },
                optionData: [
                    { name: '个人案例', route: '/case' },
                    { name: '职业评价', route: '/resume/evaluation' },
                    { name: '职业技能', route: '/resume/skill' },
                    { name: '工作经历', route: '/resume/experience' },
                    { name: '其他信息', route: '/resume/other' },
                ],
            }
        },
        methods: {
            goTarget (route) {
                this.$router.push(route)
            }
        },
        components: {
            HeaderComponent,
            FormComponent,
            OptionComponent
        }
    };
</script>