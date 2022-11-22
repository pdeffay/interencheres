<template>
  <div class="block">
    <v-container>
      <h2 class="text-center">Ventes</h2>
        <v-row>
          <v-col v-for="item of items" :key="item.id" class="d-flex child-flex" cols="12">
            <SaleCard :item="item" />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import SaleCard  from './SaleCard';

export default {
  name: 'SaleList',
  components: {
    SaleCard
  },
  props: {
    msg: String,
    items: []
  },
  data() {
    return {
      selectedSale: {}
    };
  },
  created() {
    console.log(this.items);
  }
}
</script>