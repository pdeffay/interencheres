<template>
  <div>
    <h1>Les ventes</h1>
    <div class="flex-wrap">  
      <div v-for="item of items" :key="item.id" >
        <SaleCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { salesService } from "@/api/SalesService";

import SaleCard  from './SaleCard';

export default {
  name: 'SalesList',
  components: {
    SaleCard
  },
  props: {
    msg: String
  },
  data() {
    return {
      items: [],
      selectedSale: {}
    };
  },
  async created() {
    this.items = await salesService.fetchSales();
  }
}
</script>

<style>
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>