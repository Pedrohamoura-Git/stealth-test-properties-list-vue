const propertiesList = {
  namespaced: true,
  state: {
    propertiesList: [
      {
        address: 'Trump Plz #123',
        city: 'New Jersey',
        state: 'NJ',
        zip: '33140',
        image: 'https://placeimg.com/300/200/any',
        active: true,
      },
      {
        address: 'Truman E Rd',
        city: 'Kansas City',
        state: 'MO',
        zip: '33140',
        image: 'https://placeimg.com/300/200/any',
        active: true,
      },
      {
        address: 'Jazz Avenue 32',
        city: 'Salt Lake City',
        state: 'UT',
        zip: '33333',
        image: 'https://placeimg.com/300/200/any',
        active: false,
      },
    ],
    isActive: true,
    sortTo: 'address',
    propertyNotFound: false,
    filteredProperties: [],
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
    SET_PROPERTY_NOT_FOUND(state, payload) {
      state.propertyNotFound = payload
    },
    SET_FILTERED_PROPERTIES(state, payload) {
      state.filteredProperties = payload
      // console.log(
      //   'store - SET_FILTERED_PROPERTIES -> ',
      //   state.filteredProperties
      // )
    },
  },
  actions: {
    UPDATE_IS_ACTIVE({ commit }, payload) {
      commit('SET_IS_ACTIVE', payload)
    },
    UPDATE_SORT_TO({ commit }, payload) {
      commit('SET_SORT_TO', payload)
    },
    UPDATE_PROPERTY_NOT_FOUND({ commit }, payload) {
      commit('SET_PROPERTY_NOT_FOUND', payload)
    },
    UPDATE_FILTERED_PROPERTIES({ commit }, payload) {
      commit('SET_FILTERED_PROPERTIES', payload)
    },
  },
}

export default propertiesList
