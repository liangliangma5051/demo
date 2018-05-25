import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
Vue.use(Vuex);

export default new Vuex.Store({


      state: {
        isLogin:  Cookies.get('user'),
      },
      actions: {
        login(context) {

          return context.commit("LOGIN");
        },

      },
      mutations: {
        LOGIN (state,data){
          console.log(data)
          Cookies.set('user',data.token, {path:'/'})
        }
      }




   /* [types.LOGOUT] (state, data) {
      state.rememberMe = undefined
    },
    ['STAFF_INFO'] (state, data) {
      state.staffInfo = data
    }*/


})

