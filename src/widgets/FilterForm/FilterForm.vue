<template>
  <form action="#">
    <label for="active-status">Filter</label>
    <select name="active-status" id="active-status">
      <option value="active">active</option>
      <option value="inactive">inactive</option>
    </select>
  </form>
  <form action="#">
    <label for="sort-items">sort</label>
    <select name="sort-items" id="sort-items">
      <option value="adress">adress</option>
      <option value="city">city</option>
      <option value="state">state</option>
      <option value="zip">zip</option>
    </select>
  </form>
  <form action="#" class="filter-form">
    <label for="gsearch">Search</label>
    <input type="search" id="gsearch" name="gsearch" />
  </form>
</template>
<script>
export default {}
</script>
<style lang="scss" src="./_filterForm.scss" scoped />
