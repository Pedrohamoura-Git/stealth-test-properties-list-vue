<template>
  <main class="properties-list">
    <TopNavbar>
      <template v-slot:content>
        <FormActions />
      </template>
      <template v-slot:widgets>
        <Search />
        <ThemeSwicher />
      </template>
    </TopNavbar>

    <PropertiesList />
  </main>
</template>
<script>
import TopNavbar from '../../components/TopNavbar/TopNavbar.vue'
import FormActions from '../../components/FormActions/FormActions.vue'
import PropertiesList from '../../components/PropertiesList/PropertiesList.vue'
import Search from '../../components/widgets/Search/Search.vue'
import ThemeSwicher from '../../components/widgets/ThemeSwitcher/ThemeSwitcher'
export default {
  components: { TopNavbar, FormActions, Search, PropertiesList, ThemeSwicher },
}
</script>
<style lang="scss" src="./_propertiesListPage.scss" scoped />
