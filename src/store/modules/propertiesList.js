const propertiesList = {
  namespaced: true,
  state: {
    // propertiesList: [
    //   {
    //     address: 'Trump Plz #123',
    //     city: 'New Jersey',
    //     state: 'NJ',
    //     zip: '33140',
    //     image: 'https://placeimg.com/300/200/any',
    //     active: true,
    //   },
    //   {
    //     address: 'Truman E Rd',
    //     city: 'Kansas City',
    //     state: 'MO',
    //     zip: '33140',
    //     image: 'https://placeimg.com/300/200/any',
    //     active: true,
    //   },
    //   {
    //     address: 'Jinx Road',
    //     city: 'Small City',
    //     state: 'SC',
    //     zip: '32333',
    //     image: 'https://placeimg.com/300/200/any',
    //     active: false,
    //   },
    //   {
    //     address: 'Jazz Avenue 32',
    //     city: 'Salt Lake City',
    //     state: 'UT',
    //     zip: '33333',
    //     image: 'https://placeimg.com/300/200/any',
    //     active: false,
    //   },
    // ],
    propertiesList: [
      {
        address: 'Truman E Rd',
        city: 'City - B',
        state: 'State - A',
        zip: '12',
        image: 'https://placeimg.com/300/200/any',
        active: true,
      },
      {
        address: 'Trump Plz #123',
        city: 'City - A',
        state: 'State - B',
        zip: '1',
        image: 'https://placeimg.com/300/200/any',
        active: true,
      },
      {
        address: 'Jazz Avenue 32',
        city: 'City - D',
        state: 'State - C',
        zip: '21',
        image: 'https://placeimg.com/300/200/any',
        active: false,
      },
      {
        address: 'Jinx Road',
        city: 'City - C',
        state: 'State - D',
        zip: '2',
        image: 'https://placeimg.com/300/200/any',
        active: false,
      },
    ],
    propertyNotFound: false,
    filteredProperties: [],
    searchInFilteredProperties: [],
  },
  mutations: {
    SET_IS_ACTIVE(state, payload) {
      state.isActive = payload
    },
    SET_SORT_TO(state, payload) {
      state.sortTo = payload
    },
    SET_PROPERTY_NOT_FOUND(state, payload) {
      state.propertyNotFound = payload
    },
    SET_FILTERED_PROPERTIES(state, payload) {
      state.filteredProperties = payload
    },
    UPDATE_SEARCH_IN_FILTERED_PROPERTIES(state, payload) {
      state.searchInFilteredProperties = payload
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
    UPDATE_SEARCH_IN_FILTERED_PROPERTIES({ commit }, payload) {
      commit('UPDATE_SEARCH_IN_FILTERED_PROPERTIES', payload)
    },
  },
}

export default propertiesList
