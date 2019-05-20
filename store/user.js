export const state=()=>({
  token:''
});

export const mutations={
  init(state,token) {
    console.log(token);
    state.token=token;
  }
};

export const getters={
  isLogin(state) {
    return !!state.token
  }
};

export const actions={
  login({commit},u) {
    //$login
    console.log(u);
    return this.$login(u).then(({token})=>{
      if(token) {
        commit('init',token);
      }
      return !!token;
    })
  }
};
