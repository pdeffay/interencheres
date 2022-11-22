<template>
    <SaleList :sales="sales"></SaleList>
</template>
  
  <script>
  import { salesService } from "@/api/SalesService";
  import SaleList  from '@/components/sales/SaleList';
  
  export default {
    name: 'Sales',
    components: {
      SaleList
    },
    data() {
      return {
        sales: []
      };
    },
    async created() {
        this.sales = await salesService.fetchSales();
    }
  }
  </script>