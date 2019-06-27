import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    addMua(state) {
      state.count += 1
    },
    subMua(state) {
      state.count -= 1
    }
  },
  actions: {
    addFun(context) {
      context.commit('addMua')
    },
    subFun(context) {
      context.commit('subMua')
    }
  }
})
