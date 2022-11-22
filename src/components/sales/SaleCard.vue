<template>
  <v-card outlined class="mx-auto" @click="openSale">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
      <v-card-title>{{ item.title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{ item.description }}</div>
    </v-card-text>
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
    item: []
  },

  methods: {
    ...mapActions({
      setSelectedSale: "salesModule/setSelectedSale"
    }),

    openSale() {
      this.setSelectedSale(this.item);
      this.$router.push({name:"sale", params: { id: this.item.id }})
    }
  }
}
</script>
