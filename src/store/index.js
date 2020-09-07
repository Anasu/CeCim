import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogged: false,
    username: '',
  },
  getters: {
    getLogStatus(state)
    {
      return state.islogged
    },
    getUsername(state)
    {
      return state.username;
    }
  },
  mutations: {
    VALIDARLOGIN(state, logged)
    {
      state.islogged = logged;
    },
    VALIDARUSER(state, username)
    {
      state.username = username;
    }
    
  },
  actions: {
    validarLogin(context, form)
    {

      console.log(form.user)

      let logueado = true;
      if(form.user.length > 1 && form.pass.length > 1)
      {
        context.commit('VALIDARLOGIN', logueado);
        context.commit('VALIDARUSER', form.user)
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
