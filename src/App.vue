<template>
  <div class="wrapper">
    <PropertiesListPage />
  </div>
</template>

<script>
import PropertiesListPage from './pages/PropertiesListPage/PropertiesListPage'

export default {
  name: 'App',
  components: {
    PropertiesListPage,
  },
}
</script>

<style lang="scss" src="./assets/scss/index.scss" />
