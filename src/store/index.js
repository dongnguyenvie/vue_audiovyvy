import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as TYPE from './actionTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true
  },
  mutations: {
    [TYPE.DONE](state) {
      state.loading = false
    },
    [TYPE.FETCH](state) {
      state.loading = true
    }
  },
  actions: {},
  modules
})
