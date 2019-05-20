<template>
  <div>
    <h2>商品详情</h2>
    {{goodInfo}}
  </div>
</template>

<script>
  export default {
    name: "_id",
    async asyncData({$axios,params,error}){
      console.log(111);
      const result=await $axios.$get('/api/detail',{params});
      if(result.ok) {
        return {goodInfo:result.data}
      }
      //错误处理
      error({statusCode:400,message:'商品详情查询失败'});
    }
  }
</script>

<style scoped>

</style>
