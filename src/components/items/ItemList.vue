<template>
	<div class="block">
		<v-container>
			<h2 class="text-center">Lots</h2>
			<v-row>
				<v-col v-for="item of items" :key="item.id"  class="d-flex child-flex" cols="6" sm="4">
					<ItemCard :item="item" :searchedString="searchedString" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import ItemCard from '@/components/items/ItemCard.vue';

export default {
  name: 'ItemList',
	components: {
		ItemCard
	},
	props: {
		items: [],
		searchedString: String
	},
}
</script>