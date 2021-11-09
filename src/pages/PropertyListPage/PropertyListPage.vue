<template>
  <main class="property-list">
    <TopNavbar>
      <template v-slot:content>
        <FilterForm />
      </template>
      <template v-slot:widgets> <Search /> </template>
    </TopNavbar>

    <PropertiesList />
  </main>
</template>
<script>
import TopNavbar from '../../components/TopNavbar/TopNavbar.vue'
import FilterForm from '../../widgets/FilterForm/FilterForm.vue'
import Search from '../../widgets/Search/Search.vue'
import PropertiesList from '../../components/PropertiesList/PropertiesList.vue'

export default {
  components: { TopNavbar, FilterForm, Search, PropertiesList },
}

// <FilterForm
//   :action="'#'"
//   :labelFor="'active-status'"
//   :labelText="'Filter'"
// >
//   <template v-slot:form>
//     <select name="active-status" id="active-status">
//       <option value="active">active</option>
//       <option value="inactive">inactive</option>
//     </select>
//   </template>
// </FilterForm>
</script>
<style lang="scss" src="./_propertyListPage.scss" scoped />
