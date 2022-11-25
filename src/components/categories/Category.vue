<template>
  
  <div class="block block-left">
     <!-- Modale Easter Egg -->
     <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        :show="show"
      >
     <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    <v-container>
      <h2 class="text-left">{{ category.title }}</h2>
      <h4 class="text-left">{{ category.description }}</h4>
      <SaleList :sales="sales" />
      <div v-if="sales.length === 0">
        <h4 class="text-center">
          Cette categorie ne comporte aucune vente pour l'instant.
        </h4>
        <h4 class="text-center">
          Si vous voulez remédier à cela, c'est
          <router-link to="/new/sale"><a>ici</a></router-link>.
        </h4>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SaleList from "@/components/sales/SaleList.vue";
import { salesService } from "@/api/SalesService";
import { categoriesService } from "@/api/CategoriesService";

export default {
  name: "Category",
  components: {
    SaleList,
  },

  data() {
    return {
      items: [],
      sales: [],
      category: {},
    };
  },
  computed: {
    ...mapGetters({
      getSelectedCategory: "categoriesModule/getSelectedCategory",
    }),
  },
  async beforeMount() {
    // Si on a une catégorie de sélectionnée dans le store
    if (this.getSelectedCategory) {
      this.category = this.getSelectedCategory;

      if (this.category) {
        this.sales = await salesService.fetchSalesByCategoryId(this.category.id);
      }
      // Sinon on récupère depuis le nom dans l'URL
    } else {
      this.category = await categoriesService.fetchCategoryBySlug(
        this.$route.params.slug
      );
      if (this.category) {
        this.sales = await salesService.fetchSalesByCategoryId(this.category.id);
      }
    }
  },
};
</script>
