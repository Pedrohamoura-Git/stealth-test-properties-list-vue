/** @format */

import { createStore } from 'vuex'

import themeSwitcher from './modules/themeSwitcher/themeSwitcher'
import propertiesList from './modules/propertiesList/propertiesList'
const store = createStore({
  modules: {
    themeSwitcher,
    propertiesList,
  },
})

export default store
