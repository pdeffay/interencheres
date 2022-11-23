<template>
  <v-main>
    <CategoryList :categories="categories" />
    <v-btn fab large dark fixed bottom left class="v-btn--example" @click="redirectToNewSale">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-main>
</template>

<script>
import { mapActions } from "vuex";
import { categoriesService } from "@/api/CategoriesService";
import CategoryList  from '@/components/categories/CategoryList';

export default {
  name: 'Home',
  components: {
    CategoryList
  },

  props: {
    msg: String
  },

  data() {
    return {
      categories: [],
    };
  },

  async created() {
    this.categories = await categoriesService.fetchCategories();
    this.setCategoryList(this.categories);
  },
  
  methods: {
    ...mapActions({
      setCategoryList: "categoriesModule/setCategoryList"
    }),
    redirectToNewSale() {
      this.$router.push({name: 'add'})
    },
    
  }
}
</script>