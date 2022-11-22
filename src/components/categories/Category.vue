<template>
  <div class="block block-left">
    <v-container>
      <h2 class="text-left">{{category.title}}</h2>
      <h4 class="text-left">{{category.description}}</h4>
      <SaleList :sales="sales" />
    </v-container>
    
  </div>

</template>

<script>
import { mapGetters } from "vuex";
import SaleList from '@/components/sales/SaleList.vue';
import { salesService } from "@/api/SalesService";
import { categoriesService } from "@/api/CategoriesService";

export default {
  name: 'Category',
  components: {
    SaleList
  },

  data() {
    return {
      items: [],
      sales: [],
      category: {}
    }
  },
  computed: {
    ...mapGetters({
      getSelectedCategory: "categoriesModule/getSelectedCategory"
    }),
  },
  async beforeMount() {
    // Si on a une catégorie de sélectionnée dans le store
    if (this.getSelectedCategory){
      this.category = this.getSelectedCategory;

      if (this.category) {
        this.sales = await salesService.fetchSalesByCategoryId(this.category.id);
      }
    // Sinon on récupère depuis le nom dans l'URL  
    } else {
      this.category = await categoriesService.fetchCategoryBySlug(this.$route.params.slug);
      if (this.category) {
        this.sales = await salesService.fetchSalesByCategoryId(this.category.id);
      }
    }
  }
}
</script>