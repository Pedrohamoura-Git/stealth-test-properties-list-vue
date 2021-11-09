const formActions = {
  namespaced: true,
  state: {
    isActive: true,
    sortTo: 'address',
    searchFor: '',
  },
  mutations: {
    SET_IS_ACTIVE(state, payload) {
      state.isActive = payload
      // console.log('store - SET_IS_ACTIVE -> ', state.isActive)
    },
    SET_SORT_TO(state, payload) {
      state.sortTo = payload
      // console.log('store - SET_SORT_TO -> ', state.sortTo)
    },
    SET_SEARCH_FOR(state, payload) {
      state.searchFor = payload
      // console.log('store - SET_SEARCH_FOR -> ', state.searchFor)
    },
  },
  actions: {
    UPDATE_IS_ACTIVE({ commit }, payload) {
      commit('SET_IS_ACTIVE', payload)
    },
    UPDATE_SORT_TO({ commit }, payload) {
      commit('SET_SORT_TO', payload)
    },
    UPDATE_SEARCH_FOR({ commit }, payload) {
      commit('SET_SEARCH_FOR', payload)
    },
  },
}

export default formActions
