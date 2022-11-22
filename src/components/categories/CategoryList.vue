<template>
    <div class="block">
      <v-container>
        <h2 class="text-center">Catégories</h2>
          <v-row>
            <v-col v-for="category of categories" :key="category.id" class="d-flex child-flex" cols="3" >
              <CategoryCard :category="category" />
            </v-col>
          </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import CategoryCard  from '@/components/categories/CategoryCard';
  
  export default {
    name: 'CategoryList',
    components: {
        CategoryCard
    },
    props: {
      categories: []
    }
  }
  </script>