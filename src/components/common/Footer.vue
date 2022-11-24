<template>
  <div></div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
      items: ["default", "absolute", "fixed"],
      padless: true,
      variant: "absolute",
    };
  },
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
