<template>
    <mescroll-component class="version">
      <form-component :data="item" v-for="(item, key) in data" :key="key" />
    </mescroll-component>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  import MescrollComponent from '../components/common/mescroll.vue';
  import FormComponent from '../components/common/form.vue';

  @Component({
    components: {
      MescrollComponent,
      FormComponent,
    },
  })
  export default class Version extends Vue {
    // data
    private data: any[] = [
      [
        { name: '2018.10', value: '佳瑞网V4.0上线。', space: 5, multi: true },
        { name: '', value: '使用技术包括：VueJS、TypeScript、PWA、HTML5、CSS3、PHP等。', space: 5, multi: true },
        { name: '', value: '此次更新放弃兼容PC端，专注移动端。使用VueJS构建单页面应用。', space: 5, multi: true },
      ],
      [
        { name: '2017.06', value: '佳瑞网APP V1.0 Android版发布。', space: 5, multi: true },
        { name: '', value: '使用技术包括：React Native、JavaScript等。', space: 5, multi: true },
      ],
      [
        { name: '2016.08', value: '佳瑞网V3.0上线', space: 5, multi: true },
        { name: '', value: '使用技术包括：HTML5、CSS3、AngularJS、JavaScript、PHP等', space: 5, multi: true },
        { name: '', value: '此次更新采用移动端优先，PC端兼容的模式，以AngularJS为基础，更新了整个网站', space: 5, multi: true },
      ],
      [
        { name: '2015', value: '为了应用新的技术，再次升级佳瑞网的计划也提上日程。', space: 5, multi: true },
      ],
      [
        { name: '', value: '网站内容完善中。', space: 5, multi: true },
      ],
      [
        { name: '2012.04', value: '佳瑞网V2.0上线。', space: 5, multi: true },
        { name: '', value: '启用新域名：jary8.com。使用技术包括：HTML5、CSS3、jQuery、JavaScript、PHP(EMLOG博客模板)等。', space: 5, multi: true },
        { name: '', value: '此次更新抛弃Flash，以PHP+MYSQL为基础，全新设计制作整个网站，使佳瑞网拥有了后台管理系统，成为真正的博客网站。', space: 5, multi: true },
      ],
      [
        { name: '2011', value: '由于技术更新换代，新版佳瑞网在业余时间，持续不断的开发中。', space: 5, multi: true },
      ],
      [
        { name: '', value: '网站内容完善中。', space: 5, multi: true },
      ],
      [
        { name: '2008.04', value: '佳瑞网V1.0上线。', space: 5, multi: true },
        { name: '', value: '域名为：jary9.cn。使用技术包括HTML、CSS、Flash等。', space: 5, multi: true },
        { name: '', value: '网站功能简单，主要用FLASH技术实现页面切换及在线留言功能。', space: 5, multi: true },
      ],
      [
        { name: '2008', value: '创建佳瑞网的构想酝酿中，并迅速执行实现。', space: 5, multi: true },
      ],
      [
        { name: '2007', value: '前端初入行，梦想有一个自己的网站！', space: 5, multi: true },
      ],
    ];
  }
</script>
