<template>
  <ul class="properties-list">
    <li
      class="property"
      v-for="(property, index) in searchInFilteredProperties"
      :key="index"
    >
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
  </ul>
</template>

<script>
// address: 'Trump Plz #123',
// city: 'New Jersey',
// state: 'NJ',
// zip: '33140',
// image: 'https://placeimg.com/300/200/any',
// active: true,

export default {
  computed: {
    propertiesList() {
      return this.$store.state.propertiesList.propertiesList
    },
    isActive() {
      return this.$store.state.propertiesList.isActive
    },
    sortTo() {
      return this.$store.state.propertiesList.sortTo
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
      // console.log('propertiesList', this.propertiesList)
      //       console.log('isActive', this.isActive)
      // console.log('filteredProperties - resp ->', resp)
      return resp
    },
    searchInFilteredProperties() {
      if (this.searchFor != '') {
        const resp = this.filteredProperties.filter((property) => {
          // console.log(
          //   'searchInFilteredProperties - property.city ->',
          //   property.city
          // )
          // console.log(
          //   'searchInFilteredProperties - searchFor ->',
          //   this.searchFor
          // )
          if (property.city.toLowerCase().match(this.searchFor.toLowerCase()))
            return property
        })
        return resp
      } else return this.filteredProperties
    },
  },
  methods: {
    UPDATE_FILTERED_PROPERTIES(payload) {
      this.$store.dispatch('propertiesList/UPDATE_FILTERED_PROPERTIES', payload)
    },
    UPDATE_PROPERTY_NOT_FOUND(payload) {
      this.$store.dispatch('propertiesList/UPDATE_PROPERTY_NOT_FOUND', payload)
    },
  },
}
</script>

<style lang="scss" src="./_propertiesList.scss" scoped></style>
