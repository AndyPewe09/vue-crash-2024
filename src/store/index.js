import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: !!localStorage.getItem('authToken')
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem('authToken', token)
      commit('setAuthenticated', true)
    },
    logout({ commit }) {
      localStorage.removeItem('authToken')
      commit('setAuthenticated', false)
    }
  },
  modules: {}
})
