<template>
  <v-form  ref="form" v-model="valid">
    <v-container class="vcontainer">
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="title"
            :rules="nameRules"
            label="Titre"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="description"
            :rules="nameRules"
            label="Description"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        <v-checkbox
          v-model="checkbox"
          label="Live ?"
          required
        ></v-checkbox>
         </v-col>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { salesService } from "@/api/SalesService";
export default {
  name: 'Add',
  data() {
    return {
      valid: false,
      title: '',
      description: '',
      checkbox: false,
      nameRules: [
        v => !!v || 'Un titre est requis',
        v => v.length >= 2 || 'Name must be less than 10 characters',
      ]
    }
  },
  methods: {
    async validate () {
      const sale = {
        title: this.title,
        description: this.description,
        live: this.checkbox
      }
      await salesService.postSale(sale);
    },
  }
}
</script>
<style>
.vcontainer {
  background: white;
  color: white;
}
</style>