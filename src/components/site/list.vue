<template>
  <ul class="list-mode">
		<li class="list-item" v-for="(item, key) in data" :key="key" @click="goTarget(item)">
			<div class="tags-item" :class="{'tags-item1': item.category === '技术', 'tags-item2': item.category === '工具', 'tags-item3': item.category === '其他'}">{{item.category}}</div>
			<h2 class="item-title">{{item.title}}</h2>
			<p class="item-info">{{item.description}}</p>
		</li>
	</ul>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'vue-property-decorator';

  @Component
  export default class List extends Vue {
    // props
    @Prop()
    private data!: any[];

    // methods
    private goTarget(item: any) {
      // this.$router.push({ path: '/webview?url=' + item.url + '&title=' + item.title });
      window.location.href = item.url;
    }
  }
</script>

<style scoped>
  .tags-item{width:1em;line-height:1;padding:.1rem .08rem;border-radius:0 0 .1rem .1rem;font-size:.24rem;color:#fff;}
  .tags-item1{background-color:#f7615d;}
  .tags-item2{background-color:#1fcd81;}
  .tags-item3{background-color:#0b9ee7;}
  .tags-item4{background-color:#fe8d13;}

  .list-mode .list-item{position:relative;padding:.2rem;margin-bottom:.2rem;background-color:#fff;border-top:1px solid #dfdfdf;border-bottom:1px solid #dfdfdf;}
  .list-mode .item-title{margin-right:.4rem;font-size:.36rem;font-weight:normal;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}
  .list-mode .item-info{font-size:.28rem;color:#666;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}
  .list-mode .tags-item{position:absolute;top:-1px;right:.2rem;}
</style>
