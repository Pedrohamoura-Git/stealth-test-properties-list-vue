<template>
  <section class="form-actions">
    <form action="#" class="filter-form">
      <label for="active-status" class="filter-form__label">Filter</label>
      <select name="active-status" id="active-status" v-model="isActive">
        <option value="true">Active ({{ activeProperties.length }})</option>
        <option value="false">
          Inactive ({{ inactiveProperties.length }})
        </option>
      </select>
    </form>

    <form action="#" class="sort-form">
      <label for="sort-items" class="sort-form__label">sort</label>
      <select name="sort-items" id="sort-items" v-model="sortTo">
        <option value="address">Address</option>
        <option value="city">City</option>
        <option value="state">State</option>
        <option value="zip">Zip</option>
      </select>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      sortTo: 'address',
      isActive: true,
    }
  },
  computed: {
    searchInPropertiesList() {
      return this.$store.state.propertiesList.searchInPropertiesList
    },
    activeProperties() {
      return this.searchInPropertiesList.filter((property) => {
        if (property.active == true) return property
      })
    },
    inactiveProperties() {
      return this.searchInPropertiesList.filter((property) => {
        if (property.active == false) return property
      })
    },
  },
  watch: {
    isActive() {
      if (this.isActive == 'false') this.UPDATE_IS_ACTIVE(false)
      else this.UPDATE_IS_ACTIVE(true)
    },
    sortTo() {
      this.UPDATE_SORT_TO()
    },
  },
  methods: {
    UPDATE_IS_ACTIVE(payload) {
      this.$store.dispatch('formActions/UPDATE_IS_ACTIVE', payload)
    },
    UPDATE_SORT_TO() {
      this.$store.dispatch('formActions/UPDATE_SORT_TO', this.sortTo)
    },
  },
}
</script>
a
<style lang="scss" src="./_formActions.scss" scoped />
