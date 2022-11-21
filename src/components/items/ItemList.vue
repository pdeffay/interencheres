<template>
<ul>
    <li v-for="item of items" :key="item.id">
      <ItemCard :item="item"  />
    </li>
</ul>

</template>

<script>
import ItemCard from './ItemCard.vue'
export default {
  name: 'ItemList',
	components: {
		ItemCard
	},
	props: {
		items: []
	},
}
</script>