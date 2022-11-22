<template>
  <div class="block block-left">
    <v-container>
      <h2 class="text-left">{{sale.title}}</h2>
      <h4 class="text-left">{{sale.description}}</h4>
      <ItemList :items="items" />
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ItemList from '@/components/items/ItemList.vue';
import { itemsService } from "@/api/ItemsService";
import { salesService } from "@/api/SalesService";

export default {
  name: 'Sale',
  components: {
    ItemList
  },

  data() {
		return {
			items: [],
      sale: {}
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
  async beforeCreate() {
    // Si on a une vente de sélectionnée dans le store
    if (this.getSelectedSale){
      this.sale = this.getSelectedSale;
      if(this.sale) {
        this.items = await itemsService.fetchItemsBySaleId(this.sale.id);
      }
    // Sinon on récupère depuis l'id dans l'URL  
    } else {
      this.sale = await salesService.fetchSale(this.$route.params.id);
      if (this.sale) {
        this.items = await itemsService.fetchItemsBySaleId(this.sale.id);
      }
    }
  },
  beforeDestroy() {
    this.setSelectedSale(null);
  },
}
</script>