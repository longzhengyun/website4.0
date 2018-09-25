<template>
    <section class="about">
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
  export default class About extends Vue {
    // data
    private baseData: any[] = [
      { name: '版本', value: 'V4.0', space: 5, path: '/version' },
      { name: '应用技术', value: 'VueJS、TypeScript、PWA、HTML5、CSS3、PHP等', space: 5, multi: true },
    ];
    private moreData: any[] = [
      { name: '版权声明', value: '网站版权归佳瑞网所有', space: 5 },
      { name: '网站说明', value: '佳瑞网属于个人博客类网站', space: 5 },
    ];
  }
</script>
