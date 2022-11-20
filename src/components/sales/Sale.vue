<template>
  <div>
    <div>
      {{sale.title}}
    </div>
    <ItemList :items="items" />
  </div>
</template>

<script>
import axios from "axios";
import ItemList from '../items/ItemList.vue'
import { fetchItemsFromSale  } from '../../services/ItemsServices';
import { fetchSaleFromId } from '../../services/SalesServices'
export default {
  name: 'Sale',
  components: {
    ItemList
  },
  data() {
		return {
			items: [],
      sale: []
		}
    
  },
  async created() {
    await fetchSaleFromId(1).then(saleApi => {
      this.sale = saleApi.data[0];
    });

    fetchItemsFromSale(1).then(itemsAPI => {
			this.items = itemsAPI.data;
    });
  }
}
</script>