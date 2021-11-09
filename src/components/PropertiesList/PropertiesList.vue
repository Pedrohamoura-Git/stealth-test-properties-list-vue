<template>
  <ul class="properties-list">
    <template
      v-for="(property, index) in searchInFilteredProperties"
      :key="componentKey + index"
    >
      <li class="property" v-if="property.active == isActive">
        <img :src="property.image" alt="Property img" class="property__img" />
        <div class="property__details">
          <div class="property__details__location">
            <h3 class="property__details__location--address">
              {{ property.address }}
            </h3>
            <span class="property__details__location--city">
              {{ property.city }},
            </span>
            <span class="property__details__location--state">
              {{ property.state }},
            </span>
            <span class="property__details__location--zip">
              {{ property.zip }}
            </span>
          </div>
          <aside class="property__details__actions">
            <button class="btn btn--share">share</button>
            <button class="btn btn--archive">archive</button>
          </aside>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      componentKey: 0,
    }
  },
  beforeMount() {
    this.sortSearchInFilteredProperties(this.sortTo)
  },
  computed: {
    propertiesList() {
      return this.$store.state.propertiesList.propertiesList
    },
    isActive() {
      return this.$store.state.formActions.isActive
    },
    sortTo() {
      return this.$store.state.formActions.sortTo
    },
    searchFor() {
      return this.$store.state.formActions.searchFor
    },
    filteredProperties() {
      const resp = this.propertiesList.filter((property) => {
        if (property.active == this.isActive) return property
      })
      if (resp.length) this.UPDATE_FILTERED_PROPERTIES(resp)
      else this.UPDATE_PROPERTY_NOT_FOUND(true)
      return resp
    },
    searchInFilteredProperties() {
      let resp = []
      resp = this.searchForAddress()
      if (resp.length == 0) {
        resp = this.searchForCity()
      }
      this.UPDATE_SEARCH_IN_FILTERED_PROPERTIES(resp)
      if (!resp.length) this.UPDATE_PROPERTY_NOT_FOUND(true)
      return resp
    },
  },
  watch: {
    sortTo: {
      handler() {
        this.sortSearchInFilteredProperties(this.sortTo)
        this.forceRerender()
        console.log('sorted array', this.searchInFilteredProperties)
      },
      deep: true,
    },
  },
  methods: {
    forceRerender() {
      this.componentKey += 1
      console.log('forceRerender - key', this.componentKey)
    },
    sortSearchInFilteredProperties(sortTo) {
      console.log('sortSearchInFilteredProperties sortTo', sortTo)
      const resp = this.searchInFilteredProperties.sort((a, b) => {
        if (a[`${sortTo}`] > b[`${sortTo}`]) {
          return 1
        }
        if (a[`${sortTo}`] < b[`${sortTo}`]) {
          return -1
        }
        // a must be equal to b
        return 0
      })
      this.UPDATE_SEARCH_IN_FILTERED_PROPERTIES(resp)
    },
    searchForAddress() {
      return this.propertiesList.filter((property) => {
        if (
          property.address.toLowerCase().match(this.searchFor.toLowerCase())
        ) {
          return property
        }
      })
    },
    searchForCity() {
      return this.propertiesList.filter((property) => {
        if (property.city.toLowerCase().match(this.searchFor.toLowerCase())) {
          return property
        }
      })
    },
    UPDATE_FILTERED_PROPERTIES(payload) {
      this.$store.dispatch('propertiesList/UPDATE_FILTERED_PROPERTIES', payload)
    },
    UPDATE_SEARCH_IN_FILTERED_PROPERTIES(payload) {
      this.$store.dispatch(
        'propertiesList/UPDATE_SEARCH_IN_FILTERED_PROPERTIES',
        payload
      )
    },
    UPDATE_PROPERTY_NOT_FOUND(payload) {
      this.$store.dispatch('propertiesList/UPDATE_PROPERTY_NOT_FOUND', payload)
    },
  },
}
</script>

<style lang="scss" src="./_propertiesList.scss" scoped></style>
