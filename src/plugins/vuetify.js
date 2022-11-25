
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        light: true,
        themes: {
          light: {
            primary: '#000'
          }
        }
      }
    
}

export default new Vuetify(opts)
