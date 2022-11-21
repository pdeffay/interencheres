<template>
  <div>
    <v-app-bar dark app>
			<v-toolbar-title>Interencheres 2</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-text-field v-model.trim="searchText" dense filled rounded clearable placeholder="Search" prepend-inner-icon="mdi-magnify" class="pt-6 shrink expanding-search" :class="{ closed: searchBoxClosed && !searchText }" @keyup.enter="onSearch" @focus="searchBoxClosed = false" @blur="searchBoxClosed = true"></v-text-field>
		</v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: false,
      group: null,
      searchText: null,
		  searchBoxClosed: false
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  methods: {
    onSearch() {
      this.$router.push({path:"/search", query: { search: this.searchText }});
    }
  }
}
</script>

<style lang="scss">
.v-input.expanding-search {
  margin-top: 26px !important;
  transition: max-width 0.5s;
  .v-icon {
    padding-right: 10px;
  }
}
.v-input.expanding-search.closed {
  max-width: 70px;
}
</style>