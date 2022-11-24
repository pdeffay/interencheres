<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>Interencheres 2</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model.trim="searchText"
        dense
        filled
        rounded
        clearable
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        class="shrink expanding-search"
        :class="{ closed: searchBoxClosed && !searchText }"
        @keyup.enter="onSearch"
        @focus="searchBoxClosed = false"
        @blur="searchBoxClosed = true"
      >
      </v-text-field>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/">Acceuil</router-link></v-btn>
        <v-btn text><router-link to="/sales">Ventes</router-link></v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Acceuil</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/sales">Ventes</router-link></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      group: null,
      searchText: null,
      searchBoxClosed: false,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    onSearch() {
      this.$router.push({ path: "/search", query: { search: this.searchText } }).catch(() => {});
    },
  },
};
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
