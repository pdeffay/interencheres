<template>
  <v-main>
    <CategoryList :categories="categories" />
    <v-btn
      fab
      large
      dark
      fixed
      bottom
      left
      class="v-btn--example"
      @click="ddd"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-main>
</template>

<script>
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
  },

  methods: {
    ddd() {
      this.$router.push({name: 'add'})
    }
  }
}
</script>