import Vue from 'vue';
import router from "./router";
import store from "./store";
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import VueKonami from 'vue-konami'

import '@/assets/scss/main.scss';

Vue.use(VueKonami);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
