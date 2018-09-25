<template>
    <mescroll-component class="novel"></mescroll-component>
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
  export default class Novel extends Vue {
    // data
    private novelData: any[] = [];

    // methods
    private downCallback(mescroll: any) {
      axios.get('/api?id=novel_data').then((res: any) => {
        this.novelData = res.data.db_data || [];
        if (mescroll) {
          mescroll.endSuccess();
        }
      });
    }
  }
</script>
