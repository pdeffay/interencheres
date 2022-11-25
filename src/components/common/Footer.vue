<template>
  <v-container>
    <v-footer padless>
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <v-icon size="24px"> {{ icon }}</v-icon>
            </a>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0"
          >Par pitié ne m'envoyez pas votre horde d'avocat à mes trousses, oui j'ai volé
          toutes vos images sur votre site, oui le nom du site est allégrement pompé sur
          le votre mais je n'ai pas d'argent pour me payer un avocat. Ceci n'est qu'un
          exercice, ayez pitié de moi je voulais bien simplement bien faire.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Interencheres 2</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram",
      ],
    };
  },
};
</script>
<style>
a {
  text-decoration: none; /* no underline */
}
</style>
