import Vue from 'vue';
import axios from "axios";
import router from "./router";
import App from './App.vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
