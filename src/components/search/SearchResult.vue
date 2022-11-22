<template>
  <v-container>
    <v-tabs
      fixed-tabs
      background-color="grey"
      dark
      absolute
    >
      <v-tab href="#tab-1">
        {{ itemsFound.length }} lots trouvés
      </v-tab>
      <v-tab-item
          :value="'tab-1'"
        >
          <ItemList :items="itemsFound" />
        </v-tab-item>
      <v-tab href="#tab-2">
        {{ salesFound.length }} ventes trouvées
      </v-tab>
      <v-tab-item
          :value="'tab-2'"
        >
          <SaleList :items="salesFound" />
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
