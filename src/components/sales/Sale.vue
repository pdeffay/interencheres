<template>
  <div>
    <div>
      {{sale.title}}
    </div>
    <ItemList :items="items" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ItemList from '../items/ItemList.vue';
import { itemsService } from "@/api/ItemsService";

export default {
  name: 'Sale',
  components: {
    ItemList
  },

  data() {
		return {
			items: [],
      sale: Object
		}
    
  },
  computed: {
    ...mapGetters({
      getSelectedSale: "salesModule/getSelectedSale"
    }),
  },
  methods: {
    ...mapActions({
      setSelectedSale: "salesModule/setSelectedSale"
    }),
  },
  async created() {
    this.sale = this.getSelectedSale;
    if(this.sale) {
      this.items = await itemsService.fetchItemsFromSale(this.sale.id);
    }
  },
  beforeDestroy() {
    // this.setSelectedSale(null);
  },
}
</script>