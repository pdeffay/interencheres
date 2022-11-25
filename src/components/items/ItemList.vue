<template>
  <div class="block">
    <v-container>
      <h2 class="text-center">
        {{ items.length > 1 ? `${items.length} lots` : `${items.length} lot` }}
      </h2>
      <v-row v-if="items.length > 0">
        <v-col v-for="item of items" :key="item.id" class="d-flex child-flex" sm="4">
          <ItemCard :item="item" :searchedString="searchedString" :selectable="selectable"/>
        </v-col>
      </v-row>
      <div class="d-flex flex-column align-center justify-center no-result" v-else>
        <span class="material-icons">sentiment_very_dissatisfied</span>
        <h4 class="text-center">Il n'y a malheuresement aucun lot</h4>
      </div>
    </v-container>
  </div>
</template>

<script>
import ItemCard from "@/components/items/ItemCard.vue";

export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
  props: {
    items: [],
    searchedString: String,
    selectable: { type: Boolean, default: false }
  },
};
</script>
<style>
.no-result {
  height: 50vh;
}
</style>
