/** @format */

import { setInLocalStorage } from '../../../utils/localStorage/index'

const sections = {
  namespaced: true,
  state: {
    sections: [],
  },
  mutations: {
    SET_NEW_SECTION(state, payload) {
      state.sections.push(payload)
    },
    SET_ALL_SECTIONS(state, payload) {
      state.sections = payload
    },
    REMOVE_SECTION(state, index) {
      state.sections.splice(index, 1)
    },
  },
  actions: {
    ADD_NEW_SECTION({ commit, dispatch }, section) {
      commit('SET_NEW_SECTION', section)
      dispatch('SET_SECTIONS_LOCAL_STORAGE')
    },
    ADD_ALL_SECTIONS({ commit, dispatch }, sections) {
      commit('SET_ALL_SECTIONS', sections)
      dispatch('SET_SECTIONS_LOCAL_STORAGE')
    },
    REMOVE_SECTION({ commit, dispatch }, index) {
      commit('REMOVE_SECTION', index)
      dispatch('SET_SECTIONS_LOCAL_STORAGE')
    },
    SET_SECTIONS_LOCAL_STORAGE({ state }) {
      setInLocalStorage('sections', state.sections)
    },
  },
}
export default sections
