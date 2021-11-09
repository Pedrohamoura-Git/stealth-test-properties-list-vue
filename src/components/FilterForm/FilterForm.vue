<template>
  <form action="#" class="filter-form">
    <label for="active-status" class="filter-form__label">Filter</label>
    <select name="active-status" id="active-status">
      <option value="active">active</option>
      <option value="inactive">inactive</option>
    </select>
    <label for="sort-items" class="filter-form__label">sort</label>
    <select name="sort-items" id="sort-items">
      <option value="adress">adress</option>
      <option value="city">city</option>
      <option value="state">state</option>
      <option value="zip">zip</option>
    </select>
    <!-- <label for="search" class="filter-form__label">Search</label>
    <input type="search" id="search" name="search" /> -->
  </form>
</template>
<script>
export default {}

// <template>
//   <form :action="action" class="filter-form">
//     <label :for="labelFor">{{ labelText }}</label>
//     <slot name="form"></slot>
//   </form>
// </template>
// <script>
// export default {
//   props: {
//     action: { type: String, required: true },
//     labelFor: { type: String, required: true },
//     labelText: { type: String, required: true },
//   },
// d}a
</script>
a
<style lang="scss" scoped>
@import './_filterForm.scss';
</style>
