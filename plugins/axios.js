//追加Authorization
export default function({$axios,store}) {
  // 利用$axios模块帮助方法setToken设置全局请求头
  // 此处省略token截取逻辑
  //1、插件只执行一次，那么就是失去了在每次请求的时候指令令牌的目的了，所以需要使用拦截器来处理
  //2、获取cookie的方式有兼容性问题

  //安装cookie-universal-nuxt：npm i --save cookie-universal-nuxt

  //拦截器——帮助方法
  $axios.onRequest(config=>{
    if(store.state.user.token) {
     config.headers.Authorization='Bearer ' +store.state.user.token;
    }
  })
  //$axios.setToken(document.cookie, "Bearer")
}
