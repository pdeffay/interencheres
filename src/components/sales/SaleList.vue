<template>
  <div class="block">
    <v-container>
      <h2 class="text-center">{{ sales.length > 1 ? `${sales.length} ventes`:  `${sales.length} vente`}}</h2>
        <v-row v-if="sales.length > 0">
          <v-col v-for="sale of sales" :key="sale.id" class="d-flex child-flex" xs="12" xl="6" >
            <SaleCard :sale="sale" :searchedString="searchedString" />
          </v-col>
        </v-row>
        <div class="d-flex flex-column align-center justify-center no-result" v-else>
        <span class="material-icons">sentiment_very_dissatisfied</span>
        <h4 class="text-center">Il n'y a malheuresement aucune vente</h4>
      </div>
    </v-container>
  </div>
</template>

<script>
import SaleCard  from './SaleCard';

export default {
  name: 'SaleList',
  components: {
    SaleCard
  },
  props: {
    searchedString: String,
    sales: []
  }
}
</script>