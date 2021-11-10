<template>
  <main class="properties-list">
    <PropertiesList />
  </main>
</template>
<script>
import PropertiesList from '../../components/PropertiesList/PropertiesList.vue'

export default {
  components: { PropertiesList },
}
</script>
<style lang="scss" src="./_propertiesListPage.scss" scoped />
