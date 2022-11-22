<template>
  <v-card outlined class="mx-auto" @click="openSale">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
      <v-card-title>{{ sale.title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">{{ sale.subtitle }}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{ sale.description }}</div>
    </v-card-text>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-map-marker</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{sale.city}}</v-list-item-subtitle>
      <v-list-item-icon>
        <v-icon>mdi-clock</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{sale.date}}</v-list-item-subtitle>
    </v-list-item>
    <v-card-actions>
      <v-btn color="primary" text>Voir</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'SaleCard',
  props: {
    sale: Object,
    searchedString: String
  },

  methods: {
    ...mapActions({
      setSelectedSale: "salesModule/setSelectedSale"
    }),

    openSale() {
      this.setSelectedSale(this.sale);
      this.$router.push({name:"sale", params: { id: this.sale.id }})
    }
  }
}
</script>
