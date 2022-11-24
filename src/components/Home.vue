<template>
  <v-main>
    <CategoryList :categories="categories" />
  </v-main>
</template>

<script>
import { mapActions } from "vuex";
import { categoriesService } from "@/api/CategoriesService";
import CategoryList from "@/components/categories/CategoryList";

export default {
  name: "Home",
  components: {
    CategoryList,
  },

  props: {
    msg: String,
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
      setCategoryList: "categoriesModule/setCategoryList",
    })
  },
};
</script>
