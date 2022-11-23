<template>
  <v-container class="pt-0">
    <v-tabs fixed-tabs background-color="grey" dark absolute>
      <v-tab href="#tab-1">
        {{ itemsFound.length > 0 ? `${itemsFound.length} lots` : '0 lot'}}
      </v-tab>
      <v-tab-item :value="'tab-1'">
        <ItemList :items="itemsFound" :searchedString="searchedString"/>
        </v-tab-item>
      <v-tab href="#tab-2">
        {{ salesFound.length > 0 ? `${salesFound.length} ventes` : '0 vente'}}
      </v-tab>
      <v-tab-item :value="'tab-2'">
        <SaleList :sales="salesFound" :searchedString="searchedString" />
      </v-tab-item>
    </v-tabs>
  </v-container>
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
