import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuesax/dist/vuesax.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(store).use(router).mount('#app')
