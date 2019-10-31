<template>
    <div class="app-wrap" ref="appWrap">
        <header-component :headerConfig="curHeaderConfig"></header-component>
        <nuxt class="mescroll" />
        <menu-component :menuConfig="curMenuConfig" />
    </div>
</template>

<script>
import { setHeaderConfigAction, setMenuConfigAction } from '~/assets/setAppConfig.js'

import HeaderComponent from '~/components/common/Header'
import MenuComponent from '~/components/common/menu'

export default {
    data () {
        return {
            curHeaderConfig: {},
            curMenuConfig: {},
        }
    },
    computed: {
        headerConfig () {
            return this.$store.state.headerConfig
        },
        menuConfig () {
            return this.$store.state.menuConfig
        }
    },
    mounted () {
        this.setHeaderConfig(this.$route)
        this.setMenuConfig(this.$route)
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': function (val, oldVal) {
            this.setHeaderConfig(val)
            this.setMenuConfig(val)
        }
    },
    methods: {
        setHeaderConfig (value) {
            let config = setHeaderConfigAction(value.name) // 执行配置头部方法

            this.curHeaderConfig = Object.assign({}, this.headerConfig, config) // 将新值和默认值合并到空对象中 解决直接修改子属性组件不更新问题
        },
        setMenuConfig (value) {
            let config = setMenuConfigAction(value.name) // 执行配置菜单方法

            this.curMenuConfig = Object.assign({}, this.menuConfig, config) // 将新值和默认值合并到空对象中 解决直接修改子属性组件不更新问题
        }
    },
    components: {
        HeaderComponent,
        MenuComponent
    }
}
</script>
