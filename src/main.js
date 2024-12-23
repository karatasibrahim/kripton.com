/* eslint-disable import/order */
import '@/@fake-db/db'
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import ability from '@/plugins/casl/ability'
import i18n from '@/plugins/i18n'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import { abilitiesPlugin } from '@casl/vue'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue' 
import store from './store'
 

 
loadFonts() 

// Create vue app
const app = createApp(App)


// Use plugins
app.use(vuetify)
app.use(createPinia()) 
app.use(router)
app.use(layoutsPlugin)
app.use(i18n)
app.use(store)

app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
})

//app.use(store).mount('#app')
// Mount vue app
// createApp(App).use(store).mount('#app')
app.mount('#app')  
