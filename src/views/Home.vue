<template>
  <div>
    <mescroll class="home">
      <top />
      <tab />
    </mescroll>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';
  import { Component, Vue } from 'vue-property-decorator';

  import Tab from '../components/common/Tab.vue';
  import Top from '../components/common/Top.vue';
  import Mescroll from '../components/common/Mescroll.vue';
  console.log(Top)
  @Component({
    components: {
      Mescroll,
      Top,
      Tab,
    },
  })
  export default class Home extends Vue {
    // // data
    // public siteData: any[] = [];

    // // computed
    // get tabData(this: any) {
    //   return this.$store.state.tabData;
    // }

    // // methods
    // public downCallback(mescroll: any) {
    //   axios.get('/api?id=site_data').then((res: any) => {
    //     this.siteData = res.data.db_data || [];
    //     if (mescroll) {
    //       mescroll.endSuccess();
    //     }
    //   });
    // }

    // // goTarget(path: string) {}
  }
</script>
