<template>
  <v-card class="mx-auto category-card" height="100%" @click="openCategory">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="imgURL"></v-img>

    <v-card-title> {{ category.title }} </v-card-title>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CategoryCard",
  props: {
    category: Object,
  },
  computed: {
    imgURL() {
      return require(`@/assets/img/${this.category.slug}.webp`);
    }
  },
  methods: {
    ...mapActions({
      setSelectedCategory: "categoriesModule/setSelectedCategory",
    }),

    openCategory() {
      this.setSelectedCategory(this.category);
      this.$router.push({ name: "category", params: { slug: this.category.slug } });
    },
  },
};
</script>
