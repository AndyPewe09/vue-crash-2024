import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: !!localStorage.getItem('token')
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem('token', token)
      commit('setAuthenticated', true)
    },
    logout({ commit }) {
      localStorage.removeItem('token')
      commit('setAuthenticated', false)
    }
  },
  modules: {}
})
