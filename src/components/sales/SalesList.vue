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
import { fetchSales } from '../../services/SalesServices';

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
    fetchSales().then(salesAPI => {
      this.items = salesAPI.data;
    });
  }
}
</script>

<style>
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>