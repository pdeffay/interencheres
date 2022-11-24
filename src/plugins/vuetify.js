
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        light: true,
        themes: {
          light: {
  
            // Color is applied to selected drop down item
            primary: '#000',
            
            // Uncomment this to make things worse
            // 'primary--text': '#FF00FF'
          }
        }
      }
    
}

export default new Vuetify(opts)
