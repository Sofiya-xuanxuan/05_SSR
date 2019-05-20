export const actions = {
  // 服务端就将vuex状态填充
  nuxtServerInit({ commit }, { app }) {
    // 参数1是vuex的上下文
    // 参数2是nuxt的上下文
    // req.ctx是koa的上下文
    // 使用koa的上下文有兼容性问题，这样要求中间件必须使用koa，如果中间件换成express后，则会报错，所以要做订正
    //const token = req.ctx.cookies.get("token");
    const token = app.$cookies.get("token");
    if (token) {
      commit('user/init', token);
    }
  }
}
