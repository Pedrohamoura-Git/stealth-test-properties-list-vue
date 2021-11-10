<template>
  <transition
    v-if="propertyNotFound"
    enter-active-class="slide-in-right"
    leave-active-class="slide-out-right"
    mode="out-in"
    appear
  >
    <div class="property-not-found">
      <p class="property-not-found__msg">
        Property no found. Check the name and try again.
      </p>
    </div>
  </transition>

  <transition
    v-else
    enter-active-class="slide-in-left"
    leave-active-class="slide-out-left"
    mode="out-in"
    appear
  >
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
  </transition>
</template>

<script>
import { sortArray, searchInArray } from '../../utils/arrays/index'

export default {
  data() {
    return {
      componentKey: 0,
    }
  },
  beforeMount() {
    sortArray(this.searchInPropertiesList, this.sortTo)
    this.UPDATE_SEARCH_IN_PROPERTIES_LIST(this.searchInPropertiesList)
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
    propertyNotFound() {
      return this.$store.state.propertiesList.propertyNotFound
    },
    searchInPropertiesList() {
      let resp = []
      resp = searchInArray(this.propertiesList, 'address', this.searchFor)
      if (!resp.length) {
        resp = searchInArray(this.propertiesList, 'city', this.searchFor)
      }
      return resp
    },
  },
  watch: {
    sortTo: {
      handler() {
        const sortedArray = sortArray(this.searchInPropertiesList, this.sortTo)
        this.UPDATE_SEARCH_IN_PROPERTIES_LIST(sortedArray)
        this.forceRerender()
      },
      deep: true,
    },
    searchInPropertiesList: {
      handler() {
        this.handlePropertyNotFound()
        this.UPDATE_SEARCH_IN_PROPERTIES_LIST(this.searchInPropertiesList)
      },
      deep: true,
    },
  },
  methods: {
    forceRerender() {
      this.componentKey += 1
    },
    handlePropertyNotFound() {
      if (!this.searchInPropertiesList.length)
        this.UPDATE_PROPERTY_NOT_FOUND(true)
      else this.UPDATE_PROPERTY_NOT_FOUND(false)
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

<style lang="scss" src="./_propertiesList.scss" scoped />
