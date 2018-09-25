<template>
    <section class="me">
      <form-component :data="baseData" />
      <form-component :data="moreData" />
    </section>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  import FormComponent from '../components/common/form.vue';

  @Component({
    components: {
      FormComponent,
    },
  })
  export default class Me extends Vue {
    // data
    private baseData: any[] = [
      { name: '英文名', value: 'Jary', space: 4 },
      { name: 'EMail', value: 'jary0419@163.com', space: 4 },
      { name: '城市', value: '武汉', space: 4 },
      { name: '职业', value: '互联网 - Web前端开发', space: 4 },
      { name: '签名', value: '天行健 君子以自强不息', space: 4 },
    ];
    private moreData: any[] = [
      { name: '', value: '关于佳瑞网', path: '/about' },
    ];
  }
</script>