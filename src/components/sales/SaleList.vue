<template>
  <div class="block">
    <v-container>
      <h2 class="text-center">
        {{ sales.length > 1 ? `${sales.length} ventes` : `${sales.length} vente` }}
      </h2>
      <v-row v-if="sales.length > 0">
        <v-col
          v-for="sale of sales"
          :key="sale.id"
          class="d-flex child-flex"
          xs="12"
          md="4"
          xl="6"
        >
          <SaleCard :sale="sale" :searchedString="searchedString" />
        </v-col>
      </v-row>
      <div
        v-else-if="sales.length === 0 && !isDisplayedOnCategory"
        class="d-flex flex-column align-center justify-center no-result"
      >
        <span class="material-icons">sentiment_very_dissatisfied</span>
        <h4 class="text-center">Il n'y a malheuresement aucune vente</h4>
      </div>
    </v-container>
  </div>
</template>

<script>
import SaleCard from "./SaleCard";

export default {
  name: "SaleList",
  components: {
    SaleCard,
  },
  props: {
    searchedString: String,
    sales: [],
  },
  data() {
    return {
      isDisplayedOnCategory: false,
    };
  },
  created() {
    if (this.$route.name === "category") {
      this.isDisplayedOnCategory = true;
    }
  },
};
</script>
