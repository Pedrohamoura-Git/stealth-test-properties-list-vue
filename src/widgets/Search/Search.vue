<template>
  <form action="#" class="search-form">
    <label for="search" class="search-form__label"
      >Search
      <svg
        class="search-form__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
        />
      </svg>
      <input
        type="search"
        id="search"
        class="search-form__input"
        name="search"
        placeholder="Search Properties"
      />
    </label>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" src="./_search.scss" scoped />
