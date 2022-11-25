<template>
  <v-app id="app">
    <div v-konami="easterEgg"></div>
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

    <!-- Modale Easter Egg -->
    <v-dialog transition="dialog-top-transition" max-width="600" v-model="show">
      <template v-slot:default="dialog">
        <v-card>
          <iframe
            src="https://giphy.com/embed/tlGD7PDy1w8fK"
            width="600"
            height="500"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/happy-the-office-surprised-tlGD7PDy1w8fK"></a>
          </p>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
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
  data() {
    return {
      show: false,
    };
  },
  methods: {
    redirectToNewSale() {
      this.$router.push({ name: "add" });
    },
    easterEgg() {
      this.show = true;
    },
  },
};
</script>
