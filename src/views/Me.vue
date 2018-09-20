<template>
    <mescroll-component class="home"></mescroll-component>
</template>

<script lang="ts">
  import axios from 'axios';
  import { Vue, Component } from 'vue-property-decorator';

  import MescrollComponent from '../components/common/mescroll.vue';

  @Component({
    components: {
      MescrollComponent,
    },
  })
  export default class Me extends Vue {
    // data
    public siteData: any[] = [];

    // computed
    get tabData(this: any) {
      return this.$store.state.tabData;
    }

    // methods
    public downCallback(mescroll: any) {
      axios.get('/api?id=site_data').then((res: any) => {
        this.siteData = res.data.db_data || [];
        if (mescroll) {
          mescroll.endSuccess();
        }
      });
    }

    // // goTarget(path: string) {}
  }
</script>
