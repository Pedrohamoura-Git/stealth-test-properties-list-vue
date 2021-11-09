/** @format */

import { createApp } from 'vue'

// Modules & Components
import App from './App.vue'
import store from './store/store'

createApp(App).use(store).mount('#app')
