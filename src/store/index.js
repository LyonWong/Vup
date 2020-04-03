import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'store-test',
    count: 1
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
