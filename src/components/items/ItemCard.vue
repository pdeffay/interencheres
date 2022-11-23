<template>
  <v-card class="mx-auto">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate />
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>
      <div v-html="highlightTitle"></div>
    </v-card-title>

    <v-card-text>
      <div v-html="highlightDescription"></div>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: Object,
    searchedString: String
  },
  computed: {
    highlightDescription() {
      if(!this.searchedString) {
        return this.item.description;
      }
      return this.item.description.replace(new RegExp(this.searchedString, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
      });
    },
    highlightTitle() {
      if(!this.searchedString) {
        return this.item.title;
      }
      return this.item.title.replace(new RegExp(this.searchedString, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
      });
    }
  },
  methods: {
    
  }
}
</script>
<style>
.highlightText {
  color: red
}
</style>