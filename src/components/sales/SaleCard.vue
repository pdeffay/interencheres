<template>

 <v-card
    class="mx-auto my-12"
    max-width="374"
    @click="ooo"
  >
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

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text>
      <div>{{ item.description }}</div>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'SaleCard',
  props: {
    item: Object
  },

  methods: {
    ooo() {
      this.$router.push({name:"sale", params: { id: this.item.id }})
    }
  }
}
</script>
