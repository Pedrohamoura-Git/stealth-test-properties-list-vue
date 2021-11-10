<template>
  <ul class="properties-list">
    <template
      v-for="(property, index) in searchInPropertiesList"
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
    this.sortArray(this.searchInPropertiesList, this.sortTo)
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
    searchInPropertiesList() {
      let resp = []
      resp = this.searchInArray(this.propertiesList, 'address', this.searchFor)
      if (resp.length == 0) {
        resp = this.searchInArray(this.propertiesList, 'city', this.searchFor)
      }
      this.UPDATE_SEARCH_IN_PROPERTIES_LIST(resp)
      if (!resp.length) this.UPDATE_PROPERTY_NOT_FOUND(true)
      return resp
    },
  },
  watch: {
    sortTo: {
      handler() {
        const sortedArray = this.sortArray(
          this.searchInPropertiesList,
          this.sortTo
        )
        this.UPDATE_SEARCH_IN_PROPERTIES_LIST(sortedArray)
        this.forceRerender()
      },
      deep: true,
    },
  },
  methods: {
    forceRerender() {
      this.componentKey += 1
    },
    sortArray(array, sortTo) {
      const resp = array.sort((a, b) => {
        if (a[`${sortTo}`] > b[`${sortTo}`]) {
          return 1
        }
        if (a[`${sortTo}`] < b[`${sortTo}`]) {
          return -1
        }
        // a must be equal to b
        return 0
      })
      return resp
    },
    searchInArray(array, key, searchFor) {
      return array.filter((property) => {
        if (property[`${key}`].toLowerCase().match(searchFor.toLowerCase())) {
          return property
        }
      })
    },
    UPDATE_SEARCH_IN_PROPERTIES_LIST(payload) {
      this.$store.dispatch(
        'propertiesList/UPDATE_SEARCH_IN_PROPERTIES_LIST',
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
