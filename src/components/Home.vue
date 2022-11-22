<template>
  <v-main>
    <SaleList :items="items"></SaleList>
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
  </v-main>
</template>

<script>
import { salesService } from "@/api/SalesService";
import SaleList  from '@/components/sales/SaleList';

export default {
  name: 'Home',
  components: {
    SaleList
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
    this.items = await salesService.fetchSales();
  },

  methods: {
    ddd() {
      this.$router.push({name: 'add'})
    }
  }
}
</script>