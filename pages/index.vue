<template>
  <section class="container">
    <div>
      <h2>首页</h2>
      <ul>
        <li v-for="good in goods" :key="good.id">
          <n-link :to="{name:'detail-id', params:{id:good.id}}">
            <span>{{good.text}}</span>
            <span>￥{{good.price}}</span>
            <button @click.prevent="addCart(good)">加购物车</button>
          </n-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  // head里面项目
  //注意：meta中的hid：配置，是要告诉nuxt，此页面的head配置会覆盖全局
  //自定义配置项会插入页面的底部
  head() {
    return {
      title: "课程列表",
      meta: [{ name: "description", hid: "description", content: "set page meta" }],
      link: [{ rel: "favicon", href: "favicon.ico" }],
      script: [{ src: "https://cdn.jsdelivr.net/npm/jquery/dist/jquery.js" }]
    };
  },
  async asyncData({$axios,error,redirect}){//参数第一个是上下文，直接解构
    //asyncData时间点早于组件创建，所以不能使用this访问组件实例
    //$get：类似fetch的方法，直接拿值，直接拿到了data
    const result=await $axios.$get('/api/goods');
    if(result.ok) {
      return {goods:result.goods}
    }
    //错误处理
    error({statusCode:400,message:'查询数据失败'});
  },
  created(){

  },
  data() {

  }
}
</script>

<style>

</style>
