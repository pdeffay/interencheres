<template>
<div>
  <SalesList></SalesList>
   <v-btn
        
        fab
        large
        dark
        absolute
        bottom
        left
        class="v-btn--example"
        @click="ddd"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>

</div>

</template>

<script>
import axios from "axios";
import { fetchSales } from '../services/SalesServices';

import SalesList  from './sales/SalesList';

export default {
  name: 'Home',
  components: {
    SalesList
  },
  props: {
    msg: String
  },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    fetchSales().then(salesAPI => {
      this.items = salesAPI.data;
    });
  },
  methods: {
    ddd() {
      this.$router.push({name: 'add'})
    }
  }
}
</script>

<style>
li {
  list-style: none;
  margin-right: 40px; 
}
ul {
  display: flex;
  justify-content: space-around;
}
</style>
