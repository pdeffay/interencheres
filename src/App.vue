<template>
  <v-app id="app">
    <v-app-bar max-height="65">
      <Header />
    </v-app-bar>
    <v-btn
      fab
      large
      dark
      fixed
      bottom
      left
      class="v-btn--example"
      @click="redirectToNewSale"
    >
    <v-icon>mdi-plus</v-icon>
    </v-btn>
    <router-view :key="$route.fullPath"></router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {
    redirectToNewSale() {
      this.$router.push({ name: "add" });
    },
  }
};
</script>
