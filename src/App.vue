<template>
  <div class="wrapper">
    <PropertyListPage />
  </div>
</template>

<script>
import PropertyListPage from './pages/PropertyListPage/PropertyListPage'

export default {
  name: 'App',
  components: {
    PropertyListPage,
  },
}
</script>

<style lang="scss" src="./assets/scss/index.scss" />
