<template>
    <section class="app-wrap">
        <header-component :data="headerConfig" />
        <section class="mescroll">
            <div class="my-photo">
                <img class="img" src="~/assets/jary.jpg" />
            </div>
            <form-component :data="baseData" nameLength="4" :doAction="goTarget" />
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
        async asyncData ({ $axios }) {
            let baseData = []
            let detailData = []
            let { code, data } = (await $axios.post('/api/user/detail')).data

            // 获取年龄，工作年限
            const FormatYear = (date) => {
                return parseInt((new Date().getTime() - new Date(date).getTime()) / 1000 / 60 / 60 / 24 / 365)
            }

            if (code === 0) {
                baseData = [
                    { name: '姓名', value: data.nickname },
                    { name: '年龄', value: FormatYear(data.birthday) },
                    { name: '手机', value: data.phone },
                    { name: 'Email', value: data.email },
                    { name: 'GitHub', route: data.github },
                ];

                detailData = [
                    { name: '学历', value: data.degrees },
                    { name: '专业', value: data.major },
                    { name: '职业', value: data.job },
                    { name: '工作年限', value: FormatYear(data.worklife) },
                    { name: '工作状态', value: data.state },
                    { name: '期望年薪', value: data.salary },
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
                    { name: '个人案例', route: '/example' },
                    { name: '职业评价', route: '/resume/evaluation' },
                    { name: '职业技能', route: '/resume/skill' },
                    { name: '工作经历', route: '/resume/experience' },
                    { name: '其他信息', route: '/resume/other' },
                ],
            }
        },
        methods: {
            goTarget (route) {
                if (route.indexOf('http') === 0) {
                    window.location.href = route
                } else {
                    this.$router.push(route)
                }
            }
        },
        components: {
            HeaderComponent,
            FormComponent,
            OptionComponent
        }
    };
</script>

<style scoped>
    .my-photo{width:2.4rem;height:2.4rem;border-radius:100%;margin:.2rem auto;overflow:hidden;}
</style>