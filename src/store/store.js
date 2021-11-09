/** @format */

import { createStore } from 'vuex'

import themeSwitcher from './modules/themeSwitcher'
import propertiesList from './modules/propertiesList'
import formActions from './modules/formActions'
const store = createStore({
  modules: {
    themeSwitcher,
    propertiesList,
    formActions,
  },
})

export default store
