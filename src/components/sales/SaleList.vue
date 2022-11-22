<template>
  <div class="block">
    <v-container>
      <h2 class="text-center">Ventes</h2>
        <v-row>
          <v-col v-for="sale of sales" :key="sale.id" class="d-flex child-flex" cols="6" >
            <SaleCard :sale="sale" :searchedString="searchedString" />
          </v-col>
        </v-row>
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