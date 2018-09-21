<template>
    <mescroll-component class="me">
      <form-component :data="formData" />
      <form-component :data="linkData" />
    </mescroll-component>
</template>

<script lang="ts">
  import axios from 'axios';
  import { Vue, Component } from 'vue-property-decorator';

  import MescrollComponent from '../components/common/mescroll.vue';
  import FormComponent from '../components/common/form.vue';

  @Component({
    components: {
      MescrollComponent,
      FormComponent,
    },
  })
  export default class Me extends Vue {
    // data
    private formData: any[] = [
      { name: '英文名', value: 'Jary', space: 4, },
      { name: 'EMail', value: 'jary0419@163.com', space: 4, },
      { name: '城市', value: '武汉', space: 4, },
      { name: '职业', value: '互联网 - Web前端开发', space: 4 },
      { name: '签名', value: '天行健 君子以自强不息', space: 4 },
    ];
    private linkData: any[] = [
      { name: '', value: '关于佳瑞网', path: '/' },
    ];
  }
</script>
