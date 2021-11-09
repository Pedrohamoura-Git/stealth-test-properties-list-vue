<template>
  <section class="action-forms">
    <form action="#" class="filter-form">
      <label for="active-status" class="filter-form__label">Filter</label>
      <select name="active-status" id="active-status">
        <option value="active">active({{ activeProperties || 0 }})</option>
        <option value="inactive">
          inactive({{ inactiveProperties || 0 }})
        </option>
      </select>
    </form>
    <form action="#" class="sort-form">
      <label for="sort-items" class="sort-form__label">sort</label>
      <select name="sort-items" id="sort-items">
        <option value="adress">adress</option>
        <option value="city">city</option>
        <option value="state">state</option>
        <option value="zip">zip</option>
      </select>
    </form>
  </section>
</template>
<script>
export default {
  data() {},
}

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
@import './_actionForms.scss';
</style>
