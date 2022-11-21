<template>
  <div>
    <ItemList :items="itemsFound"></ItemList>
    <SaleList :items="salesFound"></SaleList>
  </div>
</template>

<script>
import { salesService } from "@/api/SalesService";
import { itemsService } from "@/api/ItemsService";
import SaleList  from '@/components/sales/SaleList';
import ItemList  from '@/components/items/ItemList';

export default {
  name: 'SearchResult',
  components: {
    ItemList,
    SaleList
  },
  props: {
    
  },
  data() {
    return {
      searchedString: this.$route.query.search,
      itemsFound: [],
      salesFound: []
    }
  },
  async created(){
    this.salesFound = await salesService.fetchSaleList(this.searchedString);
    this.itemsFound = await itemsService.fetchItemList(this.searchedString);
  }
}
</script>
