<template>
    <v-card class="mx-auto category-card" @click="openCategory">
       <template slot="progress">
         <v-progress-linear
           color="deep-purple"
           height="10"
           indeterminate
         ></v-progress-linear>
       </template>
   
       <v-img
         height="250"
         src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
       ></v-img>
   
       <v-card-title> {{category.title}} </v-card-title>

    </v-card>
</template>
   
<script>
import { mapActions } from "vuex";

export default {
	name: 'CategoryCard',
	props: {
		category: Object
	},
	methods: {
	...mapActions({
		setSelectedCategory: "categoriesModule/setSelectedCategory"
	}),

	openCategory() {
		this.setSelectedCategory(this.category);
		this.$router.push({name:"category", params: { slug: this.category.slug }})
	}
	}
}
</script>