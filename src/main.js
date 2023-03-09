import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Maska from 'maska'

import { loadFonts } from './plugins/webfontloader'
import './assets/styles/main.scss';

createApp(App).use(Maska)
loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
