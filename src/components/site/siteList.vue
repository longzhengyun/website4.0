<template>
  <ul class="list-mode">
		<li class="list-item" v-for="(item, key) in data" :key="key" @click="goTarget(item)">
			<div class="item-tags"><span class="tags-item" :class="{'tags-item1': item.category === '技术', 'tags-item2': item.category === '工具', 'tags-item3': item.category === '其他'}">{{item.category}}</span></div>
			<h2 class="item-title">{{item.title}}</h2>
			<p class="item-info">{{item.description}}</p>
		</li>
	</ul>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class SiteList extends Vue {
    // props
    @Prop()
    private data!: any[];

    // methods
    private goTarget(this: any, item: any) {
      this.$router.push({ path: '/webView?url=' + item.url + '&title=' + item.title });
    }
  }
</script>

<style scoped>
  .list-mode .list-item{position:relative;padding:.2rem;margin-bottom:.2rem;background-color:#fff;border-top:1px solid #dfdfdf;border-bottom:1px solid #dfdfdf;}
  .list-mode .item-title{font-size:.36rem;font-weight:normal;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}
  .list-mode .item-info{color:#666;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}
  .list-mode .item-tags{float:right;font-size:0;}
  .list-mode .item-tags .tags-item{margin-left:.25rem;font-size:.24rem;}

</style>
