<template>
  <v-card
    class="mx-auto"
    :class="cardClasses"
    @click="onItemClicked"
  >
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate />
    </template>

    <v-img height="250" :src="imgURL"></v-img>

    <v-card-title>
      <div v-html="highlightTitle"></div>
    </v-card-title>
    <v-card-text>
      {{ item.price }} €
    </v-card-text>
    <v-card-text>
      <div v-html="highlightDescription"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: Object,
    searchedString: String,
    isItemSelected: Boolean,
    selectedItemIds: [],
    selectable: { type: Boolean, default: false }
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    imgURL() {
      return require(`@/assets/img/${this.item.img}.webp`);
    },
    highlightDescription() {
      if (!this.searchedString) {
        return this.item.description;
      }
      return this.item.description.replace(
        new RegExp(this.searchedString, "gi"),
        (match) => {
          return '<span class="highlightText">' + match + "</span>";
        }
      );
    },
    cardClasses() {
      let classes = "";
      this.isActive ? classes += 'selected ' : classes += 'not-selected ';
      this.selectable ? classes += 'clickable' : classes += 'not-clickable';

      return classes;
    },
    highlightTitle() {
      if (!this.searchedString) {
        return this.item.title;
      }
      return this.item.title.replace(new RegExp(this.searchedString, "gi"), (match) => {
        return '<span class="highlightText">' + match + "</span>";
      });
    },
  },
  watch: {
    selectedItemIds: {
      handler(value) {
        for (var i = 0; i < value.length; i++) {
          if (value[i] === this.item.id) {
            this.isActive = true;
            return;
          }
        }
        this.isActive = false;
      },
    },
  },
  methods: {
    onItemClicked() {
      this.$emit("onItemClick", this.item);
    },
  },
};
</script>
<style lang="scss">
.highlightText {
  color: red;
}

.selected.v-card {
  box-shadow: 10px 10px 5px -5px rgba(167, 255, 169, 1),
    0 2px 2px 0 rgba(116, 211, 39, 0.14), 0 1px 5px 0 rgb(0 0 0 / 12%) !important;
}
.selected {
  color: green !important;
}

.not-clickable {
  cursor: initial !important;
}
</style>
