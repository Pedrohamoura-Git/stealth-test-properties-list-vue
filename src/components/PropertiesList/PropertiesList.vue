<template>
  <ul class="properties-list">
    <li
      class="property"
      v-for="(property, index) in propertiesList"
      :key="index"
    >
      <img :src="property.image" alt="Property img" class="property__img" />
      <div class="property__details">
        <div class="property__details__location">
          <h3 class="property__details__location--address">
            {{ property.address }}
          </h3>
          <span class="property__details__location--city"
            >{{ property.city }},
          </span>
          <span class="property__details__location--state"
            >{{ property.state }},
          </span>
          <span class="property__details__location--zip">{{
            property.zip
          }}</span>
        </div>
        <aside class="property__details__actions">
          <button class="btn btn--share">share</button>
          <button class="btn btn--archive">archive</button>
        </aside>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    propertiesList() {
      return this.$store.state.propertiesList.propertiesList
    },
  },
  // methods: {
  //   getImg(img) {
  //     return required(img)
  //   }
  // }
  // address: 'Trump Plz #123',
  // city: 'New Jersey',
  // state: 'NJ',
  // zip: '33140',
  // image: 'https://placeimg.com/300/200/any',
  // active: true,
}
</script>

<style lang="scss" src="./_propertiesList.scss" scoped></style>
