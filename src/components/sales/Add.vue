<template>
  <div class="block">
    <v-snackbar :timeout="2000" :value="alert" absolute bottom tile color="red accent-2">
      Veuillez sélectionner au moins un lot !
    </v-snackbar>
    <v-container>
      <h2 class="text-center">Ajouter une nouvelle vente</h2>
      <v-form ref="form" v-model="valid">
        <v-container>
          <v-row>
            <v-row>
              <v-col sm="12" xl="6">
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
                    :rules="titleRules"
                    label="Titre"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="description"
                    :rules="descriptionRules"
                    label="Description"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    :items="formatedCategories"
                    v-model="selectedCategory"
                    label="Catégorie"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="city"
                    :rules="cityRules"
                    :error-messages="errors"
                    label="Ville"
                    required
                  />
                </v-col>
              </v-col>
              <v-col class="d-flex justify-center" cols="12" sm="12" xl="6">
                <v-date-picker
                  v-model="date"
                  locale="FR-fr"
                  :min="new Date().toISOString().substr(0, 10)"
                  class="mt-4"
                ></v-date-picker>
              </v-col>
            </v-row>
          </v-row>
          <v-row class="d-flex justify-center py-5">
            <v-col cols="12">
              <h4 class="text-left">Ajouter des lots</h4>
              <v-container>
                <v-row>
                  <v-col
                    v-for="item of availableItems"
                    :key="item.id"
                    class="d-flex child-flex"
                    cols="6"
                    sm="4"
                    :rules="itemsRule"
                  >
                    <ItemCard
                      :item="item"
                      :selectedItemIds="itemIds"
                      :selectable="true"
                      @onItemClick="onItemClick"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-btn :disabled="!valid" color="success" class="mt-5" @click="validate">
              Valider
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { salesService } from "@/api/SalesService";
import { itemsService } from "@/api/ItemsService";
import { categoriesService } from "@/api/CategoriesService";
import { gouvService } from "@/api/GouvService";
import ItemCard from "@/components/items/ItemCard.vue";

export default {
  name: "Add",
  components: {
    ItemCard,
  },
  data() {
    return {
      availableItems: [],
      selectedItems: [],
      valid: false,
      title: "",
      description: "",
      selectedCategory: 1,
      itemIds: [],
      checkbox: false,
      titleRules: [
        (v) => !!v || "Un titre est requis",
        (v) => v.length >= 2 || "Le titre doit avoir plus de 2 caractères",
      ],
      descriptionRules: [
        (v) => !!v || "Une description est requise",
        (v) => v.length >= 10 || "La description doit avoir plus de 10 caractères",
      ],
      itemsRule: [(v) => v.length > 0 || "AU moins un lot doit être sélectionné"],
      cityRules: [(v) => !!v || "Une nom de ville est requis"],
      model: [],
      categories: [],
      date: new Date().toISOString().substr(0, 10),
      city: "",
      errors: [],
      alert: false,
    };
  },
  computed: {
    ...mapGetters({
      getCategoryList: "categoriesModule/getCategoryList",
    }),
    formatedCategories() {
      return this.categories.map((category) => {
        return {
          value: category.id,
          text: category.title,
        };
      });
    },
  },
  watch: {
    city: {
      async handler(val) {
        // TODO : Utiliser un debounce pour ne pas envoyer de requête à chaque saisie
        this.errors = ["Cette ville n'existe pas"];
        const cities = await gouvService.fetchCities(val.trim());
        const foundCity = cities.data.find(
          (city) => city.nom.toUpperCase() === val.toUpperCase().trim()
        );
        if (foundCity) {
          this.errors = [];
        }
      },
    },
    itemIds: {
      handler(value) {
        value.length > 0 ? this.valid && true : this.valid && false;
      },
    },
  },
  async beforeMount() {
    this.categories = this.getCategoryList;
    if (this.categories.length === 0) {
      this.categories = await categoriesService.fetchCategories();
    }
    this.availableItems = await itemsService.fetchAvailableItems();
  },
  methods: {
    isInItemsArray(itemId) {
      for (var i = 0; i < this.itemIds.length; i++) {
        if (this.itemIds[i] === itemId) {
          return true;
        }
      }
      return false;
    },
    async validate() {
      if (this.itemIds.length === 0) {
        this.alert = true;
        return;
      }
      const sale = {
        title: this.title,
        description: this.description,
        item_ids: this.itemIds,
        category_id: this.selectedCategory,
        city: this.city,
        date: this.date,
      };
      const addedSale = await salesService.postSale(sale);
      if (addedSale.status === 201) {
        this.$router.push({ name: "sale", params: { id: addedSale.data.id } });
      }
    },
    onItemClick(item) {
      const itemId = item.id;
      if (!this.isInItemsArray(itemId)) {
        this.itemIds.push(itemId);
      } else {
        const index = this.itemIds.indexOf(itemId);
        if (index > -1) {
          this.itemIds.splice(index, 1);
        }
      }
    },
  },
};
</script>
