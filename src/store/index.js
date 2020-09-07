import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogged: false,
  },
  getters: {

  },
  mutations: {
    VALIDARLOGIN(state, logged)
    {
      state.islogged = logged;
    }

  },
  actions: {
    validarLogin(context, form)
    {
      let logueado = true;
      if(form.user.length > 1 && form.pass.length > 1)
      {
        context.commit('VALIDARLOGIN', logueado);
      }
      else
      {
        console.log('no se de qué hablas')
      }
    }
  },
  modules: {
  }
})
