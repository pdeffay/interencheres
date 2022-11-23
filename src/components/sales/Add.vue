<template>
  <div class="block">
    <v-container>
      <h2 class="text-center">Ajouter une nouvelle vente</h2>
      <v-form  ref="form" v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="title" :rules="nameRules" label="Titre" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="description" :rules="nameRules" label="Description" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <h4 class="text-left">Ajouter des lots</h4>
              <v-card>
                <v-list>
                  <v-list-item-group v-model="model" multiple color="green">
                    <v-list-item v-for="(item, i) in availableItems" :key="i">
                        <ItemCard :item="item" is-selectable=""/>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
              Validate
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { salesService } from "@/api/SalesService";
import { itemsService } from "@/api/ItemsService";

import ItemCard from "@/components/items/ItemCard.vue";
export default {
  name: 'Add',
  components: {
    ItemCard
  },
  data() {
    return {
      availableItems: [],
      valid: false,
      title: '',
      description: '',
      itemIds: [],
      checkbox: false,
      nameRules: [
        v => !!v || 'Un titre est requis',
        v => v.length >= 2 || 'Name must be less than 10 characters',
      ],
      model: []
    }
  },
  async beforeMount() {
    this.availableItems = await itemsService.fetchItems();
  },  
  methods: {
    async validate () {
      const sale = {
        title: this.title,
        description: this.description,
        item_ids: this.itemIds
      }
      await salesService.postSale(sale);
    },
  }
}
</script>