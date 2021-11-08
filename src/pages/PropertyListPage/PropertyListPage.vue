<template>
  <section class="property-list">
    <TopNavbar>
      <template v-slot:content>
        <FilterForm />
      </template>
      <template v-slot:widgets>
        <h1>content</h1>
      </template>
    </TopNavbar>
  </section>
</template>
<script>
import TopNavbar from '../../components/TopNavbar/TopNavbar.vue'
import FilterForm from '../../components/FilterForm/FilterForm.vue'

export default {
  components: { TopNavbar, FilterForm },
}
</script>
<style lang="scss" src="./_propertyListPage.scss" scoped />
