<template>
  <nav class="top-navbar">
    <span class="top-navbar__content">
      <slot name="content"></slot>
    </span>
    <span class="top-navbar__widgets">
      <slot name="widgets"></slot>
    </span>
  </nav>
</template>
<script>
export default {}
</script>
<style lang="scss" src="./_topNavbar.scss" scoped />
