<template>
  <div class="block">
    <v-container>
      <h2 class="text-center">
        {{ items.length > 0 ? `${items.length} lots` : "0 lot" }}
      </h2>
      <v-row v-if="items.length > 0">
        <v-col v-for="item of items" :key="item.id" class="d-flex child-flex" sm="4">
          <ItemCard :item="item" :searchedString="searchedString" />
        </v-col>
      </v-row>
      <v-row v-else>
        <h4 class="text-center">Cette vente ne comporte aucun lot</h4>
      </v-row>
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
  },
};
</script>
