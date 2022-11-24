<template>
  <v-app>
    <v-app-bar max-height="65">
      <Header />
    </v-app-bar>

    <router-view></router-view>

    <Footer />
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
};
</script>
