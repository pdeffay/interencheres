import Vue from "vue";
import Vuex from "vuex";
import sales from "@/store/modules/sales";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    salesModule: sales
  },
  strict: debug
});