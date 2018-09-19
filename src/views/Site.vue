<template>
    <mescroll-component class="site" :callback="downCallback">
      <site-list-component :data="siteData" />
    </mescroll-component>
</template>

<script lang="ts">
  import axios from 'axios';
  import { Component, Vue } from 'vue-property-decorator';

  import MescrollComponent from '../components/common/mescroll.vue';
  import SiteListComponent from '../components/site/siteList.vue';

  @Component({
    components: {
      MescrollComponent,
      SiteListComponent,
    },
  })
  export default class Site extends Vue {
    // data
    private siteData: any[] = [];

    // methods
    private downCallback(mescroll: any) {
      axios.get('/api?id=site_data').then((res: any) => {
        this.siteData = res.data.db_data || [];
        if (mescroll) {
          mescroll.endSuccess();
        }
      });
    }
  }
</script>
