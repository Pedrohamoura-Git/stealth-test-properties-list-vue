<template>
  <TopNavbar>
    <template v-slot:content>
      <FormActions />
    </template>
    <template v-slot:widgets>
      <Search />
    </template>
  </TopNavbar>

  <div class="wrapper">
    <PropertiesListPage />
  </div>
</template>

<script>
import PropertiesListPage from './pages/PropertiesListPage/PropertiesListPage'
import TopNavbar from './components/TopNavbar/TopNavbar.vue'
import FormActions from './components/FormActions/FormActions.vue'
import Search from './components/widgets/Search/Search.vue'
export default {
  name: 'App',
  components: {
    PropertiesListPage,
    TopNavbar,
    FormActions,
    Search,
  },
}
</script>

<style lang="scss" src="./assets/scss/index.scss" />
